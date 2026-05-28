"use client";

import { motion, useReducedMotion } from "framer-motion";
import {
  Boxes,
  Workflow,
  Plug,
  Cpu,
  Compass,
  type LucideIcon,
} from "lucide-react";
import { Container } from "@/components/ui/Container";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { useLanguage } from "@/context/LanguageContext";

const iconMap: Record<string, LucideIcon> = {
  saas: Boxes,
  automation: Workflow,
  api: Plug,
  hardware: Cpu,
  consulting: Compass,
};

export function Services() {
  const { t } = useLanguage();
  const prefersReduced = useReducedMotion();

  return (
    <section id="services" className="py-24 md:py-32 border-t border-border">
      <Container size="wide">
        <SectionHeader
          eyebrow={t.services.eyebrow}
          title={t.services.title}
          lede={t.services.lede}
        />

        <ul className="mt-16 md:mt-20 grid gap-px bg-border border border-border md:grid-cols-2 lg:grid-cols-3">
          {t.services.items.map((item, idx) => {
            const Icon = iconMap[item.icon] ?? Boxes;
            return (
              <motion.li
                key={item.title}
                initial={prefersReduced ? false : { opacity: 0, y: 18 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-60px" }}
                transition={{ duration: 0.5, delay: idx * 0.06 }}
                className="group/srv relative bg-bg p-8 md:p-10 min-h-[260px] flex flex-col overflow-hidden"
              >
                {/* halo cobalto no hover */}
                <div
                  aria-hidden
                  className="pointer-events-none absolute inset-0 opacity-0 group-hover/srv:opacity-100 transition-opacity duration-500"
                  style={{
                    background:
                      "radial-gradient(ellipse 60% 80% at 50% 0%, rgba(0,82,255,0.06), transparent 70%)",
                  }}
                />

                <div className="relative flex items-start justify-between">
                  <span
                    aria-hidden
                    className="inline-flex h-11 w-11 items-center justify-center border border-border bg-bg-elevated text-fg group-hover/srv:border-accent group-hover/srv:text-accent transition-colors duration-300"
                  >
                    <Icon className="h-5 w-5" strokeWidth={1.5} />
                  </span>
                  <span className="font-mono text-[10px] tracking-[0.22em] text-fg-subtle uppercase">
                    0{idx + 1}
                  </span>
                </div>

                <h3 className="relative mt-8 text-xl md:text-2xl font-medium tracking-tight text-fg leading-snug">
                  {item.title}
                </h3>
                <p className="relative mt-3 text-[15px] leading-relaxed text-fg-muted">
                  {item.body}
                </p>

                <span
                  aria-hidden
                  className="relative mt-auto pt-8 block h-px w-full bg-border group-hover/srv:bg-accent transition-colors duration-500"
                />
              </motion.li>
            );
          })}
        </ul>
      </Container>
    </section>
  );
}
