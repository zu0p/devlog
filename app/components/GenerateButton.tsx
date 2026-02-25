import { Sparkles } from "lucide-react"
import Link from "next/link"

type ButtonSize = "md" | "lg"
interface GenerateButtonProps {
  desc: string
  isIcon?: boolean
  shadow?: boolean
  size?: ButtonSize
}
const GenerateButton = ({
  desc,
  isIcon = false,
  shadow = false,
  size = "md",
}: GenerateButtonProps) => {
  return (
    <Link
      href={"/generate"}
      className={`inline-flex items-center gap-2 rounded-lg bg-blue-600 ${size === "lg" ? "px-8 py-4 text-lg" : "px-6 py-3 text-base"} font-medium text-white ${shadow && "shadow-lg"} transition-colors hover:bg-blue-700 hover:shadow-xl`}
    >
      {isIcon && <Sparkles className="h-5 w-5" />}
      {desc}
    </Link>
  )
}

export default GenerateButton
