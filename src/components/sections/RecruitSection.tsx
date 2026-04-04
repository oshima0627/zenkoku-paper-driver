"use client";

import Link from "next/link";
import { motion } from "framer-motion";

export default function RecruitSection() {
  return (
    <section className="py-16 md:py-24 bg-white border-t border-gray-100">
      <div className="max-w-3xl mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-xl sm:text-2xl md:text-3xl font-bold text-gray-900">採用情報</h2>
          <p className="text-sm text-[var(--color-accent)] mt-1">-Recruit-</p>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="space-y-6 text-sm text-gray-700 leading-relaxed"
        >
          <p>現在、当協会ではペーパードライバー講習や企業向け安全運転講習の事業サポートを 全国で積極的に行っております。</p>

          <div>
            <p>私自身も、立ち上げ当初は一人ではなく老舗スクールからの手厚いサポートを受けてスタートしました。</p>
            <p>その経験を活かし、同じ志を持つ皆さまのチャレンジを <span className="font-bold">全力でサポート</span> いたします。</p>
          </div>

          <div>
            <p>まずは <span className="font-bold">業務委託という形</span> で一緒にお仕事を始めることも可能です。</p>
            <p>どうぞお気軽にお問い合わせください。</p>
          </div>

          <div>
            <p>また、<span className="font-bold">提携スクールの募集</span> も随時受付しております。</p>
            <p>下記のフォームより、お気軽にご連絡ください。</p>
          </div>

          <div className="text-center pt-4">
            <Link
              href="/contact"
              className="inline-flex items-center justify-center w-full max-w-md px-8 py-4 text-lg font-bold bg-[var(--color-primary)] text-white rounded-md hover:bg-[var(--color-primary-dark)] transition-colors"
            >
              お問い合わせはこちら
            </Link>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
