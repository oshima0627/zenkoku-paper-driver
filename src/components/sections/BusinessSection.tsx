"use client";

import Link from "next/link";
import { motion } from "framer-motion";

const businesses = [
  {
    title: "AIサポート事業",
    description: "AI業務自動化やHP制作を通じて、企業のDX推進と業務効率化を支援します。",
    features: ["AI業務自動化", "HP制作・運用", "DXコンサルティング"],
    href: "/ai-support",
  },
  {
    title: "安全運転講習事業",
    description: "国家資格保持者による企業向け安全運転講習を全国で提供します。",
    features: ["企業向け安全運転講習", "全国出張対応", "元白バイ隊員監修"],
    href: "/driving",
  },
];

export default function BusinessSection() {
  return (
    <section className="py-20 md:py-28 bg-white">
      <div className="max-w-5xl mx-auto px-4">
        <div className="text-center mb-16">
          <p className="text-sm font-medium text-[var(--color-text-light)] tracking-widest uppercase mb-2">Business</p>
          <h2 className="text-2xl sm:text-3xl font-bold text-[var(--color-primary)]">事業内容</h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {businesses.map((biz, i) => (
            <motion.div
              key={biz.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
            >
              <Link href={biz.href} className="block group">
                <div className="bg-[var(--color-bg-gray)] rounded-2xl p-8 h-full hover:bg-[var(--color-bg-gray)]/80 transition-colors">
                  <h3 className="text-xl font-bold text-[var(--color-primary)] mb-3 group-hover:text-[var(--color-accent)] transition-colors">
                    {biz.title}
                  </h3>
                  <p className="text-sm text-[var(--color-text-light)] leading-relaxed mb-6">
                    {biz.description}
                  </p>
                  <div className="flex flex-wrap gap-2 mb-6">
                    {biz.features.map((f) => (
                      <span key={f} className="text-xs px-3 py-1 rounded-full bg-white text-[var(--color-text-light)]">
                        {f}
                      </span>
                    ))}
                  </div>
                  <span className="inline-flex items-center gap-1 text-sm font-medium text-[var(--color-accent)] group-hover:gap-2 transition-all">
                    詳しく見る
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
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
