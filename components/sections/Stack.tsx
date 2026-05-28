"use client";

import { motion, useReducedMotion } from "framer-motion";
import { Container } from "@/components/ui/Container";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { useLanguage } from "@/context/LanguageContext";

export function Stack() {
  const { t } = useLanguage();
  const prefersReduced = useReducedMotion();

  return (
    <section id="stack" className="py-24 md:py-32 border-t border-border">
      <Container size="wide">
        <SectionHeader
          eyebrow={t.stack.eyebrow}
          title={t.stack.title}
          lede={t.stack.lede}
        />

        <div className="mt-16 md:mt-20 grid gap-x-12 gap-y-14 md:grid-cols-2 lg:grid-cols-4">
          {t.stack.groups.map((group, idx) => (
            <motion.div
              key={group.title}
              initial={prefersReduced ? false : { opacity: 0, y: 14 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.5, delay: idx * 0.05 }}
            >
              <p className="eyebrow flex items-center gap-3 mb-5">
                <span aria-hidden className="h-px w-6 bg-fg" />
                {group.title}
              </p>
              <ul className="space-y-2.5">
                {group.items.map((item) => (
                  <li
                    key={item}
                    className="text-[15px] text-fg leading-tight flex items-baseline gap-3"
                  >
                    <span
                      aria-hidden
                      className="font-mono text-[10px] text-fg-subtle"
                    >
                      ◆
                    </span>
                    {item}
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </Container>
    </section>
  );
}
