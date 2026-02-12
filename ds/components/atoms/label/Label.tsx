import { labelSizeClass } from "@/ds/tokens/label/sizes"
import { LabelProps } from "./Label.types"
import { cn } from "@/lib/utils"

const Label = ({ htmlFor, size, className, ...props }: LabelProps) => {
  return (
    <label
      htmlFor={htmlFor}
      className={cn(
        "flex items-center gap-2 text-sm leading-none font-medium select-none group-data-[disabled=true]:pointer-events-none group-data-[disabled=true]:opacity-50 peer-disabled:cursor-not-allowed peer-disabled:opacity-50",
        labelSizeClass[size],
        className
      )}
      {...props}
    />
  )
}

export default Label
