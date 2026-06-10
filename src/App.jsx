import { useState, useEffect } from 'react';
import {
  Mail,
  ChevronRight,
  Terminal,
  Database,
  BrainCircuit,
  Map,
  BookOpen,
  Award,
  ExternalLink,
  Copy,
  Check
} from 'lucide-react';
import { portfolioData } from './data';
import './index.css';

const GithubIcon = ({ size = 24, color = "currentColor", style = {} }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" style={style}><path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path></svg>
);

const LinkedinIcon = ({ size = 24, color = "currentColor", style = {} }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" style={style}><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path><rect x="2" y="9" width="4" height="12"></rect><circle cx="4" cy="4" r="2"></circle></svg>
);

const NotionIcon = ({ size = 24, color = "currentColor", style = {} }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill={color} style={style} xmlns="http://www.w3.org/2000/svg">
    <path d="M4.459 4.208c-.746.064-1.076.56-1.076 1.22v13.71c0 .66.318 1.153 1.076 1.22l14.426 1.304c.732.063 1.076-.414 1.076-1.08V5.373c0-.66-.344-1.141-1.076-1.205L4.459 4.208zM19.16 20.3l-13.88-1.25V5.55l13.88 1.25v13.5zM8.51 9.87l2.1-.18v7.41l-2.1.18v.83l5.5-.47v-.83l-1.95.16V12.1l4.9 5.37h.8V8.65l-2.1.18v-.83l5.4.47v.83l-1.85-.16v7.3l-5-5.5h-.8v6.78l2.1-.18v.83l-5.4.47v-.83l1.85-.16V9.87l-2.1.18v-.83l5.5-.47v.83l-1.95.16v2.1z" />
  </svg>
);

// Helper function to render correct icons dynamically
const renderIcon = (iconName, size = 24, color = "currentColor", style = {}) => {
  const icons = {
    Database: <Database size={size} color={color} style={style} />,
    BrainCircuit: <BrainCircuit size={size} color={color} style={style} />,
    Map: <Map size={size} color={color} style={style} />,
    Terminal: <Terminal size={size} color={color} style={style} />,
    github: <GithubIcon size={size} color={color} style={style} />,
    linkedin: <LinkedinIcon size={size} color={color} style={style} />,
    notion: <NotionIcon size={size} color={color} style={style} />,
    external: <ExternalLink size={size} color={color} style={style} />
  };
  return icons[iconName] || null;
};

function App() {
  const [isCopied, setIsCopied] = useState(false);

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

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(portfolioData.hero.email)
      .then(() => {
        setIsCopied(true);
        setTimeout(() => setIsCopied(false), 2000);
      })
      .catch(err => {
        console.error('Failed to copy email: ', err);
      });
  };

  return (
    <div className="portfolio-wrapper">
      {/* Hero Section */}
      <section className="hero container">
        <div className="reveal">
          <div className="tag">{portfolioData.hero.tag}</div>
          <h1>{portfolioData.hero.title.regular}<br />
            <span className="text-gradient">{portfolioData.hero.title.gradient}</span>{portfolioData.hero.title.suffix}
          </h1>
          <p>{portfolioData.hero.description}</p>

          <div style={{ display: 'flex', gap: '1rem', justifyContent: 'center', marginTop: '2rem', flexWrap: 'wrap' }}>
            <a href="#projects" className="btn btn-primary">
              프로젝트 보기 <ChevronRight size={18} />
            </a>

            {/* 이메일 복사 버튼 */}
            <button
              onClick={handleCopyEmail}
              className="btn btn-outline"
              style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', cursor: 'pointer' }}
            >
              {isCopied ? <Check size={18} color="#10b981" /> : <Mail size={18} />}
              {isCopied ? '복사되었습니다!' : portfolioData.hero.email}
              {!isCopied && <Copy size={14} style={{ opacity: 0.7, marginLeft: '0.2rem' }} />}
            </button>
          </div>

          <div style={{ display: 'flex', gap: '1.5rem', justifyContent: 'center', marginTop: '1.5rem', color: 'var(--text-secondary)' }}>
            {portfolioData.hero.socialLinks.map(link => (
              <a key={link.id} href={link.url} target="_blank" rel="noreferrer" className="hover:text-white transition-colors">
                {renderIcon(link.icon, 50)}
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* About Me Section */}
      <section id="about" className="container">
        <div className="section-title reveal">
          <h2>About Me</h2>
          <p>저를 소개하는 핵심 역량입니다.</p>
        </div>
        <div className="grid-2">
          {portfolioData.about.map((item, index) => (
            <div key={item.id} className={`glass-panel reveal delay-${index + 1}`}>
              {renderIcon(item.iconName, 40, item.iconColor, { marginBottom: '1.5rem' })}
              <h3>{item.title}</h3>
              <p className="text-secondary">
                {item.description}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="container" style={{ marginTop: '5rem' }}>
        <div className="section-title reveal">
          <h2>Featured Projects</h2>
          <p>실제 데이터를 다루고 문제를 해결했던 핵심 경험입니다.</p>
        </div>

        {portfolioData.projects.map((project, index) => (
          <div key={project.id} className={`glass-panel project-card reveal ${index > 0 ? `delay-${index}` : ''}`}>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', flexWrap: 'wrap', gap: '1rem' }}>
              <div>
                <h3>{project.title}</h3>
                <div className="project-meta">
                  {project.meta.map((m, i) => (
                    <span key={i}>
                      {m.iconName && renderIcon(m.iconName, 16)} {m.text}
                    </span>
                  ))}
                </div>
              </div>
              <div>
                {project.tags.map((tag, i) => (
                  <span key={i} className="tag">{tag}</span>
                ))}
              </div>
            </div>

            <div className="project-content">
              <p>
                <span className="highlight">개요:</span> {project.overview}
              </p>
              <p>
                <span className="highlight">문제 및 접근방식:</span> {project.approach}
              </p>
              <p>
                <span className="highlight">결과:</span> {project.result}
              </p>
            </div>

            {/* 프로젝트 관련 링크 추가 */}
            {project.links && project.links.length > 0 && (
              <div style={{ display: 'flex', gap: '1rem', marginTop: '1.5rem', paddingTop: '1rem', borderTop: '1px solid rgba(255,255,255,0.1)' }}>
                {project.links.map((link, i) => (
                  <a key={i} href={link.url} target="_blank" rel="noreferrer" style={{ display: 'flex', alignItems: 'center', gap: '0.4rem', color: '#94a3b8', fontSize: '0.9rem', textDecoration: 'none' }} className="hover:text-white transition-colors">
                    {renderIcon(link.iconName, 16)} {link.title}
                  </a>
                ))}
              </div>
            )}
          </div>
        ))}
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
              <h3 style={{ fontSize: '1.4rem' }}>{portfolioData.education.school}</h3>
              <p className="text-secondary" style={{ marginBottom: '1.5rem' }}>{portfolioData.education.period}</p>
              <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '1rem', color: 'var(--text-secondary)' }}>
                <li><strong style={{ color: '#e2e8f0' }}>주요 수강 과목:</strong> {portfolioData.education.courses}</li>
                <li><strong style={{ color: '#e2e8f0' }}>학습 내용:</strong> {portfolioData.education.description}</li>
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
                {portfolioData.certifications.map((cert, index) => (
                  <div key={index}>
                    <h4 style={{ fontSize: '1.2rem', marginBottom: '0.2rem' }}>{cert.title}</h4>
                    <p className="text-secondary">{cert.issuer}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default App;
