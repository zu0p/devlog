import { Loader2 } from "lucide-react"

const LoadingSpinner = () => {
  return (
    <div className="grid min-h-35 w-full place-items-center overflow-x-scroll rounded-lg p-6 lg:overflow-visible">
      <Loader2 className="mb-4 h-12 w-12 animate-spin text-blue-600 dark:text-blue-400" />
    </div>
  )
}

export default LoadingSpinner
