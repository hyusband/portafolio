'use client';

export default function SkillsGrid() {
  const skills = {
    backend: [
      { name: 'Node.js', level: 95, years: '4+' },
      { name: 'Rust', level: 85, years: '2+' },
      { name: 'C++', level: 80, years: '3+' },
      { name: 'C#', level: 75, years: '2+' },
      { name: 'TypeScript', level: 95, years: '4+' },
    ],
    databases: [
      { name: 'MongoDB', level: 90, years: '3+' },
      { name: 'MySQL', level: 85, years: '3+' },
      { name: 'GraphQL', level: 88, years: '2+' },
      { name: 'Redis', level: 75, years: '2+' },
    ],
    frontend: [
      { name: 'React', level: 90, years: '4+' },
      { name: 'Next.js', level: 92, years: '3+' },
      { name: 'Astro', level: 80, years: '1+' },
      { name: 'Tailwind', level: 95, years: '3+' },
    ],
    systems: [
      { name: 'Memory Mgmt', level: 85, years: '3+' },
      { name: 'Performance', level: 88, years: '4+' },
      { name: 'Security', level: 82, years: '3+' },
      { name: 'Networking', level: 75, years: '2+' },
    ],
  };

  const SkillBar = ({ skill }: { skill: { name: string; level: number; years: string } }) => (
    <div className="skill-item">
      <div className="skill-header">
        <span className="text-hw-text font-mono skill-name">{skill.name}</span>
        <span className="text-hw-text-dim font-mono skill-years">{skill.years} years</span>
      </div>
      <div className="skill-bar-container">
        <div 
          className="skill-bar-fill" 
          style={{ width: `${skill.level}%` }}
        />
      </div>
    </div>
  );

  return (
    <section className="skills-section">
      <div className="section-container">
        <h2 className="section-title">TECH_STACK</h2>
        
        <p className="text-hw-text-dim section-subtitle font-mono">
          // Proficiency levels across the stack
        </p>

        <div className="skills-grid-container">
          {/* Backend - Primary Focus */}
          <div className="skill-category">
            <div className="category-header">
              <h3 className="text-hw-terminal font-mono category-title">
                <span className="category-icon">⚙️</span> BACKEND
              </h3>
              <span className="text-hw-terminal font-mono category-badge">PRIMARY</span>
            </div>
            <div className="skills-list">
              {skills.backend.map((skill) => (
                <SkillBar key={skill.name} skill={skill} />
              ))}
            </div>
          </div>

          {/* Databases */}
          <div className="skill-category">
            <div className="category-header">
              <h3 className="text-hw-text font-mono category-title">
                <span className="category-icon">🗄️</span> DATABASES
              </h3>
            </div>
            <div className="skills-list">
              {skills.databases.map((skill) => (
                <SkillBar key={skill.name} skill={skill} />
              ))}
            </div>
          </div>

          {/* Frontend */}
          <div className="skill-category">
            <div className="category-header">
              <h3 className="text-hw-text font-mono category-title">
                <span className="category-icon">🌐</span> FRONTEND
              </h3>
            </div>
            <div className="skills-list">
              {skills.frontend.map((skill) => (
                <SkillBar key={skill.name} skill={skill} />
              ))}
            </div>
          </div>

          {/* Systems */}
          <div className="skill-category">
            <div className="category-header">
              <h3 className="text-hw-text font-mono category-title">
                <span className="category-icon">🔧</span> SYSTEMS
              </h3>
            </div>
            <div className="skills-list">
              {skills.systems.map((skill) => (
                <SkillBar key={skill.name} skill={skill} />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
