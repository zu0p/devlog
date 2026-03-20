import { InputProps } from "@/ds/components/atoms/input/Input.types"
import { LabelProps } from "@/ds/components/atoms/label/Label.types"

export type LabeledInputProps = {
  label: string
  inputId: string
  labelProps?: Omit<LabelProps, "children" | "htmlFor">
  className?: string
} & InputProps
