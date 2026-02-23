"use client"
import GenerateActions from "@/app/generate/components/GenerateActions"
import GenerateInputs from "@/app/generate/components/GenerateInputs"
import { useState } from "react"
import { GenerateInputsState, GenerateInputsProps } from "./types"
import { useGenerate } from "@/hooks/generate/useGenerate"
import { useRouter } from "next/navigation"
import GenerateTitle from "./components/GenerateTitle"

const GeneratePage = () => {
  const [inputs, setInputs] = useState<GenerateInputsState>({
    title: "",
    keywords: [],
    style: "tutorial",
  })
  const generateMutation = useGenerate()

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

  const router = useRouter()

  const handleGenerate = () => {
    generateMutation.mutate(inputs)
    router.push("/editor")
  }

  return (
    <div className="mx-auto h-full max-w-2xl">
      <GenerateTitle />
      <div className="m-3 space-y-6 md:m-0">
        <GenerateInputs value={inputs} onChange={handleChange} />
        <GenerateActions
          disabled={!inputs.title.length || generateMutation.isPending}
          onClick={handleGenerate}
        />
      </div>
    </div>
  )
}

export default GeneratePage
