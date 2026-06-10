export const portfolioData = {
  hero: {
    tag: "AI & Data Analyst",
    title: {
      regular: "데이터 속에서 ",
      gradient: "비즈니스 가치",
      suffix: "를 발굴합니다"
    },
    description: "인공지능을 전공하며 데이터의 중요성을 깊이 이해하고, 통계적 분석과 머신러닝 기법을 활용하여 실질적인 문제 해결책을 도출하는 데이터 분석가입니다.",
    email: "yourkik5@gmail.com",
    socialLinks: [
      {
        id: "github",
        url: "https://github.com/yourkik", // <-- GitHub 주소
        icon: "github" // 렌더링 시 아이콘 매핑 용도
      }
    ]
  },
  about: [
    {
      id: "data-decision",
      iconName: "Database",
      iconColor: "#3b82f6",
      title: "데이터 기반 의사결정",
      description: "단순한 추측이 아닌 OD 데이터, API 기반 이동 경로 등 철저한 데이터 수집과 가공을 통해 객관적인 시나리오를 구성하고 논리적인 결론을 도출합니다."
    },
    {
      id: "ai-model",
      iconName: "BrainCircuit",
      iconColor: "#8b5cf6",
      title: "AI 모델 및 통계 기법 활용",
      description: "인공지능 전공 지식을 바탕으로 합성 데이터(Synthetic Data)를 통한 AI 학습 성능 개선부터, 다양한 통계 및 시뮬레이션 기법을 실무 문제에 적용할 수 있습니다."
    }
  ],
  projects: [
    {
      id: "subway-simulation",
      title: "지하철 노선 직결화 B/C 분석 시뮬레이션",
      meta: [
        { iconName: "Map", text: "5호선 길동-둔촌 직결화 시나리오 분석" },
        { text: "개인 프로젝트" }
      ],
      tags: ["Python", "Data Analysis", "ODSAY API"],
      overview: "5호선 길동역과 둔촌동역의 직결화 사업에 대한 기존 연구의 비용/편익(B/C) 타당성을 검증하기 위해 실제 지하철/버스 OD 데이터와 새로운 교통망 시나리오를 반영한 시뮬레이터를 개발했습니다.",
      approach: "지하철과 버스의 O/D(기종점) 데이터와 각 역의 좌표 정보, ODSAY API를 활용한 최소 경로 및 시간 데이터를 수집하여 통행량을 추정했습니다. 특히 완공 예정인 송파하남선과 9호선 연장 역들을 시뮬레이터에 추가 반영하여 미래 수요를 예측했습니다.",
      result: "미래 교통망 변화를 반영한 시뮬레이션 결과, 사용자 수와 시간 편익 측면에서 기존 연구 대비 수익성이 크게 하락함을 입증해냈으며, 이를 보완할 수 있는 새로운 노선 운영 해결책을 제안했습니다.",
      links: [
        { title: "GitHub", url: "https://github.com/yourkik/Analysis-Line5-Direct-Connection/tree/main", iconName: "github" },
        { title: "보고서 보기", url: "https://github.com/yourkik/Analysis-Line5-Direct-Connection/tree/main/docs", iconName: "github" }
      ]
    },
    {
      id: "synthetic-data",
      title: "합성 데이터를 활용한 AI 학습 변화 탐구",
      meta: [
        { iconName: "Terminal", text: "Aimmo 현장실습 (2개월)" },
        { text: "현장 실습" }
      ],
      tags: ["Synthetic Data", "Computer Vision", "Data Augmentation"],
      overview: "에이모(Aimmo) 현장실습 기간 동안 실제 데이터 수집의 한계를 극복하기 위해 합성 데이터(Synthetic Data)를 생성하고 이를 AI 모델 학습에 적용하는 연구를 수행했습니다.",
      approach: "현업 환경에서 데이터 파이프라인의 구조를 파악하고, 합성 데이터의 품질과 다양성이 AI 모델의 정확도 및 일반화 성능에 미치는 영향을 정량적으로 비교 분석했습니다.",
      result: "고품질 데이터 확보의 중요성과 최신 전처리 기법 실무를 경험할 수 있었습니다.",
      links: [
        { title: "GitHub", url: "https://github.com/yourkik/CityScape-synthetic-data-check", iconName: "github" },
        { title: "보고서 보기", url: "https://detailed-nerine-1ce.notion.site/19d02e2b71278015a033c745f629192d?source=copy_link", iconName: "notion" }
      ]
    }
  ],
  education: {
    school: "가천대학교 인공지능전공",
    period: "2022.03 ~ (재학/휴학 중)",
    courses: "인공지능 개론, 기계학습, 데이터 마이닝, 통계학 입문, 자료구조, 알고리즘",
    description: "인공지능의 근간이 되는 수학적/통계적 기법들을 심도 있게 학습했습니다. 대용량 데이터를 전처리하고 통계적 기법을 통해 유의미한 패턴을 찾아내는 데이터 마이닝 기술, 다양한 머신러닝 알고리즘의 원리 및 하이퍼파라미터 튜닝 최적화 기법을 익혔습니다."
  },
  certifications: [
    { title: "정보처리기사", issuer: "한국산업인력공단" },
    { title: "빅데이터분석기사", issuer: "한국데이터산업진흥원" }
  ]
};
