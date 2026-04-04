"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import AdminHeader from "@/components/admin/AdminHeader";
import TiptapEditor from "@/components/admin/TiptapEditor";

export default function NewPostPage() {
  const router = useRouter();
  const [saving, setSaving] = useState(false);
  const [title, setTitle] = useState("");
  const [slug, setSlug] = useState("");
  const [excerpt, setExcerpt] = useState("");
  const [content, setContent] = useState("<p>ここに本文を入力...</p>");
  const [published, setPublished] = useState(false);

  async function handleSave() {
    if (!title.trim() || !slug.trim()) {
      alert("タイトルとスラッグは必須です");
      return;
    }
    setSaving(true);
    try {
      const res = await fetch("/api/posts", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ title, slug, excerpt, content, published }),
      });
      if (res.ok) {
        router.push("/admin/posts");
      } else {
        const data = await res.json();
        alert(data.error || "保存に失敗しました");
      }
    } finally {
      setSaving(false);
    }
  }

  function handleTitleChange(value: string) {
    setTitle(value);
    if (!slug) {
      setSlug(
        value
          .toLowerCase()
          .replace(/[^a-z0-9\u3040-\u9fff]/g, "-")
          .replace(/-+/g, "-")
          .replace(/^-|-$/g, "")
      );
    }
  }

  return (
    <div className="min-h-screen bg-gray-50">
      <AdminHeader />
      <main className="max-w-4xl mx-auto px-4 py-8">
        <div className="flex justify-between items-center mb-6">
          <h1 className="text-2xl font-bold text-gray-900">新規記事作成</h1>
          <div className="flex gap-3">
            <button
              onClick={() => router.back()}
              className="px-4 py-2 text-sm text-gray-600 border rounded-lg hover:bg-gray-50"
            >
              キャンセル
            </button>
            <button
              onClick={handleSave}
              disabled={saving}
              className="px-4 py-2 text-sm font-medium text-white bg-[var(--color-primary)] rounded-lg hover:bg-[var(--color-primary-dark)] disabled:opacity-50"
            >
              {saving ? "保存中..." : "保存"}
            </button>
          </div>
        </div>

        <div className="space-y-6">
          <div className="bg-white rounded-xl border p-6 space-y-4">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                タイトル <span className="text-red-500">*</span>
              </label>
              <input
                type="text"
                value={title}
                onChange={(e) => handleTitleChange(e.target.value)}
                className="w-full px-4 py-2.5 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[var(--color-primary)] focus:border-transparent outline-none"
                placeholder="記事のタイトル"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                スラッグ（URL） <span className="text-red-500">*</span>
              </label>
              <div className="flex items-center gap-2">
                <span className="text-sm text-gray-400">/blog/</span>
                <input
                  type="text"
                  value={slug}
                  onChange={(e) => setSlug(e.target.value)}
                  className="flex-1 px-4 py-2.5 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[var(--color-primary)] focus:border-transparent outline-none"
                  placeholder="article-slug"
                />
              </div>
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                抜粋
              </label>
              <textarea
                value={excerpt}
                onChange={(e) => setExcerpt(e.target.value)}
                rows={2}
                className="w-full px-4 py-2.5 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[var(--color-primary)] focus:border-transparent outline-none resize-vertical"
                placeholder="記事の概要（一覧ページに表示）"
              />
            </div>

            <div className="flex items-center gap-2">
              <input
                type="checkbox"
                id="published"
                checked={published}
                onChange={(e) => setPublished(e.target.checked)}
                className="w-4 h-4 rounded border-gray-300 text-[var(--color-primary)] focus:ring-[var(--color-primary)]"
              />
              <label htmlFor="published" className="text-sm text-gray-700">
                公開する
              </label>
            </div>
          </div>

          <div className="bg-white rounded-xl border p-6">
            <label className="block text-sm font-medium text-gray-700 mb-2">本文</label>
            <TiptapEditor content={content} onChange={setContent} />
          </div>
        </div>
      </main>
    </div>
  );
}
