"use client";

import { usePathname } from "next/navigation";
import SessionProvider from "@/components/admin/SessionProvider";
import AdminSidebar from "@/components/admin/AdminSidebar";

export default function AdminLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const pathname = usePathname();
  const isLogin = pathname === "/admin/login";

  return (
    <SessionProvider>
      {isLogin ? (
        children
      ) : (
        <div className="flex min-h-screen bg-gray-100">
          <AdminSidebar />
          <div className="flex-1 overflow-auto">{children}</div>
        </div>
      )}
    </SessionProvider>
  );
}
