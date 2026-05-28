import type { Metadata } from "next";
import { Inter, Instrument_Serif, JetBrains_Mono } from "next/font/google";
import "./globals.css";
import { LanguageProvider } from "@/context/LanguageContext";
import { Spotlight } from "@/components/ui/Spotlight";

const inter = Inter({
  variable: "--font-sans",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  display: "swap",
});

const instrumentSerif = Instrument_Serif({
  variable: "--font-serif",
  subsets: ["latin"],
  weight: ["400"],
  style: ["normal", "italic"],
  display: "swap",
});

const jetbrainsMono = JetBrains_Mono({
  variable: "--font-mono",
  subsets: ["latin"],
  weight: ["400", "500"],
  display: "swap",
});

const siteUrl = "https://isaacfonseca.dev";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "Isaac Fonseca — Engenheiro de software que constrói operação",
    template: "%s · Isaac Fonseca",
  },
  description:
    "Construo SaaS internos, automações e integrações para tirar empresas da planilha. Cases em produção em ISP, saúde e operações multifiliais.",
  keywords: [
    "desenvolvedor full-stack",
    "saas sob medida",
    "automação n8n",
    "integração meta ads",
    "integração google ads",
    "sistemas internos",
    "freelancer software brasil",
  ],
  authors: [{ name: "Isaac Fonseca" }],
  creator: "Isaac Fonseca",
  openGraph: {
    type: "website",
    locale: "pt_BR",
    url: siteUrl,
    siteName: "Isaac Fonseca",
    title: "Isaac Fonseca — Engenheiro de software que constrói operação",
    description:
      "SaaS internos, automações e integrações sob medida. Tire sua operação da planilha.",
  },
  twitter: {
    card: "summary_large_image",
    title: "Isaac Fonseca — Engenheiro de software que constrói operação",
    description:
      "SaaS internos, automações e integrações sob medida. Tire sua operação da planilha.",
  },
  robots: { index: true, follow: true },
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="pt-BR" suppressHydrationWarning>
      <body
        className={`${inter.variable} ${instrumentSerif.variable} ${jetbrainsMono.variable} antialiased`}
      >
        <LanguageProvider>
          <Spotlight />
          {children}
        </LanguageProvider>
      </body>
    </html>
  );
}
