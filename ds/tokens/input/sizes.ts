export type InputSize = "xs" | "sm" | "md" | "lg" | "xl"

export const inputSizeClass: Record<InputSize, string> = {
  xs: "h-[1.188rem] px-2 text-sm",
  sm: "h-[1.5rem] px-2 text-sm",
  md: "h-[1.75rem] px-3 text-base",
  lg: "h-[1.875rem] px-3 text-base",
  xl: "h-[2.25rem] px-4 text-base",
}
