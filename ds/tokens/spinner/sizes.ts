export type spinnerSize = "sm" | "default" | "lg"

export const spinnerSizeClass: Record<spinnerSize, string> = {
  sm: "h-6 w-6",
  default: "h-12 w-12",
  lg: "h-20 w-20",
}
