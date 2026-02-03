'use client';

import { useEffect, useState } from 'react';

interface GitHubStats {
  repos: number;
  stars: number;
  followers: number;
  contributions: number;
}

export default function GitHubStats() {
  const [stats, setStats] = useState<GitHubStats>({
    repos: 7,
    stars: 0,
    followers: 0,
    contributions: 500,
  });
  const [loading, setLoading] = useState(true);
  const [animated, setAnimated] = useState(false);

  useEffect(() => {
    const fetchStats = async () => {
      try {
        const response = await fetch('https://api.github.com/users/hyusband');
        const data = await response.json();
        
        setStats({
          repos: data.public_repos || 7,
          stars: 0,
          followers: data.followers || 0,
          contributions: 500,
        });
      } catch (error) {
        console.error('Failed to fetch GitHub stats:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchStats();
  }, []);

  useEffect(() => {
    if (!loading) {
      setTimeout(() => setAnimated(true), 100);
    }
  }, [loading]);

  const StatCard = ({ label, value, suffix = '' }: { label: string; value: number; suffix?: string }) => {
    const [count, setCount] = useState(0);

    useEffect(() => {
      if (!animated) return;

      let start = 0;
      const end = value;
      const duration = 2000;
      const increment = end / (duration / 16);

      const timer = setInterval(() => {
        start += increment;
        if (start >= end) {
          setCount(end);
          clearInterval(timer);
        } else {
          setCount(Math.floor(start));
        }
      }, 16);

      return () => clearInterval(timer);
    }, [animated, value]);

    return (
      <div className="stat-card">
        <div className="stat-value">
          <span className="text-hw-terminal font-mono">{animated ? count : 0}</span>
          <span className="text-hw-terminal font-mono stat-suffix">{suffix}</span>
        </div>
        <div className="stat-label text-hw-text-dim font-mono">{label}</div>
      </div>
    );
  };

  return (
    <section className="github-stats-section">
      <div className="section-container">
        <h2 className="section-title">GITHUB_ACTIVITY</h2>
        
        <p className="text-hw-text-dim section-subtitle font-mono">
          // Real-time metrics from my GitHub profile
        </p>

        <div className="debugger-panel">
          <div className="bg-hw-grey stats-header">
            <span className="text-hw-terminal font-mono stats-title">$ gh api user --jq &apos;.login&apos;</span>
          </div>
          
          <div className="stats-grid">
            <StatCard label="PUBLIC_REPOS" value={stats.repos} />
            <StatCard label="FOLLOWERS" value={stats.followers} />
            <StatCard label="CONTRIBUTIONS" value={stats.contributions} suffix="+" />
            <StatCard label="LANGUAGES" value={15} suffix="+" />
          </div>

          <div className="terminal-box stats-footer">
            <div className="text-hw-text-dim font-mono stats-footer-text">
              <span className="text-hw-terminal">$</span> echo &quot;Active contributor to open source • Focused on backend systems&quot;
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
