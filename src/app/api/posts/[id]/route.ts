import { NextRequest, NextResponse } from "next/server";
import { prisma } from "@/lib/db";

export async function GET(
  _req: NextRequest,
  { params }: { params: Promise<{ id: string }> }
) {
  const { id } = await params;
  try {
    const post = await prisma.post.findUnique({ where: { id } });
    if (!post) {
      return NextResponse.json({ error: "記事が見つかりません" }, { status: 404 });
    }
    return NextResponse.json(post);
  } catch {
    return NextResponse.json({ error: "記事の取得に失敗しました" }, { status: 500 });
  }
}

export async function PUT(
  req: NextRequest,
  { params }: { params: Promise<{ id: string }> }
) {
  const { id } = await params;
  try {
    const body = await req.json();
    const { title, slug, excerpt, content, coverImage, published } = body;

    const post = await prisma.post.update({
      where: { id },
      data: {
        title,
        slug,
        excerpt: excerpt || null,
        content,
        coverImage: coverImage || null,
        published,
        publishedAt: published ? new Date() : null,
      },
    });

    return NextResponse.json(post);
  } catch {
    return NextResponse.json({ error: "記事の更新に失敗しました" }, { status: 500 });
  }
}

export async function DELETE(
  _req: NextRequest,
  { params }: { params: Promise<{ id: string }> }
) {
  const { id } = await params;
  try {
    await prisma.post.delete({ where: { id } });
    return NextResponse.json({ success: true });
  } catch {
    return NextResponse.json({ error: "記事の削除に失敗しました" }, { status: 500 });
  }
}
