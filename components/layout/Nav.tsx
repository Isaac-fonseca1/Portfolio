"use client";

import { useEffect, useState } from "react";
import { Container } from "@/components/ui/Container";
import { LanguageSwitcher } from "@/components/ui/LanguageSwitcher";
import { LinkButton } from "@/components/ui/Button";
import { useLanguage } from "@/context/LanguageContext";
import { whatsappUrl } from "@/data/site";
import { cn } from "@/lib/utils";

export function Nav() {
  const { t, locale } = useLanguage();
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={cn(
        "fixed top-0 inset-x-0 z-50 transition-all duration-300",
        scrolled
          ? "backdrop-blur-md bg-bg/80 border-b border-border"
          : "bg-transparent"
      )}
    >
      <Container size="wide" as="div" className="flex h-16 items-center justify-between">
        <a
          href="#top"
          className="flex items-center gap-2 group"
          aria-label="Isaac Fonseca, início"
        >
          <span
            aria-hidden
            className="inline-block h-2.5 w-2.5 rounded-full bg-accent transition-transform duration-300 group-hover:scale-125"
          />
          <span className="font-medium tracking-tight text-fg">Isaac Fonseca</span>
        </a>

        <nav
          aria-label="Seções"
          className="hidden md:flex items-center gap-8 text-sm text-fg-muted"
        >
          <a href="#services" className="hover:text-fg transition-colors">
            {t.nav.services}
          </a>
          <a href="#cases" className="hover:text-fg transition-colors">
            {t.nav.cases}
          </a>
          <a href="#method" className="hover:text-fg transition-colors">
            {t.nav.method}
          </a>
          <a href="#stack" className="hover:text-fg transition-colors">
            {t.nav.stack}
          </a>
          <a href="#contact" className="hover:text-fg transition-colors">
            {t.nav.contact}
          </a>
        </nav>

        <div className="flex items-center gap-3">
          <LanguageSwitcher />
          <LinkButton
            href={whatsappUrl(locale)}
            target="_blank"
            rel="noopener noreferrer"
            size="md"
            className="hidden sm:inline-flex"
          >
            {t.nav.cta}
          </LinkButton>
        </div>
      </Container>
    </header>
  );
}
