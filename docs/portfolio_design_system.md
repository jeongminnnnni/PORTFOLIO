# Portfolio Design System Specification
> Reference: Minimal Swiss Style & Engineering Logic (based on `ooooseok.com`)

---

## 1. Overview & Design Philosophy

* **Style Archetype**: Swiss International Typographic Style + Engineering Logic.
* **Core Philosophy**:
  * 불필요한 장식 그래픽, 과한 그림자, 네온 컬러를 배제하고 **타이포그래피 위계, 정밀한 그리드, 보더라인**으로 완성도 구현.
  * **Design Thinking(발산적 사고)**의 섬세한 UX 감도와 **Computational Thinking(수렴적 사고)**의 논리적 아키텍처를 시각적으로 전달.

---

## 2. Color System

차가운 무채색(Cool Gray/Slate/Zinc)을 베이스로 가독성을 극대화하며, 인터랙션 및 링크 지점에 신뢰감을 주는 **일렉트릭 코발트 블루**를 포인트로 사용합니다.

### 2.1 Palette Tokens

| 분류 (Role) | 토큰명 (Token) | Hex 코드 | 설명 / 용도 |
| :--- | :--- | :--- | :--- |
| **Canvas** | `bg-canvas` | `#FAFAFA` | 기본 배경 (눈이 편안한 오프화이트) |
| **Surface** | `bg-surface` | `#FFFFFF` | 카드, 모달, 입력창 배경 |
| **Border** | `border-default` | `#E4E4E7` | 기본 디바이더 및 구분선 (Zinc-200) |
| **Border Subtle** | `border-subtle` | `#F4F4F5` | 매우 연한 배경 구분선 (Zinc-100) |
| **Text Primary** | `text-primary` | `#09090B` | 메인 슬로건, 섹션 헤딩 (Zinc-950) |
| **Text Secondary** | `text-secondary` | `#52525B` | 본문, 프로세스 설명 (Zinc-600) |
| **Text Muted** | `text-muted` | `#71717A` | 타임라인 일자, 캡션, 인덱스 (Zinc-500) |
| **Accent Primary** | `accent-default` | `#0066FF` | 인터랙션 링크, 활성 롤링 텍스트, 탭 강조 |
| **Accent Subtle** | `accent-subtle` | `#EFF6FF` | 뱃지 배경, 호버 틴트 (Blue-50) |
| **Accent Hover** | `accent-hover` | `#0052CC` | 링크 호버 시 딥 블루 |

---

## 3. Typography Hierarchy

기하학적 산세리프(Neo-Grotesque) 계열을 사용하여 엔지니어링 정밀도와 디자인 감도를 유지합니다.

* **추천 서체**:
  * 한글: `Pretendard Variable`
  * 영문: `Inter` 또는 `Geist` (Next.js 지원 폰트)
  * 숫자/코드: `JetBrains Mono` 또는 `Geist Mono`

### 3.1 Type Scale

| 위계 (Level) | Tailwind Class | 크기 / 행간 / 자간 | 용도 및 예시 |
| :--- | :--- | :--- | :--- |
| **Display (Hero)** | `text-3xl md:text-5xl font-semibold` | 36~48px / leading-tight / -0.02em | 메인 롤링 슬로건 |
| **Section Label** | `text-xs font-mono uppercase tracking-wider` | 12~13px / leading-none / +0.05em | `01. SKILL`, `EXPERIENCE` 등 인덱스 라벨 |
| **Heading 2** | `text-xl md:text-2xl font-medium` | 20~24px / leading-snug / -0.01em | 프로젝트 제목, 자기소개 첫 문장 |
| **Body (본문)** | `text-base font-normal text-secondary` | 15~16px / leading-relaxed (1.65) | 본문 단락, 역할 설명 |
| **Meta / Caption** | `text-sm font-mono text-muted` | 13~14px / leading-normal / normal | 프로젝트 기간, 기술 태그, 라이선스 |

---

## 4. Layout Grid & Spacing

콘텐츠가 과도하게 퍼지지 않도록 단일 컬럼 및 비대칭 2열 그리드를 원칙으로 설계합니다.

* **컨테이너 너비 (Max Width)**:
  * 텍스트/이력 중심 뷰: `max-w-3xl` (768px)
  * 다중 열/갤러리 뷰: `max-w-5xl` (1024px)
* **수직 리듬 (Vertical Spacing)**:
  * 섹션 간격: `py-20 md:py-28` (80px ~ 112px)
  * 콘텐츠 블록 간격: `gap-8 md:gap-12` (32px ~ 48px)
* **비대칭 2열 구조 (Asymmetric Grid)**:
  * Left Column (약 25~30%): 섹션 레이블 및 서수 번호 (`md:col-span-4`)
  * Right Column (약 70~75%): 상세 스토리, 목록, 설명문 (`md:col-span-8`)

---

## 5. UI Component Specs

### 5.1 Inline Interactive Link
본문 흐름을 방해하지 않는 정밀한 언더라인과 화살표 인디케이터.
```html
<a href="#" class="inline-flex items-center gap-1 text-[#09090B] underline decoration-[#E4E4E7] hover:decoration-[#0066FF] hover:text-[#0066FF] underline-offset-4 transition-colors">
  <span>iF Design Award 수상 내역</span>
  <span class="text-xs">↗</span>
</a>
```

### 5.2 Pill Badges (역할 및 스킬 뱃지)
```html
<span class="inline-flex items-center px-2.5 py-1 rounded-full text-xs font-medium bg-[#FAFAFA] text-[#09090B] border border-[#E4E4E7]">
  Product Designer
</span>
```

### 5.3 Timeline List Item
박스형 카드 대신 간결한 텍스트 리스트와 모노스페이스 날짜 구성.
```html
<div class="flex flex-col md:flex-row md:items-baseline justify-between py-3 border-b border-[#E4E4E7]/60 text-sm">
  <span class="font-medium text-[#09090B]">프로젝트 또는 인턴십 명</span>
  <span class="text-xs font-mono text-[#71717A]">2025.01 — 2025.06</span>
</div>
```

---

## 6. Motion & Interaction Tokens

1. **지연 및 지속 시간**:
   * Hover State: `transition-all duration-200 ease-out`
   * Viewport Fade-In: `duration-500 ease-out`
2. **리프트 인터랙션**:
   * 카드나 버튼 호버 시 과도한 scale 대신 `translate-y-[-2px]` 미세 변위 적용.
3. **텍스트 롤링 스프링 (Framer Motion)**:
   * `transition={{ type: "spring", stiffness: 300, damping: 30 }}`

---

## 7. Tailwind CSS Configuration Reference

```typescript
// tailwind.config.ts
import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        canvas: "#FAFAFA",
        surface: "#FFFFFF",
        border: {
          DEFAULT: "#E4E4E7",
          subtle: "#F4F4F5",
        },
        foreground: {
          primary: "#09090B",
          secondary: "#52525B",
          muted: "#71717A",
        },
        accent: {
          DEFAULT: "#0066FF",
          subtle: "#EFF6FF",
          hover: "#0052CC",
        },
      },
      fontFamily: {
        sans: ["var(--font-pretendard)", "var(--font-inter)", "sans-serif"],
        mono: ["var(--font-geist-mono)", "monospace"],
      },
    },
  },
  plugins: [],
};

export default config;
```