export const BUTTON_SIZES = [
  "default",
  "sm",
  "lg",
  "xl",
  "icon-sm",
  "icon-md",
] as const

export type ButtonSize = (typeof BUTTON_SIZES)[number]

export const buttonSizeClass: Record<ButtonSize, string> = {
  default: "h-11 px-4 py-3 rounded-lg gap-2",
  sm: "h-10 rounded-md px-3 gap-1.5",
  lg: "h-12 rounded-lg px-6 gap-2",
  xl: "h-15 rounded-lg px-8 py-4 text-lg gap-2",
  "icon-sm": "p-0.5 rounded-full flex items-center justify-center",
  "icon-md": "p-2 rounded-md flex items-center justify-center",
}
