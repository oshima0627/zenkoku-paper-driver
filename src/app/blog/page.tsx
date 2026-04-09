import Link from "next/link";
import { prisma } from "@/lib/db";
import { getAllMdPosts } from "@/lib/markdown";

export const dynamic = "force-dynamic";

interface BlogPost {
  source: "db" | "md";
  id: string;
  title: string;
  slug: string;
  excerpt: string | null;
  coverImage: string | null;
  publishedAt: Date;
}

export default async function BlogPage() {
  let dbPosts: BlogPost[] = [];
  try {
    const posts = await prisma.post.findMany({
      where: { published: true },
      orderBy: { publishedAt: "desc" },
      select: { id: true, title: true, slug: true, excerpt: true, coverImage: true, publishedAt: true, createdAt: true },
    });
    dbPosts = posts.map((p) => ({
      source: "db" as const,
      id: p.id,
      title: p.title,
      slug: p.slug,
      excerpt: p.excerpt,
      coverImage: p.coverImage,
      publishedAt: p.publishedAt || p.createdAt,
    }));
  } catch {
    // DB not connected
  }

  const mdPosts: BlogPost[] = getAllMdPosts().map((p) => ({
    source: "md" as const,
    id: p.slug,
    title: p.title,
    slug: p.slug,
    excerpt: p.excerpt,
    coverImage: p.coverImage,
    publishedAt: p.publishedAt,
  }));

  const allPosts = [...dbPosts, ...mdPosts].sort(
    (a, b) => b.publishedAt.getTime() - a.publishedAt.getTime()
  );

  return (
    <>
      {/* Hero */}
      <section className="py-24 md:py-32 bg-white border-b border-[var(--color-border)]/30">
        <div className="max-w-5xl mx-auto px-6 text-center">
          <p className="text-xs font-semibold tracking-[0.3em] text-[var(--color-accent)] uppercase mb-4">Blog</p>
          <h1 className="text-4xl sm:text-5xl font-bold text-[var(--color-primary)] tracking-tight">ブログ</h1>
          <p className="mt-4 text-sm text-[var(--color-text-light)]">テクノロジー・安全運転・業務効率化に関するコラム</p>
        </div>
      </section>

      {/* Posts */}
      <section className="py-16 md:py-24 bg-[var(--color-bg-gray)]">
        <div className="max-w-5xl mx-auto px-6">
          {allPosts.length === 0 ? (
            <div className="text-center py-24">
              <p className="text-[var(--color-text-light)] text-sm">記事はまだありません。</p>
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {allPosts.map((post) => {
                const dateStr = post.publishedAt.toLocaleDateString("ja-JP", {
                  year: "numeric",
                  month: "2-digit",
                  day: "2-digit",
                }).replace(/\//g, ".");
                return (
                  <article
                    key={`${post.source}-${post.slug}`}
                    className="group bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-lg transition-all duration-300 hover:-translate-y-1 flex flex-col"
                  >
                    {/* Cover image */}
                    <Link href={`/blog/${post.slug}`} className="block overflow-hidden aspect-video bg-[var(--color-bg-gray)]">
                      {post.coverImage ? (
                        <img
                          src={post.coverImage}
                          alt={post.title}
                          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                        />
                      ) : (
                        <div className="w-full h-full flex items-center justify-center">
                          <svg className="w-10 h-10 text-[var(--color-border)]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M19 20H5a2 2 0 01-2-2V6a2 2 0 012-2h10a2 2 0 012 2v1m2 13a2 2 0 01-2-2V7m2 13a2 2 0 002-2V9a2 2 0 00-2-2h-2m-4-3H9M7 16h6M7 8h6v4H7V8z" />
                          </svg>
                        </div>
                      )}
                    </Link>

                    {/* Body */}
                    <div className="p-6 flex flex-col flex-1">
                      <time className="text-[11px] font-medium text-[var(--color-text-light)] tracking-wider mb-2">
                        {dateStr}
                      </time>
                      <Link href={`/blog/${post.slug}`}>
                        <h2 className="text-base font-bold text-[var(--color-primary)] group-hover:text-[var(--color-accent)] transition-colors duration-200 leading-snug line-clamp-2 mb-2">
                          {post.title}
                        </h2>
                      </Link>
                      {post.excerpt && (
                        <p className="text-xs text-[var(--color-text-light)] leading-relaxed line-clamp-3 flex-1">
                          {post.excerpt}
                        </p>
                      )}
                      <Link
                        href={`/blog/${post.slug}`}
                        className="inline-flex items-center gap-1.5 text-xs font-semibold text-[var(--color-accent)] mt-4 hover:gap-3 transition-all duration-300"
                      >
                        続きを読む
                        <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                        </svg>
                      </Link>
                    </div>
                  </article>
                );
              })}
            </div>
          )}
        </div>
      </section>
    </>
  );
}
