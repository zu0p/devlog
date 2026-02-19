import { PromptParams } from "@/logics/prompt/types"

export const tilPrompt = ({ title, keywords }: PromptParams) => `
주제: ${title}
키워드: ${keywords.join(", ")}

다음 구조를 TIL 형식의 개발 로그를 작성하세요.

글은 아래 구조를 따르세요:
1. 오늘 배운 내용 요약
2. 새롭게 알게 된 개념
3. 헷갈렸던 부분
4. 간단한 코드 예제
5. 회고
 
- 조건:
글의 목적은 하루 동안 학습한 내용을 기록하며 배운 내용에 대한 기술적 고찰을 기록하는 것이다.
실제 개발자가 기록한 것처럼 자연스럽게 작성한다.

`
