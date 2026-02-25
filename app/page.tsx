import Image from "next/image"
import LandingTitle from "./components/LandingTitle"
import GenerateButton from "./components/GenerateButton"
import Features from "./components/Features"
import HowItWorks from "./components/HowItWorks"

export default function Home() {
  return (
    <div className="m-3 mx-auto max-w-6xl">
      <div className="mb-12 text-center">
        <LandingTitle />
        <GenerateButton
          desc={"글 생성하기"}
          isIcon={true}
          shadow={true}
          size={"lg"}
        />
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
          <div className="mt-12 md:mt-8">
            <GenerateButton desc={"지금 시작하기"} />
          </div>
        </div>
      </div>
    </div>
  )
}
