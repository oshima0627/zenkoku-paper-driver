"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import CTASection from "@/components/sections/CTASection";

const faqs = [
  { question: "講習はどこで実施されますか？", answer: "御社の所在地や社員様のご自宅付近まで講師が出張いたします。マイカー・社用車・レンタカーいずれでも対応可能です。" },
  { question: "教習車の用意がない場合はどうすればいいですか？", answer: "教習車両（補助ブレーキ付き）やレンタカーの手配も可能ですのでご安心ください。" },
  { question: "社員全員に受講させる必要がありますか？", answer: "義務ではありませんが、運転業務の有無や希望に応じて選択いただけます。必要に応じて対象者を限定した受講も可能です。" },
  { question: "講習内容はどのようなものですか？", answer: "車両感覚・車線変更・駐車・高速道路など、社員様の運転レベルに合わせて柔軟にカリキュラムを組みます。安全運転の意識づけも含まれます。" },
  { question: "講習の所要時間はどれくらいですか？", answer: "1回あたり100分を基本としています。集中力を保ちながら効率的に学べる時間配分です。" },
  { question: "講習の費用はどのように決まりますか？", answer: "受講人数・回数・車両の有無によって変動します。法人様向けにはまとめてのお見積りをご提示いたします。" },
  { question: "事故が起きた場合の補償はどうなりますか？", answer: "教習車両使用時は自動車保険を完備しております。マイカー・社用車使用時は各車両の保険が適用されます。" },
  { question: "講習の効果を客観的に確認できますか？", answer: "受講前後の運転チェックや、指導員によるフィードバックレポートをお渡しします。人事評価や安全管理資料としても活用いただけます。" },
  { question: "女性社員や運転に強い不安がある社員にも対応できますか？", answer: "はい、指導員は丁寧で柔らかい指導を心がけています。マンツーマン形式で、女性指導員も在籍しておりますので安心して受講いただけます。" },
  { question: "講習後のフォローアップはありますか？", answer: "定期的な再講習や、特定の運転スキルに特化した追加レッスンをご用意しています。" },
  { question: "対応エリアはどこですか？", answer: "全国対応しております。大阪・兵庫・奈良を中心に、北海道から沖縄まで出張講習が可能です。" },
  { question: "何名から申し込みできますか？", answer: "1名様から受講可能です。少人数でも気軽にお申し込みいただけます。" },
  { question: "キャンセルや日程変更は可能ですか？", answer: "講習日の3日前までは無料で変更・キャンセルが可能です。2日前以降はキャンセル料が発生する場合がございます。" },
  { question: "オンラインでの座学講習はありますか？", answer: "はい、Zoomを使用したオンライン座学講習にも対応しております。全国どこからでも受講可能です。" },
];

function FAQItem({ question, answer, index }: { question: string; answer: string; index: number }) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <motion.div
      initial={{ opacity: 0, y: 10 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.3, delay: index * 0.03 }}
    >
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="w-full flex items-center gap-4 py-5 px-5 text-left bg-[var(--color-bg-gray)] rounded-2xl hover:bg-[var(--color-bg-gray)]/80 transition-colors"
      >
        <span className="flex-1 font-medium text-[var(--color-primary)] text-sm">{question}</span>
        <svg
          className={`w-4 h-4 text-[var(--color-text-light)] shrink-0 transition-transform duration-300 ${isOpen ? "rotate-180" : ""}`}
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
            <div className="px-5 py-4">
              <p className="text-sm text-[var(--color-text-light)] leading-relaxed">{answer}</p>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
}

export default function FAQPage() {
  return (
    <>
      <section className="py-20 md:py-28 bg-white">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <p className="text-sm font-medium text-[var(--color-text-light)] tracking-widest uppercase mb-4">FAQ</p>
          <h1 className="text-3xl sm:text-5xl font-bold text-[var(--color-primary)] tracking-tight">よくある質問</h1>
        </div>
      </section>

      <section className="py-16 md:py-24 bg-white">
        <div className="max-w-3xl mx-auto px-4">
          <div className="space-y-3">
            {faqs.map((faq, i) => (
              <FAQItem key={faq.question} question={faq.question} answer={faq.answer} index={i} />
            ))}
          </div>
        </div>
      </section>

      <CTASection />
    </>
  );
}
