'use client';

import { useLanguage } from '@/lib/LanguageContext';
import { Icons } from './Icons';

export default function LanguageToggle() {
  const { language, setLanguage } = useLanguage();

  return (
    <div className="language-toggle">
      <button
        onClick={() => setLanguage(language === 'en' ? 'es' : 'en')}
        className="language-toggle-btn"
        aria-label="Toggle language"
      >
        <Icons.Globe />
        <span className="text-hw-terminal font-mono" style={{ marginLeft: '0.5rem' }}>
          {language.toUpperCase()}
        </span>
      </button>
    </div>
  );
}
