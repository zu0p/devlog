export const metaDescriptionPrompt = (keyword: string[]) => `
[SEO Meta Description 작성 규칙]

- 주요 키워드: ${keyword}
- 160자 이내로 작성한다.
- 주요 키워드를 자연스럽게 포함한다.
- 클릭을 유도하는 문장으로 작성한다.
- 과도한 반복 키워드(Keyword stuffing)는 금지한다.
- 독자가 이 글을 읽으면 무엇을 얻을 수 있는지 명확히 제시한다.
- 문장은 완결된 자연스러운 한국어 문장으로 작성한다.
- 따옴표(")는 사용하지 않는다.

출력 형식:
"metaDescription": "작성된 SEO 메타 설명"
`
