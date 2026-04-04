"use client";

import { motion } from "framer-motion";

const points = [
  {
    number: 1,
    title: "国家資格保持者",
    description: "国家資格である\n教習指導員資格を持つ\n指導員が丁寧に指導。",
    icon: (
      <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
      </svg>
    ),
  },
  {
    number: 2,
    title: "スクール経営陣",
    description: "ペーパードライバー\nスクールを経営している\n現役講師が\n実践的な指導。",
    icon: (
      <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
      </svg>
    ),
  },
  {
    number: 3,
    title: "元白バイ隊員監修",
    description: "国民の安全を守る\n白バイ隊員が、\n事故に対する豊富な経験と\n知識でマニュアル作成。",
    icon: (
      <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M13 10V3L4 14h7v7l9-11h-7z" />
      </svg>
    ),
  },
];

export default function StrongPointSection() {
  return (
    <section className="py-16 md:py-24 bg-white border-t border-gray-100">
      <div className="max-w-4xl mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-2xl md:text-3xl font-bold text-gray-900">
            プロフェッショナル集団の強み
          </h2>
          <p className="text-sm text-[var(--color-accent)] mt-1">-strong point-</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {points.map((point, i) => (
            <motion.div
              key={point.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.15 }}
              className="text-center"
            >
              <p className="text-sm font-bold text-gray-500 tracking-wider mb-2">POINT</p>
              <div className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-[var(--color-site)] text-white font-bold mb-4">
                {point.number}
              </div>
              <div className="border-2 border-[var(--color-site-light)] rounded-xl p-8 bg-white">
                <div className="flex justify-center mb-4 text-gray-600">
                  {point.icon}
                </div>
                <h3 className="text-lg font-bold text-[var(--color-primary)] mb-3">{point.title}</h3>
                <p className="text-sm text-gray-600 whitespace-pre-line leading-relaxed">{point.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
