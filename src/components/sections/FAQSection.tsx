"use client";

import Link from "next/link";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const faqs = [
  { question: "講習はどこで実施されますか？", answer: "御社の所在地や社員様のご自宅付近まで講師が出張いたします。マイカー・社用車・レンタカーいずれでも対応可能です。" },
  { question: "教習車の用意がない場合はどうすればいいですか？", answer: "教習車両（補助ブレーキ付き）やレンタカーの手配も可能ですのでご安心ください。" },
  { question: "社員全員に受講させる必要がありますか？", answer: "義務ではありませんが、運転業務の有無や希望に応じて選択いただけます。必要に応じて対象者を限定した受講も可能です。" },
  { question: "講習内容はどのようなものですか？", answer: "車両感覚・車線変更・駐車・高速道路など、社員様の運転レベルに合わせて柔軟にカリキュラムを組みます。安全運転の意識づけも含まれます。" },
  { question: "講習の所要時間はどれくらいですか？", answer: "1回あたり100分を基本としています。集中力を保ちながら効率的に学べる時間配分です。" },
];

function FAQItem({ question, answer, index }: { question: string; answer: string; index: number }) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <motion.div
      initial={{ opacity: 0, y: 15 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.3, delay: index * 0.05 }}
    >
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="w-full flex items-center gap-4 py-5 px-5 text-left bg-white rounded-xl shadow-sm hover:shadow-md transition-all border border-gray-100"
      >
        <span className="inline-flex items-center justify-center w-9 h-9 rounded-full bg-[var(--color-accent)] text-white font-bold text-sm shrink-0">
          Q
        </span>
        <span className="flex-1 font-bold text-gray-800 text-sm md:text-base">{question}</span>
        <svg
          className={`w-5 h-5 text-gray-400 shrink-0 transition-transform duration-300 ${isOpen ? "rotate-180" : ""}`}
          fill="none" stroke="currentColor" viewBox="0 0 24 24"
        >
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
        </svg>
      </button>
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.25 }}
            className="overflow-hidden"
          >
            <div className="flex items-start gap-4 px-5 py-4 ml-2 border-l-2 border-[var(--color-site-light)] mt-1">
              <span className="inline-flex items-center justify-center w-9 h-9 rounded-full bg-[var(--color-primary)] text-white font-bold text-sm shrink-0">
                A
              </span>
              <p className="text-sm text-gray-600 leading-relaxed pt-2">{answer}</p>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
}

export default function FAQSection() {
  return (
    <section className="py-16 md:py-24 bg-white">
      <div className="max-w-3xl mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-2xl md:text-3xl font-bold text-gray-900">よくある質問</h2>
          <p className="text-sm text-[var(--color-accent)] mt-1">-FAQ-</p>
        </div>

        <div className="space-y-3">
          {faqs.map((faq, i) => (
            <FAQItem key={faq.question} question={faq.question} answer={faq.answer} index={i} />
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
