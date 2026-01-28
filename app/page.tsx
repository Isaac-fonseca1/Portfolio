import { Navbar } from "@/components/layout/Navbar";
import { Hero } from "@/components/sections/Hero";
import { Projects } from "@/components/sections/Projects";
import { About } from "@/components/sections/About";       
import SkillsFramer from "@/components/sections/Skills"; 
import { Workflow } from "@/components/sections/workflow"; 
import { Footer } from "@/components/layout/Footer";
import { ScrollToTop } from "@/components/ui/ScrollToTop";

export default function Home() {
  return (
    // 1. REMOVI 'bg-background'. 
    // Agora o fundo é transparente e deixa ver o AnimatedBackground do layout.
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
  );
}