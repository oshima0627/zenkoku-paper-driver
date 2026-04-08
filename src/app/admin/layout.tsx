"use client";

import { useState } from "react";
import { usePathname } from "next/navigation";
import Image from "next/image";
import SessionProvider from "@/components/admin/SessionProvider";
import AdminSidebar from "@/components/admin/AdminSidebar";

export default function AdminLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const pathname = usePathname();
  const isLogin = pathname === "/admin/login";
  const [sidebarOpen, setSidebarOpen] = useState(false);

  return (
    <SessionProvider>
      {isLogin ? (
        children
      ) : (
        <div className="flex min-h-screen bg-gray-100">
          <AdminSidebar isOpen={sidebarOpen} onClose={() => setSidebarOpen(false)} />

          <div className="flex-1 flex flex-col overflow-auto">
            {/* Mobile top bar */}
            <div className="lg:hidden flex items-center gap-3 px-4 py-3 bg-white border-b border-gray-200 shrink-0">
              <button
                onClick={() => setSidebarOpen(true)}
                className="p-1.5 rounded-lg hover:bg-gray-100 transition-colors text-gray-700"
                aria-label="メニューを開く"
              >
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                </svg>
              </button>
              <div className="flex items-center gap-2">
                <Image src="/IMG_3727.png" alt="ロゴ" width={128} height={128} className="h-7 w-7 object-contain" />
                <p className="text-sm font-bold text-gray-900">管理画面</p>
              </div>
            </div>

            <div className="flex-1">{children}</div>
          </div>
        </div>
      )}
    </SessionProvider>
  );
}
