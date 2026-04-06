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
    <section className="py-20 md:py-28 bg-white">
      <div className="max-w-4xl mx-auto px-4">
        <div className="text-center mb-16">
          <p className="text-sm font-medium text-[var(--color-text-light)] tracking-widest uppercase mb-2">Price</p>
          <h2 className="text-2xl sm:text-3xl font-bold text-[var(--color-primary)]">料金案内</h2>
        </div>

        {/* AI Support Pricing */}
        <div className="mb-20">
          <h3 className="text-center text-lg font-bold text-[var(--color-primary)] mb-8">AIサポート事業</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {[
              { title: "AI業務自動化", desc: "業務内容に応じて最適なプランをご提案" },
              { title: "HP制作", desc: "デザイン・開発・運用までワンストップ" },
            ].map((item, i) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className="bg-[var(--color-bg-gray)] rounded-2xl p-8"
              >
                <h4 className="text-base font-bold text-[var(--color-primary)] mb-2">{item.title}</h4>
                <p className="text-sm text-[var(--color-text-light)] mb-4">{item.desc}</p>
                <p className="text-2xl font-bold text-[var(--color-primary)]">要お見積り</p>
                <p className="text-xs text-[var(--color-text-light)] mt-2">※個別にお見積りいたします</p>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Driving Pricing */}
        <div>
          <h3 className="text-center text-lg font-bold text-[var(--color-primary)] mb-8">安全運転講習事業</h3>

          <div className="space-y-6 max-w-3xl mx-auto">
            {/* Steps */}
            {[
              { step: 1, title: "安全運転スキル診断（任意）", sub: "50分 / 1人あたり", price: "11,000" },
            ].map((item) => (
              <div key={item.step} className="bg-[var(--color-bg-gray)] rounded-2xl overflow-hidden">
                <div className="bg-[var(--color-primary)] px-6 py-3 flex items-center gap-3">
                  <span className="w-7 h-7 rounded-full bg-white/20 text-white text-xs font-bold flex items-center justify-center">{item.step}</span>
                  <span className="text-white text-sm font-medium">{item.title}</span>
                </div>
                <div className="flex justify-between items-center px-6 py-4">
                  <span className="text-sm text-[var(--color-text-light)]">{item.sub}</span>
                  <span className="text-lg font-bold text-[var(--color-primary)]">{item.price}<span className="text-xs font-normal text-[var(--color-text-light)] ml-1">円（税込）</span></span>
                </div>
              </div>
            ))}

            {/* Step 2: Tech Plan */}
            <div className="bg-[var(--color-bg-gray)] rounded-2xl overflow-hidden">
              <div className="bg-[var(--color-primary)] px-6 py-3 flex items-center gap-3">
                <span className="w-7 h-7 rounded-full bg-white/20 text-white text-xs font-bold flex items-center justify-center">2</span>
                <span className="text-white text-sm font-medium">技能教習</span>
              </div>
              <div className="divide-y divide-[var(--color-border)]/50">
                {techPlan.map((row, i) => (
                  <div key={i} className="flex justify-between items-center px-6 py-3.5">
                    <div className="flex items-center gap-3">
                      <span className="text-sm text-[var(--color-primary)]">{row.time}</span>
                      {row.popular === 1 && <span className="text-[10px] font-bold px-2 py-0.5 rounded-full bg-[var(--color-primary)] text-white">1番人気</span>}
                      {row.popular === 2 && <span className="text-[10px] font-bold px-2 py-0.5 rounded-full bg-[var(--color-text-light)] text-white">2番人気</span>}
                    </div>
                    <span className="text-lg font-bold text-[var(--color-primary)]">{row.price}<span className="text-xs font-normal text-[var(--color-text-light)] ml-1">円（税込）</span></span>
                  </div>
                ))}
              </div>
              <p className="text-xs text-[var(--color-text-light)] px-6 py-3">※追加教習は100分毎に18,000円</p>
            </div>

            {/* Step 3 & 4 */}
            {[
              { step: 3, title: "学科学（任意）", sub: "50分", price: "18,000" },
              { step: 4, title: "最終運転技能チェック（必須）", sub: "50分", price: "11,000" },
            ].map((item) => (
              <div key={item.step} className="bg-[var(--color-bg-gray)] rounded-2xl overflow-hidden">
                <div className="bg-[var(--color-primary)] px-6 py-3 flex items-center gap-3">
                  <span className="w-7 h-7 rounded-full bg-white/20 text-white text-xs font-bold flex items-center justify-center">{item.step}</span>
                  <span className="text-white text-sm font-medium">{item.title}</span>
                </div>
                <div className="flex justify-between items-center px-6 py-4">
                  <span className="text-sm text-[var(--color-text-light)]">{item.sub}</span>
                  <span className="text-lg font-bold text-[var(--color-primary)]">{item.price}<span className="text-xs font-normal text-[var(--color-text-light)] ml-1">円（税込）</span></span>
                </div>
              </div>
            ))}

            {/* Other costs */}
            <div className="bg-[var(--color-bg-gray)] rounded-2xl p-6">
              <h4 className="text-sm font-bold text-[var(--color-primary)] mb-4">その他費用</h4>
              <div className="space-y-3 text-sm">
                <div className="flex justify-between"><span className="text-[var(--color-text-light)]">修了証明書発行</span><span className="font-medium text-[var(--color-primary)]">1人 5,000円</span></div>
                <div className="flex justify-between"><span className="text-[var(--color-text-light)]">教習報告書作成</span><span className="font-medium text-[var(--color-primary)]">1回 3,000円</span></div>
              </div>
              <p className="text-xs text-[var(--color-text-light)] mt-4">※高速料金、コインパーキング代は別途</p>
            </div>
          </div>
        </div>

        {/* CTA */}
        <div className="text-center mt-16">
          <Link
            href="/contact"
            className="inline-flex items-center justify-center px-10 py-3.5 text-sm font-medium text-white bg-[var(--color-primary)] rounded-full hover:bg-[var(--color-primary-light)] transition-colors"
          >
            お申し込みはこちら
          </Link>
        </div>
      </div>
    </section>
  );
}
