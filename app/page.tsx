"use client"
import { useGenerate } from "@/hooks/generate/useGenerate"
import { GenerateContract } from "@/services/generate.contract"
import { useState } from "react"

export default function Home() {
  const [title, setTitle] = useState<string>("")
  const [keywords, setKeywords] = useState<string>("")
  const { mutateAsync } = useGenerate()
  const handleGenerate = async () => {
    const payload = {
      title: title,
      keywords: [keywords],
      style: "tutorial",
    } as GenerateContract["request"]

    const article = await mutateAsync(payload)
    console.log(article)
  }

  return (
    <div className="flex min-h-screen items-center justify-center bg-zinc-50 font-sans dark:bg-black">
      <main className="flex min-h-screen w-full max-w-3xl flex-col items-center justify-between bg-white px-16 py-32 sm:items-start dark:bg-black">
        <h1>기술블로그 글 생성기</h1>
        <input
          value={title}
          onChange={(e) => {
            setTitle(e.target.value)
          }}
        />
        <input
          value={keywords}
          onChange={(e) => {
            setKeywords(e.target.value)
          }}
        />
        <button onClick={handleGenerate}>생성</button>
      </main>
    </div>
  )
}
