"use client";

import Link from "next/link";
import { motion } from "framer-motion";

const techPlan = [
  { time: "100分 × 1日", price: "18,000", popular: 0 },
  { time: "100分 × 2日", price: "36,000", popular: 0 },
  { time: "100分 × 3日", price: "54,000", popular: 1 },
  { time: "100分 × 4日", price: "72,000", popular: 2 },
  { time: "100分 × 5日", price: "90,000", popular: 0 },
];

export default function PriceSection() {
  return (
    <section className="py-28 md:py-36 bg-white">
      <div className="max-w-3xl mx-auto px-6">

        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-24"
        >
          <p className="text-xs font-medium tracking-[0.25em] text-[var(--color-accent)] uppercase mb-3">Price</p>
          <h1 className="text-3xl sm:text-4xl font-bold text-[var(--color-primary)] tracking-tight">料金案内</h1>
        </motion.div>

        {/* ── AI事業 ── */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-20"
        >
          <div className="mb-8">
            <p className="text-[11px] font-semibold tracking-[0.2em] text-[var(--color-accent)] uppercase mb-1">School Support AI</p>
            <h2 className="text-xl font-bold text-[var(--color-primary)]">スクールサポートAI事業</h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {[
              { title: "AI業務自動化", desc: "業務内容に応じて最適なプランをご提案", price: "20,000", unit: "円〜 / 月", note: "業務内容に応じてお見積り" },
              { title: "HP制作", desc: "デザイン・開発・運用までワンストップ", price: "50,000", unit: "円〜", note: "運用費 月額10,000円〜" },
            ].map((item, i) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className="bg-[var(--color-bg-gray)] rounded-2xl p-7 flex flex-col justify-between gap-6"
              >
                <div>
                  <p className="text-base font-bold text-[var(--color-primary)] mb-1.5">{item.title}</p>
                  <p className="text-sm text-[var(--color-text-light)] leading-relaxed">{item.desc}</p>
                </div>
                <div>
                  <p className="text-3xl font-bold text-[var(--color-primary)] tracking-tight">
                    {item.price}
                    <span className="text-sm font-normal text-[var(--color-text-light)] ml-1.5">{item.unit}</span>
                  </p>
                  <p className="text-xs text-[var(--color-text-light)] mt-2">※{item.note}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Divider */}
        <div className="border-t border-[var(--color-border)]/40 mb-20" />

        {/* ── 安全運転講習 ── */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <div className="mb-8">
            <p className="text-[11px] font-semibold tracking-[0.2em] text-[var(--color-accent)] uppercase mb-1">Safety Driving</p>
            <h2 className="text-xl font-bold text-[var(--color-primary)]">安全運転講習事業（協会）</h2>
          </div>

          <div className="space-y-3">

            {[
              { step: 1, title: "安全運転スキル診断（任意）", sub: "50分 / 1人あたり", price: "11,000", note: null, rows: null },
              { step: 3, title: "学科（任意）", sub: "50分", price: "18,000", note: null, rows: null },
              { step: 4, title: "最終運転技能チェック（必須）", sub: "50分", price: "11,000", note: null, rows: null },
            ].slice(0, 1).map((item, i) => (
              <motion.div
                key={item.step}
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: i * 0.05 }}
                className="bg-[var(--color-bg-gray)] rounded-2xl overflow-hidden"
              >
                <div className="px-6 py-4 flex items-center gap-3 border-b border-white/60">
                  <span className="w-6 h-6 rounded-full bg-[var(--color-primary)] text-white text-[11px] font-bold flex items-center justify-center shrink-0">{item.step}</span>
                  <span className="text-sm font-semibold text-[var(--color-primary)]">{item.title}</span>
                </div>
                <div className="flex justify-between items-center px-6 py-4">
                  <span className="text-sm text-[var(--color-text-light)]">{item.sub}</span>
                  <span className="text-xl font-bold text-[var(--color-primary)] tracking-tight">{item.price}<span className="text-xs font-normal text-[var(--color-text-light)] ml-1">円（税込）</span></span>
                </div>
              </motion.div>
            ))}

            {/* Step 2: 技能教習 */}
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: 0.08 }}
              className="bg-[var(--color-bg-gray)] rounded-2xl overflow-hidden"
            >
              <div className="px-6 py-4 flex items-center gap-3 border-b border-white/60">
                <span className="w-6 h-6 rounded-full bg-[var(--color-primary)] text-white text-[11px] font-bold flex items-center justify-center shrink-0">2</span>
                <span className="text-sm font-semibold text-[var(--color-primary)]">技能教習</span>
              </div>
              {techPlan.map((row, i) => (
                <div key={i} className={`flex justify-between items-center px-6 py-3.5 ${i > 0 ? "border-t border-white/60" : ""}`}>
                  <div className="flex items-center gap-3">
                    <span className="text-sm text-[var(--color-primary)]">{row.time}</span>
                    {row.popular === 1 && (
                      <span className="text-[10px] font-bold px-2.5 py-0.5 rounded-full bg-[var(--color-primary)] text-white">人気No.1</span>
                    )}
                    {row.popular === 2 && (
                      <span className="text-[10px] font-bold px-2.5 py-0.5 rounded-full bg-[var(--color-text-light)]/20 text-[var(--color-text-light)]">人気No.2</span>
                    )}
                  </div>
                  <span className="text-base font-bold text-[var(--color-primary)] tracking-tight">{row.price}<span className="text-xs font-normal text-[var(--color-text-light)] ml-1">円</span></span>
                </div>
              ))}
              <div className="px-6 py-3 border-t border-white/60">
                <p className="text-xs text-[var(--color-text-light)]">※追加教習は100分毎に18,000円　／　記載の金額は税込</p>
              </div>
            </motion.div>

            {/* Step 3 & 4 */}
            {[
              { step: 3, title: "学科（任意）", sub: "50分", price: "18,000" },
              { step: 4, title: "最終運転技能チェック（必須）", sub: "50分", price: "11,000" },
            ].map((item, i) => (
              <motion.div
                key={item.step}
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: 0.12 + i * 0.05 }}
                className="bg-[var(--color-bg-gray)] rounded-2xl overflow-hidden"
              >
                <div className="px-6 py-4 flex items-center gap-3 border-b border-white/60">
                  <span className="w-6 h-6 rounded-full bg-[var(--color-primary)] text-white text-[11px] font-bold flex items-center justify-center shrink-0">{item.step}</span>
                  <span className="text-sm font-semibold text-[var(--color-primary)]">{item.title}</span>
                </div>
                <div className="flex justify-between items-center px-6 py-4">
                  <span className="text-sm text-[var(--color-text-light)]">{item.sub}</span>
                  <span className="text-xl font-bold text-[var(--color-primary)] tracking-tight">{item.price}<span className="text-xs font-normal text-[var(--color-text-light)] ml-1">円（税込）</span></span>
                </div>
              </motion.div>
            ))}

            {/* その他費用 */}
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: 0.22 }}
              className="bg-[var(--color-bg-gray)] rounded-2xl overflow-hidden"
            >
              <div className="px-6 py-4 border-b border-white/60">
                <span className="text-sm font-semibold text-[var(--color-primary)]">その他費用</span>
              </div>
              <div className="divide-y divide-white/60">
                <div className="flex justify-between items-center px-6 py-3.5">
                  <span className="text-sm text-[var(--color-text-light)]">修了証明書発行</span>
                  <span className="text-sm font-semibold text-[var(--color-primary)]">1人 5,000円</span>
                </div>
                <div className="flex justify-between items-center px-6 py-3.5">
                  <span className="text-sm text-[var(--color-text-light)]">教習報告書作成</span>
                  <span className="text-sm font-semibold text-[var(--color-primary)]">1回 3,000円</span>
                </div>
              </div>
              <p className="text-xs text-[var(--color-text-light)] px-6 py-3 border-t border-white/60">※高速料金、コインパーキング代は別途</p>
            </motion.div>

          </div>
        </motion.div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mt-16"
        >
          <Link
            href="/contact"
            className="inline-flex items-center justify-center px-12 py-4 text-sm font-medium text-white bg-[var(--color-primary)] rounded-full hover:bg-[var(--color-primary-light)] transition-all duration-300"
          >
            お申し込みはこちら
          </Link>
        </motion.div>

      </div>
    </section>
  );
}
