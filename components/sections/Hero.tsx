"use client";

import { motion, useReducedMotion } from "framer-motion";
import { ArrowDown, ArrowUpRight } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { LinkButton } from "@/components/ui/Button";
import { useLanguage } from "@/context/LanguageContext";
import { whatsappUrl } from "@/data/site";

export function Hero() {
  const { t, locale } = useLanguage();
  const prefersReduced = useReducedMotion();

  const animate = (delay = 0) =>
    prefersReduced
      ? {}
      : {
          initial: { opacity: 0, y: 18 },
          animate: { opacity: 1, y: 0 },
          transition: {
            duration: 0.8,
            delay,
            ease: [0.22, 1, 0.36, 1] as const,
          },
        };

  return (
    <section
      id="top"
      className="relative pt-32 pb-20 md:pt-40 md:pb-28 overflow-hidden"
    >
      {/* Grid sutil de fundo */}
      <div
        aria-hidden
        className="absolute inset-0 grid-overlay pointer-events-none"
      />

      {/* Watermark gigante "ISAAC" no canto, com clip-path para sumir nas bordas */}
      <div
        aria-hidden
        className="pointer-events-none absolute -bottom-10 -right-6 md:-bottom-20 md:-right-10 select-none"
      >
        <p
          className="font-serif italic leading-none"
          style={{
            fontSize: "clamp(180px, 28vw, 420px)",
            color: "transparent",
            WebkitTextStroke: "1px rgba(10,10,10,0.06)",
            letterSpacing: "-0.05em",
          }}
        >
          isaac.
        </p>
      </div>

      <Container size="wide" className="relative">
        <div className="grid lg:grid-cols-12 gap-10 items-end">
          <div className="lg:col-span-9">
            <motion.p {...animate(0)} className="eyebrow flex items-center gap-3">
              <span aria-hidden className="h-px w-10 bg-fg" />
              {t.hero.eyebrow}
            </motion.p>

            <motion.h1
              {...animate(0.08)}
              className="mt-8 text-[52px] sm:text-7xl md:text-8xl lg:text-[112px] xl:text-[128px] leading-[0.95] tracking-[-0.04em] font-medium text-fg"
            >
              <span className="block">{t.hero.titlePre}</span>
              <span className="block accent-serif text-accent">
                {t.hero.titleAccent}
              </span>
              <span className="text-fg">{t.hero.titlePost}</span>
            </motion.h1>
          </div>

          <motion.div
            {...animate(0.2)}
            className="lg:col-span-3 lg:pb-4"
          >
            <div className="border-l-2 border-accent pl-5 max-w-[240px]">
              <p className="font-mono text-[10px] tracking-[0.22em] uppercase text-fg-subtle">
                {t.hero.badge.label}
              </p>
              <p className="mt-2 text-5xl md:text-6xl font-medium tracking-tight text-fg">
                {t.hero.badge.year}
              </p>
              <p className="mt-3 text-sm text-fg-muted leading-snug">
                {t.hero.badge.note}
              </p>
            </div>
          </motion.div>
        </div>

        <motion.p
          {...animate(0.18)}
          className="mt-12 max-w-3xl text-lg md:text-xl leading-relaxed text-fg-muted"
        >
          {t.hero.lede}
        </motion.p>

        <motion.div
          {...animate(0.26)}
          className="mt-10 flex flex-col sm:flex-row items-stretch sm:items-center gap-3"
        >
          <LinkButton
            href={whatsappUrl(locale)}
            target="_blank"
            rel="noopener noreferrer"
            size="lg"
            iconRight={<ArrowUpRight className="h-4 w-4" />}
          >
            {t.hero.ctaPrimary}
          </LinkButton>
          <LinkButton
            href="#cases"
            size="lg"
            variant="secondary"
            iconRight={<ArrowDown className="h-4 w-4" />}
          >
            {t.hero.ctaSecondary}
          </LinkButton>
        </motion.div>

        <motion.div
          {...animate(0.32)}
          className="mt-16 md:mt-20 flex items-center gap-4 text-sm text-fg-subtle"
        >
          <span aria-hidden className="relative flex h-2 w-2">
            <span className="absolute inline-flex h-full w-full rounded-full bg-emerald-500 opacity-60 animate-ping" />
            <span className="relative inline-flex h-2 w-2 rounded-full bg-emerald-500" />
          </span>
          <span className="font-mono text-[11px] tracking-[0.18em] uppercase">
            {t.hero.socialProof}
          </span>
        </motion.div>
      </Container>
    </section>
  );
}
