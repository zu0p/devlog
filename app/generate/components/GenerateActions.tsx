import Button from "@/ds/components/atoms/button/Button"
import { GenerateActionsProps } from "../types"

const GenerateActions = ({ onClick, disabled }: GenerateActionsProps) => {
  return (
    <Button onClick={onClick} isFull disabled={disabled} size="lg">
      생성하기
    </Button>
  )
}

export default GenerateActions
