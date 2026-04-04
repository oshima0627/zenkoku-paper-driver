import { NextRequest, NextResponse } from "next/server";
import { prisma } from "@/lib/db";

export async function GET(
  _req: NextRequest,
  { params }: { params: Promise<{ id: string }> }
) {
  const { id } = await params;
  try {
    const news = await prisma.news.findUnique({ where: { id } });
    if (!news) return NextResponse.json({ error: "見つかりません" }, { status: 404 });
    return NextResponse.json(news);
  } catch {
    return NextResponse.json({ error: "取得に失敗しました" }, { status: 500 });
  }
}

export async function PUT(
  req: NextRequest,
  { params }: { params: Promise<{ id: string }> }
) {
  const { id } = await params;
  try {
    const body = await req.json();
    const { title, content, coverImage, publishedAt, published } = body;
    const news = await prisma.news.update({
      where: { id },
      data: {
        title,
        content: content || "",
        coverImage: coverImage || null,
        published: published ?? undefined,
        publishedAt: publishedAt ? new Date(publishedAt) : undefined,
      },
    });
    return NextResponse.json(news);
  } catch {
    return NextResponse.json({ error: "更新に失敗しました" }, { status: 500 });
  }
}

export async function DELETE(
  _req: NextRequest,
  { params }: { params: Promise<{ id: string }> }
) {
  const { id } = await params;
  try {
    await prisma.news.delete({ where: { id } });
    return NextResponse.json({ success: true });
  } catch {
    return NextResponse.json({ error: "削除に失敗しました" }, { status: 500 });
  }
}
