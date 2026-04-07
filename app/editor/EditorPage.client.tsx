"use client"
import { useGeneratedArticle } from "@/stores/generatedArticle.store"
import { useRef } from "react"
import ErrorPage from "./error"
import ExportActions from "./components/ExportActions"
import { Editor as ToastEditorType } from "@toast-ui/react-editor"
import dynamic from "next/dynamic"
import GeneratedPreview from "@/ds/components/organisms/preview/GeneratedPreview"
import { clipboardCopy } from "@/lib/exportDocuments"

const ToastUIEditor = dynamic(() => import("./components/ToastUIEditor"), {
  ssr: false,
})

const EditorPage = () => {
  const { isLoading, error } = useGeneratedArticle()
  const editorRef = useRef<ToastEditorType>(null)
  const { metaDescription, hashtags } = useGeneratedArticle()

  const handleCopyMetaDescription = () => {
    if (!metaDescription) return

    clipboardCopy(metaDescription, "SEO Meta Description 복사 완료!")
  }

  const handleCopyHashTags = () => {
    if (!hashtags) return

    const joinedHashtags = hashtags.map((hashtag) => `#${hashtag}`).join(" ")
    clipboardCopy(joinedHashtags, "해시태그 복사 완료!")
  }

  if (error) return <ErrorPage />

  return (
    <article className="m-3 space-y-4 md:m-0">
      <GeneratedPreview
        isLoading={isLoading}
        title={"생성된 블로그 글"}
        content={<ToastUIEditor editorRef={editorRef} />}
        metaDescription={{
          click: handleCopyMetaDescription,
          text: metaDescription!,
        }}
        hashtags={{
          click: handleCopyHashTags,
          array: hashtags!,
        }}
      />
      {!isLoading && <ExportActions editorRef={editorRef} />}
    </article>
  )
}

export default EditorPage
