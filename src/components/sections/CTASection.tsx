"use client";

import Link from "next/link";
import { motion } from "framer-motion";

export default function CTASection() {
  return (
    <section className="relative py-28 md:py-36 bg-[var(--color-primary)] overflow-hidden">
      {/* Gradient orbs */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-blue-500/10 rounded-full blur-[120px]" />
      <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-purple-500/10 rounded-full blur-[100px]" />

      <div className="relative max-w-4xl mx-auto px-6 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white tracking-tight mb-6">
            まずはお気軽に
            <br />
            ご相談ください。
          </h2>
          <p className="text-base text-white/50 mb-12 leading-relaxed max-w-md mx-auto">
            スクールサポートAI・安全運転講習など、お気軽にお問い合わせください。
          </p>
          <Link
            href="/contact"
            className="inline-flex items-center justify-center px-10 py-4 text-sm font-medium bg-white text-[var(--color-primary)] rounded-full hover:bg-white/90 transition-all duration-300 shadow-[0_0_30px_rgba(255,255,255,0.1)]"
          >
            お問い合わせ
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
