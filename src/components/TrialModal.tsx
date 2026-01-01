import { useState, useEffect } from 'react';
import { X, ChevronLeft, Check } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';

interface TrialModalProps {
    isOpen: boolean;
    onClose: () => void;
    initialView?: 'choice' | 'trial' | 'buy';
}

export default function TrialModal({ isOpen, onClose, initialView = 'choice' }: TrialModalProps) {
    const { t } = useLanguage();
    const [modalView, setModalView] = useState<'choice' | 'trial' | 'buy'>(initialView);
    const [isYearly, setIsYearly] = useState(false);
    const [isAnimating, setIsAnimating] = useState(false);
    const [shouldRender, setShouldRender] = useState(isOpen);

    // Handle open/close animations
    useEffect(() => {
        if (isOpen) {
            setShouldRender(true);
            setIsAnimating(true);
            setModalView(initialView);
        } else {
            setIsAnimating(false);
            // Delay unmounting to allow closing animation
            const timer = setTimeout(() => {
                setShouldRender(false);
            }, 500); // Match animation duration
            return () => clearTimeout(timer);
        }
    }, [isOpen, initialView]);

    if (!shouldRender) return null;

    return (
        <div
            className={`fixed inset-0 z-[100] flex items-center justify-center p-4 overflow-hidden ${isAnimating ? 'pointer-events-auto' : 'pointer-events-none'}`}
            onClick={onClose}
        >
            {/* Background Overlay */}
            <div
                className={`absolute inset-0 bg-black/60 backdrop-blur-md transition-opacity duration-500 ${isAnimating ? 'opacity-100' : 'opacity-0'}`}
            />

            <div
                className={`bg-white w-full ${modalView === 'buy' ? 'max-w-5xl' : 'max-w-md'} max-h-[90vh] overflow-y-auto rounded-3xl border-4 border-gray-900 shadow-[12px_12px_0px_0px_rgba(0,0,0,1)] relative transition-all duration-500 perspective-1000 z-10 
                ${isAnimating
                        ? 'animate-modal-pop opacity-100'
                        : 'animate-modal-out opacity-0'}`}
                onClick={e => e.stopPropagation()}
            >
                {/* Close Button */}
                <button
                    onClick={onClose}
                    className="absolute top-3 right-3 sm:top-4 sm:right-4 p-1.5 sm:p-2 bg-gray-100/80 hover:bg-gray-200 rounded-full z-10 transition-colors"
                >
                    <X className="w-4 h-4 sm:w-5 sm:h-5 text-gray-900" />
                </button>

                {/* Back Button (if not on choice) */}
                {modalView !== 'choice' && (
                    <button
                        onClick={() => setModalView('choice')}
                        className="absolute top-3 left-3 sm:top-4 sm:left-4 p-1.5 sm:p-2 bg-gray-100/80 hover:bg-gray-200 rounded-full z-10 flex items-center gap-1 text-[10px] sm:text-sm font-bold px-2 sm:px-3 transition-colors text-gray-900"
                    >
                        <ChevronLeft className="w-3 h-3 sm:w-4 sm:h-4 text-gray-900" /> Back
                    </button>
                )}

                <div className="p-6 sm:p-8 md:p-10">
                    {/* CHOICE VIEW */}
                    {modalView === 'choice' && (
                        <div className="text-center pt-8 sm:pt-4">
                            <h2 className="text-3xl font-black text-gray-900 mb-2" style={{ fontFamily: "'Outfit', sans-serif" }}>{t.studyingProcess.modal.readyToStart}</h2>
                            <p className="text-gray-600 mb-10">{t.studyingProcess.modal.choosePath}</p>

                            <div className="space-y-4">
                                <button
                                    onClick={() => setModalView('trial')}
                                    className="w-full bg-blue-500 hover:bg-blue-600 text-white font-black text-xl py-5 rounded-2xl shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] active:translate-y-1 active:shadow-none transition-all flex items-center justify-center gap-2 group uppercase tracking-widest"
                                    style={{ fontFamily: "'Sora', sans-serif" }}
                                >
                                    {t.studyingProcess.modal.startFreeTrial}
                                    <span className="bg-white/20 px-2 py-0.5 rounded text-sm group-hover:bg-white/30" style={{ fontFamily: "'Space Grotesk', sans-serif" }}>{t.studyingProcess.modal.sevenDays}</span>
                                </button>
                                <div className="relative py-2">
                                    <div className="absolute inset-0 flex items-center"><div className="w-full border-t border-gray-300"></div></div>
                                    <div className="relative flex justify-center text-sm"><span className="px-2 bg-white text-gray-500">{t.studyingProcess.modal.or}</span></div>
                                </div>
                                <button
                                    onClick={() => setModalView('buy')}
                                    className="w-full bg-gray-900 hover:bg-gray-800 text-white font-black text-xl py-5 rounded-2xl shadow-[4px_4px_0px_0px_rgba(59,130,246,1)] active:translate-y-1 active:shadow-none transition-all uppercase tracking-widest"
                                    style={{ fontFamily: "'Sora', sans-serif" }}
                                >
                                    {t.studyingProcess.modal.buyNow}
                                </button>
                            </div>
                        </div>
                    )}

                    {/* TRIAL FORM VIEW */}
                    {modalView === 'trial' && (
                        <div className="pt-8 sm:pt-4">
                            <h2 className="text-2xl font-black text-gray-900 mb-6 text-center" style={{ fontFamily: "'Outfit', sans-serif" }}>{t.studyingProcess.modal.trial.title}</h2>
                            <form className="space-y-4" onSubmit={(e) => e.preventDefault()}>
                                <div className="grid grid-cols-2 gap-4">
                                    <div>
                                        <label className="block text-sm font-bold text-gray-700 mb-1">{t.studyingProcess.modal.trial.firstName}</label>
                                        <input type="text" className="w-full bg-gray-50 border-2 border-gray-900 rounded-xl px-4 py-3 shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] focus:border-blue-500 focus:outline-none font-medium transition-all" placeholder="John" />
                                    </div>
                                    <div>
                                        <label className="block text-sm font-bold text-gray-700 mb-1">{t.studyingProcess.modal.trial.lastName}</label>
                                        <input type="text" className="w-full bg-gray-50 border-2 border-gray-900 rounded-xl px-4 py-3 shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] focus:border-blue-500 focus:outline-none font-medium transition-all" placeholder="Doe" />
                                    </div>
                                </div>
                                <div>
                                    <label className="block text-sm font-bold text-gray-700 mb-1">{t.studyingProcess.modal.trial.email}</label>
                                    <input type="email" className="w-full bg-gray-50 border-2 border-gray-900 rounded-xl px-4 py-3 shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] focus:border-blue-500 focus:outline-none font-medium transition-all" placeholder="john@example.com" />
                                </div>
                                <div>
                                    <label className="block text-sm font-bold text-gray-700 mb-1">{t.studyingProcess.modal.trial.phone} <span className="text-gray-400 font-normal">{t.studyingProcess.modal.trial.optional}</span></label>
                                    <input type="tel" className="w-full bg-gray-50 border-2 border-gray-900 rounded-xl px-4 py-3 shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] focus:border-blue-500 focus:outline-none font-medium transition-all" placeholder="+1 (555) 000-0000" />
                                </div>

                                <button className="w-full bg-blue-500 hover:bg-blue-600 text-white font-black text-lg py-4 rounded-xl border-2 border-gray-900 shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] active:translate-y-1 active:shadow-none mt-4 transition-all">
                                    {t.studyingProcess.modal.trial.activate}
                                </button>
                                <p className="text-xs text-center text-gray-500 mt-4">{t.studyingProcess.modal.trial.noCreditCard}</p>
                            </form>
                        </div>
                    )}

                    {/* BUY OPTIONS VIEW */}
                    {modalView === 'buy' && (
                        <div className="pt-10 sm:pt-6">
                            <h2 className="text-2xl sm:text-3xl font-black text-gray-900 mb-6 text-center">{t.studyingProcess.modal.buy.title}</h2>

                            {/* Billing Toggle */}
                            <div className="flex flex-col items-center gap-4 mb-10">
                                <div className="flex items-center justify-center gap-4 bg-gray-100 p-2 rounded-2xl border-2 border-gray-900">
                                    <button
                                        onClick={() => setIsYearly(false)}
                                        className={`px-6 py-2 rounded-xl font-black text-sm transition-all ${!isYearly ? 'bg-white shadow-[4px_4px_0_0_rgba(0,0,0,1)] -translate-x-1 -translate-y-1' : 'text-gray-500 hover:text-gray-900'}`}
                                        style={{ fontFamily: "'Sora', sans-serif" }}
                                    >
                                        {t.pricing.monthly}
                                    </button>
                                    <button
                                        onClick={() => setIsYearly(true)}
                                        className={`px-6 py-2 rounded-xl font-black text-sm transition-all relative ${isYearly ? 'bg-white shadow-[4px_4px_0_0_rgba(0,0,0,1)] -translate-x-1 -translate-y-1' : 'text-gray-500 hover:text-gray-900'}`}
                                        style={{ fontFamily: "'Sora', sans-serif" }}
                                    >
                                        {t.pricing.yearly}
                                        {isYearly && (
                                            <div className="absolute -top-10 -right-4 whitespace-nowrap bg-yellow-400 text-gray-900 px-3 py-1 rounded-lg border-2 border-gray-900 text-[10px] font-black animate-bounce-subtle shadow-[2px_2px_0_0_rgba(0,0,0,1)]">
                                                {t.pricing.save}
                                            </div>
                                        )}
                                    </button>
                                </div>
                            </div>

                            <div className="grid md:grid-cols-2 gap-8">
                                {/* Basic Card */}
                                <div className="bg-[#fd71af] p-8 rounded-3xl border-4 border-gray-900 shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] relative flex flex-col">
                                    <h3 className="text-2xl font-black text-gray-900 mb-2" style={{ fontFamily: "'Outfit', sans-serif" }}>{t.studyingProcess.modal.buy.basic.title}</h3>
                                    <div className="flex items-baseline gap-1 mb-4">
                                        <span className="text-5xl font-black text-gray-900">€{isYearly ? '10' : '12'}</span>
                                        <span className="text-gray-800 font-medium">/month</span>
                                    </div>
                                    <p className="text-gray-900 font-medium mb-6 leading-snug">
                                        {t.studyingProcess.modal.buy.basic.desc}
                                    </p>

                                    <ul className="space-y-3 mb-8 flex-1">
                                        {t.studyingProcess.modal.buy.basic.features.map((feat: string, i: number) => (
                                            <li key={i} className="flex items-start gap-2 text-gray-900 font-medium">
                                                <Check className="w-5 h-5 shrink-0" strokeWidth={3} />
                                                <span className="text-sm">{feat}</span>
                                            </li>
                                        ))}
                                    </ul>

                                    <div className="mb-6">
                                        <p className="text-xs text-gray-800 italic opacity-80 decoration-slice">{t.studyingProcess.modal.buy.basic.notIncluded}</p>
                                    </div>

                                    <button className="w-full bg-gray-900 text-white font-black py-4 rounded-xl hover:bg-gray-800 transition-colors">
                                        {t.studyingProcess.modal.buy.basic.button}
                                    </button>
                                </div>

                                {/* Professional Card */}
                                <div className="bg-[#4ade80] p-8 rounded-3xl border-4 border-gray-900 shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] relative flex flex-col">
                                    <h3 className="text-2xl font-black text-gray-900 mb-2" style={{ fontFamily: "'Outfit', sans-serif" }}>{t.studyingProcess.modal.buy.pro.title}</h3>
                                    <div className="flex items-baseline gap-1 mb-4">
                                        <span className="text-5xl font-black text-gray-900">€{isYearly ? '45' : '56'}</span>
                                        <span className="text-gray-800 font-medium">/month</span>
                                    </div>
                                    <p className="text-gray-900 font-medium mb-6 leading-snug">
                                        {t.studyingProcess.modal.buy.pro.desc}
                                    </p>

                                    <ul className="space-y-3 mb-8 flex-1">
                                        {t.studyingProcess.modal.buy.pro.features.map((feat: string, i: number) => (
                                            <li key={i} className="flex items-start gap-2 text-gray-900 font-medium">
                                                <Check className="w-5 h-5 shrink-0" strokeWidth={3} />
                                                <span className="text-sm">{feat}</span>
                                            </li>
                                        ))}
                                    </ul>

                                    <button className="w-full bg-gray-900 text-white font-black py-4 rounded-xl hover:bg-gray-800 transition-colors">
                                        {t.studyingProcess.modal.buy.pro.button}
                                    </button>
                                </div>
                            </div>
                        </div>
                    )}
                </div>
            </div>
            <style>{`
                @keyframes modal-pop {
                    0% { 
                        opacity: 0; 
                        transform: scale(0.8) rotateX(-20deg) translateY(20px); 
                    }
                    60% { 
                        transform: scale(1.05) rotateX(10deg) translateY(-10px); 
                    }
                    100% { 
                        opacity: 1; 
                        transform: scale(1) rotateX(0deg) translateY(0); 
                    }
                }
                @keyframes modal-out {
                    0% { 
                        opacity: 1; 
                        transform: scale(1) rotateX(0deg) translateY(0); 
                    }
                    100% { 
                        opacity: 0; 
                        transform: scale(0.9) rotateX(10deg) translateY(20px); 
                    }
                }
                .animate-modal-pop {
                    animation: modal-pop 0.5s cubic-bezier(0.34, 1.56, 0.64, 1) forwards;
                    perspective: 1000px;
                    transform-origin: center center;
                }
                .animate-modal-out {
                    animation: modal-out 0.4s ease-in forwards;
                    perspective: 1000px;
                    transform-origin: center center;
                }
            `}</style>
        </div>
    );
}
