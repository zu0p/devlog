export type ButtonVariant =
  | "default"
  | "destructive"
  | "outline"
  | "secondary"
  | "ghost"
  | "link"
  | "success"
  | "warning"

export const buttonVariantClass: Record<ButtonVariant, string> = {
  default: "bg-blue-600 text-white transition-colors hover:bg-blue-700",
  secondary:
    "bg-gray-200 text-gray-700 transition-colors hover:bg-gray-300 dark:bg-gray-700 dark:text-gray-300 dark:hover:bg-gray-600",
  success: "bg-green-600 text-white transition-colors hover:bg-green-700",
  warning: "bg-amber-300 text-gray-700 transition-colors hover:bg-amber-400",
  destructive:
    "bg-destructive text-white hover:bg-destructive/90 focus-visible:ring-destructive/20 dark:focus-visible:ring-destructive/40 dark:bg-destructive/60",
  outline:
    "border-2 border-gray-300 bg-white text-gray-700 hover:border-gray-400 dark:border-gray-700 dark:bg-gray-800 dark:text-gray-300 dark:hover:border-gray-600",
  ghost: "text-gray-700 transition-colors hover:bg-gray-100 dark:text-gray-300 dark:hover:bg-gray-700",
  link: "text-primary underline-offset-4 hover:underline",
}
