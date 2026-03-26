import { TextProps } from "@/ds/components/atoms/text/Text.types"
import { cn } from "@/lib/utils"
import { textVariantClass } from "@/ds/tokens/text/variants"
import { ElementType } from "react"

export const Text = <T extends ElementType = "span">({
  as,
  variant = "body1",
  className,
  children,
  ...props
}: TextProps<T>) => {
  const Component = as || "span"

  return (
    <Component className={cn(textVariantClass[variant], className)} {...props}>
      {children}
    </Component>
  )
}
