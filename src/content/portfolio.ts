/*
  모든 문구는 이 파일에서만 관리합니다.
  표기 원칙:
  - 과장된 수치 헤드라인 금지
  - "배포/출시" 같은 완료형 단어 금지 (시연·빌드 완성 수준은 그대로 표기)
  - 진행 중인 과제는 "진행 중"으로 명시
  - 기대효과와 실측치를 분리해서 표기
*/

export const profile = {
  name: "박정민",
  nameEn: "Jeongmin Park",
  headline: "AI를 신뢰하기보다 구조로 통제한다",
  tagline: "아이디어부터 구현까지, 리스크를 설계로 방어하는",
  rolling: ["AX 컨설턴트", "서비스 기획자", "PM"],
  roleShort: "AX 컨설턴트 / 서비스 기획자",
  status: [
    "중앙대학교 예술공학부 재학",
    "한국능률협회컨설팅(KMAC) AI·빅데이터본부 AX 컨설팅 PA (2026.07~)",
  ],
  email: "pjm010429@gmail.com",
  links: [
    { label: "GitHub", href: "https://github.com/jeongminnnnni" },
    {
      label: "LinkedIn",
      href: "https://www.linkedin.com/in/jeong-min-park-60566139a",
    },
  ],
};

export const nav = [
  { id: "about", label: "About" },
  { id: "skills", label: "Skills" },
  { id: "experience", label: "Experience" },
  { id: "projects", label: "Projects" },
  { id: "lessons", label: "Lessons" },
  { id: "contact", label: "Contact" },
];

export const about = {
  lead: "비즈니스 기획과 AI/개발 실행력을 함께 갖춘 기획자입니다.",
  body: [
    "해커톤부터 실제 클라이언트 컨설팅까지, '아이디어 → 설계 → 구현'의 전 단계를 직접 경험하며 현실적 제약 안에서 프로젝트를 조율하는 데 강점이 있습니다.",
  ],
  philosophyLabel: "반복해서 사용하는 설계 철학",
  philosophy:
    "LLM/AI의 창의적 생성은 살리되, 최종 판단은 규칙 기반 구조(Guardrail, 회귀 검증, 근거 카드)로 통제해 \"틀려도 정답이 살아남는 시스템\"을 만드는 것.",
};

export type SkillGroup = { title: string; items: string[] };

export const skills: SkillGroup[] = [
  {
    title: "서비스 기획 / PM",
    items: [
      "PRD 작성, 화면설계",
      "P0 / P1 / P2 우선순위 전략",
      "C-level을 포함한 이해관계자 커뮤니케이션",
    ],
  },
  {
    title: "AI / AX 컨설팅",
    items: [
      "RAG 시스템 진단·고도화",
      "LLM + Rule 하이브리드 구조 설계",
      "SFT 파인튜닝 (QLoRA)",
      "시계열 예측 방법론 비교",
    ],
  },
  {
    title: "구현 실행력",
    items: [
      "React / Next.js / TypeScript 기반 목사이트·프로토타입 개발",
      "Figma 와이어프레임",
    ],
  },
  {
    title: "데이터",
    items: [
      "GA4 (Google Analytics Certification 보유)",
      "Python 기반 통계·ML 비교 실험",
    ],
  },
];

export type ExperienceItem = {
  org: string;
  role: string;
  period: string;
  ongoing?: boolean;
  bullets: string[];
};

export const experience: ExperienceItem[] = [
  {
    org: "한국능률협회컨설팅(KMAC) AI·빅데이터본부",
    role: "AX 컨설팅 PA",
    period: "2026.07 — 현재",
    ongoing: true,
    bullets: [
      "다수의 중소기업 대상 AX/데이터 컨설팅 프로젝트에 PA로 참여 중",
      "진행 중인 과제는 완료된 분석이 아닌 진행 중 상태로 표기합니다",
    ],
  },
];

export type ProjectBlock = { label: string; body: string[] };

export type Project = {
  id: string;
  title: string;
  meta: string;
  summary: string;
  role: string;
  blocks: ProjectBlock[];
  note?: string[];
  stack: string[];
};

export const projects: Project[] = [
  {
    id: "leona-rag",
    title: "레오나해운항공 사내 지식검색 챗봇 RAG 고도화",
    meta: "KMAC AX 컨설팅 · 클라이언트 프로젝트",
    summary:
      "실사용 확대 후 드러난 답변 품질 문제를 검색 로직과 근거 전달 UX 두 축으로 나눠 진단·개선한 컨설팅 프로젝트",
    role: "PA로서 원인 진단과 해결 로직 초안을 설계했습니다. 시니어 컨설턴트의 피드백을 거쳐 대부분 그대로 채택되었고, 최종 의사결정은 시니어 컨설턴트가 담당했습니다.",
    blocks: [
      {
        label: "문제",
        body: [
          "실사용 범위가 넓어지면서 답변 품질 문제가 드러났습니다. 원인을 '정답 문서가 검색 후보에서 탈락하는 문제'와 '답변의 근거를 사용자가 확인할 수 없는 문제'로 분리해 진단했습니다.",
        ],
      },
      {
        label: "구조 설계",
        body: [
          "청킹 정책 재설계: 메일 1건당 평균 8.3청크 → 2.6청크. 지나치게 잘게 쪼개져 문맥이 끊기던 문제를 해소했습니다.",
          "의미(bge-m3) · 키워드(BM25) · 인식어 3중 검색을 RRF로 융합. 한 축이 인식 오류를 내더라도 다른 축에서 정답이 살아남는 구조입니다.",
          "인라인 출처칩 + 근거카드 UX: 생성 후처리로 출처를 노출해 LLM 토큰 추가 없이(0) 근거를 전달합니다.",
        ],
      },
      {
        label: "검증",
        body: [
          "회귀 검증 21건 통과. 성능 향상 지표가 아니라, 기존에 잘 답하던 질문이 개선 후에도 나빠지지 않았음을 확인하는 절차입니다.",
        ],
      },
    ],
    note: [
      "월 4시간 절감, 클레임 20% 감소는 실측치가 아닌 사업 제안 단계의 기대효과입니다.",
    ],
    stack: ["RAG", "bge-m3", "ChromaDB", "BM25 + RRF", "gpt-oss:120b", "FastAPI"],
  },
  {
    id: "doody",
    title: "Doody — AI 금융 자립 플랫폼",
    meta: "하나금융그룹 인재양성 프로젝트 · 221팀 중 13팀 최종 선발",
    summary:
      "은둔 청년의 심리적 장벽에 주목해 '위로 → 작은 행동 → 큰 행동 → 자립'의 단계적 회복 구조를 설계한 AI 금융 자립 플랫폼",
    role: "v1에서는 PRD·캐릭터·UX 설계와 Next.js 목사이트 개발을 직접 맡았고, v2에서는 판단 엔진의 설계 철학 제안과 UX/UI 설계를 담당했습니다.",
    blocks: [
      {
        label: "문제 재정의",
        body: [
          "설문 데이터에서 자립 욕구는 높지만 대면 공포가 크다는 모순을 발견했습니다. '금융 지식 부족'이 아니라 '행동을 시작하지 못하게 하는 심리적 진입 장벽'이 진짜 문제라고 재정의했습니다.",
        ],
      },
      {
        label: "v1",
        body: [
          "PRD 작성, 캐릭터 및 UX 설계, Next.js 목사이트 직접 개발.",
          "위로에서 작은 행동으로 넘어가는 단계별 회복 구조를 화면 흐름으로 구체화했습니다.",
        ],
      },
      {
        label: "v2",
        body: [
          "LLM 생성과 규칙 기반 판단을 결합한 하이브리드 판단 엔진의 설계 철학을 제안했습니다.",
          "UX 100%, UI 80~90%를 직접 설계했고, 개발은 AI 엔지니어와 협업했습니다.",
        ],
      },
    ],
    stack: [
      "Next.js",
      "Figma",
      "React Native (v2)",
      "Spring (v2)",
      "FastAPI (v2, 협업 개발)",
    ],
  },
  {
    id: "menu-ai",
    title: "신메뉴 추천 AI — 마진 제약 보장 소상공인 신메뉴 추천",
    meta: "2인 팀 · 시스템 설계 · SFT · Guardrail · 실험 단독 수행",
    summary:
      "\"생성은 LLM, 신뢰성은 Guardrail\"이라는 하이브리드 구조로, 마진 위반 메뉴를 구조적으로 차단한 AI 시스템",
    role: "2인 팀에서 시스템 설계, SFT 학습, Guardrail 구현, 실험까지 전 과정을 단독으로 수행했습니다.",
    blocks: [
      {
        label: "문제",
        body: [
          "LLM이 생성하는 메뉴 제안은 창의적이지만 원가·마진 조건을 지키지 못하는 경우가 잦습니다. 소상공인에게는 마진을 위반하는 제안이 하나라도 섞이면 신뢰할 수 없는 도구가 됩니다.",
        ],
      },
      {
        label: "구조 설계",
        body: [
          "Qwen3-4B를 QLoRA로 SFT하여 생성 결과가 실제 원가에 근접하도록 학습했습니다.",
          "생성 결과를 규칙 기반 Guardrail이 마진 조건으로 검사해 위반 메뉴를 구조적으로 차단합니다. 모델이 틀려도 최종 출력에서 위반이 살아남지 않습니다.",
        ],
      },
      {
        label: "검증",
        body: [
          "SFT 자체의 기여는 원가 근접율 7.5% → 35% 향상으로 별도 측정했습니다.",
        ],
      },
    ],
    note: [
      "마진 위반율 0%는 Guardrail의 구조적 결과이며, SFT 모델의 성능 지표가 아닙니다.",
    ],
    stack: ["Qwen3-4B", "QLoRA", "Python"],
  },
  {
    id: "cau-web",
    title: "중앙대 예술공학대학 웹사이트 리뉴얼",
    meta: "UX Lead · 인터뷰 기반 IA 재설계",
    summary:
      "학생 5명·교수 2명 인터뷰로 \"기술 오작동 → 구식 디자인 → 콘텐츠 미갱신 → 방문 안 함\"이라는 악순환 구조를 발견하고 IA부터 재설계한 프로젝트",
    role: "UX Lead로 인터뷰 설계와 IA 재구성, Figma 와이어프레임, Next.js 구현을 담당했습니다.",
    blocks: [
      {
        label: "문제",
        body: [
          "인터뷰 결과 개별 불만은 제각각이었지만 하나의 순환 구조로 정리되었습니다. 기술 오작동이 구식 디자인 인상을 만들고, 관리자는 갱신 의욕을 잃고, 사용자는 방문하지 않습니다.",
        ],
      },
      {
        label: "구조 설계",
        body: [
          "IA를 재설계한 뒤 Figma 와이어프레임을 거쳐 Next.js로 구현했습니다.",
          "REST API 기반 콘텐츠 자동 갱신 구조로 '콘텐츠 미갱신' 고리를 끊는 데 집중했습니다.",
        ],
      },
      {
        label: "배운 점",
        body: [
          "개선 효과를 측정하기 위해 GA 삽입을 시도했으나 정책상 기각되었습니다. 측정 없이는 개선을 주장할 수 없다는 문제의식이 Google Analytics Certification 취득으로 이어졌습니다.",
        ],
      },
    ],
    stack: ["Next.js", "REST API", "Figma"],
  },
  {
    id: "dumndum",
    title: "덤앤덤",
    meta: "9th UMC Hackathon 우수상 · 6인 팀 PM",
    summary:
      "추상적 키워드('멍청비용')를 24시간 내 작동 MVP로 구체화한 6인 팀 PM 프로젝트",
    role: "PM으로 기획-디자인-개발 간 소통을 총괄했습니다.",
    blocks: [
      {
        label: "구조 설계",
        body: [
          "P0 / P1 / P2 우선순위 전략으로 24시간 안에 반드시 작동해야 하는 범위만 P0로 고정하고, 나머지는 시간이 남을 때만 다루도록 팀 합의를 만들었습니다.",
        ],
      },
    ],
    stack: ["Figma", "Notion"],
  },
];

export type SideProject = {
  title: string;
  meta: string;
  body: string;
};

export const sideProjects: SideProject[] = [
  {
    title: "Next Career",
    meta: "인텔 AI 융합 기획자 양성과정 해커톤 우수상",
    body: "음성 인터뷰 기반 AI 채용 플랫폼. Whisper → KoBERT/KoAlpaca → RAG로 이어지는 파이프라인을 설계했습니다.",
  },
  {
    title: "Monetai BD 캠페인",
    meta: "콜드메일 캠페인 · 표본 5곳",
    body: "100여 곳 후보 중 제품이 실제로 해결하는 문제를 가진 5곳만 남겨 정밀 타겟팅했습니다. 표본이 작아 오픈율·클릭률을 일반화할 수 없으며, 이 프로젝트의 핵심은 '왜 5곳만 선정했는가'의 판단 과정입니다.",
  },
  {
    title: "BarKit",
    meta: "Frontend Lead",
    body: "초기 아키텍처부터 핵심 기능까지 구현했고, 데모데이에서 70~80명을 대상으로 라이브 시연했습니다.",
  },
];

export const lessons = {
  title: "어기야팩토리 거래량 예측",
  status: "분석 진행 중 · 현업 확인 4건 미해결",
  quote:
    "가장 단순한 모델(Naive)이 가장 정확했다는 결론을 그대로 보고했다. 정확도를 높이는 것보다, 이 데이터로 예측이 성립하는 해상도와 대상이 어디까지인지 먼저 특정하는 것이 우선이라는 것을 배웠다.",
  body: [
    "시계열 예측 방법론을 비교하는 과제였습니다. 복잡한 모델이 단순 베이스라인을 이기지 못했을 때, 결과를 다듬어 보고하는 대신 그대로 보고하고 원인을 데이터 쪽에서 찾았습니다.",
    "이 프로젝트는 성과가 아니라 판단의 기록으로 남깁니다. 현업 확인이 필요한 항목 4건이 아직 해결되지 않았습니다.",
  ],
};

export const education = {
  school: "중앙대학교 예술공학부",
  detail: "4학년 2학기 재학 · 학점 4.09",
  certifications: [
    { name: "Google Analytics Certification", issuer: "Google" },
  ],
  footnote: "TOEIC Speaking IH (지원 자격 요건 충족)",
};
