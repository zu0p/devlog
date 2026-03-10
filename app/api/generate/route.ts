import { buildPrompt } from "@/logics/prompt"
import { basePrompt } from "@/logics/prompt/templates/base"
import { GeneratedArticle } from "@/services/generate.contract"
import { NextResponse } from "next/server"
import OpenAI from "openai"
import { z } from "zod"

if (!process.env.OPENAI_API_KEY) {
  throw new Error("OPENAI_API_KEY is not defined in environment variables.")
}

const client = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY,
})

const GenerateAPIRequestSchema = z.object({
  title: z.string().min(1),
  keywords: z.array(z.string().min(1)),
  style: z.enum(["til", "tutorial", "troubleshooting"]),
})

const GeneratedArticleSchema = z.object({
  title: z.string(),
  content: z.string(),
  hashtags: z.array(z.string()),
  metaDescription: z.string(),
})

export async function POST(req: Request) {
  const requestJson = await req.json()

  // request zod verification
  const request = GenerateAPIRequestSchema.safeParse(requestJson)
  if (!request.success)
    return NextResponse.json({ message: "Request Zod Error" }, { status: 500 })
  const { title, keywords, style } = request.data

  const response = await client.chat.completions.create({
    model: "gpt-3.5-turbo",
    response_format: { type: "json_object" },
    messages: [
      { role: "system", content: basePrompt() },
      {
        role: "user",
        content: buildPrompt(style, { title, keywords }),
      },
    ],
  })

  const rawContent = response.choices[0]?.message?.content

  if (!rawContent) {
    return NextResponse.json({ message: "Empty AI response" }, { status: 500 })
  }

  let articleJson: GeneratedArticle
  let article
  try {
    articleJson = JSON.parse(rawContent)

    // respose zod verfication
    article = GeneratedArticleSchema.safeParse(articleJson)
    if (!article.success) {
      return NextResponse.json(
        { message: "Response Zod Error" },
        { status: 500 }
      )
    }
  } catch {
    return NextResponse.json(
      { message: "Failed to parse AI response" },
      { status: 500 }
    )
  }

  return NextResponse.json(article.data)
}
