export type ToastVariant = "default" | "warning" | "destructive" | "success"

export const toastVariantClass: Record<ToastVariant, string> = {
  default: "bg-blue-600 text-white transition-colors",
  warning: "bg-amber-300 text-gray-700 transition-colors",
  destructive: "bg-destructive text-white transition-colors",
  success: "bg-green-600 text-white transition-colors",
}
