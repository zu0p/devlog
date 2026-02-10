import { PromptStyle } from "@/logics/prompt"
import { PromptParams } from "@/logics/prompt/types"

export interface GenerateInputsState extends PromptParams {
  style: PromptStyle
}

export interface GenerateInputsProps {
  value: GenerateInputsState
  onChange: <K extends keyof GenerateInputsState>(
    key: K,
    value: GenerateInputsState[K]
  ) => void
}

export interface GenerateActionsProps {
  onClick: () => void
  disabled?: boolean
}

export interface GenerateResultProps {
  value: string
  onChange: (value: string) => void
}
