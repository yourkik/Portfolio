import fittingSpaceDashboard from './assets/fitting-space-dashboard.png';
import subwaySimulation from './assets/subway-simulation.png';
import ecommerce from './assets/Retention Cohort.png';
import synthetic from './assets/syntheticResult.png';

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
      id: "fitting-space",
      title: "가상 피팅 서비스 'Fitting Space' 파이프라인 및 MLOps 인프라 구축",
      meta: [
        { iconName: "BrainCircuit", text: "AI/MLOps & 클라우드 인프라" },
        { text: "팀 프로젝트" }
      ],
      tags: ["Azure AKS", "Docker", "CatVTON", "SAM", "MLOps"],
      overview: "온라인 의류 반품률 감소를 위한 가상 피팅 서비스 프로젝트에서 CatVTON 기반 이미지 생성 기능을 개발하고, Azure 클라우드 인프라 기반의 AI 파이프라인을 구축했습니다.",
      approach: "사람 인식 개선을 위해 CatVTON과 SAM, Grounding DINO를 연계하여 이미지 생성 품질을 높였고, 고용량 GPU 연산을 분리 처리하여 안정성을 확보했습니다. 전체 프로젝트를 Docker 컨테이너화하여 ACR(Azure Container Registry)을 통해 AKS(Azure Kubernetes Service)에 배포했습니다.",
      result: "최초 콜드 스타트를 제외하고 1분 이내의 생성 성능을 확보했으며, AKS Auto-Scaling 및 Service Bus를 통한 메시지 대기열 방식을 적용하여 트래픽 폭증 대응과 미사용 시 비용 절감(비용 효율성)을 달성했습니다.",
      image: fittingSpaceDashboard,
      links: [
        { title: "GitHub", url: "https://github.com/hyeeeee-kim/FittingSpace", iconName: "github" }
      ]
    },
    {
      id: "gcf-project",
      title: "GCF Project 정보 공개 통합 데이터베이스 구축",
      meta: [
        { iconName: "Database", text: "데이터 엔지니어링" },
        { text: "팀 프로젝트" }
      ],
      tags: ["Python", "Pandas", "Data Pipeline"],
      overview: "GCF Project 정보 공개 사이트 제작을 위해 다양한 포맷(VROD, OffsetDB 등)의 비정형 데이터를 확보, 분석 및 정제하여 하나의 일관된 데이터베이스를 구축했습니다.",
      approach: "업데이트가 중단된 기존 API의 한계를 파악하여 원본 엑셀 파일에 직접 접근하는 추출 파이프라인을 구축했습니다. 상이한 데이터 표기법을 표준화하고 텍스트 정규화 전처리 로직을 설계했습니다.",
      result: "다양한 이종 데이터를 통합하여 고품질의 DB를 성공적으로 구축하였으며, 향후 데이터 분석가가 즉시 활용할 수 있는 안정적인 환경을 마련했습니다.",
      links: [
        { title: "Colab", url: "https://colab.research.google.com/drive/1HneN3OGKX14mUDzNA7mdWhk5rXTLEraK?usp=sharing", iconName: "googleColab" }
      ]
    },
    {
      id: "ecommerce-growth",
      title: "이커머스 Growth Hacking 대용량 로그 분석 및 BI 구축",
      meta: [
        { iconName: "Database", text: "데이터 분석 및 엔지니어링" },
        { text: "개인 프로젝트" }
      ],
      tags: ["SQL", "BigQuery", "Python", "Looker Studio"],
      overview: "약 5GB, 4,000만 건 이상의 대용량 이커머스 로그 데이터를 BigQuery 환경에 적재하고 AARRR 프레임워크 기반으로 분석한 그로스 해킹 프로젝트입니다.",
      approach: "대용량 데이터를 분석하기 위한 인프라를 구축한 뒤, 퍼널 분석과 코호트 분석을 진행했습니다. 발견된 인사이트를 바탕으로 핵심 KPI를 실시간 모니터링할 수 있는 BI 대시보드를 연동했습니다.",
      result: "가입 1일 차 이탈률(90%)의 병목을 수치화하고, 이를 개선하기 위한 CRM 마케팅 A/B 테스트 전략을 도출하여 데이터 기반의 실질적 해결책을 제시했습니다.",
      image: ecommerce,
      links: [
        {
          title: "보고서 보기",
          url: "https://detailed-nerine-1ce.notion.site/Big-Query-Ecomerce-35f02e2b71278096848cea9e15dc6f39?source=copy_link",
          iconName: "notion"
        }
      ]
    },
    {
      id: "subway-simulation",
      title: "다양한 공공 데이터 통합 기반 지하철 5호선 직결화 B/C 분석 시뮬레이터 개발",
      meta: [
        { iconName: "Map", text: "5호선 직결화 시나리오 분석" },
        { text: "개인 프로젝트" }
      ],
      tags: ["Python", "NetworkX", "ODSAY API"],
      overview: "5호선 직결화 사업에 대한 기존 연구의 비용/편익(B/C) 타당성을 검증하기 위해, 교통 및 이동 관련 공공 데이터를 기반으로 미래 교통망 시나리오를 반영한 시뮬레이터를 개발했습니다.",
      approach: "OD 데이터, 역간 거리, 지하철 공사 계획표, 최소 경로 등 다양한 형태의 국가/공공 데이터를 ODSAY API와 매핑하여 일관된 분석용 데이터로 통합했습니다. 미래에 완공될 연장 노선 수요를 예측하는 자체 네트워크 모델을 구축했습니다.",
      result: "통합 데이터를 통한 시뮬레이션 결과, 사용자 수와 시간 편익 측면에서 기존 타당성 연구 대비 실질 편익이 약 16% 하락할 가능성을 객관적 수치로 증명했습니다.",
      image: subwaySimulation,
      links: [
        { title: "GitHub", url: "https://github.com/yourkik/Analysis-Line5-Direct-Connection/tree/main", iconName: "github" },
        { title: "보고서 보기", url: "https://github.com/yourkik/Analysis-Line5-Direct-Connection/tree/main/docs", iconName: "github" }
      ]
    },
    {
      id: "synthetic-data",
      title: "AI 학습용 합성 데이터 검증 자동화 파이프라인 구축",
      meta: [
        { iconName: "Terminal", text: "Aimmo 현장실습 (2개월)" },
        { text: "현장 실습" }
      ],
      tags: ["Python", "PyTorch", "Synthetic Data"],
      overview: "에이모(Aimmo) 현장실습 기간 동안 실제 데이터 수집 비용의 한계를 극복하기 위해 합성 데이터(Synthetic Data)를 생성하고 검증하는 자동화 파이프라인 연구를 수행했습니다.",
      approach: "원본 데이터와 합성 데이터를 무작위로 교차 투입하여 시맨틱 세그멘테이션 모델(DeepLabV3)을 학습시키는 실험 파이프라인을 직접 설계했습니다. 혼동 행렬 분석으로 클래스별 성능 변화를 추적했습니다.",
      result: "합성 데이터를 63%까지 증강하여 모델을 학습시킨 결과, 전체 성능(mIoU 0.58)이 유효하게 유지됨을 수치로 증명하여 실측 데이터 수집 비용 절감 근거를 마련했습니다.",
      image: synthetic,
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
