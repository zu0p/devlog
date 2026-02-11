import { useGeneratedArticle } from "@/stores/generatedArticle.store"
import { EditorProps } from "../types"

const Editor = ({ isPreview }: EditorProps) => {
  const { content, setGeneratedArticle } = useGeneratedArticle()

  return (
    <div className="overflow-hidden rounded-lg border border-gray-200 bg-white dark:border-gray-700 dark:bg-gray-800">
      {content && (
        <>
          {isPreview ? (
            <div className="prose dark:prose-invert prose-pre:bg-gray-100 dark:prose-pre:bg-gray-900 max-w-none p-6">
              <textarea
                style={{
                  width: "100%",
                  height: "400px",
                }}
                value={content}
                onChange={(e) => {
                  setGeneratedArticle(e.target.value)
                }}
              />
            </div>
          ) : (
            <textarea
              value={content}
              onChange={(e) => setGeneratedArticle(e.target.value)}
              className="h-125 w-full resize-none bg-transparent p-6 font-mono text-sm text-gray-900 focus:outline-none dark:text-white"
              placeholder="마크다운 내용이 여기에 표시됩니다..."
            />
          )}
        </>
      )}
    </div>
  )
}

export default Editor
