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

function ChevronDown() {
  return (
    <div className="flex justify-center my-1">
      <svg className="w-5 h-5 text-gray-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
      </svg>
    </div>
  );
}

interface PlanCardProps {
  number: number;
  title: string;
  subtitle: string;
  description: string;
  price: string;
  unit: string;
  note?: string;
  delay?: number;
}

function PlanCard({ number, title, subtitle, description, price, unit, note, delay = 0 }: PlanCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 16 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay, ease: [0.25, 0.1, 0, 1] }}
      className="bg-white rounded-2xl overflow-hidden shadow-md"
    >
      <div className="flex items-center gap-4 px-6 py-4 bg-gradient-to-l from-blue-400 to-blue-600">
        <span className="w-8 h-8 rounded-full bg-white/20 text-white text-sm font-bold flex items-center justify-center shrink-0">
          {number}
        </span>
        <div>
          <p className="text-base font-bold text-white leading-tight">{title}</p>
          <p className="text-xs text-white/75 mt-0.5">{subtitle}</p>
        </div>
      </div>
      <div className="px-6 py-5 flex items-start justify-between gap-4">
        <div className="flex-1">
          <p className="text-sm text-gray-500 leading-relaxed">{description}</p>
          {note && <p className="text-xs text-gray-400 mt-1">※{note}</p>}
        </div>
        <div className="text-right shrink-0">
          <p className="text-2xl font-bold text-blue-600 leading-tight">{price}</p>
          <p className="text-xs text-gray-400 mt-0.5">{unit}</p>
        </div>
      </div>
    </motion.div>
  );
}

export default function PriceSection() {
  return (
    <section id="price">

      {/* ── 安全運転講習 ── */}
      <div className="py-28 md:py-36">
        <div className="max-w-2xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-10"
          >
            <span className="inline-flex items-center px-4 py-1.5 rounded-full bg-purple-50 text-purple-600 text-xs font-semibold mb-4">安全運転講習事業</span>
            <h2 className="text-3xl sm:text-4xl font-bold text-[var(--color-primary)] tracking-tight">料金案内</h2>
          </motion.div>

          <div className="space-y-2">
            {/* Step 1 */}
            <PlanCard
              number={1}
              title="安全運転スキル診断"
              subtitle="任意"
              description="50分 / 1人あたり"
              price="¥11,000"
              unit="円（税込）"
              delay={0}
            />
            <ChevronDown />

            {/* Step 2: 技能教習 with sub-table */}
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1, ease: [0.25, 0.1, 0, 1] }}
              className="bg-white rounded-2xl overflow-hidden shadow-md"
            >
              <div className="flex items-center gap-4 px-6 py-4 bg-gradient-to-l from-blue-400 to-blue-600">
                <span className="w-8 h-8 rounded-full bg-white/20 text-white text-sm font-bold flex items-center justify-center shrink-0">
                  2
                </span>
                <div>
                  <p className="text-base font-bold text-white leading-tight">技能教習</p>
                  <p className="text-xs text-white/75 mt-0.5">100分単位でお選びいただけます</p>
                </div>
              </div>
              {techPlan.map((row, i) => (
                <div
                  key={i}
                  className={`flex items-center justify-between px-6 ${row.popular > 0 ? "py-4" : "py-3.5"} ${i > 0 ? "border-t border-gray-100" : ""} ${row.popular === 1 ? "bg-blue-50/50" : ""}`}
                >
                  <div className="flex items-center gap-3">
                    <span className={`text-sm ${row.popular > 0 ? "font-bold text-[var(--color-primary)]" : "text-gray-700"}`}>{row.time}</span>
                    {row.popular === 1 && (
                      <span className="text-[10px] font-bold px-2.5 py-0.5 rounded-full bg-gradient-to-l from-blue-400 to-blue-600 text-white">人気No.1</span>
                    )}
                    {row.popular === 2 && (
                      <span className="text-[10px] font-bold px-2.5 py-0.5 rounded-full bg-gray-100 text-gray-500">人気No.2</span>
                    )}
                  </div>
                  <div className="text-right">
                    <span className={`font-bold ${row.popular > 0 ? "text-2xl text-blue-600" : "text-lg text-[var(--color-primary)]"}`}>{row.price}</span>
                    <span className="text-xs text-gray-400 ml-1">円</span>
                  </div>
                </div>
              ))}
              <div className="px-6 py-3 border-t border-gray-100 bg-gray-50">
                <p className="text-xs text-gray-400">※追加教習は100分毎に18,000円　／　記載の金額はすべて税込</p>
              </div>
            </motion.div>
            <ChevronDown />

            {/* Step 3 */}
            <PlanCard
              number={3}
              title="学科"
              subtitle="任意"
              description="50分"
              price="¥18,000"
              unit="円（税込）"
              delay={0.2}
            />
            <ChevronDown />

            {/* Step 4 */}
            <PlanCard
              number={4}
              title="最終運転技能チェック"
              subtitle="必須"
              description="50分"
              price="¥11,000"
              unit="円（税込）"
              delay={0.25}
            />

            {/* その他費用 */}
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.3, ease: [0.25, 0.1, 0, 1] }}
              className="mt-6 bg-white rounded-2xl overflow-hidden shadow-md"
            >
              <div className="px-6 py-4 border-b border-gray-100">
                <p className="text-sm font-bold text-[var(--color-primary)]">その他費用</p>
              </div>
              <div className="divide-y divide-gray-100">
                <div className="flex justify-between items-center px-6 py-3.5">
                  <span className="text-sm text-gray-500">修了証明書発行</span>
                  <span className="text-sm font-semibold text-blue-600">1人 ¥5,000</span>
                </div>
                <div className="flex justify-between items-center px-6 py-3.5">
                  <span className="text-sm text-gray-500">教習報告書作成</span>
                  <span className="text-sm font-semibold text-blue-600">1回 ¥3,000</span>
                </div>
              </div>
              <div className="px-6 py-3 border-t border-gray-100 bg-gray-50">
                <p className="text-xs text-gray-400">※高速料金、コインパーキング代は別途</p>
              </div>
            </motion.div>
          </div>
        </div>
      </div>

      {/* CTA */}
      <div className="py-16 text-center">
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
