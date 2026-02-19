import { PromptParams } from "@/logics/prompt/types"

export const tutorialPrompt = ({ title, keywords }: PromptParams) => `
주제: ${title}
키워드: ${keywords.join(", ")}

다음 구조를 반드시 따르세요:
1. 주제 소개
2. 핵심 개념 설명
3. 코드 예제 (Markdown 코드 블록 사용)
4. 사용 시 주의사항
5. 정리

조건:
- 설명은 명확하고 구체적으로
- 필요 시 출처 포함
- 불필요한 마케팅 표현은 제외
`
