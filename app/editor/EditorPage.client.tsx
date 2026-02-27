"use client"
import { useGeneratedArticle } from "@/stores/generatedArticle.store"
import { useRef } from "react"
import LoadingPage from "./loading"
import ErrorPage from "./error"
import EditorHeader from "./components/EditorHeader"
import ExportActions from "./components/ExportActions"
import { Editor as ToastEditorType } from "@toast-ui/react-editor"
import dynamic from "next/dynamic"
import MetaData from "./components/MetaData"

const ToastUIEditor = dynamic(() => import("./components/ToastUIEditor"), {
  ssr: false,
})

const EditorPage = () => {
  const { isLoading, error } = useGeneratedArticle()
  const editorRef = useRef<ToastEditorType>(null)

  if (isLoading) return <LoadingPage />
  if (error) return <ErrorPage />

  return (
    <div className="m-3 space-y-4 md:m-0">
      <EditorHeader />
      <MetaData />
      <ToastUIEditor editorRef={editorRef} />
      <ExportActions editorRef={editorRef} />
    </div>
  )
}

export default EditorPage
