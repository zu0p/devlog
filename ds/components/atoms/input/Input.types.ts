import { InputSize } from "@/ds/tokens/input/sizes"
import { InputHTMLAttributes } from "react"

export type InputProps = {
  size: InputSize
} & Omit<InputHTMLAttributes<HTMLInputElement>, "size">
