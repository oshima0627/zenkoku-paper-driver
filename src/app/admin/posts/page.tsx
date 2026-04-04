"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import AdminHeader from "@/components/admin/AdminHeader";

interface Post {
  id: string;
  title: string;
  slug: string;
  published: boolean;
  publishedAt: string | null;
  createdAt: string;
}

export default function PostsListPage() {
  const [posts, setPosts] = useState<Post[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchPosts();
  }, []);

  async function fetchPosts() {
    try {
      const res = await fetch("/api/posts");
      if (res.ok) {
        const data = await res.json();
        setPosts(data);
      }
    } finally {
      setLoading(false);
    }
  }

  async function handleDelete(id: string) {
    if (!confirm("この記事を削除しますか？")) return;
    const res = await fetch(`/api/posts/${id}`, { method: "DELETE" });
    if (res.ok) {
      setPosts(posts.filter((p) => p.id !== id));
    }
  }

  return (
    <div className="min-h-screen bg-gray-50">
      <AdminHeader />
      <main className="max-w-6xl mx-auto px-4 py-8">
        <div className="flex justify-between items-center mb-6">
          <h1 className="text-2xl font-bold text-gray-900">記事管理</h1>
          <Link
            href="/admin/posts/new"
            className="px-4 py-2 bg-[var(--color-primary)] text-white font-medium rounded-lg hover:bg-[var(--color-primary-dark)] transition-colors"
          >
            新規作成
          </Link>
        </div>

        {loading ? (
          <div className="text-center py-12 text-gray-500">読み込み中...</div>
        ) : posts.length === 0 ? (
          <div className="text-center py-12 bg-white rounded-xl border">
            <p className="text-gray-500 mb-4">記事がありません</p>
            <Link
              href="/admin/posts/new"
              className="text-[var(--color-primary)] font-medium hover:underline"
            >
              最初の記事を作成する
            </Link>
          </div>
        ) : (
          <div className="bg-white rounded-xl border overflow-hidden">
            <table className="w-full">
              <thead className="bg-gray-50 border-b">
                <tr>
                  <th className="px-6 py-3 text-left text-xs font-bold text-gray-500 uppercase">タイトル</th>
                  <th className="px-6 py-3 text-left text-xs font-bold text-gray-500 uppercase">ステータス</th>
                  <th className="px-6 py-3 text-left text-xs font-bold text-gray-500 uppercase">作成日</th>
                  <th className="px-6 py-3 text-right text-xs font-bold text-gray-500 uppercase">操作</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-200">
                {posts.map((post) => (
                  <tr key={post.id} className="hover:bg-gray-50">
                    <td className="px-6 py-4">
                      <Link
                        href={`/admin/posts/${post.id}`}
                        className="text-sm font-medium text-gray-900 hover:text-[var(--color-primary)]"
                      >
                        {post.title}
                      </Link>
                    </td>
                    <td className="px-6 py-4">
                      <span
                        className={`inline-flex px-2.5 py-0.5 rounded-full text-xs font-medium ${
                          post.published
                            ? "bg-green-100 text-green-800"
                            : "bg-gray-100 text-gray-600"
                        }`}
                      >
                        {post.published ? "公開中" : "下書き"}
                      </span>
                    </td>
                    <td className="px-6 py-4 text-sm text-gray-500">
                      {new Date(post.createdAt).toLocaleDateString("ja-JP")}
                    </td>
                    <td className="px-6 py-4 text-right">
                      <div className="flex justify-end gap-2">
                        <Link
                          href={`/admin/posts/${post.id}`}
                          className="text-sm text-[var(--color-primary)] hover:underline"
                        >
                          編集
                        </Link>
                        <button
                          onClick={() => handleDelete(post.id)}
                          className="text-sm text-red-500 hover:underline"
                        >
                          削除
                        </button>
                      </div>
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
