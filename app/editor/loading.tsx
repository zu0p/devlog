import LoadingSpinner from "../components/LoadingSpinner"

const LoadingPage = () => {
  return (
    <div className="flex flex-col items-center justify-center py-20">
      <LoadingSpinner />
      <p className="text-lg text-gray-600 dark:text-gray-400">
        블로그 글을 생성하고 있습니다...
      </p>
      <p className="mt-2 text-sm text-gray-500 dark:text-gray-500">
        잠시만 기다려주세요
      </p>
    </div>
  )
}

export default LoadingPage
