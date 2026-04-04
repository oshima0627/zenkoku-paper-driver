import { searchSimilar } from "./embedding";

export async function getRAGContext(query: string): Promise<string> {
  try {
    const results = await searchSimilar(query, 3);

    if (results.length === 0) {
      return "";
    }

    const context = results
      .filter((r) => r.similarity > 0.3)
      .map((r) => r.content)
      .join("\n\n---\n\n");

    return context
      ? `\n\n【参考情報（サイトコンテンツより）】\n${context}`
      : "";
  } catch {
    // RAG is optional - if it fails, continue without context
    console.error("RAG search failed, continuing without context");
    return "";
  }
}

export function stripHtml(html: string): string {
  return html
    .replace(/<[^>]*>/g, " ")
    .replace(/\s+/g, " ")
    .trim();
}
