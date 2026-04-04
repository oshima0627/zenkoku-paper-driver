"use client";

import Link from "next/link";
import { motion } from "framer-motion";

const newsItems = [
  { title: "2026年新年あけましておめでとうございます", date: "2026年1月1日", href: "/blog" },
  { title: "提携スクールが5校となりました", date: "2025年7月5日", href: "/blog" },
  { title: "2025年明けましておめでとうございます", date: "2025年1月1日", href: "/blog" },
  { title: "全国ペーパードライバー協会設立", date: "2024年10月26日", href: "/blog" },
  { title: "お知らせ", date: "2024年10月26日", href: "/blog" },
];

export default function NewsSection() {
  return (
    <section className="py-16 bg-white">
      <div className="max-w-3xl mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-2xl font-bold text-gray-900">News</h2>
          <p className="text-sm font-bold text-[var(--color-accent)] mt-1 mb-8">新着情報</p>

          <div className="divide-y divide-gray-200">
            {newsItems.map((item) => (
              <div key={item.title + item.date} className="py-5">
                <Link href={item.href} className="text-[var(--color-primary)] hover:underline font-medium">
                  {item.title}
                </Link>
                <p className="text-xs text-gray-500 mt-1">{item.date}</p>
              </div>
            ))}
          </div>

          <div className="text-center mt-8">
            <Link
              href="/blog"
              className="inline-flex items-center gap-2 px-8 py-3 border border-gray-300 rounded-md text-sm font-medium text-gray-700 hover:bg-gray-50 transition-colors"
            >
              <span className="text-gray-400">{">"}</span>
              VIEW ALL
            </Link>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
