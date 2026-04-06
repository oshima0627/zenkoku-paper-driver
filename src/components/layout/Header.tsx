"use client";

import Link from "next/link";
import Image from "next/image";
import { useState, useRef, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

const dropdownMenus = [
  {
    label: "スクールサポートAI事業",
    items: [
      { label: "サービス内容", href: "/ai-support" },
      { label: "ご利用の流れ", href: "/ai-support#ai-flow" },
      { label: "料金案内", href: "/ai-support#ai-price" },
    ],
  },
  {
    label: "安全運転講習事業(協会)",
    items: [
      { label: "サービス内容", href: "/driving" },
      { label: "ご利用の流れ", href: "/driving#driving-flow" },
      { label: "料金案内", href: "/driving#price" },
    ],
  },
];

const navItems = [
  { label: "私たちについて", href: "/#about" },
  { label: "会社概要", href: "/#company" },
];

function DropdownMenu({ menu }: { menu: typeof dropdownMenus[number] }) {
  const [open, setOpen] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    function handleClick(e: MouseEvent) {
      if (ref.current && !ref.current.contains(e.target as Node)) setOpen(false);
    }
    document.addEventListener("mousedown", handleClick);
    return () => document.removeEventListener("mousedown", handleClick);
  }, []);

  return (
    <div ref={ref} className="relative">
      <button
        onClick={() => setOpen(!open)}
        className="flex items-center gap-1 text-xs font-medium text-[var(--color-text-light)] hover:text-[var(--color-primary)] transition-colors duration-200"
      >
        {menu.label}
        <svg className={`w-3 h-3 transition-transform duration-200 ${open ? "rotate-180" : ""}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
        </svg>
      </button>
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, y: 4 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 4 }}
            transition={{ duration: 0.15 }}
            className="absolute top-full left-1/2 -translate-x-1/2 mt-2 w-44 bg-white rounded-xl shadow-lg border border-gray-100 overflow-hidden z-50"
          >
            {menu.items.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                onClick={() => setOpen(false)}
                className="block px-4 py-2.5 text-xs text-[var(--color-text-light)] hover:text-[var(--color-primary)] hover:bg-gray-50 transition-colors duration-150"
              >
                {item.label}
              </Link>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 bg-white border-b border-[var(--color-border)]/30">
      <div className="max-w-6xl mx-auto px-6">
        <div className="flex justify-between items-center h-12">
          <Link href="/" className="flex items-center gap-3">
            <Image src="/association-logo.png" alt="ロゴ" width={64} height={36} className="h-8 w-auto object-contain" />
            <span className="text-xs sm:text-sm font-semibold text-[var(--color-primary)]">
              全国ペーパードライバー協会
            </span>
          </Link>

          <nav className="hidden lg:flex items-center gap-7">
            {dropdownMenus.map((menu) => (
              <DropdownMenu key={menu.label} menu={menu} />
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
              {dropdownMenus.map((menu) => (
                <div key={menu.label}>
                  <p className="px-4 pt-4 pb-1 text-xs font-semibold text-[var(--color-primary)] tracking-wider">{menu.label}</p>
                  {menu.items.map((item) => (
                    <Link
                      key={item.href}
                      href={item.href}
                      onClick={() => setIsMenuOpen(false)}
                      className="pl-8 pr-4 py-2.5 text-sm text-[var(--color-text-light)] hover:text-[var(--color-primary)] hover:bg-[var(--color-bg-gray)] rounded-xl transition-all duration-200 block"
                    >
                      {item.label}
                    </Link>
                  ))}
                </div>
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
