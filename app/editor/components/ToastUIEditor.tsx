"use client"

import "@toast-ui/editor/dist/toastui-editor.css"
import dynamic from "next/dynamic"
import { useGeneratedArticle } from "@/stores/generatedArticle.store"
import { EditorProps } from "../types"
import Prism from "prismjs"
import "prismjs/themes/prism.css"
import "@toast-ui/editor-plugin-code-syntax-highlight/dist/toastui-editor-plugin-code-syntax-highlight.css"
import codeSyntaxHighlight from "@toast-ui/editor-plugin-code-syntax-highlight"
import { useMediaQuery } from "@/hooks/useMediaQuery"

const Editor = dynamic(
  () => import("@toast-ui/react-editor").then((mod) => mod.Editor),
  { ssr: false }
)

const ToastUIEditor = ({ editorRef }: EditorProps) => {
  const { content } = useGeneratedArticle()
  const isDesktop = useMediaQuery("(min-width: 768px)")

  return (
    <div id="editor">
      <Editor
        key={isDesktop ? "desktop" : "mobile"}
        height="500px"
        ref={editorRef}
        initialValue={content || " "}
        initialEditType="markdown"
        previewStyle={isDesktop ? "vertical" : "tab"}
        hideModeSwitch={true}
        theme={""}
        usageStatistics={false}
        useCommandShortcut={true}
        plugins={[[codeSyntaxHighlight, { highlighter: Prism }]]}
      />
    </div>
  )
}

export default ToastUIEditor
