"use client";

import Link from "next/link";
import { motion } from "framer-motion";

export default function CTASection() {
  return (
    <section className="py-20 md:py-28 bg-[var(--color-primary)]">
      <div className="max-w-4xl mx-auto px-4 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-2xl sm:text-3xl font-bold text-white mb-4">
            まずはお気軽にご相談ください
          </h2>
          <p className="text-sm sm:text-base text-white/60 mb-10 leading-relaxed">
            AIサポート・安全運転講習など、お気軽にお問い合わせください。
          </p>
          <Link
            href="/contact"
            className="inline-flex items-center justify-center px-10 py-3.5 text-sm font-medium bg-white text-[var(--color-primary)] rounded-full hover:bg-white/90 transition-colors"
          >
            お問い合わせ
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
