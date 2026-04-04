import { NextRequest, NextResponse } from "next/server";
import { prisma } from "@/lib/db";

export async function GET() {
  try {
    const news = await prisma.news.findMany({
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
    const { title, url, publishedAt } = body;

    if (!title) {
      return NextResponse.json({ error: "タイトルは必須です" }, { status: 400 });
    }

    const news = await prisma.news.create({
      data: {
        title,
        url: url || null,
        publishedAt: publishedAt ? new Date(publishedAt) : new Date(),
      },
    });

    return NextResponse.json(news, { status: 201 });
  } catch {
    return NextResponse.json({ error: "作成に失敗しました" }, { status: 500 });
  }
}
