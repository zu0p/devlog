"use client"
import { useGeneratedArticle } from "@/stores/generatedArticle.store"
import { useState } from "react"
import LoadingPage from "./loading"
import ErrorPage from "./error"
import EditorHeader from "./components/EditorHeader"
import Editor from "./components/Editor"
import ExportActions from "./components/ExportActions"

const EditorPage = () => {
  const { isLoading, error } = useGeneratedArticle()
  const [isPreview, setIsPreview] = useState(false)

  if (isLoading) return <LoadingPage />
  if (error) return <ErrorPage />

  return (
    <div className="space-y-4">
      <EditorHeader isPreview={isPreview} setIsPreview={setIsPreview} />
      <Editor isPreview={isPreview} />
      <ExportActions />
    </div>
  )
}

export default EditorPage
