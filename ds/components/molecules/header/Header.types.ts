import { StaticImport } from "next/dist/shared/lib/get-img-props"

export type HeaderProps = {
  title?: string
  logoSrc?: string | StaticImport
  isDarkMode?: boolean
  onThemeToggle?: () => void
}
