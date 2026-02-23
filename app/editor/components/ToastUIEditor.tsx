"use client"

import "@toast-ui/editor/dist/toastui-editor.css"
import "@toast-ui/editor/dist/theme/toastui-editor-dark.css"
import dynamic from "next/dynamic"
import { useGeneratedArticle } from "@/stores/generatedArticle.store"
import { EditorProps } from "../types"
import Prism from "prismjs"
import "prismjs/themes/prism.css"
import "@toast-ui/editor-plugin-code-syntax-highlight/dist/toastui-editor-plugin-code-syntax-highlight.css"
import codeSyntaxHighlight from "@toast-ui/editor-plugin-code-syntax-highlight"
import { useMediaQuery } from "@/hooks/useMediaQuery"
import { useTheme } from "next-themes"
import { useEffect, useState } from "react"

const Editor = dynamic(
  () => import("@toast-ui/react-editor").then((mod) => mod.Editor),
  { ssr: false }
)

const ToastUIEditor = ({ editorRef }: EditorProps) => {
  const { content } = useGeneratedArticle()
  const isDesktop = useMediaQuery("(min-width: 768px)")
  const { resolvedTheme } = useTheme()
  const [mountKey, setMountKey] = useState("desktop+light")
  useEffect(() => {
    const viewer = isDesktop ? "desktop" : "mobile"
    setMountKey(`${viewer}+${resolvedTheme}`)
  }, [isDesktop, resolvedTheme])

  return (
    <div id="editor">
      <Editor
        key={mountKey}
        height="500px"
        ref={editorRef}
        initialValue={content || " "}
        initialEditType="markdown"
        previewStyle={isDesktop ? "vertical" : "tab"}
        hideModeSwitch={true}
        theme={resolvedTheme === "dark" ? "dark" : undefined}
        usageStatistics={false}
        useCommandShortcut={true}
        plugins={[[codeSyntaxHighlight, { highlighter: Prism }]]}
      />
    </div>
  )
}

export default ToastUIEditor
