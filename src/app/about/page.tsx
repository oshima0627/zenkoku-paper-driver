"use client";

import { motion } from "framer-motion";
import CTASection from "@/components/sections/CTASection";

const values = [
  {
    title: "社会貢献",
    description: "テクノロジーと安全運転講習を通じて、より良い社会の実現に貢献します。",
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9" />
      </svg>
    ),
  },
  {
    title: "プロフェッショナル",
    description: "各分野の専門家が集結し、お客様に最適なソリューションを提供します。",
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
      </svg>
    ),
  },
  {
    title: "イノベーション",
    description: "最新のAI技術を活用し、企業の業務効率化とDX推進を支援します。",
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M13 10V3L4 14h7v7l9-11h-7z" />
      </svg>
    ),
  },
];

export default function AboutPage() {
  return (
    <>
      {/* Hero */}
      <section className="relative py-20 md:py-28 bg-[var(--color-primary)] overflow-hidden">
        <div className="absolute top-20 left-20 w-80 h-80 bg-[var(--color-accent)]/10 rounded-full blur-3xl" />
        <div className="relative max-w-6xl mx-auto px-4">
          <p className="text-xs font-bold tracking-widest text-[var(--color-accent)] uppercase mb-4">About Us</p>
          <h1 className="text-3xl md:text-4xl font-bold text-white mb-4">私たちについて</h1>
          <p className="text-[var(--color-text-light)] max-w-2xl leading-relaxed">
            テクノロジーと安全で、社会に貢献する
          </p>
        </div>
      </section>

      {/* Mission */}
      <section className="py-20 md:py-28 bg-[var(--color-primary-light)]">
        <div className="max-w-4xl mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-center mb-16"
          >
            <p className="text-xs font-bold tracking-widest text-[var(--color-accent)] uppercase mb-2">Mission</p>
            <h2 className="text-xl sm:text-2xl md:text-3xl font-bold text-white mb-6">私たちの使命</h2>
            <p className="text-[var(--color-text)] leading-relaxed max-w-2xl mx-auto">
              全国ペーパードライバー協会は、<span className="text-[var(--color-accent)] font-bold">AIサポート事業</span>と<span className="text-[var(--color-accent)] font-bold">安全運転講習事業</span>の2つの柱を通じて、企業の課題解決と社会貢献に取り組んでいます。テクノロジーの力で業務を効率化し、プロフェッショナルな講習で交通安全を実現する。この2つのアプローチで、より良い社会づくりを目指します。
            </p>
          </motion.div>

          {/* Values */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {values.map((value, i) => (
              <motion.div
                key={value.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.15 }}
                className="bg-[var(--color-bg-card)] border border-[var(--color-border)] rounded-xl p-8 text-center"
              >
                <div className="w-14 h-14 rounded-lg bg-gradient-to-br from-[var(--color-accent)] to-cyan-600 flex items-center justify-center text-white mx-auto mb-4">
                  {value.icon}
                </div>
                <h3 className="text-lg font-bold text-white mb-3">{value.title}</h3>
                <p className="text-sm text-[var(--color-text-light)] leading-relaxed">{value.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Vision */}
      <section className="py-20 md:py-28 bg-[var(--color-bg)]">
        <div className="max-w-4xl mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="space-y-6 text-[var(--color-text)] leading-relaxed"
          >
            <div className="text-center mb-12">
              <p className="text-xs font-bold tracking-widest text-[var(--color-accent)] uppercase mb-2">Vision</p>
              <h2 className="text-xl sm:text-2xl md:text-3xl font-bold text-white">ビジョン</h2>
            </div>

            <div className="bg-[var(--color-bg-card)] border border-[var(--color-border)] rounded-xl p-8 md:p-12 space-y-4">
              <p>
                何かを学ぶ時、誰から学ぶかということが重要です。当協会はどこよりも<span className="font-bold text-white">人</span>に力を入れております。
              </p>
              <p>
                AI分野では最新のテクノロジーを活用し、お客様の業務課題を解決します。安全運転講習では、<span className="text-[var(--color-accent)] font-bold">国家資格保持者</span>と<span className="text-[var(--color-accent)] font-bold">プロフェッショナル</span>な講師陣が、一人ひとりに合わせた最適な講習をお届けします。
              </p>
              <p>
                テクノロジーと安全の両面から、お客様の課題解決と社会貢献を実現していきます。
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      <CTASection />
    </>
  );
}
