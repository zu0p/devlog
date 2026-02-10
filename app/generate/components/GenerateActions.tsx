import { GenerateActionsProps } from "../types"

const GenerateActions = ({ onClick, disabled }: GenerateActionsProps) => {
  return (
    <button
      className="flex w-full items-center justify-center gap-2 rounded-lg bg-blue-600 px-6 py-3 font-medium text-white transition-colors hover:bg-blue-700 disabled:cursor-not-allowed disabled:opacity-50"
      disabled={disabled}
      onClick={onClick}
    >
      생성하기
    </button>
  )
}

export default GenerateActions
