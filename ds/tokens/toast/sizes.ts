export type ToastSize = "sm" | "md" | "lg"

export const toastSizeClass: Record<ToastSize, string> = {
  sm: "px-3 py-2 text-sm",
  md: "px-4 py-4 text-base font-medium",
  lg: "px-4 py-6 text-lg font-bold",
}
