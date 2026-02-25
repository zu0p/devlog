import { Sparkle } from "lucide-react"

const LandingTitle = () => {
  return (
    <>
      <div className="mb-6 inline-flex items-center gap-2 rounded-full bg-blue-100 px-4 py-2 text-sm font-medium text-blue-600 dark:bg-blue-900/30 dark:text-blue-400">
        <Sparkle className="h-4 w-4" />
        AI 기반 블로그 생성기
      </div>

      <h1 className="mb-6 text-3xl font-bold text-gray-900 md:text-6xl dark:text-white">
        기술 블로그 글,
        <br />
        <span className="text-blue-600 dark:text-blue-400">AI가 작성</span>
        해드립니다
      </h1>

      <p className="mx-auto mb-8 max-w-2xl text-base text-gray-600 md:text-xl dark:text-gray-400">
        주제와 키워드만 입력하면 DevLogAI가 <br />
        전문적인 기술 블로그 글을 자동으로생성합니다. <br />
        Tutorial, TIL, Troubleshooting 등 <br className="flex md:hidden" />
        다양한 형식을 지원합니다.
      </p>
    </>
  )
}

export default LandingTitle
