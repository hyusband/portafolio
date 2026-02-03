'use client';

import { createContext, useContext, useState, useEffect, ReactNode } from 'react';

export interface Achievement {
  id: string;
  name: string;
  description: string;
  icon: string;
  unlocked: boolean;
}

interface GamificationContextType {
  achievements: Achievement[];
  unlockAchievement: (id: string) => void;
  progress: number;
  sectionsVisited: Set<string>;
  visitSection: (section: string) => void;
  matrixMode: boolean;
  activateMatrixMode: () => void;
}

const GamificationContext = createContext<GamificationContextType | undefined>(undefined);

const defaultAchievements: Achievement[] = [
  { id: 'first_visit', name: 'First Contact', description: 'Visited the portfolio', icon: 'USER', unlocked: false },
  { id: 'explorer', name: 'Explorer', description: 'Visited all sections', icon: 'MAP', unlocked: false },
  { id: 'theme_changer', name: 'Style Master', description: 'Changed the theme', icon: 'PALETTE', unlocked: false },
  { id: 'linguist', name: 'Polyglot', description: 'Switched languages', icon: 'GLOBE', unlocked: false },
  { id: 'konami_master', name: 'Konami Master', description: 'Activated Matrix Mode', icon: 'GAMEPAD', unlocked: false },
  { id: 'curious', name: 'Curious Mind', description: 'Opened the theme customizer', icon: 'SEARCH', unlocked: false },
];

const totalSections = 7; // Hero, Backend, GitHub, Skills, Projects, Experience, Contact

export function GamificationProvider({ children }: { children: ReactNode }) {
  const [achievements, setAchievements] = useState<Achievement[]>(defaultAchievements);
  const [sectionsVisited, setSectionsVisited] = useState<Set<string>>(new Set());
  const [progress, setProgress] = useState(0);
  const [matrixMode, setMatrixMode] = useState(false);

  useEffect(() => {
    const saved = localStorage.getItem('achievements');
    const savedSections = localStorage.getItem('sectionsVisited');
    
    if (saved) {
      setAchievements(JSON.parse(saved));
    }
    if (savedSections) {
      setSectionsVisited(new Set(JSON.parse(savedSections)));
    }

    unlockAchievement('first_visit');
  }, []);

  useEffect(() => {
    const newProgress = (sectionsVisited.size / totalSections) * 100;
    setProgress(newProgress);

    if (sectionsVisited.size >= totalSections) {
      unlockAchievement('explorer');
    }
  }, [sectionsVisited]);

  const unlockAchievement = (id: string) => {
    setAchievements(prev => {
      const updated = prev.map(ach =>
        ach.id === id ? { ...ach, unlocked: true } : ach
      );
      localStorage.setItem('achievements', JSON.stringify(updated));
      return updated;
    });
  };

  const visitSection = (section: string) => {
    setSectionsVisited(prev => {
      const updated = new Set(prev).add(section);
      localStorage.setItem('sectionsVisited', JSON.stringify([...updated]));
      return updated;
    });
  };

  const activateMatrixMode = () => {
    setMatrixMode(true);
    unlockAchievement('konami_master');
    
    setTimeout(() => setMatrixMode(false), 10000);
  };

  return (
    <GamificationContext.Provider value={{
      achievements,
      unlockAchievement,
      progress,
      sectionsVisited,
      visitSection,
      matrixMode,
      activateMatrixMode,
    }}>
      {children}
    </GamificationContext.Provider>
  );
}

export function useGamification() {
  const context = useContext(GamificationContext);
  if (!context) {
    throw new Error('useGamification must be used within GamificationProvider');
  }
  return context;
}
