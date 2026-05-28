"use client";

import { motion, useReducedMotion } from "framer-motion";
import { Container } from "@/components/ui/Container";
import { useLanguage } from "@/context/LanguageContext";
import { useCountUp } from "@/lib/useCountUp";

interface StatItem {
  value: string;
  label: string;
}

function StatCell({ item, index }: { item: StatItem; index: number }) {
  const { ref, display } = useCountUp<HTMLLIElement>(item.value, { durationMs: 1500 });
  const prefersReduced = useReducedMotion();

  return (
    <motion.li
      ref={ref}
      initial={prefersReduced ? false : { opacity: 0, y: 18 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{ duration: 0.55, delay: index * 0.07 }}
      className="relative p-6 md:p-10 min-h-[200px] md:min-h-[260px] flex flex-col justify-between group/stat overflow-hidden"
      style={{ backgroundColor: "var(--accent)" }}
    >
      {/* hover shimmer */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 opacity-0 group-hover/stat:opacity-100 transition-opacity duration-500"
        style={{
          background:
            "radial-gradient(circle at var(--mx,50%) var(--my,50%), rgba(255,255,255,0.08), transparent 50%)",
        }}
      />
      <span className="relative font-mono text-[10px] tracking-[0.22em] text-white/55 uppercase">
        0{index + 1}
      </span>
      <div className="relative">
        <p
          className="text-[64px] sm:text-[80px] md:text-[112px] leading-none tracking-[-0.04em] font-medium tabular-nums"
          style={{ fontFeatureSettings: '"tnum" 1, "ss01" 1' }}
        >
          {display}
        </p>
        <p className="mt-4 text-sm md:text-[15px] text-white/75 leading-snug max-w-[28ch]">
          {item.label}
        </p>
      </div>
    </motion.li>
  );
}

export function Stats() {
  const { t } = useLanguage();

  return (
    <section
      id="stats"
      className="relative overflow-hidden py-20 md:py-28"
      style={{ backgroundColor: "var(--accent)", color: "#FAFAFA" }}
      aria-label={t.stats.eyebrow}
    >
      {/* Manchas de luz */}
      <motion.div
        aria-hidden
        animate={{ x: [0, 30, 0], y: [0, -20, 0] }}
        transition={{ duration: 18, repeat: Infinity, ease: "easeInOut" }}
        className="absolute -top-32 -right-32 w-[600px] h-[600px] rounded-full blur-[120px] opacity-40"
        style={{ backgroundColor: "#1e6bff" }}
      />
      <motion.div
        aria-hidden
        animate={{ x: [0, -40, 0], y: [0, 30, 0] }}
        transition={{ duration: 22, repeat: Infinity, ease: "easeInOut" }}
        className="absolute -bottom-40 -left-40 w-[500px] h-[500px] rounded-full blur-[140px] opacity-30"
        style={{ backgroundColor: "#0030a0" }}
      />

      {/* Grade sutil */}
      <div
        aria-hidden
        className="absolute inset-0 opacity-[0.08] pointer-events-none"
        style={{
          backgroundImage:
            "linear-gradient(to right, #fff 1px, transparent 1px), linear-gradient(to bottom, #fff 1px, transparent 1px)",
          backgroundSize: "80px 80px",
        }}
      />

      <Container size="wide" className="relative">
        <div className="flex items-baseline justify-between flex-wrap gap-6 mb-14">
          <p className="font-mono text-[11px] tracking-[0.22em] uppercase text-white/70 flex items-center gap-3">
            <span aria-hidden className="h-px w-12 bg-white/50" />
            {t.stats.eyebrow}
          </p>
          <p className="text-lg md:text-xl font-serif italic text-white max-w-md md:text-right md:ml-auto">
            {t.stats.lede}
          </p>
        </div>

        <ul className="grid grid-cols-2 lg:grid-cols-4 gap-px bg-white/15 border border-white/15">
          {t.stats.items.map((item, idx) => (
            <StatCell key={item.label} item={item} index={idx} />
          ))}
        </ul>
      </Container>
    </section>
  );
}
