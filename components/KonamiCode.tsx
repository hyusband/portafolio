'use client';

import { useEffect } from 'react';
import { useGamification } from '@/lib/GamificationContext';

const KONAMI_CODE = [
  'ArrowUp',
  'ArrowUp',
  'ArrowDown',
  'ArrowDown',
  'ArrowLeft',
  'ArrowRight',
  'ArrowLeft',
  'ArrowRight',
  'b',
  'a',
];

export default function KonamiCode() {
  const { activateMatrixMode } = useGamification();

  useEffect(() => {
    let konamiIndex = 0;

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === KONAMI_CODE[konamiIndex]) {
        konamiIndex++;
        
        if (konamiIndex === KONAMI_CODE.length) {
          activateMatrixMode();
          konamiIndex = 0;
          
          // Show notification
          const notification = document.createElement('div');
          notification.className = 'konami-notification';
          notification.innerHTML = `
            <div class="text-hw-terminal font-mono" style="font-size: 1.5rem; margin-bottom: 0.5rem;">
              🎮 MATRIX MODE ACTIVATED
            </div>
            <div class="text-hw-text-dim font-mono" style="font-size: 0.875rem;">
              Achievement Unlocked: Konami Master
            </div>
          `;
          document.body.appendChild(notification);
          
          setTimeout(() => {
            notification.remove();
          }, 3000);
        }
      } else {
        konamiIndex = 0;
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [activateMatrixMode]);

  return null;
}
