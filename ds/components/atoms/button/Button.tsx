import { cn } from "@/lib/utils"
import { ButtonProps } from "./Button.types"
import { buttonSizeClass } from "@/ds/tokens/button/sizes"
import { buttonVariantClass } from "@/ds/tokens/button/variants"

const Button = ({
  className,
  variant = "default",
  size = "default",
  isFull = false,
  children,
  onClick,
  ...props
}: ButtonProps) => {
  return (
    <button
      onClick={onClick}
      className={cn(
        "flex cursor-pointer items-center justify-center disabled:cursor-not-allowed disabled:opacity-50",
        isFull ? "w-full" : "",
        buttonSizeClass[size],
        buttonVariantClass[variant],
        className
      )}
      {...props}
    >
      {children}
    </button>
  )
}

export default Button
