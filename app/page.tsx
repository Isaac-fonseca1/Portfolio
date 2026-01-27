import { Navbar } from "@/components/layout/Navbar";
import { Hero } from "@/components/sections/Hero";
import SkillsFramer from "@/components/sections/Skills"; // Exported as default
import { Projects } from "@/components/sections/Projects";
import { About } from "@/components/sections/About";
import { Footer } from "@/components/layout/Footer";
import { ScrollToTop } from "@/components/ui/ScrollToTop";
import { Workflow } from "@/components/sections/workflow";

export default function Home() {
  return (
    <main className="min-h-screen bg-background relative overflow-hidden">
      <Navbar />
      <Hero />
      <SkillsFramer />
      <Workflow />
      <Projects />
      <About />
      <Footer />
      <ScrollToTop />
    </main>
  );
}
