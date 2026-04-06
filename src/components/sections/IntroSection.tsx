"use client";

import { motion } from "framer-motion";

export default function IntroSection() {
  return (
    <section className="py-28 md:py-36 bg-white">
      <div className="max-w-3xl mx-auto px-6 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: [0.25, 0.1, 0, 1] }}
        >
          <p className="text-xs font-medium tracking-[0.25em] text-[var(--color-accent)] uppercase mb-6">Our Mission</p>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-[var(--color-primary)] leading-[1.2] tracking-tight">
            テクノロジーの力で
            <br />
            社会課題を解決し、
            <br />
            安全な社会をつくる。
          </h2>
          <div className="mt-8 w-12 h-[2px] bg-[var(--color-accent)] mx-auto" />
        </motion.div>
      </div>
    </section>
  );
}
