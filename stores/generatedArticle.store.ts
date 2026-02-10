import { create } from "zustand"

type GeneratedArticleState = {
  content: string | null
  isLoading: boolean
  error: Error | null
  setGeneratedArticle: (content: string | null) => void
  setLoading: (loading: boolean) => void
  setError: (error: Error | null) => void
}

export const useGeneratedArticle = create<GeneratedArticleState>((set) => ({
  content: null,
  isLoading: false,
  error: null,
  setGeneratedArticle: (content) => set({ content }),
  setLoading: (loading) => set({ isLoading: loading }),
  setError: (error) => set({ error }),
}))
