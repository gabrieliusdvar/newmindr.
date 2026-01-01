import { useState, useEffect } from 'react';
import { Globe } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';
import { Language } from '../utils/translations';

export default function LanguageSwitcher() {
  const { language, setLanguage } = useLanguage();
  const [isOpen, setIsOpen] = useState(false);
  const [showGlobe, setShowGlobe] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowGlobe(true);
    }, 2500); // Wait 2.5 seconds before transitioning to globe

    return () => clearTimeout(timer);
  }, [language]); // Restart effect if language changes during the brief window

  const handleLanguageChange = (lang: Language) => {
    setLanguage(lang);
    setIsOpen(false);
    setShowGlobe(false); // Briefly show flag again on change
    if (lang === 'lt') {
      window.location.hash = '#lt';
    } else if (lang === 'ru') {
      window.location.hash = '#ru';
    } else {
      window.location.hash = '';
      window.history.replaceState(null, '', window.location.pathname);
    }
    window.dispatchEvent(new CustomEvent('languageChange', { detail: lang }));
  };

  const Flag = ({ lang }: { lang: Language }) => {
    switch (lang) {
      case 'lt':
        return <img src="/lt-flag.png" alt="LT" className="w-full h-full object-cover" />;
      case 'ru':
        return (
          <div className="w-full h-full flex flex-col scale-110">
            <div className="flex-1 bg-white"></div>
            <div className="flex-1 bg-[#0039A6]"></div>
            <div className="flex-1 bg-[#D52B1E]"></div>
          </div>
        );
      default:
        // US Flag fallback
        return (
          <div className="w-full h-full bg-[#3C3B6E] relative overflow-hidden scale-110">
            <div className="absolute inset-0 flex flex-col">
              {[...Array(13)].map((_, i) => (
                <div key={i} className={`flex-1 ${i % 2 === 0 ? 'bg-[#B22234]' : 'bg-white'}`}></div>
              ))}
            </div>
            <div className="absolute top-0 left-0 w-1/2 h-1/2 bg-[#3C3B6E] flex items-center justify-center p-1">
              <div className="grid grid-cols-3 gap-0.5">
                {[...Array(9)].map((_, i) => (
                  <div key={i} className="w-1 h-1 bg-white rounded-full"></div>
                ))}
              </div>
            </div>
          </div>
        );
    }
  };

  return (
    <div className="fixed bottom-6 right-6 z-50">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="group w-14 h-14 bg-yellow-400 border-2 border-gray-900 rounded-lg flex items-center justify-center shadow-lg transform hover:scale-105 active:scale-95 transition-all duration-500 overflow-hidden"
        style={{
          boxShadow: '4px 4px 0px 0px rgba(0,0,0,0.8)',
          transform: 'translateZ(0)'
        }}
      >
        <div className="relative w-full h-full flex items-center justify-center">
          {/* Flag Container (Slides out left with motion blur) */}
          <div
            className={`absolute inset-0 flex items-center justify-center transition-all duration-[1800ms] ease-[cubic-bezier(0.19,1,0.22,1)] ${showGlobe
                ? 'opacity-0 -translate-x-full blur-xl scale-x-125'
                : 'opacity-100 translate-x-0 blur-0 scale-100'
              }`}
          >
            <Flag lang={language} />
          </div>

          {/* Globe Container (Slides in from right with motion blur) */}
          <div
            className={`absolute inset-0 flex items-center justify-center transition-all duration-[1800ms] ease-[cubic-bezier(0.19,1,0.22,1)] ${showGlobe
                ? 'opacity-100 translate-x-0 blur-0 scale-100'
                : 'opacity-0 translate-x-full blur-xl scale-x-125'
              }`}
          >
            <Globe className="w-7 h-7 text-gray-900 drop-shadow-sm" strokeWidth={2.5} />
          </div>
        </div>
      </button>

      {isOpen && (
        <div
          className="absolute bottom-16 right-0 bg-white border-2 border-gray-900 rounded-lg shadow-lg p-4 min-w-[120px]"
          style={{
            boxShadow: '4px 4px 0px 0px rgba(0,0,0,0.8)',
            transform: 'translateZ(0)'
          }}
        >
          <button
            onClick={() => handleLanguageChange('en')}
            className={`w-full text-left px-4 py-2 rounded font-bold text-sm mb-2 transition-colors ${language === 'en'
              ? 'bg-yellow-400 text-gray-900'
              : 'bg-gray-100 text-gray-900 hover:bg-gray-200'
              }`}
          >
            English
          </button>
          <button
            onClick={() => handleLanguageChange('lt')}
            className={`w-full text-left px-4 py-2 rounded font-bold text-sm mb-2 transition-colors ${language === 'lt'
              ? 'bg-yellow-400 text-gray-900'
              : 'bg-gray-100 text-gray-900 hover:bg-gray-200'
              }`}
          >
            Lietuvių
          </button>
          <button
            onClick={() => handleLanguageChange('ru')}
            className={`w-full text-left px-4 py-2 rounded font-bold text-sm transition-colors ${language === 'ru'
              ? 'bg-yellow-400 text-gray-900'
              : 'bg-gray-100 text-gray-900 hover:bg-gray-200'
              }`}
          >
            Русский
          </button>
        </div>
      )}
    </div>
  );
}

