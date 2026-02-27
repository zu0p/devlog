import { useState } from "react"
import { useGeneratedArticle } from "@/stores/generatedArticle.store"
import { EditorProps } from "../types"
import { clipboardCopy, exportDocuments } from "@/lib/exportDocuments"
import { useRouter } from "next/navigation"
import { ArrowDownToLine, Copy, FileDown, RefreshCcw } from "lucide-react"
import { toast } from "react-toastify"

const ExportActions = ({ editorRef }: EditorProps) => {
  const [showDownloadMenu, setShowDownloadMenu] = useState(false)
  const { content, setGeneratedArticle } = useGeneratedArticle()

  const isSaveUpdate = () => {
    const markdown = editorRef.current?.getInstance()?.getMarkdown()
    return content === markdown
  }

  const handleSave = () => {
    const markdown = editorRef.current?.getInstance()?.getMarkdown()
    setGeneratedArticle(markdown)
    toast.success("변경사항이 저장되었습니다.")
  }

  const handleCopy = () => {
    if (!isSaveUpdate()) {
      toast.warn("변경사항을 먼저 저장하세요!")
      return
    }
    const markdown = editorRef.current!.getInstance().getMarkdown()
    clipboardCopy(markdown, "클립보드 복사 완료")
  }

  const handleDownloadMd = () => {
    if (!isSaveUpdate()) {
      toast.warn("변경사항을 먼저 저장하세요!")
      return
    }
    const markdown = editorRef.current!.getInstance().getMarkdown()
    exportDocuments("markdown", markdown)
  }

  const handleDownloadHtml = () => {
    if (!isSaveUpdate()) {
      toast.warn("변경사항을 먼저 저장하세요!")
      return
    }
    const html = editorRef.current!.getInstance().getHTML()
    exportDocuments("html", html)
  }

  const router = useRouter()
  const handleReset = () => {
    if (
      confirm("초기화하면 생성된 글이 사라집니다. 정말로 초기화하시겠습니까?")
    ) {
      router.push("/generate")
    }
  }
  return (
    <div className="flex flex-wrap items-center justify-items-center gap-3">
      <button
        onClick={handleSave}
        className="flex flex-1 items-center justify-center gap-2 rounded-lg bg-amber-300 px-4 py-2 text-gray-700 transition-colors hover:bg-gray-300 md:flex-none dark:text-gray-300 dark:hover:bg-gray-600"
      >
        <ArrowDownToLine className="flex h-5 w-5 text-white md:hidden" />
        <span className="hidden md:inline">변경사항 저장</span>
      </button>
      <button
        onClick={handleReset}
        className="flex flex-1 items-center justify-center gap-2 rounded-lg bg-gray-200 px-4 py-2 text-gray-700 transition-colors hover:bg-gray-300 md:flex-none dark:bg-gray-700 dark:text-gray-300 dark:hover:bg-gray-600"
      >
        <RefreshCcw className="flex h-5 w-5 text-white md:hidden" />
        <span className="hidden md:inline">초기화</span>
      </button>

      <div className="relative flex flex-1 items-center gap-2 rounded-lg bg-blue-600 px-4 py-2 text-white transition-colors hover:bg-blue-700 md:flex-none">
        <button
          onClick={() => setShowDownloadMenu(!showDownloadMenu)}
          className="flex w-full justify-center"
        >
          <FileDown className="flex h-5 w-5 text-white md:hidden" />
          <span className="hidden md:inline">다운로드</span>
        </button>

        {showDownloadMenu && (
          <>
            <div
              className="fixed inset-0 z-10"
              onClick={() => setShowDownloadMenu(false)}
            />
            <div className="absolute left-0 z-20 mt-2 w-40 overflow-hidden rounded-lg border border-gray-200 bg-white shadow-lg dark:border-gray-700 dark:bg-gray-800">
              <button
                onClick={handleDownloadMd}
                className="w-full px-4 py-2 text-left text-gray-700 transition-colors hover:bg-gray-100 dark:text-gray-300 dark:hover:bg-gray-700"
              >
                .md 파일
              </button>
              <button
                onClick={handleDownloadHtml}
                className="w-full px-4 py-2 text-left text-gray-700 transition-colors hover:bg-gray-100 dark:text-gray-300 dark:hover:bg-gray-700"
              >
                .html 파일
              </button>
            </div>
          </>
        )}
      </div>

      <button
        onClick={handleCopy}
        className="flex flex-1 items-center justify-center gap-2 rounded-lg bg-green-600 px-4 py-2 text-white transition-colors hover:bg-green-700 md:flex-none"
      >
        <Copy className="flex h-5 w-5 text-white md:hidden" />
        <span className="hidden md:inline">복사</span>
      </button>
    </div>
  )
}

export default ExportActions
