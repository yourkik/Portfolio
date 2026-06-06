import { useEffect } from 'react';
import { 
  Mail, 
  ChevronRight, 
  Terminal, 
  Database, 
  BrainCircuit, 
  Map, 
  BookOpen,
  Award
} from 'lucide-react';
import './index.css';

function App() {
  // Intersection Observer for scroll animations
  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('animate-fade-up');
          entry.target.classList.remove('opacity-0');
        }
      });
    }, { threshold: 0.1 });

    document.querySelectorAll('.reveal').forEach((el) => {
      el.classList.add('opacity-0');
      observer.observe(el);
    });

    return () => observer.disconnect();
  }, []);

  return (
    <div className="portfolio-wrapper">
      {/* Hero Section */}
      <section className="hero container">
        <div className="reveal">
          <div className="tag">AI & Data Analyst</div>
          <h1>데이터 속에서 <br/><span className="text-gradient">비즈니스 가치</span>를 발굴합니다</h1>
          <p>
            인공지능을 전공하며 데이터의 중요성을 깊이 이해하고, 통계적 분석과 머신러닝 기법을 활용하여 
            실질적인 문제 해결책을 도출하는 데이터 분석가입니다.
          </p>
          <div style={{ display: 'flex', gap: '1rem', justifyContent: 'center', marginTop: '2rem' }}>
            <a href="#projects" className="btn btn-primary">
              프로젝트 보기 <ChevronRight size={18} />
            </a>
            <a href="mailto:your.email@example.com" className="btn btn-outline">
              <Mail size={18} /> 연락하기
            </a>
          </div>
          <div style={{ display: 'flex', gap: '1.5rem', justifyContent: 'center', marginTop: '3rem', color: 'var(--text-secondary)' }}>
            <a href="#" className="hover:text-white transition-colors">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path></svg>
            </a>
            <a href="#" className="hover:text-white transition-colors">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path><rect x="2" y="9" width="4" height="12"></rect><circle cx="4" cy="4" r="2"></circle></svg>
            </a>
          </div>
        </div>
      </section>

      {/* About Me Section */}
      <section id="about" className="container">
        <div className="section-title reveal">
          <h2>About Me</h2>
          <p>저를 소개하는 3가지 핵심 역량입니다.</p>
        </div>
        <div className="grid-2">
          <div className="glass-panel reveal delay-1">
            <Database size={40} color="#3b82f6" style={{marginBottom: '1.5rem'}} />
            <h3>데이터 기반 의사결정</h3>
            <p className="text-secondary">
              단순한 추측이 아닌 OD 데이터, API 기반 이동 경로 등 철저한 데이터 수집과 가공을 통해 
              객관적인 시나리오를 구성하고 논리적인 결론을 도출합니다.
            </p>
          </div>
          <div className="glass-panel reveal delay-2">
            <BrainCircuit size={40} color="#8b5cf6" style={{marginBottom: '1.5rem'}} />
            <h3>AI 모델 및 통계 기법 활용</h3>
            <p className="text-secondary">
              인공지능 전공 지식을 바탕으로 합성 데이터(Synthetic Data)를 통한 AI 학습 성능 개선부터, 
              다양한 통계 및 시뮬레이션 기법을 실무 문제에 적용할 수 있습니다.
            </p>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="container">
        <div className="section-title reveal">
          <h2>Featured Projects</h2>
          <p>실제 데이터를 다루고 문제를 해결했던 핵심 경험입니다.</p>
        </div>

        <div className="glass-panel project-card reveal">
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', flexWrap: 'wrap', gap: '1rem' }}>
            <div>
              <h3>지하철 노선 직결화 B/C 분석 시뮬레이션</h3>
              <div className="project-meta">
                <span><Map size={16} /> 5호선 길동-둔촌 직결화 시나리오 분석</span>
                <span>개인 프로젝트</span>
              </div>
            </div>
            <div>
              <span className="tag">Python</span>
              <span className="tag">Data Analysis</span>
              <span className="tag">ODSAY API</span>
            </div>
          </div>
          <div className="project-content">
            <p>
              <span className="highlight">개요:</span> 5호선 길동역과 둔촌동역의 직결화 사업에 대한 기존 연구의 비용/편익(B/C) 타당성을 검증하기 위해 
              실제 지하철/버스 OD 데이터와 새로운 교통망 시나리오를 반영한 시뮬레이터를 개발했습니다.
            </p>
            <p>
              <span className="highlight">문제 및 접근방식:</span> 
              지하철과 버스의 O/D(기종점) 데이터와 각 역의 좌표 정보, ODSAY API를 활용한 최소 경로 및 시간 데이터를 수집하여 통행량을 추정했습니다. 
              특히 완공 예정인 송파하남선과 9호선 연장 역들을 시뮬레이터에 추가 반영하여 미래 수요를 예측했습니다.
            </p>
            <p>
              <span className="highlight">결과:</span> 
              미래 교통망 변화를 반영한 시뮬레이션 결과, 사용자 수와 시간 편익 측면에서 <strong style={{color: '#fff'}}>기존 연구 대비 수익성이 크게 하락함</strong>을 입증해냈으며, 
              이를 보완할 수 있는 새로운 노선 운영 해결책을 제안했습니다.
            </p>
          </div>
        </div>

        <div className="glass-panel project-card reveal delay-1">
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', flexWrap: 'wrap', gap: '1rem' }}>
            <div>
              <h3>합성 데이터를 활용한 AI 학습 변화 탐구</h3>
              <div className="project-meta">
                <span><Terminal size={16} /> Aimmo 현장실습 (2개월)</span>
                <span>현장 실습</span>
              </div>
            </div>
            <div>
              <span className="tag">Synthetic Data</span>
              <span className="tag">Machine Learning</span>
              <span className="tag">Data Augmentation</span>
            </div>
          </div>
          <div className="project-content">
            <p>
              <span className="highlight">개요:</span> 에이모(Aimmo) 현장실습 기간 동안 실제 데이터 수집의 한계를 극복하기 위해 
              합성 데이터(Synthetic Data)를 생성하고 이를 AI 모델 학습에 적용하는 연구를 수행했습니다.
            </p>
            <p>
              <span className="highlight">역할 및 배운 점:</span> 
              현업 환경에서 데이터 파이프라인의 구조를 파악하고, 합성 데이터의 품질과 다양성이 AI 모델의 정확도 및 일반화 성능에 미치는 영향을 
              정량적으로 비교 분석했습니다. 고품질 데이터 확보의 중요성과 최신 전처리 기법 실무를 경험할 수 있었습니다.
            </p>
          </div>
        </div>
      </section>

      {/* Education & Certifications Section */}
      <section id="education" className="container" style={{ paddingBottom: '8rem' }}>
        <div className="grid-2">
          <div className="reveal">
            <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', marginBottom: '2rem' }}>
              <BookOpen size={32} color="#3b82f6" />
              <h2 style={{ marginBottom: 0 }}>Education</h2>
            </div>
            <div className="glass-panel">
              <h3 style={{ fontSize: '1.4rem' }}>가천대학교 인공지능전공</h3>
              <p className="text-secondary" style={{ marginBottom: '1.5rem' }}>2022.03 ~ (재학/휴학 중)</p>
              <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '1rem', color: 'var(--text-secondary)' }}>
                <li><strong style={{color: '#e2e8f0'}}>주요 수강 과목:</strong> 인공지능 개론, 기계학습, 데이터 마이닝, 통계학 입문, 자료구조, 알고리즘</li>
                <li><strong style={{color: '#e2e8f0'}}>학습 내용:</strong> 
                  인공지능의 근간이 되는 수학적/통계적 기법들을 심도 있게 학습했습니다. 
                  대용량 데이터를 전처리하고 통계적 기법을 통해 유의미한 패턴을 찾아내는 데이터 마이닝 기술, 
                  다양한 머신러닝 알고리즘의 원리 및 하이퍼파라미터 튜닝 최적화 기법을 익혔습니다.
                </li>
              </ul>
            </div>
          </div>

          <div className="reveal delay-1">
            <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', marginBottom: '2rem' }}>
              <Award size={32} color="#8b5cf6" />
              <h2 style={{ marginBottom: 0 }}>Certifications</h2>
            </div>
            <div className="glass-panel" style={{ height: '100%' }}>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
                <div>
                  <h4 style={{ fontSize: '1.2rem', marginBottom: '0.2rem' }}>정보처리기사</h4>
                  <p className="text-secondary">한국산업인력공단</p>
                </div>
                <div>
                  <h4 style={{ fontSize: '1.2rem', marginBottom: '0.2rem' }}>빅데이터분석기사</h4>
                  <p className="text-secondary">한국데이터산업진흥원</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default App;
