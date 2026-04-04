import type { Metadata } from "next";
import "./globals.css";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import ChatBot from "@/components/chatbot/ChatBot";

export const metadata: Metadata = {
  title: "企業向け安全運転講習専門スクール｜全国ペーパードライバー協会",
  description:
    "全国ペーパードライバー協会は、企業向け安全運転講習を専門とするプロフェッショナル集団です。交通社会の専門家が全国どこでも出張対応いたします。",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ja" className="h-full antialiased">
      <body className="min-h-full flex flex-col">
        <Header />
        <main className="flex-1">{children}</main>
        <Footer />
        <ChatBot />
      </body>
    </html>
  );
}
