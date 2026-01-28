import type { Metadata } from "next";
import { Space_Grotesk, Space_Mono } from "next/font/google";
import "./globals.css";
import { LanguageProvider } from "@/context/LanguageContext";
import { CustomCursor } from "@/components/ui/CustomCursor";
import { WarpBackground } from "@/components/ui/WarpBackground";

const spaceGrotesk = Space_Grotesk({
  variable: "--font-sans",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
});

const spaceMono = Space_Mono({
  variable: "--font-mono",
  subsets: ["latin"],
  weight: ["400", "700"],
});

export const metadata: Metadata = {
  title: "Isaac | Full Stack Developer",
  description: "Portfolio",
  
};export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      {/* Removemos o bg-black daqui para não cobrir o componente fixo, 
          mas mantemos text-stone-200 para a fonte */}
      <body className={`${spaceGrotesk.variable} ${spaceMono.variable} antialiased text-stone-200`}>
        <LanguageProvider>
          <CustomCursor />
          {/* O Background Animado já tem bg-black nele mesmo */}
          <WarpBackground />

          <main style={{ position: "relative", zIndex: 10 }}>
            {children}
          </main>
        </LanguageProvider>
      </body>
    </html>
  );
}