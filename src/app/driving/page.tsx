"use client";

import { motion } from "framer-motion";
import SchoolSection from "@/components/sections/SchoolSection";
import CTASection from "@/components/sections/CTASection";

const points = [
  { number: 1, title: "国家資格保持者", description: "国家資格である教習指導員資格を持つ指導員が丁寧に指導。" },
  { number: 2, title: "スクール経営陣", description: "ペーパードライバースクールを経営している現役講師が実践的な指導。" },
  { number: 3, title: "元白バイ隊員監修", description: "白バイ隊員が事故に対する豊富な経験と知識でマニュアル作成。" },
];

const steps = [
  { number: 1, title: "ヒアリング", description: "お客様のご要望をお伺いし、適切なプランをご提案します。" },
  { number: 2, title: "カリキュラムの設定", description: "車種・講習内容・日時・時間等を決定いたします。" },
  { number: 3, title: "教習開始", description: "免許証を確認させていただき、レッスン開始です。" },
  { number: 4, title: "教習終了", description: "修了後にワンポイントアドバイスをさせていただき教習終了です。" },
];

export default function DrivingPage() {
  return (
    <>
      {/* Hero */}
      <section className="py-20 md:py-28 bg-white">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <p className="text-sm font-medium text-[var(--color-text-light)] tracking-widest uppercase mb-4">Safety Driving</p>
          <h1 className="text-3xl sm:text-5xl font-bold text-[var(--color-primary)] leading-tight tracking-tight mb-6">安全運転講習事業</h1>
          <p className="text-base text-[var(--color-text-light)] max-w-2xl mx-auto leading-relaxed">
            国家資格保持者とペーパードライバースクール経営陣によるプロフェッショナル集団が、企業向け安全運転講習を全国で提供します。
          </p>
        </div>
      </section>

      {/* Concept */}
      <section className="py-20 md:py-28 bg-[var(--color-bg-gray)]">
        <div className="max-w-3xl mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-2xl sm:text-3xl font-bold text-[var(--color-primary)]">協会理念</h2>
          </div>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="space-y-4 text-sm text-[var(--color-text-light)] leading-relaxed"
          >
            <p><span className="text-[var(--color-primary)] font-medium">国家資格</span>である指導員資格保持者 × ペーパードライバースクールを数社運営している<span className="text-[var(--color-primary)] font-medium">プロフェッショナル</span></p>
            <p>その現役講師陣が社員の皆様の運転をサポート致します。</p>
            <p>何かを学ぶ時、誰から学ぶかということが重要です。当協会はどこよりも<span className="font-medium text-[var(--color-primary)]">人</span>に力を入れております。</p>
            <p>信頼して頂くためには相手のことを知ることから始まります。そして相手のことを好きになります。</p>
            <p>依頼のあったお客様から<span className="text-[var(--color-primary)] font-medium">交通安全の分野</span>で<span className="text-[var(--color-primary)] font-medium">プロフェッショナル</span>というポジションでお任せ頂ければ光栄です。</p>
          </motion.div>
        </div>
      </section>

      {/* Strong Points */}
      <section className="py-20 md:py-28 bg-white">
        <div className="max-w-4xl mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-2xl sm:text-3xl font-bold text-[var(--color-primary)]">プロフェッショナル集団の強み</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {points.map((point, i) => (
              <motion.div
                key={point.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className="text-center"
              >
                <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-[var(--color-primary)] text-white font-bold mb-4">
                  {point.number}
                </div>
                <h3 className="text-base font-bold text-[var(--color-primary)] mb-2">{point.title}</h3>
                <p className="text-sm text-[var(--color-text-light)] leading-relaxed">{point.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Flow */}
      <section className="py-20 md:py-28 bg-[var(--color-bg-gray)]">
        <div className="max-w-3xl mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-2xl sm:text-3xl font-bold text-[var(--color-primary)]">ご利用の流れ</h2>
          </div>
          <div className="space-y-8">
            {steps.map((step, i) => (
              <motion.div
                key={step.number}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className="flex items-start gap-5"
              >
                <div className="shrink-0 w-10 h-10 rounded-full bg-[var(--color-primary)] text-white flex items-center justify-center text-sm font-bold">
                  {step.number}
                </div>
                <div>
                  <h3 className="text-base font-bold text-[var(--color-primary)] mb-1">{step.title}</h3>
                  <p className="text-sm text-[var(--color-text-light)]">{step.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <SchoolSection />
      <CTASection />
    </>
  );
}
