import Link from "next/link";

// TODO: Replace with actual data from database
const samplePosts = [
  {
    id: "1",
    title: "企業の交通事故を減らすための5つのポイント",
    excerpt: "企業における交通事故は、従業員の安全だけでなく、会社の信頼にも関わる重大な問題です。",
    slug: "reduce-traffic-accidents",
    publishedAt: "2024-12-01",
    category: "安全運転",
  },
  {
    id: "2",
    title: "ペーパードライバーが最初に練習すべきこと",
    excerpt: "久しぶりの運転で不安な方へ。まずはこの3つのポイントを押さえましょう。",
    slug: "paper-driver-first-practice",
    publishedAt: "2024-11-15",
    category: "ペーパードライバー",
  },
  {
    id: "3",
    title: "2024年の道路交通法改正のポイント",
    excerpt: "2024年に施行された道路交通法の改正点をわかりやすく解説します。",
    slug: "traffic-law-2024",
    publishedAt: "2024-10-20",
    category: "法改正",
  },
];

export default function BlogPage() {
  return (
    <>
      <section className="bg-[var(--color-primary)] text-white py-16">
        <div className="max-w-6xl mx-auto px-4">
          <p className="text-[var(--color-accent)] font-bold text-sm mb-2">BLOG</p>
          <h1 className="text-3xl md:text-4xl font-bold">ブログ</h1>
        </div>
      </section>

      <section className="py-16 md:py-24">
        <div className="max-w-4xl mx-auto px-4">
          <div className="space-y-8">
            {samplePosts.map((post) => (
              <article
                key={post.id}
                className="border rounded-xl overflow-hidden hover:shadow-md transition-shadow"
              >
                <div className="p-6">
                  <div className="flex items-center gap-3 mb-3">
                    <span className="text-xs font-bold text-[var(--color-primary)] bg-[var(--color-primary)]/10 px-2.5 py-1 rounded-full">
                      {post.category}
                    </span>
                    <time className="text-xs text-gray-400">{post.publishedAt}</time>
                  </div>
                  <Link href={`/blog/${post.slug}`}>
                    <h2 className="text-xl font-bold text-gray-900 hover:text-[var(--color-primary)] transition-colors mb-2">
                      {post.title}
                    </h2>
                  </Link>
                  <p className="text-sm text-gray-600 leading-relaxed">{post.excerpt}</p>
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
        </div>
      </section>
    </>
  );
}
