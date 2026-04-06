"use client";

import { motion } from "framer-motion";
import CTASection from "@/components/sections/CTASection";

const services = [
  {
    title: "AI業務自動化",
    description: "日々の業務プロセスをAIで自動化し、生産性を大幅に向上させます。",
    features: ["業務プロセスの分析と最適化", "AIチャットボットの導入", "データ処理の自動化", "カスタムAIツールの開発"],
  },
  {
    title: "HP制作・運用",
    description: "最新のWeb技術を活用した、高品質なホームページの制作と運用を行います。",
    features: ["モダンなデザインのWeb制作", "レスポンシブ対応", "SEO対策・アクセス解析", "保守・運用サポート"],
  },
];

const flow = [
  { step: 1, title: "ヒアリング", description: "現在の業務課題やご要望を詳しくお伺いします。" },
  { step: 2, title: "ご提案", description: "最適なAIソリューションやWebサイト構成をご提案します。" },
  { step: 3, title: "開発・制作", description: "プロフェッショナルチームが開発・制作を進めます。" },
  { step: 4, title: "納品・運用", description: "納品後も継続的なサポートと改善を行います。" },
];

export default function AISupportPage() {
  return (
    <>
      {/* Hero */}
      <section className="py-20 md:py-28 bg-white">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <p className="text-sm font-medium text-[var(--color-text-light)] tracking-widest uppercase mb-4">AI Support</p>
          <h1 className="text-3xl sm:text-5xl font-bold text-[var(--color-primary)] leading-tight tracking-tight mb-6">スクールサポートAI事業</h1>
          <p className="text-base text-[var(--color-text-light)] max-w-2xl mx-auto leading-relaxed">
            AI業務自動化とHP制作を通じて、企業のDX推進と業務効率化を支援します。
          </p>
        </div>
      </section>

      {/* Services */}
      <section className="py-20 md:py-28 bg-[var(--color-bg-gray)]">
        <div className="max-w-5xl mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-2xl sm:text-3xl font-bold text-[var(--color-primary)]">サービス内容</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {services.map((service, i) => (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className="bg-white rounded-2xl p-8"
              >
                <h3 className="text-xl font-bold text-[var(--color-primary)] mb-3">{service.title}</h3>
                <p className="text-sm text-[var(--color-text-light)] leading-relaxed mb-6">{service.description}</p>
                <ul className="space-y-2">
                  {service.features.map((f) => (
                    <li key={f} className="flex items-center gap-2 text-sm text-[var(--color-primary)]">
                      <span className="w-1.5 h-1.5 rounded-full bg-[var(--color-primary)]" />
                      {f}
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Partner */}
      <section className="py-20 md:py-28 bg-white">
        <div className="max-w-3xl mx-auto px-4 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <p className="text-sm font-medium text-[var(--color-text-light)] tracking-widest uppercase mb-2">Partner</p>
            <h2 className="text-2xl sm:text-3xl font-bold text-[var(--color-primary)] mb-4">業務委託パートナー</h2>
            <p className="text-sm text-[var(--color-text-light)] leading-relaxed mb-8 max-w-xl mx-auto">
              AI業務自動化・HP制作の開発パートナーとしてNexeed Labと連携し、高品質なソリューションを提供します。
            </p>
            <a
              href="https://www.nexeed-web.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-8 py-3 text-sm font-medium text-white bg-[var(--color-primary)] rounded-full hover:bg-[var(--color-primary-light)] transition-colors"
            >
              Nexeed Lab
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
              </svg>
            </a>
          </motion.div>
        </div>
      </section>

      {/* Flow */}
      <section className="py-20 md:py-28 bg-[var(--color-bg-gray)]">
        <div className="max-w-3xl mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-2xl sm:text-3xl font-bold text-[var(--color-primary)]">ご利用の流れ</h2>
          </div>
          <div className="space-y-8">
            {flow.map((item, i) => (
              <motion.div
                key={item.step}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className="flex items-start gap-5"
              >
                <div className="shrink-0 w-10 h-10 rounded-full bg-[var(--color-primary)] text-white flex items-center justify-center text-sm font-bold">
                  {item.step}
                </div>
                <div>
                  <h3 className="text-base font-bold text-[var(--color-primary)] mb-1">{item.title}</h3>
                  <p className="text-sm text-[var(--color-text-light)]">{item.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <CTASection />
    </>
  );
}
