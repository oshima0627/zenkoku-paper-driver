"use client";

import Image from "next/image";
import { motion } from "framer-motion";

export default function ConceptSection() {
  return (
    <section className="py-16 md:py-24 bg-white border-t border-gray-100">
      <div className="max-w-4xl mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          {/* Icon */}
          <div className="flex justify-center mb-4">
            <svg className="w-16 h-16 text-[var(--color-primary-light)]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M8 17h.01M12 17h.01M16 17h.01M3 9l9-7 9 7v11a2 2 0 01-2 2H5a2 2 0 01-2-2V9z" />
            </svg>
          </div>
          <h2 className="text-xl sm:text-2xl md:text-3xl font-bold text-gray-900">協会理念</h2>
          <p className="text-sm text-[var(--color-accent)] mt-1">-concept-</p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="space-y-6 text-gray-700 leading-relaxed text-sm sm:text-base"
        >
          <p>
            <span className="font-bold text-[var(--color-primary)] underline decoration-[var(--color-accent)] decoration-2 underline-offset-4">国家資格</span>である指導員資格保持者 × ペーパードライバースクールを数社運営している<span className="font-bold text-[var(--color-primary)] underline decoration-[var(--color-accent)] decoration-2 underline-offset-4">プロフェッショナル</span>
          </p>
          <p>その現役講師陣が社員の皆様の運転をサポート致します。</p>

          {/* Concept images */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 my-8">
            {[
              { src: "/IMG_3685.jpeg", alt: "運転講習の様子" },
              { src: "/IMG_3687.jpeg", alt: "マニュアルを使った指導" },
              { src: "/IMG_3690.jpeg", alt: "インストラクターと受講者" },
            ].map((img) => (
              <div key={img.src} className="relative aspect-[4/3] rounded-lg overflow-hidden">
                <Image
                  src={img.src}
                  alt={img.alt}
                  fill
                  className="object-cover"
                />
              </div>
            ))}
          </div>

          <div className="space-y-2 text-sm md:text-base">
            <p>何かを学ぶ時、誰から学ぶかということが重要です。</p>
            <p>当協会はどこよりも<span className="font-bold">人</span>に力を入れております。</p>
            <p>信頼して頂くためには相手のことを知ることから始まります。</p>
            <p>そして相手のことを好きになります。</p>
            <p>ただ、プロフェッショナルなだけでも、ただ知識や経験があっても交通安全からは離れていきます。</p>
          </div>

          <div className="space-y-2 text-sm md:text-base mt-6">
            <p>当然、希望される方には現実をありのままお話させて頂きます。</p>
            <p>車の運転者はそれを知る必要がありますし、我々<span className="font-bold">専門家</span>も伝える必要があると考えております。</p>
            <p>車の運転をする以上、運転手各々が責任を持つべきであると考えます。</p>
            <p>依頼のあったお客様から<span className="font-bold text-[var(--color-primary)] underline decoration-[var(--color-accent)] decoration-2 underline-offset-4">交通安全の分野</span>で<span className="font-bold text-[var(--color-primary)] underline decoration-[var(--color-accent)] decoration-2 underline-offset-4">プロフェッショナル</span>というポジションでお任せ頂ければ光栄です。</p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
