# PORTFOLIO

박정민 포트폴리오 사이트. Next.js (App Router) + Tailwind CSS v4 + Framer Motion.

## 개발

```bash
npm install
npm run dev
```

http://localhost:3000

## 구조

- `src/content/portfolio.ts` — 모든 문구와 데이터. 텍스트 수정은 이 파일만 건드리면 됩니다.
- `src/components/ui/` — Section(4:8 그리드), Pill, InlineLink, Reveal(페이드인), RollingText(스프링 롤링)
- `src/components/sections/` — 페이지 섹션 (Header, Hero, About, Skills, Experience, Projects, SideProjects, Lessons, Education, Footer)
- `src/app/globals.css` — 디자인 토큰 (`@theme`)과 타입 스케일 유틸리티
- `docs/portfolio_design_system.md` — 디자인 시스템 명세

## 배포

Vercel에 저장소를 연결하면 추가 설정 없이 빌드됩니다.
