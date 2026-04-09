import Link from "next/link";
import { notFound } from "next/navigation";
import { prisma } from "@/lib/db";

export const dynamic = "force-dynamic";

export default async function NewsDetailPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;

  let news;
  try {
    news = await prisma.news.findUnique({ where: { slug } });
  } catch {
    notFound();
  }

  if (!news) notFound();

  const date = news.publishedAt;
  const dateStr = date.toLocaleDateString("ja-JP", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });

  return (
    <div className="min-h-screen bg-white">
      {/* Breadcrumb */}
      <div className="border-b border-[var(--color-border)]/30 bg-white">
        <div className="max-w-3xl mx-auto px-6 py-3">
          <nav className="flex items-center gap-2 text-xs text-[var(--color-text-light)]">
            <Link href="/" className="hover:text-[var(--color-primary)] transition-colors">ホーム</Link>
            <span>/</span>
            <Link href="/news" className="hover:text-[var(--color-primary)] transition-colors">新着情報</Link>
            <span>/</span>
            <span className="text-[var(--color-primary)] truncate max-w-[200px]">{news.title}</span>
          </nav>
        </div>
      </div>

      {/* Header */}
      <div className="border-b border-[var(--color-border)]/30 bg-white">
        <div className="max-w-3xl mx-auto px-6 py-10 md:py-16">
          <div className="flex items-center gap-3 mb-5">
            <span className="text-[10px] font-bold tracking-widest text-[var(--color-accent)] bg-blue-50 px-3 py-1 rounded-full uppercase">News</span>
            <time className="text-xs text-[var(--color-text-light)]">{dateStr}</time>
          </div>
          <h1 className="text-2xl md:text-4xl font-bold text-[var(--color-primary)] leading-tight tracking-tight">
            {news.title}
          </h1>
        </div>
      </div>

      {/* Article */}
      <div className="py-12 md:py-16">
        <article className="max-w-3xl mx-auto px-6">
          {news.coverImage && (
            <div className="mb-10 overflow-hidden rounded-2xl shadow-md">
              <img src={news.coverImage} alt={news.title} className="w-full object-cover" />
            </div>
          )}
          {news.content ? (
            <div
              className="prose prose-gray max-w-none
                prose-headings:text-[var(--color-primary)] prose-headings:font-bold prose-headings:tracking-tight
                prose-h2:text-xl prose-h2:mt-10 prose-h2:mb-4 prose-h2:pb-3 prose-h2:border-b prose-h2:border-[var(--color-border)]/50
                prose-h3:text-lg prose-h3:mt-8 prose-h3:mb-3
                prose-p:text-[var(--color-text)] prose-p:leading-[1.9] prose-p:text-sm
                prose-a:text-[var(--color-accent)] prose-a:no-underline hover:prose-a:underline
                prose-strong:text-[var(--color-primary)] prose-strong:font-semibold
                prose-ul:text-sm prose-ol:text-sm prose-li:leading-relaxed
                prose-img:rounded-2xl prose-img:shadow-md prose-img:max-w-full
                prose-blockquote:border-l-[var(--color-accent)] prose-blockquote:text-[var(--color-text-light)] prose-blockquote:bg-blue-50/50 prose-blockquote:rounded-r-xl prose-blockquote:py-1
                prose-code:text-[var(--color-accent)] prose-code:bg-blue-50 prose-code:px-1.5 prose-code:py-0.5 prose-code:rounded prose-code:text-xs"
              dangerouslySetInnerHTML={{ __html: news.content }}
            />
          ) : (
            <p className="text-sm text-[var(--color-text-light)]">本文はありません。</p>
          )}
        </article>
      </div>

      {/* Back button */}
      <div className="border-t border-[var(--color-border)]/30 py-10">
        <div className="max-w-3xl mx-auto px-6">
          <Link
            href="/news"
            className="inline-flex items-center gap-2 text-sm font-medium text-[var(--color-text-light)] hover:text-[var(--color-primary)] transition-colors duration-200 group"
          >
            <svg className="w-4 h-4 group-hover:-translate-x-0.5 transition-transform duration-200" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
            新着情報一覧へ戻る
          </Link>
        </div>
      </div>
    </div>
  );
}
