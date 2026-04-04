"use client";

import { useState } from "react";
import { motion } from "framer-motion";

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

    if (res.ok) {
      setSubmitted(true);
    }
  }

  return (
    <>
      <section className="bg-[var(--color-primary)] text-white py-16">
        <div className="max-w-6xl mx-auto px-4">
          <p className="text-[var(--color-accent)] font-bold text-sm mb-2">CONTACT</p>
          <h1 className="text-3xl md:text-4xl font-bold">お問い合わせ</h1>
        </div>
      </section>

      <section className="py-16 md:py-24">
        <div className="max-w-2xl mx-auto px-4">
          {submitted ? (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="text-center py-16"
            >
              <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
              </div>
              <h2 className="text-2xl font-bold text-gray-900 mb-2">送信完了</h2>
              <p className="text-gray-600">
                お問い合わせありがとうございます。
                <br />
                担当者より2営業日以内にご連絡いたします。
              </p>
            </motion.div>
          ) : (
            <motion.form
              onSubmit={handleSubmit}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="space-y-6"
            >
              <p className="text-gray-600 mb-8">
                講習内容・料金・スケジュールなど、お気軽にお問い合わせください。
              </p>

              <div>
                <label htmlFor="name" className="block text-sm font-bold text-gray-900 mb-1">
                  お名前 <span className="text-red-500">*</span>
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  required
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[var(--color-primary)] focus:border-transparent outline-none"
                />
              </div>

              <div>
                <label htmlFor="company" className="block text-sm font-bold text-gray-900 mb-1">
                  会社名
                </label>
                <input
                  type="text"
                  id="company"
                  name="company"
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[var(--color-primary)] focus:border-transparent outline-none"
                />
              </div>

              <div>
                <label htmlFor="email" className="block text-sm font-bold text-gray-900 mb-1">
                  メールアドレス <span className="text-red-500">*</span>
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  required
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[var(--color-primary)] focus:border-transparent outline-none"
                />
              </div>

              <div>
                <label htmlFor="phone" className="block text-sm font-bold text-gray-900 mb-1">
                  電話番号
                </label>
                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[var(--color-primary)] focus:border-transparent outline-none"
                />
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-bold text-gray-900 mb-1">
                  お問い合わせ内容 <span className="text-red-500">*</span>
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows={6}
                  required
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[var(--color-primary)] focus:border-transparent outline-none resize-vertical"
                />
              </div>

              <button
                type="submit"
                className="w-full py-4 bg-[var(--color-primary)] text-white font-bold rounded-full hover:bg-[var(--color-primary-dark)] transition-colors"
              >
                送信する
              </button>
            </motion.form>
          )}
        </div>
      </section>
    </>
  );
}
