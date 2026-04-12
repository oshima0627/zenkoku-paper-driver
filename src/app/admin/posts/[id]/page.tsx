"use client";

import { useState, useEffect, use } from "react";
import { useRouter } from "next/navigation";
import dynamic from "next/dynamic";
const TiptapEditor = dynamic(() => import("@/components/admin/TiptapEditor"), {
  loading: () => <div className="text-center py-16 text-gray-400">エディター読み込み中...</div>,
  ssr: false,
});

export default function EditPostPage({ params }: { params: Promise<{ id: string }> }) {
  const { id } = use(params);
  const router = useRouter();
  const [saving, setSaving] = useState(false);
  const [loading, setLoading] = useState(true);
  const [title, setTitle] = useState("");
  const [slug, setSlug] = useState("");
  const [excerpt, setExcerpt] = useState("");
  const [content, setContent] = useState("");
  const [coverImage, setCoverImage] = useState("");
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
          setCoverImage(data.coverImage || "");
          setPublished(data.published);
        }
      } finally {
        setLoading(false);
      }
    }
    fetchPost();
  }, [id]);

  async function handleCoverUpload(e: React.ChangeEvent<HTMLInputElement>) {
    const file = e.target.files?.[0];
    if (!file) return;
    const formData = new FormData();
    formData.append("file", file);
    const res = await fetch("/api/upload", { method: "POST", body: formData });
    if (res.ok) {
      const data = await res.json();
      setCoverImage(data.url);
    }
    e.target.value = "";
  }

  async function handleSave(publish: boolean) {
    if (!title.trim()) return alert("タイトルは必須です");
    setSaving(true);
    try {
      const res = await fetch(`/api/posts/${id}`, {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ title, slug, excerpt, content, coverImage, published: publish }),
      });
      if (res.ok) router.push("/admin/posts");
      else {
        const data = await res.json();
        alert(data.error || "保存に失敗しました");
      }
    } finally {
      setSaving(false);
    }
  }

  if (loading) {
    return (
      <div>
        
        <div className="text-center py-16 text-gray-500">読み込み中...</div>
      </div>
    );
  }

  return (
    <div>
      
      <main className="max-w-4xl mx-auto p-8">
        <div className="flex justify-between items-center mb-6">
          <div>
            <h1 className="text-2xl font-bold text-gray-900">記事編集</h1>
            <span className={`text-xs mt-1 inline-block px-2 py-0.5 rounded-full ${published ? "bg-green-100 text-green-700" : "bg-gray-100 text-gray-500"}`}>
              {published ? "公開中" : "下書き"}
            </span>
          </div>
          <div className="flex gap-3">
            <button onClick={() => router.back()} className="px-4 py-2 text-sm text-gray-600 border rounded-lg hover:bg-gray-50">キャンセル</button>
            {published ? (
              <>
                <button onClick={() => handleSave(false)} disabled={saving} className="px-4 py-2 text-sm font-medium text-red-600 border border-red-200 rounded-lg hover:bg-red-50 disabled:opacity-50">
                  非公開にする
                </button>
                <button onClick={() => handleSave(true)} disabled={saving} className="px-5 py-2 text-sm font-medium text-white bg-[var(--color-primary)] rounded-lg hover:bg-[var(--color-primary-dark)] disabled:opacity-50">
                  {saving ? "保存中..." : "更新"}
                </button>
              </>
            ) : (
              <>
                <button onClick={() => handleSave(false)} disabled={saving} className="px-4 py-2 text-sm font-medium text-gray-700 border border-gray-300 rounded-lg hover:bg-gray-50 disabled:opacity-50">
                  {saving ? "保存中..." : "一時保存"}
                </button>
                <button onClick={() => handleSave(true)} disabled={saving} className="px-5 py-2 text-sm font-medium text-white bg-[var(--color-primary)] rounded-lg hover:bg-[var(--color-primary-dark)] disabled:opacity-50">
                  {saving ? "保存中..." : "公開"}
                </button>
              </>
            )}
          </div>
        </div>

        <div className="space-y-6">
          <div className="bg-white rounded-xl border p-6 space-y-4">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">タイトル <span className="text-red-500">*</span></label>
              <input type="text" value={title} onChange={(e) => setTitle(e.target.value)} className="w-full px-4 py-2.5 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[var(--color-primary)] focus:border-transparent outline-none" />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">URL</label>
              <p className="text-sm text-gray-400">/blog/{slug}</p>
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">抜粋</label>
              <textarea value={excerpt} onChange={(e) => setExcerpt(e.target.value)} rows={2} className="w-full px-4 py-2.5 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[var(--color-primary)] focus:border-transparent outline-none resize-vertical" />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">アイキャッチ画像</label>
              {coverImage ? (
                <div className="relative w-full rounded-lg overflow-hidden bg-gray-100">
                  <img src={coverImage} alt="カバー画像" className="w-full h-auto block" />
                  <button type="button" onClick={() => setCoverImage("")} className="absolute top-2 right-2 w-8 h-8 bg-black/50 text-white rounded-full flex items-center justify-center hover:bg-black/70">
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" /></svg>
                  </button>
                </div>
              ) : (
                <label className="flex flex-col items-center justify-center w-full h-32 border-2 border-dashed border-gray-300 rounded-lg cursor-pointer hover:border-[var(--color-primary)] hover:bg-gray-50 transition-colors">
                  <svg className="w-8 h-8 text-gray-400 mb-2" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" /></svg>
                  <span className="text-sm text-gray-500">クリックして画像を選択</span>
                  <input type="file" accept="image/*" onChange={handleCoverUpload} className="hidden" />
                </label>
              )}
            </div>
          </div>

          <div className="bg-white rounded-xl border p-6">
            <label className="block text-sm font-medium text-gray-700 mb-2">本文 <span className="text-xs text-gray-400">（画像はドラッグ＆ドロップ、またはボタンから挿入可能）</span></label>
            <TiptapEditor content={content} onChange={setContent} />
          </div>
        </div>
      </main>
    </div>
  );
}
