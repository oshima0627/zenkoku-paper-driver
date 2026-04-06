import Link from "next/link";
import { prisma } from "@/lib/db";

export const dynamic = "force-dynamic";

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
    // DB not connected
  }

  if (news.length === 0) return null;

  return (
    <section className="py-28 md:py-36 bg-[var(--color-bg-gray)]">
      <div className="max-w-4xl mx-auto px-6">
        <div className="flex items-end justify-between mb-12">
          <div>
            <p className="text-xs font-medium tracking-[0.25em] text-[var(--color-accent)] uppercase mb-3">News</p>
            <h2 className="text-3xl sm:text-4xl font-bold text-[var(--color-primary)] tracking-tight">新着情報</h2>
          </div>
          <Link href="/blog" className="hidden md:flex items-center gap-1.5 text-sm font-medium text-[var(--color-accent)] hover:gap-3 transition-all duration-300">
            すべて見る
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </Link>
        </div>

        <div className="bg-white rounded-3xl overflow-hidden shadow-sm divide-y divide-[var(--color-border)]/30">
          {news.map((item) => (
            <Link
              key={item.id}
              href={`/news/${item.slug}`}
              className="flex items-center gap-4 px-6 py-5 hover:bg-[var(--color-bg-gray)]/50 transition-colors duration-200 group"
            >
              <span className="shrink-0 text-xs font-mono text-[var(--color-text-light)] w-24 tracking-wider">
                {item.publishedAt.toLocaleDateString("ja-JP", { year: "numeric", month: "2-digit", day: "2-digit" })}
              </span>
              <span className="flex-1 min-w-0 text-sm font-medium text-[var(--color-primary)] group-hover:text-[var(--color-accent)] transition-colors duration-200 line-clamp-1">
                {item.title}
              </span>
            </Link>
          ))}
        </div>

        <div className="mt-6 text-center md:hidden">
          <Link href="/blog" className="text-sm font-medium text-[var(--color-accent)] hover:underline">
            すべて見る
          </Link>
        </div>
      </div>
    </section>
  );
}
