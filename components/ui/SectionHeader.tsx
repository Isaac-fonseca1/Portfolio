"use client";

import { motion, useReducedMotion } from "framer-motion";
import { cn } from "@/lib/utils";
import type { ReactNode } from "react";

interface SectionHeaderProps {
  eyebrow: string;
  title: ReactNode;
  lede?: ReactNode;
  align?: "left" | "center";
  className?: string;
}

export function SectionHeader({
  eyebrow,
  title,
  lede,
  align = "left",
  className,
}: SectionHeaderProps) {
  const prefersReduced = useReducedMotion();

  const initial = prefersReduced ? false : { opacity: 0, y: 14 };
  const whileInView = { opacity: 1, y: 0 };

  return (
    <div
      className={cn(
        "max-w-2xl",
        align === "center" && "mx-auto text-center",
        className
      )}
    >
      <motion.p
        initial={initial}
        whileInView={whileInView}
        viewport={{ once: true, margin: "-80px" }}
        transition={{ duration: 0.5 }}
        className="eyebrow mb-5 flex items-center gap-3"
      >
        {align === "left" && <span aria-hidden className="h-px w-8 bg-fg" />}
        {eyebrow}
      </motion.p>
      <motion.h2
        initial={initial}
        whileInView={whileInView}
        viewport={{ once: true, margin: "-80px" }}
        transition={{ duration: 0.55, delay: 0.05 }}
        className="text-4xl md:text-5xl lg:text-[56px] leading-[1.05] tracking-[-0.02em] font-medium text-fg"
      >
        {title}
      </motion.h2>
      {lede && (
        <motion.p
          initial={initial}
          whileInView={whileInView}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.55, delay: 0.1 }}
          className="mt-6 text-lg md:text-xl leading-relaxed text-fg-muted"
        >
          {lede}
        </motion.p>
      )}
    </div>
  );
}
