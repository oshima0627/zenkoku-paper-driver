import { notFound } from "next/navigation";
import { prisma } from "@/lib/db";
import { getMdPostBySlug, renderMarkdown } from "@/lib/markdown";

export const dynamic = "force-dynamic";

export default async function BlogPostPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;

  // 1. まずDBから検索
  let post: { title: string; content: string; publishedAt: Date | null; createdAt: Date; source: "db" | "md" } | null = null;

  try {
    const dbPost = await prisma.post.findUnique({
      where: { slug, published: true },
    });
    if (dbPost) {
      post = {
        title: dbPost.title,
        content: dbPost.content,
        publishedAt: dbPost.publishedAt,
        createdAt: dbPost.createdAt,
        source: "db",
      };
    }
  } catch {
    // DB not connected - continue to MD
  }

  // 2. DBに無ければMarkdownから検索
  if (!post) {
    const mdPost = getMdPostBySlug(slug);
    if (mdPost) {
      const htmlContent = await renderMarkdown(mdPost.content);
      post = {
        title: mdPost.title,
        content: htmlContent,
        publishedAt: mdPost.publishedAt,
        createdAt: mdPost.publishedAt,
        source: "md",
      };
    }
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
            className="prose prose-gray max-w-none prose-headings:text-gray-900 prose-a:text-[var(--color-primary)] prose-img:rounded-lg prose-img:max-w-full"
            dangerouslySetInnerHTML={{ __html: post.content }}
          />
        </article>
      </section>
    </>
  );
}
