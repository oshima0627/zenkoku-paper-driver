import Link from "next/link";
import { prisma } from "@/lib/db";

export const dynamic = "force-dynamic";

export default async function NewsPage() {
  let newsList: {
    id: string;
    title: string;
    slug: string;
    coverImage: string | null;
    publishedAt: Date;
    content: string;
  }[] = [];

  try {
    newsList = await prisma.news.findMany({
      where: { published: true },
      orderBy: { publishedAt: "desc" },
      select: { id: true, title: true, slug: true, coverImage: true, publishedAt: true, content: true },
    });
  } catch {
    // DB not connected
  }

  return (
    <>
      {/* Hero */}
      <section className="py-24 md:py-32 bg-white border-b border-[var(--color-border)]/30">
        <div className="max-w-5xl mx-auto px-6 text-center">
          <p className="text-xs font-semibold tracking-[0.3em] text-[var(--color-accent)] uppercase mb-4">News</p>
          <h1 className="text-4xl sm:text-5xl font-bold text-[var(--color-primary)] tracking-tight">新着情報</h1>
          <p className="mt-4 text-sm text-[var(--color-text-light)]">Co-Drive Lab からの最新のお知らせをお届けします</p>
        </div>
      </section>

      {/* List */}
      <section className="py-16 md:py-24 bg-[var(--color-bg-gray)]">
        <div className="max-w-3xl mx-auto px-6">
          {newsList.length === 0 ? (
            <div className="text-center py-24">
              <p className="text-[var(--color-text-light)] text-sm">お知らせはまだありません。</p>
            </div>
          ) : (
            <div className="space-y-4">
              {newsList.map((news) => {
                const d = news.publishedAt;
                const dateStr = `${d.getFullYear()}.${String(d.getMonth() + 1).padStart(2, "0")}.${String(d.getDate()).padStart(2, "0")}`;
                const excerpt = news.content
                  ? news.content.replace(/<[^>]*>/g, "").slice(0, 80)
                  : "";
                return (
                  <Link
                    key={news.id}
                    href={`/news/${news.slug}`}
                    className="group flex gap-5 bg-white rounded-2xl p-5 sm:p-6 shadow-sm hover:shadow-md transition-all duration-300 hover:-translate-y-0.5"
                  >
                    {/* Date column */}
                    <div className="shrink-0 text-center">
                      <p className="text-[10px] font-medium text-[var(--color-text-light)] tracking-wider">
                        {d.getFullYear()}
                      </p>
                      <p className="text-xl font-bold text-[var(--color-primary)] leading-tight">
                        {String(d.getMonth() + 1).padStart(2, "0")}/{String(d.getDate()).padStart(2, "0")}
                      </p>
                    </div>

                    {/* Divider */}
                    <div className="w-px bg-[var(--color-border)]/50 self-stretch shrink-0" />

                    {/* Content */}
                    <div className="flex-1 min-w-0">
                      <div className="flex items-center gap-2 mb-1.5">
                        <span className="text-[10px] font-bold tracking-wider text-[var(--color-accent)] bg-blue-50 px-2 py-0.5 rounded-full">
                          NEWS
                        </span>
                        <time className="text-[10px] text-[var(--color-text-light)]">{dateStr}</time>
                      </div>
                      <h2 className="text-sm font-bold text-[var(--color-primary)] group-hover:text-[var(--color-accent)] transition-colors duration-200 leading-snug line-clamp-2">
                        {news.title}
                      </h2>
                      {excerpt && (
                        <p className="text-xs text-[var(--color-text-light)] mt-1.5 leading-relaxed line-clamp-2">
                          {excerpt}
                        </p>
                      )}
                    </div>

                    {/* Arrow */}
                    <div className="shrink-0 self-center text-[var(--color-border)] group-hover:text-[var(--color-accent)] group-hover:translate-x-1 transition-all duration-300">
                      <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                      </svg>
                    </div>
                  </Link>
                );
              })}
            </div>
          )}
        </div>
      </section>
    </>
  );
}
