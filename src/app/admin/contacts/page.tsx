"use client";

import { useEffect, useState } from "react";
import AdminHeader from "@/components/admin/AdminHeader";

interface Contact {
  id: string;
  name: string;
  email: string;
  phone: string | null;
  company: string | null;
  message: string;
  status: string;
  createdAt: string;
}

export default function ContactsPage() {
  const [contacts, setContacts] = useState<Contact[]>([]);
  const [loading, setLoading] = useState(true);
  const [selected, setSelected] = useState<Contact | null>(null);

  useEffect(() => {
    fetchContacts();
  }, []);

  async function fetchContacts() {
    try {
      const res = await fetch("/api/contacts");
      if (res.ok) {
        const data = await res.json();
        setContacts(data);
      }
    } finally {
      setLoading(false);
    }
  }

  return (
    <div className="min-h-screen bg-gray-50">
      <AdminHeader />
      <main className="max-w-6xl mx-auto px-4 py-8">
        <h1 className="text-2xl font-bold text-gray-900 mb-6">お問い合わせ管理</h1>

        {loading ? (
          <div className="text-center py-12 text-gray-500">読み込み中...</div>
        ) : contacts.length === 0 ? (
          <div className="text-center py-12 bg-white rounded-xl border">
            <p className="text-gray-500">お問い合わせはまだありません</p>
          </div>
        ) : (
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            {/* List */}
            <div className="lg:col-span-1 space-y-2">
              {contacts.map((c) => (
                <button
                  key={c.id}
                  onClick={() => setSelected(c)}
                  className={`w-full text-left p-4 rounded-xl border transition-all ${
                    selected?.id === c.id ? "bg-[var(--color-primary)] text-white border-[var(--color-primary)]" : "bg-white hover:shadow-md"
                  }`}
                >
                  <div className="flex justify-between items-start">
                    <p className={`text-sm font-bold ${selected?.id === c.id ? "text-white" : "text-gray-900"}`}>
                      {c.name}
                    </p>
                    <span className={`text-[10px] px-2 py-0.5 rounded-full ${
                      c.status === "unread"
                        ? selected?.id === c.id ? "bg-white/20 text-white" : "bg-red-100 text-red-600"
                        : selected?.id === c.id ? "bg-white/20 text-white" : "bg-gray-100 text-gray-500"
                    }`}>
                      {c.status === "unread" ? "未読" : "対応済"}
                    </span>
                  </div>
                  {c.company && (
                    <p className={`text-xs mt-0.5 ${selected?.id === c.id ? "text-white/70" : "text-gray-400"}`}>{c.company}</p>
                  )}
                  <p className={`text-xs mt-1 ${selected?.id === c.id ? "text-white/60" : "text-gray-400"}`}>
                    {new Date(c.createdAt).toLocaleDateString("ja-JP")}
                  </p>
                </button>
              ))}
            </div>

            {/* Detail */}
            <div className="lg:col-span-2">
              {selected ? (
                <div className="bg-white rounded-xl border p-6">
                  <div className="flex justify-between items-start mb-6">
                    <div>
                      <h2 className="text-lg font-bold text-gray-900">{selected.name}</h2>
                      {selected.company && <p className="text-sm text-gray-500">{selected.company}</p>}
                    </div>
                    <span className="text-xs text-gray-400">
                      {new Date(selected.createdAt).toLocaleString("ja-JP")}
                    </span>
                  </div>
                  <div className="space-y-3 mb-6">
                    <div className="flex gap-2 text-sm">
                      <span className="text-gray-400 w-20 shrink-0">メール</span>
                      <a href={`mailto:${selected.email}`} className="text-[var(--color-primary)] hover:underline">{selected.email}</a>
                    </div>
                    {selected.phone && (
                      <div className="flex gap-2 text-sm">
                        <span className="text-gray-400 w-20 shrink-0">電話</span>
                        <a href={`tel:${selected.phone}`} className="text-[var(--color-primary)] hover:underline">{selected.phone}</a>
                      </div>
                    )}
                  </div>
                  <div className="border-t pt-4">
                    <p className="text-sm text-gray-400 mb-2">メッセージ</p>
                    <p className="text-sm text-gray-700 whitespace-pre-wrap leading-relaxed">{selected.message}</p>
                  </div>
                </div>
              ) : (
                <div className="bg-white rounded-xl border p-12 text-center text-gray-400">
                  左のリストからお問い合わせを選択してください
                </div>
              )}
            </div>
          </div>
        )}
      </main>
    </div>
  );
}
