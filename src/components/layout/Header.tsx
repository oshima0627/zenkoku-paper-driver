"use client";

import Link from "next/link";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Logo } from "@/components/ui/Logo";

const businessButtons = [
  { label: "スクールサポートAI事業", href: "/ai-support" },
  { label: "安全運転講習事業", href: "/driving" },
];

const navItems = [
  { label: "私たちについて", href: "/#about" },
  { label: "会社概要", href: "/#company" },
];

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 bg-white border-b border-[var(--color-border)]/30">
      <div className="max-w-6xl mx-auto px-6">
        <div className="flex justify-between items-center h-12">
          <Link href="/" className="flex items-center">
            <Logo size="sm" />
          </Link>

          <nav className="hidden lg:flex items-center gap-7">
            {businessButtons.map((btn) => (
              <Link
                key={btn.href}
                href={btn.href}
                className="text-xs font-medium text-[var(--color-text-light)] hover:text-[var(--color-primary)] transition-colors duration-200"
              >
                {btn.label}
              </Link>
            ))}
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="text-xs font-medium text-[var(--color-text-light)] hover:text-[var(--color-primary)] transition-colors duration-200"
              >
                {item.label}
              </Link>
            ))}
            <Link
              href="/contact"
              className="px-5 py-1.5 text-xs font-medium text-white bg-[var(--color-primary)] rounded-full hover:bg-[var(--color-primary-light)] transition-all duration-300"
            >
              お問い合わせ
            </Link>
          </nav>

          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="lg:hidden p-2 text-[var(--color-primary)]"
            aria-label="メニュー"
          >
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              {isMenuOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>
      </div>

      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.25, ease: [0.25, 0.1, 0, 1] }}
            className="lg:hidden overflow-hidden bg-white/95 backdrop-blur-xl border-t border-[var(--color-border)]/30"
          >
            <nav className="max-w-6xl mx-auto px-6 py-4 flex flex-col gap-1">
              {businessButtons.map((btn) => (
                <Link
                  key={btn.href}
                  href={btn.href}
                  onClick={() => setIsMenuOpen(false)}
                  className="px-4 py-3 text-sm text-[var(--color-text-light)] hover:text-[var(--color-primary)] hover:bg-[var(--color-bg-gray)] rounded-xl transition-all duration-200"
                >
                  {btn.label}
                </Link>
              ))}

              {navItems.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  onClick={() => setIsMenuOpen(false)}
                  className="px-4 py-3 text-sm text-[var(--color-text-light)] hover:text-[var(--color-primary)] hover:bg-[var(--color-bg-gray)] rounded-xl transition-all duration-200"
                >
                  {item.label}
                </Link>
              ))}

              <Link
                href="/contact"
                onClick={() => setIsMenuOpen(false)}
                className="mt-2 px-4 py-3 text-center text-white text-sm font-medium bg-[var(--color-primary)] rounded-full"
              >
                お問い合わせ
              </Link>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
