import { useState } from "react"

const ExportActions = () => {
  const [showDownloadMenu, setShowDownloadMenu] = useState(false)

  const handleCopy = async () => {}

  const handleDownloadMd = () => {}

  const handleDownloadHtml = () => {}

  const handleReset = () => {}
  return (
    <div className="flex flex-wrap items-center gap-3">
      <button
        onClick={handleReset}
        className="flex items-center gap-2 rounded-lg bg-gray-200 px-4 py-2 text-gray-700 transition-colors hover:bg-gray-300 dark:bg-gray-700 dark:text-gray-300 dark:hover:bg-gray-600"
      >
        초기화
      </button>

      <div className="relative">
        <button
          onClick={() => setShowDownloadMenu(!showDownloadMenu)}
          className="flex items-center gap-2 rounded-lg bg-blue-600 px-4 py-2 text-white transition-colors hover:bg-blue-700"
        >
          다운로드
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
        className="flex items-center gap-2 rounded-lg bg-green-600 px-4 py-2 text-white transition-colors hover:bg-green-700"
      >
        복사
      </button>
    </div>
  )
}

export default ExportActions
