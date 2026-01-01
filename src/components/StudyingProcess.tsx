import { useState, useEffect } from 'react';
import { Sparkles, Gamepad2, Users, Trophy, Rocket, ArrowDown, Zap } from 'lucide-react';
import TrialModal from './TrialModal';
import { useLanguage } from '../contexts/LanguageContext';
import { getTranslation } from '../utils/translations';

export default function StudyingProcess() {
    const { language } = useLanguage();
    const t = getTranslation(language);
    const [activeStep, setActiveStep] = useState(0);
    const [showModal, setShowModal] = useState(false);
    const [modalView, setModalView] = useState<'choice' | 'trial' | 'buy'>('choice');

    const steps = [
        {
            id: 1,
            title: t.studyingProcess.steps.step1.title,
            description: t.studyingProcess.steps.step1.description,
            icon: Sparkles,
            color: "bg-yellow-400",
            borderColor: "border-yellow-700",
            accent: "text-yellow-900",
            interactiveText: t.studyingProcess.steps.step1.action
        },
        {
            id: 2,
            title: t.studyingProcess.steps.step2.title,
            description: t.studyingProcess.steps.step2.description,
            icon: Gamepad2,
            color: "bg-blue-400",
            borderColor: "border-blue-700",
            accent: "text-blue-900",
            interactiveText: t.studyingProcess.steps.step2.action
        },
        {
            id: 3,
            title: t.studyingProcess.steps.step3.title,
            description: t.studyingProcess.steps.step3.description,
            icon: Users,
            color: "bg-pink-400",
            borderColor: "border-pink-700",
            accent: "text-pink-900",
            interactiveText: t.studyingProcess.steps.step3.action
        },
        {
            id: 4,
            title: t.studyingProcess.steps.step4.title,
            description: t.studyingProcess.steps.step4.description,
            icon: Zap,
            color: "bg-purple-400",
            borderColor: "border-purple-700",
            accent: "text-purple-900",
            interactiveText: t.studyingProcess.steps.step4.action
        },
        {
            id: 5,
            title: t.studyingProcess.steps.step5.title,
            description: t.studyingProcess.steps.step5.description,
            icon: Trophy,
            color: "bg-emerald-400",
            borderColor: "border-emerald-700",
            accent: "text-emerald-900",
            interactiveText: t.studyingProcess.steps.step5.action
        }
    ];

    const handleNext = (index: number) => {
        if (activeStep === index) {
            setActiveStep(index + 1);
        }
    };

    useEffect(() => {
        if (activeStep > 0 && activeStep <= steps.length) {
            setTimeout(() => {
                const nextCard = document.getElementById(`step-card-${activeStep}`);
                if (nextCard) {
                    nextCard.scrollIntoView({ behavior: 'smooth', block: 'center' });
                } else if (activeStep === steps.length) {
                    const final = document.getElementById('final-success');
                    if (final) final.scrollIntoView({ behavior: 'smooth', block: 'center' });
                }
            }, 300);
        }
    }, [activeStep]);

    return (
        <div className="min-h-screen bg-[#f0f9ff] pt-24 pb-20 overflow-hidden relative selection:bg-purple-200">
            <style>{`
          @keyframes float {
            0%, 100% { transform: translateY(0px) rotate(0deg); }
            50% { transform: translateY(-20px) rotate(2deg); }
          }
          .animate-float-slow { animation: float 6s ease-in-out infinite; }
          .animate-float-delayed { animation: float 7s ease-in-out infinite 1s; }
        `}</style>

            {/* 3D Decorative Background Objects */}
            <div className="absolute top-20 left-10 w-32 h-32 bg-yellow-300 rounded-full blur-3xl opacity-50 animate-pulse"></div>
            <div className="absolute bottom-40 right-10 w-40 h-40 bg-purple-300 rounded-full blur-3xl opacity-50 animate-pulse"></div>

            {/* Floating Shapes */}
            <div className="absolute top-40 right-[10%] w-16 h-16 bg-blue-400 border-4 border-gray-900 rotate-12 shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] animate-float-slow hidden md:block z-0"></div>
            <div className="absolute bottom-60 left-[10%] w-12 h-12 bg-pink-400 border-4 border-gray-900 -rotate-12 shadow-[6px_6px_0px_0px_rgba(0,0,0,1)] rounded-full animate-float-delayed hidden md:block z-0"></div>

            <div className="container mx-auto px-4 relative z-10">
                {/* Header */}
                <div className="text-center mb-24 relative">
                    <div className="inline-block mb-4 px-6 py-2 bg-white border-2 border-gray-900 rounded-full shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] font-black text-sm tracking-wider uppercase animate-bounce-subtle" style={{ fontFamily: "'Space Grotesk', sans-serif" }}>
                        {t.studyingProcess.howItWorks}
                    </div>
                    <h1 className="text-5xl md:text-8xl font-black text-gray-900 mb-8 leading-tight tracking-tight uppercase">
                        {t.studyingProcess.learningRoadmap.split(' ').slice(0, 2).join(' ')} <br />
                        <span className="text-blue-600 relative inline-block">
                            {t.studyingProcess.learningRoadmap.split(' ').slice(2).join(' ')}
                            <svg className="absolute w-full h-4 -bottom-2 left-0 text-yellow-400" viewBox="0 0 100 10" preserveAspectRatio="none">
                                <path d="M0 5 Q 50 10 100 5" stroke="currentColor" strokeWidth="8" fill="none" />
                            </svg>
                        </span>
                    </h1>
                    <p className="text-xl md:text-2xl text-gray-700 max-w-2xl mx-auto font-medium leading-relaxed">
                        {t.studyingProcess.interactiveJourney}
                    </p>
                </div>

                {/* Road Map */}
                <div className="max-w-5xl mx-auto relative">
                    {/* Vertical Connector Line */}
                    <div className="absolute left-1/2 top-0 bottom-32 w-4 bg-gray-200 -translate-x-1/2 rounded-full hidden md:block shadow-inner" />

                    {/* Progress Line - Fills as you go */}
                    <div
                        className="absolute left-1/2 top-0 w-4 bg-blue-500 -translate-x-1/2 rounded-full hidden md:block transition-all duration-1000 ease-in-out shadow-[0_0_15px_rgba(59,130,246,0.5)]"
                        style={{ height: `${(activeStep / steps.length) * 100}%`, maxHeight: 'calc(100% - 8rem)' }}
                    />

                    {/* Steps */}
                    <div className="space-y-32">
                        {steps.map((step, index) => {
                            const isActive = activeStep >= index; // Step is revealed
                            const isNext = activeStep === index; // Step is currently waiting to be clicked
                            const isCompleted = activeStep > index; // Step is done
                            const isLeft = index % 2 === 0;

                            return (
                                <div key={index} id={`step-card-${index}`} className={`relative flex flex-col md:flex-row items-center ${isLeft ? 'md:flex-row' : 'md:flex-row-reverse'} gap-8 md:gap-24 perspective-1000`}>

                                    {/* Center Marker */}
                                    <div className={`absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 z-20 hidden md:flex
                                w-20 h-20 rounded-full border-[6px] border-white items-center justify-center transition-all duration-500
                                ${isActive ? `${step.color} shadow-[0_0_0_6px_rgba(255,255,255,1),0_10px_20px_rgba(0,0,0,0.2)] scale-110 rotate-12` : 'bg-gray-200'}
                            `}>
                                        {isCompleted ? (
                                            <div className="bg-white rounded-full p-2">
                                                <Zap className="w-8 h-8 text-black fill-current" />
                                            </div>
                                        ) : (
                                            <div className="font-black text-white text-3xl" style={{ fontFamily: "'Outfit', sans-serif" }}>{index + 1}</div>
                                        )}
                                    </div>

                                    {/* Card Content Wrapper */}
                                    <div className={`flex-1 w-full md:w-1/2 transition-all duration-1000 transform 
                                ${isActive ? 'opacity-100 translate-y-0 rotate-x-0' : 'opacity-40 translate-y-32 blur-sm scale-90 grayscale'}
                            `}>
                                        <div
                                            className={`relative bg-white border-4 border-gray-900 rounded-[2rem] p-10 transition-all duration-300 group
                                        ${isActive ? `shadow-[16px_16px_0px_0px_rgba(0,0,0,1)] ${step.borderColor}` : 'shadow-none border-gray-300'}
                                        ${isNext ? 'cursor-pointer hover:-translate-y-2 hover:shadow-[20px_20px_0px_0px_rgba(0,0,0,1)]' : ''}
                                    `}
                                            onClick={() => isNext && handleNext(index)}
                                        >
                                            {/* Locked Overlay */}
                                            {!isActive && (
                                                <div className="absolute inset-0 bg-gray-100/50 backdrop-blur-[2px] z-10 rounded-[2rem] flex items-center justify-center">
                                                    <div className="bg-gray-200 px-6 py-2 rounded-full font-black text-gray-400 uppercase tracking-widest text-xs" style={{ fontFamily: "'Space Grotesk', sans-serif" }}>Locked</div>
                                                </div>
                                            )}

                                            {/* 3D Icon */}
                                            <div className={`absolute -top-12 ${isLeft ? '-left-6 md:-right-10' : '-left-6 md:-left-10'} w-24 h-24 ${step.color} border-4 border-gray-900 rounded-2xl flex items-center justify-center shadow-[6px_6px_0px_0px_rgba(0,0,0,0.3)] transform -rotate-6 transition-all duration-500 group-hover:rotate-6 group-hover:scale-110 z-20`}>
                                                <step.icon className="w-12 h-12 text-white" strokeWidth={2.5} />
                                            </div>

                                            <div className="mt-8">
                                                <h3 className={`text-3xl md:text-4xl font-black mb-6 ${step.accent} tracking-tight`}>{step.title}</h3>
                                                <p className="text-xl text-gray-700 leading-relaxed font-medium">
                                                    {step.description}
                                                </p>
                                            </div>

                                            {/* Click to Reveal Button area */}
                                            <div className={`mt-8 overflow-hidden transition-all duration-500 ${isNext ? 'max-h-20 opacity-100' : 'max-h-0 opacity-0'}`}>
                                                <button className={`w-full ${step.color} py-4 rounded-xl font-black text-white text-lg border-2 border-gray-900 shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] flex items-center justify-center gap-3 animate-pulse uppercase tracking-widest`} style={{ fontFamily: "'Sora', sans-serif" }}>
                                                    {step.interactiveText} <ArrowDown className="w-6 h-6 animate-bounce" />
                                                </button>
                                            </div>

                                            {/* Done Indicator */}
                                            {isCompleted && (
                                                <div className="absolute bottom-4 right-4 text-green-500 font-bold flex items-center gap-1">
                                                    {t.studyingProcess.completed} <div className="w-2 h-2 bg-green-500 rounded-full animate-ping" />
                                                </div>
                                            )}
                                        </div>
                                    </div>

                                    {/* Spacer */}
                                    <div className="flex-1 hidden md:block" />
                                </div>
                            );
                        })}

                        {/* Final Success State */}
                        {activeStep === steps.length && (
                            <div id="final-success" className="py-20 animate-in zoom-in slide-in-from-bottom-20 duration-1000 fill-mode-forwards relative z-30">
                                <div className="text-center mb-12">
                                    <div className="inline-block relative group cursor-pointer">
                                        <div className="absolute inset-0 bg-yellow-400 rounded-full animate-ping opacity-20" />
                                        <div className="bg-white p-12 rounded-full border-4 border-gray-900 shadow-[12px_12px_0px_0px_#FCD34D] relative z-10 group-hover:scale-110 transition-transform duration-300">
                                            <Rocket className="w-32 h-32 text-gray-900" />
                                        </div>
                                        <div className="absolute top-0 right-0 w-12 h-12 bg-blue-500 rounded-full border-4 border-white animate-bounce-subtle items-center justify-center flex font-bold text-white">!</div>
                                    </div>
                                </div>

                                <div className="flex flex-col md:flex-row items-center justify-center gap-8 md:gap-12 max-w-5xl mx-auto mb-12 px-4">
                                    <h2 className="text-4xl md:text-6xl font-black text-gray-900 flex-1 text-center md:text-right leading-tight">
                                        {t.studyingProcess.journeyUnlocked.split(' ')[0]}<br />{t.studyingProcess.journeyUnlocked.split(' ').slice(1).join(' ')}
                                    </h2>

                                    <div className="hidden md:block w-1.5 h-24 bg-gray-200 rounded-full" />

                                    <p className="text-xl md:text-2xl text-gray-600 flex-1 text-center md:text-left font-medium max-w-md">
                                        {t.studyingProcess.experienceReal}
                                    </p>
                                </div>

                                <div className="text-center">
                                    <button
                                        onClick={() => { setShowModal(true); setModalView('choice'); }}
                                        className="bg-gray-900 text-white text-2xl font-black px-12 py-6 rounded-2xl hover:bg-gray-800 hover:scale-[1.02] hover:shadow-2xl transition-all shadow-[8px_8px_0px_0px_#3B82F6] active:translate-y-1 active:shadow-[4px_4px_0px_0px_#3B82F6] uppercase tracking-widest"
                                        style={{ fontFamily: "'Sora', sans-serif" }}
                                    >
                                        {t.studyingProcess.startFirstClass}
                                    </button>
                                </div>
                            </div>
                        )}
                    </div>
                </div>

                <div className="h-40" /> {/* Bottom spacer */}
            </div>

            {/* Trial Modal Component */}
            <TrialModal
                isOpen={showModal}
                onClose={() => setShowModal(false)}
                initialView={modalView}
            />
        </div>
    );
}
