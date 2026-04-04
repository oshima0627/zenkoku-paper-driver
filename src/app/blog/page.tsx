import Link from "next/link";
import { prisma } from "@/lib/db";

export const dynamic = "force-dynamic";

export default async function BlogPage() {
  let posts: Array<{
    id: string;
    title: string;
    slug: string;
    excerpt: string | null;
    coverImage: string | null;
    publishedAt: Date | null;
    createdAt: Date;
  }> = [];

  try {
    posts = await prisma.post.findMany({
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
  } catch {
    // DB not connected yet - show empty state
  }

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
          {posts.length === 0 ? (
            <div className="text-center py-16">
              <p className="text-gray-500">記事はまだありません。</p>
            </div>
          ) : (
            <div className="space-y-6">
              {posts.map((post) => (
                <article
                  key={post.id}
                  className="bg-white border rounded-xl overflow-hidden hover:shadow-md transition-shadow"
                >
                  {post.coverImage && (
                    <Link href={`/blog/${post.slug}`}>
                      <img src={post.coverImage} alt={post.title} className="w-full h-48 object-cover" />
                    </Link>
                  )}
                  <div className="p-6">
                    <time className="text-xs text-gray-400">
                      {(post.publishedAt || post.createdAt).toLocaleDateString("ja-JP")}
                    </time>
                    <Link href={`/blog/${post.slug}`}>
                      <h2 className="text-xl font-bold text-gray-900 hover:text-[var(--color-primary)] transition-colors mt-1 mb-2">
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
