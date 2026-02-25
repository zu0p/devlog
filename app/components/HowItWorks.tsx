const HowItWorks = () => {
  return (
    <>
      <h2 className="mb-8 text-center text-3xl font-bold text-gray-900 dark:text-white">
        간단한 3단계
      </h2>

      <div className="grid gap-8 md:grid-cols-3">
        <div className="flex flex-col items-center text-center">
          <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-blue-600 text-xl font-bold text-white">
            1
          </div>
          <h3 className="mb-2 text-lg font-bold text-gray-900 dark:text-white">
            주제 입력
          </h3>
          <p className="text-gray-600 dark:text-gray-400">
            작성하고 싶은 주제와 키워드를 입력합니다
          </p>
        </div>

        <div className="flex flex-col items-center text-center">
          <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-blue-600 text-xl font-bold text-white">
            2
          </div>
          <h3 className="mb-2 text-lg font-bold text-gray-900 dark:text-white">
            유형 선택
          </h3>
          <p className="text-gray-600 dark:text-gray-400">
            Tutorial, TIL, Troubleshooting 중 선택
          </p>
        </div>

        <div className="flex flex-col items-center text-center">
          <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-blue-600 text-xl font-bold text-white">
            3
          </div>
          <h3 className="mb-2 text-lg font-bold text-gray-900 dark:text-white">
            생성 완료
          </h3>
          <p className="text-gray-600 dark:text-gray-400">
            AI가 전문적인 블로그 글을 작성해드립니다
          </p>
        </div>
      </div>
    </>
  )
}

export default HowItWorks
