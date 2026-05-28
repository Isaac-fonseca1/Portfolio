"use client";

import { useLanguage } from "@/context/LanguageContext";

const techItems = [
  "Next.js",
  "Laravel",
  "Java",
  "Spring Boot",
  "PostgreSQL",
  "TypeScript",
  "n8n",
  "Meta Marketing API",
  "Google Ads API",
  "Bitrix24",
  "Fastify",
  "Prisma",
  "Redis",
  "BullMQ",
  "Gemini",
  "Claude",
  "GPT",
  "Tailwind",
  "Docker",
  "Google Cloud",
  "BigQuery",
  "Vercel",
] as const;

function Track() {
  return (
    <ul className="flex shrink-0 items-center gap-12 pr-12">
      {techItems.map((item) => (
        <li
          key={item}
          className="font-serif italic text-3xl md:text-4xl lg:text-5xl text-fg whitespace-nowrap"
        >
          {item}
          <span aria-hidden className="ml-12 text-accent">
            ◆
          </span>
        </li>
      ))}
    </ul>
  );
}

export function TechMarquee() {
  const { t } = useLanguage();

  return (
    <section
      aria-label={t.marquee.label}
      className="border-y border-border bg-bg-elevated py-10 md:py-14 overflow-hidden"
    >
      <div className="flex items-center gap-2 px-6 md:px-10 mb-6">
        <span className="font-mono text-[10px] tracking-[0.22em] uppercase text-fg-subtle">
          {t.marquee.label}
        </span>
        <span aria-hidden className="h-px flex-1 bg-border" />
        <span aria-hidden className="inline-block h-2 w-2 rounded-full bg-accent" />
      </div>
      <div
        className="relative flex"
        style={{ maskImage: "linear-gradient(90deg, transparent, #000 8%, #000 92%, transparent)" }}
      >
        <div className="flex marquee">
          <Track />
          <Track />
        </div>
      </div>
    </section>
  );
}
