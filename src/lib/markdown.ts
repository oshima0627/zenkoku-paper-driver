import fs from "fs";
import path from "path";
import matter from "gray-matter";
import { remark } from "remark";
import html from "remark-html";

const postsDirectory = path.join(process.cwd(), "content", "posts");

export interface MdPost {
  source: "md";
  slug: string;
  title: string;
  excerpt: string;
  coverImage: string | null;
  publishedAt: Date;
  content: string;
}

export function getAllMdPosts(): MdPost[] {
  if (!fs.existsSync(postsDirectory)) return [];

  const files = fs.readdirSync(postsDirectory).filter((f) => f.endsWith(".md"));

  return files
    .map((filename) => {
      const slug = filename.replace(/\.md$/, "");
      const fullPath = path.join(postsDirectory, filename);
      const fileContents = fs.readFileSync(fullPath, "utf8");
      const { data, content } = matter(fileContents);

      return {
        source: "md" as const,
        slug,
        title: (data.title as string) || slug,
        excerpt: (data.excerpt as string) || "",
        coverImage: (data.coverImage as string) || null,
        publishedAt: data.date ? new Date(data.date as string) : new Date(),
        content,
      };
    })
    .sort((a, b) => b.publishedAt.getTime() - a.publishedAt.getTime());
}

export function getMdPostBySlug(slug: string): MdPost | null {
  const fullPath = path.join(postsDirectory, `${slug}.md`);
  if (!fs.existsSync(fullPath)) return null;

  const fileContents = fs.readFileSync(fullPath, "utf8");
  const { data, content } = matter(fileContents);

  return {
    source: "md",
    slug,
    title: (data.title as string) || slug,
    excerpt: (data.excerpt as string) || "",
    coverImage: (data.coverImage as string) || null,
    publishedAt: data.date ? new Date(data.date as string) : new Date(),
    content,
  };
}

export async function renderMarkdown(content: string): Promise<string> {
  const result = await remark().use(html, { sanitize: false }).process(content);
  return result.toString();
}
