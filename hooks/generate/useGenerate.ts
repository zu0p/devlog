import { useMutation } from "@tanstack/react-query"
import { generateArticle } from "@/services/generate"
import { GenerateContract } from "@/services/generate.contract"

export const useGenerate = () => {
  return useMutation({
    mutationFn: (payload: GenerateContract["request"]) =>
      generateArticle(payload),
  })
}
