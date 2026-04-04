"use client";

import Link from "next/link";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const navItems = [
  { label: "ホーム", href: "/" },
  { label: "協会について", href: "/about" },
  { label: "講習内容", href: "/services" },
  { label: "料金", href: "/price" },
  { label: "よくある質問", href: "/faq" },
  { label: "ブログ", href: "/blog" },
  { label: "お問い合わせ", href: "/contact" },
];

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 bg-white shadow-sm">
      {/* Top bar */}
      <div className="bg-[var(--color-primary)] text-white text-sm">
        <div className="max-w-6xl mx-auto px-4 py-1.5 flex justify-between items-center">
          <p>〜プロフェッショナル集団〜 交通社会の専門家</p>
          <a
            href="tel:0120-000-000"
            className="hidden sm:flex items-center gap-1.5 font-bold"
          >
            <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
              <path d="M6.62 10.79a15.053 15.053 0 006.59 6.59l2.2-2.2a1 1 0 011.01-.24c1.12.37 2.33.57 3.57.57a1 1 0 011 1V20a1 1 0 01-1 1C10.07 21 3 13.93 3 4a1 1 0 011-1h3.5a1 1 0 011 1c0 1.25.2 2.45.57 3.57a1 1 0 01-.24 1.01l-2.2 2.2z" />
            </svg>
            0120-000-000
          </a>
        </div>
      </div>

      {/* Main header */}
      <div className="max-w-6xl mx-auto px-4">
        <div className="flex justify-between items-center h-16">
          <Link href="/" className="flex items-center gap-2">
            <span className="text-xl font-bold text-[var(--color-primary)]">
              全国ペーパードライバー協会
            </span>
          </Link>

          {/* Desktop navigation */}
          <nav className="hidden md:flex items-center gap-1">
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="px-3 py-2 text-sm font-medium text-gray-700 hover:text-[var(--color-primary)] transition-colors rounded-md hover:bg-gray-50"
              >
                {item.label}
              </Link>
            ))}
            <Link
              href="/contact"
              className="ml-2 px-4 py-2 text-sm font-bold text-white bg-[var(--color-accent)] rounded-full hover:bg-[var(--color-accent-light)] transition-colors"
            >
              無料相談
            </Link>
          </nav>

          {/* Mobile menu button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden p-2 rounded-md text-gray-700"
            aria-label="メニュー"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              {isMenuOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="md:hidden overflow-hidden bg-white border-t"
          >
            <nav className="max-w-6xl mx-auto px-4 py-4 flex flex-col gap-1">
              {navItems.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  onClick={() => setIsMenuOpen(false)}
                  className="px-4 py-3 text-sm font-medium text-gray-700 hover:bg-gray-50 rounded-md"
                >
                  {item.label}
                </Link>
              ))}
              <a
                href="tel:0120-000-000"
                className="mt-2 px-4 py-3 text-center text-white font-bold bg-[var(--color-accent)] rounded-full"
              >
                0120-000-000（無料相談）
              </a>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
