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
    <section className="py-20 md:py-28 bg-[var(--color-bg-gray)]">
      <div className="max-w-4xl mx-auto px-4">
        <div className="flex items-end justify-between mb-10">
          <div>
            <p className="text-sm font-medium text-[var(--color-text-light)] tracking-widest uppercase mb-1">News</p>
            <h2 className="text-2xl sm:text-3xl font-bold text-[var(--color-primary)]">新着情報</h2>
          </div>
          <Link href="/blog" className="hidden md:flex items-center gap-1 text-sm font-medium text-[var(--color-accent)] hover:underline">
            すべて見る
          </Link>
        </div>

        <div className="bg-white rounded-2xl overflow-hidden divide-y divide-[var(--color-border)]/50">
          {news.map((item) => (
            <Link
              key={item.id}
              href={`/news/${item.slug}`}
              className="flex items-center gap-4 px-6 py-5 hover:bg-[var(--color-bg-gray)] transition-colors group"
            >
              <span className="shrink-0 text-xs font-mono text-[var(--color-text-light)] w-24">
                {item.publishedAt.toLocaleDateString("ja-JP", { year: "numeric", month: "2-digit", day: "2-digit" })}
              </span>
              <span className="flex-1 min-w-0 text-sm font-medium text-[var(--color-primary)] group-hover:text-[var(--color-accent)] transition-colors line-clamp-1">
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
