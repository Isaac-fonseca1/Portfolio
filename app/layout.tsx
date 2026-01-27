import type { Metadata } from "next";
// 1. MUDANÇA AQUI: Trocamos Inter/JetBrains por Space Grotesk/Space Mono
import { Space_Grotesk, Space_Mono } from "next/font/google"; 
import "./globals.css";
import { LanguageProvider } from "@/context/LanguageContext";


// 2. Configuração da Space Grotesk (Para títulos e textos)
const spaceGrotesk = Space_Grotesk({
  variable: "--font-sans", // Mantemos o nome da variável para não quebrar o CSS
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"], // Pesos variados
});

// 3. Configuração da Space Mono (Para tags e códigos)
const spaceMono = Space_Mono({
  variable: "--font-mono",
  subsets: ["latin"],
  weight: ["400", "700"],
});

export const metadata: Metadata = {
  title: "Isaac | Full Stack Developer",
  description: "Portfolio",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      {/* 4. Aplicamos as variáveis no body */}
      <body className={`${spaceGrotesk.variable} ${spaceMono.variable} antialiased bg-black`}>
        <LanguageProvider>
          
          <main style={{ position: "relative", zIndex: 10 }}>
            {children}
          </main>
        </LanguageProvider>
      </body>
    </html>
  );
}