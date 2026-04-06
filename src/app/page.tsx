export const dynamic = "force-dynamic";

import HeroSection from "@/components/sections/HeroSection";
import BusinessSection from "@/components/sections/BusinessSection";
import AISupportSection from "@/components/sections/AISupportSection";
import DrivingSection from "@/components/sections/DrivingSection";
import SchoolSection from "@/components/sections/SchoolSection";
import PriceSection from "@/components/sections/PriceSection";
import FAQSection from "@/components/sections/FAQSection";
import IntroSection from "@/components/sections/IntroSection";
import AboutSection from "@/components/sections/AboutSection";
import CTASection from "@/components/sections/CTASection";

export default function Home() {
  return (
    <>
      <HeroSection />

      <div id="business">
        <BusinessSection />
      </div>

      <div id="ai-support">
        <AISupportSection />
      </div>

      <div id="driving">
        <DrivingSection />
        <SchoolSection />
      </div>

      <div id="price">
        <PriceSection />
      </div>

      <div id="faq">
        <FAQSection />
      </div>

      <div id="about">
        <IntroSection />
        <AboutSection />
      </div>

      <CTASection />
    </>
  );
}
