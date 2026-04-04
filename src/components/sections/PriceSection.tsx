"use client";

import Link from "next/link";
import { motion } from "framer-motion";

export default function PriceSection() {
  return (
    <section className="py-16 md:py-24 bg-white">
      <div className="max-w-3xl mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-2xl md:text-3xl font-bold text-gray-900">料金案内</h2>
          <p className="text-sm text-[var(--color-accent)] mt-1">-PRICE-</p>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          {/* Icon */}
          <div className="flex justify-center mb-8">
            <svg className="w-20 h-20 text-[var(--color-primary-light)]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M9 7h6m0 10v-3m-3 3h.01M9 17h.01M9 14h.01M12 14h.01M15 11h.01M12 11h.01M9 11h.01M7 21h10a2 2 0 002-2V5a2 2 0 00-2-2H7a2 2 0 00-2 2v14a2 2 0 002 2z" />
            </svg>
          </div>

          <h3 className="text-center text-lg font-bold text-[var(--color-primary)] mb-6">安全運転講習料金プラン</h3>

          {/* スキル診断 + 技能教習 */}
          <div className="border rounded-lg overflow-hidden mb-4">
            <div className="bg-[var(--color-primary)] text-white p-4 text-center text-sm">
              <p className="font-bold">① 安全運転スキル診断　50分11,000円/人（任意）</p>
              <p className="text-xs mt-1">※教習時間を悩まれている場合の診断</p>
              <p className="my-2">↓</p>
              <p className="font-bold">② 技能教習<span className="text-xs">（初回運転適正検査込み）</span></p>
            </div>
            <table className="w-full">
              <tbody>
                {[
                  { time: "100分×1日", price: "18,000円", note: "", highlight: false },
                  { time: "100分×2日", price: "36,000円", note: "", highlight: false },
                  { time: "100分×3日", price: "54,000円", note: "1番人気！", highlight: false },
                  { time: "100分×4日", price: "72,000円", note: "2番人気！", highlight: true },
                  { time: "100分×5日", price: "90,000円", note: "", highlight: false },
                ].map((row, i) => (
                  <tr key={i} className="border-t">
                    <td className="px-6 py-3 text-sm text-gray-700">
                      {row.time}
                      {row.note && <span className="ml-2 text-red-500 font-bold text-xs">{row.note}</span>}
                    </td>
                    <td className={`px-6 py-3 text-sm text-right font-bold ${row.highlight ? "text-red-500" : "text-gray-900"}`}>
                      {row.price}<span className="text-xs font-normal text-gray-500 ml-1">（税込）</span>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <p className="text-xs text-[var(--color-accent)] text-center mb-8">
            ※安全運転スキル診断を受講された場合、担当指導員より必要日数の目安をお伝え致します。
            <br />
            ※追加教習は、100分毎に18,000円
          </p>

          {/* 学科学 */}
          <div className="border rounded-lg overflow-hidden mb-4">
            <div className="bg-[var(--color-primary)] text-white p-4 text-center text-sm">
              <p>↓</p>
              <p className="font-bold">③ 学科学（任意）</p>
              <p className="text-xs mt-1">※会場を借りる場合は別途支給</p>
            </div>
            <table className="w-full">
              <tbody>
                <tr className="border-t">
                  <td className="px-6 py-3 text-sm text-gray-700">50分</td>
                  <td className="px-6 py-3 text-sm text-right font-bold">18,000円<span className="text-xs font-normal text-gray-500 ml-1">（税込）</span></td>
                </tr>
              </tbody>
            </table>
          </div>

          {/* 最終運転技能チェック */}
          <div className="border rounded-lg overflow-hidden mb-8">
            <div className="bg-[var(--color-primary)] text-white p-4 text-center text-sm">
              <p>↓</p>
              <p className="font-bold">④ 最終運転技能チェック/人（必須）</p>
              <p className="text-xs mt-1">※責任者の同乗可能</p>
            </div>
            <table className="w-full">
              <tbody>
                <tr className="border-t">
                  <td className="px-6 py-3 text-sm text-gray-700">50分</td>
                  <td className="px-6 py-3 text-sm text-right font-bold text-red-500">11,000円<span className="text-xs font-normal text-gray-500 ml-1">（税込）</span></td>
                </tr>
              </tbody>
            </table>
          </div>

          {/* その他費用 */}
          <h3 className="text-center text-lg font-bold text-[var(--color-primary)] mb-6">その他費用</h3>
          <div className="space-y-4 mb-6">
            <div className="flex justify-between items-center border-b border-dashed border-gray-300 pb-3">
              <span className="flex items-center gap-2 text-sm font-bold text-gray-900">
                <span className="w-2 h-2 rounded-full bg-gray-900"></span>
                修了証明書発行
              </span>
              <span className="text-sm text-[var(--color-primary)]">1人5,000円</span>
            </div>
            <div className="flex justify-between items-center border-b border-dashed border-gray-300 pb-3">
              <span className="flex items-center gap-2 text-sm font-bold text-gray-900">
                <span className="w-2 h-2 rounded-full bg-gray-900"></span>
                教習報告書作成
              </span>
              <span className="text-sm text-[var(--color-primary)]">1回3,000円</span>
            </div>
          </div>
          <p className="text-xs text-[var(--color-accent)] mb-8">※高速料金、駐車場におけるコインパーキング代は別途支給</p>

          {/* CTA */}
          <div className="text-center">
            <Link
              href="/contact"
              className="inline-flex items-center justify-center gap-2 w-full max-w-md px-8 py-4 text-lg font-bold bg-[var(--color-primary)] text-white rounded-md hover:bg-[var(--color-primary-dark)] transition-colors"
            >
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
              </svg>
              お申し込みはこちら
            </Link>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
