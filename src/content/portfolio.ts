/*
  모든 문구는 이 파일에서만 관리합니다.
*/

export type HeroPiece = { text: string; box?: boolean };

/** 히어로 3줄. box: true 인 조각은 박스 안에서 스크롤에 따라 올라옵니다. */
const heroLines: HeroPiece[][] = [
  [
    { text: "구조", box: true },
    { text: "를 기반으로" },
  ],
  [{ text: "AI를 설계하는", box: true }],
  [
    { text: "박정민", box: true },
    { text: "입니다." },
  ],
];

export const profile = {
  name: "박정민",
  nameEn: "Jeongmin Park",
  headline: "구조를 기반으로 AI를 설계하는 박정민",
  heroLines,
  email: "pjm010429@gmail.com",
  links: [
    { label: "GitHub", href: "https://github.com/jeongminnnnni" },
    {
      label: "LinkedIn",
      href: "https://www.linkedin.com/in/jeong-min-park-60566139a",
    },
  ],
};

/** 헤더 내비. sections: 스크롤 스파이에서 이 항목을 활성화할 섹션 id 목록 */
export const nav = [
  {
    id: "about",
    label: "About",
    sections: ["about", "skills", "experience", "education"],
  },
  { id: "projects", label: "Work", sections: ["projects", "side-projects"] },
];

export const about = {
  lead: "비즈니스 기획, AI, 개발을 한 흐름으로 연결합니다.",
  body: [
    "일상의 불편부터 기업의 문제까지, AI를 활용해 해결할 수 있는 방법을 고민하며 아이디어 → 문제 정의 → 서비스 설계 → 구현의 전 과정을 경험했습니다. 기획, AI, 개발, 디자인 등 서로 다른 역할의 언어를 이해하고 각자의 관점을 연결해 하나의 결과물로 만드는 데 강점이 있습니다.",
  ],
  philosophyLabel: "설계 철학",
  philosophy:
    "AI의 창의적 생성과 생산성을 극대화하고 최종 판단은 도메인 지식과 규칙 기반 구조로 통제해 틀려도 정답이 살아남는 시스템을 구축합니다.",
};

export type SkillGroup = { title: string; items: string[] };

export const skills: SkillGroup[] = [
  {
    title: "AI / AX",
    items: [
      "RAG 진단·고도화 (청킹 정책, 하이브리드 검색, RRF)",
      "LLM + Rule 하이브리드 구조 설계 (Guardrail)",
      "SFT 파인튜닝 (QLoRA)",
    ],
  },
  {
    title: "데이터",
    items: [
      "Python 기반 통계·ML 비교 실험",
      "시계열 예측 방법론 비교"
    ],
  },
  {
    title: "개발",
    items: [
      "React / Next.js / TypeScript 기반 프론트엔드 개발",
      "REST API 기반 콘텐츠 구조 구현",
      "Figma 와이어프레임 및 UI/UX 디자인",
    ],
  },
  {
    title: "기획 / PM",
    items: [
      "PRD 작성, 화면설계",
      "P0 / P1 / P2 우선순위 전략",
      "C-level을 포함한 이해관계자 커뮤니케이션",
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
    role: "AX 컨설팅 프로젝트 어시스턴트",
    period: "2026.07 — 현재",
    ongoing: true,
    bullets: [
      "중소기업 대상 AX·데이터 컨설팅 프로젝트 참여 (사내 RAG 챗봇 고도화, 거래량 예측 적용가능성 진단)",
      "정부 지원 DX 적용지원 사업 참여 기업의 C-level 대상 요구사항 정의, 집체교육 현장 지원",
      "교육 영상 후처리 자동화 파이프라인 단독 구축 (3편 게시, 46개 참여 기업 수강 예정)",
    ],
  },
];

export type EducationRow = { title: string; detail: string };

export const education: EducationRow[] = [
  { title: "중앙대학교 예술공학부", detail: "4학년 재학(졸업 예정) · 학점 4.09" },
  { title: "Google Analytics Certification", detail: "Google" },
  { title: "TOEIC Speaking", detail: "Intermediate High" },
  { title: "AI for Future Workforce", detail: "AI 기술 구조와 이를 활용한 서비스 기획 방법론 학습"},
  { title: "하나 청년 금융인재 양성 프로젝트 소프트웨어 교육", detail: "금융 서비스 개발에 필요한 소프트웨어 전반 교육과정 이수"}
];

export type ProjectBlock = { label: string; body: string[] };

export type Project = {
  id: string;
  title: string;
  meta: string;
  summary: string;
  role: string;
  blocks: ProjectBlock[];
  stack: string[];
};

export const projects: Project[] = [
  {
<<<<<<< HEAD
    id: "logistics-rag",
    title: "물류사 사내 지식검색 챗봇 RAG 고도화",
=======
    id: "leona-rag",
    title: "물류회사 사내 지식검색 챗봇 RAG 고도화",
>>>>>>> ae172fcb3d53c3b04f277681ae24b158470e8ee9
    meta: "KMAC AX 컨설팅 · 클라이언트 프로젝트",
    summary:
      "실사용 규모로 넓힐 때마다 드러난 답변 품질 문제를 데이터·검색·근거 전달·대화 구조의 층으로 갈라 진단하고, 고친 뒤 회귀 검증으로 확인한 컨설팅 프로젝트",
    role: "AI 코딩 에이전트(Claude Code)로 구현하고, 문제 정의·검증 설계·클라이언트 보고를 맡았습니다. 정리한 해결안은 시니어 컨설턴트 검토를 거쳐 대부분 그대로 채택되었습니다.",
    blocks: [
      {
        label: "요구 재정의",
        body: [
          "클라이언트 요구는 \"대화 이력에 토큰을 더 배정해 달라\"였습니다. 숫자를 바꾸기 전에 에이전트에 시스템 구조부터 파악시켜 원인을 진단하게 했고, 원인은 예산이 아니라 대화 처리 구조였습니다.",
          "구조만 고쳐 정답 15 → 26턴. 실패 사례 기반 평가셋 기준 멀티턴 정답률 약 60% → 97%, 응답 생성 시간 절반.",
        ],
      },
      {
        label: "구조 설계",
        body: [
          "줄이기 전에 측정: 사서함을 1명 → 3명(2.2만 → 5.4만 통)으로 넓히자 중복 노이즈가 생겼습니다. 원문의 56%가 반복 인용임을 먼저 측정하고 청킹을 재설계해 메일당 8.3 → 2.6청크(약 69% 감소)로 줄였습니다.",
          "의미(bge-m3)·키워드(BM25)·인식어 3중 검색을 RRF로 융합. 인식이 틀려도 정답이 상위에 남는 구조입니다.",
          "인라인 출처칩 + 근거 카드: 답변 생성 후 근거를 덧붙이는 방식이라 LLM 비용 추가 0.",
        ],
      },
      {
        label: "검증",
        body: [
          "실제 실패 사례를 회귀 테스트로 고정해 수정할 때마다 재확인했습니다.",
        ],
      },
      {
        label: "기대 효과",
        body: ["월 4시간 절감, 클레임 20% 감소"],
      },
    ],
    stack: ["RAG", "bge-m3", "ChromaDB", "BM25 + RRF", "gpt-oss:120b", "FastAPI"],
  },
  {
    id: "doody",
    title: "AI 금융 자립 플랫폼 - DOODY ",
    meta: "하나 청년 금융 인재양성 프로젝트 · 221팀 중 13팀 최종 선발",
    summary:
      "은둔 청년의 심리적 장벽에 주목해 위로 → 작은 행동 → 큰 행동 → 자립의 단계적 회복 구조를 설계한 AI 금융 자립 플랫폼",
    role: "서비스 기획과 UI/UX 디자인을 맡았습니다. v1에서는 PRD·캐릭터·UX 설계와 Next.js 목사이트 개발을, v2에서는 PRD·화면 설계와 UI/UX 설계, 판단 엔진의 설계 철학 제안을 담당했습니다.",
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
          "PRD와 화면 설계를 맡았고, UX 100%, UI 80~90%를 직접 설계했습니다.",
        ],
      },
    ],
    stack: ["Next.js", "Figma"],
  },
  {
    id: "menu-ai",
    title: "신메뉴 추천 AI : 마진 제약 보장 소상공인 신메뉴 추천",
    meta: "2인 팀 · 시스템 설계 · SFT · Guardrail",
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
          "원가 근접율 7.5% → 35% (SFT 기여)",
          "마진 위반율 0% (Guardrail 구조)",
        ],
      },
    ],
    stack: ["Qwen3-4B", "QLoRA", "Python"],
  },
  {
    id: "video-pipeline",
    title: "교육 영상 후처리 자동화 파이프라인",
    meta: "KMAC AX 컨설팅 · 업무 자동화 · 전 과정 단독 수행",
    summary:
      "편당 약 6시간짜리 강의 영상의 후처리에서 사람의 판단만 남기고 나머지를 자동화한 재사용 파이프라인",
    role: "설계·구현·검증·인수인계 문서화까지 전 과정을 단독으로 수행했습니다.",
    blocks: [
      {
        label: "문제",
        body: [
          "쉬는시간 제거, 자막, 웹캠 마스킹, 분할에 사람 작업이 1편당 약 6~7시간 들었고, 같은 형태의 영상이 계속 발생하는 구조였습니다.",
        ],
      },
      {
        label: "구조 설계",
        body: [
          "사람의 판단 대상을 영상에서 텍스트로 전환: 무음 구간과 앞뒤 자막 문맥으로 쉬는시간 후보를 제시하고, 최종 확정만 사람이 합니다.",
          "컷·마스킹·자막 Burn-in을 단일 FFmpeg 인코딩으로 통합하고, 수정 시 변경 구간만 재처리합니다.",
          "편집 로직과 영상별 설정(JSON)을 분리해 코드 수정 없이 재사용합니다.",
        ],
      },
      {
        label: "검증",
        body: [
          "자막 오인식 후보를 AI로 전수 탐지하고 사람은 채택 여부만 판정했습니다. 이 과정에서 자막 표시시간 상한이 적용되지 않던 파이프라인 결함을 직접 찾아 수정했습니다.",
        ],
      },
      {
        label: "결과",
        body: [
          "사람 작업 1편당 약 6~7시간 → 약 30분 · 동일 포맷 영상 3편 적용",
          "사업 웹사이트 게시 완료 · 46개 참여 기업 수강 예정",
        ],
      },
    ],
    stack: ["Python", "faster-whisper", "FFmpeg", "Claude Code"],
  },
  {
    id: "cau-web",
    title: "중앙대 예술공학대학 웹사이트 리뉴얼",
    meta: "UX Lead · 인터뷰 기반 IA 재설계",
    summary:
      "학생 5명·교수 2명 인터뷰로 기술 오작동 → 구식 디자인 → 콘텐츠 미갱신 → 방문 안 함이라는 악순환 구조를 발견하고 IA부터 재설계한 프로젝트",
    role: "UX Lead로 인터뷰 설계와 IA 재구성, Figma 와이어프레임, Next.js 구현을 담당했습니다.",
    blocks: [
      {
        label: "문제",
        body: [
          "개별 불만은 제각각이었지만 하나의 순환 구조로 정리되었습니다. 기술 오작동이 구식 디자인 인상을 만들고, 관리자는 갱신 의욕을 잃고, 사용자는 방문하지 않습니다.",
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
  {
<<<<<<< HEAD
    id: "seafood-forecast",
    title: "수산물 거래량 예측",
=======
    id: "eogiya",
    title: "수산물 유통 회사 거래량 예측",
>>>>>>> ae172fcb3d53c3b04f277681ae24b158470e8ee9
    meta: "거래량 데이터 분석 · 시계열 예측 방법론 비교",
    summary:
      "Naive 베이스라인부터 통계·ML 모델까지 동일 조건에서 비교해, 이 데이터로 예측이 성립하는 해상도와 대상을 먼저 특정한 분석 프로젝트",
    role: "방법론 비교 실험 설계와 결과 보고를 담당했습니다.",
    blocks: [
      {
        label: "접근",
        body: [
          "무거래일이 28%라 일별 예측은 부적합하다고 판단하고, 발주 주기에 맞춘 2주 누적 판매량으로 예측 단위를 재정의했습니다.",
          "Naive를 기준선으로 통계·ML 모델을 Walk-forward 방식으로 같은 조건에서 비교했습니다.",
        ],
      },
      {
        label: "결론",
        body: [
          "전체 합산에서는 2주 단위 오차(WAPE) 21.7%로 예측이 성립했지만, 제품군별로 전수 검증하자 8개 중 실무 적용이 가능한 것은 1개뿐이었습니다. 이 결론을 그대로 보고했습니다.",
          "전체 집계에서 성립한 결론이 실제 의사결정 단위에서도 성립하는지는 따로 검증해야 합니다.",
        ],
      },
    ],
    stack: ["Python", "시계열 예측", "Walk-forward 검증"],
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
    meta: "인텔 AI 융합 기획자 양성과정 우수상",
    body: "음성 인터뷰 기반 AI 채용 플랫폼. Whisper → KoBERT/KoAlpaca → RAG로 이어지는 파이프라인을 설계했습니다.",
  },
  {
    title: "Monetai BD 캠페인",
    meta: "콜드메일 캠페인",
    body: "100여 곳 후보 중 제품이 실제로 해결하는 문제를 가진 5곳만 남겨 정밀 타겟팅했습니다. '왜 5곳인가'를 기준으로 후보를 좁힌 판단 과정이 핵심입니다.",
  },
  {
    title: "BarKit",
    meta: "Frontend Lead",
    body: "초기 아키텍처부터 핵심 기능까지 구현했고, 데모데이에서 70~80명을 대상으로 라이브 시연했습니다.",
  },
];
