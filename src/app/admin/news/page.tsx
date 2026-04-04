"use client";

import { useEffect, useState } from "react";
import AdminHeader from "@/components/admin/AdminHeader";

interface NewsItem {
  id: string;
  title: string;
  url: string | null;
  publishedAt: string;
}

export default function NewsAdminPage() {
  const [news, setNews] = useState<NewsItem[]>([]);
  const [loading, setLoading] = useState(true);
  const [title, setTitle] = useState("");
  const [url, setUrl] = useState("");
  const [publishedAt, setPublishedAt] = useState(new Date().toISOString().split("T")[0]);
  const [saving, setSaving] = useState(false);

  useEffect(() => {
    fetchNews();
  }, []);

  async function fetchNews() {
    try {
      const res = await fetch("/api/news");
      if (res.ok) setNews(await res.json());
    } finally {
      setLoading(false);
    }
  }

  async function handleAdd() {
    if (!title.trim()) return alert("タイトルは必須です");
    setSaving(true);
    try {
      const res = await fetch("/api/news", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ title, url: url || null, publishedAt }),
      });
      if (res.ok) {
        setTitle("");
        setUrl("");
        setPublishedAt(new Date().toISOString().split("T")[0]);
        fetchNews();
      }
    } finally {
      setSaving(false);
    }
  }

  async function handleDelete(id: string) {
    if (!confirm("このニュースを削除しますか？")) return;
    const res = await fetch(`/api/news/${id}`, { method: "DELETE" });
    if (res.ok) setNews(news.filter((n) => n.id !== id));
  }

  return (
    <div className="min-h-screen bg-gray-50">
      <AdminHeader />
      <main className="max-w-4xl mx-auto px-4 py-8">
        <h1 className="text-2xl font-bold text-gray-900 mb-6">新着情報（News）管理</h1>

        {/* Add form */}
        <div className="bg-white rounded-xl border p-6 mb-8">
          <h2 className="text-sm font-bold text-gray-700 mb-4">新規追加</h2>
          <div className="space-y-3">
            <div>
              <label className="block text-xs text-gray-500 mb-1">タイトル <span className="text-red-500">*</span></label>
              <input
                type="text"
                value={title}
                onChange={(e) => setTitle(e.target.value)}
                placeholder="例: 提携スクールが5校となりました"
                className="w-full px-3 py-2 border border-gray-300 rounded-lg text-sm focus:ring-2 focus:ring-[var(--color-primary)] focus:border-transparent outline-none"
              />
            </div>
            <div className="grid grid-cols-2 gap-3">
              <div>
                <label className="block text-xs text-gray-500 mb-1">リンクURL（任意）</label>
                <input
                  type="text"
                  value={url}
                  onChange={(e) => setUrl(e.target.value)}
                  placeholder="https://..."
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg text-sm focus:ring-2 focus:ring-[var(--color-primary)] focus:border-transparent outline-none"
                />
              </div>
              <div>
                <label className="block text-xs text-gray-500 mb-1">日付</label>
                <input
                  type="date"
                  value={publishedAt}
                  onChange={(e) => setPublishedAt(e.target.value)}
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg text-sm focus:ring-2 focus:ring-[var(--color-primary)] focus:border-transparent outline-none"
                />
              </div>
            </div>
            <button
              onClick={handleAdd}
              disabled={saving}
              className="px-6 py-2 text-sm font-medium text-white bg-[var(--color-primary)] rounded-lg hover:bg-[var(--color-primary-dark)] disabled:opacity-50"
            >
              {saving ? "追加中..." : "追加"}
            </button>
          </div>
        </div>

        {/* List */}
        {loading ? (
          <div className="text-center py-8 text-gray-500">読み込み中...</div>
        ) : news.length === 0 ? (
          <div className="text-center py-8 bg-white rounded-xl border text-gray-500">
            ニュースはまだありません
          </div>
        ) : (
          <div className="bg-white rounded-xl border overflow-hidden">
            <div className="divide-y">
              {news.map((item) => (
                <div key={item.id} className="flex justify-between items-center px-6 py-4">
                  <div>
                    <p className="text-sm font-medium text-gray-900">{item.title}</p>
                    <div className="flex items-center gap-3 mt-1">
                      <span className="text-xs text-gray-400">
                        {new Date(item.publishedAt).toLocaleDateString("ja-JP")}
                      </span>
                      {item.url && (
                        <a href={item.url} target="_blank" rel="noopener noreferrer" className="text-xs text-[var(--color-primary)] hover:underline">
                          リンク
                        </a>
                      )}
                    </div>
                  </div>
                  <button
                    onClick={() => handleDelete(item.id)}
                    className="text-xs text-red-500 hover:underline shrink-0"
                  >
                    削除
                  </button>
                </div>
              ))}
            </div>
          </div>
        )}
      </main>
    </div>
  );
}
