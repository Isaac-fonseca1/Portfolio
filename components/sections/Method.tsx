"use client";

import { motion, useReducedMotion } from "framer-motion";
import { Container } from "@/components/ui/Container";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { useLanguage } from "@/context/LanguageContext";

export function Method() {
  const { t } = useLanguage();
  const prefersReduced = useReducedMotion();

  return (
    <section id="method" className="py-24 md:py-32 border-t border-border">
      <Container size="wide">
        <SectionHeader
          eyebrow={t.method.eyebrow}
          title={t.method.title}
          lede={t.method.lede}
        />

        <ol className="mt-16 md:mt-20 grid gap-px bg-border border border-border md:grid-cols-2 lg:grid-cols-4">
          {t.method.steps.map((step, idx) => (
            <motion.li
              key={step.n}
              initial={prefersReduced ? false : { opacity: 0, y: 18 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.5, delay: idx * 0.07 }}
              className="relative bg-bg p-8 md:p-10 min-h-[260px] flex flex-col"
            >
              <span className="font-mono text-[11px] tracking-[0.18em] text-fg-subtle uppercase">
                Etapa {step.n}
              </span>
              <h3 className="mt-6 text-xl md:text-2xl font-medium tracking-tight text-fg">
                {step.title}
              </h3>
              <p className="mt-4 text-[15px] leading-relaxed text-fg-muted">
                {step.body}
              </p>
              <span
                aria-hidden
                className="mt-auto pt-8 font-serif italic text-fg-subtle text-sm"
              >
                {step.n}/{String(t.method.steps.length).padStart(2, "0")}
              </span>
            </motion.li>
          ))}
        </ol>
      </Container>
    </section>
  );
}
