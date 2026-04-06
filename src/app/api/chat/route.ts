import { anthropic } from "@ai-sdk/anthropic";
import { streamText } from "ai";
import { getRAGContext } from "@/lib/rag";

const SYSTEM_PROMPT = `あなたは全国ペーパードライバー協会のAIアシスタントです。
以下のルールに従って回答してください：

1. 丁寧で親切な日本語で応答する
2. スクールサポートAI事業、安全運転講習、料金、対応エリアに関する質問に答える
3. 具体的な予約や契約に関しては、お問い合わせフォーム（/contact）への誘導を行う
4. 回答は簡潔にまとめる（200文字以内を目安）
5. 不明な点は正直に「担当者にお繋ぎします」と案内する

【事業概要】
当協会には2つの事業の柱があります：

■ スクールサポートAI事業（メイン事業）
- AI業務自動化（業務プロセス分析、チャットボット導入、データ処理自動化、カスタムAIツール開発）
- HP制作・運用（モダンなWebデザイン、レスポンシブ対応、SEO対策、保守運用）
- 業務委託パートナーとしてNexeed Lab（https://www.nexeed-web.com/）と連携
- 料金は個別お見積り

■ 安全運転講習事業(協会)
- 企業向け安全運転講習（座学＋実技、全国出張対応）
- 個人向けペーパードライバー講習（マンツーマン、出張対応）
- 新入社員向け研修
- 管理者向け安全運転管理研修
- 国家資格保持者（教習指導員資格）による指導
- 元白バイ隊員監修のマニュアル

【安全運転講習料金目安】
- スキル診断: 11,000円 / 50分
- 技能教習: 18,000円〜90,000円 / 100分×1〜5日
- 学科学: 18,000円 / 50分
- 最終チェック: 11,000円 / 50分

【理念】
テクノロジーと安全で、社会に貢献する。AIの力で企業の業務効率化を支援し、プロフェッショナルな安全運転講習で交通事故防止に取り組んでいます。`;

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
