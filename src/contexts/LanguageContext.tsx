import { createContext, useContext, useState, useEffect, ReactNode } from 'react';
import { Language, getTranslation } from '../utils/translations';

interface LanguageContextType {
  language: Language;
  t: ReturnType<typeof getTranslation>;
  setLanguage: (lang: Language) => void;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [language, setLanguageState] = useState<Language>('en');

  useEffect(() => {
    // Check URL hash for language (highest priority)
    const hash = window.location.hash;
    let initialLang: Language = 'en';

    if (hash === '#lt') {
      initialLang = 'lt';
    } else if (hash === '#ru') {
      initialLang = 'ru';
    } else {
      // Check localStorage if no hash
      const savedLang = localStorage.getItem('language') as Language;
      if (savedLang && ['en', 'lt', 'ru'].includes(savedLang)) {
        initialLang = savedLang;
      }
    }

    setLanguageState(initialLang);

    // Auto-detect country if no manual preference is set
    if (!hash && !localStorage.getItem('language')) {
      fetch('https://ipapi.co/json/')
        .then(res => res.json())
        .then(data => {
          // Data collection as requested
          console.log('[Analytics] User Data Collected:', {
            country: data.country_name,
            city: data.city,
            ip: data.ip,
            timestamp: new Date().toISOString()
          });

          if (data.country_code === 'LT') {
            setLanguageState('lt');
            localStorage.setItem('language', 'lt');
          }
        })
        .catch(err => console.error('Country detection failed:', err));
    }

    // Listen for hash changes
    const handleHashChange = () => {
      const newHash = window.location.hash;
      if (newHash === '#lt') {
        setLanguageState('lt');
        localStorage.setItem('language', 'lt');
      } else if (newHash === '#ru') {
        setLanguageState('ru');
        localStorage.setItem('language', 'ru');
      } else if (newHash === '#en') {
        setLanguageState('en');
        localStorage.setItem('language', 'en');
      }
    };

    // Listen for custom language change events
    const handleLanguageChange = (e: CustomEvent) => {
      const newLang = e.detail as Language;
      setLanguageState(newLang);
      localStorage.setItem('language', newLang);
    };

    window.addEventListener('hashchange', handleHashChange);
    window.addEventListener('languageChange', handleLanguageChange as EventListener);

    return () => {
      window.removeEventListener('hashchange', handleHashChange);
      window.removeEventListener('languageChange', handleLanguageChange as EventListener);
    };
  }, []);

  useEffect(() => {
    const currentT = getTranslation(language);
    if (currentT.seo?.title) {
      document.title = currentT.seo.title;
    }
  }, [language]);

  const setLanguage = (lang: Language) => {
    setLanguageState(lang);
  };

  return (
    <LanguageContext.Provider value={{ language, t: getTranslation(language), setLanguage }}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  const context = useContext(LanguageContext);
  if (context === undefined) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
}

