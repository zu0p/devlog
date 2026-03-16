import { DialogVariant } from "@/ds/tokens/dialog/variants"
import { ButtonProps } from "../../atoms/button/Button.types"

interface Button extends Omit<Partial<ButtonProps>, "onClick"> {
  text: string
  onClick: () => void
}

export interface DialogProps {
  message: string
  variant: DialogVariant
  buttons?: Button[]
}
