import { cn } from "@/lib/utils"
import { InputProps } from "./Input.types"
import { inputSizeClass } from "@/ds/tokens/input/sizes"
import { inputVariantClass } from "@/ds/tokens/input/variants"

const Input = ({
  size = "lg",
  variant = "default",
  className,
  ...props
}: InputProps) => {
  const baseStyles =
    "w-full rounded-lg outline-none transition-colors disabled:cursor-not-allowed disabled:opacity-50"

  return (
    <input
      className={cn(
        baseStyles,
        inputSizeClass[size],
        inputVariantClass[variant],
        className
      )}
      {...props}
    />
  )
}

export default Input
