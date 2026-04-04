import { NextRequest, NextResponse } from "next/server";
import { prisma } from "@/lib/db";
import { upsertEmbedding } from "@/lib/embedding";
import { stripHtml } from "@/lib/rag";

export async function POST(
  _req: NextRequest,
  { params }: { params: Promise<{ id: string }> }
) {
  const { id } = await params;
  try {
    const post = await prisma.post.findUnique({ where: { id } });
    if (!post) {
      return NextResponse.json({ error: "記事が見つかりません" }, { status: 404 });
    }

    const textContent = `${post.title}\n\n${stripHtml(post.content)}`;
    await upsertEmbedding("post", post.id, textContent);

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error("Embedding error:", error);
    return NextResponse.json({ error: "ベクトル化に失敗しました" }, { status: 500 });
  }
}
