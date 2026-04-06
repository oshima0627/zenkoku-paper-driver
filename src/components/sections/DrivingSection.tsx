"use client";

import { motion } from "framer-motion";

const services = [
  {
    title: "企業向け安全運転講習",
    description: "国家資格保持者と元白バイ隊員監修のプロフェッショナルが、社員様の運転を丁寧にサポートします。",
    features: ["運転スキル診断", "技能教習（100分単位）", "学科講習", "最終運転技能チェック"],
  },
  {
    title: "全国出張対応",
    description: "御社の所在地や社員様のご自宅付近まで講師が出張いたします。全国どこでも対応可能です。",
    features: ["マイカー・社用車どちらでも可", "レンタカー手配も可能", "Zoomによるオンライン座学にも対応", "1名様から受講可能"],
  },
];

const steps = [
  { number: 1, title: "ヒアリング", description: "お客様のご要望をお伺いし、適切なプランをご提案します。" },
  { number: 2, title: "カリキュラムの設定", description: "車種・講習内容・日時・時間等を決定いたします。" },
  { number: 3, title: "教習開始", description: "免許証を確認させていただき、レッスン開始です。" },
  { number: 4, title: "教習終了", description: "修了後にワンポイントアドバイスをさせていただき教習終了です。" },
];

export default function DrivingSection() {
  return (
    <>
      {/* Services */}
      <section className="py-28 md:py-36 bg-white">
        <div className="max-w-5xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <span className="inline-flex items-center px-4 py-1.5 rounded-full bg-purple-50 text-purple-600 text-xs font-semibold mb-4">安全運転講習事業（協会）</span>
            <h2 className="text-3xl sm:text-4xl font-bold text-[var(--color-primary)] tracking-tight">サービス内容</h2>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {services.map((service, i) => (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: i * 0.15, ease: [0.25, 0.1, 0, 1] }}
                className="group bg-white rounded-3xl p-8 md:p-10 shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-500 relative overflow-hidden border border-[var(--color-border)]/40"
              >
                <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-purple-500 to-pink-400 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                <h3 className="text-xl font-bold text-[var(--color-primary)] mb-3">{service.title}</h3>
                <p className="text-sm text-[var(--color-text-light)] leading-relaxed mb-6">{service.description}</p>
                <ul className="space-y-2.5">
                  {service.features.map((f) => (
                    <li key={f} className="flex items-center gap-2.5 text-sm text-[var(--color-primary)]">
                      <span className="w-1.5 h-1.5 rounded-full bg-purple-500 shrink-0" />
                      {f}
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Flow */}
      <section className="py-28 md:py-36 bg-white">
        <div className="max-w-3xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <span className="inline-flex items-center px-4 py-1.5 rounded-full bg-purple-50 text-purple-600 text-xs font-semibold mb-4">安全運転講習事業（協会）</span>
            <h2 className="text-3xl sm:text-4xl font-bold text-[var(--color-primary)] tracking-tight">ご利用の流れ</h2>
          </motion.div>
          <div className="space-y-6">
            {steps.map((step, i) => (
              <motion.div
                key={step.number}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1, ease: [0.25, 0.1, 0, 1] }}
                className="flex items-start gap-5 bg-white rounded-2xl p-6 shadow-sm"
              >
                <div className="shrink-0 w-10 h-10 rounded-full bg-gradient-to-br from-purple-500 to-pink-400 text-white flex items-center justify-center text-sm font-bold">
                  {step.number}
                </div>
                <div>
                  <h3 className="text-base font-bold text-[var(--color-primary)] mb-1">{step.title}</h3>
                  <p className="text-sm text-[var(--color-text-light)] leading-relaxed">{step.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
