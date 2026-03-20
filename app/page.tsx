import Image from "next/image"
import LandingTitle from "./components/LandingTitle"
import Features from "./components/Features"
import HowItWorks from "./components/HowItWorks"
import Button from "@/ds/components/atoms/button/Button"
import Link from "next/link"
import { ArrowBigRightDash, Sparkles } from "lucide-react"

export default function Home() {
  return (
    <div className="m-3 mx-auto max-w-6xl">
      <div className="mb-12 flex flex-col items-center text-center">
        <LandingTitle />
        <Button size="xl" className="font-medium hover:shadow-xl">
          <Sparkles className="h-5 w-5" />
          <Link href={"/generate"}>글 생성하기</Link>
        </Button>
      </div>

      <div className="mb-16 flex w-full justify-center overflow-hidden">
        <Image
          alt="DevLogAI - 기술 블로그 생성"
          src="https://images.unsplash.com/photo-1499750310107-5fef28a66643?w=1200&h=600&fit=crop"
          width={600}
          height={400}
        />
      </div>

      <Features />

      <div className="rounded-2xl bg-gray-50 p-8 md:p-12 dark:bg-gray-800">
        <div className="mt-8 flex flex-col text-center">
          <HowItWorks />
          <div className="mt-12 flex flex-col items-center md:mt-8">
            <Button size="lg">
              <Link href={"/generate"}>지금 시작하기</Link>
              <ArrowBigRightDash className="h-4 w-4" />
            </Button>
          </div>
        </div>
      </div>
    </div>
  )
}
