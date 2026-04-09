"use client";

import Link from "next/link";
import { useState } from "react";

const stats = [
  { label: "記事管理", href: "/admin/posts", description: "ブログ記事の作成・編集・削除", color: "from-blue-500 to-blue-600", icon: <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z" /></svg> },
  { label: "News管理", href: "/admin/news", description: "新着情報の追加・編集・削除", color: "from-emerald-500 to-emerald-600", icon: <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19 20H5a2 2 0 01-2-2V6a2 2 0 012-2h10a2 2 0 012 2v1m2 13a2 2 0 01-2-2V7m2 13a2 2 0 002-2V9a2 2 0 00-2-2h-2m-4-3H9M7 16h6M7 8h6v4H7V8z" /></svg> },
  { label: "お問い合わせ", href: "/admin/contacts", description: "お問い合わせの確認・対応", color: "from-orange-500 to-orange-600", icon: <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" /></svg> },
];

export default function DashboardPage() {
  const [ragStatus, setRagStatus] = useState<"idle" | "loading" | "done" | "error">("idle");
  const [ragResult, setRagResult] = useState<{ success: number; failed: number } | null>(null);

  async function handleEmbedAll() {
    setRagStatus("loading");
    setRagResult(null);
    try {
      const res = await fetch("/api/admin/embed-all", { method: "POST" });
      const data = await res.json();
      setRagResult({ success: data.success, failed: data.failed });
      setRagStatus(data.failed === 0 ? "done" : "error");
    } catch {
      setRagStatus("error");
    }
  }

  return (
    <div className="p-8">
      <div className="mb-8">
        <h1 className="text-2xl font-bold text-gray-900">ダッシュボード</h1>
        <p className="text-sm text-gray-500 mt-1">Co-Drive Lab 管理画面</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {stats.map((item) => (
          <Link key={item.label} href={item.href} className="group">
            <div className="bg-white rounded-2xl border border-gray-200 p-6 hover:shadow-lg transition-all duration-200 hover:-translate-y-0.5">
              <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${item.color} flex items-center justify-center text-white mb-4 group-hover:scale-110 transition-transform`}>
                {item.icon}
              </div>
              <h2 className="text-lg font-bold text-gray-900">{item.label}</h2>
              <p className="text-sm text-gray-500 mt-1">{item.description}</p>
            </div>
          </Link>
        ))}
      </div>

      {/* RAG Update */}
      <div className="mt-10">
        <h2 className="text-lg font-bold text-gray-900 mb-4">AIチャット設定</h2>
        <div className="bg-white rounded-2xl border border-gray-200 p-6">
          <div className="flex items-start gap-4">
            <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-violet-500 to-purple-600 flex items-center justify-center text-white shrink-0">
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
              </svg>
            </div>
            <div className="flex-1">
              <h3 className="text-base font-bold text-gray-900">RAG情報を更新</h3>
              <p className="text-sm text-gray-500 mt-1">
                サイトの静的コンテンツ（会社概要・料金・FAQ・サービス）とブログ記事・ニュースをAIチャットの知識データベースに反映します。
              </p>
              <div className="mt-4 flex items-center gap-4">
                <button
                  onClick={handleEmbedAll}
                  disabled={ragStatus === "loading"}
                  className="inline-flex items-center gap-2 px-5 py-2.5 text-sm font-medium text-white bg-violet-600 rounded-xl hover:bg-violet-700 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  {ragStatus === "loading" ? (
                    <>
                      <svg className="w-4 h-4 animate-spin" fill="none" viewBox="0 0 24 24">
                        <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                        <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z" />
                      </svg>
                      更新中...
                    </>
                  ) : (
                    <>
                      <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
                      </svg>
                      RAG情報を更新する
                    </>
                  )}
                </button>
                {ragStatus === "done" && ragResult && (
                  <p className="text-sm text-emerald-600 font-medium">
                    ✓ {ragResult.success}件を更新しました
                  </p>
                )}
                {ragStatus === "error" && ragResult && (
                  <p className="text-sm text-red-500 font-medium">
                    {ragResult.success}件成功 / {ragResult.failed}件失敗
                  </p>
                )}
                {ragStatus === "error" && !ragResult && (
                  <p className="text-sm text-red-500 font-medium">エラーが発生しました</p>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
