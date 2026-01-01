import { useState, useEffect } from 'react';
import { useLanguage } from '../contexts/LanguageContext';
import { useModal } from '../contexts/ModalContext';

export default function CookieNotice() {
    const [isVisible, setIsVisible] = useState(false);
    const { t } = useLanguage();
    const { openModal } = useModal();

    useEffect(() => {
        const consent = localStorage.getItem('cookie-consent');
        if (!consent) {
            // Delay appearance to not overwhelm user immediately
            const timer = setTimeout(() => setIsVisible(true), 2000);
            return () => clearTimeout(timer);
        }
    }, []);

    const handleAccept = () => {
        localStorage.setItem('cookie-consent', 'accepted');
        setIsVisible(false);
    };

    const handleDecline = () => {
        localStorage.setItem('cookie-consent', 'declined');
        setIsVisible(false);
    };

    if (!isVisible) return null;

    return (
        <div className="fixed bottom-6 right-6 z-[300] max-w-sm w-[calc(100%-3rem)] sm:w-full animate-slide-up">
            <div className="bg-emerald-400 border-4 border-gray-900 p-6 sm:p-8 rounded-[2rem] sm:rounded-[3rem] shadow-[8px_8px_0px_0px_rgba(31,41,55,1)] relative overflow-hidden group">
                {/* Decorative elements to match the site's premium feel */}
                <div className="absolute -top-12 -right-12 w-32 h-32 bg-yellow-300 rounded-full blur-3xl opacity-40 group-hover:opacity-60 transition-opacity"></div>
                <div className="absolute -bottom-8 -left-8 w-24 h-24 bg-pink-400 rounded-full blur-2xl opacity-30 group-hover:opacity-50 transition-opacity"></div>

                <div className="relative z-10">
                    <div className="flex items-center gap-3 mb-4">
                        <div className="w-12 h-12 bg-white border-2 border-gray-900 rounded-2xl flex items-center justify-center shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] -rotate-3">
                            <span className="text-2xl">🍪</span>
                        </div>
                        <h3 className="text-2xl font-black text-gray-900 uppercase tracking-tighter italic" style={{ fontFamily: "'Outfit', sans-serif" }}>
                            {t.cookies.title}
                        </h3>
                    </div>

                    <p className="text-gray-900 font-bold text-sm mb-8 leading-relaxed">
                        {t.cookies.description}
                        <button
                            onClick={() => openModal('privacy')}
                            className="ml-2 underline hover:text-white transition-colors decoration-2 underline-offset-4"
                        >
                            {t.cookies.privacyPolicy}
                        </button>
                    </p>

                    <div className="flex flex-col gap-3">
                        <button
                            onClick={handleAccept}
                            className="w-full bg-gray-900 text-white font-black py-4 rounded-2xl border-2 border-white shadow-[4px_4px_0px_0px_rgba(0,0,0,0.2)] hover:bg-emerald-600 hover:scale-[1.02] active:scale-95 transition-all uppercase tracking-widest text-sm"
                        >
                            {t.cookies.accept}
                        </button>
                        <div className="flex gap-3">
                            <button
                                onClick={handleDecline}
                                className="flex-1 bg-white/50 backdrop-blur-sm border-2 border-gray-900 text-gray-900 font-black py-3 rounded-2xl hover:bg-white transition-all uppercase tracking-widest text-[10px]"
                            >
                                {t.cookies.decline}
                            </button>
                            <button
                                onClick={() => openModal('privacy')}
                                className="flex-1 bg-yellow-300 border-2 border-gray-900 text-gray-900 font-black py-3 rounded-2xl hover:bg-yellow-400 transition-all uppercase tracking-widest text-[10px]"
                            >
                                {t.cookies.settings}
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
