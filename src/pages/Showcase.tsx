import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Sparkles, Zap, Trophy, Star, Award, ShoppingBag, Target, Rocket, ArrowRight, ArrowLeft, Lock, Unlock, Crown, Flame, Gift, Medal, Gem, Palette, Frame, Shirt } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';

export default function Showcase() {
    const navigate = useNavigate();
    const { language } = useLanguage();
    const [currentStep, setCurrentStep] = useState(0);
    const [unlockedSteps, setUnlockedSteps] = useState<number[]>([0]);

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
            next: "Next Step",
            previous: "Previous",
            current: "Current",
            locked: "Locked",
            unlocked: "Unlocked",
            ctaButton: "Begin Your Adventure",
            pointsEarned: "Points Earned",
            badgesUnlocked: "Badges Unlocked",
            shopPreview: "Exclusive Shop",
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
            next: "Kitas Žingsnis",
            previous: "Atgal",
            current: "Dabartinis",
            locked: "Užrakinta",
            unlocked: "Atrakinta",
            ctaButton: "Pradėti Nuotykį",
            pointsEarned: "Uždirbta Taškų",
            badgesUnlocked: "Atrakinti Ženkliukai",
            shopPreview: "Išskirtinė Parduotuvė",
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
            next: "Следующий Шаг",
            previous: "Назад",
            current: "Текущий",
            locked: "Заблокировано",
            unlocked: "Разблокировано",
            ctaButton: "Начать Приключение",
            pointsEarned: "Заработано Очков",
            badgesUnlocked: "Разблокировано Значков",
            shopPreview: "Эксклюзивный Магазин",
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
            position: { top: '10%', left: '15%' },
        },
        {
            id: 2,
            title: t.step2Title,
            description: t.step2Desc,
            icon: Target,
            color: 'from-purple-400 to-pink-400',
            bgColor: 'bg-purple-500',
            position: { top: '30%', left: '70%' },
        },
        {
            id: 3,
            title: t.step3Title,
            description: t.step3Desc,
            icon: Sparkles,
            color: 'from-yellow-400 to-orange-400',
            bgColor: 'bg-yellow-500',
            position: { top: '55%', left: '25%' },
        },
        {
            id: 4,
            title: t.step4Title,
            description: t.step4Desc,
            icon: ShoppingBag,
            color: 'from-green-400 to-emerald-400',
            bgColor: 'bg-green-500',
            position: { top: '75%', left: '65%' },
        },
        {
            id: 5,
            title: t.step5Title,
            description: t.step5Desc,
            icon: Trophy,
            color: 'from-red-400 to-rose-400',
            bgColor: 'bg-red-500',
            position: { top: '95%', left: '40%' },
        },
    ];

    const badges = [
        { id: 1, name: 'First Steps', icon: Rocket, color: 'from-blue-400 to-cyan-400' },
        { id: 2, name: 'Quick Learner', icon: Zap, color: 'from-yellow-400 to-orange-400' },
        { id: 3, name: 'Streak Master', icon: Flame, color: 'from-orange-500 to-red-500' },
        { id: 4, name: 'Perfect Score', icon: Star, color: 'from-green-400 to-emerald-400' },
        { id: 5, name: 'Night Owl', icon: Sparkles, color: 'from-purple-400 to-pink-400' },
        { id: 6, name: 'Champion', icon: Trophy, color: 'from-red-400 to-rose-400' },
    ];

    const shopItems = [
        { id: 1, name: 'Neon Frame', price: 500, icon: Frame, color: 'from-cyan-400 to-blue-400' },
        { id: 2, name: 'Golden Crown', price: 1000, icon: Crown, color: 'from-yellow-400 to-orange-400' },
        { id: 3, name: 'Rainbow Theme', price: 750, icon: Palette, color: 'from-pink-400 to-purple-400' },
        { id: 4, name: 'Fire Effect', price: 1200, icon: Flame, color: 'from-orange-500 to-red-500' },
        { id: 5, name: 'Rare Gem', price: 2000, icon: Gem, color: 'from-purple-500 to-pink-500' },
        { id: 6, name: 'Epic Outfit', price: 1500, icon: Shirt, color: 'from-green-400 to-emerald-400' },
    ];

    const handleNext = () => {
        if (currentStep < steps.length - 1) {
            const nextStep = currentStep + 1;
            setCurrentStep(nextStep);
            if (!unlockedSteps.includes(nextStep)) {
                setUnlockedSteps([...unlockedSteps, nextStep]);
            }
        }
    };

    const handlePrevious = () => {
        if (currentStep > 0) {
            setCurrentStep(currentStep - 1);
        }
    };

    const isStepUnlocked = (index: number) => unlockedSteps.includes(index);

    return (
        <div className="min-h-screen bg-gradient-to-br from-yellow-50 via-orange-50 to-pink-50 pt-24 pb-16 overflow-hidden relative">
            {/* Decorative Background */}
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
                <div className="relative w-full mb-16" style={{ minHeight: '1200px' }}>
                    {/* SVG Path with Arrows */}
                    <svg className="absolute inset-0 w-full h-full pointer-events-none" style={{ zIndex: 1 }}>
                        <defs>
                            <linearGradient id="pathGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                                <stop offset="0%" stopColor="#3b82f6" />
                                <stop offset="25%" stopColor="#a855f7" />
                                <stop offset="50%" stopColor="#eab308" />
                                <stop offset="75%" stopColor="#10b981" />
                                <stop offset="100%" stopColor="#ef4444" />
                            </linearGradient>
                            <marker id="arrowhead" markerWidth="10" markerHeight="10" refX="9" refY="3" orient="auto">
                                <polygon points="0 0, 10 3, 0 6" fill="#000" />
                            </marker>
                        </defs>

                        {/* Main Path */}
                        <path
                            d="M 15% 10% Q 40% 20%, 70% 30% T 25% 55% Q 45% 65%, 65% 75% T 40% 95%"
                            stroke="url(#pathGradient)"
                            strokeWidth="12"
                            fill="none"
                            strokeLinecap="round"
                            style={{ filter: 'drop-shadow(0 0 20px rgba(0,0,0,0.3))' }}
                        />

                        {/* Dotted background path */}
                        <path
                            d="M 15% 10% Q 40% 20%, 70% 30% T 25% 55% Q 45% 65%, 65% 75% T 40% 95%"
                            stroke="#000"
                            strokeWidth="12"
                            fill="none"
                            strokeLinecap="round"
                            strokeDasharray="20,20"
                            opacity="0.2"
                        />

                        {/* Arrow Markers on Path */}
                        {[25, 45, 65, 85].map((percent, i) => (
                            <g key={i}>
                                <circle cx={`${percent}%`} cy={`${30 + i * 15}%`} r="8" fill="#000" />
                                <polygon
                                    points={`${percent + 1},${30 + i * 15 - 1} ${percent + 2},${30 + i * 15} ${percent + 1},${30 + i * 15 + 1}`}
                                    fill="#fff"
                                    transform={`translate(${percent * 10}, ${(30 + i * 15) * 10})`}
                                />
                            </g>
                        ))}
                    </svg>

                    {/* Step Nodes */}
                    {steps.map((step, index) => {
                        const Icon = step.icon;
                        const isUnlocked = isStepUnlocked(index);
                        const isCurrent = currentStep === index;

                        return (
                            <div
                                key={step.id}
                                className="absolute transform -translate-x-1/2 -translate-y-1/2 transition-all duration-500"
                                style={{
                                    top: step.position.top,
                                    left: step.position.left,
                                    zIndex: isCurrent ? 20 : 10,
                                }}
                            >
                                {/* Glow Effect for Current */}
                                {isCurrent && (
                                    <div className="absolute inset-0 -z-10">
                                        <div className={`absolute inset-0 ${step.bgColor} rounded-full blur-3xl opacity-60 animate-pulse`}></div>
                                    </div>
                                )}

                                {/* Step Card */}
                                <div className={`
                                    relative transition-all duration-500
                                    ${isCurrent ? 'scale-110' : 'scale-100'}
                                    ${!isUnlocked ? 'blur-sm opacity-50' : ''}
                                `}>
                                    {/* Lock/Unlock Badge */}
                                    <div className={`
                                        absolute -top-4 -right-4 w-12 h-12 rounded-full border-4 border-black
                                        flex items-center justify-center font-black text-xl z-10
                                        ${isUnlocked ? `bg-gradient-to-br ${step.color}` : 'bg-gray-400'}
                                        shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]
                                        ${isCurrent ? 'animate-bounce' : ''}
                                    `}>
                                        {isUnlocked ? (
                                            <Unlock className="w-6 h-6 text-white" strokeWidth={3} />
                                        ) : (
                                            <Lock className="w-6 h-6 text-white" strokeWidth={3} />
                                        )}
                                    </div>

                                    {/* Main Card */}
                                    <div className={`
                                        w-72 bg-white border-4 border-black rounded-3xl p-6
                                        ${isCurrent ? 'shadow-[16px_16px_0px_0px_rgba(0,0,0,1)]' : 'shadow-[8px_8px_0px_0px_rgba(0,0,0,1)]'}
                                        transition-all duration-300
                                    `}>
                                        {/* Step Number */}
                                        <div className="text-center mb-4">
                                            <span className="text-6xl font-black text-gray-200">{step.id}</span>
                                        </div>

                                        {/* Icon */}
                                        <div className={`
                                            w-24 h-24 rounded-2xl flex items-center justify-center mb-4 mx-auto
                                            bg-gradient-to-br ${step.color} border-4 border-black
                                            shadow-[6px_6px_0px_0px_rgba(0,0,0,1)]
                                        `}>
                                            <Icon className="w-12 h-12 text-white" strokeWidth={3} />
                                        </div>

                                        {/* Title */}
                                        <h3 className="font-black text-2xl mb-3 text-center leading-tight">
                                            {step.title}
                                        </h3>

                                        {/* Description */}
                                        <p className="text-gray-700 text-sm font-bold text-center leading-relaxed mb-4">
                                            {step.description}
                                        </p>

                                        {/* Status Badge */}
                                        <div className={`
                                            text-center py-2 px-4 rounded-xl border-2 border-black font-black text-xs uppercase tracking-wider
                                            ${isCurrent ? 'bg-gradient-to-r from-green-400 to-emerald-400' : isUnlocked ? 'bg-blue-100' : 'bg-gray-200'}
                                        `}>
                                            {isCurrent ? t.current : isUnlocked ? t.unlocked : t.locked}
                                        </div>
                                    </div>
                                </div>
                            </div>
                        );
                    })}
                </div>

                {/* Navigation Buttons */}
                <div className="flex items-center justify-center gap-6 mb-16">
                    <button
                        onClick={handlePrevious}
                        disabled={currentStep === 0}
                        className={`
                            group px-8 py-4 bg-white border-4 border-black rounded-2xl font-black text-xl
                            shadow-[8px_8px_0px_0px_rgba(0,0,0,1)]
                            transition-all duration-200
                            ${currentStep === 0 ? 'opacity-50 cursor-not-allowed' : 'hover:shadow-[12px_12px_0px_0px_rgba(0,0,0,1)] hover:translate-x-[-4px] hover:translate-y-[-4px]] active:shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] active:translate-x-[4px] active:translate-y-[4px]'}
                        `}
                    >
                        <span className="flex items-center gap-3">
                            <ArrowLeft className="w-6 h-6" strokeWidth={3} />
                            {t.previous}
                        </span>
                    </button>

                    <div className="text-center">
                        <div className="text-sm font-bold text-gray-600 uppercase tracking-wider mb-1">Step</div>
                        <div className="text-4xl font-black">{currentStep + 1} / {steps.length}</div>
                    </div>

                    <button
                        onClick={handleNext}
                        disabled={currentStep === steps.length - 1}
                        className={`
                            group px-8 py-4 bg-gradient-to-r from-purple-500 to-pink-500 text-white border-4 border-black rounded-2xl font-black text-xl
                            shadow-[8px_8px_0px_0px_rgba(0,0,0,1)]
                            transition-all duration-200
                            ${currentStep === steps.length - 1 ? 'opacity-50 cursor-not-allowed' : 'hover:shadow-[12px_12px_0px_0px_rgba(0,0,0,1)] hover:translate-x-[-4px] hover:translate-y-[-4px]] active:shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] active:translate-x-[4px] active:translate-y-[4px]'}
                        `}
                    >
                        <span className="flex items-center gap-3">
                            {t.next}
                            <ArrowRight className="w-6 h-6" strokeWidth={3} />
                        </span>
                    </button>
                </div>

                {/* Rewards Showcase */}
                <div className="grid md:grid-cols-3 gap-8 mb-16">
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
                            {badges.map((badge) => {
                                const BadgeIcon = badge.icon;
                                return (
                                    <div key={badge.id} className={`aspect-square bg-gradient-to-br ${badge.color} border-4 border-black rounded-2xl flex items-center justify-center shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] hover:scale-110 transition-transform cursor-pointer group relative`}>
                                        <BadgeIcon className="w-8 h-8 text-white" strokeWidth={3} />
                                        <div className="absolute -bottom-12 left-1/2 transform -translate-x-1/2 bg-black text-white px-3 py-1 rounded-lg text-xs font-bold whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity z-20">
                                            {badge.name}
                                        </div>
                                    </div>
                                );
                            })}
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
                        <div className="grid grid-cols-2 gap-3">
                            {shopItems.slice(0, 4).map((item) => {
                                const ItemIcon = item.icon;
                                return (
                                    <div key={item.id} className={`aspect-square bg-gradient-to-br ${item.color} border-4 border-black rounded-2xl p-3 flex flex-col items-center justify-center shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] hover:scale-105 transition-all cursor-pointer`}>
                                        <ItemIcon className="w-8 h-8 text-white mb-2" strokeWidth={3} />
                                        <div className="flex items-center gap-1 bg-black text-white px-2 py-1 rounded-lg">
                                            <Zap className="w-3 h-3" />
                                            <span className="text-xs font-black">{item.price}</span>
                                        </div>
                                    </div>
                                );
                            })}
                        </div>
                    </div>
                </div>

                {/* Epic CTA */}
                <div className="relative z-10">
                    <div className="bg-gradient-to-r from-purple-600 via-pink-600 to-blue-600 border-4 border-black rounded-3xl p-16 text-center shadow-[16px_16px_0px_0px_rgba(0,0,0,1)] relative overflow-hidden">
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
