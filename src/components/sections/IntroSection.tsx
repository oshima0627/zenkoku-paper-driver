"use client";

import { motion } from "framer-motion";

export default function IntroSection() {
  return (
    <section className="py-20 md:py-28 bg-[var(--color-bg-gray)]">
      <div className="max-w-3xl mx-auto px-4 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <p className="text-sm font-medium text-[var(--color-text-light)] tracking-widest uppercase mb-4">Our Mission</p>
          <h2 className="text-2xl sm:text-3xl font-bold text-[var(--color-primary)] leading-relaxed">
            テクノロジーの力で社会課題を解決し、
            <br className="hidden md:block" />
            安全な社会づくりに貢献する。
          </h2>
        </motion.div>
      </div>
    </section>
  );
}
