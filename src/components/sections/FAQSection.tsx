"use client";

import Link from "next/link";
import { motion } from "framer-motion";

const faqs = [
  {
    question: "講習はどこで実施されますか？",
    answer: "御社の所在地や社員様のご自宅付近まで講師が出張いたします。マイカー・社用車・レンタカーいずれでも対応可能です。",
  },
  {
    question: "教習車の用意がない場合はどうすればいいですか？",
    answer: "教習車両（補助ブレーキ付き）やレンタカーの手配も可能ですのでご安心ください。",
  },
  {
    question: "社員全員に受講させる必要がありますか？",
    answer: "義務ではありませんが、運転業務の有無や希望に応じて選択いただけます。必要に応じて対象者を限定した受講も可能です。",
  },
  {
    question: "講習内容はどのようなものですか？",
    answer: "車両感覚・車線変更・駐車・高速道路など、社員様の運転レベルに合わせて柔軟にカリキュラムを組みます。安全運転の意識づけも含まれます。",
  },
  {
    question: "講習の所要時間はどれくらいですか？",
    answer: "1回あたり100分を基本としています。集中力を保ちながら効率的に学べる時間配分です。",
  },
];

export default function FAQSection() {
  return (
    <section className="py-16 md:py-24 bg-white">
      <div className="max-w-3xl mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-2xl md:text-3xl font-bold text-gray-900">よくある質問</h2>
          <p className="text-sm text-[var(--color-accent)] mt-1">-FAQ-</p>
        </div>

        <div className="space-y-6">
          {faqs.map((faq, i) => (
            <motion.div
              key={faq.question}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.05 }}
            >
              <div className="flex items-start gap-3 mb-2">
                <span className="inline-flex items-center justify-center w-7 h-7 rounded-full bg-[var(--color-accent)] text-white font-bold text-xs shrink-0">Q</span>
                <p className="font-bold text-gray-900 pt-0.5">{faq.question}</p>
              </div>
              <div className="flex items-start gap-3">
                <span className="inline-flex items-center justify-center w-7 h-7 rounded-full bg-[var(--color-primary)] text-white font-bold text-xs shrink-0">A</span>
                <p className="text-gray-600 leading-relaxed pt-0.5">{faq.answer}</p>
              </div>
            </motion.div>
          ))}
        </div>

        <div className="text-center mt-10">
          <Link
            href="/faq"
            className="inline-flex items-center gap-2 text-[var(--color-primary)] font-medium hover:underline"
          >
            すべての質問を見る
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </Link>
        </div>
      </div>
    </section>
  );
}
