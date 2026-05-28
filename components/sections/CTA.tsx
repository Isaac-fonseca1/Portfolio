"use client";

import { motion, useReducedMotion } from "framer-motion";
import { ArrowUpRight, Mail } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { LinkButton } from "@/components/ui/Button";
import { useLanguage } from "@/context/LanguageContext";
import { site, whatsappUrl } from "@/data/site";

export function CTA() {
  const { t, locale } = useLanguage();
  const prefersReduced = useReducedMotion();

  return (
    <section
      id="contact"
      className="invert-section py-28 md:py-40 relative overflow-hidden"
    >
      {/* Acento de luz sutil */}
      <div
        aria-hidden
        className="absolute -top-40 left-1/2 -translate-x-1/2 w-[800px] h-[400px] rounded-full blur-[140px] opacity-30"
        style={{ background: "var(--accent)" }}
      />

      <Container size="wide" className="relative">
        <motion.p
          initial={prefersReduced ? false : { opacity: 0, y: 14 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.5 }}
          className="eyebrow text-muted flex items-center gap-3"
          style={{ color: "rgba(250,250,250,0.6)" }}
        >
          <span aria-hidden className="h-px w-10 bg-white/40" />
          {t.cta.eyebrow}
        </motion.p>

        <motion.h2
          initial={prefersReduced ? false : { opacity: 0, y: 18 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.6, delay: 0.05 }}
          className="mt-8 max-w-[18ch] text-5xl md:text-7xl lg:text-[88px] leading-[1.02] tracking-[-0.03em] font-medium"
        >
          {t.cta.title}
        </motion.h2>

        <motion.p
          initial={prefersReduced ? false : { opacity: 0, y: 18 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="mt-8 max-w-2xl text-lg md:text-xl leading-relaxed"
          style={{ color: "rgba(250,250,250,0.7)" }}
        >
          {t.cta.lede}
        </motion.p>

        <motion.div
          initial={prefersReduced ? false : { opacity: 0, y: 18 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.6, delay: 0.15 }}
          className="mt-12 flex flex-col sm:flex-row gap-3"
        >
          <LinkButton
            href={whatsappUrl(locale)}
            target="_blank"
            rel="noopener noreferrer"
            size="lg"
            iconRight={<ArrowUpRight className="h-4 w-4" />}
            className="bg-white text-fg hover:bg-zinc-200"
          >
            {t.cta.primary}
          </LinkButton>
          <LinkButton
            href={`mailto:${site.email}`}
            size="lg"
            variant="secondary"
            iconLeft={<Mail className="h-4 w-4" />}
            className="border-white/25 text-white hover:bg-white/10 hover:border-white/60"
          >
            {t.cta.mailLabel}
          </LinkButton>
        </motion.div>
      </Container>
    </section>
  );
}
