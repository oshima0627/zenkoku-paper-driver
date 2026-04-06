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

function SectionLabel({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex items-center gap-4 mb-10">
      <div className="h-px flex-1 bg-[var(--color-border)]/40" />
      <span className="text-xs font-semibold tracking-[0.2em] text-[var(--color-text-light)] uppercase">{children}</span>
      <div className="h-px flex-1 bg-[var(--color-border)]/40" />
    </div>
  );
}

export default function PriceSection() {
  return (
    <section className="py-28 md:py-36 bg-[var(--color-bg-gray)]">
      <div className="max-w-3xl mx-auto px-6">

        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-20"
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
          className="mb-16"
        >
          <SectionLabel>スクールサポートAI事業</SectionLabel>

          <div className="bg-white rounded-3xl overflow-hidden shadow-sm">
            {/* AI業務自動化 */}
            <div className="px-8 py-8 border-b border-[var(--color-border)]/30">
              <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
                <div>
                  <p className="text-base font-bold text-[var(--color-primary)] mb-1">AI業務自動化</p>
                  <p className="text-sm text-[var(--color-text-light)]">業務内容に応じて最適なプランをご提案</p>
                </div>
                <div className="sm:text-right">
                  <p className="text-2xl font-bold text-[var(--color-primary)] tracking-tight">
                    20,000<span className="text-sm font-normal text-[var(--color-text-light)] ml-1">円〜 / 月</span>
                  </p>
                  <p className="text-xs text-[var(--color-text-light)] mt-1">※業務内容に応じてお見積り</p>
                </div>
              </div>
            </div>

            {/* HP制作 */}
            <div className="px-8 py-8">
              <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
                <div>
                  <p className="text-base font-bold text-[var(--color-primary)] mb-1">HP制作</p>
                  <p className="text-sm text-[var(--color-text-light)]">デザイン・開発・運用までワンストップ</p>
                </div>
                <div className="sm:text-right">
                  <p className="text-2xl font-bold text-[var(--color-primary)] tracking-tight">
                    50,000<span className="text-sm font-normal text-[var(--color-text-light)] ml-1">円〜</span>
                  </p>
                  <p className="text-xs text-[var(--color-text-light)] mt-1">※運用費 月額10,000円〜</p>
                </div>
              </div>
            </div>
          </div>
        </motion.div>

        {/* ── 安全運転講習 ── */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <SectionLabel>安全運転講習事業（協会）</SectionLabel>

          <div className="space-y-3">

            {/* Step 1 */}
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: 0.05 }}
              className="bg-white rounded-2xl overflow-hidden shadow-sm"
            >
              <div className="px-6 py-4 border-b border-[var(--color-border)]/30 flex items-center gap-3">
                <span className="w-6 h-6 rounded-full bg-[var(--color-primary)] text-white text-xs font-bold flex items-center justify-center shrink-0">1</span>
                <span className="text-sm font-semibold text-[var(--color-primary)]">安全運転スキル診断（任意）</span>
              </div>
              <div className="flex justify-between items-center px-6 py-4">
                <span className="text-sm text-[var(--color-text-light)]">50分 / 1人あたり</span>
                <span className="text-lg font-bold text-[var(--color-primary)]">11,000<span className="text-xs font-normal text-[var(--color-text-light)] ml-1">円（税込）</span></span>
              </div>
            </motion.div>

            {/* Step 2 */}
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: 0.1 }}
              className="bg-white rounded-2xl overflow-hidden shadow-sm"
            >
              <div className="px-6 py-4 border-b border-[var(--color-border)]/30 flex items-center gap-3">
                <span className="w-6 h-6 rounded-full bg-[var(--color-primary)] text-white text-xs font-bold flex items-center justify-center shrink-0">2</span>
                <span className="text-sm font-semibold text-[var(--color-primary)]">技能教習</span>
              </div>
              <div className="divide-y divide-[var(--color-border)]/20">
                {techPlan.map((row, i) => (
                  <div key={i} className="flex justify-between items-center px-6 py-3.5">
                    <div className="flex items-center gap-3">
                      <span className="text-sm text-[var(--color-primary)]">{row.time}</span>
                      {row.popular === 1 && (
                        <span className="text-[10px] font-bold px-2 py-0.5 rounded-full border border-[var(--color-primary)] text-[var(--color-primary)]">人気No.1</span>
                      )}
                      {row.popular === 2 && (
                        <span className="text-[10px] font-bold px-2 py-0.5 rounded-full border border-[var(--color-text-light)] text-[var(--color-text-light)]">人気No.2</span>
                      )}
                    </div>
                    <span className="text-base font-bold text-[var(--color-primary)]">{row.price}<span className="text-xs font-normal text-[var(--color-text-light)] ml-1">円（税込）</span></span>
                  </div>
                ))}
              </div>
              <p className="text-xs text-[var(--color-text-light)] px-6 py-3 border-t border-[var(--color-border)]/20">※追加教習は100分毎に18,000円</p>
            </motion.div>

            {/* Step 3 */}
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: 0.15 }}
              className="bg-white rounded-2xl overflow-hidden shadow-sm"
            >
              <div className="px-6 py-4 border-b border-[var(--color-border)]/30 flex items-center gap-3">
                <span className="w-6 h-6 rounded-full bg-[var(--color-primary)] text-white text-xs font-bold flex items-center justify-center shrink-0">3</span>
                <span className="text-sm font-semibold text-[var(--color-primary)]">学科（任意）</span>
              </div>
              <div className="flex justify-between items-center px-6 py-4">
                <span className="text-sm text-[var(--color-text-light)]">50分</span>
                <span className="text-lg font-bold text-[var(--color-primary)]">18,000<span className="text-xs font-normal text-[var(--color-text-light)] ml-1">円（税込）</span></span>
              </div>
            </motion.div>

            {/* Step 4 */}
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: 0.2 }}
              className="bg-white rounded-2xl overflow-hidden shadow-sm"
            >
              <div className="px-6 py-4 border-b border-[var(--color-border)]/30 flex items-center gap-3">
                <span className="w-6 h-6 rounded-full bg-[var(--color-primary)] text-white text-xs font-bold flex items-center justify-center shrink-0">4</span>
                <span className="text-sm font-semibold text-[var(--color-primary)]">最終運転技能チェック（必須）</span>
              </div>
              <div className="flex justify-between items-center px-6 py-4">
                <span className="text-sm text-[var(--color-text-light)]">50分</span>
                <span className="text-lg font-bold text-[var(--color-primary)]">11,000<span className="text-xs font-normal text-[var(--color-text-light)] ml-1">円（税込）</span></span>
              </div>
            </motion.div>

            {/* その他費用 */}
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: 0.25 }}
              className="bg-white rounded-2xl shadow-sm overflow-hidden"
            >
              <div className="px-6 py-4 border-b border-[var(--color-border)]/30">
                <span className="text-sm font-semibold text-[var(--color-primary)]">その他費用</span>
              </div>
              <div className="divide-y divide-[var(--color-border)]/20">
                <div className="flex justify-between items-center px-6 py-3.5">
                  <span className="text-sm text-[var(--color-text-light)]">修了証明書発行</span>
                  <span className="text-sm font-medium text-[var(--color-primary)]">1人 5,000円</span>
                </div>
                <div className="flex justify-between items-center px-6 py-3.5">
                  <span className="text-sm text-[var(--color-text-light)]">教習報告書作成</span>
                  <span className="text-sm font-medium text-[var(--color-primary)]">1回 3,000円</span>
                </div>
              </div>
              <p className="text-xs text-[var(--color-text-light)] px-6 py-3 border-t border-[var(--color-border)]/20">※高速料金、コインパーキング代は別途</p>
            </motion.div>

          </div>
        </motion.div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.1 }}
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
