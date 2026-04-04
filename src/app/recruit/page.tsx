import RecruitSection from "@/components/sections/RecruitSection";
import CTASection from "@/components/sections/CTASection";

export default function RecruitPage() {
  return (
    <>
      <section className="bg-[var(--color-primary)] text-white py-16">
        <div className="max-w-6xl mx-auto px-4 text-center">
          <h1 className="text-3xl md:text-4xl font-bold">採用情報</h1>
          <p className="text-sm text-[var(--color-accent)] mt-2">-Recruit-</p>
        </div>
      </section>

      <RecruitSection />
      <CTASection />
    </>
  );
}
