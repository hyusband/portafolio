'use client';

import { useLanguage } from '@/lib/LanguageContext';

export default function LanguageToggle() {
  const { language, setLanguage } = useLanguage();

  return (
    <div className="language-toggle">
      <button
        onClick={() => setLanguage(language === 'en' ? 'es' : 'en')}
        className="language-toggle-btn"
        aria-label="Toggle language"
      >
        <span className="text-hw-text-dim font-mono lang-label">LANG:</span>
        <span className="text-hw-terminal font-mono lang-value">
          {language === 'en' ? 'EN' : 'ES'}
        </span>
        <span className="text-hw-text-dim font-mono lang-arrow">⟷</span>
      </button>
    </div>
  );
}
