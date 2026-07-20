import fittingSpaceDashboard from './assets/fitting-space-dashboard.png';
import subwaySimulation from './assets/subway-simulation.png';
import ecommerce from './assets/Retention Cohort.png';
import synthetic from './assets/syntheticResult.png';
import diseaseDashboard from './assets/disease-dashboard.png';

export const portfolioData = {
  hero: {
    tag: "Backend Developer",
    title: {
      regular: "탄탄한 서버 설계와",
      gradient: "안정적인 클라우드 아키텍처",
      suffix: "를 구축합니다"
    },
    description: "Spring 기반의 견고한 객체 지향적 서버 설계부터 Azure 클라우드 환경에서의 대용량 트래픽 처리까지, 웹 서비스의 A to Z를 경험한 백엔드 개발자(산업기능요원)입니다. 새로운 기술 스택(Node.js, AWS) 환경에서도 아키텍처의 기본 원리를 바탕으로 빠르게 적응하여 실질적인 비즈니스 가치를 창출합니다.",
    email: "yourkik5@gmail.com",
    socialLinks: [
      {
        id: "github",
        url: "https://github.com/yourkik",
        icon: "github"
      }
    ]
  },
  about: [
    {
      id: "api-design",
      iconName: "Terminal",
      iconColor: "#3b82f6",
      title: "서버 설계 및 API 구현",
      description: "Spring MVC 및 Node.js(Next.js) 환경에서 RESTful API를 설계하고 구현하며, HTTP 통신 원리와 클라이언트-서버 구조에 대한 깊은 이해도를 갖추고 있습니다."
    },
    {
      id: "database-optimization",
      iconName: "Database",
      iconColor: "#10b981",
      title: "데이터베이스 모델링 및 최적화",
      description: "MariaDB, PostgreSQL과 같은 RDBMS 구조 설계 및 쿼리 튜닝 경험과 Cosmos DB, MongoDB 등 NoSQL을 활용한 대용량 데이터 분산 적재 경험을 보유하고 있습니다."
    },
    {
      id: "cloud-infrastructure",
      iconName: "Map",
      iconColor: "#8b5cf6",
      title: "클라우드 인프라 이해도",
      description: "Azure 클라우드(AKS, ACR 등) 환경에서 컨테이너 기반 인프라를 직접 구축하고 운영하며, 클라우드 네이티브 서비스의 핵심 아키텍처 원리를 숙지하고 있습니다."
    }
  ],
  projects: [
    {
      id: "game-recommendation",
      title: "Spring 기반 맞춤형 게임 추천 웹 서비스",
      meta: [
        { iconName: "Activity", text: "Backend Architecture" },
        { text: "개인 프로젝트" }
      ],
      tags: ["Java", "Spring Boot", "MariaDB", "RESTful API"],
      overview: "사용자의 취향을 분석하여 맞춤형 게임을 추천해 주는 웹 서비스의 백엔드 시스템을 전담하여 구축했습니다.",
      approach: "Spring MVC 패턴을 적용하여 비즈니스 로직과 프레젠테이션 계층을 명확히 분리하고 유지보수가 용이한 아키텍처를 설계했습니다. 사용자 정보와 추천 이력 관리를 위해 MariaDB를 정규화하여 스키마를 구성했습니다.",
      result: "다수의 테이블 조인으로 발생하던 성능 저하 병목을 인덱스 최적화 및 쿼리 튜닝을 통해 해결하여 응답 속도를 대폭 개선했습니다. (이러한 Spring 기반의 DI/AOP 경험은 NestJS 등 유사 프레임워크에 빠르게 적응할 수 있는 핵심 역량입니다.)",
      image: null,
      links: [
        { title: "GitHub", url: "https://github.com/yourkik", iconName: "github" }
      ]
    },
    {
      id: "disease-dashboard",
      title: "클라우드 기반 대용량 감염병 대시보드 및 API 서버",
      meta: [
        { iconName: "Database", text: "Full-stack & API" },
        { text: "팀 프로젝트" }
      ],
      tags: ["Next.js", "PostgreSQL", "Azure Cosmos DB", "Azure Cloud"],
      overview: "방대한 감염병 공공 데이터를 실시간으로 시각화하는 풀스택 웹 대시보드 프로젝트에서 데이터베이스 설계 및 API 연동을 담당했습니다.",
      approach: "관계형 DB(PostgreSQL)와 NoSQL(Azure Cosmos DB)을 하이브리드로 구성하여 각 데이터 성격에 맞게 분산 적재했습니다. Next.js 기반에서 클라이언트와 백엔드 간 비동기 데이터 통신(API)을 구현했습니다.",
      result: "Azure 클라우드 환경에서 DB 프로비저닝을 성공적으로 수행했으며, JavaScript 기반 생태계에서의 비동기 처리(Promise/async-await) 역량을 확립하여 Node.js 백엔드 개발을 위한 기반을 다졌습니다.",
      image: diseaseDashboard,
      links: [
        { title: "GitHub", url: "https://github.com/yourkik/diseaseDashboard", iconName: "github" }
      ]
    },
    {
      id: "twitter-clone",
      title: "트위터 클론 코딩 (웹 게시판 백엔드)",
      meta: [
        { iconName: "Terminal", text: "Backend Fundamentals" },
        { text: "개인 프로젝트" }
      ],
      tags: ["PostgreSQL", "CRUD", "Web Server"],
      overview: "트위터의 핵심 기능인 게시글 작성, 수정, 삭제 및 팔로우 기능을 구현하며 웹 백엔드의 기본(CRUD)을 다졌습니다.",
      approach: "PostgreSQL을 활용하여 관계형 데이터베이스 테이블 설계, 다중 테이블 조인 및 트랜잭션 관리를 실습했습니다.",
      result: "관계형 데이터베이스의 무결성을 유지하며 비즈니스 로직을 처리하는 서버 개발의 기초를 완성했습니다.",
      image: null,
      links: []
    }
  ],
  education: {
    school: "가천대학교 컴퓨터공학 관련 전공 (인공지능전공)",
    period: "2022.03 ~ (재학/휴학 중)",
    courses: "자료구조, 알고리즘, 인공지능 개론, 데이터 마이닝, 기계학습",
    description: "컴퓨터 과학의 기초가 되는 자료구조와 알고리즘을 학습하며 로직 설계 능력을 길렀습니다. 이를 바탕으로 대용량 데이터를 다루고 시스템을 최적화하는 다양한 소프트웨어 공학 지식을 쌓았습니다."
  },
  certifications: [
    { title: "정보처리업종 산업기능요원 자격 보유", issuer: "병무청" },
    { title: "정보처리기사", issuer: "한국산업인력공단" },
    { title: "빅데이터분석기사", issuer: "한국데이터산업진흥원" }
  ]
};
