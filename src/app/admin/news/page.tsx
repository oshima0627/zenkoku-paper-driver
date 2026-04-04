"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import AdminHeader from "@/components/admin/AdminHeader";

interface NewsItem {
  id: string;
  title: string;
  publishedAt: string;
}

export default function NewsListPage() {
  const [news, setNews] = useState<NewsItem[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetch() {
      try {
        const res = await window.fetch("/api/news");
        if (res.ok) setNews(await res.json());
      } finally {
        setLoading(false);
      }
    }
    fetch();
  }, []);

  async function handleDelete(id: string) {
    if (!confirm("このニュースを削除しますか？")) return;
    const res = await window.fetch(`/api/news/${id}`, { method: "DELETE" });
    if (res.ok) setNews(news.filter((n) => n.id !== id));
  }

  return (
    <div className="min-h-screen bg-gray-50">
      <AdminHeader />
      <main className="max-w-4xl mx-auto px-4 py-8">
        <div className="flex justify-between items-center mb-6">
          <h1 className="text-2xl font-bold text-gray-900">News管理</h1>
          <Link href="/admin/news/new" className="px-4 py-2 bg-[var(--color-primary)] text-white font-medium rounded-lg hover:bg-[var(--color-primary-dark)] transition-colors">
            新規作成
          </Link>
        </div>

        {loading ? (
          <div className="text-center py-12 text-gray-500">読み込み中...</div>
        ) : news.length === 0 ? (
          <div className="text-center py-12 bg-white rounded-xl border">
            <p className="text-gray-500 mb-4">ニュースはまだありません</p>
            <Link href="/admin/news/new" className="text-[var(--color-primary)] font-medium hover:underline">最初のニュースを作成する</Link>
          </div>
        ) : (
          <div className="bg-white rounded-xl border overflow-hidden">
            <div className="divide-y">
              {news.map((item) => (
                <div key={item.id} className="flex justify-between items-center px-6 py-4 hover:bg-gray-50">
                  <div>
                    <Link href={`/admin/news/${item.id}`} className="text-sm font-medium text-gray-900 hover:text-[var(--color-primary)]">
                      {item.title}
                    </Link>
                    <p className="text-xs text-gray-400 mt-0.5">{new Date(item.publishedAt).toLocaleDateString("ja-JP")}</p>
                  </div>
                  <div className="flex gap-2">
                    <Link href={`/admin/news/${item.id}`} className="text-xs text-[var(--color-primary)] hover:underline">編集</Link>
                    <button onClick={() => handleDelete(item.id)} className="text-xs text-red-500 hover:underline">削除</button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}
      </main>
    </div>
  );
}
