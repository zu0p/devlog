import Input from "@/ds/components/atoms/input/Input"
import Label from "@/ds/components/atoms/label/Label"
import { LabeledInputProps } from "./LabeledInput.types"
import { cn } from "@/lib/utils"

const LabeledInput = ({
  label,
  inputId,
  labelProps,
  className,
  ...inputProps
}: LabeledInputProps) => {
  return (
    <div className={cn("flex w-full flex-col gap-1.5", className)}>
      <Label htmlFor={inputId} {...labelProps}>
        {label}
      </Label>
      <Input id={inputId} {...inputProps} />
    </div>
  )
}

export default LabeledInput
