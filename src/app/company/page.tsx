import CompanySection from "@/components/sections/CompanySection";
import CTASection from "@/components/sections/CTASection";

export default function CompanyPage() {
  return (
    <>
      <section className="bg-[var(--color-primary)] text-white py-16">
        <div className="max-w-6xl mx-auto px-4 text-center">
          <h1 className="text-3xl md:text-4xl font-bold">会社概要</h1>
          <p className="text-sm text-[var(--color-accent)] mt-2">-about-</p>
        </div>
      </section>

      <CompanySection />
      <CTASection />
    </>
  );
}
