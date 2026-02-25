import { Download, FileText, Zap } from "lucide-react"

const Features = () => {
  return (
    <div className="mb-16 grid grid-cols-3 gap-8">
      <div className="p-6 text-center">
        <div className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-lg bg-blue-100 text-blue-600 dark:bg-blue-900/30 dark:text-blue-400">
          <FileText className="h-6 w-6" />
        </div>
        <h3 className="mb-2 text-lg font-bold text-gray-900 md:text-xl dark:text-white">
          다양한 <br className="flex md:hidden" /> 글 유형
        </h3>
        <p className="hidden text-gray-600 md:flex dark:text-gray-400">
          Tutorial, TIL, Troubleshooting 등<br />
          원하는 형식으로 <br />
          글을 생성할 수있습니다.
        </p>
      </div>

      <div className="p-6 text-center">
        <div className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-lg bg-green-100 text-green-600 dark:bg-green-900/30 dark:text-green-400">
          <Zap className="h-6 w-6" />
        </div>
        <h3 className="mb-2 text-lg font-bold text-gray-900 md:text-xl dark:text-white">
          빠른 생성
        </h3>
        <p className="hidden text-gray-600 md:flex dark:text-gray-400">
          몇 초 만에 전문적인 <br />
          기술 블로그 글이 완성됩니다.
        </p>
      </div>

      <div className="p-6 text-center">
        <div className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-lg bg-purple-100 text-purple-600 dark:bg-purple-900/30 dark:text-purple-400">
          <Download className="h-6 w-6" />
        </div>
        <h3 className="mb-2 text-lg font-bold text-gray-900 md:text-xl dark:text-white">
          간편한 <br className="flex md:hidden" /> 내보내기
        </h3>
        <p className="hidden text-gray-600 md:flex dark:text-gray-400">
          마크다운(.md)과 HTML(.html) 형식으로 <br />
          다운로드할 수 있습니다.
        </p>
      </div>
    </div>
  )
}

export default Features
