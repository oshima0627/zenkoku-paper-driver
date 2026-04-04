"use client";

import Link from "next/link";
import { motion } from "framer-motion";

export default function HeroSection() {
  return (
    <section className="relative bg-[var(--color-primary)] text-white overflow-hidden">
      {/* Background pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0" style={{
          backgroundImage: "radial-gradient(circle at 2px 2px, white 1px, transparent 0)",
          backgroundSize: "40px 40px",
        }} />
      </div>

      <div className="relative max-w-6xl mx-auto px-4 py-20 md:py-32">
        <div className="max-w-2xl">
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-[var(--color-accent)] font-bold text-sm md:text-base mb-4"
          >
            企業向け安全運転講習専門スクール
          </motion.p>
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-3xl md:text-5xl font-bold leading-tight mb-6"
          >
            プロフェッショナル集団による
            <br />
            <span className="text-[var(--color-accent)]">安全運転講習</span>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-lg md:text-xl text-gray-200 mb-8 leading-relaxed"
          >
            交通社会の専門家であり、道路における法律の専門家。
            全国どこでも出張対応いたします。
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="flex flex-col sm:flex-row gap-4"
          >
            <Link
              href="/contact"
              className="inline-flex items-center justify-center px-8 py-4 text-lg font-bold bg-[var(--color-accent)] text-white rounded-full hover:bg-[var(--color-accent-light)] transition-colors shadow-lg"
            >
              無料相談はこちら
            </Link>
            <Link
              href="/services"
              className="inline-flex items-center justify-center px-8 py-4 text-lg font-bold border-2 border-white text-white rounded-full hover:bg-white hover:text-[var(--color-primary)] transition-colors"
            >
              講習内容を見る
            </Link>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
