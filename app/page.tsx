import { Nav } from "@/components/layout/Nav";
import { Footer } from "@/components/layout/Footer";
import { ScrollProgress } from "@/components/ui/ScrollProgress";
import { Hero } from "@/components/sections/Hero";
import { Stats } from "@/components/sections/Stats";
import { TechMarquee } from "@/components/sections/TechMarquee";
import { Services } from "@/components/sections/Services";
import { Pain } from "@/components/sections/Pain";
import { Cases } from "@/components/sections/Cases";
import { About } from "@/components/sections/About";
import { Method } from "@/components/sections/Method";
import { Stack } from "@/components/sections/Stack";
import { CTA } from "@/components/sections/CTA";

export default function Home() {
  return (
    <>
      <ScrollProgress />
      <Nav />
      <main className="bg-bg relative">
        <Hero />
        <Stats />
        <TechMarquee />
        <Services />
        <Pain />
        <Cases />
        <About />
        <Method />
        <Stack />
        <CTA />
      </main>
      <Footer />
    </>
  );
}
