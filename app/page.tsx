"use client"
import { useRouter } from "next/navigation"

export default function Home() {
  const router = useRouter()
  const handleToGenerate = () => {
    router.push("/generate")
  }

  return (
    <div className="flex min-h-screen items-center justify-center bg-zinc-50 font-sans dark:bg-black">
      <main className="flex min-h-screen w-full max-w-3xl flex-col items-center justify-between bg-white px-16 py-32 sm:items-start dark:bg-black">
        <h1>기술블로그 글 생성기</h1>
        <button onClick={handleToGenerate}>생성</button>
      </main>
    </div>
  )
}
