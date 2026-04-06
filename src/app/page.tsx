export const dynamic = "force-dynamic";

import HeroSection from "@/components/sections/HeroSection";
import BusinessSection from "@/components/sections/BusinessSection";
import IntroSection from "@/components/sections/IntroSection";
import AboutSection from "@/components/sections/AboutSection";

export default function Home() {
  return (
    <>
      <HeroSection />
      <div id="business">
        <BusinessSection />
      </div>
      <div id="about">
        <IntroSection />
        <AboutSection />
      </div>
    </>
  );
}
