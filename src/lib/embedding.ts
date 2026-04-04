import { prisma } from "./db";

const EMBEDDING_API_URL = "https://api.openai.com/v1/embeddings";

export async function generateEmbedding(text: string): Promise<number[]> {
  const apiKey = process.env.OPENAI_API_KEY;
  if (!apiKey) {
    throw new Error("OPENAI_API_KEY is not set");
  }

  const response = await fetch(EMBEDDING_API_URL, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${apiKey}`,
    },
    body: JSON.stringify({
      model: "text-embedding-3-small",
      input: text,
    }),
  });

  if (!response.ok) {
    throw new Error(`Embedding API error: ${response.statusText}`);
  }

  const data = await response.json();
  return data.data[0].embedding;
}

export async function upsertEmbedding(
  sourceType: string,
  sourceId: string,
  content: string
) {
  const vector = await generateEmbedding(content);
  const vectorStr = `[${vector.join(",")}]`;

  // Delete existing embedding for this source
  await prisma.$executeRawUnsafe(
    `DELETE FROM npd_embeddings WHERE "sourceType" = $1 AND "sourceId" = $2`,
    sourceType,
    sourceId
  );

  // Insert new embedding
  await prisma.$executeRawUnsafe(
    `INSERT INTO npd_embeddings (id, content, "sourceType", "sourceId", vector, "createdAt")
     VALUES (gen_random_uuid(), $1, $2, $3, $4::vector, NOW())`,
    content,
    sourceType,
    sourceId,
    vectorStr
  );
}

export async function searchSimilar(query: string, limit = 5): Promise<Array<{ content: string; similarity: number }>> {
  const queryVector = await generateEmbedding(query);
  const vectorStr = `[${queryVector.join(",")}]`;

  const results = await prisma.$queryRawUnsafe<
    Array<{ content: string; similarity: number }>
  >(
    `SELECT content, 1 - (vector <=> $1::vector) as similarity
     FROM npd_embeddings
     WHERE vector IS NOT NULL
     ORDER BY vector <=> $1::vector
     LIMIT $2`,
    vectorStr,
    limit
  );

  return results;
}
