import { NextRequest, NextResponse } from "next/server";
import { prisma } from "@/lib/db";

export async function GET(req: NextRequest) {
  const all = req.nextUrl.searchParams.get("all") === "true";
  try {
    const news = await prisma.news.findMany({
      where: all ? {} : { published: true },
      orderBy: { publishedAt: "desc" },
    });
    return NextResponse.json(news);
  } catch {
    return NextResponse.json([]);
  }
}

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    const { title, content, coverImage, publishedAt, published } = body;

    if (!title) {
      return NextResponse.json({ error: "タイトルは必須です" }, { status: 400 });
    }

    const slug = `news-${Date.now()}-${Math.random().toString(36).substring(2, 8)}`;

    const news = await prisma.news.create({
      data: {
        title,
        slug,
        content: content || "",
        coverImage: coverImage || null,
        published: published ?? false,
        publishedAt: publishedAt ? new Date(publishedAt) : new Date(),
      },
    });

    return NextResponse.json(news, { status: 201 });
  } catch {
    return NextResponse.json({ error: "作成に失敗しました" }, { status: 500 });
  }
}
