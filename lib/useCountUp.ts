"use client";

import { useEffect, useRef, useState } from "react";

/**
 * Anima um número de 0 ao alvo quando o elemento entra na viewport.
 * Aceita strings com formato (sufixo como "%", "+") — extrai o número, anima,
 * e devolve string preservando o formato original.
 */
export function useCountUp<T extends Element = HTMLElement>(
  target: string,
  options?: { durationMs?: number }
) {
  const { durationMs = 1400 } = options ?? {};
  const ref = useRef<T | null>(null);
  const [display, setDisplay] = useState<string>(() => formatInitial(target));
  const triggeredRef = useRef(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const reducedMotion = window.matchMedia?.("(prefers-reduced-motion: reduce)").matches;
    if (reducedMotion) {
      setDisplay(target);
      return;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting && !triggeredRef.current) {
            triggeredRef.current = true;
            animate(target, durationMs, setDisplay);
          }
        }
      },
      { threshold: 0.4 }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, [target, durationMs]);

  return { ref, display };
}

function formatInitial(target: string): string {
  // Pré-renderiza com "0" + sufixo pra evitar layout shift na primeira pintura
  const { numeric, suffix } = parseValue(target);
  if (numeric == null) return target;
  return `0${suffix}`;
}

function parseValue(raw: string): { numeric: number | null; suffix: string } {
  // Captura número inteiro/decimal + tudo que vier depois (sufixo)
  const match = raw.match(/^([0-9]+(?:[.,][0-9]+)?)(.*)$/);
  if (!match) return { numeric: null, suffix: raw };
  const numeric = Number(match[1].replace(",", "."));
  return { numeric: Number.isFinite(numeric) ? numeric : null, suffix: match[2] };
}

function animate(target: string, durationMs: number, setDisplay: (s: string) => void) {
  const { numeric, suffix } = parseValue(target);
  if (numeric == null) {
    setDisplay(target);
    return;
  }
  const targetNumeric = numeric;

  const start = performance.now();
  const ease = (t: number) => 1 - Math.pow(1 - t, 4); // ease-out quartic

  function tick(now: number) {
    const elapsed = now - start;
    const t = Math.min(1, elapsed / durationMs);
    const eased = ease(t);
    const current = targetNumeric * eased;

    // Mantém precisão visual coerente com o alvo
    const decimals = target.includes(",") || target.includes(".") ? 1 : 0;
    const out = `${current.toFixed(decimals)}${suffix}`.replace(".", decimals > 0 ? "," : "");
    setDisplay(out);

    if (t < 1) requestAnimationFrame(tick);
    else setDisplay(target); // garante o alvo exato
  }

  requestAnimationFrame(tick);
}
