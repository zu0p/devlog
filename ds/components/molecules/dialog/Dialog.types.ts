import { DialogVariant } from "@/ds/tokens/dialog/variants"
import { ButtonProps } from "../../atoms/button/Button.types"
import { ReactNode } from "react"

export interface DialogButton extends Omit<Partial<ButtonProps>, "onClick"> {
  text: string
  onClick: () => void
}

export interface DialogProps {
  children?: ReactNode
  variant?: DialogVariant
  className?: string
  onClose: () => void
}

export interface DialogTitleProps {
  children: ReactNode
  className?: string
}

export interface DialogLabelProps {
  children: ReactNode
  className?: string
}

export interface DialogButtonProps {
  buttons: DialogButton[]
}
