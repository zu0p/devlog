export const TOAST_VARIANTS = [
  "default",
  "warning",
  "destructive",
  "success",
] as const

export type ToastVariant = (typeof TOAST_VARIANTS)[number]

export const toastVariantClass: Record<ToastVariant, string> = {
  default: "bg-blue-600 text-white transition-colors",
  warning: "bg-amber-300 text-gray-700 transition-colors",
  destructive: "bg-destructive text-white transition-colors",
  success: "bg-green-600 text-white transition-colors",
}
