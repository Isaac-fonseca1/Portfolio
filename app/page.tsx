"use client";

import React, { useState, useEffect } from "react";
import { AnimatePresence } from "framer-motion";

// Seus componentes
import { Navbar } from "@/components/layout/Navbar";
import { Hero } from "@/components/sections/Hero";
import { Projects } from "@/components/sections/Projects";
import { About } from "@/components/sections/About";       
import SkillsFramer from "@/components/sections/Skills"; 
import { Workflow } from "@/components/sections/workflow"; 
import { Footer } from "@/components/layout/Footer";
import { ScrollToTop } from "@/components/ui/ScrollToTop";
import { Preloader } from "@/components/ui/preloader";

export default function Home() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Simula o tempo de carregamento (2.5 segundos)
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 1800);

    return () => clearTimeout(timer);
  }, []);

  return (
    <>
      {/* O AnimatePresence garante a animação de saída (explosão) do Preloader */}
      <AnimatePresence mode="wait">
        {isLoading && <Preloader />}
      </AnimatePresence>

      {/* O conteúdo só aparece quando o loading termina */}
      {!isLoading && (
        <main className="min-h-screen relative overflow-hidden">
          <Navbar />
          
          <Hero />
          
          <Projects/>

          <About />
          
          <SkillsFramer />
          
          <Workflow />
          
          <Footer />
          <ScrollToTop />
        </main>
      )}
    </>
  );
}