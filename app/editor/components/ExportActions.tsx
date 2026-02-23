import { useState } from "react"
import { useGeneratedArticle } from "@/stores/generatedArticle.store"
import { EditorProps } from "../types"
import { exportDocuments } from "@/lib/exportDocuments"
import { useRouter } from "next/navigation"

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
    window.alert("저장 완료!")
  }

  const handleCopy = () => {
    if (!isSaveUpdate()) {
      window.alert("변경사항을 먼저 저장하세요!")
      return
    }
    const markdown = editorRef.current!.getInstance().getMarkdown()
    navigator.clipboard.writeText(markdown)
  }

  const handleDownloadMd = () => {
    if (!isSaveUpdate()) {
      window.alert("변경사항을 먼저 저장하세요!")
      return
    }
    const markdown = editorRef.current!.getInstance().getMarkdown()
    exportDocuments("markdown", markdown)
  }

  const handleDownloadHtml = () => {
    if (!isSaveUpdate()) {
      window.alert("변경사항을 먼저 저장하세요!")
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
        className="flex flex-1 items-center gap-2 rounded-lg bg-amber-300 px-4 py-2 text-gray-700 transition-colors hover:bg-gray-300 md:flex-none dark:bg-gray-700 dark:text-gray-300 dark:hover:bg-gray-600"
      >
        <svg
          className="flex w-full justify-center md:hidden"
          xmlns="http://www.w3.org/2000/svg"
          width="20"
          height="20"
          viewBox="0 0 24 24"
          fill="none"
          stroke="#fff"
          stroke-width="2"
          stroke-linecap="round"
          stroke-linejoin="round"
        >
          <path d="M7 7h-1a2 2 0 0 0 -2 2v9a2 2 0 0 0 2 2h9a2 2 0 0 0 2 -2v-1" />
          <path d="M20.385 6.585a2.1 2.1 0 0 0 -2.97 -2.97l-8.415 8.385v3h3l8.385 -8.415z" />
          <path d="M16 5l3 3" />
        </svg>

        <span className="hidden md:inline">변경사항 저장</span>
      </button>
      <button
        onClick={handleReset}
        className="flex flex-1 items-center gap-2 rounded-lg bg-gray-200 px-4 py-2 text-gray-700 transition-colors hover:bg-gray-300 md:flex-none dark:bg-gray-700 dark:text-gray-300 dark:hover:bg-gray-600"
      >
        <svg
          className="flex w-full justify-center md:hidden"
          xmlns="http://www.w3.org/2000/svg"
          width="20"
          height="20"
          viewBox="0 0 24 24"
          fill="none"
          stroke="#fff"
          stroke-width="2"
          stroke-linecap="round"
          stroke-linejoin="round"
        >
          <path d="M20 11a8.1 8.1 0 0 0 -15.5 -2m-.5 -4v4h4" />
          <path d="M4 13a8.1 8.1 0 0 0 15.5 2m.5 4v-4h-4" />
        </svg>
        <span className="hidden md:inline">초기화</span>
      </button>

      <div className="relative flex flex-1 items-center gap-2 rounded-lg bg-blue-600 px-4 py-2 text-white transition-colors hover:bg-blue-700 md:flex-none">
        <button
          onClick={() => setShowDownloadMenu(!showDownloadMenu)}
          className="flex w-full justify-center"
        >
          <svg
            className="md:hidden"
            xmlns="http://www.w3.org/2000/svg"
            width="20"
            height="20"
            viewBox="0 0 24 24"
            fill="none"
            stroke="#fff"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
          >
            <path d="M4 20l16 0" />
            <path d="M12 14l0 -10" />
            <path d="M12 14l4 -4" />
            <path d="M12 14l-4 -4" />
          </svg>

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
        className="flex flex-1 items-center gap-2 rounded-lg bg-green-600 px-4 py-2 text-white transition-colors hover:bg-green-700 md:flex-none"
      >
        <svg
          className="flex w-full justify-center md:hidden"
          xmlns="http://www.w3.org/2000/svg"
          width="20"
          height="20"
          viewBox="0 0 24 24"
          fill="none"
          stroke="#fff"
          stroke-width="2"
          stroke-linecap="round"
          stroke-linejoin="round"
        >
          <path d="M7 7m0 2.667a2.667 2.667 0 0 1 2.667 -2.667h8.666a2.667 2.667 0 0 1 2.667 2.667v8.666a2.667 2.667 0 0 1 -2.667 2.667h-8.666a2.667 2.667 0 0 1 -2.667 -2.667z" />
          <path d="M4.012 16.737a2.005 2.005 0 0 1 -1.012 -1.737v-10c0 -1.1 .9 -2 2 -2h10c.75 0 1.158 .385 1.5 1" />
        </svg>
        <span className="hidden md:inline">복사</span>
      </button>
    </div>
  )
}

export default ExportActions
