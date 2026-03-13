import { ToastSize } from "@/ds/tokens/toast/sizes"
import { ToastVariant } from "@/ds/tokens/toast/variants"

export type ToastPosition = "top" | "bottom"

export interface ToastProps {
  message: string
  variant?: ToastVariant
  size?: ToastSize
  position?: ToastPosition
  duration?: number
  onDismiss: () => void
}
