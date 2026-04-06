"use client"
import Button from "@/ds/components/atoms/button/Button"
import { ButtonSize } from "@/ds/tokens/button/sizes"
import { ArrowBigRightDash, Sparkles } from "lucide-react"
import { useRouter } from "next/navigation"

interface HandleRouteGenerateButtonProps {
  label: string
  icon: "sparkles" | "right"
  size: ButtonSize
  className?: string
}

const HandleRouteGenerateButton = ({
  label,
  icon,
  size,
  className,
}: HandleRouteGenerateButtonProps) => {
  const router = useRouter()
  const handleGenerateClick = () => {
    router.push("/generate")
  }

  return (
    <Button size={size} className={className} onClick={handleGenerateClick}>
      {icon === "sparkles" && (
        <Sparkles className="h-5 w-5" aria-hidden="true" />
      )}
      {label}
      {icon === "right" && (
        <ArrowBigRightDash className="h-4 w-4" aria-hidden="true" />
      )}
    </Button>
  )
}

export default HandleRouteGenerateButton
