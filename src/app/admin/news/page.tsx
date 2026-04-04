"use client";

import Link from "next/link";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";

interface NewsItem {
  id: string;
  title: string;
  published: boolean;
  publishedAt: string;
}

export default function NewsListPage() {
  const router = useRouter();
  const [news, setNews] = useState<NewsItem[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function load() {
      try {
        const res = await window.fetch("/api/news?all=true");
        if (res.ok) setNews(await res.json());
      } finally {
        setLoading(false);
      }
    }
    load();
  }, []);

  async function handleDelete(id: string) {
    if (!confirm("このニュースを削除しますか？")) return;
    const res = await window.fetch(`/api/news/${id}`, { method: "DELETE" });
    if (res.ok) setNews(news.filter((n) => n.id !== id));
  }

  return (
    <div>
      
      <main className="max-w-4xl mx-auto p-8">
        <div className="flex justify-between items-center mb-6">
          <h1 className="text-2xl font-bold text-gray-900">News管理</h1>
          <Link href="/admin/news/new" className="px-4 py-2 bg-[var(--color-primary)] text-white font-medium rounded-lg hover:bg-[var(--color-primary-dark)] transition-colors">新規作成</Link>
        </div>

        {loading ? (
          <div className="text-center py-12 text-gray-500">読み込み中...</div>
        ) : news.length === 0 ? (
          <div className="text-center py-12 bg-white rounded-xl border">
            <p className="text-gray-500 mb-4">ニュースはまだありません</p>
            <Link href="/admin/news/new" className="text-[var(--color-primary)] font-medium hover:underline">最初のニュースを作成する</Link>
          </div>
        ) : (
          <div className="bg-white rounded-xl border overflow-hidden overflow-x-auto">
            <table className="w-full min-w-[600px]">
              <thead className="bg-gray-50 border-b">
                <tr>
                  <th className="px-6 py-3 text-left text-xs font-bold text-gray-500 uppercase">タイトル</th>
                  <th className="px-6 py-3 text-left text-xs font-bold text-gray-500 uppercase">ステータス</th>
                  <th className="px-6 py-3 text-left text-xs font-bold text-gray-500 uppercase">日付</th>
                  <th className="px-6 py-3 text-right text-xs font-bold text-gray-500 uppercase">操作</th>
                </tr>
              </thead>
              <tbody className="divide-y">
                {news.map((item) => (
                  <tr
                    key={item.id}
                    onClick={() => router.push(`/admin/news/${item.id}`)}
                    className="hover:bg-gray-50 cursor-pointer"
                  >
                    <td className="px-6 py-4 text-sm font-medium text-gray-900">{item.title}</td>
                    <td className="px-6 py-4">
                      <span className={`inline-flex px-2.5 py-0.5 rounded-full text-xs font-medium ${item.published ? "bg-green-100 text-green-800" : "bg-gray-100 text-gray-600"}`}>
                        {item.published ? "公開中" : "下書き"}
                      </span>
                    </td>
                    <td className="px-6 py-4 text-sm text-gray-500">{new Date(item.publishedAt).toLocaleDateString("ja-JP")}</td>
                    <td className="px-6 py-4 text-right">
                      <button
                        onClick={(e) => { e.stopPropagation(); handleDelete(item.id); }}
                        className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-medium text-red-600 bg-red-50 hover:bg-red-100 transition-colors"
                      >
                        <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
                        </svg>
                        削除
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        )}
      </main>
    </div>
  );
}
