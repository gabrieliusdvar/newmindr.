import { useState, useEffect, useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import { Sparkles, Zap, Trophy, Star, Award, ShoppingBag, Target, Rocket, CheckCircle2, ArrowRight, Gift, Crown, Flame } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';

export default function Showcase() {
    const navigate = useNavigate();
    const { language } = useLanguage();
    const [activeStep, setActiveStep] = useState(0);
    const [scrollProgress, setScrollProgress] = useState(0);
    const pathRef = useRef<SVGPathElement>(null);

    const txt = {
        en: {
            title: "Your Epic Journey",
            subtitle: "From Zero to Hero",
            step1Title: "🚀 Start Free Trial",
            step1Desc: "Jump in! No credit card. 7 days of pure learning magic.",
            step2Title: "🎯 Explore & Discover",
            step2Desc: "Interactive lessons that feel like games. You'll forget you're learning!",
            step3Title: "✨ Get Immersed",
            step3Desc: "Real-time feedback, adaptive challenges, instant gratification.",
            step4Title: "🎨 Earn & Customize",
            step4Desc: "Unlock exclusive items, build your dream profile, flex your style!",
            step5Title: "🏆 Collect Achievements",
            step5Desc: "Badges, certificates, bragging rights. Show the world what you've mastered!",
            ctaButton: "Begin Your Adventure",
            pointsEarned: "Points Earned",
            badgesUnlocked: "Badges Unlocked",
            shopPreview: "Exclusive Shop",
            achievements: "Your Achievements",
        },
        lt: {
            title: "Jūsų Epinė Kelionė",
            subtitle: "Nuo Nulio iki Didvyrio",
            step1Title: "🚀 Pradėti Bandymą",
            step1Desc: "Šokite! Nereikia kredito kortelės. 7 dienos mokymosi magijos.",
            step2Title: "🎯 Tyrinėti ir Atrasti",
            step2Desc: "Interaktyvios pamokos, kurios jaučiasi kaip žaidimai!",
            step3Title: "✨ Pasinerkite",
            step3Desc: "Grįžtamasis ryšys realiuoju laiku, prisitaikantys iššūkiai.",
            step4Title: "🎨 Uždirbti ir Pritaikyti",
            step4Desc: "Atrakinkite išskirtinius daiktus, sukurkite svajonių profilį!",
            step5Title: "🏆 Rinkti Pasiekimus",
            step5Desc: "Ženkliukai, sertifikatai, pasigyrimai. Parodykite pasauliui!",
            ctaButton: "Pradėti Nuotykį",
            pointsEarned: "Uždirbta Taškų",
            badgesUnlocked: "Atrakinti Ženkliukai",
            shopPreview: "Išskirtinė Parduotuvė",
            achievements: "Jūsų Pasiekimai",
        },
        ru: {
            title: "Ваше Эпическое Путешествие",
            subtitle: "От Нуля до Героя",
            step1Title: "🚀 Начать Пробный",
            step1Desc: "Прыгайте! Без кредитной карты. 7 дней чистой магии обучения.",
            step2Title: "🎯 Исследовать",
            step2Desc: "Интерактивные уроки, которые ощущаются как игры!",
            step3Title: "✨ Погрузиться",
            step3Desc: "Обратная связь в реальном времени, адаптивные вызовы.",
            step4Title: "🎨 Зарабатывать",
            step4Desc: "Разблокируйте эксклюзивные предметы, создайте профиль мечты!",
            step5Title: "🏆 Собирать Достижения",
            step5Desc: "Значки, сертификаты, права хвастовства. Покажите миру!",
            ctaButton: "Начать Приключение",
            pointsEarned: "Заработано Очков",
            badgesUnlocked: "Разблокировано Значков",
            shopPreview: "Эксклюзивный Магазин",
            achievements: "Ваши Достижения",
        }
    };

    const t = txt[language as keyof typeof txt] || txt.en;

    const steps = [
        {
            id: 1,
            title: t.step1Title,
            description: t.step1Desc,
            icon: Rocket,
            color: 'from-blue-400 to-cyan-400',
            bgColor: 'bg-blue-500',
            position: { top: '5%', left: '10%' },
        },
        {
            id: 2,
            title: t.step2Title,
            description: t.step2Desc,
            icon: Target,
            color: 'from-purple-400 to-pink-400',
            bgColor: 'bg-purple-500',
            position: { top: '25%', left: '70%' },
        },
        {
            id: 3,
            title: t.step3Title,
            description: t.step3Desc,
            icon: Sparkles,
            color: 'from-yellow-400 to-orange-400',
            bgColor: 'bg-yellow-500',
            position: { top: '50%', left: '30%' },
        },
        {
            id: 4,
            title: t.step4Title,
            description: t.step4Desc,
            icon: ShoppingBag,
            color: 'from-green-400 to-emerald-400',
            bgColor: 'bg-green-500',
            position: { top: '70%', left: '65%' },
        },
        {
            id: 5,
            title: t.step5Title,
            description: t.step5Desc,
            icon: Trophy,
            color: 'from-red-400 to-rose-400',
            bgColor: 'bg-red-500',
            position: { top: '90%', left: '40%' },
        },
    ];

    useEffect(() => {
        const handleScroll = () => {
            const scrolled = window.scrollY;
            const maxScroll = document.documentElement.scrollHeight - window.innerHeight;
            const progress = Math.min(scrolled / maxScroll, 1);
            setScrollProgress(progress);

            // Update active step based on scroll
            const stepIndex = Math.floor(progress * steps.length);
            setActiveStep(Math.min(stepIndex, steps.length - 1));
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, [steps.length]);

    const pathLength = pathRef.current?.getTotalLength() || 0;

    return (
        <div className="min-h-screen bg-gradient-to-br from-yellow-50 via-orange-50 to-pink-50 pt-24 pb-16 overflow-hidden relative">
            {/* Decorative Background Elements */}
            <div className="absolute inset-0 opacity-20 pointer-events-none">
                <div className="absolute top-20 left-10 w-32 h-32 bg-blue-400 rounded-full blur-3xl animate-pulse"></div>
                <div className="absolute top-40 right-20 w-40 h-40 bg-purple-400 rounded-full blur-3xl animate-pulse delay-75"></div>
                <div className="absolute bottom-20 left-1/4 w-36 h-36 bg-green-400 rounded-full blur-3xl animate-pulse delay-150"></div>
            </div>

            {/* Hero Section */}
            <div className="max-w-7xl mx-auto px-4 mb-16 relative z-10">
                <div className="text-center mb-12">
                    <div className="inline-block mb-6 transform -rotate-2">
                        <div className="px-8 py-3 bg-gradient-to-r from-yellow-400 to-orange-500 text-black font-black text-lg uppercase tracking-wider border-4 border-black shadow-[12px_12px_0px_0px_rgba(0,0,0,1)]">
                            {t.subtitle}
                        </div>
                    </div>
                    <h1 className="text-7xl md:text-9xl font-black mb-6 leading-none tracking-tighter">
                        <span className="bg-gradient-to-r from-purple-600 via-pink-600 to-blue-600 bg-clip-text text-transparent drop-shadow-lg">
                            {t.title}
                        </span>
                    </h1>
                </div>

                {/* Interactive Roadmap */}
                <div className="relative w-full" style={{ minHeight: '1200px' }}>
                    {/* SVG Path */}
                    <svg className="absolute inset-0 w-full h-full pointer-events-none" style={{ zIndex: 1 }}>
                        <defs>
                            <linearGradient id="pathGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                                <stop offset="0%" stopColor="#3b82f6" />
                                <stop offset="25%" stopColor="#a855f7" />
                                <stop offset="50%" stopColor="#eab308" />
                                <stop offset="75%" stopColor="#10b981" />
                                <stop offset="100%" stopColor="#ef4444" />
                            </linearGradient>
                        </defs>
                        <path
                            ref={pathRef}
                            d="M 10% 5% Q 30% 15%, 70% 25% T 30% 50% Q 50% 60%, 65% 70% T 40% 90%"
                            stroke="url(#pathGradient)"
                            strokeWidth="12"
                            fill="none"
                            strokeLinecap="round"
                            strokeDasharray={pathLength}
                            strokeDashoffset={pathLength * (1 - scrollProgress)}
                            className="transition-all duration-300"
                            style={{
                                filter: 'drop-shadow(0 0 20px rgba(0,0,0,0.3))',
                            }}
                        />
                        {/* Dotted background path */}
                        <path
                            d="M 10% 5% Q 30% 15%, 70% 25% T 30% 50% Q 50% 60%, 65% 70% T 40% 90%"
                            stroke="#000"
                            strokeWidth="12"
                            fill="none"
                            strokeLinecap="round"
                            strokeDasharray="20,20"
                            opacity="0.2"
                        />
                    </svg>

                    {/* Step Nodes */}
                    {steps.map((step, index) => {
                        const Icon = step.icon;
                        const isActive = activeStep >= index;
                        const isCurrent = activeStep === index;

                        return (
                            <div
                                key={step.id}
                                className="absolute transform -translate-x-1/2 -translate-y-1/2 transition-all duration-500"
                                style={{
                                    top: step.position.top,
                                    left: step.position.left,
                                    zIndex: isCurrent ? 20 : 10,
                                }}
                                onClick={() => setActiveStep(index)}
                            >
                                {/* Connecting Line Pulse Effect */}
                                {isCurrent && (
                                    <div className="absolute inset-0 -z-10">
                                        <div className={`absolute inset-0 ${step.bgColor} rounded-full blur-2xl opacity-50 animate-pulse`}></div>
                                    </div>
                                )}

                                {/* Step Card */}
                                <div className={`
                                    relative cursor-pointer transition-all duration-500
                                    ${isCurrent ? 'scale-125' : isActive ? 'scale-100' : 'scale-90 opacity-60'}
                                `}>
                                    {/* Step Number Badge */}
                                    <div className={`
                                        absolute -top-4 -right-4 w-12 h-12 rounded-full border-4 border-black
                                        flex items-center justify-center font-black text-xl z-10
                                        bg-gradient-to-br ${step.color}
                                        shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]
                                        ${isCurrent ? 'animate-bounce' : ''}
                                    `}>
                                        {isActive ? <CheckCircle2 className="w-6 h-6 text-white" strokeWidth={3} /> : step.id}
                                    </div>

                                    {/* Main Card */}
                                    <div className={`
                                        w-64 bg-white border-4 border-black rounded-3xl p-6
                                        ${isCurrent ? 'shadow-[16px_16px_0px_0px_rgba(0,0,0,1)]' : 'shadow-[8px_8px_0px_0px_rgba(0,0,0,1)]'}
                                        transition-all duration-300
                                    `}>
                                        {/* Icon */}
                                        <div className={`
                                            w-20 h-20 rounded-2xl flex items-center justify-center mb-4 mx-auto
                                            bg-gradient-to-br ${step.color} border-4 border-black
                                            shadow-[6px_6px_0px_0px_rgba(0,0,0,1)]
                                        `}>
                                            <Icon className="w-10 h-10 text-white" strokeWidth={3} />
                                        </div>

                                        {/* Title */}
                                        <h3 className="font-black text-2xl mb-3 text-center leading-tight">
                                            {step.title}
                                        </h3>

                                        {/* Description */}
                                        <p className="text-gray-700 text-sm font-bold text-center leading-relaxed">
                                            {step.description}
                                        </p>

                                        {/* Progress Indicator */}
                                        {isActive && (
                                            <div className="mt-4 pt-4 border-t-2 border-black">
                                                <div className="flex items-center justify-center gap-2">
                                                    <div className={`w-3 h-3 rounded-full ${step.bgColor} animate-pulse`}></div>
                                                    <span className="text-xs font-black uppercase tracking-wider">
                                                        {isCurrent ? 'Current' : 'Completed'}
                                                    </span>
                                                </div>
                                            </div>
                                        )}
                                    </div>
                                </div>
                            </div>
                        );
                    })}
                </div>

                {/* Rewards Showcase */}
                <div className="grid md:grid-cols-3 gap-8 mt-24 relative z-10">
                    {/* Points Card */}
                    <div className="bg-white border-4 border-black rounded-3xl p-8 shadow-[12px_12px_0px_0px_rgba(0,0,0,1)] transform hover:scale-105 transition-all">
                        <div className="flex items-center gap-4 mb-6">
                            <div className="w-16 h-16 bg-gradient-to-br from-yellow-400 to-orange-500 rounded-2xl flex items-center justify-center border-4 border-black shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]">
                                <Zap className="w-8 h-8 text-white" strokeWidth={3} />
                            </div>
                            <h3 className="font-black text-2xl">{t.pointsEarned}</h3>
                        </div>
                        <div className="text-6xl font-black text-center mb-4 bg-gradient-to-r from-yellow-600 to-orange-600 bg-clip-text text-transparent">
                            2,450
                        </div>
                        <div className="flex gap-2">
                            {[...Array(3)].map((_, i) => (
                                <div key={i} className="flex-1 h-3 bg-gradient-to-r from-yellow-400 to-orange-500 border-2 border-black rounded-full"></div>
                            ))}
                        </div>
                    </div>

                    {/* Badges Card */}
                    <div className="bg-white border-4 border-black rounded-3xl p-8 shadow-[12px_12px_0px_0px_rgba(0,0,0,1)] transform hover:scale-105 transition-all">
                        <div className="flex items-center gap-4 mb-6">
                            <div className="w-16 h-16 bg-gradient-to-br from-purple-500 to-pink-500 rounded-2xl flex items-center justify-center border-4 border-black shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]">
                                <Trophy className="w-8 h-8 text-white" strokeWidth={3} />
                            </div>
                            <h3 className="font-black text-2xl">{t.badgesUnlocked}</h3>
                        </div>
                        <div className="grid grid-cols-3 gap-3">
                            {['🚀', '⚡', '🔥', '💯', '🦉', '🏆'].map((emoji, i) => (
                                <div key={i} className="aspect-square bg-gradient-to-br from-purple-400 to-pink-400 border-4 border-black rounded-2xl flex items-center justify-center text-3xl shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] hover:scale-110 transition-transform cursor-pointer">
                                    {emoji}
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Shop Card */}
                    <div className="bg-white border-4 border-black rounded-3xl p-8 shadow-[12px_12px_0px_0px_rgba(0,0,0,1)] transform hover:scale-105 transition-all">
                        <div className="flex items-center gap-4 mb-6">
                            <div className="w-16 h-16 bg-gradient-to-br from-green-500 to-emerald-500 rounded-2xl flex items-center justify-center border-4 border-black shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]">
                                <ShoppingBag className="w-8 h-8 text-white" strokeWidth={3} />
                            </div>
                            <h3 className="font-black text-2xl">{t.shopPreview}</h3>
                        </div>
                        <div className="space-y-3">
                            {[
                                { icon: '🖼️', name: 'Neon Frame', price: 500 },
                                { icon: '👑', name: 'Golden Crown', price: 1000 },
                                { icon: '🔥', name: 'Fire Effect', price: 1200 },
                            ].map((item, i) => (
                                <div key={i} className="flex items-center justify-between p-3 bg-gradient-to-r from-green-50 to-emerald-50 border-2 border-black rounded-xl hover:shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] transition-all cursor-pointer">
                                    <div className="flex items-center gap-3">
                                        <span className="text-2xl">{item.icon}</span>
                                        <span className="font-bold text-sm">{item.name}</span>
                                    </div>
                                    <div className="flex items-center gap-1 font-black text-sm">
                                        <Zap className="w-4 h-4 text-yellow-500" />
                                        {item.price}
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>

                {/* Epic CTA */}
                <div className="mt-24 relative z-10">
                    <div className="bg-gradient-to-r from-purple-600 via-pink-600 to-blue-600 border-4 border-black rounded-3xl p-16 text-center shadow-[16px_16px_0px_0px_rgba(0,0,0,1)] relative overflow-hidden">
                        {/* Animated Stars */}
                        <div className="absolute inset-0 opacity-20">
                            {[...Array(20)].map((_, i) => (
                                <Star
                                    key={i}
                                    className="absolute text-white animate-pulse"
                                    style={{
                                        top: `${Math.random() * 100}%`,
                                        left: `${Math.random() * 100}%`,
                                        animationDelay: `${Math.random() * 2}s`,
                                    }}
                                />
                            ))}
                        </div>

                        <div className="relative z-10">
                            <h2 className="text-6xl md:text-7xl font-black text-white mb-8 leading-tight drop-shadow-lg">
                                Ready to Start<br />Your Journey?
                            </h2>
                            <button
                                onClick={() => navigate('/pricing')}
                                className="group px-16 py-8 bg-white text-black font-black text-3xl rounded-2xl border-4 border-black shadow-[12px_12px_0px_0px_rgba(0,0,0,1)] hover:shadow-[16px_16px_0px_0px_rgba(0,0,0,1)] hover:translate-x-[-4px] hover:translate-y-[-4px]] transition-all duration-200 active:shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] active:translate-x-[8px] active:translate-y-[8px]"
                            >
                                <span className="flex items-center gap-4">
                                    {t.ctaButton}
                                    <ArrowRight className="w-10 h-10 group-hover:translate-x-2 transition-transform" strokeWidth={3} />
                                </span>
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
