import { useState, useEffect } from 'react';
import { X, Languages, Globe } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';

export default function LanguageAvailabilityPopup() {
    const [isVisible, setIsVisible] = useState(false);
    const [hasBeenShown, setHasBeenShown] = useState(false);
    const { t, language } = useLanguage();

    useEffect(() => {
        const observer = new IntersectionObserver(
            (entries) => {
                const entry = entries[0];
                if (entry.isIntersecting && !hasBeenShown) {
                    setIsVisible(true);
                    setHasBeenShown(true);
                }
            },
            { threshold: 0.3 } // Trigger when 30% of the pricing section is visible
        );

        const pricingSection = document.getElementById('pricing');
        if (pricingSection) {
            observer.observe(pricingSection);
        }

        return () => {
            if (pricingSection) {
                observer.unobserve(pricingSection);
            }
        };
    }, [hasBeenShown]);

    if (!isVisible) return null;

    return (
        <div className="fixed inset-0 z-[400] flex items-center justify-center px-4 bg-black/60 backdrop-blur-sm">
            <div className="relative w-full max-w-4xl bg-[#111111] border-4 border-white rounded-[2.5rem] p-6 md:p-10 shadow-[20px_20px_0px_0px_rgba(255,255,255,0.1)] overflow-hidden animate-content-reveal">
                {/* Decorative Background Icons */}
                <div className="absolute top-10 right-10 opacity-10 -rotate-12 translate-x-1/2 -translate-y-1/2 pointer-events-none">
                    <Globe size={300} strokeWidth={1} className="text-white" />
                </div>

                <div className="relative z-10">
                    <div className="flex items-center justify-between mb-8">
                        <div className="flex items-center gap-4">
                            <div className="w-12 h-12 bg-white rounded-2xl flex items-center justify-center rotate-3 shadow-[4px_4px_0px_0px_rgba(255,255,255,0.2)]">
                                <Languages className="text-black w-6 h-6" />
                            </div>
                            <h2 className="text-2xl md:text-4xl font-black text-white uppercase italic tracking-tighter" style={{ fontFamily: "'Outfit', sans-serif" }}>
                                {t.popups.globalLearning}
                            </h2>
                        </div>
                        <button
                            onClick={() => setIsVisible(false)}
                            className="w-10 h-10 sm:w-12 sm:h-12 flex items-center justify-center bg-white text-black border-2 border-white rounded-full hover:bg-gray-200 transition-all shadow-[4px_4px_0px_0px_rgba(255,255,255,0.2)] active:translate-y-1 active:shadow-none"
                        >
                            <X className="w-5 h-5 sm:w-6 sm:h-6" />
                        </button>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                        {/* English Panel */}
                        <div className="relative bg-yellow-400 border-4 border-gray-900 p-6 rounded-[2rem] shadow-[8px_8px_0px_0px_rgba(31,41,55,1)] hover:-translate-y-1 transition-transform group">
                            {language === 'en' && (
                                <span className="absolute -top-3 -right-3 bg-white text-black px-3 py-1 text-[8px] font-black rounded-lg uppercase tracking-widest shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] border-2 border-gray-900 rotate-12 z-20">
                                    {t.popups.current}
                                </span>
                            )}
                            <div className="flex items-center justify-between mb-4">
                                <span className="px-3 py-1 bg-black text-white text-[10px] font-black rounded-lg uppercase tracking-widest">EN</span>
                            </div>
                            <p className="text-gray-900 font-bold text-sm leading-relaxed">
                                Courses are available in multiple languages. <span className="block mt-2 italic">Want to practice in English? No problem! Want to do it in your own language? We got you!</span>
                            </p>
                        </div>

                        {/* Lithuanian Panel */}
                        <div className="relative bg-emerald-400 border-4 border-gray-900 p-6 rounded-[2rem] shadow-[8px_8px_0px_0px_rgba(31,41,55,1)] hover:-translate-y-1 transition-transform group">
                            {language === 'lt' && (
                                <span className="absolute -top-3 -right-3 bg-white text-black px-3 py-1 text-[8px] font-black rounded-lg uppercase tracking-widest shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] border-2 border-gray-900 rotate-12 z-20">
                                    {t.popups.current}
                                </span>
                            )}
                            <div className="flex items-center justify-between mb-4">
                                <span className="px-3 py-1 bg-black text-white text-[10px] font-black rounded-lg uppercase tracking-widest">LT</span>
                            </div>
                            <p className="text-gray-900 font-bold text-sm leading-relaxed">
                                Kursai prieinami keliomis kalbomis. <span className="block mt-2 italic">Norite praktikuotis anglų kalba? Jokių problemų! Norite mokytis savo kalba? Mes tuo pasirūpinome!</span>
                            </p>
                        </div>

                        {/* Russian Panel */}
                        <div className="relative bg-pink-400 border-4 border-gray-900 p-6 rounded-[2rem] shadow-[8px_8px_0px_0px_rgba(31,41,55,1)] hover:-translate-y-1 transition-transform group">
                            {language === 'ru' && (
                                <span className="absolute -top-3 -right-3 bg-white text-black px-3 py-1 text-[8px] font-black rounded-lg uppercase tracking-widest shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] border-2 border-gray-900 rotate-12 z-20">
                                    {t.popups.current}
                                </span>
                            )}
                            <div className="flex items-center justify-between mb-4">
                                <span className="px-3 py-1 bg-black text-white text-[10px] font-black rounded-lg uppercase tracking-widest">RU</span>
                            </div>
                            <p className="text-gray-900 font-bold text-sm leading-relaxed">
                                Курсы доступны на нескольких языках. <span className="block mt-2 italic">Хотите практиковаться на английском? Без проблем! Хотите на своем родном языке? Мы позаботились об этом!</span>
                            </p>
                        </div>
                    </div>

                    <div className="mt-10 flex items-center justify-between">
                        <div className="w-1/3 invisible md:visible"></div>

                        <button
                            onClick={() => setIsVisible(false)}
                            className="bg-white text-black font-black px-10 py-4 rounded-2xl border-4 border-white shadow-[6px_6px_0px_0px_rgba(255,255,255,0.2)] hover:bg-gray-100 hover:scale-105 active:scale-95 transition-all uppercase tracking-widest text-sm"
                        >
                            {t.popups.awesome}
                        </button>

                        <div className="relative group flex justify-end w-1/3">
                            <div className="absolute bottom-full right-0 mb-4 w-64 bg-white border-4 border-gray-900 rounded-2xl p-4 shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] opacity-0 translate-y-4 pointer-events-none group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-300 z-50">
                                <p className="text-gray-400 text-[10px] font-black uppercase tracking-widest mb-2 border-b-2 border-gray-100 pb-1">
                                    {t.popups.availableLanguages}
                                </p>
                                <p className="text-gray-900 font-bold text-xs leading-relaxed">
                                    {t.popups.comingSoonList}
                                </p>
                                <p className="text-emerald-500 font-black text-[10px] mt-2 italic uppercase">
                                    {t.popups.andMore}
                                </p>
                                <div className="absolute -bottom-2 right-6 w-4 h-4 bg-white border-r-4 border-b-4 border-gray-900 rotate-45"></div>
                            </div>
                            <button className="flex items-center gap-2 bg-gray-800 text-white/70 hover:text-white px-4 py-2 rounded-xl border-2 border-white/10 hover:border-white transition-all text-[10px] font-black uppercase tracking-widest animate-neon-glow">
                                <Globe className="w-3.5 h-3.5" />
                                {t.popups.availableLanguages}
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
