"use client"

import Image from "next/image"
import Link from "next/link"
import { MoonStar, Sun } from "lucide-react"
import Button from "@/ds/components/atoms/button/Button"
import { HeaderProps } from "./Header.types"

const Header = ({ title, logoSrc, isDarkMode, onThemeToggle }: HeaderProps) => {
  return (
    <header className="fixed top-0 right-0 left-0 z-50 border-b border-zinc-200 bg-white/70 backdrop-blur-md dark:border-zinc-800 dark:bg-zinc-900/70">
      <div className="mx-auto flex h-14 max-w-6xl items-center justify-between px-4">
        <Link href={"/"} className="flex flex-row gap-1">
          {logoSrc && (
            <Image
              src={logoSrc}
              width={24}
              height={24}
              alt="Devlog logo image"
            />
          )}
          <span className="font-bold">{title}</span>
        </Link>

        {onThemeToggle && (
          <Button variant="ghost" size="icon-md" onClick={onThemeToggle}>
            {isDarkMode ? (
              <Sun className="h-5 w-5" />
            ) : (
              <MoonStar className="h-5 w-5" />
            )}
          </Button>
        )}
      </div>
    </header>
  )
}

export default Header
