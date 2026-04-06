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
import ContactSection from "@/components/sections/ContactSection";

function Divider() {
  return (
    <div className="max-w-5xl mx-auto px-6">
      <div className="border-t border-gray-200" />
    </div>
  );
}

export default function Home() {
  return (
    <>
      <HeroSection />

      <div id="business">
        <BusinessSection />
      </div>

      <Divider />

      <div id="ai-support">
        <AISupportSection />
      </div>

      <Divider />

      <div id="driving">
        <DrivingSection />
        <SchoolSection />
      </div>

      <Divider />

      <div id="price">
        <PriceSection />
      </div>

      <Divider />

      <div id="faq">
        <FAQSection />
      </div>

      <Divider />

      <div id="about">
        <IntroSection />
        <AboutSection />
      </div>

      <Divider />

      <div id="contact">
        <ContactSection />
      </div>
    </>
  );
}
