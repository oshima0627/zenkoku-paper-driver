"use client";

import { motion } from "framer-motion";

export default function IntroSection() {
  return (
    <section className="py-16 md:py-24 bg-white">
      <div className="max-w-4xl mx-auto px-4 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <p className="text-base md:text-lg text-gray-700 leading-relaxed">
            全国ペーパードライバー協会は、<span className="font-bold text-[var(--color-primary)] underline decoration-[var(--color-accent)] decoration-2 underline-offset-4">企業向けの安全運転講習</span>を通して交通事故防止・社員教育の支援を行っています。
          </p>
          <p className="mt-6 text-base md:text-lg text-gray-700">
            <span className="font-bold text-[var(--color-primary)] underline decoration-[var(--color-accent)] decoration-2 underline-offset-4">全国対応・出張講習も可能</span>です
          </p>
        </motion.div>
      </div>
    </section>
  );
}
