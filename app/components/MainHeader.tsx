"use client"

import Header from "@/ds/components/molecules/header/Header"
import { useTheme } from "next-themes"
import { useEffect, useState } from "react"
import develop from "@/public/devlog.png"

const MainHeader = () => {
  const { setTheme, resolvedTheme } = useTheme()
  const [isDark, setIsDark] = useState(false)

  useEffect(() => {
    setIsDark(resolvedTheme === "dark")
  }, [resolvedTheme])

  const handleThemeToggle = () => {
    setTheme(isDark ? "light" : "dark")
  }

  return (
    <Header
      title={"Devlog"}
      logoSrc={develop}
      isDarkMode={isDark}
      onThemeToggle={handleThemeToggle}
    />
  )
}

export default MainHeader
