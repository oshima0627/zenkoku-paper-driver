"use client";

import { useState } from "react";
import { motion } from "framer-motion";

function FormRow({ label, sub, required, children }: { label: string; sub?: string; required?: boolean; children: React.ReactNode }) {
  return (
    <div className="flex flex-col sm:flex-row border-b border-[var(--color-border)]/30 last:border-b-0">
      <div className="sm:w-1/3 px-6 py-5">
        <p className="text-sm font-semibold text-[var(--color-primary)]">
          {label}
          {required && <span className="text-red-500 text-xs ml-1">*</span>}
        </p>
        {sub && <p className="text-[11px] text-[var(--color-text-light)] mt-0.5 tracking-wider">{sub}</p>}
      </div>
      <div className="px-6 py-5 flex-1">{children}</div>
    </div>
  );
}

export default function ContactSection() {
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

  const inputClass = "w-full max-w-xs px-4 py-2.5 bg-white border border-[var(--color-border)]/50 rounded-xl focus:ring-2 focus:ring-[var(--color-accent)]/30 focus:border-[var(--color-accent)] outline-none text-sm text-[var(--color-primary)] transition-all duration-200";

  return (
    <>
      {/* Contact form */}
      <section className="py-28 md:py-36">
        <div className="max-w-3xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <p className="text-xs font-medium tracking-[0.25em] text-[var(--color-accent)] uppercase mb-3">Contact</p>
            <h2 className="text-3xl sm:text-4xl font-bold text-[var(--color-primary)] tracking-tight">お問い合わせ</h2>
          </motion.div>

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
            <motion.form
              onSubmit={handleSubmit}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
            >
              <div className="bg-[var(--color-bg-gray)] rounded-3xl overflow-hidden shadow-md">
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
                  <div className="space-y-2.5">
                    <label className="flex items-center gap-2.5 text-sm text-[var(--color-primary)] cursor-pointer"><input type="radio" name="replyMethod" value="メール" className="accent-[var(--color-accent)]" />メール</label>
                    <label className="flex items-center gap-2.5 text-sm text-[var(--color-primary)] cursor-pointer"><input type="radio" name="replyMethod" value="電話" className="accent-[var(--color-accent)]" />電話</label>
                  </div>
                </FormRow>
                <FormRow label="電話の場合の希望日時">
                  <div className="flex flex-col sm:flex-row gap-2">
                    <input type="date" name="preferredDate" className={inputClass} />
                    <input type="text" name="preferredTime" placeholder="○時から○時" className={inputClass + " sm:w-32"} />
                  </div>
                </FormRow>
                <FormRow label="使用する車">
                  <div className="space-y-2.5">
                    <label className="flex items-center gap-2.5 text-sm text-[var(--color-primary)] cursor-pointer"><input type="radio" name="carType" value="当スクールの教習車" className="accent-[var(--color-accent)]" />当スクールの教習車</label>
                    <label className="flex items-center gap-2.5 text-sm text-[var(--color-primary)] cursor-pointer"><input type="radio" name="carType" value="社用車" className="accent-[var(--color-accent)]" />社用車</label>
                  </div>
                </FormRow>
                <FormRow label="出張先">
                  <div className="space-y-2.5">
                    <label className="flex items-center gap-2.5 text-sm text-[var(--color-primary)] cursor-pointer"><input type="radio" name="location" value="会社" className="accent-[var(--color-accent)]" />会社</label>
                    <label className="flex items-center gap-2.5 text-sm text-[var(--color-primary)] cursor-pointer"><input type="radio" name="location" value="会社以外" className="accent-[var(--color-accent)]" />会社以外</label>
                  </div>
                </FormRow>
                {[1, 2, 3].map((n) => (
                  <FormRow key={n} label={`第${n}希望日`}>
                    <div className="flex flex-col sm:flex-row items-start sm:items-center gap-2">
                      <input type="date" name={`date${n}`} className={inputClass} />
                      <select name={`time${n}`} className={inputClass + " sm:w-24"}>
                        <option>午前</option>
                        <option>午後</option>
                      </select>
                    </div>
                  </FormRow>
                ))}
                <FormRow label="メッセージ" sub="Message" required>
                  <textarea name="message" required rows={6} className="w-full px-4 py-3 bg-white border border-[var(--color-border)]/50 rounded-xl focus:ring-2 focus:ring-[var(--color-accent)]/30 focus:border-[var(--color-accent)] outline-none text-sm text-[var(--color-primary)] resize-vertical transition-all duration-200" />
                </FormRow>
              </div>

              <div className="text-center mt-10">
                <button type="submit" className="px-12 py-4 text-sm font-medium text-white bg-[var(--color-primary)] rounded-full hover:bg-[var(--color-primary-light)] transition-all duration-300 shadow-[0_0_20px_rgba(0,0,0,0.1)]">
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

      {/* Phone / LINE banner */}
      <section className="py-16">
        <div className="max-w-4xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="bg-white rounded-3xl p-8 md:p-10 shadow-md border border-gray-100"
          >
            <div className="flex flex-col md:flex-row justify-between items-center gap-6">
              <div className="text-center md:text-left">
                <p className="text-xs font-medium text-[var(--color-text-light)] tracking-wider mb-2">お電話でのご相談</p>
                <a href="tel:070-2002-0948" className="flex items-center gap-2 text-xl sm:text-2xl md:text-3xl font-bold text-[var(--color-primary)] tracking-tight">
                  070-2002-0948
                </a>
              </div>
              <a
                href="#"
                className="flex items-center gap-2 px-8 py-3 bg-[#06C755] text-white text-sm font-medium rounded-full hover:opacity-90 transition-all duration-300 shadow-sm"
              >
                <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M19.365 9.863c.349 0 .63.285.63.631 0 .345-.281.63-.63.63H17.61v1.125h1.755c.349 0 .63.283.63.63 0 .344-.281.629-.63.629h-2.386c-.345 0-.627-.285-.627-.629V8.108c0-.345.282-.63.627-.63h2.386c.349 0 .63.285.63.63 0 .349-.281.63-.63.63H17.61v1.125h1.755zm-3.855 3.016c0 .27-.174.51-.432.596-.064.021-.133.031-.199.031-.211 0-.391-.09-.51-.25l-2.443-3.317v2.94c0 .344-.279.629-.631.629-.346 0-.626-.285-.626-.629V8.108c0-.27.173-.51.43-.595.06-.023.136-.033.194-.033.195 0 .375.104.495.254l2.462 3.33V8.108c0-.345.282-.63.63-.63.345 0 .63.285.63.63v4.771zm-5.741 0c0 .344-.282.629-.631.629-.345 0-.627-.285-.627-.629V8.108c0-.345.282-.63.627-.63.349 0 .631.285.631.63v4.771zm-2.466.629H4.917c-.345 0-.63-.285-.63-.629V8.108c0-.345.285-.63.63-.63.348 0 .63.285.63.63v4.141h1.756c.348 0 .629.283.629.63 0 .344-.282.629-.629.629M24 10.314C24 4.943 18.615.572 12 .572S0 4.943 0 10.314c0 4.811 4.27 8.842 10.035 9.608.391.082.923.258 1.058.59.12.301.079.766.038 1.08l-.164 1.02c-.045.301-.24 1.186 1.049.645 1.291-.539 6.916-4.078 9.436-6.975C23.176 14.393 24 12.458 24 10.314" />
                </svg>
                LINEでのご相談
              </a>
            </div>
            <p className="text-center text-xs text-[var(--color-text-light)] mt-6">
              1営業日以内にご連絡させて頂きます。
            </p>
          </motion.div>
        </div>
      </section>
    </>
  );
}
