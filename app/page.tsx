import Image from "next/image"
import LandingTitle from "./components/LandingTitle"
import Features from "./components/Features"
import HowItWorks from "./components/HowItWorks"
import HandleRouteGenerateButton from "./components/HandleRouteGenerateButton"

export default function Home() {
  return (
    <div className="m-3 mx-auto max-w-6xl">
      <section
        aria-label="서비스 소개"
        className="mb-12 flex flex-col items-center text-center"
      >
        <LandingTitle />
        <HandleRouteGenerateButton
          size="xl"
          className="font-medium hover:shadow-xl"
          label="글 생성하기"
          icon="sparkles"
        />
      </section>

      <section className="mb-16 flex w-full justify-center overflow-hidden">
        <Image
          alt="DevLogAI - 기술 블로그 생성 서비스 시연 이미지"
          src="https://images.unsplash.com/photo-1499750310107-5fef28a66643?w=1200&h=600&fit=crop"
          width={600}
          height={400}
          priority
        />
      </section>

      <section aria-label="기능 소개">
        <Features />
      </section>

      <section
        aria-label="서비스 이용 방법 설명"
        className="flex flex-col items-center rounded-2xl bg-gray-50 p-8 pt-16 md:p-12 dark:bg-gray-800"
      >
        <HowItWorks />
        <HandleRouteGenerateButton
          size="lg"
          label="지금 시작하기"
          icon="right"
          className="mt-12 flex md:mt-8"
        />
      </section>
    </div>
  )
}
