"use client"

import { cn } from "@/lib/utils"
import { Loader2 } from "lucide-react"
import { SpinnerProps } from "./Spinner.types"
import { spinnerSizeClass } from "@/ds/tokens/spinner/sizes"
import { spinnerVariantClass } from "@/ds/tokens/spinner/variants"

const Spinner = ({
  size = "default",
  variant = "default",
  className,
}: SpinnerProps) => {
  return (
    <Loader2
      className={cn(
        "animate-spin",
        spinnerSizeClass[size],
        spinnerVariantClass[variant],
        className
      )}
    />
  )
}

export default Spinner
