"use client"

import { Bug } from "lucide-react"

const ErrorPage = () => {
  return (
    <div className="flex flex-col items-center justify-center py-20">
      <Bug className="h-12.5 w-12.5 text-[#d4183d]" />
      <p className="text-destructive mt-10 text-lg dark:text-gray-400">
        글 생성 중 오류가 발생했습니다!
      </p>
      <p className="mt-2 text-sm text-gray-500 dark:text-gray-500">
        다시 시도해주세요🥲
      </p>
    </div>
  )
}

export default ErrorPage
