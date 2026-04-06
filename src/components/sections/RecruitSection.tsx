"use client";

import Link from "next/link";
import { motion } from "framer-motion";

export default function RecruitSection() {
  return (
    <section className="py-28 md:py-36">
      <div className="max-w-3xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <p className="text-xs font-medium tracking-[0.25em] text-[var(--color-accent)] uppercase mb-3">Recruit</p>
          <h2 className="text-3xl sm:text-4xl font-bold text-[var(--color-primary)] tracking-tight">採用情報</h2>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="bg-white rounded-3xl p-8 md:p-10 shadow-md"
        >
          <div className="space-y-5 text-[15px] text-[var(--color-text-light)] leading-[1.9]">
            <p>現在、当協会ではペーパードライバー講習や企業向け安全運転講習の事業サポートを全国で積極的に行っております。</p>
            <p>私自身も、立ち上げ当初は一人ではなく老舗スクールからの手厚いサポートを受けてスタートしました。その経験を活かし、同じ志を持つ皆さまのチャレンジを<span className="font-semibold text-[var(--color-primary)]">全力でサポート</span>いたします。</p>
            <p>まずは<span className="font-semibold text-[var(--color-primary)]">業務委託という形</span>で一緒にお仕事を始めることも可能です。</p>
            <p>また、<span className="font-semibold text-[var(--color-primary)]">提携スクールの募集</span>も随時受付しております。お気軽にご連絡ください。</p>
          </div>

          <div className="text-center pt-8 mt-8 border-t border-[var(--color-border)]/30">
            <Link
              href="/#contact"
              className="inline-flex items-center justify-center px-10 py-3.5 text-sm font-medium text-white bg-[var(--color-primary)] rounded-full hover:bg-[var(--color-primary-light)] transition-all duration-300 shadow-[0_0_20px_rgba(0,0,0,0.1)]"
            >
              お問い合わせはこちら
            </Link>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
