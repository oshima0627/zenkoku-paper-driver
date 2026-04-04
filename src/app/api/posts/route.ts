import { NextRequest, NextResponse } from "next/server";
import { prisma } from "@/lib/db";

export async function GET() {
  try {
    const posts = await prisma.post.findMany({
      orderBy: { createdAt: "desc" },
      select: {
        id: true,
        title: true,
        slug: true,
        published: true,
        publishedAt: true,
        createdAt: true,
      },
    });
    return NextResponse.json(posts);
  } catch {
    return NextResponse.json({ error: "記事の取得に失敗しました" }, { status: 500 });
  }
}

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    const { title, slug, excerpt, content, coverImage, published } = body;

    if (!title || !slug) {
      return NextResponse.json({ error: "必須項目を入力してください" }, { status: 400 });
    }

    const post = await prisma.post.create({
      data: {
        title,
        slug,
        excerpt: excerpt || null,
        content: content || "",
        coverImage: coverImage || null,
        published,
        publishedAt: published ? new Date() : null,
        authorId: "1", // TODO: Get from session
      },
    });

    return NextResponse.json(post, { status: 201 });
  } catch (error: unknown) {
    if (error && typeof error === "object" && "code" in error && error.code === "P2002") {
      return NextResponse.json({ error: "このスラッグは既に使用されています" }, { status: 409 });
    }
    return NextResponse.json({ error: "記事の作成に失敗しました" }, { status: 500 });
  }
}
