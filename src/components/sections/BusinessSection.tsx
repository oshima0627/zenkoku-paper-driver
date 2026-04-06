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
    <section className="py-28 md:py-36 bg-[var(--color-bg-gray)]">
      <div className="max-w-5xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <p className="text-xs font-medium tracking-[0.25em] text-[var(--color-accent)] uppercase mb-3">Business</p>
          <h2 className="text-3xl sm:text-4xl font-bold text-[var(--color-primary)] tracking-tight">事業内容</h2>
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
                <div className="relative bg-white rounded-3xl p-8 md:p-10 h-full overflow-hidden transition-all duration-500 hover:shadow-xl hover:-translate-y-1">
                  {/* Gradient accent line */}
                  <div className={`absolute top-0 left-0 right-0 h-1 bg-gradient-to-r ${biz.gradient} opacity-0 group-hover:opacity-100 transition-opacity duration-500`} />

                  {/* Icon */}
                  <div className={`w-12 h-12 ${biz.iconBg} rounded-2xl flex items-center justify-center mb-6`}>
                    <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M13 10V3L4 14h7v7l9-11h-7z" />
                    </svg>
                  </div>

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
