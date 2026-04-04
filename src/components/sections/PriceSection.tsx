"use client";

import Link from "next/link";
import { motion } from "framer-motion";

const techPlan = [
  { time: "100分×1日", price: "18,000", note: "", popular: 0 },
  { time: "100分×2日", price: "36,000", note: "", popular: 0 },
  { time: "100分×3日", price: "54,000", note: "1番人気", popular: 1 },
  { time: "100分×4日", price: "72,000", note: "2番人気", popular: 2 },
  { time: "100分×5日", price: "90,000", note: "", popular: 0 },
];

function StepCard({
  step,
  title,
  subtitle,
  note,
  children,
  delay,
}: {
  step: number;
  title: string;
  subtitle?: string;
  note?: string;
  children: React.ReactNode;
  delay: number;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 25 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay }}
      className="bg-white rounded-2xl shadow-md overflow-hidden border border-gray-100"
    >
      {/* Header */}
      <div className="bg-gradient-to-r from-[var(--color-site)] to-[var(--color-site-dark)] px-6 py-4">
        <div className="flex items-center gap-3">
          <span className="inline-flex items-center justify-center w-8 h-8 rounded-full bg-white/20 text-white text-xs font-bold">
            {step}
          </span>
          <div>
            <h3 className="text-white font-bold text-sm sm:text-base">{title}</h3>
            {subtitle && <p className="text-white/70 text-xs mt-0.5">{subtitle}</p>}
          </div>
        </div>
        {note && <p className="text-white/60 text-xs mt-2">{note}</p>}
      </div>
      {/* Content */}
      <div className="p-1">{children}</div>
    </motion.div>
  );
}

export default function PriceSection() {
  return (
    <section className="py-16 md:py-24 bg-gray-50 border-t border-gray-100">
      <div className="max-w-3xl mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-xl sm:text-2xl md:text-3xl font-bold text-gray-900">料金案内</h2>
          <p className="text-sm text-[var(--color-accent)] mt-1">-PRICE-</p>
          <p className="text-sm text-gray-500 mt-4">安全運転講習料金プラン</p>
        </div>

        <div className="space-y-6">
          {/* STEP 1: スキル診断 */}
          <StepCard
            step={1}
            title="安全運転スキル診断（任意）"
            subtitle="50分 / 1人あたり"
            note="※教習時間を悩まれている場合の診断"
            delay={0}
          >
            <div className="flex justify-between items-center px-5 py-4">
              <span className="text-sm text-gray-600">50分</span>
              <span className="text-xl font-bold text-[var(--color-primary)]">
                11,000<span className="text-xs font-normal text-gray-400 ml-1">円（税込）</span>
              </span>
            </div>
          </StepCard>

          {/* Arrow */}
          <div className="flex justify-center">
            <svg className="w-6 h-6 text-[var(--color-site)]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
            </svg>
          </div>

          {/* STEP 2: 技能教習 */}
          <StepCard
            step={2}
            title="技能教習"
            subtitle="初回運転適正検査込み"
            delay={0.1}
          >
            <div className="divide-y divide-gray-100">
              {techPlan.map((row, i) => (
                <div
                  key={i}
                  className={`flex justify-between items-center px-5 py-3.5 ${row.popular === 1 ? "bg-amber-50" : row.popular === 2 ? "bg-orange-50" : ""}`}
                >
                  <div className="flex items-center gap-3">
                    <span className="text-sm text-gray-700">{row.time}</span>
                    {row.note && (
                      <span className={`text-[10px] font-bold px-2 py-0.5 rounded-full ${row.popular === 1 ? "bg-amber-400 text-white" : "bg-orange-300 text-white"}`}>
                        {row.note}
                      </span>
                    )}
                  </div>
                  <span className={`text-lg font-bold ${row.popular ? "text-[var(--color-accent)]" : "text-gray-900"}`}>
                    {row.price}<span className="text-xs font-normal text-gray-400 ml-1">円（税込）</span>
                  </span>
                </div>
              ))}
            </div>
            <p className="text-[11px] text-[var(--color-accent)] px-5 py-3 bg-gray-50 rounded-b-xl">
              ※安全運転スキル診断を受講された場合、担当指導員より必要日数の目安をお伝え致します。
              <br />※追加教習は、100分毎に18,000円
            </p>
          </StepCard>

          {/* Arrow */}
          <div className="flex justify-center">
            <svg className="w-6 h-6 text-[var(--color-site)]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
            </svg>
          </div>

          {/* STEP 3: 学科学 */}
          <StepCard
            step={3}
            title="学科学（任意）"
            note="※会場を借りる場合は別途支給"
            delay={0.2}
          >
            <div className="flex justify-between items-center px-5 py-4">
              <span className="text-sm text-gray-600">50分</span>
              <span className="text-xl font-bold text-[var(--color-primary)]">
                18,000<span className="text-xs font-normal text-gray-400 ml-1">円（税込）</span>
              </span>
            </div>
          </StepCard>

          {/* Arrow */}
          <div className="flex justify-center">
            <svg className="w-6 h-6 text-[var(--color-site)]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
            </svg>
          </div>

          {/* STEP 4: 最終チェック */}
          <StepCard
            step={4}
            title="最終運転技能チェック / 人（必須）"
            note="※責任者の同乗可能"
            delay={0.3}
          >
            <div className="flex justify-between items-center px-5 py-4">
              <span className="text-sm text-gray-600">50分</span>
              <span className="text-xl font-bold text-[var(--color-accent)]">
                11,000<span className="text-xs font-normal text-gray-400 ml-1">円（税込）</span>
              </span>
            </div>
          </StepCard>
        </div>

        {/* その他費用 */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="mt-12"
        >
          <h3 className="text-center text-lg font-bold text-gray-900 mb-6">その他費用</h3>
          <div className="bg-white rounded-2xl shadow-md border border-gray-100 overflow-hidden">
            <div className="divide-y divide-gray-100">
              <div className="flex justify-between items-center px-6 py-4">
                <span className="flex items-center gap-3 text-sm text-gray-700">
                  <span className="w-2 h-2 rounded-full bg-[var(--color-site)]"></span>
                  修了証明書発行
                </span>
                <span className="text-sm font-bold text-[var(--color-primary)]">1人 5,000円</span>
              </div>
              <div className="flex justify-between items-center px-6 py-4">
                <span className="flex items-center gap-3 text-sm text-gray-700">
                  <span className="w-2 h-2 rounded-full bg-[var(--color-site)]"></span>
                  教習報告書作成
                </span>
                <span className="text-sm font-bold text-[var(--color-primary)]">1回 3,000円</span>
              </div>
            </div>
            <div className="px-6 py-3 bg-gray-50">
              <p className="text-[11px] text-[var(--color-accent)]">※高速料金、駐車場におけるコインパーキング代は別途支給</p>
            </div>
          </div>
        </motion.div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="text-center mt-12"
        >
          <Link
            href="/contact"
            className="inline-flex items-center justify-center gap-2 w-full max-w-md px-8 py-4 text-lg font-bold bg-[var(--color-primary)] text-white rounded-full hover:bg-[var(--color-primary-dark)] transition-all hover:shadow-lg"
          >
            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
              <path d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
            </svg>
            お申し込みはこちら
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
