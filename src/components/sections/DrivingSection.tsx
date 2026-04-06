"use client";

import { motion } from "framer-motion";

const steps = [
  { number: 1, title: "ヒアリング", description: "お客様のご要望をお伺いし、適切なプランをご提案します。" },
  { number: 2, title: "カリキュラムの設定", description: "車種・講習内容・日時・時間等を決定いたします。" },
  { number: 3, title: "教習開始", description: "免許証を確認させていただき、レッスン開始です。" },
  { number: 4, title: "教習終了", description: "修了後にワンポイントアドバイスをさせていただき教習終了です。" },
];

export default function DrivingSection() {
  return (
    <>
      {/* Concept */}
      <section className="py-28 md:py-36 bg-[var(--color-bg-gray)]">
        <div className="max-w-3xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <p className="text-xs font-medium tracking-[0.25em] text-[var(--color-accent)] uppercase mb-3">Concept</p>
            <h2 className="text-3xl sm:text-4xl font-bold text-[var(--color-primary)] tracking-tight">協会理念</h2>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="bg-white rounded-3xl p-8 md:p-10 shadow-sm space-y-5 text-[15px] text-[var(--color-text-light)] leading-[1.9]"
          >
            <p><span className="text-[var(--color-primary)] font-semibold">国家資格</span>である指導員資格保持者 × ペーパードライバースクールを数社運営している<span className="text-[var(--color-primary)] font-semibold">プロフェッショナル</span></p>
            <p>その現役講師陣が社員の皆様の運転をサポート致します。</p>
            <p>何かを学ぶ時、誰から学ぶかということが重要です。当協会はどこよりも<span className="font-semibold text-[var(--color-primary)]">人</span>に力を入れております。</p>
            <p>信頼して頂くためには相手のことを知ることから始まります。そして相手のことを好きになります。</p>
            <p>依頼のあったお客様から<span className="text-[var(--color-primary)] font-semibold">交通安全の分野</span>で<span className="text-[var(--color-primary)] font-semibold">プロフェッショナル</span>というポジションでお任せ頂ければ光栄です。</p>
          </motion.div>
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
            <p className="text-xs font-medium tracking-[0.25em] text-[var(--color-accent)] uppercase mb-3">Flow</p>
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
                className="flex items-start gap-5 bg-white rounded-2xl p-6 shadow-sm border border-[var(--color-border)]/30"
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
