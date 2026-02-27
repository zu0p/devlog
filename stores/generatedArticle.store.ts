import { create } from "zustand"

type GeneratedArticleState = {
  content: string | null
  hashtags: string[] | null
  metaDescription: string | null
  isLoading: boolean
  error: Error | null
  setGeneratedArticle: (content: string | null) => void
  setGeneratedHashtags: (hashtags: string[] | null) => void
  setGeneratedMetaDescription: (metaDescription: string | null) => void
  setLoading: (loading: boolean) => void
  setError: (error: Error | null) => void
}

export const useGeneratedArticle = create<GeneratedArticleState>((set) => ({
  content: null,
  hashtags: null,
  metaDescription: null,
  isLoading: false,
  error: null,
  setGeneratedArticle: (content) => set({ content }),
  setGeneratedHashtags: (hashtags) => set({ hashtags }),
  setGeneratedMetaDescription: (metaDescription) => set({ metaDescription }),
  setLoading: (loading) => set({ isLoading: loading }),
  setError: (error) => set({ error }),
}))
