'use client';

import { createContext, useContext, useState, useEffect, ReactNode } from 'react';

export type ColorScheme = 'default' | 'matrix' | 'cyberpunk' | 'hacker';
export type FontSize = 'small' | 'medium' | 'large';

interface ThemeContextType {
  colorScheme: ColorScheme;
  setColorScheme: (scheme: ColorScheme) => void;
  fontSize: FontSize;
  setFontSize: (size: FontSize) => void;
}

const ThemeContext = createContext<ThemeContextType | undefined>(undefined);

export const themes = {
  default: {
    name: 'Default',
    primary: '#00ff41',
    secondary: '#ff6b35',
    accent: '#f7931e',
    bg: '#0a0e27',
  },
  matrix: {
    name: 'Matrix',
    primary: '#00ff41',
    secondary: '#008f11',
    accent: '#00ff41',
    bg: '#000000',
  },
  cyberpunk: {
    name: 'Cyberpunk',
    primary: '#ff2a6d',
    secondary: '#05d9e8',
    accent: '#d1f7ff',
    bg: '#1a0033',
  },
  hacker: {
    name: 'Hacker',
    primary: '#00d9ff',
    secondary: '#0080ff',
    accent: '#00ffff',
    bg: '#000814',
  },
};

export function ThemeProvider({ children }: { children: ReactNode }) {
  const [colorScheme, setColorSchemeState] = useState<ColorScheme>('default');
  const [fontSize, setFontSizeState] = useState<FontSize>('medium');

  useEffect(() => {
    const savedScheme = localStorage.getItem('colorScheme') as ColorScheme;
    const savedSize = localStorage.getItem('fontSize') as FontSize;
    
    if (savedScheme && themes[savedScheme]) {
      setColorSchemeState(savedScheme);
    }
    if (savedSize && ['small', 'medium', 'large'].includes(savedSize)) {
      setFontSizeState(savedSize);
    }
  }, []);

  useEffect(() => {
    const theme = themes[colorScheme];
    const root = document.documentElement;
    
    root.style.setProperty('--color-hw-terminal', theme.primary);
    root.style.setProperty('--color-hw-electric', theme.secondary);
    root.style.setProperty('--color-hw-rust', theme.accent);
    root.style.setProperty('--color-hw-black', theme.bg);
    
    const fontSizes = {
      small: '14px',
      medium: '16px',
      large: '18px',
    };
    root.style.setProperty('--base-font-size', fontSizes[fontSize]);
  }, [colorScheme, fontSize]);

  const setColorScheme = (scheme: ColorScheme) => {
    setColorSchemeState(scheme);
    localStorage.setItem('colorScheme', scheme);
  };

  const setFontSize = (size: FontSize) => {
    setFontSizeState(size);
    localStorage.setItem('fontSize', size);
  };

  return (
    <ThemeContext.Provider value={{ colorScheme, setColorScheme, fontSize, setFontSize }}>
      {children}
    </ThemeContext.Provider>
  );
}

export function useTheme() {
  const context = useContext(ThemeContext);
  if (!context) {
    throw new Error('useTheme must be used within ThemeProvider');
  }
  return context;
}
