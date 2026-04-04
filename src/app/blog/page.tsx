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
  // 1. DB記事を取得
  let dbPosts: BlogPost[] = [];
  try {
    const posts = await prisma.post.findMany({
      where: { published: true },
      orderBy: { publishedAt: "desc" },
      select: {
        id: true,
        title: true,
        slug: true,
        excerpt: true,
        coverImage: true,
        publishedAt: true,
        createdAt: true,
      },
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

  // 2. Markdown記事を取得
  const mdPosts: BlogPost[] = getAllMdPosts().map((p) => ({
    source: "md" as const,
    id: p.slug,
    title: p.title,
    slug: p.slug,
    excerpt: p.excerpt,
    coverImage: p.coverImage,
    publishedAt: p.publishedAt,
  }));

  // 3. 統合して日付順にソート
  const allPosts = [...dbPosts, ...mdPosts].sort(
    (a, b) => b.publishedAt.getTime() - a.publishedAt.getTime()
  );

  return (
    <>
      <section className="bg-[var(--color-primary)] text-white py-16">
        <div className="max-w-6xl mx-auto px-4 text-center">
          <h1 className="text-3xl md:text-4xl font-bold">ブログ</h1>
          <p className="text-sm text-[var(--color-accent)] mt-2">-Blog-</p>
        </div>
      </section>

      <section className="py-16 md:py-24">
        <div className="max-w-4xl mx-auto px-4">
          {allPosts.length === 0 ? (
            <div className="text-center py-16">
              <p className="text-gray-500">記事はまだありません。</p>
            </div>
          ) : (
            <div className="space-y-6">
              {allPosts.map((post) => (
                <article
                  key={`${post.source}-${post.slug}`}
                  className="bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-lg transition-all duration-300 border border-gray-100 group"
                >
                  {post.coverImage ? (
                    <Link href={`/blog/${post.slug}`} className="block overflow-hidden">
                      <img src={post.coverImage} alt={post.title} className="w-full aspect-video object-cover group-hover:scale-105 transition-transform duration-300" />
                    </Link>
                  ) : (
                    <Link href={`/blog/${post.slug}`} className="block">
                      <div className="w-full aspect-video bg-gradient-to-br from-[var(--color-site-light)] to-[var(--color-site)] flex items-center justify-center">
                        <svg className="w-16 h-16 text-white/40" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M19 20H5a2 2 0 01-2-2V6a2 2 0 012-2h10a2 2 0 012 2v1m2 13a2 2 0 01-2-2V7m2 13a2 2 0 002-2V9a2 2 0 00-2-2h-2m-4-3H9M7 16h6M7 8h6v4H7V8z" />
                        </svg>
                      </div>
                    </Link>
                  )}
                  <div className="p-6">
                    <div className="flex items-center gap-2 mb-1">
                      <time className="text-xs text-gray-400">
                        {post.publishedAt.toLocaleDateString("ja-JP")}
                      </time>
                      {post.source === "md" && (
                        <span className="text-[10px] bg-gray-100 text-gray-500 px-1.5 py-0.5 rounded">MD</span>
                      )}
                    </div>
                    <Link href={`/blog/${post.slug}`}>
                      <h2 className="text-xl font-bold text-gray-900 hover:text-[var(--color-primary)] transition-colors mb-2">
                        {post.title}
                      </h2>
                    </Link>
                    {post.excerpt && (
                      <p className="text-sm text-gray-600 leading-relaxed">{post.excerpt}</p>
                    )}
                    <Link
                      href={`/blog/${post.slug}`}
                      className="inline-flex items-center gap-1 text-sm text-[var(--color-primary)] font-medium mt-4 hover:underline"
                    >
                      続きを読む
                      <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                      </svg>
                    </Link>
                  </div>
                </article>
              ))}
            </div>
          )}
        </div>
      </section>
    </>
  );
}
