import { InputSize } from "@/ds/tokens/input/sizes"
import { InputVariant } from "@/ds/tokens/input/variants"
import { InputHTMLAttributes } from "react"

export type InputProps = {
  size?: InputSize
  variant?: InputVariant
} & Omit<InputHTMLAttributes<HTMLInputElement>, "size">
