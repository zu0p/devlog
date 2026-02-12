import { LabelSize } from "@/ds/tokens/label/sizes"
import { LabelHTMLAttributes } from "react"

export type LabelProps = {
  size: LabelSize
} & LabelHTMLAttributes<HTMLLabelElement>
