import { ReactNode } from "react"

export interface GeneratedPreviewProps {
  title?: string
  content?: ReactNode
  hashtags?: {
    click: () => void
    array: string[]
  }
  metaDescription?: {
    click: () => void
    text: string
  }
  isLoading?: boolean
  className?: string
}
