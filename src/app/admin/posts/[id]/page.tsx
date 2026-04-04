"use client";

import { useState, useEffect, use } from "react";
import { useRouter } from "next/navigation";
import AdminHeader from "@/components/admin/AdminHeader";
import TiptapEditor from "@/components/admin/TiptapEditor";

export default function EditPostPage({ params }: { params: Promise<{ id: string }> }) {
  const { id } = use(params);
  const router = useRouter();
  const [saving, setSaving] = useState(false);
  const [loading, setLoading] = useState(true);
  const [title, setTitle] = useState("");
  const [slug, setSlug] = useState("");
  const [excerpt, setExcerpt] = useState("");
  const [content, setContent] = useState("");
  const [published, setPublished] = useState(false);

  useEffect(() => {
    async function fetchPost() {
      try {
        const res = await fetch(`/api/posts/${id}`);
        if (res.ok) {
          const data = await res.json();
          setTitle(data.title);
          setSlug(data.slug);
          setExcerpt(data.excerpt || "");
          setContent(data.content);
          setPublished(data.published);
        }
      } finally {
        setLoading(false);
      }
    }
    fetchPost();
  }, [id]);

  async function handleSave() {
    if (!title.trim() || !slug.trim()) {
      alert("タイトルとスラッグは必須です");
      return;
    }
    setSaving(true);
    try {
      const res = await fetch(`/api/posts/${id}`, {
        method: "PUT",
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

  if (loading) {
    return (
      <div className="min-h-screen bg-gray-50">
        <AdminHeader />
        <div className="text-center py-16 text-gray-500">読み込み中...</div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50">
      <AdminHeader />
      <main className="max-w-4xl mx-auto px-4 py-8">
        <div className="flex justify-between items-center mb-6">
          <h1 className="text-2xl font-bold text-gray-900">記事編集</h1>
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
                onChange={(e) => setTitle(e.target.value)}
                className="w-full px-4 py-2.5 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[var(--color-primary)] focus:border-transparent outline-none"
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
                />
              </div>
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">抜粋</label>
              <textarea
                value={excerpt}
                onChange={(e) => setExcerpt(e.target.value)}
                rows={2}
                className="w-full px-4 py-2.5 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[var(--color-primary)] focus:border-transparent outline-none resize-vertical"
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
