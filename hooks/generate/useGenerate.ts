import { useMutation } from "@tanstack/react-query"
import { generateArticle } from "@/services/generate"
import { GenerateContract } from "@/services/generate.contract"
import { useGeneratedArticle } from "@/stores/generatedArticle.store"

export const useGenerate = () => {
  const { setGeneratedArticle, setError, setLoading } = useGeneratedArticle()

  return useMutation({
    mutationFn: (payload: GenerateContract["request"]) =>
      generateArticle(payload),
    onSuccess: (data) => {
      const fullArticleContent = `${data.title}\n\n${data.content}`
      setGeneratedArticle(fullArticleContent)
    },
    onError: (error) => {
      setError(error as Error)
    },
    onMutate: () => {
      setLoading(true)
      setError(null)
    },
    onSettled: () => {
      setLoading(false)
    },
  })
}
