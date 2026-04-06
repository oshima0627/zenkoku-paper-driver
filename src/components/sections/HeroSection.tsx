"use client";

import Link from "next/link";
import { motion } from "framer-motion";

export default function HeroSection() {
  return (
    <section className="py-24 md:py-36 bg-white">
      <div className="max-w-4xl mx-auto px-4 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h1 className="text-3xl sm:text-5xl md:text-6xl font-bold text-[var(--color-primary)] leading-tight tracking-tight">
            テクノロジーと安全で、
            <br />
            社会に貢献する。
          </h1>
          <p className="mt-6 text-base sm:text-lg text-[var(--color-text-light)] leading-relaxed max-w-2xl mx-auto">
            AI業務自動化・HP制作と安全運転講習の2つの事業を柱に、
            企業の課題解決に取り組みます。
          </p>
          <div className="mt-10 flex flex-col sm:flex-row justify-center gap-4">
            <Link
              href="/ai-support"
              className="inline-flex items-center justify-center px-8 py-3 text-sm font-medium text-white bg-[var(--color-primary)] rounded-full hover:bg-[var(--color-primary-light)] transition-colors"
            >
              スクールサポートAI事業
            </Link>
            <Link
              href="/driving"
              className="inline-flex items-center justify-center px-8 py-3 text-sm font-medium text-[var(--color-accent)] bg-white border border-[var(--color-border)] rounded-full hover:bg-[var(--color-bg-gray)] transition-colors"
            >
              安全運転講習事業(協会)
            </Link>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
