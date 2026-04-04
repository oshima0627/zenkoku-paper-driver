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
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/contact"
              className="inline-flex items-center justify-center px-8 py-4 text-lg font-bold bg-[var(--color-accent)] text-white rounded-full hover:bg-[var(--color-accent-light)] transition-colors shadow-lg"
            >
              お問い合わせフォーム
            </Link>
            <a
              href="tel:0120-000-000"
              className="inline-flex items-center justify-center gap-2 px-8 py-4 text-lg font-bold border-2 border-white text-white rounded-full hover:bg-white hover:text-[var(--color-primary)] transition-colors"
            >
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M6.62 10.79a15.053 15.053 0 006.59 6.59l2.2-2.2a1 1 0 011.01-.24c1.12.37 2.33.57 3.57.57a1 1 0 011 1V20a1 1 0 01-1 1C10.07 21 3 13.93 3 4a1 1 0 011-1h3.5a1 1 0 011 1c0 1.25.2 2.45.57 3.57a1 1 0 01-.24 1.01l-2.2 2.2z" />
              </svg>
              0120-000-000
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
