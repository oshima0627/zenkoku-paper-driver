import RecruitSection from "@/components/sections/RecruitSection";
import CTASection from "@/components/sections/CTASection";

export default function RecruitPage() {
  return (
    <>
      <section className="py-28 md:py-36 bg-white">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <p className="text-xs font-medium tracking-[0.25em] text-[var(--color-accent)] uppercase mb-4">Recruit</p>
          <h1 className="text-3xl sm:text-5xl font-bold text-[var(--color-primary)] tracking-tight">採用情報</h1>
        </div>
      </section>

      <RecruitSection />
      <CTASection />
    </>
  );
}
