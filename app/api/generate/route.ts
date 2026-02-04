import { buildPrompt } from "@/logics/prompt"
import { basePrompt } from "@/logics/prompt/templates/base"
import { NextResponse } from "next/server"
import OpenAI from "openai"

const client = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY,
})

export async function POST(req: Request) {
  const { title, keywords, style } = await req.json()

  const response = await client.chat.completions.create({
    model: "gpt-3.5-turbo",
    messages: [
      { role: "system", content: basePrompt() },
      {
        role: "user",
        content: buildPrompt(style, { title, keywords }),
      },
    ],
  })
  return NextResponse.json({
    res: response,
  })
}
