export type LabelSize = "sm" | "md" | "lg"

export const labelSizeClass: Record<LabelSize, string> = {
  sm: "h-[1.5rem] text-sm font-medium",
  md: "h-[1.75rem] text-base font-bold",
  lg: "h-[1.875rem] text-base font-bold",
}
