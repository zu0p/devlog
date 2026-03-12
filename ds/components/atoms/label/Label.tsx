import { labelSizeClass } from "@/ds/tokens/label/sizes"
import { labelVariantClass } from "@/ds/tokens/label/variants"
import { LabelProps } from "./Label.types"
import { cn } from "@/lib/utils"

const Label = ({
  htmlFor,
  size = "sm",
  variant = "default",
  className,
  ...props
}: LabelProps) => {
  return (
    <label
      htmlFor={htmlFor}
      className={cn(
        labelSizeClass[size],
        labelVariantClass[variant],
        className
      )}
      {...props}
    />
  )
}

export default Label
