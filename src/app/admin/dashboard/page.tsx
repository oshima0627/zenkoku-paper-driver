"use client";

import Link from "next/link";
import { useSession, signOut } from "next-auth/react";

const menuItems = [
  {
    title: "記事管理",
    description: "ブログ記事の作成・編集・削除",
    href: "/admin/posts",
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z" />
      </svg>
    ),
  },
  {
    title: "News管理",
    description: "新着情報の追加・削除",
    href: "/admin/news",
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 20H5a2 2 0 01-2-2V6a2 2 0 012-2h10a2 2 0 012 2v1m2 13a2 2 0 01-2-2V7m2 13a2 2 0 002-2V9a2 2 0 00-2-2h-2m-4-3H9M7 16h6M7 8h6v4H7V8z" />
      </svg>
    ),
  },
  {
    title: "お問い合わせ",
    description: "お問い合わせの確認・対応",
    href: "/admin/contacts",
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
      </svg>
    ),
  },
  {
    title: "サイトを表示",
    description: "公開サイトを確認",
    href: "/",
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
      </svg>
    ),
  },
];

export default function DashboardPage() {
  const { data: session } = useSession();

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Admin header */}
      <header className="bg-white shadow-sm border-b">
        <div className="max-w-6xl mx-auto px-4 py-3 flex justify-between items-center">
          <div className="flex items-center gap-3">
            <Link href="/admin/dashboard" className="text-lg font-bold text-[var(--color-primary)]">
              管理画面
            </Link>
            <span className="text-xs text-gray-400">全国ペーパードライバー協会</span>
          </div>
          <div className="flex items-center gap-4">
            <span className="text-sm text-gray-600">{session?.user?.name}</span>
            <button
              onClick={() => signOut({ callbackUrl: "/admin/login" })}
              className="text-sm text-gray-500 hover:text-gray-700"
            >
              ログアウト
            </button>
          </div>
        </div>
      </header>

      {/* Dashboard */}
      <main className="max-w-6xl mx-auto px-4 py-8">
        <h1 className="text-2xl font-bold text-gray-900 mb-8">ダッシュボード</h1>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {menuItems.map((item) => (
            <Link
              key={item.title}
              href={item.href}
              className="bg-white rounded-xl border p-6 hover:shadow-md transition-shadow"
            >
              <div className="text-[var(--color-primary)] mb-4">{item.icon}</div>
              <h2 className="text-lg font-bold text-gray-900 mb-1">{item.title}</h2>
              <p className="text-sm text-gray-500">{item.description}</p>
            </Link>
          ))}
        </div>
      </main>
    </div>
  );
}
