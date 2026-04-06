export const dynamic = "force-dynamic";

import HeroSection from "@/components/sections/HeroSection";
import IntroSection from "@/components/sections/IntroSection";
import BusinessSection from "@/components/sections/BusinessSection";
import CTASection from "@/components/sections/CTASection";

export default function Home() {
  return (
    <>
      <HeroSection />
      <IntroSection />
      <BusinessSection />
      <CTASection />
    </>
  );
}
