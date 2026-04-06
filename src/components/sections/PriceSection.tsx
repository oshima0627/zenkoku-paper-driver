"use client";

import Link from "next/link";
import { motion } from "framer-motion";

const techPlan = [
  { time: "100分×1日", price: "18,000", popular: 0 },
  { time: "100分×2日", price: "36,000", popular: 0 },
  { time: "100分×3日", price: "54,000", popular: 1 },
  { time: "100分×4日", price: "72,000", popular: 2 },
  { time: "100分×5日", price: "90,000", popular: 0 },
];

export default function PriceSection() {
  return (
    <section className="py-28 md:py-36 bg-white">
      <div className="max-w-4xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <p className="text-xs font-medium tracking-[0.25em] text-[var(--color-accent)] uppercase mb-3">Price</p>
          <h2 className="text-3xl sm:text-4xl font-bold text-[var(--color-primary)] tracking-tight">料金案内</h2>
        </motion.div>

        {/* AI Support Pricing */}
        <div className="mb-20">
          <h3 className="text-center text-lg font-bold text-[var(--color-primary)] mb-8">スクールサポートAI事業</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {[
              { title: "AI業務自動化", desc: "業務内容に応じて最適なプランをご提案", gradient: "from-blue-500 to-cyan-400" },
              { title: "HP制作", desc: "デザイン・開発・運用までワンストップ", gradient: "from-purple-500 to-pink-400" },
            ].map((item, i) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1, ease: [0.25, 0.1, 0, 1] }}
                className="bg-[var(--color-bg-gray)] rounded-3xl p-8 relative overflow-hidden"
              >
                <div className={`absolute top-0 left-0 right-0 h-1 bg-gradient-to-r ${item.gradient}`} />
                <h4 className="text-base font-bold text-[var(--color-primary)] mb-2">{item.title}</h4>
                <p className="text-sm text-[var(--color-text-light)] mb-5">{item.desc}</p>
                <p className="text-2xl font-bold text-[var(--color-primary)]">要お見積り</p>
                <p className="text-xs text-[var(--color-text-light)] mt-2">※個別にお見積りいたします</p>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Driving Pricing */}
        <div>
          <h3 className="text-center text-lg font-bold text-[var(--color-primary)] mb-8">安全運転講習事業(協会)</h3>

          <div className="space-y-6 max-w-3xl mx-auto">
            {[
              { step: 1, title: "安全運転スキル診断（任意）", sub: "50分 / 1人あたり", price: "11,000" },
            ].map((item) => (
              <motion.div
                key={item.step}
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
                className="bg-[var(--color-bg-gray)] rounded-3xl overflow-hidden"
              >
                <div className="bg-[var(--color-primary)] px-6 py-3.5 flex items-center gap-3">
                  <span className="w-7 h-7 rounded-full bg-white/20 text-white text-xs font-bold flex items-center justify-center">{item.step}</span>
                  <span className="text-white text-sm font-medium">{item.title}</span>
                </div>
                <div className="flex justify-between items-center px-6 py-5">
                  <span className="text-sm text-[var(--color-text-light)]">{item.sub}</span>
                  <span className="text-lg font-bold text-[var(--color-primary)]">{item.price}<span className="text-xs font-normal text-[var(--color-text-light)] ml-1">円（税込）</span></span>
                </div>
              </motion.div>
            ))}

            <motion.div
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.05 }}
              className="bg-[var(--color-bg-gray)] rounded-3xl overflow-hidden"
            >
              <div className="bg-[var(--color-primary)] px-6 py-3.5 flex items-center gap-3">
                <span className="w-7 h-7 rounded-full bg-white/20 text-white text-xs font-bold flex items-center justify-center">2</span>
                <span className="text-white text-sm font-medium">技能教習</span>
              </div>
              <div className="divide-y divide-[var(--color-border)]/30">
                {techPlan.map((row, i) => (
                  <div key={i} className="flex justify-between items-center px-6 py-4">
                    <div className="flex items-center gap-3">
                      <span className="text-sm text-[var(--color-primary)]">{row.time}</span>
                      {row.popular === 1 && <span className="text-[10px] font-bold px-2.5 py-0.5 rounded-full bg-[var(--color-accent)] text-white">1番人気</span>}
                      {row.popular === 2 && <span className="text-[10px] font-bold px-2.5 py-0.5 rounded-full bg-[var(--color-text-light)] text-white">2番人気</span>}
                    </div>
                    <span className="text-lg font-bold text-[var(--color-primary)]">{row.price}<span className="text-xs font-normal text-[var(--color-text-light)] ml-1">円（税込）</span></span>
                  </div>
                ))}
              </div>
              <p className="text-xs text-[var(--color-text-light)] px-6 py-3">※追加教習は100分毎に18,000円</p>
            </motion.div>

            {[
              { step: 3, title: "学科学（任意）", sub: "50分", price: "18,000" },
              { step: 4, title: "最終運転技能チェック（必須）", sub: "50分", price: "11,000" },
            ].map((item, i) => (
              <motion.div
                key={item.step}
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: (i + 2) * 0.05 }}
                className="bg-[var(--color-bg-gray)] rounded-3xl overflow-hidden"
              >
                <div className="bg-[var(--color-primary)] px-6 py-3.5 flex items-center gap-3">
                  <span className="w-7 h-7 rounded-full bg-white/20 text-white text-xs font-bold flex items-center justify-center">{item.step}</span>
                  <span className="text-white text-sm font-medium">{item.title}</span>
                </div>
                <div className="flex justify-between items-center px-6 py-5">
                  <span className="text-sm text-[var(--color-text-light)]">{item.sub}</span>
                  <span className="text-lg font-bold text-[var(--color-primary)]">{item.price}<span className="text-xs font-normal text-[var(--color-text-light)] ml-1">円（税込）</span></span>
                </div>
              </motion.div>
            ))}

            <motion.div
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="bg-[var(--color-bg-gray)] rounded-3xl p-6"
            >
              <h4 className="text-sm font-bold text-[var(--color-primary)] mb-4">その他費用</h4>
              <div className="space-y-3 text-sm">
                <div className="flex justify-between"><span className="text-[var(--color-text-light)]">修了証明書発行</span><span className="font-medium text-[var(--color-primary)]">1人 5,000円</span></div>
                <div className="flex justify-between"><span className="text-[var(--color-text-light)]">教習報告書作成</span><span className="font-medium text-[var(--color-primary)]">1回 3,000円</span></div>
              </div>
              <p className="text-xs text-[var(--color-text-light)] mt-4">※高速料金、コインパーキング代は別途</p>
            </motion.div>
          </div>
        </div>

        <div className="text-center mt-16">
          <Link
            href="/contact"
            className="inline-flex items-center justify-center px-12 py-4 text-sm font-medium text-white bg-[var(--color-primary)] rounded-full hover:bg-[var(--color-primary-light)] transition-all duration-300 shadow-[0_0_20px_rgba(0,0,0,0.1)]"
          >
            お申し込みはこちら
          </Link>
        </div>
      </div>
    </section>
  );
}
