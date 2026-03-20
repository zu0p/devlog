import React, { useEffect, useState } from "react"
import { ToastProps } from "./Toast.types"
import { ToastVariant, toastVariantClass } from "@/ds/tokens/toast/variants"
import { cn } from "@/lib/utils"
import { toastSizeClass } from "@/ds/tokens/toast/sizes"
import { AlertTriangle, CheckCircle2, Info, XCircle } from "lucide-react"

const ICONS_BY_VARIANT: Record<ToastVariant, React.ReactNode> = {
  default: <Info className="h-5 w-5" />,
  warning: <AlertTriangle className="h-5 w-5" />,
  destructive: <XCircle className="h-5 w-5" />,
  success: <CheckCircle2 className="h-5 w-5" />,
}

const Toast: React.FC<ToastProps> = ({
  message,
  variant = "default",
  size = "md",
  position = "top",
  duration = 1500,
  onDismiss,
}) => {
  const [visible, setVisible] = useState(true)

  useEffect(() => {
    const timer = setTimeout(() => {
      setVisible(false)
    }, duration)

    return () => clearTimeout(timer)
  }, [duration])

  useEffect(() => {
    if (!visible) {
      const timer = setTimeout(() => {
        onDismiss()
      }, 300)
      return () => clearTimeout(timer)
    }
  }, [visible, onDismiss])

  const baseStyles = `
    flex gap-2 items-center
    rounded-lg 
    cursor-default 
    fixed left-1/2 -translate-x-1/2 
    w-98 z-100 
    text-left 
    shadow-md transition-all 
    duration-300 
    ease-in-out`

  const animationClasses = visible
    ? "opacity-100 translate-y-0"
    : `opacity-0 ${position === "top" ? "-translate-y-full" : "translate-y-full"}`

  return (
    <div
      className={cn(
        baseStyles,
        toastVariantClass[variant],
        toastSizeClass[size],
        animationClasses,
        position === "top" ? "top-4" : "bottom-4"
      )}
    >
      {ICONS_BY_VARIANT[variant]}
      <span className={"whitespace-pre-line"}>{message}</span>
    </div>
  )
}

export default Toast
