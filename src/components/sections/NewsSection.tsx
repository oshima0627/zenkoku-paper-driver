import Link from "next/link";
import { prisma } from "@/lib/db";

interface NewsItem {
  id: string;
  title: string;
  slug: string;
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
    <section className="py-16 md:py-24 bg-white border-t border-gray-100">
      <div className="max-w-4xl mx-auto px-4">
        {/* Header */}
        <div className="flex items-end justify-between mb-10">
          <div>
            <p className="text-xs font-bold tracking-widest text-[var(--color-accent)] uppercase mb-1">News</p>
            <h2 className="text-2xl md:text-3xl font-bold text-gray-900">新着情報</h2>
            <div className="mt-2 w-12 h-1 bg-[var(--color-accent)] rounded-full" />
          </div>
          <Link
            href="/blog"
            className="hidden md:flex items-center gap-1 text-sm font-medium text-[var(--color-primary)] hover:text-[var(--color-primary-dark)] transition-colors"
          >
            すべて見る
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </Link>
        </div>

        {/* News list */}
        <div className="bg-white rounded-2xl shadow-sm overflow-hidden divide-y divide-gray-100">
          {news.map((item) => (
            <Link
              key={item.id}
              href={`/news/${item.slug}`}
              className="flex items-center gap-4 px-6 py-5 hover:bg-[var(--color-site-pale)] transition-colors group"
            >
              <span className="shrink-0 text-xs font-mono text-gray-400 w-24">
                {item.publishedAt.toLocaleDateString("ja-JP", { year: "numeric", month: "2-digit", day: "2-digit" })}
              </span>
              <span className="flex-1 text-sm md:text-base font-medium text-gray-800 group-hover:text-[var(--color-primary)] transition-colors line-clamp-1">
                {item.title}
              </span>
              <svg className="w-4 h-4 text-gray-300 group-hover:text-[var(--color-primary)] transition-colors shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </Link>
          ))}
        </div>

        {/* Mobile: view all button */}
        <div className="mt-6 text-center md:hidden">
          <Link
            href="/blog"
            className="inline-flex items-center gap-2 px-6 py-3 text-sm font-bold text-[var(--color-primary)] border-2 border-[var(--color-primary)] rounded-full hover:bg-[var(--color-primary)] hover:text-white transition-colors"
          >
            すべて見る
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </Link>
        </div>
      </div>
    </section>
  );
}
