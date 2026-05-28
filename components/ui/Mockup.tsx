"use client";

import { motion, useReducedMotion } from "framer-motion";
import { useEffect, useRef, useState } from "react";
import type { CaseStudy } from "@/data/cases";
import { cn } from "@/lib/utils";

function useInViewOnce<T extends HTMLElement>(threshold = 0.3) {
  const ref = useRef<T | null>(null);
  const [inView, setInView] = useState(false);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const obs = new IntersectionObserver(
      (entries) => entries.forEach((e) => e.isIntersecting && setInView(true)),
      { threshold }
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, [threshold]);
  return { ref, inView };
}

interface MockupProps {
  caseStudy: CaseStudy;
  className?: string;
}

function ChromeBar({ domain }: { domain: string }) {
  return (
    <div className="flex items-center gap-3 px-4 h-9 bg-zinc-50 border-b border-border">
      <div className="flex items-center gap-1.5">
        <span className="h-2.5 w-2.5 rounded-full bg-zinc-300" />
        <span className="h-2.5 w-2.5 rounded-full bg-zinc-300" />
        <span className="h-2.5 w-2.5 rounded-full bg-zinc-300" />
      </div>
      <div className="flex-1 h-5 bg-white border border-border rounded-sm flex items-center justify-center text-[11px] font-mono text-fg-subtle tracking-tight">
        {domain}
      </div>
    </div>
  );
}

function BrowserMockup({ c }: { c: Extract<CaseStudy["mockup"], { kind: "browser" }> & { accent: string } }) {
  return (
    <div className="rounded-lg overflow-hidden border border-border bg-white shadow-[0_30px_80px_-30px_rgba(10,10,10,0.25)]">
      <ChromeBar domain={c.preview.domain} />
      <div className="p-6 md:p-8 min-h-[280px] flex flex-col gap-4">
        <span
          className="inline-flex w-fit items-center gap-1.5 px-2 py-0.5 text-[10px] font-mono tracking-widest uppercase rounded-sm text-white"
          style={{ backgroundColor: c.accent }}
        >
          <span className="h-1.5 w-1.5 rounded-full bg-white/80" />
          Live
        </span>
        <h4 className="text-2xl md:text-3xl font-medium tracking-tight text-fg leading-tight">
          {c.preview.heading}
        </h4>
        <p className="text-sm text-fg-muted">{c.preview.sub}</p>
        <div className="mt-2 flex flex-wrap gap-2">
          {c.preview.chips.map((chip, i) => (
            <span
              key={chip}
              className={cn(
                "text-xs px-3 py-1.5 rounded-sm border font-medium",
                i === 1
                  ? "text-white border-transparent"
                  : "bg-zinc-50 text-fg border-border"
              )}
              style={i === 1 ? { backgroundColor: c.accent } : undefined}
            >
              {chip}
            </span>
          ))}
        </div>
        <div className="mt-auto pt-6 flex items-center gap-2">
          <span className="h-1 w-12 rounded-full bg-fg" />
          <span className="h-1 w-4 rounded-full bg-border-strong" />
          <span className="h-1 w-4 rounded-full bg-border-strong" />
        </div>
      </div>
    </div>
  );
}

function DeviceMockup({ c }: { c: Extract<CaseStudy["mockup"], { kind: "device" }> & { accent: string } }) {
  return (
    <div className="relative mx-auto w-[280px] md:w-[300px]">
      <div className="rounded-[36px] border-[10px] border-fg bg-fg p-1 shadow-[0_30px_80px_-30px_rgba(10,10,10,0.5)]">
        <div className="rounded-[26px] bg-white overflow-hidden">
          {/* Status bar */}
          <div className="h-7 bg-white flex items-center justify-between px-5 text-[10px] font-mono">
            <span>09:42</span>
            <span className="flex gap-1">
              <span className="h-2 w-2 rounded-full bg-fg/60" />
              <span className="h-2 w-2 rounded-full bg-fg/60" />
              <span className="h-2 w-2 rounded-full bg-fg/60" />
            </span>
          </div>
          {/* App content */}
          <div className="px-5 pt-3 pb-6">
            <p className="font-mono text-[10px] tracking-widest uppercase text-fg-subtle">
              PWA · Beira-leito
            </p>
            <h4 className="mt-2 text-2xl font-medium tracking-tight">
              {c.preview.heading}
            </h4>
            <ul className="mt-5 space-y-2.5">
              {c.preview.items.map((item) => (
                <li
                  key={item.label}
                  className="flex items-center justify-between p-3 border border-border rounded-md bg-zinc-50"
                >
                  <span className="flex items-center gap-3 text-sm">
                    <span
                      className="h-2 w-2 rounded-full"
                      style={{ backgroundColor: c.accent }}
                    />
                    {item.label}
                  </span>
                  <span className="text-[11px] font-mono uppercase tracking-wider text-fg-muted">
                    {item.meta}
                  </span>
                </li>
              ))}
            </ul>
            <button
              type="button"
              className="mt-5 w-full h-10 rounded-md text-sm font-medium text-white"
              style={{ backgroundColor: c.accent }}
              disabled
            >
              Registrar visita
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

function DashboardMockup({ c }: { c: Extract<CaseStudy["mockup"], { kind: "dashboard" }> & { accent: string } }) {
  const { ref, inView } = useInViewOnce<HTMLDivElement>(0.3);

  return (
    <div
      ref={ref}
      className="rounded-lg overflow-hidden border border-border bg-white shadow-[0_30px_80px_-30px_rgba(10,10,10,0.25)]"
    >
      <ChromeBar domain="dashboard.local" />
      <div className="p-6 md:p-8 min-h-[280px]">
        <div className="flex items-center justify-between mb-6">
          <p className="font-mono text-[10px] tracking-widest uppercase text-fg-subtle">
            Painel · últimos 30d
          </p>
          <span className="font-mono text-[10px] tracking-wider uppercase text-emerald-700 flex items-center gap-1.5">
            <span className="relative flex h-1.5 w-1.5">
              <span className="absolute inline-flex h-full w-full rounded-full bg-emerald-500 opacity-60 animate-ping" />
              <span className="relative inline-flex h-1.5 w-1.5 rounded-full bg-emerald-500" />
            </span>
            live
          </span>
        </div>
        <div className="grid grid-cols-3 gap-4 mb-8">
          {c.preview.kpis.map((kpi) => (
            <div key={kpi.label} className="border border-border p-3 rounded">
              <p className="text-[10px] font-mono uppercase tracking-wider text-fg-subtle leading-snug">
                {kpi.label}
              </p>
              <p className="mt-1 text-xl md:text-2xl font-medium tracking-tight">
                {kpi.value}
              </p>
            </div>
          ))}
        </div>
        <div className="flex items-end gap-1.5 h-24">
          {c.preview.bars.map((h, i) => (
            <div
              key={i}
              className="flex-1 rounded-sm"
              style={{
                height: inView ? `${h}%` : "4%",
                backgroundColor:
                  i === c.preview.bars.length - 1 ? c.accent : "#E5E5E5",
                transition: `height 900ms cubic-bezier(0.22, 1, 0.36, 1) ${i * 70}ms`,
              }}
            />
          ))}
        </div>
      </div>
    </div>
  );
}

function FlowMockup({ c }: { c: Extract<CaseStudy["mockup"], { kind: "flow" }> & { accent: string } }) {
  return (
    <div className="rounded-lg border border-border bg-white shadow-[0_30px_80px_-30px_rgba(10,10,10,0.25)] p-8 md:p-10 min-h-[280px] flex items-center">
      <ul className="flex flex-wrap items-center gap-3 w-full">
        {c.preview.nodes.map((node, i) => (
          <li key={node} className="flex items-center gap-3">
            <span
              className={cn(
                "px-4 py-2 rounded-md text-sm font-medium border",
                i === Math.floor(c.preview.nodes.length / 2)
                  ? "text-white border-transparent"
                  : "bg-zinc-50 text-fg border-border"
              )}
              style={
                i === Math.floor(c.preview.nodes.length / 2)
                  ? { backgroundColor: c.accent }
                  : undefined
              }
            >
              {node}
            </span>
            {i < c.preview.nodes.length - 1 && (
              <span aria-hidden className="text-fg-subtle font-mono">
                →
              </span>
            )}
          </li>
        ))}
      </ul>
    </div>
  );
}

export function Mockup({ caseStudy, className }: MockupProps) {
  const prefersReduced = useReducedMotion();
  const { mockup, accent } = caseStudy;

  return (
    <motion.div
      initial={prefersReduced ? false : { opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
      whileHover={prefersReduced ? undefined : { y: -6 }}
      className={cn(
        "relative group/mockup transition-shadow duration-500",
        className
      )}
      style={{ filter: "drop-shadow(0 0 0 transparent)" }}
    >
      {/* Glow cobalto sutil no hover */}
      <div
        aria-hidden
        className="pointer-events-none absolute -inset-6 -z-10 rounded-2xl opacity-0 group-hover/mockup:opacity-100 transition-opacity duration-500 blur-2xl"
        style={{
          background: `radial-gradient(circle at 50% 60%, ${accent}33, transparent 70%)`,
        }}
      />
      {mockup.kind === "browser" && <BrowserMockup c={{ ...mockup, accent }} />}
      {mockup.kind === "device" && <DeviceMockup c={{ ...mockup, accent }} />}
      {mockup.kind === "dashboard" && <DashboardMockup c={{ ...mockup, accent }} />}
      {mockup.kind === "flow" && <FlowMockup c={{ ...mockup, accent }} />}
    </motion.div>
  );
}
