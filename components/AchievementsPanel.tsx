'use client';

import { useGamification } from '@/lib/GamificationContext';
import { useState } from 'react';

export default function AchievementsPanel() {
  const { achievements, progress } = useGamification();
  const [isOpen, setIsOpen] = useState(false);

  const unlockedCount = achievements.filter(a => a.unlocked).length;

  return (
    <div className="achievements-panel">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="achievements-btn"
        aria-label="Achievements"
      >
        <span className="text-hw-terminal font-mono">🏆</span>
        <span className="achievement-badge">{unlockedCount}/{achievements.length}</span>
      </button>

      {isOpen && (
        <div className="achievements-dropdown">
          <div className="achievements-header">
            <span className="text-hw-terminal font-mono">$ achievements --list</span>
            <button onClick={() => setIsOpen(false)} className="close-btn">✕</button>
          </div>

          {/* Progress Bar */}
          <div className="progress-section">
            <div className="text-hw-text-dim font-mono" style={{ fontSize: '0.75rem', marginBottom: '0.5rem' }}>
              EXPLORATION: {Math.round(progress)}%
            </div>
            <div className="progress-bar-container">
              <div className="progress-bar-fill" style={{ width: `${progress}%` }} />
            </div>
          </div>

          {/* Achievements List */}
          <div className="achievements-list">
            {achievements.map((achievement) => (
              <div
                key={achievement.id}
                className={`achievement-item ${achievement.unlocked ? 'unlocked' : 'locked'}`}
              >
                <span className="achievement-icon">{achievement.icon}</span>
                <div className="achievement-info">
                  <div className="text-hw-text font-mono achievement-name">
                    {achievement.unlocked ? achievement.name : '???'}
                  </div>
                  <div className="text-hw-text-dim achievement-desc">
                    {achievement.unlocked ? achievement.description : 'Locked'}
                  </div>
                </div>
                {achievement.unlocked && <span className="unlock-badge">✓</span>}
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}
