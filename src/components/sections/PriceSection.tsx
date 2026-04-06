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
    <section className="bg-white">

      {/* Hero */}
      <div className="py-28 md:py-36 text-center bg-[var(--color-bg-gray)]">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <p className="text-xs font-medium tracking-[0.25em] text-[var(--color-accent)] uppercase mb-3">Price</p>
          <h1 className="text-3xl sm:text-5xl font-bold text-[var(--color-primary)] tracking-tight">料金案内</h1>
          <p className="mt-4 text-sm text-[var(--color-text-light)]">2つの事業それぞれの料金をご確認いただけます</p>
        </motion.div>
      </div>

      {/* ── AI事業 ── */}
      <div className="py-20 md:py-28">
        <div className="max-w-3xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="mb-10"
          >
            <div className="inline-flex items-center gap-2 bg-blue-50 text-[var(--color-accent)] text-xs font-semibold px-4 py-1.5 rounded-full mb-4">
              スクールサポートAI事業
            </div>
          </motion.div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
            {[
              {
                title: "AI業務自動化",
                desc: "業務内容に応じて最適なプランをご提案",
                price: "20,000",
                unit: "円〜 / 月",
                note: "業務内容に応じてお見積り",
              },
              {
                title: "HP制作",
                desc: "デザイン・開発・運用までワンストップ",
                price: "50,000",
                unit: "円〜",
                note: "運用費 月額10,000円〜",
              },
            ].map((item, i) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className="relative bg-white border border-[var(--color-border)]/60 rounded-3xl p-8 overflow-hidden"
              >
                {/* Top accent bar */}
                <div className="absolute top-0 left-0 right-0 h-1 bg-[var(--color-accent)]" />
                <p className="text-base font-bold text-[var(--color-primary)] mb-2">{item.title}</p>
                <p className="text-sm text-[var(--color-text-light)] leading-relaxed mb-8">{item.desc}</p>
                <p className="text-4xl font-bold text-[var(--color-primary)] tracking-tight">
                  {item.price}
                  <span className="text-base font-normal text-[var(--color-text-light)] ml-1.5">{item.unit}</span>
                </p>
                <p className="text-xs text-[var(--color-text-light)] mt-2">※{item.note}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>

      {/* ── 安全運転講習 ── */}
      <div className="py-20 md:py-28 bg-[var(--color-bg-gray)]">
        <div className="max-w-3xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="mb-10"
          >
            <div className="inline-flex items-center gap-2 bg-slate-100 text-[var(--color-primary)] text-xs font-semibold px-4 py-1.5 rounded-full mb-4">
              安全運転講習事業（協会）
            </div>
          </motion.div>

          <div className="space-y-4">

            {/* Step 1 */}
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: 0.05 }}
              className="bg-white rounded-2xl overflow-hidden border border-[var(--color-border)]/40"
            >
              <div className="px-6 py-4 flex items-center justify-between border-b border-[var(--color-border)]/30">
                <div className="flex items-center gap-3">
                  <span className="w-7 h-7 rounded-full bg-[var(--color-accent)] text-white text-xs font-bold flex items-center justify-center shrink-0">1</span>
                  <span className="text-sm font-semibold text-[var(--color-primary)]">安全運転スキル診断</span>
                  <span className="text-xs text-[var(--color-text-light)] bg-[var(--color-bg-gray)] px-2.5 py-0.5 rounded-full">任意</span>
                </div>
                <div className="text-right">
                  <span className="text-xl font-bold text-[var(--color-primary)] tracking-tight">11,000</span>
                  <span className="text-xs text-[var(--color-text-light)] ml-1">円（税込）</span>
                </div>
              </div>
              <div className="px-6 py-3">
                <p className="text-xs text-[var(--color-text-light)]">50分 / 1人あたり</p>
              </div>
            </motion.div>

            {/* Step 2 */}
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: 0.1 }}
              className="bg-white rounded-2xl overflow-hidden border border-[var(--color-border)]/40"
            >
              <div className="px-6 py-4 flex items-center gap-3 border-b border-[var(--color-border)]/30">
                <span className="w-7 h-7 rounded-full bg-[var(--color-accent)] text-white text-xs font-bold flex items-center justify-center shrink-0">2</span>
                <span className="text-sm font-semibold text-[var(--color-primary)]">技能教習</span>
              </div>
              {techPlan.map((row, i) => (
                <div key={i} className={`flex justify-between items-center px-6 py-4 ${i > 0 ? "border-t border-[var(--color-border)]/20" : ""}`}>
                  <div className="flex items-center gap-3">
                    <span className="text-sm text-[var(--color-primary)]">{row.time}</span>
                    {row.popular === 1 && (
                      <span className="text-[10px] font-bold px-2.5 py-0.5 rounded-full bg-[var(--color-accent)] text-white">人気No.1</span>
                    )}
                    {row.popular === 2 && (
                      <span className="text-[10px] font-bold px-2.5 py-0.5 rounded-full bg-[var(--color-bg-gray)] text-[var(--color-text-light)]">人気No.2</span>
                    )}
                  </div>
                  <div className="text-right">
                    <span className="text-lg font-bold text-[var(--color-primary)] tracking-tight">{row.price}</span>
                    <span className="text-xs text-[var(--color-text-light)] ml-1">円</span>
                  </div>
                </div>
              ))}
              <div className="px-6 py-3 border-t border-[var(--color-border)]/20 bg-[var(--color-bg-gray)]/50">
                <p className="text-xs text-[var(--color-text-light)]">※追加教習は100分毎に18,000円　／　記載の金額はすべて税込</p>
              </div>
            </motion.div>

            {/* Step 3 */}
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: 0.15 }}
              className="bg-white rounded-2xl overflow-hidden border border-[var(--color-border)]/40"
            >
              <div className="px-6 py-4 flex items-center justify-between border-b border-[var(--color-border)]/30">
                <div className="flex items-center gap-3">
                  <span className="w-7 h-7 rounded-full bg-[var(--color-accent)] text-white text-xs font-bold flex items-center justify-center shrink-0">3</span>
                  <span className="text-sm font-semibold text-[var(--color-primary)]">学科</span>
                  <span className="text-xs text-[var(--color-text-light)] bg-[var(--color-bg-gray)] px-2.5 py-0.5 rounded-full">任意</span>
                </div>
                <div className="text-right">
                  <span className="text-xl font-bold text-[var(--color-primary)] tracking-tight">18,000</span>
                  <span className="text-xs text-[var(--color-text-light)] ml-1">円（税込）</span>
                </div>
              </div>
              <div className="px-6 py-3">
                <p className="text-xs text-[var(--color-text-light)]">50分</p>
              </div>
            </motion.div>

            {/* Step 4 */}
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: 0.2 }}
              className="bg-white rounded-2xl overflow-hidden border border-[var(--color-border)]/40"
            >
              <div className="px-6 py-4 flex items-center justify-between border-b border-[var(--color-border)]/30">
                <div className="flex items-center gap-3">
                  <span className="w-7 h-7 rounded-full bg-[var(--color-accent)] text-white text-xs font-bold flex items-center justify-center shrink-0">4</span>
                  <span className="text-sm font-semibold text-[var(--color-primary)]">最終運転技能チェック</span>
                  <span className="text-xs font-medium text-[var(--color-accent)] bg-blue-50 px-2.5 py-0.5 rounded-full">必須</span>
                </div>
                <div className="text-right">
                  <span className="text-xl font-bold text-[var(--color-primary)] tracking-tight">11,000</span>
                  <span className="text-xs text-[var(--color-text-light)] ml-1">円（税込）</span>
                </div>
              </div>
              <div className="px-6 py-3">
                <p className="text-xs text-[var(--color-text-light)]">50分</p>
              </div>
            </motion.div>

            {/* その他費用 */}
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: 0.25 }}
              className="bg-white rounded-2xl overflow-hidden border border-[var(--color-border)]/40"
            >
              <div className="px-6 py-4 border-b border-[var(--color-border)]/30">
                <span className="text-sm font-semibold text-[var(--color-primary)]">その他費用</span>
              </div>
              <div className="divide-y divide-[var(--color-border)]/20">
                <div className="flex justify-between items-center px-6 py-4">
                  <span className="text-sm text-[var(--color-text-light)]">修了証明書発行</span>
                  <span className="text-sm font-semibold text-[var(--color-primary)]">1人 5,000円</span>
                </div>
                <div className="flex justify-between items-center px-6 py-4">
                  <span className="text-sm text-[var(--color-text-light)]">教習報告書作成</span>
                  <span className="text-sm font-semibold text-[var(--color-primary)]">1回 3,000円</span>
                </div>
              </div>
              <div className="px-6 py-3 border-t border-[var(--color-border)]/20 bg-[var(--color-bg-gray)]/50">
                <p className="text-xs text-[var(--color-text-light)]">※高速料金、コインパーキング代は別途</p>
              </div>
            </motion.div>

          </div>
        </div>
      </div>

      {/* CTA */}
      <div className="py-16 bg-white text-center">
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <p className="text-sm text-[var(--color-text-light)] mb-6">ご不明な点はお気軽にお問い合わせください</p>
          <Link
            href="/contact"
            className="inline-flex items-center justify-center px-12 py-4 text-sm font-medium text-white bg-[var(--color-primary)] rounded-full hover:bg-[var(--color-primary-light)] transition-all duration-300"
          >
            お申し込み・お問い合わせ
          </Link>
        </motion.div>
      </div>

    </section>
  );
}
