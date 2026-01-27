import type { Metadata } from "next";
import { Inter, JetBrains_Mono } from "next/font/google";
import "./globals.css";
import { LanguageProvider } from "@/context/LanguageContext";
import { AnimatedBackground } from "@/components/ui/AnimatedBackground";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

const jetbrainsMono = JetBrains_Mono({
  variable: "--font-jetbrains-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Isaac | Full Stack Developer",
  description: "Portfolio of a Full Stack Developer specialized in modern web technologies.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${inter.variable} ${jetbrainsMono.variable} antialiased`}>
        <LanguageProvider>
          {/* Fundo Animado (Particles) */}
          <AnimatedBackground />

          {/* Main Content com Z-Index superior */}
          <main className="relative z-10 w-full min-h-screen">
            {children}
          </main>
        </LanguageProvider>
      </body>
    </html>
  );
}