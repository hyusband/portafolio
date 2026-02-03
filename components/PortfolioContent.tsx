'use client';

import { useLanguage } from '@/lib/LanguageContext';
import GitHubStats from '@/components/GitHubStats';
import SkillsGrid from '@/components/SkillsGrid';
import ExperienceTimeline from '@/components/ExperienceTimeline';
import ContactForm from '@/components/ContactForm';
import LanguageToggle from '@/components/LanguageToggle';

export default function PortfolioContent() {
  const { t } = useLanguage();

  return (
    <main className="bg-hw-black grid-bg scanline">
      {/* Language Toggle */}
      <LanguageToggle />

      {/* Hero Section */}
      <section className="hero-section">
        <div className="hero-gradient" />
        
        <div className="hero-content">
          {/* Status Bar */}
          <div className="terminal-box status-bar">
            <div className="status-left">
              <div className="status-item">
                <div className="status-indicator status-active" />
                <span className="text-hw-terminal status-text">{t.hero.status}</span>
              </div>
              <div className="text-hw-text-dim status-text">|</div>
              <div className="text-hw-text-dim status-text">{t.hero.system}</div>
            </div>
            <div className="text-hw-text-dim font-mono status-text">
              {new Date().toISOString().split('T')[0]} :: {new Date().toLocaleTimeString('en-US', { hour12: false })}
            </div>
          </div>

          {/* Main Title */}
          <div className="hero-title-section">
            <h1 className="text-hw-text font-mono glitch hero-title" data-text="ANDRES">
              ANDRES
            </h1>
            <div className="text-hw-terminal font-mono hero-subtitle">
              <span className="cursor">{t.hero.subtitle}</span>
            </div>
            <p className="text-hw-text-dim hero-description">
              {t.hero.description} <span className="text-hw-terminal font-mono">{t.hero.description2}</span>,{' '}
              <span className="text-hw-terminal font-mono">{t.hero.description3}</span>, {t.hero.description4}{' '}
              <span className="text-hw-terminal font-mono">{t.hero.description5}</span>. 
              {t.hero.description6} 🛡️
            </p>
          </div>

          {/* System Specs */}
          <div className="debugger-panel specs-panel">
            <div className="bg-hw-grey specs-header">
              <span className="text-hw-terminal font-mono specs-title">{t.specs.title}</span>
            </div>
            <div className="specs-grid">
              <div className="specs-column">
                <div className="spec-item">
                  <span className="text-hw-terminal font-mono">▸</span>
                  <span className="text-hw-text-dim font-mono spec-label">{t.specs.backend}</span>
                  <span className="text-hw-text font-mono spec-value">{t.specs.backendValue}</span>
                </div>
                <div className="spec-item">
                  <span className="text-hw-terminal font-mono">▸</span>
                  <span className="text-hw-text-dim font-mono spec-label">{t.specs.databases}</span>
                  <span className="text-hw-text font-mono spec-value">{t.specs.databasesValue}</span>
                </div>
                <div className="spec-item">
                  <span className="text-hw-terminal font-mono">▸</span>
                  <span className="text-hw-text-dim font-mono spec-label">{t.specs.systems}</span>
                  <span className="text-hw-text font-mono spec-value">{t.specs.systemsValue}</span>
                </div>
              </div>
              <div className="specs-column">
                <div className="spec-item">
                  <span className="text-hw-terminal font-mono">▸</span>
                  <span className="text-hw-text-dim font-mono spec-label">{t.specs.frontend}</span>
                  <span className="text-hw-text font-mono spec-value">{t.specs.frontendValue}</span>
                </div>
                <div className="spec-item">
                  <span className="text-hw-terminal font-mono">▸</span>
                  <span className="text-hw-text-dim font-mono spec-label">{t.specs.focus}</span>
                  <span className="text-hw-text font-mono spec-value">{t.specs.focusValue}</span>
                </div>
                <div className="spec-item">
                  <span className="text-hw-terminal font-mono">▸</span>
                  <span className="text-hw-text-dim font-mono spec-label">{t.specs.status}</span>
                  <span className="text-hw-terminal font-mono spec-value">{t.specs.statusValue}</span>
                </div>
              </div>
            </div>
          </div>

          {/* CTA Buttons */}
          <div className="cta-buttons">
            <a href="#projects" className="btn-primary">
              {t.hero.viewProjects}
            </a>
            <a href="https://github.com/hyusband" target="_blank" rel="noopener noreferrer" className="btn-secondary">
              {t.hero.githubRepos}
            </a>
          </div>
        </div>
      </section>

      {/* Backend Expertise Section */}
      <section className="projects-section">
        <div className="section-container">
          <h2 className="section-title">{t.backendExpertise.title}</h2>
          
          <p className="text-hw-text-dim section-subtitle font-mono">
            {t.backendExpertise.subtitle}
          </p>

          <div className="debugger-panel">
            <div className="bg-hw-grey specs-header">
              <span className="text-hw-terminal font-mono specs-title">{t.backendExpertise.metricsTitle}</span>
            </div>
            
            <div style={{ padding: '2rem', display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: '1.5rem' }}>
              <div className="metric-card">
                <h3 className="text-hw-terminal font-mono" style={{ fontSize: '2rem', marginBottom: '0.5rem' }}>100k+</h3>
                <p className="text-hw-text-dim font-mono" style={{ fontSize: '0.875rem' }}>{t.backendExpertise.requestsPerSec}</p>
                <p className="text-hw-text-dim" style={{ fontSize: '0.75rem', marginTop: '0.5rem' }}>{t.backendExpertise.requestsDesc}</p>
              </div>

              <div className="metric-card">
                <h3 className="text-hw-terminal font-mono" style={{ fontSize: '2rem', marginBottom: '0.5rem' }}>&lt;1ms</h3>
                <p className="text-hw-text-dim font-mono" style={{ fontSize: '0.875rem' }}>{t.backendExpertise.latency}</p>
                <p className="text-hw-text-dim" style={{ fontSize: '0.75rem', marginTop: '0.5rem' }}>{t.backendExpertise.latencyDesc}</p>
              </div>

              <div className="metric-card">
                <h3 className="text-hw-terminal font-mono" style={{ fontSize: '2rem', marginBottom: '0.5rem' }}>&lt;5ms</h3>
                <p className="text-hw-text-dim font-mono" style={{ fontSize: '0.875rem' }}>{t.backendExpertise.p99Latency}</p>
                <p className="text-hw-text-dim" style={{ fontSize: '0.75rem', marginTop: '0.5rem' }}>{t.backendExpertise.p99Desc}</p>
              </div>

              <div className="metric-card">
                <h3 className="text-hw-terminal font-mono" style={{ fontSize: '2rem', marginBottom: '0.5rem' }}>99.9%</h3>
                <p className="text-hw-text-dim font-mono" style={{ fontSize: '0.875rem' }}>{t.backendExpertise.uptime}</p>
                <p className="text-hw-text-dim" style={{ fontSize: '0.75rem', marginTop: '0.5rem' }}>{t.backendExpertise.uptimeDesc}</p>
              </div>
            </div>

            <div className="terminal-box" style={{ margin: '1.5rem' }}>
              <div className="text-hw-text-dim font-mono" style={{ fontSize: '0.875rem' }}>
                <span className="text-hw-terminal">$</span> {t.backendExpertise.competencies}
              </div>
              <ul style={{ listStyle: 'none', padding: 0, margin: '1rem 0 0 0', display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
                <li className="text-hw-text-dim font-mono" style={{ fontSize: '0.875rem' }}>
                  <span className="text-hw-terminal">▸</span> {t.backendExpertise.comp1}
                </li>
                <li className="text-hw-text-dim font-mono" style={{ fontSize: '0.875rem' }}>
                  <span className="text-hw-terminal">▸</span> {t.backendExpertise.comp2}
                </li>
                <li className="text-hw-text-dim font-mono" style={{ fontSize: '0.875rem' }}>
                  <span className="text-hw-terminal">▸</span> {t.backendExpertise.comp3}
                </li>
                <li className="text-hw-text-dim font-mono" style={{ fontSize: '0.875rem' }}>
                  <span className="text-hw-terminal">▸</span> {t.backendExpertise.comp4}
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* GitHub Stats */}
      <GitHubStats />

      {/* Skills Grid */}
      <SkillsGrid />

      {/* Projects - Simplified for now, full translation in next step */}
      <section id="projects" className="projects-section">
        <div className="section-container">
          <h2 className="section-title">{t.projects.title}</h2>
          
          <p className="text-hw-text-dim section-subtitle font-mono">
            {t.projects.subtitle}
          </p>

          <div className="projects-grid">
            {/* Projects will be translated in components */}
            <div className="metric-card">
              <div className="card-header">
                <h3 className="text-hw-text font-mono card-title">BitBridge</h3>
                <div className="status-indicator status-active" />
              </div>
              
              <p className="text-hw-text-dim card-description">
                {t.projects.bitbridge.description}
              </p>

              <div className="card-metrics">
                <div className="metric-row">
                  <span className="text-hw-text-dim font-mono">{t.projects.repo}</span>
                  <a href="https://github.com/hyusband/BitBridge" target="_blank" rel="noopener noreferrer" className="text-hw-terminal font-mono metric-link">github.com/hyusband/BitBridge</a>
                </div>
                <div className="metric-row">
                  <span className="text-hw-text-dim font-mono">{t.projects.lang}</span>
                  <span className="text-hw-terminal font-mono">Rust + Tokio</span>
                </div>
                <div className="metric-row">
                  <span className="text-hw-text-dim font-mono">{t.projects.type}</span>
                  <span className="text-hw-terminal font-mono">{t.projects.bitbridge.type}</span>
                </div>
              </div>

              <div className="card-tags">
                <span className="tag">RUST</span>
                <span className="tag">TOKIO</span>
                <span className="tag">NETWORKING</span>
              </div>
            </div>

            {/* Other projects - similar pattern */}
            <div className="metric-card">
              <div className="card-header">
                <h3 className="text-hw-text font-mono card-title">offsets-finder</h3>
                <div className="status-indicator status-active" />
              </div>
              
              <p className="text-hw-text-dim card-description">
                {t.projects.offsetsFinder.description}
              </p>

              <div className="card-metrics">
                <div className="metric-row">
                  <span className="text-hw-text-dim font-mono">{t.projects.repo}</span>
                  <a href="https://github.com/hyusband/offsets-finder" target="_blank" rel="noopener noreferrer" className="text-hw-terminal font-mono metric-link">github.com/hyusband/offsets-finder</a>
                </div>
                <div className="metric-row">
                  <span className="text-hw-text-dim font-mono">{t.projects.lang}</span>
                  <span className="text-hw-terminal font-mono">Rust</span>
                </div>
                <div className="metric-row">
                  <span className="text-hw-text-dim font-mono">{t.projects.type}</span>
                  <span className="text-hw-terminal font-mono">{t.projects.offsetsFinder.type}</span>
                </div>
              </div>

              <div className="card-tags">
                <span className="tag">RUST</span>
                <span className="tag">MEMORY</span>
                <span className="tag">GAME-HACKING</span>
              </div>
            </div>

            <div className="metric-card">
              <div className="card-header">
                <h3 className="text-hw-text font-mono card-title">DevSync</h3>
                <div className="status-indicator status-active" />
              </div>
              
              <p className="text-hw-text-dim card-description">
                {t.projects.devSync.description}
              </p>

              <div className="card-metrics">
                <div className="metric-row">
                  <span className="text-hw-text-dim font-mono">{t.projects.repo}</span>
                  <a href="https://github.com/hyusband/DevSync" target="_blank" rel="noopener noreferrer" className="text-hw-terminal font-mono metric-link">github.com/hyusband/DevSync</a>
                </div>
                <div className="metric-row">
                  <span className="text-hw-text-dim font-mono">{t.projects.lang}</span>
                  <span className="text-hw-terminal font-mono">TypeScript</span>
                </div>
                <div className="metric-row">
                  <span className="text-hw-text-dim font-mono">{t.projects.type}</span>
                  <span className="text-hw-terminal font-mono">{t.projects.devSync.type}</span>
                </div>
              </div>

              <div className="card-tags">
                <span className="tag">DISCORD</span>
                <span className="tag">REST-API</span>
                <span className="tag">ANALYTICS</span>
              </div>
            </div>

            <div className="metric-card">
              <div className="card-header">
                <h3 className="text-hw-text font-mono card-title">onless-choice</h3>
                <div className="status-indicator status-active" />
              </div>
              
              <p className="text-hw-text-dim card-description">
                {t.projects.onlessChoice.description}
              </p>

              <div className="card-metrics">
                <div className="metric-row">
                  <span className="text-hw-text-dim font-mono">{t.projects.repo}</span>
                  <a href="https://github.com/hyusband/onless-choice" target="_blank" rel="noopener noreferrer" className="text-hw-terminal font-mono metric-link">github.com/hyusband/onless-choice</a>
                </div>
                <div className="metric-row">
                  <span className="text-hw-text-dim font-mono">{t.projects.lang}</span>
                  <span className="text-hw-terminal font-mono">Astro + TypeScript</span>
                </div>
                <div className="metric-row">
                  <span className="text-hw-text-dim font-mono">{t.projects.type}</span>
                  <span className="text-hw-terminal font-mono">{t.projects.onlessChoice.type}</span>
                </div>
              </div>

              <div className="card-tags">
                <span className="tag">ASTRO</span>
                <span className="tag">STEAM</span>
                <span className="tag">ASTRODB</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Experience Timeline */}
      <ExperienceTimeline />

      {/* The Bridge Section */}
      <section className="bridge-section">
        <div className="section-container">
          <h2 className="section-title">{t.bridge.title}</h2>
          
          <p className="text-hw-text-dim section-subtitle font-mono">
            {t.bridge.subtitle}
          </p>

          <div className="debugger-panel">
            <div className="bridge-content">
              <div className="bridge-grid">
                <div className="bridge-side">
                  <div className="bridge-icon bg-hw-electric">
                    <span>🌐</span>
                  </div>
                  <h3 className="text-hw-electric font-mono bridge-title">{t.bridge.highLevel}</h3>
                  <div className="bridge-list">
                    <div>React / Next.js</div>
                    <div>TypeScript / Node.js</div>
                    <div>GraphQL</div>
                    <div>MongoDB / MySQL</div>
                  </div>
                </div>

                <div className="bridge-connector">
                  <div className="bridge-line" />
                  <div className="bridge-center">
                    <div className="text-hw-terminal font-mono bridge-arrow">⟷</div>
                    <div className="text-hw-text-dim font-mono bridge-tech">FFI / WASM / N-API</div>
                  </div>
                  <div className="bridge-line" />
                </div>

                <div className="bridge-side">
                  <div className="bridge-icon bg-hw-rust">
                    <span>⚙️</span>
                  </div>
                  <h3 className="text-hw-rust font-mono bridge-title">{t.bridge.lowLevel}</h3>
                  <div className="bridge-list">
                    <div>C++ / Rust / C#</div>
                    <div>Memory Management</div>
                    <div>Performance Optimization</div>
                    <div>Security Analysis</div>
                  </div>
                </div>
              </div>

              <div className="terminal-box philosophy-box">
                <div className="text-hw-terminal font-mono philosophy-prompt">
                  <span className="text-hw-text-dim">$</span> {t.bridge.philosophy}
                </div>
                <div className="text-hw-text-dim font-mono philosophy-text">
                  {t.bridge.philosophyText}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Form */}
      <ContactForm />

      {/* Footer */}
      <footer className="footer">
        <div className="section-container">
          <div className="footer-grid">
            <div className="debugger-panel">
              <div className="bg-hw-grey footer-header">
                <span className="text-hw-terminal font-mono footer-title">{t.footer.title}</span>
              </div>
              <div className="footer-status">
                <div className="status-row">
                  <span className="text-hw-text-dim font-mono">{t.footer.fuel}</span>
                  <div className="status-value">
                    <span className="text-hw-text font-mono">{t.footer.fuelValue}</span>
                    <span>☕</span>
                  </div>
                </div>
                <div className="status-row">
                  <span className="text-hw-text-dim font-mono">{t.footer.process}</span>
                  <div className="status-value">
                    <span className="text-hw-text font-mono">{t.footer.processValue}</span>
                    <span>⚙️</span>
                  </div>
                </div>
                <div className="status-row">
                  <span className="text-hw-text-dim font-mono">{t.footer.status}</span>
                  <div className="status-value">
                    <span className="text-hw-terminal font-mono">{t.footer.statusValue}</span>
                    <div className="status-indicator status-active" />
                  </div>
                </div>
                <div className="status-row">
                  <span className="text-hw-text-dim font-mono">{t.footer.uptime}</span>
                  <span className="text-hw-terminal font-mono">{t.footer.uptimeValue}</span>
                </div>
              </div>
            </div>

            <div className="footer-links-section">
              <div>
                <h3 className="text-hw-terminal font-mono footer-links-title">{t.footer.connect}</h3>
                <div className="footer-links">
                  <a href="https://github.com/hyusband" target="_blank" rel="noopener noreferrer" 
                     className="footer-link">
                    {t.footer.github}
                  </a>
                  <a href="mailto:hyusband@protonmail.com" 
                     className="footer-link">
                    {t.footer.email}
                  </a>
                  <a href="https://linkedin.com/in/yourprofile" target="_blank" rel="noopener noreferrer"
                     className="footer-link">
                    {t.footer.linkedin}
                  </a>
                </div>
              </div>

              <div className="terminal-box availability-box">
                <div className="text-hw-text-dim font-mono availability-prompt">
                  <span className="text-hw-terminal">$</span> {t.footer.availability}
                </div>
                <div className="text-hw-terminal font-mono availability-text">
                  {t.footer.availabilityText}
                </div>
              </div>
            </div>
          </div>

          <div className="footer-bottom">
            <p className="text-hw-text-dim font-mono footer-copyright">
              © {new Date().getFullYear()} Andres :: {t.footer.copyright}
              <span className="text-hw-terminal"> {t.footer.optimized}</span>
            </p>
          </div>
        </div>
      </footer>
    </main>
  );
}
