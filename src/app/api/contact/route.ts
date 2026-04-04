import { NextRequest, NextResponse } from "next/server";

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    const { name, email, phone, company, message } = body;

    if (!name || !email || !message) {
      return NextResponse.json(
        { error: "必須項目を入力してください" },
        { status: 400 }
      );
    }

    // TODO: Save to database with Prisma when DB is connected
    // await prisma.contact.create({ data: { name, email, phone, company, message } });

    console.log("Contact form submission:", { name, email, phone, company, message });

    return NextResponse.json({ success: true });
  } catch {
    return NextResponse.json(
      { error: "送信に失敗しました" },
      { status: 500 }
    );
  }
}
