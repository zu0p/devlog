export type SpinnerVariant = "default" | "primary" | "secondary"

export const spinnerVariantClass: Record<SpinnerVariant, string> = {
  default: "text-blue-600 dark:text-blue-400",
  primary: "text-primary dark:text-primary-foreground",
  secondary: "text-secondary dark:text-secondary-foreground",
}
