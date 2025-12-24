import HeroSection from "../sections/HeroSection";
import WhatIDo from "../sections/WhatIDo";
import FeaturedProjects from "../sections/FeaturedProjects";
import CTASection from "../sections/CTASection";

export default function Home() {
  return (
    <main className="max-w-6xl mx-auto px-4">
      <HeroSection />
      <WhatIDo />
      <FeaturedProjects />
      <CTASection />
    </main>
  );
}
