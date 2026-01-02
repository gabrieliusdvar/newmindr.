import { useState, useEffect } from 'react';
import { X, Languages, Globe } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';

const setCookie = (name: string, value: string, days: number) => {
    const expires = new Date();
    expires.setTime(expires.getTime() + days * 24 * 60 * 60 * 1000);
    document.cookie = `${name}=${value};expires=${expires.toUTCString()};path=/`;
};

const getCookie = (name: string) => {
    const value = `; ${document.cookie}`;
    const parts = value.split(`; ${name}=`);
    if (parts.length === 2) return parts.pop()?.split(';').shift();
};

export default function LanguageAvailabilityPopup() {
    const [isVisible, setIsVisible] = useState(false);
    const { t, language, setLanguage } = useLanguage();

    useEffect(() => {
        const shown = getCookie('language_popup_shown');
        const hasHash = window.location.hash.length > 0; // Don't show if user arrived via specific language link/hash

        if (!shown && !hasHash) {
            const timer = setTimeout(() => {
                setIsVisible(true);
            }, 1000);
            return () => clearTimeout(timer);
        }
    }, []);

    const handleLanguageSelect = (lang: 'en' | 'lt' | 'ru') => {
        setLanguage(lang);
        setCookie('language_popup_shown', 'true', 365);
        setIsVisible(false);
    };

    const handleClose = () => {
        setCookie('language_popup_shown', 'true', 365);
        setIsVisible(false);
    };

    if (!isVisible) return null;

    return (
        <div className="fixed inset-0 z-[9999] flex items-center justify-center px-4 bg-black/80 backdrop-blur-md" onClick={handleClose}>
            <div
                className="relative w-full max-w-4xl bg-[#111111] border-4 border-white rounded-[2.5rem] p-6 md:p-10 shadow-[20px_20px_0px_0px_rgba(255,255,255,0.1)] overflow-hidden animate-in zoom-in-95 duration-300"
                onClick={(e) => e.stopPropagation()}
            >
                {/* Decorative Background Icons */}
                <div className="absolute top-10 right-10 opacity-10 -rotate-12 translate-x-1/2 -translate-y-1/2 pointer-events-none">
                    <Globe size={300} strokeWidth={1} className="text-white" />
                </div>

                <div className="relative z-10">
                    <div className="flex flex-col mb-8">
                        {/* Header Prompt */}
                        <div className="inline-block self-start px-4 py-1.5 bg-white text-black text-xs font-black uppercase tracking-widest rounded-full mb-4 shadow-[4px_4px_0px_0px_rgba(255,255,255,0.2)]">
                            Choose Website Language / Pasirinkite Kalbą / Выберите Язык
                        </div>

                        <div className="flex items-center justify-between w-full">
                            <div className="flex items-center gap-4">
                                <div className="w-12 h-12 bg-white rounded-2xl flex items-center justify-center rotate-3 shadow-[4px_4px_0px_0px_rgba(255,255,255,0.2)]">
                                    <Languages className="text-black w-6 h-6" />
                                </div>
                                <h2 className="text-2xl md:text-4xl font-black text-white uppercase italic tracking-tighter" style={{ fontFamily: "'Outfit', sans-serif" }}>
                                    {t.popups.globalLearning}
                                </h2>
                            </div>
                            {/* Close Button hit area */}
                            <div className="absolute top-0 right-0 z-50 p-4 cursor-pointer group" onClick={handleClose}>
                                <button
                                    className="w-10 h-10 flex items-center justify-center bg-red-500 text-white border-2 border-white rounded-full hover:bg-red-600 transition-all shadow-[4px_4px_0px_0px_rgba(255,255,255,0.2)] active:translate-y-1 active:shadow-none"
                                >
                                    <X className="w-6 h-6" />
                                </button>
                            </div>
                        </div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                        {/* English Panel */}
                        <div
                            onClick={() => handleLanguageSelect('en')}
                            className="relative bg-yellow-400 border-4 border-gray-900 p-6 rounded-[2rem] shadow-[8px_8px_0px_0px_rgba(31,41,55,1)] hover:-translate-y-1 hover:shadow-[12px_12px_0px_0px_rgba(31,41,55,1)] active:translate-y-0 active:shadow-[4px_4px_0px_0px_rgba(31,41,55,1)] transition-all group cursor-pointer"
                        >
                            {language === 'en' && (
                                <span className="absolute -top-3 -right-3 bg-white text-black px-3 py-1 text-[8px] font-black rounded-lg uppercase tracking-widest shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] border-2 border-gray-900 rotate-12 z-20">
                                    {t.popups.current}
                                </span>
                            )}
                            <div className="flex items-center justify-between mb-4">
                                <span className="px-3 py-1 bg-black text-white text-[10px] font-black rounded-lg uppercase tracking-widest">EN</span>
                                <span className="text-gray-900 font-black text-lg uppercase">English</span>
                            </div>
                            <p className="text-gray-900 font-bold text-sm leading-relaxed">
                                Courses are available in multiple languages. <span className="block mt-2 italic">Want to practice in English? No problem!</span>
                            </p>
                        </div>

                        {/* Lithuanian Panel */}
                        <div
                            onClick={() => handleLanguageSelect('lt')}
                            className="relative bg-emerald-400 border-4 border-gray-900 p-6 rounded-[2rem] shadow-[8px_8px_0px_0px_rgba(31,41,55,1)] hover:-translate-y-1 hover:shadow-[12px_12px_0px_0px_rgba(31,41,55,1)] active:translate-y-0 active:shadow-[4px_4px_0px_0px_rgba(31,41,55,1)] transition-all group cursor-pointer"
                        >
                            {language === 'lt' && (
                                <span className="absolute -top-3 -right-3 bg-white text-black px-3 py-1 text-[8px] font-black rounded-lg uppercase tracking-widest shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] border-2 border-gray-900 rotate-12 z-20">
                                    {t.popups.current}
                                </span>
                            )}
                            <div className="flex items-center justify-between mb-4">
                                <span className="px-3 py-1 bg-black text-white text-[10px] font-black rounded-lg uppercase tracking-widest">LT</span>
                                <span className="text-gray-900 font-black text-lg uppercase">Lietuvių</span>
                            </div>
                            <p className="text-gray-900 font-bold text-sm leading-relaxed">
                                Kursai prieinami keliomis kalbomis. <span className="block mt-2 italic">Norite mokytis savo kalba? Mes tuo pasirūpinome!</span>
                            </p>
                        </div>

                        {/* Russian Panel */}
                        <div
                            onClick={() => handleLanguageSelect('ru')}
                            className="relative bg-pink-400 border-4 border-gray-900 p-6 rounded-[2rem] shadow-[8px_8px_0px_0px_rgba(31,41,55,1)] hover:-translate-y-1 hover:shadow-[12px_12px_0px_0px_rgba(31,41,55,1)] active:translate-y-0 active:shadow-[4px_4px_0px_0px_rgba(31,41,55,1)] transition-all group cursor-pointer"
                        >
                            {language === 'ru' && (
                                <span className="absolute -top-3 -right-3 bg-white text-black px-3 py-1 text-[8px] font-black rounded-lg uppercase tracking-widest shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] border-2 border-gray-900 rotate-12 z-20">
                                    {t.popups.current}
                                </span>
                            )}
                            <div className="flex items-center justify-between mb-4">
                                <span className="px-3 py-1 bg-black text-white text-[10px] font-black rounded-lg uppercase tracking-widest">RU</span>
                                <span className="text-gray-900 font-black text-lg uppercase">Русский</span>
                            </div>
                            <p className="text-gray-900 font-bold text-sm leading-relaxed">
                                Курсы доступны на нескольких языках. <span className="block mt-2 italic">Хотите на своем родном языке? Мы позаботились об этом!</span>
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
