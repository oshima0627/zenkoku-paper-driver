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

  return (
    <>
      <section className="bg-[var(--color-primary)] text-white py-12">
        <div className="max-w-4xl mx-auto px-4">
          <nav className="text-xs text-gray-300 mb-6">
            <a href="/" className="hover:text-white">ホーム</a>
            <span className="mx-2">{">"}</span>
            <span>NEWS</span>
          </nav>
          <div className="flex items-start gap-6">
            <div className="text-center shrink-0 border-r border-white/20 pr-6">
              <p className="text-sm text-gray-300">{date.getFullYear()}</p>
              <p className="text-2xl font-bold">{date.getMonth() + 1}/{String(date.getDate()).padStart(2, "0")}</p>
            </div>
            <div>
              <h1 className="text-xl md:text-3xl font-bold">{news.title}</h1>
              <div className="flex items-center gap-3 mt-3">
                <span className="text-xs bg-[var(--color-primary-light)] px-2 py-0.5 rounded font-bold">NEWS</span>
                <span className="text-xs text-gray-300">
                  {date.toLocaleDateString("ja-JP", { year: "numeric", month: "long", day: "numeric" })}
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-12">
        <article className="max-w-3xl mx-auto px-4">
          {news.coverImage && (
            <img src={news.coverImage} alt={news.title} className="w-full rounded-lg mb-8" />
          )}
          {news.content && (
            <div
              className="prose prose-gray max-w-none prose-headings:text-gray-900 prose-a:text-[var(--color-primary)] prose-img:rounded-lg prose-img:max-w-full"
              dangerouslySetInnerHTML={{ __html: news.content }}
            />
          )}
        </article>
      </section>
    </>
  );
}
