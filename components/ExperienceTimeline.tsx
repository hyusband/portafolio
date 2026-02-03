'use client';

export default function ExperienceTimeline() {
  const experiences = [
    {
      year: '2024-Present',
      title: 'Backend Engineer',
      company: 'Freelance',
      description: 'Specializing in high-performance backend systems, load balancers, and API development using Rust, Node.js, and C++.',
      highlights: [
        'Built BitBridge: Load balancer handling 100k+ req/s',
        'Developed memory scanners with <1ms latency',
        'Optimized API endpoints for sub-5ms P99 latency',
      ],
      type: 'current',
    },
    {
      year: '2022-2024',
      title: 'Malware Analyst',
      company: 'Security Research',
      description: 'Reverse engineering and analyzing malware samples. Deep understanding of Windows internals and memory manipulation.',
      highlights: [
        'Analyzed 500+ malware samples',
        'Developed automated analysis tools',
        'Specialized in memory forensics',
      ],
      type: 'past',
    },
    {
      year: '2021-2022',
      title: 'Full-Stack Developer',
      company: 'Independent Projects',
      description: 'Built web applications with React, Next.js, and Node.js. Transitioned focus to backend and systems programming.',
      highlights: [
        'Shipped 10+ production applications',
        'Learned Rust and low-level programming',
        'Contributed to open source projects',
      ],
      type: 'past',
    },
  ];

  return (
    <section className="timeline-section">
      <div className="section-container">
        <h2 className="section-title">EXPERIENCE</h2>
        
        <p className="text-hw-text-dim section-subtitle font-mono">
          // Professional journey and key milestones
        </p>

        <div className="timeline-container">
          {experiences.map((exp, index) => (
            <div key={index} className={`timeline-item ${exp.type}`}>
              <div className="timeline-marker">
                <div className={`timeline-dot ${exp.type === 'current' ? 'status-active' : 'status-warning'}`} />
                <div className="timeline-line" />
              </div>

              <div className="timeline-content">
                <div className="debugger-panel timeline-card">
                  <div className="bg-hw-grey timeline-header">
                    <div className="timeline-title-row">
                      <span className="text-hw-terminal font-mono timeline-year">{exp.year}</span>
                      {exp.type === 'current' && (
                        <span className="text-hw-terminal font-mono timeline-badge">CURRENT</span>
                      )}
                    </div>
                  </div>

                  <div className="timeline-body">
                    <h3 className="text-hw-text font-mono timeline-job-title">{exp.title}</h3>
                    <p className="text-hw-electric font-mono timeline-company">{exp.company}</p>
                    <p className="text-hw-text-dim timeline-description">{exp.description}</p>

                    <div className="timeline-highlights">
                      <div className="text-hw-text-dim font-mono highlights-label">
                        <span className="text-hw-terminal">$</span> key_achievements:
                      </div>
                      <ul className="highlights-list">
                        {exp.highlights.map((highlight, i) => (
                          <li key={i} className="text-hw-text-dim font-mono highlight-item">
                            <span className="text-hw-terminal">▸</span> {highlight}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
