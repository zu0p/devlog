# Devlog

Developer + blog = **Devlog**😈!  
🔗 https://devlog.vercel.app/

> 개발자를 위한 기술 블로그 글 자동 생성 도구
>
> OpenAI API를 활용해 **주제** + **키워드** + **글 유형**만으로 실사용 가능한 Markdown 글을 생성하는 서비스

## 🚀 프로젝트 소개

**Devlog**는 “블로그 글 쓰는 데 드는 시간과 에너지를 줄이자”는 문제의식에서 시작한 프로젝트입니다.

개발 과정에서 정리해야 할 내용은 많지만 구조를 잡고 Markdown으로 정리하며 SEO까지 신경 쓰는 것은 상당한 피로감을 유발합니다. 이 프로젝트는 AI를 글쓰기 대체 도구가 아닌 **글 작성을 가속하는 개발 도구**로 활용하는 데 초점을 맞춥니다.

## 🎯 개발 목표

- **OpenAI GPT API**를 실제 서비스 수준으로 활용
- 프롬프트 설계를 통해 **출력 품질을 통제**하는 경험
- 확장성과 유지보수성을 고려한 **컴포넌트 기반 아키텍처 설계**
- **서버 상태와 클라이언트 상태**를 명확히 **분리**하여 상태 관리 복잡성 최소화

## ✨ 주요 기능

### 1. AI 기반 글 자동 생성(핵심 기능)

다음 입력값을 기반으로 글을 생성합니다.

> **주제**, **키워드**, **글 유형 (Template)**

글 유형에 따라 문단 구조, 소제목 규칙, 코드 블럭 포함 여부, 톤앤매너 등이 **프롬프트** 레벨에서 제어됩니다.

### 2. 글 템플릿 기반 프롬프트 설계

AI가 미리 정의된 글 설계도 안에서만 작성하도록 유도하여 출력 품질을 보장합니다.

> **Tutorial**: 단계별 가이드 형식
> **TIL (Today I Learned)**: 학습 내용 요약 형식
> **Trouble Shooting**: 문제 해결 과정 기록 형식

### 3. Markdown 에디터 및 Export

- 생성된 글을 Toast UI Editor를 통해 바로 수정하고 편집할 수 있습니다.
- 완성된 글은 `.md` 또는 `.html` 파일로 다운로드 또는 클립보드에 복사할 수 있습니다.

## 🏛️ 아키텍처 및 기술 스택

이 프로젝트는 확장성과 유지보수성을 높이기 위해 **관심사 분리** 원칙에 기반하여 설계되었습니다.

### 1. 디렉토리 구조

```
src
├── app/              # Next.js App Router 기반
│   ├── api/          # API 엔드포인트
│   ├── components/   # 페이지 단위의 조합 컴포넌트
│   └── ...
├── hooks/            # Custom Hooks(비동기(서버) 상태 관리)
│   └── axios.ts      # 공통 axios instance
├── lib/              # 유틸 코드(재사용 가능한 기반 코드)
├── logics/           # 핵심 비즈니스 로직
├── public/           # 정적 에셋(이미지 등)
├── services/         # API 단위의 비즈니스 요청(fetcher)
│   └── generate/
│       ├── generate.contract.ts  # API 응답/요청 타입을 정의
│       └── generate.ts           # 실제 API call
├── stores/           # 전역 상태 관리
└── ds/               # 자체 디자인 시스템(doing...)
    ├── components/
    └── styles/
```

### 2. 상태 관리

복잡성을 낮추기 위해 지역 상태, 전역 상태, 서버 생태 관리 방식을 분리했습니다.

- **지역 상태**: **useState**, **props**
  - 컴포넌트 내부에서만 사용되는 상태는 `useState` 훅을 사용하여 관리합니다.
  - 부모에서 자식 컴포넌트로 필요한 상태 전달 시 `props`를 사용했습니다.
- **전역 상태**: **Zustand**
  - 생성된 아티클 내용(`generatedArticle`)과 같이 여러 컴포넌트에 걸쳐 사용되는 전역 상태는 `zustand` 라이브러리를 활용하여 관리합니다.
  - Boilerplate가 적고 상태가 변경될 때 해당 상태를 구독하는 컴포넌트만 리렌더링되어 불필요한 렌더링을 최소화할 수 있다는 장점 때문에 선택했습니다.
- **서버 상태**: **TanStack Query(React Query)**
  - API 요청, 캐싱, 동기화 등 서버와의 통신과 관련된 모든 상태를 관리합니다.
  - `isLoading`, `error` 상태를 선언적으로 처리합니다.

### 3. 기술 스택

| 구분                 | 사용 기술                                    |
| -------------------- | -------------------------------------------- |
| **Frontend**         | `Next.js(App Router)`, `React`, `TypeScript` |
| **State Management** | `TanStack Query(React Query)`, `Zustand`     |
| **Styling**          | `Tailwind CSS`                               |
| **AI API**           | `OpenAI(gpt-3.5-turbo-0125)`                 |
| **Code Quality**     | `ESLint`, `Prettier`, `Husky`, `lint-staged` |
| **Deploy**           | `Vercel`                                     |
| **Editor**           | `Toast UI Editor`                            |

## 🛠️ 프로젝트 실행 방법

### 1. 환경 설정

- **pnpm** 설치가 필요합니다.
  ```bash
  npm install -g pnpm
  ```
- `.env.local` 파일을 생성하고 OpenAI API 키를 추가합니다.
  ```env
  OPENAI_API_KEY="여러분의 API 키"
  ```

### 2. 프로젝트 실행

```bash
# 1. 의존성 설치
pnpm install

# 2. 개발 서버 실행
pnpm dev
```

이후 `http://localhost:3000`으로 접속하여 서비스를 이용할 수 있습니다.
