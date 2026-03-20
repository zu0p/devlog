import { LabelSize } from "@/ds/tokens/label/sizes"
import { LabelVariant } from "@/ds/tokens/label/variants"
import { LabelHTMLAttributes } from "react"

export type LabelProps = {
  size?: LabelSize
  variant?: LabelVariant
} & LabelHTMLAttributes<HTMLLabelElement>
