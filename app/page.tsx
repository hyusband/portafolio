import GitHubStats from '@/components/GitHubStats';
import SkillsGrid from '@/components/SkillsGrid';
import ExperienceTimeline from '@/components/ExperienceTimeline';
import ContactForm from '@/components/ContactForm';

export default function Home() {
  return (
    <main className="bg-hw-black grid-bg scanline">
      {/* Hero Section */}
      <section className="hero-section">
        <div className="hero-gradient" />
        
        <div className="hero-content">
          {/* Status Bar */}
          <div className="terminal-box status-bar">
            <div className="status-left">
              <div className="status-item">
                <div className="status-indicator status-active" />
                <span className="text-hw-terminal status-text">ONLINE</span>
              </div>
              <div className="text-hw-text-dim status-text">|</div>
              <div className="text-hw-text-dim status-text">SYSTEM: OPERATIONAL</div>
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
              <span className="cursor">Backend Engineer & Systems Developer</span>
            </div>
            <p className="text-hw-text-dim hero-description">
              Specializing in <span className="text-hw-terminal font-mono">high-performance backend systems</span>,{' '}
              <span className="text-hw-terminal font-mono">load balancers</span>, and{' '}
              <span className="text-hw-terminal font-mono">memory optimization</span>. 
              Former Malware Analyst 🛡️
            </p>
          </div>

          {/* System Specs */}
          <div className="debugger-panel specs-panel">
            <div className="bg-hw-grey specs-header">
              <span className="text-hw-terminal font-mono specs-title">$ cat /proc/stack_info</span>
            </div>
            <div className="specs-grid">
              <div className="specs-column">
                <div className="spec-item">
                  <span className="text-hw-terminal font-mono">▸</span>
                  <span className="text-hw-text-dim font-mono spec-label">BACKEND:</span>
                  <span className="text-hw-text font-mono spec-value">Node.js, Rust, C++, C#</span>
                </div>
                <div className="spec-item">
                  <span className="text-hw-terminal font-mono">▸</span>
                  <span className="text-hw-text-dim font-mono spec-label">DATABASES:</span>
                  <span className="text-hw-text font-mono spec-value">GraphQL, MongoDB, MySQL</span>
                </div>
                <div className="spec-item">
                  <span className="text-hw-terminal font-mono">▸</span>
                  <span className="text-hw-text-dim font-mono spec-label">SYSTEMS:</span>
                  <span className="text-hw-text font-mono spec-value">Memory, Performance, Security</span>
                </div>
              </div>
              <div className="specs-column">
                <div className="spec-item">
                  <span className="text-hw-terminal font-mono">▸</span>
                  <span className="text-hw-text-dim font-mono spec-label">FRONTEND:</span>
                  <span className="text-hw-text font-mono spec-value">React, Next.js, TypeScript</span>
                </div>
                <div className="spec-item">
                  <span className="text-hw-terminal font-mono">▸</span>
                  <span className="text-hw-text-dim font-mono spec-label">FOCUS:</span>
                  <span className="text-hw-text font-mono spec-value">Backend & Systems</span>
                </div>
                <div className="spec-item">
                  <span className="text-hw-terminal font-mono">▸</span>
                  <span className="text-hw-text-dim font-mono spec-label">STATUS:</span>
                  <span className="text-hw-terminal font-mono spec-value">BACKEND_MODE</span>
                </div>
              </div>
            </div>
          </div>

          {/* CTA Buttons */}
          <div className="cta-buttons">
            <a href="#projects" className="btn-primary">
              VIEW_PROJECTS()
            </a>
            <a href="https://github.com/hyusband" target="_blank" rel="noopener noreferrer" className="btn-secondary">
              GITHUB_REPOS()
            </a>
          </div>
        </div>
      </section>

      {/* Backend Expertise Section - NEW */}
      <section className="projects-section">
        <div className="section-container">
          <h2 className="section-title">BACKEND_EXPERTISE</h2>
          
          <p className="text-hw-text-dim section-subtitle font-mono">
            // Specializing in high-performance backend systems
          </p>

          <div className="debugger-panel">
            <div className="bg-hw-grey specs-header">
              <span className="text-hw-terminal font-mono specs-title">$ performance_metrics --show-all</span>
            </div>
            
            <div style={{ padding: '2rem', display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: '1.5rem' }}>
              <div className="metric-card">
                <h3 className="text-hw-terminal font-mono" style={{ fontSize: '2rem', marginBottom: '0.5rem' }}>100k+</h3>
                <p className="text-hw-text-dim font-mono" style={{ fontSize: '0.875rem' }}>Requests/sec</p>
                <p className="text-hw-text-dim" style={{ fontSize: '0.75rem', marginTop: '0.5rem' }}>BitBridge load balancer throughput</p>
              </div>

              <div className="metric-card">
                <h3 className="text-hw-terminal font-mono" style={{ fontSize: '2rem', marginBottom: '0.5rem' }}>&lt;1ms</h3>
                <p className="text-hw-text-dim font-mono" style={{ fontSize: '0.875rem' }}>Latency</p>
                <p className="text-hw-text-dim" style={{ fontSize: '0.75rem', marginTop: '0.5rem' }}>Memory scanner response time</p>
              </div>

              <div className="metric-card">
                <h3 className="text-hw-terminal font-mono" style={{ fontSize: '2rem', marginBottom: '0.5rem' }}>&lt;5ms</h3>
                <p className="text-hw-text-dim font-mono" style={{ fontSize: '0.875rem' }}>P99 Latency</p>
                <p className="text-hw-text-dim" style={{ fontSize: '0.75rem', marginTop: '0.5rem' }}>API endpoint optimization</p>
              </div>

              <div className="metric-card">
                <h3 className="text-hw-terminal font-mono" style={{ fontSize: '2rem', marginBottom: '0.5rem' }}>99.9%</h3>
                <p className="text-hw-text-dim font-mono" style={{ fontSize: '0.875rem' }}>Uptime</p>
                <p className="text-hw-text-dim" style={{ fontSize: '0.75rem', marginTop: '0.5rem' }}>Production system reliability</p>
              </div>
            </div>

            <div className="terminal-box" style={{ margin: '1.5rem' }}>
              <div className="text-hw-text-dim font-mono" style={{ fontSize: '0.875rem' }}>
                <span className="text-hw-terminal">$</span> core_competencies:
              </div>
              <ul style={{ listStyle: 'none', padding: 0, margin: '1rem 0 0 0', display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
                <li className="text-hw-text-dim font-mono" style={{ fontSize: '0.875rem' }}>
                  <span className="text-hw-terminal">▸</span> Load Balancing & Reverse Proxies (Rust, Tokio)
                </li>
                <li className="text-hw-text-dim font-mono" style={{ fontSize: '0.875rem' }}>
                  <span className="text-hw-terminal">▸</span> Memory Management & Optimization (C++, Rust)
                </li>
                <li className="text-hw-text-dim font-mono" style={{ fontSize: '0.875rem' }}>
                  <span className="text-hw-terminal">▸</span> REST/GraphQL API Development (Node.js, TypeScript)
                </li>
                <li className="text-hw-text-dim font-mono" style={{ fontSize: '0.875rem' }}>
                  <span className="text-hw-terminal">▸</span> Security Analysis & Malware Research
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

      {/* Under the Hood Section */}
      <section id="projects" className="projects-section">
        <div className="section-container">
          <h2 className="section-title">UNDER_THE_HOOD</h2>
          
          <p className="text-hw-text-dim section-subtitle font-mono">
            // Real projects from my GitHub
          </p>

          <div className="projects-grid">
            {/* BitBridge */}
            <div className="metric-card">
              <div className="card-header">
                <h3 className="text-hw-text font-mono card-title">BitBridge</h3>
                <div className="status-indicator status-active" />
              </div>
              
              <p className="text-hw-text-dim card-description">
                High-performance load balancer and reverse proxy built with Rust. Features round-robin/least-connections algorithms, automatic health checks, and async I/O with Tokio.
              </p>

              <div className="card-metrics">
                <div className="metric-row">
                  <span className="text-hw-text-dim font-mono">REPO:</span>
                  <a href="https://github.com/hyusband/BitBridge" target="_blank" rel="noopener noreferrer" className="text-hw-terminal font-mono metric-link">github.com/hyusband/BitBridge</a>
                </div>
                <div className="metric-row">
                  <span className="text-hw-text-dim font-mono">LANG:</span>
                  <span className="text-hw-terminal font-mono">Rust + Tokio</span>
                </div>
                <div className="metric-row">
                  <span className="text-hw-text-dim font-mono">TYPE:</span>
                  <span className="text-hw-terminal font-mono">Load Balancer / Proxy</span>
                </div>
              </div>

              <div className="card-tags">
                <span className="tag">RUST</span>
                <span className="tag">TOKIO</span>
                <span className="tag">NETWORKING</span>
              </div>
            </div>

            {/* offsets-finder */}
            <div className="metric-card">
              <div className="card-header">
                <h3 className="text-hw-text font-mono card-title">offsets-finder</h3>
                <div className="status-indicator status-active" />
              </div>
              
              <p className="text-hw-text-dim card-description">
                Free Fire memory offsets scanner built in Rust. Auto-detects game variants (FF/MAX/TELA), exports to JSON/C++/Rust formats. Blazing fast pattern matching.
              </p>

              <div className="card-metrics">
                <div className="metric-row">
                  <span className="text-hw-text-dim font-mono">REPO:</span>
                  <a href="https://github.com/hyusband/offsets-finder" target="_blank" rel="noopener noreferrer" className="text-hw-terminal font-mono metric-link">github.com/hyusband/offsets-finder</a>
                </div>
                <div className="metric-row">
                  <span className="text-hw-text-dim font-mono">LANG:</span>
                  <span className="text-hw-terminal font-mono">Rust</span>
                </div>
                <div className="metric-row">
                  <span className="text-hw-text-dim font-mono">TYPE:</span>
                  <span className="text-hw-terminal font-mono">Game Analysis Tool</span>
                </div>
              </div>

              <div className="card-tags">
                <span className="tag">RUST</span>
                <span className="tag">MEMORY</span>
                <span className="tag">GAME-HACKING</span>
              </div>
            </div>

            {/* DevSync */}
            <div className="metric-card">
              <div className="card-header">
                <h3 className="text-hw-text font-mono card-title">DevSync</h3>
                <div className="status-indicator status-active" />
              </div>
              
              <p className="text-hw-text-dim card-description">
                Discord bot for real-time availability tracking. REST API with status management, analytics endpoints, and health monitoring.
              </p>

              <div className="card-metrics">
                <div className="metric-row">
                  <span className="text-hw-text-dim font-mono">REPO:</span>
                  <a href="https://github.com/hyusband/DevSync" target="_blank" rel="noopener noreferrer" className="text-hw-terminal font-mono metric-link">github.com/hyusband/DevSync</a>
                </div>
                <div className="metric-row">
                  <span className="text-hw-text-dim font-mono">LANG:</span>
                  <span className="text-hw-terminal font-mono">TypeScript</span>
                </div>
                <div className="metric-row">
                  <span className="text-hw-text-dim font-mono">TYPE:</span>
                  <span className="text-hw-terminal font-mono">Discord Bot / API</span>
                </div>
              </div>

              <div className="card-tags">
                <span className="tag">DISCORD</span>
                <span className="tag">REST-API</span>
                <span className="tag">ANALYTICS</span>
              </div>
            </div>

            {/* onless-choice */}
            <div className="metric-card">
              <div className="card-header">
                <h3 className="text-hw-text font-mono card-title">onless-choice</h3>
                <div className="status-indicator status-active" />
              </div>
              
              <p className="text-hw-text-dim card-description">
                Landing page for psychological horror game &quot;One Less Choice&quot;. Built with Astro 5.x, features Steam authentication, AstroDB integration, and atmospheric horror design.
              </p>

              <div className="card-metrics">
                <div className="metric-row">
                  <span className="text-hw-text-dim font-mono">REPO:</span>
                  <a href="https://github.com/hyusband/onless-choice" target="_blank" rel="noopener noreferrer" className="text-hw-terminal font-mono metric-link">github.com/hyusband/onless-choice</a>
                </div>
                <div className="metric-row">
                  <span className="text-hw-text-dim font-mono">LANG:</span>
                  <span className="text-hw-terminal font-mono">Astro + TypeScript</span>
                </div>
                <div className="metric-row">
                  <span className="text-hw-text-dim font-mono">TYPE:</span>
                  <span className="text-hw-terminal font-mono">Game Landing Page</span>
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
          <h2 className="section-title">THE_BRIDGE</h2>
          
          <p className="text-hw-text-dim section-subtitle font-mono">
            // Connecting high-level abstractions with low-level control
          </p>

          <div className="debugger-panel">
            <div className="bridge-content">
              <div className="bridge-grid">
                <div className="bridge-side">
                  <div className="bridge-icon bg-hw-electric">
                    <span>🌐</span>
                  </div>
                  <h3 className="text-hw-electric font-mono bridge-title">HIGH_LEVEL</h3>
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
                  <h3 className="text-hw-rust font-mono bridge-title">LOW_LEVEL</h3>
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
                  <span className="text-hw-text-dim">$</span> philosophy --explain
                </div>
                <div className="text-hw-text-dim font-mono philosophy-text">
                  &quot;Backend isn&apos;t just about APIs—it&apos;s about understanding performance at every layer. 
                  From memory allocation to network protocols, I optimize for speed, reliability, and security.&quot;
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
                <span className="text-hw-terminal font-mono footer-title">DEVELOPER_STATUS</span>
              </div>
              <div className="footer-status">
                <div className="status-row">
                  <span className="text-hw-text-dim font-mono">FUEL:</span>
                  <div className="status-value">
                    <span className="text-hw-text font-mono">Coffee</span>
                    <span>☕</span>
                  </div>
                </div>
                <div className="status-row">
                  <span className="text-hw-text-dim font-mono">PROCESS:</span>
                  <div className="status-value">
                    <span className="text-hw-text font-mono">Backend Development</span>
                    <span>⚙️</span>
                  </div>
                </div>
                <div className="status-row">
                  <span className="text-hw-text-dim font-mono">STATUS:</span>
                  <div className="status-value">
                    <span className="text-hw-terminal font-mono">Stable</span>
                    <div className="status-indicator status-active" />
                  </div>
                </div>
                <div className="status-row">
                  <span className="text-hw-text-dim font-mono">UPTIME:</span>
                  <span className="text-hw-terminal font-mono">99.9%</span>
                </div>
              </div>
            </div>

            <div className="footer-links-section">
              <div>
                <h3 className="text-hw-terminal font-mono footer-links-title">CONNECT()</h3>
                <div className="footer-links">
                  <a href="https://github.com/hyusband" target="_blank" rel="noopener noreferrer" 
                     className="footer-link">
                    → GitHub
                  </a>
                  <a href="mailto:hyusband@protonmail.com" 
                     className="footer-link">
                    → Email
                  </a>
                  <a href="https://linkedin.com/in/yourprofile" target="_blank" rel="noopener noreferrer"
                     className="footer-link">
                    → LinkedIn
                  </a>
                </div>
              </div>

              <div className="terminal-box availability-box">
                <div className="text-hw-text-dim font-mono availability-prompt">
                  <span className="text-hw-terminal">$</span> echo $AVAILABILITY
                </div>
                <div className="text-hw-terminal font-mono availability-text">
                  Open for backend/systems projects
                </div>
              </div>
            </div>
          </div>

          <div className="footer-bottom">
            <p className="text-hw-text-dim font-mono footer-copyright">
              © {new Date().getFullYear()} Andres :: Built with Next.js + Tailwind :: 
              <span className="text-hw-terminal"> Optimized for performance</span>
            </p>
          </div>
        </div>
      </footer>
    </main>
  );
}
