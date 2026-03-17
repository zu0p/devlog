import { ButtonSize } from "@/ds/tokens/button/sizes"
import { ButtonVariant } from "@/ds/tokens/button/variants"
import React from "react"

export type ButtonProps = {
  variant?: ButtonVariant
  size?: ButtonSize
  isFull?: boolean
} & React.ComponentProps<"button">
