"use client";

import { motion } from "framer-motion";

const services = [
  {
    title: "AI業務自動化",
    description: "日々の業務プロセスをAIで自動化し、\n生産性を大幅に向上させます。",
    features: ["業務プロセスの分析と最適化", "AIチャットボットの導入", "データ処理の自動化", "カスタムAIツールの開発"],
    gradient: "from-blue-500 to-cyan-400",
  },
  {
    title: "HP制作・運用",
    description: "最新のWeb技術を活用した、\n高品質なホームページの制作と運用を行います。",
    features: ["モダンなデザインのWeb制作", "レスポンシブ対応", "SEO対策・アクセス解析", "保守・運用サポート"],
    gradient: "from-purple-500 to-pink-400",
  },
];

const flow = [
  { step: 1, title: "ヒアリング", description: "現在の業務課題やご要望を詳しくお伺いします。" },
  { step: 2, title: "ご提案", description: "最適なAIソリューションやWebサイト構成をご提案します。" },
  { step: 3, title: "開発・制作", description: "プロフェッショナルチームが開発・制作を進めます。" },
  { step: 4, title: "納品・運用", description: "納品後も継続的なサポートと改善を行います。" },
];

export default function AISupportSection() {
  return (
    <>
      {/* Services */}
      <section className="py-28 md:py-36 bg-[var(--color-bg-gray)]">
        <div className="max-w-5xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <span className="inline-flex items-center px-4 py-1.5 rounded-full bg-blue-50 text-[var(--color-accent)] text-xs font-semibold mb-4">スクールサポートAI事業</span>
            <h2 className="text-3xl sm:text-4xl font-bold text-[var(--color-primary)] tracking-tight">サービス内容</h2>
          </motion.div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {services.map((service, i) => (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: i * 0.15, ease: [0.25, 0.1, 0, 1] }}
                className="group bg-white rounded-3xl p-8 md:p-10 shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-500 relative overflow-hidden"
              >
                <div className={`absolute top-0 left-0 right-0 h-1 bg-gradient-to-r ${service.gradient} opacity-0 group-hover:opacity-100 transition-opacity duration-500`} />
                <h3 className="text-xl font-bold text-[var(--color-primary)] mb-3">{service.title}</h3>
                <p className="text-sm text-[var(--color-text-light)] leading-relaxed mb-6 whitespace-pre-line">{service.description}</p>
                <ul className="space-y-2.5">
                  {service.features.map((f) => (
                    <li key={f} className="flex items-center gap-2.5 text-sm text-[var(--color-primary)]">
                      <span className="w-1.5 h-1.5 rounded-full bg-[var(--color-accent)]" />
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
      <section className="py-28 md:py-36 bg-white">
        <div className="max-w-3xl mx-auto px-6 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <span className="inline-flex items-center px-4 py-1.5 rounded-full bg-blue-50 text-[var(--color-accent)] text-xs font-semibold mb-4">スクールサポートAI事業</span>
            <h2 className="text-3xl sm:text-4xl font-bold text-[var(--color-primary)] tracking-tight mb-6">業務委託パートナー</h2>
            <p className="text-[15px] text-[var(--color-text-light)] leading-[1.9] mb-10 max-w-xl mx-auto">
              AI業務自動化・HP制作の開発パートナーとしてNexeed Labと連携し、<br />高品質なソリューションを提供します。
            </p>
            <a
              href="https://www.nexeed-web.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-8 py-3.5 text-sm font-medium text-white bg-[var(--color-primary)] rounded-full hover:bg-[var(--color-primary-light)] transition-all duration-300 shadow-[0_0_20px_rgba(0,0,0,0.1)]"
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
      <section className="py-28 md:py-36 bg-[var(--color-bg-gray)]">
        <div className="max-w-3xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <span className="inline-flex items-center px-4 py-1.5 rounded-full bg-blue-50 text-[var(--color-accent)] text-xs font-semibold mb-4">スクールサポートAI事業</span>
            <h2 className="text-3xl sm:text-4xl font-bold text-[var(--color-primary)] tracking-tight">ご利用の流れ</h2>
          </motion.div>
          <div className="space-y-6">
            {flow.map((item, i) => (
              <motion.div
                key={item.step}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1, ease: [0.25, 0.1, 0, 1] }}
                className="flex items-start gap-5 bg-white rounded-2xl p-6 shadow-sm"
              >
                <div className="shrink-0 w-10 h-10 rounded-full bg-gradient-to-br from-blue-500 to-cyan-400 text-white flex items-center justify-center text-sm font-bold">
                  {item.step}
                </div>
                <div>
                  <h3 className="text-base font-bold text-[var(--color-primary)] mb-1">{item.title}</h3>
                  <p className="text-sm text-[var(--color-text-light)] leading-relaxed">{item.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
