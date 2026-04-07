import type { Metadata } from "next";
import "./globals.css";
import SiteShell from "@/components/layout/SiteShell";

export const metadata: Metadata = {
  title: "企業向け安全運転講習専門スクール｜Co-Drive Lab",
  description:
    "Co-Drive Labは、企業向け安全運転講習を専門とするプロフェッショナル集団です。交通社会の専門家が全国どこでも出張対応いたします。",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ja" className="h-full antialiased">
      <body className="min-h-full flex flex-col">
        <SiteShell>{children}</SiteShell>
      </body>
    </html>
  );
}
