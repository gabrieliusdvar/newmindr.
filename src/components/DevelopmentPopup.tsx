import { useState, useEffect } from 'react';
import { X, Rocket, Sparkles } from 'lucide-react';
import { useLocation } from 'react-router-dom';
import { useLanguage } from '../contexts/LanguageContext';

export default function DevelopmentPopup() {
    const { t } = useLanguage();
    const location = useLocation();
    const [isOpen, setIsOpen] = useState(false);
    const [email, setEmail] = useState('');
    const [isSubmitted, setIsSubmitted] = useState(false);
    const [error, setError] = useState('');

    useEffect(() => {
        // Show popup only on the main page ('/')
        if (location.pathname === '/') {
            const timer = setTimeout(() => {
                setIsOpen(true);
            }, 1000);
            return () => clearTimeout(timer);
        } else {
            setIsOpen(false);
        }
    }, [location.pathname]);

    const handleClose = () => {
        setIsOpen(false);
    };

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        if (!email) {
            setError('required');
            return;
        }
        if (!/^\S+@\S+\.\S+$/.test(email)) {
            setError('invalidEmail');
            return;
        }

        // Here you would normally send the email to your backend
        console.log('Reserved spot for:', email);
        setIsSubmitted(true);
        setTimeout(() => {
            handleClose();
        }, 2000);
    };

    if (!isOpen) return null;

    return (
        <div
            className="fixed inset-0 z-[9999] flex items-center justify-center bg-black/60 backdrop-blur-sm animate-in fade-in duration-300 p-4"
            onClick={handleClose}
        >
            <div
                className="bg-white border-4 border-gray-900 rounded-3xl shadow-[12px_12px_0px_0px_rgba(0,0,0,1)] max-w-lg w-full relative animate-in zoom-in-95 duration-300"
                onClick={(e) => e.stopPropagation()}
            >
                {/* Close Button hit area - makes it much easier to tap */}
                <div className="absolute -top-3 -right-3 sm:-top-4 sm:-right-4 z-50 p-6 cursor-pointer group" onClick={handleClose}>
                    <button
                        className="w-10 h-10 sm:w-12 sm:h-12 bg-red-500 border-2 sm:border-4 border-gray-900 rounded-full flex items-center justify-center shadow-[2px_2px_0px_0px_rgba(0,0,0,1)] sm:shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] group-hover:-translate-y-1 transition-all"
                    >
                        <X className="w-6 h-6 text-white" strokeWidth={3} />
                    </button>
                </div>

                {/* Header with animated icons */}
                <div className="bg-gradient-to-r from-purple-400 to-pink-400 border-b-4 border-gray-900 rounded-t-[1.25rem] p-6 sm:p-8 relative overflow-hidden">
                    <div className="absolute top-4 right-4 animate-bounce">
                        <Sparkles className="w-8 h-8 text-yellow-300" fill="currentColor" />
                    </div>
                    <div className="absolute bottom-4 left-4 animate-pulse">
                        <Rocket className="w-10 h-10 text-white opacity-20" />
                    </div>

                    <div className="relative z-10">
                        <div className="inline-block px-3 py-1 bg-yellow-300 border-2 border-gray-900 rounded-full text-xs font-black uppercase tracking-wider mb-3 shadow-[2px_2px_0px_0px_rgba(0,0,0,1)]">
                            {t.devPopup.badge}
                        </div>
                        <h2 className="text-3xl sm:text-4xl font-black text-white leading-tight uppercase tracking-tighter mb-2">
                            {t.devPopup.title}
                        </h2>
                        <p className="text-white/90 font-bold text-sm sm:text-base">
                            {t.devPopup.subtitle}
                        </p>
                    </div>
                </div>

                {/* Content */}
                <div className="p-6 sm:p-8">
                    {!isSubmitted ? (
                        <>
                            <p className="text-gray-700 font-bold text-base sm:text-lg leading-relaxed mb-6">
                                {t.devPopup.description}
                            </p>

                            {/* Email Form */}
                            <form onSubmit={handleSubmit} noValidate className="space-y-4">
                                <div>
                                    <label htmlFor="popup-email" className="block text-sm font-black text-gray-900 mb-2 uppercase tracking-wide">
                                        {t.devPopup.emailLabel}
                                    </label>
                                    <div className="relative">
                                        <input
                                            type="email"
                                            id="popup-email"
                                            value={email}
                                            onChange={(e) => {
                                                setEmail(e.target.value);
                                                setError(''); // Clear error on type
                                            }}
                                            placeholder={t.devPopup.emailPlaceholder}
                                            className={`w-full px-4 py-3 border-3 ${error ? 'border-red-500 bg-red-50' : 'border-gray-900'} rounded-xl font-bold text-gray-900 placeholder:text-gray-400 focus:outline-none focus:ring-4 focus:ring-purple-300 shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] transition-all`}
                                        />
                                        {error && (
                                            <div className="absolute top-full mt-1 left-0 right-0 z-20 flex items-center gap-1.5 bg-white border-2 border-red-500 text-red-600 rounded-md px-2 py-1 shadow-[2px_2px_0px_0px_rgba(0,0,0,0.1)] animate-in slide-in-from-top-1">
                                                <div className="w-4 h-4 bg-red-500 text-white rounded-full flex items-center justify-center text-[10px] font-black border border-gray-900 shrink-0">!</div>
                                                <span className="text-[10px] font-black leading-tight">
                                                    {t.validation[error as keyof typeof t.validation]}
                                                </span>
                                            </div>
                                        )}
                                    </div>
                                </div>

                                <button
                                    type="submit"
                                    className="w-full mt-2 bg-gradient-to-r from-purple-500 to-pink-500 text-white font-black text-lg py-4 rounded-xl border-3 border-gray-900 shadow-[6px_6px_0px_0px_rgba(0,0,0,1)] hover:-translate-y-1 hover:shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] active:translate-y-0 active:shadow-[2px_2px_0px_0px_rgba(0,0,0,1)] transition-all uppercase tracking-wide flex items-center justify-center gap-2"
                                >
                                    <Rocket className="w-5 h-5" />
                                    {t.devPopup.ctaButton}
                                </button>
                            </form>

                            {/* Skip option */}
                            <button
                                onClick={handleClose}
                                className="w-full mt-4 text-gray-500 hover:text-gray-900 font-bold text-sm underline transition-colors"
                            >
                                {t.devPopup.skipButton}
                            </button>
                        </>
                    ) : (
                        <div className="text-center py-8 animate-in zoom-in duration-300">
                            <div className="w-20 h-20 bg-green-400 border-4 border-gray-900 rounded-full flex items-center justify-center mx-auto mb-4 shadow-[6px_6px_0px_0px_rgba(0,0,0,1)]">
                                <Sparkles className="w-10 h-10 text-white" fill="currentColor" />
                            </div>
                            <h3 className="text-2xl font-black text-gray-900 mb-2 uppercase">
                                {t.devPopup.successTitle}
                            </h3>
                            <p className="text-gray-600 font-bold">
                                {t.devPopup.successMessage}
                            </p>
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
}
