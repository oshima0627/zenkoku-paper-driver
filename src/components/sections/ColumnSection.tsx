import Link from "next/link";
import { prisma } from "@/lib/db";
import { getAllMdPosts } from "@/lib/markdown";

interface ColumnPost {
  slug: string;
  title: string;
  coverImage: string | null;
  publishedAt: Date;
}

export default async function ColumnSection() {
  // DB記事を取得
  let dbPosts: ColumnPost[] = [];
  try {
    const posts = await prisma.post.findMany({
      where: { published: true },
      orderBy: { publishedAt: "desc" },
      take: 5,
      select: { slug: true, title: true, coverImage: true, publishedAt: true, createdAt: true },
    });
    dbPosts = posts.map((p) => ({
      slug: p.slug,
      title: p.title,
      coverImage: p.coverImage,
      publishedAt: p.publishedAt || p.createdAt,
    }));
  } catch {
    // DB not connected
  }

  // MD記事を取得
  const mdPosts: ColumnPost[] = getAllMdPosts().map((p) => ({
    slug: p.slug,
    title: p.title,
    coverImage: p.coverImage,
    publishedAt: p.publishedAt,
  }));

  // 統合して最新3件
  const columns = [...dbPosts, ...mdPosts]
    .sort((a, b) => b.publishedAt.getTime() - a.publishedAt.getTime())
    .slice(0, 3);

  if (columns.length === 0) return null;

  return (
    <section className="py-16 md:py-24 bg-white border-t border-gray-100">
      <div className="max-w-5xl mx-auto px-4">
        <div className="text-center mb-12">
          <div className="flex justify-center mb-4">
            <svg className="w-14 h-14 text-[var(--color-primary-light)]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19 20H5a2 2 0 01-2-2V6a2 2 0 012-2h10a2 2 0 012 2v1m2 13a2 2 0 01-2-2V7m2 13a2 2 0 002-2V9a2 2 0 00-2-2h-2m-4-3H9M7 16h6M7 8h6v4H7V8z" />
            </svg>
          </div>
          <h2 className="text-2xl md:text-3xl font-bold text-gray-900">運転コラム</h2>
          <p className="text-sm text-[var(--color-accent)] mt-1">-Column-</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {columns.map((col) => (
            <Link key={col.slug} href={`/blog/${col.slug}`} className="block group">
              <div className="relative h-48 bg-gradient-to-br from-gray-500 to-gray-700 rounded-lg overflow-hidden">
                {col.coverImage && (
                  <img src={col.coverImage} alt={col.title} className="absolute inset-0 w-full h-full object-cover" />
                )}
                <div className="absolute inset-0 bg-black/40 group-hover:bg-black/50 transition-colors" />
                <div className="absolute bottom-0 left-0 right-0 p-4">
                  <h3 className="text-sm font-bold text-white leading-relaxed">{col.title}</h3>
                  <p className="text-xs text-gray-300 mt-2 flex items-center gap-1">
                    <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                    {col.publishedAt.toLocaleDateString("ja-JP", { year: "numeric", month: "long", day: "numeric" })}
                  </p>
                </div>
              </div>
            </Link>
          ))}
        </div>

        <div className="text-center mt-8">
          <Link
            href="/blog"
            className="inline-flex items-center gap-2 px-8 py-3 border border-gray-300 rounded-md text-sm font-medium text-gray-700 hover:bg-gray-50 transition-colors"
          >
            <span className="text-gray-400">{">"}</span>
            VIEW ALL
          </Link>
        </div>
      </div>
    </section>
  );
}
