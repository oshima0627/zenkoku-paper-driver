export const dynamic = "force-dynamic";

import HeroSection from "@/components/sections/HeroSection";
import IntroSection from "@/components/sections/IntroSection";
import BusinessSection from "@/components/sections/BusinessSection";
import NewsSection from "@/components/sections/NewsSection";
import GreetingSection from "@/components/sections/GreetingSection";
import CompanySection from "@/components/sections/CompanySection";
import CTASection from "@/components/sections/CTASection";
import ContactBanner from "@/components/sections/ContactBanner";

export default function Home() {
  return (
    <>
      <HeroSection />
      <IntroSection />
      <BusinessSection />
      <NewsSection />
      <GreetingSection />
      <CompanySection />
      <ContactBanner />
      <CTASection />
    </>
  );
}
