import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { Sparkles, Zap, Trophy, Star, Award, ShoppingBag, Target, Rocket, CheckCircle2, ArrowRight } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';

export default function Showcase() {
    const navigate = useNavigate();
    const { language } = useLanguage();
    const [activeStep, setActiveStep] = useState(0);
    const [hoveredBadge, setHoveredBadge] = useState<number | null>(null);
    const [points, setPoints] = useState(0);
    const [isAnimating, setIsAnimating] = useState(false);

    const txt = {
        en: {
            title: "Your Learning Journey",
            subtitle: "From Trial to Triumph",
            step1Title: "Start Your Free Trial",
            step1Desc: "Sign up in seconds. No credit card required. 7 days of unlimited access to all courses.",
            step2Title: "Explore the Platform",
            step2Desc: "Dive into interactive lessons, quizzes, and challenges designed to make learning addictive.",
            step3Title: "Get Immersed",
            step3Desc: "Experience learning like never before with gamified content, real-time feedback, and adaptive difficulty.",
            step4Title: "Earn Points & Customize",
            step4Desc: "Complete lessons to earn points. Unlock exclusive items to personalize your profile and show off your style.",
            step5Title: "Collect Badges & Certificates",
            step5Desc: "Showcase your achievements with badges and certificates. Build your learning portfolio and inspire others.",
            ctaButton: "Start Your Journey",
            pointsLabel: "Points Earned",
            badgesLabel: "Badges Unlocked",
            profileLabel: "Your Profile",
            shopLabel: "Item Shop",
        },
        lt: {
            title: "Jūsų Mokymosi Kelionė",
            subtitle: "Nuo Bandomojo iki Triumfo",
            step1Title: "Pradėkite Nemokamą Bandymą",
            step1Desc: "Užsiregistruokite per sekundes. Nereikia kredito kortelės. 7 dienos neriboto priėjimo prie visų kursų.",
            step2Title: "Tyrinėkite Platformą",
            step2Desc: "Pasinerkite į interaktyvias pamokas, testus ir iššūkius, sukurtus padaryti mokymąsi įtraukiantį.",
            step3Title: "Pasinerkite",
            step3Desc: "Patirkite mokymąsi kaip niekada anksčiau su žaidybiniu turiniu, realiuoju laiku grįžtamuoju ryšiu ir prisitaikančiu sudėtingumu.",
            step4Title: "Uždirbkite Taškų ir Pritaikykite",
            step4Desc: "Užbaikite pamokas ir uždirbkite taškų. Atrakinkite išskirtinius daiktus, kad personalizuotumėte savo profilį.",
            step5Title: "Rinkite Ženkliukus ir Sertifikatus",
            step5Desc: "Parodykite savo pasiekimus su ženkliukais ir sertifikatais. Sukurkite savo mokymosi portfelį.",
            ctaButton: "Pradėti Kelionę",
            pointsLabel: "Uždirbta Taškų",
            badgesLabel: "Atrakinti Ženkliukai",
            profileLabel: "Jūsų Profilis",
            shopLabel: "Daiktų Parduotuvė",
        },
        ru: {
            title: "Ваше Путешествие в Обучении",
            subtitle: "От Пробного до Триумфа",
            step1Title: "Начните Бесплатный Пробный Период",
            step1Desc: "Зарегистрируйтесь за секунды. Кредитная карта не требуется. 7 дней неограниченного доступа ко всем курсам.",
            step2Title: "Исследуйте Платформу",
            step2Desc: "Погрузитесь в интерактивные уроки, тесты и задачи, созданные, чтобы сделать обучение захватывающим.",
            step3Title: "Погрузитесь",
            step3Desc: "Испытайте обучение как никогда раньше с геймифицированным контентом, обратной связью в реальном времени.",
            step4Title: "Зарабатывайте Очки и Настраивайте",
            step4Desc: "Завершайте уроки, чтобы заработать очки. Разблокируйте эксклюзивные предметы для персонализации профиля.",
            step5Title: "Собирайте Значки и Сертификаты",
            step5Desc: "Покажите свои достижения со значками и сертификатами. Создайте свое портфолио обучения.",
            ctaButton: "Начать Путешествие",
            pointsLabel: "Заработано Очков",
            badgesLabel: "Разблокировано Значков",
            profileLabel: "Ваш Профиль",
            shopLabel: "Магазин Предметов",
        }
    };

    const t = txt[language as keyof typeof txt] || txt.en;

    const steps = [
        {
            number: 1,
            title: t.step1Title,
            description: t.step1Desc,
            icon: Rocket,
            color: 'from-blue-500 to-cyan-500',
            borderColor: 'border-blue-500',
            bgColor: 'bg-blue-50',
        },
        {
            number: 2,
            title: t.step2Title,
            description: t.step2Desc,
            icon: Target,
            color: 'from-purple-500 to-pink-500',
            borderColor: 'border-purple-500',
            bgColor: 'bg-purple-50',
        },
        {
            number: 3,
            title: t.step3Title,
            description: t.step3Desc,
            icon: Sparkles,
            color: 'from-yellow-500 to-orange-500',
            borderColor: 'border-yellow-500',
            bgColor: 'bg-yellow-50',
        },
        {
            number: 4,
            title: t.step4Title,
            description: t.step4Desc,
            icon: ShoppingBag,
            color: 'from-green-500 to-emerald-500',
            borderColor: 'border-green-500',
            bgColor: 'bg-green-50',
        },
        {
            number: 5,
            title: t.step5Title,
            description: t.step5Desc,
            icon: Trophy,
            color: 'from-red-500 to-rose-500',
            borderColor: 'border-red-500',
            bgColor: 'bg-red-50',
        },
    ];

    const badges = [
        { id: 1, name: 'First Steps', icon: '🚀', color: 'bg-blue-500' },
        { id: 2, name: 'Quick Learner', icon: '⚡', color: 'bg-yellow-500' },
        { id: 3, name: 'Streak Master', icon: '🔥', color: 'bg-orange-500' },
        { id: 4, name: 'Perfect Score', icon: '💯', color: 'bg-green-500' },
        { id: 5, name: 'Night Owl', icon: '🦉', color: 'bg-purple-500' },
        { id: 6, name: 'Champion', icon: '🏆', color: 'bg-red-500' },
    ];

    const shopItems = [
        { id: 1, name: 'Neon Frame', price: 500, icon: '🖼️', color: 'bg-cyan-500' },
        { id: 2, name: 'Golden Crown', price: 1000, icon: '👑', color: 'bg-yellow-500' },
        { id: 3, name: 'Rainbow BG', price: 750, icon: '🌈', color: 'bg-pink-500' },
        { id: 4, name: 'Fire Effect', price: 1200, icon: '🔥', color: 'bg-orange-500' },
    ];

    useEffect(() => {
        const interval = setInterval(() => {
            setActiveStep((prev) => (prev + 1) % steps.length);
        }, 4000);
        return () => clearInterval(interval);
    }, [steps.length]);

    const handleEarnPoints = () => {
        setIsAnimating(true);
        setPoints((prev) => prev + 100);
        setTimeout(() => setIsAnimating(false), 600);
    };

    return (
        <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100 pt-24 pb-16">
            {/* Hero Section */}
            <div className="max-w-7xl mx-auto px-4 mb-16">
                <div className="text-center mb-12">
                    <div className="inline-block mb-4">
                        <div className="px-6 py-2 bg-gradient-to-r from-purple-600 to-pink-600 text-white font-black text-sm uppercase tracking-wider border-4 border-black shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] transform -rotate-2">
                            {t.subtitle}
                        </div>
                    </div>
                    <h1 className="text-6xl md:text-8xl font-black mb-6 leading-none">
                        <span className="bg-gradient-to-r from-purple-600 via-pink-600 to-blue-600 bg-clip-text text-transparent">
                            {t.title}
                        </span>
                    </h1>
                </div>

                {/* Interactive Steps */}
                <div className="grid md:grid-cols-5 gap-6 mb-16">
                    {steps.map((step, index) => {
                        const Icon = step.icon;
                        const isActive = activeStep === index;

                        return (
                            <div
                                key={step.number}
                                onClick={() => setActiveStep(index)}
                                className={`
                                    relative cursor-pointer transition-all duration-500 transform
                                    ${isActive ? 'scale-105 -translate-y-2' : 'hover:scale-102 hover:-translate-y-1'}
                                `}
                            >
                                <div className={`
                                    bg-white border-4 border-black rounded-3xl p-6 h-full
                                    ${isActive ? 'shadow-[12px_12px_0px_0px_rgba(0,0,0,1)]' : 'shadow-[6px_6px_0px_0px_rgba(0,0,0,1)]'}
                                    transition-all duration-300
                                `}>
                                    {/* Step Number */}
                                    <div className={`
                                        w-16 h-16 rounded-2xl flex items-center justify-center mb-4
                                        bg-gradient-to-br ${step.color} border-4 border-black
                                        shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]
                                    `}>
                                        <span className="text-white font-black text-2xl">{step.number}</span>
                                    </div>

                                    {/* Icon */}
                                    <div className="mb-4">
                                        <Icon className="w-12 h-12 text-black" strokeWidth={3} />
                                    </div>

                                    {/* Title */}
                                    <h3 className="font-black text-xl mb-2 leading-tight">{step.title}</h3>

                                    {/* Description - Only show on active */}
                                    <div className={`
                                        overflow-hidden transition-all duration-500
                                        ${isActive ? 'max-h-48 opacity-100' : 'max-h-0 opacity-0'}
                                    `}>
                                        <p className="text-gray-700 text-sm leading-relaxed mt-2">
                                            {step.description}
                                        </p>
                                    </div>

                                    {/* Active Indicator */}
                                    {isActive && (
                                        <div className="absolute -top-2 -right-2">
                                            <div className="w-6 h-6 bg-green-500 border-2 border-black rounded-full flex items-center justify-center animate-pulse">
                                                <CheckCircle2 className="w-4 h-4 text-white" strokeWidth={3} />
                                            </div>
                                        </div>
                                    )}
                                </div>
                            </div>
                        );
                    })}
                </div>

                {/* Interactive Demo Section */}
                <div className="grid md:grid-cols-2 gap-8 mb-16">
                    {/* Points & Gamification */}
                    <div className="bg-white border-4 border-black rounded-3xl p-8 shadow-[12px_12px_0px_0px_rgba(0,0,0,1)]">
                        <div className="flex items-center gap-4 mb-6">
                            <div className="w-16 h-16 bg-gradient-to-br from-yellow-400 to-orange-500 rounded-2xl flex items-center justify-center border-4 border-black shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]">
                                <Zap className="w-8 h-8 text-white" strokeWidth={3} />
                            </div>
                            <div>
                                <h3 className="font-black text-2xl">{t.pointsLabel}</h3>
                                <p className="text-gray-600 font-bold">{t.step4Title}</p>
                            </div>
                        </div>

                        {/* Points Display */}
                        <div className="bg-gradient-to-br from-yellow-50 to-orange-50 border-4 border-black rounded-2xl p-6 mb-6">
                            <div className="text-center">
                                <div className={`
                                    text-6xl font-black mb-2 transition-all duration-300
                                    ${isAnimating ? 'scale-125 text-green-500' : 'text-gray-900'}
                                `}>
                                    {points}
                                </div>
                                <div className="text-sm font-bold text-gray-600 uppercase tracking-wider">Points</div>
                            </div>
                        </div>

                        {/* Earn Points Button */}
                        <button
                            onClick={handleEarnPoints}
                            className="w-full px-6 py-4 bg-gradient-to-r from-green-500 to-emerald-500 text-white font-black text-lg rounded-2xl border-4 border-black shadow-[6px_6px_0px_0px_rgba(0,0,0,1)] hover:shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] hover:translate-x-[-2px] hover:translate-y-[-2px]] transition-all duration-200 active:shadow-[2px_2px_0px_0px_rgba(0,0,0,1)] active:translate-x-[4px] active:translate-y-[4px]"
                        >
                            <span className="flex items-center justify-center gap-2">
                                Complete Lesson +100 <Star className="w-5 h-5" />
                            </span>
                        </button>

                        {/* Shop Items Preview */}
                        <div className="mt-6">
                            <h4 className="font-black text-lg mb-4">{t.shopLabel}</h4>
                            <div className="grid grid-cols-2 gap-3">
                                {shopItems.map((item) => (
                                    <div
                                        key={item.id}
                                        className="bg-white border-2 border-black rounded-xl p-3 hover:shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] transition-all cursor-pointer"
                                    >
                                        <div className="text-3xl mb-1">{item.icon}</div>
                                        <div className="font-bold text-xs mb-1">{item.name}</div>
                                        <div className="flex items-center gap-1">
                                            <Zap className="w-3 h-3 text-yellow-500" />
                                            <span className="text-xs font-black">{item.price}</span>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>

                    {/* Badges & Achievements */}
                    <div className="bg-white border-4 border-black rounded-3xl p-8 shadow-[12px_12px_0px_0px_rgba(0,0,0,1)]">
                        <div className="flex items-center gap-4 mb-6">
                            <div className="w-16 h-16 bg-gradient-to-br from-purple-500 to-pink-500 rounded-2xl flex items-center justify-center border-4 border-black shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]">
                                <Trophy className="w-8 h-8 text-white" strokeWidth={3} />
                            </div>
                            <div>
                                <h3 className="font-black text-2xl">{t.badgesLabel}</h3>
                                <p className="text-gray-600 font-bold">{t.step5Title}</p>
                            </div>
                        </div>

                        {/* Badges Grid */}
                        <div className="grid grid-cols-3 gap-4 mb-6">
                            {badges.map((badge, index) => (
                                <div
                                    key={badge.id}
                                    onMouseEnter={() => setHoveredBadge(index)}
                                    onMouseLeave={() => setHoveredBadge(null)}
                                    className={`
                                        relative aspect-square rounded-2xl border-4 border-black
                                        flex flex-col items-center justify-center cursor-pointer
                                        transition-all duration-300 ${badge.color}
                                        ${hoveredBadge === index ? 'scale-110 shadow-[8px_8px_0px_0px_rgba(0,0,0,1)]' : 'shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]'}
                                    `}
                                >
                                    <div className="text-4xl mb-2">{badge.icon}</div>
                                    {hoveredBadge === index && (
                                        <div className="absolute -bottom-12 left-1/2 transform -translate-x-1/2 bg-black text-white px-3 py-1 rounded-lg text-xs font-bold whitespace-nowrap z-10">
                                            {badge.name}
                                        </div>
                                    )}
                                </div>
                            ))}
                        </div>

                        {/* Certificate Preview */}
                        <div className="bg-gradient-to-br from-yellow-50 to-orange-50 border-4 border-black rounded-2xl p-6">
                            <div className="flex items-center gap-3 mb-3">
                                <Award className="w-8 h-8 text-yellow-600" strokeWidth={3} />
                                <h4 className="font-black text-lg">Certificate Earned!</h4>
                            </div>
                            <div className="bg-white border-2 border-black rounded-xl p-4 text-center">
                                <div className="text-3xl mb-2">🎓</div>
                                <div className="font-black text-sm">Logic & Problem Solving</div>
                                <div className="text-xs text-gray-600 font-bold mt-1">Completed Jan 2026</div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* CTA Section */}
                <div className="bg-gradient-to-r from-purple-600 via-pink-600 to-blue-600 border-4 border-black rounded-3xl p-12 text-center shadow-[12px_12px_0px_0px_rgba(0,0,0,1)] relative overflow-hidden">
                    {/* Animated Background Elements */}
                    <div className="absolute inset-0 opacity-10">
                        <div className="absolute top-10 left-10 w-20 h-20 bg-white rounded-full animate-pulse"></div>
                        <div className="absolute bottom-10 right-10 w-32 h-32 bg-white rounded-full animate-pulse delay-75"></div>
                        <div className="absolute top-1/2 left-1/4 w-16 h-16 bg-white rounded-full animate-pulse delay-150"></div>
                    </div>

                    <div className="relative z-10">
                        <h2 className="text-5xl md:text-6xl font-black text-white mb-6 leading-tight">
                            Ready to Start?
                        </h2>
                        <p className="text-xl text-white/90 font-bold mb-8 max-w-2xl mx-auto">
                            Join thousands of learners who are already on their journey to success!
                        </p>
                        <button
                            onClick={() => navigate('/pricing')}
                            className="group px-12 py-6 bg-white text-black font-black text-2xl rounded-2xl border-4 border-black shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] hover:shadow-[12px_12px_0px_0px_rgba(0,0,0,1)] hover:translate-x-[-4px] hover:translate-y-[-4px] transition-all duration-200 active:shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] active:translate-x-[4px] active:translate-y-[4px]"
                        >
                            <span className="flex items-center gap-3">
                                {t.ctaButton}
                                <ArrowRight className="w-8 h-8 group-hover:translate-x-2 transition-transform" strokeWidth={3} />
                            </span>
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
}
