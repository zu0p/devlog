"use client"
import GenerateActions from "@/app/generate/components/GenerateActions"
import GenerateInputs from "@/app/generate/components/GenerateInputs"
import { useState } from "react"
import { GenerateInputsState, GenerateInputsProps } from "./types"
import { useGenerate } from "@/hooks/generate/useGenerate"
import GenerateResult from "./components/GenerateResult"

const GeneratePage = () => {
  const [inputs, setInputs] = useState<GenerateInputsState>({
    title: "",
    keywords: [],
    style: "tutorial",
  })

  const handleChange: GenerateInputsProps["onChange"] = <
    K extends keyof GenerateInputsState,
  >(
    key: K,
    value: GenerateInputsState[K]
  ) => {
    setInputs((prev) => ({
      ...prev,
      [key]: value,
    }))
  }

  const generateMutation = useGenerate()

  return (
    <div className="flex flex-col">
      <GenerateInputs value={inputs} onChange={handleChange} />
      <GenerateActions
        onMutation={() => generateMutation.mutateAsync(inputs)}
      />

      {generateMutation?.data && (
        <GenerateResult data={generateMutation.data} />
      )}
    </div>
  )
}
export default GeneratePage
