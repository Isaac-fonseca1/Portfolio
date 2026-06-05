"use client";

import { motion, useReducedMotion } from "framer-motion";
import { ArrowUpRight, AlertTriangle } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { Mockup } from "@/components/ui/Mockup";
import { useLanguage } from "@/context/LanguageContext";
import { cases, pickText, type CaseStudy, type CaseStatus } from "@/data/cases";
import { cn } from "@/lib/utils";

function statusLabel(status: CaseStatus, t: ReturnType<typeof useLanguage>["t"]) {
  switch (status) {
    case "production":
      return t.cases.labels.statusProduction;
    case "development":
      return t.cases.labels.statusDevelopment;
    case "delivered":
      return t.cases.labels.statusDelivered;
  }
}

function statusDotClass(status: CaseStatus) {
  switch (status) {
    case "production":
      return "bg-emerald-500";
    case "development":
      return "bg-accent";
    case "delivered":
      return "bg-fg";
  }
}

function FeaturedCase({ c, index }: { c: CaseStudy; index: number }) {
  const { t, locale } = useLanguage();
  const prefersReduced = useReducedMotion();
  const mockupLeft = index % 2 === 1; // alterna a partir do segundo case

  return (
    <motion.article
      initial={prefersReduced ? false : { opacity: 0, y: 28 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
      className="border-t border-border pt-14 md:pt-20"
    >
      {/* meta superior */}
      <div className="flex items-baseline justify-between mb-10">
        <div className="flex items-baseline gap-4">
          <span className="font-mono text-[11px] tracking-[0.22em] text-fg-subtle uppercase">
            {String(index + 1).padStart(2, "0")}
          </span>
          <span className="font-mono text-[11px] tracking-[0.22em] text-fg-subtle uppercase">
            {c.year}
          </span>
          <span aria-hidden className="text-border-strong">/</span>
          <span className="font-mono text-[11px] tracking-[0.22em] text-fg-muted uppercase">
            {pickText(c.domain, locale)}
          </span>
        </div>
        <div className="flex items-center gap-3 text-xs text-fg-muted">
          {c.draft && (
            <span
              title="Briefing incompleto"
              className="inline-flex items-center gap-1.5 font-mono text-[10px] tracking-[0.18em] text-amber-700 uppercase"
            >
              <AlertTriangle className="h-3 w-3" />
              WIP
            </span>
          )}
          <span className="inline-flex items-center gap-2">
            <span
              aria-hidden
              className={cn("h-1.5 w-1.5 rounded-full", statusDotClass(c.status))}
            />
            {statusLabel(c.status, t)}
          </span>
        </div>
      </div>

      <div className="grid gap-10 lg:grid-cols-12 lg:gap-14 items-start">
        {/* Mockup */}
        <div
          className={cn(
            "lg:col-span-6",
            mockupLeft ? "lg:order-1" : "lg:order-2"
          )}
        >
          <Mockup caseStudy={c} />
        </div>

        {/* Texto */}
        <div
          className={cn(
            "lg:col-span-6",
            mockupLeft ? "lg:order-2" : "lg:order-1"
          )}
        >
          <h3 className="text-4xl md:text-5xl lg:text-[64px] tracking-[-0.03em] font-medium text-fg leading-[0.98]">
            {c.title}
          </h3>
          <p className="mt-5 text-lg md:text-xl text-fg-muted leading-relaxed">
            {pickText(c.summary, locale)}
          </p>

          <dl className="mt-8 space-y-5">
            <div>
              <dt className="eyebrow mb-2">{t.cases.labels.problem}</dt>
              <dd className="text-[15px] leading-relaxed text-fg">
                {pickText(c.problem, locale)}
              </dd>
            </div>
            <div>
              <dt className="eyebrow mb-2">{t.cases.labels.solution}</dt>
              <dd className="text-[15px] leading-relaxed text-fg">
                {pickText(c.solution, locale)}
              </dd>
            </div>
            <div className="border-l-2 pl-4" style={{ borderColor: c.accent }}>
              <dt className="eyebrow mb-2">{t.cases.labels.result}</dt>
              <dd className="text-[15px] leading-relaxed text-fg font-medium">
                {pickText(c.result, locale)}
              </dd>
            </div>
          </dl>

          <div className="mt-8 flex flex-wrap items-center gap-2">
            {c.stack.map((s) => (
              <span
                key={s}
                className="inline-flex items-center font-mono text-[11px] tracking-wide px-2.5 py-1 border border-border text-fg-muted bg-bg-elevated"
              >
                {s}
              </span>
            ))}
          </div>

          {(c.liveUrl || c.caseUrl || c.repoUrl) && (
            <div className="mt-8 flex items-center gap-6 text-sm">
              {c.liveUrl && (
                <a
                  href={c.liveUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 link-underline text-fg"
                >
                  {t.cases.labels.live} <ArrowUpRight className="h-3.5 w-3.5" />
                </a>
              )}
              {c.caseUrl && (
                <a
                  href={c.caseUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 link-underline text-fg-muted"
                >
                  {t.cases.labels.caseStudy} <ArrowUpRight className="h-3.5 w-3.5" />
                </a>
              )}
              {c.repoUrl && (
                <a
                  href={c.repoUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 link-underline text-fg-muted"
                >
                  {t.cases.labels.repo} <ArrowUpRight className="h-3.5 w-3.5" />
                </a>
              )}
            </div>
          )}
        </div>
      </div>
    </motion.article>
  );
}

function SecondaryCaseRow({ c }: { c: CaseStudy }) {
  const { t, locale } = useLanguage();
  return (
    <li className="group grid grid-cols-12 items-baseline gap-4 py-6 border-t border-border">
      <div className="col-span-2 md:col-span-1 font-mono text-[11px] tracking-[0.18em] text-fg-subtle uppercase">
        {c.year}
      </div>
      <div className="col-span-7 md:col-span-5">
        <h4 className="text-lg md:text-xl font-medium tracking-tight text-fg">
          {c.title}
        </h4>
      </div>
      <div className="hidden md:block md:col-span-3 text-sm text-fg-muted">
        {pickText(c.domain, locale)}
      </div>
      <div className="col-span-3 md:col-span-3 flex items-center justify-end gap-2 text-xs text-fg-muted">
        <span
          aria-hidden
          className={cn("h-1.5 w-1.5 rounded-full", statusDotClass(c.status))}
        />
        {statusLabel(c.status, t)}
      </div>
    </li>
  );
}

export function Cases() {
  const { t } = useLanguage();
  const featured = cases.filter((c) => c.featured);
  const secondary = cases.filter((c) => !c.featured);

  return (
    <section id="cases" className="py-24 md:py-32 border-t border-border">
      <Container size="wide">
        <SectionHeader
          eyebrow={t.cases.eyebrow}
          title={t.cases.title}
          lede={t.cases.lede}
        />

        <div className="mt-20 md:mt-28 space-y-20 md:space-y-32">
          {featured.map((c, i) => (
            <FeaturedCase key={c.id} c={c} index={i} />
          ))}
        </div>

        {secondary.length > 0 && (
          <div className="mt-24 md:mt-32">
            <p className="eyebrow mb-4">+ {secondary.length}</p>
            <ul>
              {secondary.map((c) => (
                <SecondaryCaseRow key={c.id} c={c} />
              ))}
            </ul>
          </div>
        )}
      </Container>
    </section>
  );
}
