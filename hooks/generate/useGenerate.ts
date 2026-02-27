import { useMutation } from "@tanstack/react-query"
import { generateArticle } from "@/services/generate"
import { GenerateContract } from "@/services/generate.contract"
import { useGeneratedArticle } from "@/stores/generatedArticle.store"

export const useGenerate = () => {
  const {
    setGeneratedArticle,
    setGeneratedMetaDescription,
    setGeneratedHashtags,
    setError,
    setLoading,
  } = useGeneratedArticle()

  return useMutation({
    mutationFn: (payload: GenerateContract["request"]) =>
      generateArticle(payload),
    retry: false,
    onSuccess: (data) => {
      const fullArticleContent = `# ${data.title}\n\n${data.content}`
      setGeneratedArticle(fullArticleContent)
      setGeneratedHashtags(data.hashtags)
      setGeneratedMetaDescription(data.metaDescription)
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
