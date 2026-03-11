export type buttonSize = "default" | "sm" | "lg" | "xl" | "icon"

export const buttonSizeClass: Record<buttonSize, string> = {
  default: "h-11 px-4 py-3 rounded-lg gap-2",
  sm: "h-10 rounded-md px-3 gap-1.5",
  lg: "h-12 rounded-lg px-6 gap-2",
  xl: "h-15 rounded-lg px-8 py-4 text-lg gap-2",
  icon: "rounded-full p-0.5 ",
}
