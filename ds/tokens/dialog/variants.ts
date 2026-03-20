export const DIALOG_VARIANTS = [
  "default",
  "warning",
  "destructive",
  "success",
] as const

export type DialogVariant = (typeof DIALOG_VARIANTS)[number]

export const dialogVariantClass: Record<DialogVariant, string> = {
  default: "bg-blue-600 text-white transition-colors",
  warning: "bg-amber-300 text-gray-700 transition-colors",
  destructive: "bg-destructive text-white transition-colors",
  success: "bg-green-600 text-white transition-colors",
}
