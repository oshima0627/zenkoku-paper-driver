"use client";

import Link from "next/link";
import { motion } from "framer-motion";

const businesses = [
  {
    title: "スクールサポートAI事業",
    description: "AI業務自動化やHP制作を通じて、企業のDX推進と業務効率化を支援します。",
    features: ["AI業務自動化", "HP制作・運用", "DXコンサルティング"],
    href: "/ai-support",
    gradient: "from-blue-500 to-cyan-400",
    iconBg: "bg-gradient-to-br from-blue-500 to-cyan-400",
  },
  {
    title: "安全運転講習事業(協会)",
    description: "国家資格保持者による企業向け安全運転講習を全国で提供します。",
    features: ["企業向け安全運転講習", "全国出張対応", "元白バイ隊員監修"],
    href: "/driving",
    gradient: "from-purple-500 to-pink-400",
    iconBg: "bg-gradient-to-br from-purple-500 to-pink-400",
  },
];

export default function BusinessSection() {
  return (
    <section className="py-28 md:py-36">
      <div className="max-w-5xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <p className="text-xs font-medium tracking-[0.25em] text-[var(--color-accent)] uppercase mb-3">Business</p>
          <h2 className="text-3xl sm:text-4xl font-bold text-[var(--color-primary)] tracking-tight">事業</h2>
          <p className="mt-4 text-base sm:text-lg text-[var(--color-text-light)] leading-relaxed">
            AI業務自動化・HP制作と安全運転講習の2つの事業を柱に、<br />
            企業の課題解決に取り組みます。
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {businesses.map((biz, i) => (
            <motion.div
              key={biz.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: i * 0.15, ease: [0.25, 0.1, 0, 1] }}
            >
              <Link href={biz.href} className="block group">
                <div className="relative bg-white rounded-3xl p-8 md:p-10 h-full overflow-hidden shadow-md transition-all duration-500 hover:shadow-xl hover:-translate-y-1">
                  <h3 className="text-xl font-bold text-[var(--color-primary)] mb-3 group-hover:text-[var(--color-accent)] transition-colors duration-300">
                    {biz.title}
                  </h3>
                  <p className="text-sm text-[var(--color-text-light)] leading-relaxed mb-6">
                    {biz.description}
                  </p>
                  <div className="flex flex-wrap gap-2 mb-8">
                    {biz.features.map((f) => (
                      <span key={f} className="text-xs px-3 py-1.5 rounded-full bg-[var(--color-bg-gray)] text-[var(--color-text-light)] font-medium">
                        {f}
                      </span>
                    ))}
                  </div>
                  <span className="inline-flex items-center gap-1.5 text-sm font-medium text-[var(--color-accent)] group-hover:gap-3 transition-all duration-300">
                    詳しく見る
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                    </svg>
                  </span>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
