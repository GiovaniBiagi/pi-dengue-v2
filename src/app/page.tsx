import { Header } from "@/components/header/header";
import { HeroSection } from "../sections/hero/hero";
import { BreedingSitesSection } from "@/sections/breeding-sites/breeding-sites";
import { SymptomsSection } from "@/sections/symptoms/symptoms";
import { PropagationSection } from "@/sections/propagation/propagation";

export default function Home() {
  return (
    <main>
      <div className="h-screen border-red-500">
        <Header />
        <HeroSection />
      </div>
      <BreedingSitesSection />
      <SymptomsSection />
      <PropagationSection />
    </main>
  );
}
