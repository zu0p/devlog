import { cn } from "@/lib/utils"
import {
  DialogButtonProps,
  DialogLabelProps,
  DialogProps,
  DialogTitleProps,
} from "./Dialog.types"
import { dialogVariantClass } from "@/ds/tokens/dialog/variants"
import Button from "../../atoms/button/Button"
import { createPortal } from "react-dom"

const DialogTitle = ({ children, className }: DialogTitleProps) => (
  <div className={cn("mb-2 text-lg font-bold", className)}>{children}</div>
)

const DialogLabel = ({ children, className }: DialogLabelProps) => (
  <div className={cn("mb-4 text-base", className)}>{children}</div>
)

const DialogButton = ({ buttons }: DialogButtonProps) => (
  <div className="flex w-full justify-between gap-2">
    {buttons?.map((button, index) => (
      <Button
        key={`${button.text}-${index}`}
        variant={button?.variant || "outline"}
        size={button?.size || "sm"}
        isFull={button?.isFull ?? true}
        className={cn(button?.className)}
        onClick={button.onClick}
      >
        {button.text}
      </Button>
    ))}
  </div>
)

const DialogMain = ({
  children,
  variant = "default",
  className,
  onClose,
}: DialogProps) => {
  const baseStyles = `
    rounded-lg
    cursor-default
    fixed left-1/2 -translate-x-1/2 top-10
    w-90 px-6 py-6
    z-100
    shadow-md
    flex flex-col
    text-center content-center
    animate-slide-up
  `

  return createPortal(
    <div
      role="dialog"
      aria-modal="true"
      className="fixed inset-0 z-100"
      id="dialog-backdrop"
      onClick={onClose}
    >
      <div
        className={cn(baseStyles, dialogVariantClass[variant], className)}
        onClick={(e) => e.stopPropagation()}
      >
        {children && children}
      </div>
    </div>,
    document.body
  )
}

const Dialog = Object.assign(DialogMain, {
  Title: DialogTitle,
  Label: DialogLabel,
  Button: DialogButton,
})

export default Dialog
