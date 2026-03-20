import { useState } from "react"
import { useGeneratedArticle } from "@/stores/generatedArticle.store"
import { EditorProps } from "../types"
import { clipboardCopy, exportDocuments } from "@/lib/exportDocuments"
import { useRouter } from "next/navigation"
import { ArrowDownToLine, Copy, FileDown, RefreshCcw } from "lucide-react"
import { useToast } from "@/stores/toast.store"
import Button from "@/ds/components/atoms/button/Button"
import { useDialog } from "@/stores/dialog.store"

const ExportActions = ({ editorRef }: EditorProps) => {
  const [showDownloadMenu, setShowDownloadMenu] = useState(false)
  const { content, setGeneratedArticle } = useGeneratedArticle()
  const { showToast } = useToast()
  const { showDialog } = useDialog()

  const isSaveUpdate = () => {
    const markdown = editorRef.current?.getInstance()?.getMarkdown()
    return content === markdown
  }

  const handleSave = () => {
    const markdown = editorRef.current?.getInstance()?.getMarkdown()
    setGeneratedArticle(markdown)
    showToast({
      variant: "success",
      message: "변경사항 저장 완료!",
    })
  }

  const verificateSaveUpdate = () => {
    if (!isSaveUpdate()) {
      showToast({
        variant: "warning",
        message: "변경사항을 먼저 저장하세요!",
      })
      return false
    }
    return true
  }

  const handleCopy = () => {
    if (verificateSaveUpdate()) {
      const markdown = editorRef.current!.getInstance().getMarkdown()
      clipboardCopy(markdown, "클립보드 복사 완료")
    }
  }

  const handleDownloadMd = () => {
    if (verificateSaveUpdate()) {
      const markdown = editorRef.current!.getInstance().getMarkdown()
      exportDocuments("markdown", markdown)
    }
  }

  const handleDownloadHtml = () => {
    if (verificateSaveUpdate()) {
      const html = editorRef.current!.getInstance().getHTML()
      exportDocuments("html", html)
    }
  }

  const router = useRouter()
  const handleReset = () => {
    showDialog({
      message: `초기화하면 생성된 글이 사라집니다. 
      정말로 초기화하시겠습니까?`,
      variant: "destructive",
      buttons: [
        {
          text: "네",
          variant: "ghost",
          onClick: () => {
            router.push("/generate")
          },
        },
        {
          text: "아니요",
          variant: "ghost",
          onClick: () => {},
        },
      ],
    })
  }
  return (
    <div className="grid grid-cols-4 items-center gap-3">
      <Button variant="warning" size="sm" onClick={handleSave} isFull>
        <ArrowDownToLine className="flex h-5 w-5 text-white md:hidden" />
        <span className="hidden md:inline">변경사항 저장</span>
      </Button>

      <Button variant="secondary" size="sm" onClick={handleReset} isFull>
        <RefreshCcw className="flex h-5 w-5 text-white md:hidden" />
        <span className="hidden md:inline">초기화</span>
      </Button>

      <div className="relative">
        <Button
          size="sm"
          onClick={() => setShowDownloadMenu(!showDownloadMenu)}
          className="px-3"
          isFull
        >
          <FileDown className="flex h-5 w-5 text-white md:hidden" />
          <span className="hidden md:inline">다운로드</span>
        </Button>

        {showDownloadMenu && (
          <>
            <div
              className="fixed inset-0 z-10"
              onClick={() => setShowDownloadMenu(false)}
            />
            <div className="absolute left-0 z-20 mt-2 w-40 overflow-hidden rounded-lg border border-gray-200 bg-white shadow-lg dark:border-gray-700 dark:bg-gray-800">
              <Button
                variant="ghost"
                size="lg"
                isFull
                className="rounded-none"
                onClick={handleDownloadMd}
              >
                .md 파일
              </Button>
              <Button
                variant="ghost"
                size="lg"
                isFull
                className="rounded-none"
                onClick={handleDownloadHtml}
              >
                .html 파일
              </Button>
            </div>
          </>
        )}
      </div>

      <Button variant="success" size="sm" onClick={handleCopy} isFull>
        <Copy className="flex h-5 w-5 text-white md:hidden" />
        <span className="hidden md:inline">복사</span>
      </Button>
    </div>
  )
}

export default ExportActions
