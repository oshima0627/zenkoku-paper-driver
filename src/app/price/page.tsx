"use client";

import { motion } from "framer-motion";
import CTASection from "@/components/sections/CTASection";

const plans = [
  {
    name: "ベーシック",
    target: "個人向け",
    price: "16,500",
    unit: "円〜 / 1回",
    features: [
      "マンツーマン指導",
      "2時間 / 1回",
      "ご自宅まで出張",
      "マイカーで練習可能",
      "講習後アドバイスシート",
    ],
    accent: false,
  },
  {
    name: "企業スタンダード",
    target: "企業向け",
    price: "55,000",
    unit: "円〜 / 1回",
    features: [
      "座学 + 実技講習",
      "3時間 / 1回",
      "最大5名まで同時受講",
      "カスタムカリキュラム",
      "講習後レポート提出",
      "出張対応（全国）",
    ],
    accent: true,
  },
  {
    name: "企業プレミアム",
    target: "企業向け",
    price: "110,000",
    unit: "円〜 / 1回",
    features: [
      "座学 + 実技 + 診断",
      "6時間 / 1回",
      "最大10名まで同時受講",
      "フルカスタムカリキュラム",
      "詳細レポート + 改善提案",
      "フォローアップ講習1回付き",
      "出張対応（全国）",
    ],
    accent: false,
  },
];

export default function PricePage() {
  return (
    <>
      <section className="bg-[var(--color-primary)] text-white py-16">
        <div className="max-w-6xl mx-auto px-4">
          <p className="text-[var(--color-accent)] font-bold text-sm mb-2">PRICE</p>
          <h1 className="text-3xl md:text-4xl font-bold">料金</h1>
        </div>
      </section>

      <section className="py-16 md:py-24">
        <div className="max-w-6xl mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {plans.map((plan, i) => (
              <motion.div
                key={plan.name}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className={`rounded-xl overflow-hidden shadow-sm border ${
                  plan.accent ? "border-[var(--color-primary)] ring-2 ring-[var(--color-primary)]" : "border-gray-200"
                }`}
              >
                {plan.accent && (
                  <div className="bg-[var(--color-primary)] text-white text-center py-1.5 text-xs font-bold">
                    おすすめ
                  </div>
                )}
                <div className="p-6">
                  <p className="text-xs font-bold text-gray-500 mb-1">{plan.target}</p>
                  <h3 className="text-xl font-bold text-gray-900 mb-4">{plan.name}</h3>
                  <div className="mb-6">
                    <span className="text-3xl font-bold text-[var(--color-primary)]">{plan.price}</span>
                    <span className="text-sm text-gray-500">{plan.unit}</span>
                  </div>
                  <ul className="space-y-3 mb-6">
                    {plan.features.map((feat) => (
                      <li key={feat} className="flex items-start gap-2 text-sm text-gray-700">
                        <svg className="w-4 h-4 text-[var(--color-primary)] shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                        </svg>
                        {feat}
                      </li>
                    ))}
                  </ul>
                </div>
              </motion.div>
            ))}
          </div>
          <p className="text-center text-sm text-gray-500 mt-8">
            ※ 料金は税込表示です。内容・人数によって変動しますので、まずはお気軽にお問い合わせください。
          </p>
        </div>
      </section>

      <CTASection />
    </>
  );
}
