"use client";

import Link from "next/link";
import { useSession, signOut } from "next-auth/react";

export default function AdminHeader() {
  const { data: session } = useSession();

  return (
    <header className="bg-white shadow-sm border-b">
      <div className="max-w-6xl mx-auto px-4 py-3 flex justify-between items-center">
        <div className="flex items-center gap-4">
          <Link href="/admin/dashboard" className="text-lg font-bold text-[var(--color-primary)]">
            管理画面
          </Link>
          <nav className="hidden sm:flex items-center gap-3 text-sm">
            <Link href="/admin/posts" className="text-gray-600 hover:text-[var(--color-primary)]">
              記事管理
            </Link>
            <Link href="/admin/news" className="text-gray-600 hover:text-[var(--color-primary)]">
              News
            </Link>
            <Link href="/admin/contacts" className="text-gray-600 hover:text-[var(--color-primary)]">
              お問い合わせ
            </Link>
          </nav>
        </div>
        <div className="flex items-center gap-4">
          <span className="text-sm text-gray-600">{session?.user?.name}</span>
          <button
            onClick={() => signOut({ callbackUrl: `${window.location.origin}/admin/login` })}
            className="text-sm text-gray-500 hover:text-gray-700"
          >
            ログアウト
          </button>
        </div>
      </div>
    </header>
  );
}
