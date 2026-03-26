import type { Meta, StoryObj } from "@storybook/nextjs-vite"
import GeneratedPreview from "./GeneratedPreview"
import { fn } from "storybook/test"
import { GenerateContract } from "@/services/generate.contract"
import { useEffect, useState } from "react"

const meta = {
  title: "Library/Organisms/GeneratedPreview",
  component: GeneratedPreview,
  parameters: {
    layout: "full",
  },
  decorators: [
    (Story) => (
      <div className="p-3">
        <Story />
      </div>
    ),
  ],
  tags: ["autodocs"],
} satisfies Meta<typeof GeneratedPreview>

export default meta
type Story = StoryObj<typeof meta>

export const Loading: Story = {
  args: {
    isLoading: true,
    title: "타이틀",
  },
}

export const Default: Story = {
  args: {
    title: "생성된 블로그 글",
    metaDescription: {
      click: fn(),
      text: "AI 도구를 활용하여 개발 생산성을 극대화하는 방법에 대해 알아봅니다. 이 아티클은 Next.js와 OpenAI API를 활용한 실전 예제를 다룹니다.",
    },
    hashtags: {
      click: fn(),
      array: ["AI", "React", "Nextjs", "Productivity"],
    },
    content: `
# 서론
AI 기술의 발전은 웹 개발 환경을 급격하게 변화시키고 있습니다. 이제 개발자는 단순 반복적인 코드 작성을 넘어, 시스템의 설계와 창의적인 문제 해결에 더 집중할 수 있게 되었습니다.

## 왜 AI를 사용해야 하는가?
1. **코드 자동 완성**: Copilot이나 GPT-4와 같은 도구는 복잡한 로직을 순식간에 구현합니다.
2. **버그 수정**: 작성된 코드의 잠재적인 오류를 미리 발견하고 수정 제안을 제공합니다.
3. **학습 속도 향상**: 새로운 라이브러리나 프레임워크를 배울 때 AI는 훌륭한 튜터가 됩니다.

### 결론
AI는 개발자를 대체하는 것이 아니라, 개발자의 능력을 증폭시키는 강력한 도구입니다. 지금 바로 시작해보세요!
    `.trim(),
  },
}

export const ConversionLoaded: Story = {
  render: (args) => {
    const [isLoading, setIsLoading] = useState(true)
    const [article, setArticle] = useState<GenerateContract["response"] | null>(
      null
    )
    useEffect(() => {
      const timer = setTimeout(() => {
        setArticle({
          title: "React Hooks 완전 정복",
          content: `
# React Hooks 가이드
Hooks를 사용하면 함수형 컴포넌트에서도 상태 관리와 생명주기 기능을 사용할 수 있습니다.

## 주요 Hooks
- **useState**: 상태 관리
- **useEffect**: 사이드 이펙트 처리
- **useContext**: 컨텍스트 사용
          `.trim(),
          metaDescription:
            "React Hooks의 기본부터 심화까지 실전 예제와 함께 완벽하게 이해해보세요.",
          hashtags: ["React", "Hooks", "Frontend", "JavaScript"],
        })
        setIsLoading(false)
      }, 1500)

      return () => clearTimeout(timer)
    }, [])

    return (
      <GeneratedPreview
        {...args}
        isLoading={isLoading}
        title={article?.title}
        content={article?.content}
        metaDescription={
          article ? { text: article.metaDescription, click: fn() } : undefined
        }
        hashtags={
          article ? { array: article.hashtags, click: fn() } : undefined
        }
      />
    )
  },
}
