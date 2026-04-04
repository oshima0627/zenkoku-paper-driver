"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import AdminHeader from "@/components/admin/AdminHeader";
import TiptapEditor from "@/components/admin/TiptapEditor";

export default function NewNewsPage() {
  const router = useRouter();
  const [saving, setSaving] = useState(false);
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [coverImage, setCoverImage] = useState("");
  const [publishedAt, setPublishedAt] = useState(new Date().toISOString().split("T")[0]);

  async function handleCoverUpload(e: React.ChangeEvent<HTMLInputElement>) {
    const file = e.target.files?.[0];
    if (!file) return;
    const formData = new FormData();
    formData.append("file", file);
    const res = await fetch("/api/upload", { method: "POST", body: formData });
    if (res.ok) setCoverImage((await res.json()).url);
    e.target.value = "";
  }

  async function handleSave(publish: boolean) {
    if (!title.trim()) return alert("タイトルは必須です");
    setSaving(true);
    try {
      const res = await fetch("/api/news", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ title, content, coverImage, publishedAt, published: publish }),
      });
      if (res.ok) router.push("/admin/news");
      else alert("保存に失敗しました");
    } finally {
      setSaving(false);
    }
  }

  return (
    <div className="min-h-screen bg-gray-50">
      <AdminHeader />
      <main className="max-w-4xl mx-auto px-4 py-8">
        <div className="flex justify-between items-center mb-6">
          <h1 className="text-2xl font-bold text-gray-900">新規ニュース作成</h1>
          <div className="flex gap-3">
            <button onClick={() => router.back()} className="px-4 py-2 text-sm text-gray-600 border rounded-lg hover:bg-gray-50">キャンセル</button>
            <button onClick={() => handleSave(false)} disabled={saving} className="px-4 py-2 text-sm font-medium text-gray-700 border border-gray-300 rounded-lg hover:bg-gray-50 disabled:opacity-50">
              {saving ? "保存中..." : "一時保存"}
            </button>
            <button onClick={() => handleSave(true)} disabled={saving} className="px-5 py-2 text-sm font-medium text-white bg-[var(--color-primary)] rounded-lg hover:bg-[var(--color-primary-dark)] disabled:opacity-50">
              {saving ? "保存中..." : "公開"}
            </button>
          </div>
        </div>

        <div className="space-y-6">
          <div className="bg-white rounded-xl border p-6 space-y-4">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">タイトル <span className="text-red-500">*</span></label>
              <input type="text" value={title} onChange={(e) => setTitle(e.target.value)} className="w-full px-4 py-2.5 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[var(--color-primary)] focus:border-transparent outline-none" placeholder="ニュースのタイトル" />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">日付</label>
              <input type="date" value={publishedAt} onChange={(e) => setPublishedAt(e.target.value)} className="px-4 py-2.5 border border-gray-300 rounded-lg text-sm" />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">カバー画像</label>
              {coverImage ? (
                <div className="relative">
                  <img src={coverImage} alt="カバー" className="w-full max-h-64 object-contain bg-gray-100 rounded-lg" />
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
            <label className="block text-sm font-medium text-gray-700 mb-2">本文</label>
            <TiptapEditor content={content} onChange={setContent} />
          </div>
        </div>
      </main>
    </div>
  );
}
