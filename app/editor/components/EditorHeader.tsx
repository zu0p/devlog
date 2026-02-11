import { EditorHeaderProps } from "../types"

const EditorHeader = ({ isPreview, setIsPreview }: EditorHeaderProps) => {
  return (
    <div className="mt-8 flex flex-wrap items-center justify-between gap-3">
      <h2 className="text-2xl font-bold text-gray-900 dark:text-white">
        생성된 블로그 글
      </h2>
      <div className="flex items-center gap-2">
        <button
          onClick={() => setIsPreview(!isPreview)}
          className="flex items-center gap-2 rounded-lg bg-gray-200 px-4 py-2 text-gray-700 transition-colors hover:bg-gray-300 dark:bg-gray-700 dark:text-gray-300 dark:hover:bg-gray-600"
        >
          {isPreview ? (
            <>
              <span className="hidden sm:inline">편집</span>
            </>
          ) : (
            <>
              <span className="hidden sm:inline">미리보기</span>
            </>
          )}
        </button>
      </div>
    </div>
  )
}

export default EditorHeader
