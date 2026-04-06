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
      <section className="py-28 md:py-36 bg-white">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <p className="text-xs font-medium tracking-[0.25em] text-[var(--color-accent)] uppercase mb-4">Blog</p>
          <h1 className="text-3xl sm:text-5xl font-bold text-[var(--color-primary)] tracking-tight">ブログ</h1>
        </div>
      </section>

      <section className="py-16 md:py-24 bg-[var(--color-bg-gray)]">
        <div className="max-w-4xl mx-auto px-6">
          {allPosts.length === 0 ? (
            <div className="text-center py-16">
              <p className="text-[var(--color-text-light)]">記事はまだありません。</p>
            </div>
          ) : (
            <div className="space-y-6">
              {allPosts.map((post) => (
                <article key={`${post.source}-${post.slug}`} className="bg-white rounded-3xl overflow-hidden shadow-sm hover:shadow-lg transition-all duration-500 group">
                  {post.coverImage && (
                    <Link href={`/blog/${post.slug}`} className="block overflow-hidden">
                      <img src={post.coverImage} alt={post.title} className="w-full aspect-video object-cover group-hover:scale-105 transition-transform duration-500" />
                    </Link>
                  )}
                  <div className="p-6 md:p-8">
                    <time className="text-xs text-[var(--color-text-light)] tracking-wider">
                      {post.publishedAt.toLocaleDateString("ja-JP")}
                    </time>
                    <Link href={`/blog/${post.slug}`}>
                      <h2 className="text-lg font-bold text-[var(--color-primary)] hover:text-[var(--color-accent)] transition-colors duration-200 mt-2 mb-3">
                        {post.title}
                      </h2>
                    </Link>
                    {post.excerpt && (
                      <p className="text-sm text-[var(--color-text-light)] leading-relaxed">{post.excerpt}</p>
                    )}
                    <Link href={`/blog/${post.slug}`} className="inline-flex items-center gap-1.5 text-sm font-medium text-[var(--color-accent)] mt-4 hover:gap-3 transition-all duration-300">
                      続きを読む
                      <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
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
