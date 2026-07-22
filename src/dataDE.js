import fittingSpaceDashboard from './assets/fitting-space-dashboard.png';
import subwaySimulation from './assets/subway-simulation.png';
import ecommerce from './assets/Retention Cohort.png';
import synthetic from './assets/syntheticResult.png';
import diseaseDashboard from './assets/disease-dashboard.png';
import petRouteSystem from './assets/pet-walk.png';

export const portfolioData = {
  hero: {
    tag: "Data & MLOps Engineer",
    title: {
      regular: "AI 모델을 실제 서비스로 구현하는",
      gradient: "데이터 & MLOps 엔지니어",
      suffix: "입니다"
    },
    description: "안정적인 대용량 데이터 파이프라인과 클라우드 인프라 구축을 넘어, AI 모델이 최적의 환경에서 동작할 수 있는 시스템을 설계합니다. 데이터에 대한 깊은 이해를 바탕으로 모델 최적화부터 MLOps 기반의 배포까지 주도하여, AI 기술을 실제 비즈니스 가치로 전환합니다.",
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
      id: "data-engineering",
      iconName: "Database",
      iconColor: "#3b82f6",
      title: "데이터 파이프라인 및 인프라 구축",
      description: "다양한 이종 데이터를 통합하고, Azure, Docker, BigQuery 등의 클라우드 인프라를 활용하여 안정적이고 효율적인 데이터 처리 파이프라인을 구축합니다."
    },
    {
      id: "ai-mlops",
      iconName: "BrainCircuit",
      iconColor: "#8b5cf6",
      title: "AI 모델 최적화 및 MLOps",
      description: "인공지능 전공 지식을 바탕으로 생성형 AI 모델 성능 최적화, 합성 데이터(Synthetic Data) 검증, 그리고 클라우드 기반의 비용 효율적인 AI 모델 서빙 환경을 구축할 수 있습니다."
    },
    {
      id: "data-decision",
      iconName: "Map",
      iconColor: "#10b981",
      title: "데이터 기반 비즈니스 의사결정",
      description: "대용량 로그 퍼널/코호트 분석과 네트워크 시뮬레이션을 통해 비즈니스 병목을 발견하고, 대시보드 시각화 및 A/B 테스트로 실질적인 의사결정을 이끌어냅니다."
    }
  ],
  projects: [
    {
      id: "pet-walking-route",
      title: "데이터 엔지니어링 & 백엔드 & CI/CD: 반려동물 산책로 추천 시스템",
      meta: [
        { iconName: "Map", text: "Data Engineering & Backend" },
        { text: "팀 프로젝트" }
      ],
      tags: ["FastAPI", "Databricks", "Azure Blob Storage·PostgreSQL", "GitHub Actions", "Delta Lake","Medallion Architecture"],
      overview: "반려동물의 슬개골 보호를 위한 지형 정보 기반 맞춤형 산책로 추천 시스템을 개발하고, Azure 클라우드 환경에 배포했습니다.",
      approach: "Databricks 기반 Medallion Architecture 파이프라인 설계 및 GeoPandas를 활용한 이종 공간 데이터 전처리 파이프라인을 구축했습니다. FastAPI 백엔드에 캐싱 및 Fallback 메커니즘을 도입해 안정성을 높이고, GitHub Actions와 Azure App Service를 통해 CI/CD 배포 워크플로를 최적화했습니다.",
      result: "웹 지도 상 산책로 공간 데이터 이격률 0%를 달성하여 렌더링 정확도를 향상시키고, 외부 API 장애 시에도 서비스 가동률 99.9%를 유지했습니다. 또한 스케일링 전략으로 인프라 비용을 80% 이상 절감했습니다.",
      image: petRouteSystem,
      links: [
        { title: "GitHub", url: "https://github.com/yourkik", iconName: "github" }
      ]
    },
    {
      id: "disease-dashboard",
      title: "AI 통합 감염병 조기 경보 대시보드",
      meta: [
        { iconName: "Activity", text: "Full-stack & Data Pipeline" },
        { text: "팀 프로젝트" }
      ],
      tags: ["Next.js", "FastAPI", "dbt", "PostgreSQL", "Azure OpenAI"],
      overview: "공공데이터의 지연 및 월별 지역 확진자 통계 누락 문제를 해결하기 위해, 누락된 시계열 통계를 복원하고 지역별 감염병 확산 경로를 직관적으로 시각화하는 조기 경보 대시보드를 구축했습니다.",
      approach: "dbt와 PostgreSQL 기반의 ELT 아키텍처로 데이터를 정교하게 복원하고, GitHub Actions와 APScheduler를 활용해 파이프라인을 이원화했습니다. 또한 프롬프트 엔지니어링으로 Azure OpenAI의 의료 정책 필터를 우회하여 실시간 뉴스 RAG 기능을 구현했습니다.",
      result: "파이프라인 분리와 캐싱 시스템 도입으로 API 응답 시간을 0.1초 이내로 단축해 UX를 개선하였으며, 백엔드 배포 용량을 350MB에서 30MB로 크게 줄여 아키텍처 최적화를 달성했습니다.",
      image: diseaseDashboard,
      links: [
        { title: "GitHub", url: "https://github.com/yourkik/diseaseDashboard", iconName: "github" }
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
    },
    {
      id: "fitting-space",
      title: "가상 피팅 서비스 'Fitting Space' 파이프라인 및 MLOps 인프라 구축",
      meta: [
        { iconName: "BrainCircuit", text: "AI/MLOps & 클라우드 인프라" },
        { text: "팀 프로젝트" }
      ],
      tags: ["Azure AKS", "Docker", "CatVTON", "SAM", "MLOps"],
      overview: "온라인 의류 반품률 감소를 위한 가상 피팅 서비스 프로젝트에서 CatVTON 기반 이미지 생성 기능을 개발하고, Azure 클라우드 인프라 기반의 비용 효율적인 AI 파이프라인을 구축했습니다.",
      approach: "여러 AI 모델의 비용을 시각화하는 대시보드를 구축하여 가장 효율적인 CatVTON 인스턴스를 채택했습니다. 전체 프로젝트를 Docker 컨테이너화하여 ACR(Azure Container Registry)을 통해 AKS(Azure Kubernetes Service)에 배포했습니다.",
      result: "초기 AI 모델 선택 시 비용 분석을 통해 IDM-VTON 대비 월 $3,654의 인프라 비용을 절감했습니다. 또한 AKS Auto-Scaling을 적용하여 트래픽 폭증 대응과 미사용 시 비용 절감 효과를 극대화했습니다.",
      image: fittingSpaceDashboard,
      links: [
        { title: "GitHub", url: "https://github.com/hyeeeee-kim/FittingSpace", iconName: "github" }
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
