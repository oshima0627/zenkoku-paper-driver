"use client";

import Link from "next/link";
import { motion } from "framer-motion";

export default function RecruitSection() {
  return (
    <section className="py-20 md:py-28 bg-white">
      <div className="max-w-3xl mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="space-y-6 text-sm text-[var(--color-text-light)] leading-relaxed"
        >
          <p>現在、当協会ではペーパードライバー講習や企業向け安全運転講習の事業サポートを全国で積極的に行っております。</p>
          <p>私自身も、立ち上げ当初は一人ではなく老舗スクールからの手厚いサポートを受けてスタートしました。その経験を活かし、同じ志を持つ皆さまのチャレンジを<span className="font-medium text-[var(--color-primary)]">全力でサポート</span>いたします。</p>
          <p>まずは<span className="font-medium text-[var(--color-primary)]">業務委託という形</span>で一緒にお仕事を始めることも可能です。</p>
          <p>また、<span className="font-medium text-[var(--color-primary)]">提携スクールの募集</span>も随時受付しております。お気軽にご連絡ください。</p>

          <div className="text-center pt-4">
            <Link
              href="/contact"
              className="inline-flex items-center justify-center px-10 py-3.5 text-sm font-medium text-white bg-[var(--color-primary)] rounded-full hover:bg-[var(--color-primary-light)] transition-colors"
            >
              お問い合わせはこちら
            </Link>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
