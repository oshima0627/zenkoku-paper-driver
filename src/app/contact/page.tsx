"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import ContactBanner from "@/components/sections/ContactBanner";

function FormRow({ label, sub, required, children }: { label: string; sub?: string; required?: boolean; children: React.ReactNode }) {
  return (
    <div className="flex flex-col sm:flex-row border-b border-[var(--color-border)]/50 last:border-b-0">
      <div className="sm:w-1/3 px-4 py-4 sm:py-5">
        <p className="text-sm font-medium text-[var(--color-primary)]">
          {label}
          {required && <span className="text-red-500 text-xs ml-1">*</span>}
        </p>
        {sub && <p className="text-xs text-[var(--color-text-light)] mt-0.5">{sub}</p>}
      </div>
      <div className="px-4 py-4 sm:py-5 flex-1">{children}</div>
    </div>
  );
}

export default function ContactPage() {
  const [submitted, setSubmitted] = useState(false);

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    const data = Object.fromEntries(formData);
    const res = await fetch("/api/contact", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(data),
    });
    if (res.ok) setSubmitted(true);
  }

  const inputClass = "w-full max-w-xs px-3 py-2 bg-[var(--color-bg-gray)] border border-[var(--color-border)]/50 rounded-lg focus:ring-2 focus:ring-[var(--color-primary)] focus:border-transparent outline-none text-sm text-[var(--color-primary)]";

  return (
    <>
      <ContactBanner />

      <section className="py-16 md:py-24 bg-white">
        <div className="max-w-3xl mx-auto px-4">
          <div className="text-center mb-10">
            <p className="text-sm font-medium text-[var(--color-text-light)] tracking-widest uppercase mb-2">Contact</p>
            <h1 className="text-2xl sm:text-3xl font-bold text-[var(--color-primary)]">お問い合わせ</h1>
          </div>

          {submitted ? (
            <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="text-center py-16">
              <div className="w-16 h-16 bg-green-50 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
              </div>
              <h2 className="text-2xl font-bold text-[var(--color-primary)] mb-2">送信完了</h2>
              <p className="text-[var(--color-text-light)]">お問い合わせありがとうございます。<br />1営業日以内にご連絡させて頂きます。</p>
            </motion.div>
          ) : (
            <motion.form onSubmit={handleSubmit} initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}>
              <div className="bg-[var(--color-bg-gray)] rounded-2xl overflow-hidden">
                <FormRow label="会社名" sub="Company name">
                  <input type="text" name="company" className={inputClass} />
                </FormRow>
                <FormRow label="担当者氏名" sub="Name" required>
                  <input type="text" name="name" required className={inputClass} />
                </FormRow>
                <FormRow label="メールアドレス" sub="E-mail" required>
                  <input type="email" name="email" required placeholder="例：〇〇@gmail.com" className={inputClass} />
                </FormRow>
                <FormRow label="電話番号" sub="Tel">
                  <input type="tel" name="phone" placeholder="例：000-0000-0000" className={inputClass} />
                </FormRow>
                <FormRow label="返信方法">
                  <div className="space-y-2">
                    <label className="flex items-center gap-2 text-sm text-[var(--color-primary)]"><input type="radio" name="replyMethod" value="メール" />メール</label>
                    <label className="flex items-center gap-2 text-sm text-[var(--color-primary)]"><input type="radio" name="replyMethod" value="電話" />電話</label>
                  </div>
                </FormRow>
                <FormRow label="電話の場合の希望日時">
                  <div className="flex flex-wrap gap-2">
                    <input type="date" name="preferredDate" className={inputClass} />
                    <input type="text" name="preferredTime" placeholder="○時から○時" className={inputClass + " w-32"} />
                  </div>
                </FormRow>
                <FormRow label="使用する車">
                  <div className="space-y-2">
                    <label className="flex items-center gap-2 text-sm text-[var(--color-primary)]"><input type="radio" name="carType" value="当スクールの教習車" />当スクールの教習車</label>
                    <label className="flex items-center gap-2 text-sm text-[var(--color-primary)]"><input type="radio" name="carType" value="社用車" />社用車</label>
                  </div>
                </FormRow>
                <FormRow label="出張先">
                  <div className="space-y-2">
                    <label className="flex items-center gap-2 text-sm text-[var(--color-primary)]"><input type="radio" name="location" value="会社" />会社</label>
                    <label className="flex items-center gap-2 text-sm text-[var(--color-primary)]"><input type="radio" name="location" value="会社以外" />会社以外</label>
                  </div>
                </FormRow>
                {[1, 2, 3].map((n) => (
                  <FormRow key={n} label={`第${n}希望日`}>
                    <div className="flex flex-wrap items-center gap-2">
                      <input type="date" name={`date${n}`} className={inputClass} />
                      <select name={`time${n}`} className={inputClass + " w-24"}>
                        <option>午前</option>
                        <option>午後</option>
                      </select>
                    </div>
                  </FormRow>
                ))}
                <FormRow label="メッセージ" sub="Message" required>
                  <textarea name="message" required rows={6} className="w-full px-3 py-2 bg-white border border-[var(--color-border)]/50 rounded-lg focus:ring-2 focus:ring-[var(--color-primary)] focus:border-transparent outline-none text-sm text-[var(--color-primary)] resize-vertical" />
                </FormRow>
              </div>

              <div className="text-center mt-8">
                <button type="submit" className="px-10 py-3.5 text-sm font-medium text-white bg-[var(--color-primary)] rounded-full hover:bg-[var(--color-primary-light)] transition-colors">
                  送信する
                </button>
              </div>
              <p className="text-center text-xs text-[var(--color-text-light)] mt-4">
                ※ 送信後は自動返信メールをお送りしております。届かない場合は迷惑メールフォルダもご確認ください。
              </p>
            </motion.form>
          )}
        </div>
      </section>
    </>
  );
}
