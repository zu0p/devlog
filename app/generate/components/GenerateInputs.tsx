import { GenerateInputsProps } from "../types"
import { useState, KeyboardEvent } from "react"
import { POST_TYPES } from "../consts"
import { CircleX } from "lucide-react"
import Button from "@/ds/components/atoms/button/Button"
import LabeledInput from "@/ds/components/molecules/labeled-input/LabeledInput"

const GenerateInputs = ({ value, onChange }: GenerateInputsProps) => {
  const [keywordInput, setKeywordInput] = useState("")

  const handleKeywordKeyDown = (e: KeyboardEvent<HTMLInputElement>) => {
    if (e.nativeEvent.isComposing) {
      return
    }

    if (e.key === "Enter" && keywordInput.trim()) {
      e.preventDefault()
      if (!value.keywords.includes(keywordInput.trim())) {
        onChange("keywords", [...value.keywords, keywordInput.trim()])
      }
      setKeywordInput("")
    }
  }

  const removeKeyword = (index: number) => {
    onChange(
      "keywords",
      value.keywords.filter((_, i) => i !== index)
    )
  }

  return (
    <>
      <LabeledInput
        label="주제"
        inputId="topic"
        type="text"
        value={value.title}
        onChange={(e) => onChange("title", e.target.value)}
        placeholder="예: React의 useEffect 훅 완벽 가이드"
        required
      />

      <div>
        <LabeledInput
          label="키워드 (Enter로 추가)"
          inputId="keywords"
          type="text"
          value={keywordInput}
          onChange={(e) => setKeywordInput(e.target.value)}
          onKeyDown={handleKeywordKeyDown}
          placeholder="예: React, Hooks, useEffect"
        />

        {value.keywords.length > 0 && (
          <div className="mt-3 flex flex-wrap gap-2">
            {value.keywords.map((keyword, index) => (
              <span
                key={index}
                className="inline-flex items-center gap-1 rounded-full bg-blue-100 px-3 py-1 text-sm text-blue-800 dark:bg-blue-900 dark:text-blue-200"
              >
                {keyword}
                <Button
                  type="button"
                  variant="ghost"
                  size="icon-sm"
                  onClick={() => removeKeyword(index)}
                  className="text-blue-800 transition-colors hover:bg-blue-200 dark:text-blue-200 dark:hover:bg-blue-800"
                >
                  <CircleX className="h-3.75 w-3.75" />
                </Button>
              </span>
            ))}
          </div>
        )}
      </div>

      <div>
        <label className="mb-2 block text-sm font-medium text-gray-700 dark:text-gray-300">
          글 유형
        </label>
        <div className="grid grid-rows-3 gap-3 md:grid-cols-3">
          {POST_TYPES.map(({ type, label }) => (
            <Button
              key={type}
              type="button"
              size="lg"
              variant="outline"
              onClick={() => onChange("style", type)}
              className={`${
                value.style === type
                  ? "border-blue-600 bg-blue-50 text-blue-600 hover:border-blue-600 dark:border-blue-600 dark:bg-blue-900/20 dark:text-blue-400 dark:hover:border-blue-600"
                  : "border-gray-300 bg-white text-gray-700 hover:border-gray-400 dark:border-gray-700 dark:bg-gray-800 dark:text-gray-300 dark:hover:border-gray-600"
              }`}
            >
              <span className="text-sm font-medium">{label}</span>
            </Button>
          ))}
        </div>
      </div>
    </>
  )
}

export default GenerateInputs
