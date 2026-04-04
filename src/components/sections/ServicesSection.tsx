"use client";

import Link from "next/link";
import { motion } from "framer-motion";

const services = [
  {
    title: "企業向け安全運転講習",
    description: "従業員の交通事故防止を目的とした実践的な講習。座学と実技を組み合わせた総合プログラムです。",
    features: ["座学講習", "実技講習", "運転適性診断", "講習後レポート"],
    color: "var(--color-primary)",
  },
  {
    title: "ペーパードライバー講習",
    description: "長期間運転していない方向けの個別指導。お客様のレベルに合わせて丁寧に指導します。",
    features: ["マンツーマン指導", "ご自宅まで出張", "マイカーで練習可", "最短1日〜"],
    color: "var(--color-accent)",
  },
  {
    title: "新入社員向け講習",
    description: "新入社員研修の一環として、安全運転の基礎を徹底指導。事故を未然に防ぐ意識を育てます。",
    features: ["基本運転技術", "危険予測トレーニング", "交通ルール確認", "グループ講習可"],
    color: "var(--color-primary)",
  },
];

export default function ServicesSection() {
  return (
    <section className="py-16 md:py-24 bg-[var(--color-bg-gray)]">
      <div className="max-w-6xl mx-auto px-4">
        <div className="text-center mb-12">
          <p className="text-[var(--color-primary)] font-bold text-sm mb-2">SERVICES</p>
          <h2 className="text-2xl md:text-3xl font-bold text-gray-900">
            講習内容
          </h2>
          <div className="mt-3 w-16 h-1 bg-[var(--color-accent)] mx-auto rounded-full" />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {services.map((service, i) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="bg-white rounded-xl shadow-sm overflow-hidden hover:shadow-md transition-shadow"
            >
              <div
                className="h-2"
                style={{ backgroundColor: service.color }}
              />
              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-3">{service.title}</h3>
                <p className="text-sm text-gray-600 leading-relaxed mb-4">{service.description}</p>
                <ul className="space-y-2">
                  {service.features.map((feat) => (
                    <li key={feat} className="flex items-center gap-2 text-sm text-gray-700">
                      <svg className="w-4 h-4 text-[var(--color-primary)] shrink-0" fill="currentColor" viewBox="0 0 20 20">
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

        <div className="text-center mt-10">
          <Link
            href="/services"
            className="inline-flex items-center gap-2 px-6 py-3 text-[var(--color-primary)] border-2 border-[var(--color-primary)] rounded-full font-bold hover:bg-[var(--color-primary)] hover:text-white transition-colors"
          >
            講習内容の詳細を見る
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </Link>
        </div>
      </div>
    </section>
  );
}
