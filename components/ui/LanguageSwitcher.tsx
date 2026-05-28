"use client";

import { useLanguage } from "@/context/LanguageContext";
import { cn } from "@/lib/utils";

export function LanguageSwitcher({ className }: { className?: string }) {
  const { locale, setLocale } = useLanguage();

  return (
    <div
      role="group"
      aria-label="Language"
      className={cn(
        "inline-flex items-center text-[11px] font-mono tracking-[0.18em] uppercase",
        "border border-border-strong rounded-full p-0.5 bg-bg-elevated",
        className
      )}
    >
      <button
        type="button"
        onClick={() => setLocale("pt")}
        aria-pressed={locale === "pt"}
        className={cn(
          "rounded-full px-2.5 py-1 transition-colors duration-200",
          locale === "pt" ? "bg-fg text-fg-inverse" : "text-fg-muted hover:text-fg"
        )}
      >
        PT
      </button>
      <button
        type="button"
        onClick={() => setLocale("en")}
        aria-pressed={locale === "en"}
        className={cn(
          "rounded-full px-2.5 py-1 transition-colors duration-200",
          locale === "en" ? "bg-fg text-fg-inverse" : "text-fg-muted hover:text-fg"
        )}
      >
        EN
      </button>
    </div>
  );
}
