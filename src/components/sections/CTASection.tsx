"use client";

import Link from "next/link";
import { motion } from "framer-motion";

export default function CTASection() {
  return (
    <section className="py-16 md:py-24 bg-[var(--color-primary)]">
      <div className="max-w-4xl mx-auto px-4 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-2xl md:text-3xl font-bold text-white mb-4">
            まずはお気軽にご相談ください
          </h2>
          <p className="text-gray-200 mb-8 leading-relaxed">
            講習内容・料金・スケジュールなど、お気軽にお問い合わせください。
            <br className="hidden md:block" />
            専門スタッフが丁寧にご対応いたします。
          </p>
          <Link
            href="/contact"
            className="inline-flex items-center justify-center gap-2 px-8 py-4 text-lg font-bold bg-[var(--color-accent)] text-white rounded-md hover:bg-[var(--color-accent-dark)] transition-colors shadow-lg"
          >
            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
              <path d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
            </svg>
            お問い合わせ・お申し込み
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
