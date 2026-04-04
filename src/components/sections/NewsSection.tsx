import Link from "next/link";
import { prisma } from "@/lib/db";

interface NewsItem {
  id: string;
  title: string;
  url: string | null;
  publishedAt: Date;
}

export default async function NewsSection() {
  let news: NewsItem[] = [];

  try {
    news = await prisma.news.findMany({
      orderBy: { publishedAt: "desc" },
      take: 5,
    });
  } catch {
    // DB not connected - show empty
  }

  // No news yet - don't render section
  if (news.length === 0) return null;

  return (
    <section className="py-16 bg-white">
      <div className="max-w-3xl mx-auto px-4">
        <h2 className="text-2xl font-bold text-gray-900">News</h2>
        <p className="text-sm font-bold text-[var(--color-accent)] mt-1 mb-8">新着情報</p>

        <div className="divide-y divide-gray-200">
          {news.map((item) => (
            <div key={item.id} className="py-5">
              {item.url ? (
                <Link href={item.url} className="text-[var(--color-primary)] hover:underline font-medium">
                  {item.title}
                </Link>
              ) : (
                <span className="font-medium text-gray-900">{item.title}</span>
              )}
              <p className="text-xs text-gray-500 mt-1">
                {item.publishedAt.toLocaleDateString("ja-JP", { year: "numeric", month: "long", day: "numeric" })}
              </p>
            </div>
          ))}
        </div>

        <div className="text-center mt-8">
          <Link
            href="/blog"
            className="inline-flex items-center gap-2 px-8 py-3 border border-gray-300 rounded-md text-sm font-medium text-gray-700 hover:bg-gray-50 transition-colors"
          >
            <span className="text-gray-400">{">"}</span>
            VIEW ALL
          </Link>
        </div>
      </div>
    </section>
  );
}
