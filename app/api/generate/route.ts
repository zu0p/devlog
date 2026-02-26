import { buildPrompt } from "@/logics/prompt"
import { basePrompt } from "@/logics/prompt/templates/base"
import { GeneratedArticle } from "@/services/generate.contract"
import { NextResponse } from "next/server"
import OpenAI from "openai"

const client = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY,
})

export async function POST(req: Request) {
  const { title, keywords, style } = await req.json()

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

  let article: GeneratedArticle

  try {
    article = JSON.parse(rawContent)
  } catch {
    return NextResponse.json(
      { message: "Failed to parse AI response" },
      { status: 500 }
    )
  }

  return NextResponse.json(article)
}
