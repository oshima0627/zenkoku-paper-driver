import { NextRequest, NextResponse } from "next/server";
import { prisma } from "@/lib/db";

export async function POST(req: NextRequest) {
  try {
    const { email, password } = await req.json();

    if (!email || !password) {
      return NextResponse.json({ error: "認証情報が不足しています" }, { status: 400 });
    }

    const user = await prisma.user.findUnique({
      where: { email },
    });

    if (user && user.password === password) {
      return NextResponse.json({
        id: user.id,
        name: user.name,
        email: user.email,
      });
    }

    return NextResponse.json({ error: "認証失敗" }, { status: 401 });
  } catch {
    return NextResponse.json({ error: "サーバーエラー" }, { status: 500 });
  }
}
