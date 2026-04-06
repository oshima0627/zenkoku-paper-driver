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
      <section className="py-20 md:py-28 bg-white">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <p className="text-sm font-medium text-[var(--color-text-light)] tracking-widest uppercase mb-4">Blog</p>
          <h1 className="text-3xl sm:text-5xl font-bold text-[var(--color-primary)] tracking-tight">ブログ</h1>
        </div>
      </section>

      <section className="py-16 md:py-24 bg-[var(--color-bg-gray)]">
        <div className="max-w-4xl mx-auto px-4">
          {allPosts.length === 0 ? (
            <div className="text-center py-16">
              <p className="text-[var(--color-text-light)]">記事はまだありません。</p>
            </div>
          ) : (
            <div className="space-y-6">
              {allPosts.map((post) => (
                <article key={`${post.source}-${post.slug}`} className="bg-white rounded-2xl overflow-hidden group">
                  {post.coverImage && (
                    <Link href={`/blog/${post.slug}`} className="block overflow-hidden">
                      <img src={post.coverImage} alt={post.title} className="w-full aspect-video object-cover group-hover:scale-105 transition-transform duration-300" />
                    </Link>
                  )}
                  <div className="p-6">
                    <time className="text-xs text-[var(--color-text-light)]">
                      {post.publishedAt.toLocaleDateString("ja-JP")}
                    </time>
                    <Link href={`/blog/${post.slug}`}>
                      <h2 className="text-lg font-bold text-[var(--color-primary)] hover:text-[var(--color-accent)] transition-colors mt-1 mb-2">
                        {post.title}
                      </h2>
                    </Link>
                    {post.excerpt && (
                      <p className="text-sm text-[var(--color-text-light)] leading-relaxed">{post.excerpt}</p>
                    )}
                    <Link href={`/blog/${post.slug}`} className="inline-flex items-center gap-1 text-sm font-medium text-[var(--color-accent)] mt-4 hover:underline">
                      続きを読む
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
