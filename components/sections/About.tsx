"use client";

import Image from "next/image";
import { motion, useReducedMotion } from "framer-motion";
import { Container } from "@/components/ui/Container";
import { useLanguage } from "@/context/LanguageContext";

export function About() {
  const { t } = useLanguage();
  const prefersReduced = useReducedMotion();

  const fadeUp = (delay = 0) =>
    prefersReduced
      ? {}
      : ({
          initial: { opacity: 0, y: 18 },
          whileInView: { opacity: 1, y: 0 },
          viewport: { once: true, margin: "-80px" },
          transition: { duration: 0.6, delay, ease: [0.22, 1, 0.36, 1] as const },
        } as const);

  return (
    <section id="about" className="py-24 md:py-32 border-t border-border">
      <Container size="wide">
        <div className="grid gap-12 md:gap-16 lg:grid-cols-12 items-start">
          {/* Foto + assinatura */}
          <motion.div {...fadeUp(0)} className="lg:col-span-4">
            <div className="relative">
              <div
                aria-hidden
                className="absolute -inset-3 rounded-md"
                style={{
                  background:
                    "linear-gradient(135deg, var(--accent) 0%, transparent 60%)",
                  opacity: 0.18,
                  filter: "blur(20px)",
                }}
              />
              <div className="relative aspect-[4/5] overflow-hidden rounded-sm border border-border bg-bg-elevated">
                <Image
                  src="/profile.jpeg"
                  alt="Isaac Fonseca"
                  fill
                  className="object-cover grayscale-[15%] contrast-[1.02]"
                  sizes="(max-width: 768px) 100vw, 400px"
                  priority={false}
                />
              </div>
              <p className="mt-5 font-mono text-[11px] tracking-[0.22em] uppercase text-fg-subtle">
                {t.about.signature}
              </p>
            </div>
          </motion.div>

          {/* Texto */}
          <div className="lg:col-span-8 lg:pl-8">
            <motion.p {...fadeUp(0)} className="eyebrow flex items-center gap-3">
              <span aria-hidden className="h-px w-10 bg-fg" />
              {t.about.eyebrow}
            </motion.p>

            <motion.h2
              {...fadeUp(0.05)}
              className="mt-6 text-4xl md:text-5xl lg:text-[64px] leading-[1.05] tracking-[-0.025em] font-medium text-fg"
            >
              {t.about.title}
            </motion.h2>

            <div className="mt-8 space-y-6 max-w-2xl">
              {t.about.paragraphs.map((p, i) => (
                <motion.p
                  key={i}
                  {...fadeUp(0.1 + i * 0.06)}
                  className="text-lg text-fg-muted leading-relaxed first:text-xl first:text-fg"
                >
                  {p}
                </motion.p>
              ))}
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
