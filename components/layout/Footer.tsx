"use client";

import { Container } from "@/components/ui/Container";
import { useLanguage } from "@/context/LanguageContext";
import { site } from "@/data/site";

export function Footer() {
  const { t } = useLanguage();
  const year = new Date().getFullYear();

  return (
    <footer className="invert-section border-t border-white/10">
      <Container size="wide" className="py-16">
        <div className="grid gap-12 md:grid-cols-12">
          <div className="md:col-span-6">
            <div className="flex items-center gap-2">
              <span aria-hidden className="h-2.5 w-2.5 rounded-full bg-accent" />
              <span className="text-lg font-medium tracking-tight text-white">
                Isaac Fonseca
              </span>
            </div>
            <p
              className="mt-4 max-w-md text-sm leading-relaxed"
              style={{ color: "rgba(250,250,250,0.55)" }}
            >
              {t.footer.tagline}
            </p>
          </div>

          <div className="md:col-span-3">
            <p className="eyebrow mb-4" style={{ color: "rgba(250,250,250,0.5)" }}>
              {t.footer.sections.navigate}
            </p>
            <ul className="space-y-2.5 text-sm">
              <li>
                <a href="#services" className="text-white/80 hover:text-white">
                  {t.nav.services}
                </a>
              </li>
              <li>
                <a href="#cases" className="text-white/80 hover:text-white">
                  {t.nav.cases}
                </a>
              </li>
              <li>
                <a href="#method" className="text-white/80 hover:text-white">
                  {t.nav.method}
                </a>
              </li>
              <li>
                <a href="#stack" className="text-white/80 hover:text-white">
                  {t.nav.stack}
                </a>
              </li>
              <li>
                <a href="#contact" className="text-white/80 hover:text-white">
                  {t.nav.contact}
                </a>
              </li>
            </ul>
          </div>

          <div className="md:col-span-3">
            <p className="eyebrow mb-4" style={{ color: "rgba(250,250,250,0.5)" }}>
              {t.footer.sections.connect}
            </p>
            <ul className="space-y-2.5 text-sm">
              <li>
                <a
                  href={site.socials.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-white/80 hover:text-white"
                >
                  LinkedIn
                </a>
              </li>
              <li>
                <a
                  href={site.socials.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-white/80 hover:text-white"
                >
                  GitHub
                </a>
              </li>
              <li>
                <a
                  href={`mailto:${site.email}`}
                  className="text-white/80 hover:text-white"
                >
                  E-mail
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div
          className="mt-16 pt-8 border-t border-white/10 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3 text-xs"
          style={{ color: "rgba(250,250,250,0.5)" }}
        >
          <p>
            © {year} Isaac Fonseca. {t.footer.rights}
          </p>
          <p className="font-mono tracking-wide">{t.footer.builtWith}</p>
        </div>
      </Container>

      {/* Assinatura tipográfica gigante */}
      <div
        aria-hidden
        className="overflow-hidden select-none mt-8 md:mt-12 px-4 pb-6 md:pb-10"
      >
        <p
          className="leading-[0.85] tracking-[-0.05em] font-medium text-white whitespace-nowrap text-center"
          style={{
            fontSize: "clamp(80px, 18vw, 280px)",
            backgroundImage:
              "linear-gradient(180deg, rgba(255,255,255,0.18) 0%, rgba(255,255,255,0.04) 70%, transparent 100%)",
            WebkitBackgroundClip: "text",
            WebkitTextFillColor: "transparent",
            backgroundClip: "text",
          }}
        >
          Isaac<span style={{ color: "var(--accent)" }}>.</span>
        </p>
      </div>
    </footer>
  );
}
