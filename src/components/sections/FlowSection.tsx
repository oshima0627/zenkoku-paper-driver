"use client";

import { motion } from "framer-motion";

const steps = [
  {
    number: 1,
    title: "ヒアリング",
    description: "お客様のご要望などをお伺いさせていただいた後に、適切なプランをご提案させていただきます。",
  },
  {
    number: 2,
    title: "カリキュラムの設定",
    description: "車種（社用車、教習車）及び講習内容・日時・時間等を決定いたします。",
  },
  {
    number: 3,
    title: "教習開始",
    description: "免許証を確認させていただき、いよいよレッスン開始です！\n分からないことや不安なことがあれば遠慮せずに何でも聞いてください！",
  },
  {
    number: 4,
    title: "教習終了",
    description: "修了後にワンポイントアドバイス等をさせていただき教習終了となります。\nお疲れさまでした。",
  },
];

export default function FlowSection() {
  return (
    <section className="py-16 md:py-24 bg-[var(--color-site-pale)]">
      <div className="max-w-3xl mx-auto px-4">
        <div className="text-center mb-12">
          <div className="flex justify-center mb-4">
            <svg className="w-14 h-14 text-[var(--color-primary-light)]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M8 7h12m0 0l-4-4m4 4l-4 4m0 6H4m0 0l4 4m-4-4l4-4" />
            </svg>
          </div>
          <h2 className="text-2xl md:text-3xl font-bold text-gray-900">ご利用の流れ</h2>
          <p className="text-sm text-[var(--color-accent)] mt-1">-FLOW-</p>
        </div>

        <div className="space-y-10">
          {steps.map((step, i) => (
            <motion.div
              key={step.number}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
            >
              <div className="flex items-start gap-5">
                <div className="shrink-0">
                  <div className="w-12 h-12 rounded-full bg-[var(--color-site)] text-white flex flex-col items-center justify-center">
                    <span className="text-[8px] font-bold leading-none">STEP</span>
                    <span className="text-lg font-bold leading-none">{step.number}</span>
                  </div>
                </div>
                <div>
                  <h3 className="text-lg font-bold text-[var(--color-primary)] mb-2">{step.title}</h3>
                  <p className="text-sm text-gray-600 leading-relaxed whitespace-pre-line">{step.description}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
