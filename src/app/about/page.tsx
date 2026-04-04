"use client";

import { motion } from "framer-motion";
import CTASection from "@/components/sections/CTASection";

export default function AboutPage() {
  return (
    <>
      {/* Hero */}
      <section className="bg-[var(--color-primary)] text-white py-16">
        <div className="max-w-6xl mx-auto px-4">
          <p className="text-[var(--color-accent)] font-bold text-sm mb-2">ABOUT</p>
          <h1 className="text-3xl md:text-4xl font-bold">協会について</h1>
        </div>
      </section>

      {/* Content */}
      <section className="py-16 md:py-24">
        <div className="max-w-4xl mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <h2 className="text-2xl font-bold mb-6 text-gray-900">全国ペーパードライバー協会とは</h2>
            <p className="text-gray-600 leading-relaxed mb-8">
              全国ペーパードライバー協会は、企業向け安全運転講習を専門とするプロフェッショナル集団です。
              元警察官、交通安全指導員、自動車教習所指導員など、交通安全のエキスパートが多数在籍しています。
            </p>

            <h2 className="text-2xl font-bold mb-6 text-gray-900">理念</h2>
            <div className="bg-[var(--color-bg-gray)] rounded-xl p-8 mb-8">
              <p className="text-lg text-gray-700 leading-relaxed text-center">
                「交通社会の専門家であり、道路における法律の専門家」として、
                <br />
                安全で快適な交通社会の実現に貢献します。
              </p>
            </div>

            <h2 className="text-2xl font-bold mb-6 text-gray-900">協会概要</h2>
            <div className="border rounded-xl overflow-hidden">
              <table className="w-full">
                <tbody>
                  {[
                    ["名称", "全国ペーパードライバー協会"],
                    ["所在地", "東京都渋谷区○○ 1-2-3"],
                    ["設立", "2020年"],
                    ["代表", "○○ ○○"],
                    ["事業内容", "企業向け安全運転講習、ペーパードライバー講習、交通安全研修"],
                    ["対応エリア", "全国"],
                  ].map(([label, value], i) => (
                    <tr key={label} className={i % 2 === 0 ? "bg-gray-50" : "bg-white"}>
                      <th className="px-6 py-4 text-left text-sm font-bold text-gray-900 w-1/3">{label}</th>
                      <td className="px-6 py-4 text-sm text-gray-600">{value}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </motion.div>
        </div>
      </section>

      <CTASection />
    </>
  );
}
