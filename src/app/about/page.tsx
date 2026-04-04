"use client";

import { motion } from "framer-motion";
import CTASection from "@/components/sections/CTASection";

export default function AboutPage() {
  return (
    <>
      <section className="bg-[var(--color-primary)] text-white py-16">
        <div className="max-w-6xl mx-auto px-4 text-center">
          <h1 className="text-3xl md:text-4xl font-bold">協会理念</h1>
          <p className="text-sm text-[var(--color-accent)] mt-2">-concept-</p>
        </div>
      </section>

      <section className="py-16 md:py-24">
        <div className="max-w-4xl mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="space-y-6 text-gray-700 leading-relaxed"
          >
            <p>
              <span className="font-bold text-[var(--color-primary)] underline decoration-[var(--color-accent)] decoration-2 underline-offset-4">国家資格</span>である指導員資格保持者 × ペーパードライバースクールを数社運営している<span className="font-bold text-[var(--color-primary)] underline decoration-[var(--color-accent)] decoration-2 underline-offset-4">プロフェッショナル</span>
            </p>
            <p>その現役講師陣が社員の皆様の運転をサポート致します。</p>

            <div className="space-y-2 mt-8">
              <p>何かを学ぶ時、誰から学ぶかということが重要です。</p>
              <p>当協会はどこよりも<span className="font-bold">人</span>に力を入れております。</p>
              <p>信頼して頂くためには相手のことを知ることから始まります。</p>
              <p>そして相手のことを好きになります。</p>
              <p>ただ、プロフェッショナルなだけでも、ただ知識や経験があっても交通安全からは離れていきます。</p>
            </div>

            <div className="space-y-2 mt-6">
              <p>当然、希望される方には現実をありのままお話させて頂きます。</p>
              <p>車の運転者はそれを知る必要がありますし、我々<span className="font-bold">専門家</span>も伝える必要があると考えております。</p>
              <p>車の運転をする以上、運転手各々が責任を持つべきであると考えます。</p>
              <p>依頼のあったお客様から<span className="font-bold text-[var(--color-primary)]">交通安全の分野</span>で<span className="font-bold text-[var(--color-primary)]">プロフェッショナル</span>というポジションでお任せ頂ければ光栄です。</p>
            </div>
          </motion.div>
        </div>
      </section>

      <CTASection />
    </>
  );
}
