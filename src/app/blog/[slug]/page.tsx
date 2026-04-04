import { notFound } from "next/navigation";
import { prisma } from "@/lib/db";

export const dynamic = "force-dynamic";

export default async function BlogPostPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;

  let post;
  try {
    post = await prisma.post.findUnique({
      where: { slug, published: true },
      include: { author: { select: { name: true } } },
    });
  } catch {
    notFound();
  }

  if (!post) notFound();

  return (
    <>
      <section className="bg-[var(--color-primary)] text-white py-16">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <time className="text-sm text-gray-300">
            {(post.publishedAt || post.createdAt).toLocaleDateString("ja-JP")}
          </time>
          <h1 className="text-2xl md:text-4xl font-bold mt-2">{post.title}</h1>
        </div>
      </section>

      <section className="py-16">
        <article className="max-w-3xl mx-auto px-4">
          <div
            className="prose prose-gray max-w-none prose-headings:text-gray-900 prose-a:text-[var(--color-primary)]"
            dangerouslySetInnerHTML={{ __html: post.content }}
          />
        </article>
      </section>
    </>
  );
}
