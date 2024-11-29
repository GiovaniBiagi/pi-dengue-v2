import { Header } from "@/components/header/header";
import { HeroSection } from "../sections/hero/hero";
import { BreedingSitesSection } from "@/sections/breeding-sites/breeding-sites";
import { SymptomsSection } from "@/sections/symptoms/symptoms";
import { PropagationSection } from "@/sections/propagation/propagation";
import { Footer } from "@/components/footer/footer";

export default function Home() {
  return (
    <main>
      <Header />
      <HeroSection />
      <BreedingSitesSection />
      <SymptomsSection />
      <PropagationSection />
      <Footer />
    </main>
  );
}
