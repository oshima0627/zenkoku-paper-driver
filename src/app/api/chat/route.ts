import { anthropic } from "@ai-sdk/anthropic";
import { streamText } from "ai";
import { getRAGContext } from "@/lib/rag";

const SYSTEM_PROMPT = `あなたは全国ペーパードライバー協会のAIアシスタントです。
以下のルールに従って回答してください：

1. 丁寧で親切な日本語で応答する
2. 安全運転講習、ペーパードライバー講習、料金、対応エリアに関する質問に答える
3. 具体的な予約や契約に関しては、お問い合わせフォーム（/contact）への誘導を行う
4. 回答は簡潔にまとめる（200文字以内を目安）
5. 不明な点は正直に「担当者にお繋ぎします」と案内する

【サービス概要】
- 企業向け安全運転講習（座学＋実技、全国出張対応）
- 個人向けペーパードライバー講習（マンツーマン、出張対応）
- 新入社員向け研修
- 管理者向け安全運転管理研修

【料金目安】
- 個人向け: 16,500円〜 / 1回（2時間）
- 企業スタンダード: 55,000円〜 / 1回（3時間、最大5名）
- 企業プレミアム: 110,000円〜 / 1回（6時間、最大10名）`;

export async function POST(req: Request) {
  const { messages } = await req.json();

  // Get RAG context from the latest user message
  const lastUserMessage = [...messages].reverse().find((m: { role: string }) => m.role === "user");
  let ragContext = "";
  if (lastUserMessage) {
    const userText =
      lastUserMessage.parts
        ?.filter((p: { type: string }) => p.type === "text")
        .map((p: { text: string }) => p.text)
        .join("") || lastUserMessage.content || "";
    ragContext = await getRAGContext(userText);
  }

  const systemPrompt = SYSTEM_PROMPT + ragContext;

  const result = streamText({
    model: anthropic("claude-haiku-4-5-20251001"),
    system: systemPrompt,
    messages,
  });

  return result.toTextStreamResponse();
}
