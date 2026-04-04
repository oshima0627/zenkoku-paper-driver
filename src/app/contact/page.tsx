"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import ContactBanner from "@/components/sections/ContactBanner";

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

  return (
    <>
      <ContactBanner />

      <section className="py-16 md:py-24">
        <div className="max-w-3xl mx-auto px-4">
          <div className="text-center mb-10">
            <h1 className="text-2xl md:text-3xl font-bold text-gray-900">お問い合わせ</h1>
            <p className="text-sm text-[var(--color-accent)] mt-1">-contact-</p>
          </div>

          {submitted ? (
            <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="text-center py-16">
              <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
              </div>
              <h2 className="text-2xl font-bold text-gray-900 mb-2">送信完了</h2>
              <p className="text-gray-600">お問い合わせありがとうございます。<br />1営業日以内にご連絡させて頂きます。</p>
            </motion.div>
          ) : (
            <>
              {/* Steps indicator */}
              <div className="flex justify-center items-center gap-8 mb-10">
                {[
                  { num: 1, label: "入力画面", active: true },
                  { num: 2, label: "確認画面", active: false },
                  { num: 3, label: "完了画面", active: false },
                ].map((step) => (
                  <div key={step.num} className="text-center">
                    <div className={`w-8 h-8 rounded-full flex items-center justify-center text-sm font-bold mx-auto mb-1 ${step.active ? "bg-[var(--color-primary)] text-white" : "bg-gray-200 text-gray-400"}`}>
                      {step.num}
                    </div>
                    <p className={`text-xs ${step.active ? "text-gray-900 font-bold" : "text-gray-400"}`}>{step.label}</p>
                  </div>
                ))}
              </div>

              <motion.form onSubmit={handleSubmit} initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}>
                <table className="w-full border-t">
                  <tbody>
                    <tr className="border-b">
                      <th className="px-4 py-5 text-left align-top w-1/3">
                        <p className="text-sm font-bold text-gray-900">会社名</p>
                        <p className="text-xs text-gray-400">Company name</p>
                      </th>
                      <td className="px-4 py-5">
                        <input type="text" name="company" className="w-full max-w-xs px-3 py-2 border border-gray-300 rounded focus:ring-2 focus:ring-[var(--color-primary)] focus:border-transparent outline-none text-sm" />
                      </td>
                    </tr>
                    <tr className="border-b">
                      <th className="px-4 py-5 text-left align-top">
                        <p className="text-sm font-bold text-gray-900">担当者氏名 <span className="text-red-500 text-xs">必須</span></p>
                        <p className="text-xs text-gray-400">Name</p>
                      </th>
                      <td className="px-4 py-5">
                        <input type="text" name="name" required className="w-full max-w-xs px-3 py-2 border border-gray-300 rounded focus:ring-2 focus:ring-[var(--color-primary)] focus:border-transparent outline-none text-sm" />
                      </td>
                    </tr>
                    <tr className="border-b">
                      <th className="px-4 py-5 text-left align-top">
                        <p className="text-sm font-bold text-gray-900">メールアドレス <span className="text-red-500 text-xs">必須</span></p>
                        <p className="text-xs text-gray-400">E-mail</p>
                      </th>
                      <td className="px-4 py-5">
                        <input type="email" name="email" required placeholder="例：〇〇@gmail.com" className="w-full max-w-xs px-3 py-2 border border-gray-300 rounded focus:ring-2 focus:ring-[var(--color-primary)] focus:border-transparent outline-none text-sm" />
                      </td>
                    </tr>
                    <tr className="border-b">
                      <th className="px-4 py-5 text-left align-top">
                        <p className="text-sm font-bold text-gray-900">電話番号</p>
                        <p className="text-xs text-gray-400">Tel</p>
                      </th>
                      <td className="px-4 py-5">
                        <input type="tel" name="phone" placeholder="例：000-0000-0000" className="w-full max-w-xs px-3 py-2 border border-gray-300 rounded focus:ring-2 focus:ring-[var(--color-primary)] focus:border-transparent outline-none text-sm" />
                      </td>
                    </tr>
                    <tr className="border-b">
                      <th className="px-4 py-5 text-left align-top">
                        <p className="text-sm font-bold text-gray-900">お問い合わせの返信方法</p>
                      </th>
                      <td className="px-4 py-5 space-y-2">
                        <label className="flex items-center gap-2 text-sm"><input type="radio" name="replyMethod" value="メール" className="text-[var(--color-primary)]" />メール</label>
                        <label className="flex items-center gap-2 text-sm"><input type="radio" name="replyMethod" value="電話" className="text-[var(--color-primary)]" />電話</label>
                      </td>
                    </tr>
                    <tr className="border-b">
                      <th className="px-4 py-5 text-left align-top">
                        <p className="text-sm font-bold text-gray-900">返信方法が電話の場合の希望日時</p>
                      </th>
                      <td className="px-4 py-5 space-y-2">
                        <input type="date" name="preferredDate" className="px-3 py-2 border border-gray-300 rounded text-sm" />
                        <input type="text" name="preferredTime" placeholder="○時から○時" className="ml-2 px-3 py-2 border border-gray-300 rounded text-sm" />
                      </td>
                    </tr>
                    <tr className="border-b">
                      <th className="px-4 py-5 text-left align-top">
                        <p className="text-sm font-bold text-gray-900">使用する車</p>
                      </th>
                      <td className="px-4 py-5 space-y-2">
                        <label className="flex items-center gap-2 text-sm"><input type="radio" name="carType" value="当スクールの教習車" />当スクールの教習車</label>
                        <label className="flex items-center gap-2 text-sm"><input type="radio" name="carType" value="社用車" />社用車</label>
                      </td>
                    </tr>
                    <tr className="border-b">
                      <th className="px-4 py-5 text-left align-top">
                        <p className="text-sm font-bold text-gray-900">出張先</p>
                      </th>
                      <td className="px-4 py-5 space-y-2">
                        <label className="flex items-center gap-2 text-sm"><input type="radio" name="location" value="会社" />会社</label>
                        <label className="flex items-center gap-2 text-sm"><input type="radio" name="location" value="会社以外" />会社以外</label>
                      </td>
                    </tr>
                    {[1, 2, 3].map((n) => (
                      <tr key={n} className="border-b">
                        <th className="px-4 py-5 text-left align-top">
                          <p className="text-sm font-bold text-gray-900">第{n}希望日</p>
                        </th>
                        <td className="px-4 py-5 flex items-center gap-2">
                          <input type="date" name={`date${n}`} className="px-3 py-2 border border-gray-300 rounded text-sm" />
                          <select name={`time${n}`} className="px-3 py-2 border border-gray-300 rounded text-sm">
                            <option>午前</option>
                            <option>午後</option>
                          </select>
                        </td>
                      </tr>
                    ))}
                    <tr className="border-b">
                      <th className="px-4 py-5 text-left align-top">
                        <p className="text-sm font-bold text-gray-900">メッセージ <span className="text-red-500 text-xs">必須</span></p>
                        <p className="text-xs text-gray-400">Message</p>
                      </th>
                      <td className="px-4 py-5">
                        <textarea name="message" required rows={6} className="w-full px-3 py-2 border border-gray-300 rounded focus:ring-2 focus:ring-[var(--color-primary)] focus:border-transparent outline-none text-sm resize-vertical" />
                      </td>
                    </tr>
                  </tbody>
                </table>

                <div className="text-center mt-8">
                  <button type="submit" className="px-12 py-3 border border-gray-400 rounded text-sm font-medium text-gray-700 hover:bg-gray-50 transition-colors">
                    確認画面へ
                  </button>
                </div>
                <p className="text-center text-xs text-gray-500 mt-4">
                  ※ 送信後は自動返信メールをお送りしております。届かない場合は迷惑メールフォルダもご確認ください。
                </p>
              </motion.form>
            </>
          )}
        </div>
      </section>
    </>
  );
}
