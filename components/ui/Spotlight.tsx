"use client";

import { useEffect, useRef, useState } from "react";

/**
 * Mancha cobalto sutil que segue o cursor em telas pointer:fine.
 * Não interfere com cliques (pointer-events-none) e respeita prefers-reduced-motion.
 */
export function Spotlight() {
  const ref = useRef<HTMLDivElement | null>(null);
  const [enabled, setEnabled] = useState(false);

  useEffect(() => {
    const supportsHover = window.matchMedia?.("(hover: hover) and (pointer: fine)").matches;
    const reduced = window.matchMedia?.("(prefers-reduced-motion: reduce)").matches;
    if (!supportsHover || reduced) return;

    setEnabled(true);

    let raf = 0;
    let tx = window.innerWidth / 2;
    let ty = window.innerHeight / 3;
    let cx = tx;
    let cy = ty;

    const onMove = (e: PointerEvent) => {
      tx = e.clientX;
      ty = e.clientY;
    };

    const loop = () => {
      // easing: aproxima o ponto atual do alvo a 12% por frame
      cx += (tx - cx) * 0.12;
      cy += (ty - cy) * 0.12;
      if (ref.current) {
        ref.current.style.transform = `translate3d(${cx - 300}px, ${cy - 300}px, 0)`;
      }
      raf = requestAnimationFrame(loop);
    };

    window.addEventListener("pointermove", onMove, { passive: true });
    raf = requestAnimationFrame(loop);
    return () => {
      window.removeEventListener("pointermove", onMove);
      cancelAnimationFrame(raf);
    };
  }, []);

  if (!enabled) return null;

  return (
    <div
      ref={ref}
      aria-hidden
      className="pointer-events-none fixed left-0 top-0 z-[1] h-[600px] w-[600px] rounded-full opacity-[0.18] blur-[110px] mix-blend-multiply"
      style={{
        background:
          "radial-gradient(circle, rgba(0,82,255,0.55), rgba(0,82,255,0.18) 40%, transparent 70%)",
        willChange: "transform",
      }}
    />
  );
}
