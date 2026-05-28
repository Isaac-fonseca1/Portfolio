"use client";

import { motion, useReducedMotion } from "framer-motion";
import { Container } from "@/components/ui/Container";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { useLanguage } from "@/context/LanguageContext";

/** Split em "—" para colocar a segunda parte em serif italic. */
function splitOnEmDash(text: string): [string, string | null] {
  const idx = text.indexOf("—");
  if (idx === -1) return [text, null];
  return [text.slice(0, idx).trim(), text.slice(idx + 1).trim()];
}

export function Pain() {
  const { t } = useLanguage();
  const prefersReduced = useReducedMotion();

  const [head, tail] = splitOnEmDash(t.pain.title);

  return (
    <section id="pain" className="py-24 md:py-32 border-t border-border">
      <Container size="wide">
        <SectionHeader
          eyebrow={t.pain.eyebrow}
          title={
            <>
              {head}
              {tail && (
                <>
                  {" — "}
                  <span className="accent-serif text-fg-muted">{tail}</span>
                </>
              )}
            </>
          }
          lede={t.pain.lede}
        />

        <ul className="mt-16 md:mt-20 grid gap-px bg-border border border-border md:grid-cols-3">
          {t.pain.points.map((point, idx) => (
            <motion.li
              key={point.title}
              initial={prefersReduced ? false : { opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.55, delay: idx * 0.08 }}
              className="bg-bg p-8 md:p-10"
            >
              <span className="font-mono text-[11px] tracking-[0.18em] text-fg-subtle uppercase">
                0{idx + 1}
              </span>
              <h3 className="mt-6 text-xl md:text-2xl font-medium tracking-tight text-fg leading-snug">
                {point.title}
              </h3>
              <p className="mt-4 text-fg-muted leading-relaxed">{point.body}</p>
            </motion.li>
          ))}
        </ul>
      </Container>
    </section>
  );
}
