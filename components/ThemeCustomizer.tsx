'use client';

import { useTheme, themes, ColorScheme, FontSize } from '@/lib/ThemeContext';
import { useState } from 'react';
import { Icons } from './Icons';

export default function ThemeCustomizer() {
  const { colorScheme, setColorScheme, fontSize, setFontSize } = useTheme();
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="theme-customizer">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="theme-toggle-btn"
        aria-label="Theme customizer"
      >
        <Icons.Palette />
      </button>

      {isOpen && (
        <div className="theme-panel">
          <div className="theme-panel-header">
            <span className="text-hw-terminal font-mono">$ theme --customize</span>
            <button onClick={() => setIsOpen(false)} className="close-btn">
              <Icons.X />
            </button>
          </div>

          {/* Color Schemes */}
          <div className="theme-section">
            <h3 className="text-hw-text font-mono theme-section-title">COLOR_SCHEME:</h3>
            <div className="theme-options">
              {(Object.keys(themes) as ColorScheme[]).map((scheme) => (
                <button
                  key={scheme}
                  onClick={() => setColorScheme(scheme)}
                  className={`theme-option ${colorScheme === scheme ? 'active' : ''}`}
                  style={{
                    borderColor: themes[scheme].primary,
                    background: colorScheme === scheme ? `${themes[scheme].primary}20` : 'transparent',
                  }}
                >
                  <div className="theme-preview">
                    <span style={{ background: themes[scheme].primary }} />
                    <span style={{ background: themes[scheme].secondary }} />
                    <span style={{ background: themes[scheme].accent }} />
                  </div>
                  <span className="text-hw-text-dim font-mono theme-name">{themes[scheme].name}</span>
                </button>
              ))}
            </div>
          </div>

          {/* Font Size */}
          <div className="theme-section">
            <h3 className="text-hw-text font-mono theme-section-title">FONT_SIZE:</h3>
            <div className="font-size-options">
              {(['small', 'medium', 'large'] as FontSize[]).map((size) => (
                <button
                  key={size}
                  onClick={() => setFontSize(size)}
                  className={`font-size-btn ${fontSize === size ? 'active' : ''}`}
                >
                  <span className="text-hw-text-dim font-mono">
                    {size === 'small' && 'A'}
                    {size === 'medium' && 'A'}
                    {size === 'large' && 'A'}
                  </span>
                </button>
              ))}
            </div>
          </div>

          <div className="theme-footer">
            <span className="text-hw-text-dim font-mono" style={{ fontSize: '0.75rem' }}>
              Settings saved to localStorage
            </span>
          </div>
        </div>
      )}
    </div>
  );
}
