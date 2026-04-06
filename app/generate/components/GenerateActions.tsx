import Button from "@/ds/components/atoms/button/Button"
import { GenerateActionsProps } from "../types"

const GenerateActions = ({ disabled }: GenerateActionsProps) => {
  return (
    <Button type="submit" isFull disabled={disabled} size="lg">
      생성하기
    </Button>
  )
}

export default GenerateActions
