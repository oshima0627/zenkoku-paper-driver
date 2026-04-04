"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import CTASection from "@/components/sections/CTASection";

const faqs = [
  {
    question: "講習は全国どこでも対応可能ですか？",
    answer: "はい、北海道から沖縄まで全国どこでも出張対応いたします。御社のご指定場所（駐車場、周辺道路など）で講習を実施できます。",
  },
  {
    question: "講習時間はどのくらいですか？",
    answer: "基本的には2〜6時間の講習となります。ご要望に応じてカスタマイズ可能ですので、お気軽にご相談ください。",
  },
  {
    question: "何名から受講できますか？",
    answer: "個人向け講習は1名から、企業向け講習は1名〜最大10名程度まで同時に受講可能です。大人数の場合は複数回に分けて実施いたします。",
  },
  {
    question: "マイカーで講習を受けられますか？",
    answer: "はい、お客様のマイカーでの講習が可能です。普段乗り慣れた車で練習することで、より実践的なスキルが身につきます。",
  },
  {
    question: "雨天の場合はどうなりますか？",
    answer: "原則として雨天でも講習は実施いたします。ただし、台風や大雪など安全に支障がある場合は日程を変更させていただきます。",
  },
  {
    question: "講習後のフォローアップはありますか？",
    answer: "企業向けプランでは、講習後に詳細なレポートを提出いたします。また、プレミアムプランではフォローアップ講習も含まれています。",
  },
  {
    question: "キャンセル料はかかりますか？",
    answer: "講習日の3日前までのキャンセルは無料です。2日前〜前日は50%、当日は100%のキャンセル料が発生します。",
  },
  {
    question: "支払い方法は何がありますか？",
    answer: "銀行振込、クレジットカード、請求書払い（法人のみ）に対応しています。",
  },
];

function FAQItem({ question, answer }: { question: string; answer: string }) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="border-b border-gray-200">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="w-full py-5 flex justify-between items-center text-left"
      >
        <span className="flex items-start gap-3">
          <span className="text-[var(--color-primary)] font-bold text-lg">Q</span>
          <span className="text-gray-900 font-medium">{question}</span>
        </span>
        <svg
          className={`w-5 h-5 text-gray-400 shrink-0 transition-transform ${isOpen ? "rotate-180" : ""}`}
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
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
            transition={{ duration: 0.2 }}
            className="overflow-hidden"
          >
            <div className="pb-5 pl-8 pr-4">
              <div className="flex items-start gap-3">
                <span className="text-[var(--color-accent)] font-bold text-lg">A</span>
                <p className="text-gray-600 leading-relaxed">{answer}</p>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

export default function FAQPage() {
  return (
    <>
      <section className="bg-[var(--color-primary)] text-white py-16">
        <div className="max-w-6xl mx-auto px-4">
          <p className="text-[var(--color-accent)] font-bold text-sm mb-2">FAQ</p>
          <h1 className="text-3xl md:text-4xl font-bold">よくある質問</h1>
        </div>
      </section>

      <section className="py-16 md:py-24">
        <div className="max-w-3xl mx-auto px-4">
          {faqs.map((faq) => (
            <FAQItem key={faq.question} question={faq.question} answer={faq.answer} />
          ))}
        </div>
      </section>

      <CTASection />
    </>
  );
}
