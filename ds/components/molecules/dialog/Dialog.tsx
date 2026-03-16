import { cn } from "@/lib/utils"
import { DialogProps } from "./Dialog.types"
import { dialogVariantClass } from "@/ds/tokens/dialog/variants"
import Button from "../../atoms/button/Button"

const Dialog: React.FC<DialogProps> = ({ message, variant, buttons }) => {
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

  return (
    <div className={cn(baseStyles, dialogVariantClass[variant])}>
      <span className={`text-lg font-medium whitespace-pre-line`}>
        {message}
      </span>
      <div className="mt-4 flex justify-between gap-x-2">
        {buttons &&
          buttons.length > 0 &&
          buttons.map((button) => (
            <Button
              key={`dialog-button-${button.text}`}
              variant={button?.variant ? button.variant : "outline"}
              size={button?.size ? button.size : "sm"}
              isFull={button?.isFull ? button.isFull : true}
              className={button?.className}
              onClick={button.onClick}
            >
              {button.text}
            </Button>
          ))}
      </div>
    </div>
  )
}

export default Dialog
