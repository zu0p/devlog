import { PromptParams } from "@/logics/prompt/types"

export const troubleshootingPrompt = ({ title, keywords }: PromptParams) => `
트러블슈팅 기술 블로그 글을 작성해주세요.

주제: ${title}
키워드: ${keywords.join(", ")}

글은 아래 구조를 따르세요:
1. 문제 상황
2. 원인 분석
3. 시도했던 해결 방법
4. 최종 해결 방법
5. 배운 점

조건:
- 실제 개발 경험을 정리한 것처럼 구체적으로 작성하세요.
`
