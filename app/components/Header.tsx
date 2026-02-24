"use client"

import { useTheme } from "next-themes"
import Image from "next/image"
import develop from "@/public/devlog.png"
import Link from "next/link"
import { useEffect, useState } from "react"

const Header = () => {
  const { setTheme, resolvedTheme } = useTheme()
  const [isDark, setIsDark] = useState(false)
  useEffect(() => {
    setIsDark(resolvedTheme === "dark")
  }, [resolvedTheme, isDark])

  return (
    <header className="fixed top-0 right-0 left-0 z-50 border-b border-zinc-200 bg-white/70 backdrop-blur-md dark:border-zinc-800 dark:bg-zinc-900/70">
      <div className="mx-auto flex h-14 max-w-6xl items-center justify-between px-4">
        <Link href={"/generate"} className="flex flex-row gap-1">
          <Image src={develop} width={24} height={24} alt="Devlog logo image" />
          <span className="font-bold">Devlog</span>
        </Link>

        <button
          onClick={() => setTheme(isDark ? "light" : "dark")}
          className="rounded-md p-2 transition hover:bg-zinc-200 dark:hover:bg-zinc-700"
        >
          {isDark ? "☀️" : "🌙"}
        </button>
      </div>
    </header>
  )
}

export default Header
