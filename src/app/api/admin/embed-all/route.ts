import { NextResponse } from "next/server";
import { prisma } from "@/lib/db";
import { upsertEmbedding } from "@/lib/embedding";
import { stripHtml } from "@/lib/rag";

// Static site content to index in RAG
const STATIC_CONTENTS = [
  {
    id: "company-overview",
    type: "static",
    content: `会社概要
会社名: Co-Drive Lab
代表: 東山 勇人
住所: 〒531-0071 大阪市北区中津６丁目7-7-5F
メールアドレス: info@kyokai-npd.com
従業員数: 5名
事業内容: スクールサポートAI事業（AI業務自動化・HP制作）、企業向け安全運転講習、ペーパードライバー講習、運転インストラクター育成事業`,
  },
  {
    id: "services-driving",
    type: "static",
    content: `安全運転講習サービス

■ 企業向け安全運転講習
従業員の交通事故防止を目的とした実践的な講習。座学と実技を組み合わせた総合プログラム。
内容: 座学講習、実技講習、運転適性診断、講習後レポート
対象: 企業・法人様
対応エリア: 現在は関西地区（大阪・兵庫・奈良）のみ。順次全国展開予定。

■ ペーパードライバー講習
長期間運転していない方向けの個別指導。お客様のレベルに合わせて丁寧に指導。
内容: マンツーマン指導、ご自宅まで出張、マイカーで練習可、最短1日〜
指導員: 国家資格保持者（教習指導員資格）、元白バイ隊員監修

■ 新入社員向け講習
新入社員研修の一環として、安全運転の基礎を徹底指導。
内容: 基本運転技術、危険予測トレーニング、交通ルール確認、グループ講習可

■ 管理者向け安全運転管理研修
企業の安全運転管理者向けの専門研修。`,
  },
  {
    id: "pricing",
    type: "static",
    content: `安全運転講習 料金案内

1. 安全運転スキル診断（任意）
料金: 11,000円（税込）
時間: 50分 / 1人あたり

2. 技能教習
100分 × 1日: 18,000円
100分 × 2日: 36,000円
100分 × 3日: 54,000円（人気No.1）
100分 × 4日: 72,000円（人気No.2）
100分 × 5日: 90,000円
追加教習: 100分毎に18,000円

3. 学科（任意）
料金: 18,000円（税込）
時間: 50分

4. 最終運転技能チェック（必須）
料金: 11,000円（税込）
時間: 50分

その他費用:
修了証明書発行: 1人 5,000円
教習報告書作成: 1回 3,000円
※高速料金、コインパーキング代は別途`,
  },
  {
    id: "school-support-ai",
    type: "static",
    content: `スクールサポートAI事業（メイン事業）

AI業務自動化サービス:
- 業務プロセス分析
- チャットボット導入
- データ処理自動化
- カスタムAIツール開発
料金: 個別お見積り

HP制作・運用サービス:
- モダンなWebデザイン
- レスポンシブ対応
- SEO対策
- 保守運用
料金: 個別お見積り

業務委託パートナー: Nexeed Lab（https://www.nexeed-web.com/）と連携`,
  },
  {
    id: "faq",
    type: "static",
    content: `よくある質問（FAQ）

Q: 講習はどこで実施されますか？
A: 御社の所在地や社員様のご自宅付近まで講師が出張いたします。マイカー・社用車・レンタカーいずれでも対応可能です。

Q: 教習車の用意がない場合はどうすればいいですか？
A: 教習車両（補助ブレーキ付き）やレンタカーの手配も可能ですのでご安心ください。

Q: 社員全員に受講させる必要がありますか？
A: 義務ではありませんが、運転業務の有無や希望に応じて選択いただけます。必要に応じて対象者を限定した受講も可能です。

Q: 講習内容はどのようなものですか？
A: 車両感覚・車線変更・駐車・高速道路など、社員様の運転レベルに合わせて柔軟にカリキュラムを組みます。安全運転の意識づけも含まれます。

Q: 講習の所要時間はどれくらいですか？
A: 1回あたり100分を基本としています。集中力を保ちながら効率的に学べる時間配分です。

Q: 講習の費用はどのように決まりますか？
A: 受講人数・回数・車両の有無によって変動します。法人様向けにはまとめてのお見積りをご提示いたします。

Q: 事故が起きた場合の補償はどうなりますか？
A: 教習車両使用時は自動車保険を完備しております。マイカー・社用車使用時は各車両の保険が適用されます。

Q: 講習の効果を客観的に確認できますか？
A: 受講前後の運転チェックや、指導員によるフィードバックレポートをお渡しします。人事評価や安全管理資料としても活用いただけます。

Q: 女性社員や運転に強い不安がある社員にも対応できますか？
A: はい、指導員は丁寧で柔らかい指導を心がけています。マンツーマン形式で、女性指導員も在籍しておりますので安心して受講いただけます。

Q: 講習後のフォローアップはありますか？
A: 定期的な再講習や、特定の運転スキルに特化した追加レッスンをご用意しています。

Q: 対応エリアはどこですか？
A: 現在は関西地区（大阪・兵庫・奈良）のみ対応しております。順次全国対応予定ですので、関西以外のエリアはお気軽にご相談ください。

Q: 何名から申し込みできますか？
A: 1名様から受講可能です。少人数でも気軽にお申し込みいただけます。

Q: キャンセルや日程変更は可能ですか？
A: 講習日の3日前までは無料で変更・キャンセルが可能です。2日前以降はキャンセル料が発生する場合がございます。

Q: オンラインでの座学講習はありますか？
A: はい、Zoomを使用したオンライン座学講習にも対応しております。全国どこからでも受講可能です。`,
  },
  {
    id: "contact-info",
    type: "static",
    content: `お問い合わせ・申し込み方法

お問い合わせはWebフォームよりお気軽にどうぞ。
URL: /contact

対応内容:
- 安全運転講習のお申し込み・ご相談
- ペーパードライバー講習のご予約
- スクールサポートAI事業のご相談・お見積り
- HP制作のご依頼

メールアドレス: info@kyokai-npd.com
所在地: 大阪市北区中津６丁目7-7-5F`,
  },
];

export async function POST() {
  const results = { success: 0, failed: 0, errors: [] as string[] };

  // Index static site content
  for (const item of STATIC_CONTENTS) {
    try {
      await upsertEmbedding(item.type, item.id, item.content);
      results.success++;
    } catch (e) {
      results.failed++;
      results.errors.push(`static/${item.id}: ${e}`);
    }
  }

  // Index all published blog posts
  try {
    const posts = await prisma.post.findMany({
      where: { published: true },
      select: { id: true, title: true, content: true },
    });
    for (const post of posts) {
      try {
        const text = `${post.title}\n\n${stripHtml(post.content)}`;
        await upsertEmbedding("post", post.id, text);
        results.success++;
      } catch (e) {
        results.failed++;
        results.errors.push(`post/${post.id}: ${e}`);
      }
    }
  } catch (e) {
    results.errors.push(`posts fetch error: ${e}`);
  }

  // Index all published news items
  try {
    const newsList = await prisma.news.findMany({
      where: { published: true },
      select: { id: true, title: true, content: true },
    });
    for (const news of newsList) {
      try {
        const text = `${news.title}\n\n${stripHtml(news.content)}`;
        await upsertEmbedding("news", news.id, text);
        results.success++;
      } catch (e) {
        results.failed++;
        results.errors.push(`news/${news.id}: ${e}`);
      }
    }
  } catch (e) {
    results.errors.push(`news fetch error: ${e}`);
  }

  return NextResponse.json(results);
}
