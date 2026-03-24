export const TEXT_VARIANTS = [
  "h1",
  "h2",
  "h3",
  "body1",
  "body2",
  "caption",
] as const

export type TextVariant = (typeof TEXT_VARIANTS)[number]

export const textVariantClass: Record<TextVariant, string> = {
  h1: "text-2xl font-bold",
  h2: "text-xl font-bold",
  h3: "text-lg font-medium",
  body1: "text-base font-normal",
  body2: "text-sm font-normal",
  caption: "text-xs font-normal text-muted-foreground",
}
