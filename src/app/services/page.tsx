"use client";

import { motion } from "framer-motion";
import CTASection from "@/components/sections/CTASection";

const services = [
  {
    title: "企業向け安全運転講習",
    description:
      "従業員の交通事故防止を目的とした総合的な講習プログラムです。座学と実技を組み合わせ、実践的なスキルを身につけていただきます。",
    details: [
      "交通法規の再確認と最新の法改正情報",
      "危険予測トレーニング（座学）",
      "実車を使った運転技術チェック",
      "個別の運転診断とアドバイス",
      "講習後の詳細レポート提出",
    ],
  },
  {
    title: "ペーパードライバー講習",
    description:
      "免許は持っているけど長期間運転していない方向けの個別指導です。お客様の自宅や職場まで出張し、マイカーでの練習も可能です。",
    details: [
      "マンツーマンの個別指導",
      "ご自宅・職場まで出張対応",
      "マイカーでの練習OK",
      "最短1日から受講可能",
      "高速道路・駐車練習にも対応",
    ],
  },
  {
    title: "新入社員向け安全運転研修",
    description:
      "新入社員研修の一環として、安全運転の基礎から実践まで徹底指導。若年ドライバーの事故防止に効果的です。",
    details: [
      "基本的な運転マナーと技術",
      "危険予測と防衛運転の基礎",
      "事故事例に学ぶ安全意識向上",
      "グループ講習にも対応",
      "研修記録の作成・報告",
    ],
  },
  {
    title: "管理者向け安全運転管理研修",
    description:
      "安全運転管理者・副安全運転管理者向けの専門研修。法令で求められる管理業務の実務ポイントを解説します。",
    details: [
      "安全運転管理者の法的義務と責任",
      "効果的な安全運転指導の方法",
      "事故発生時の対応フロー",
      "アルコールチェックの適切な運用",
      "安全運転管理の年間計画策定",
    ],
  },
];

export default function ServicesPage() {
  return (
    <>
      <section className="bg-[var(--color-primary)] text-white py-16">
        <div className="max-w-6xl mx-auto px-4">
          <p className="text-[var(--color-accent)] font-bold text-sm mb-2">SERVICES</p>
          <h1 className="text-3xl md:text-4xl font-bold">講習内容</h1>
        </div>
      </section>

      <section className="py-16 md:py-24">
        <div className="max-w-4xl mx-auto px-4 space-y-16">
          {services.map((service, i) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="bg-white border rounded-xl p-8 shadow-sm"
            >
              <h2 className="text-2xl font-bold text-gray-900 mb-4">{service.title}</h2>
              <p className="text-gray-600 leading-relaxed mb-6">{service.description}</p>
              <h3 className="text-sm font-bold text-[var(--color-primary)] mb-3">講習内容</h3>
              <ul className="space-y-2">
                {service.details.map((detail) => (
                  <li key={detail} className="flex items-start gap-2 text-sm text-gray-700">
                    <svg className="w-5 h-5 text-[var(--color-primary)] shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                    {detail}
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </section>

      <CTASection />
    </>
  );
}
