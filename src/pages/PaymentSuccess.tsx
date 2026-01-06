import { useEffect, useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { CheckCircle, Sparkles, Star, Rocket, ArrowRight, Gift, Zap, Trophy, Heart } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';

export default function PaymentSuccess() {
    const navigate = useNavigate();
    const { language } = useLanguage();
    const [showConfetti, setShowConfetti] = useState(true);
    const [animationStep, setAnimationStep] = useState(0);

    const txt = {
        en: {
            badge: "PAYMENT SUCCESSFUL",
            title: "Welcome to the Family!",
            subtitle: "Your adventure begins now",
            description: "You've just unlocked a world of interactive learning. Get ready to explore, create, and grow with Newmindr!",
            whatNext: "What's Next?",
            step1: "Check your email for confirmation",
            step2: "Access your personalized dashboard",
            step3: "Start your first interactive lesson",
            ctaButton: "Start Learning",
            homeButton: "Go Home",
            thankYou: "Thank you for believing in us!",
            confetti1: "🎉",
            confetti2: "🚀",
            confetti3: "⭐",
            confetti4: "🎯",
            confetti5: "✨",
        },
        lt: {
            badge: "MOKĖJIMAS SĖKMINGAS",
            title: "Sveiki prisijungę prie šeimos!",
            subtitle: "Jūsų nuotykis prasideda dabar",
            description: "Jūs ką tik atrakinote interaktyvaus mokymosi pasaulį. Pasiruoškite tyrinėti, kurti ir augti su Newmindr!",
            whatNext: "Kas Toliau?",
            step1: "Patikrinkite savo el. paštą dėl patvirtinimo",
            step2: "Pasiekite savo asmeninę prietaisų skydelį",
            step3: "Pradėkite savo pirmą interaktyvią pamoką",
            ctaButton: "Pradėti Mokytis",
            homeButton: "Į Pradžią",
            thankYou: "Ačiū, kad tikite mumis!",
            confetti1: "🎉",
            confetti2: "🚀",
            confetti3: "⭐",
            confetti4: "🎯",
            confetti5: "✨",
        },
        ru: {
            badge: "ОПЛАТА УСПЕШНА",
            title: "Добро пожаловать в семью!",
            subtitle: "Ваше приключение начинается сейчас",
            description: "Вы только что открыли мир интерактивного обучения. Готовьтесь исследовать, создавать и расти с Newmindr!",
            whatNext: "Что Дальше?",
            step1: "Проверьте почту для подтверждения",
            step2: "Получите доступ к личному кабинету",
            step3: "Начните первый интерактивный урок",
            ctaButton: "Начать Обучение",
            homeButton: "На Главную",
            thankYou: "Спасибо, что верите в нас!",
            confetti1: "🎉",
            confetti2: "🚀",
            confetti3: "⭐",
            confetti4: "🎯",
            confetti5: "✨",
        }
    };

    const t = txt[language as keyof typeof txt] || txt.en;

    useEffect(() => {
        // Staggered animation sequence
        const timers = [
            setTimeout(() => setAnimationStep(1), 300),
            setTimeout(() => setAnimationStep(2), 600),
            setTimeout(() => setAnimationStep(3), 900),
            setTimeout(() => setAnimationStep(4), 1200),
        ];

        // Hide confetti after 5 seconds
        const confettiTimer = setTimeout(() => setShowConfetti(false), 5000);

        return () => {
            timers.forEach(clearTimeout);
            clearTimeout(confettiTimer);
        };
    }, []);

    // Generate confetti particles
    const confettiParticles = Array.from({ length: 50 }, (_, i) => ({
        id: i,
        left: `${Math.random() * 100}%`,
        delay: `${Math.random() * 2}s`,
        duration: `${2 + Math.random() * 3}s`,
        emoji: [t.confetti1, t.confetti2, t.confetti3, t.confetti4, t.confetti5][Math.floor(Math.random() * 5)],
        size: `${12 + Math.random() * 16}px`,
    }));

    const steps = [
        { icon: Gift, text: t.step1, color: 'from-blue-400 to-cyan-400' },
        { icon: Rocket, text: t.step2, color: 'from-purple-400 to-pink-400' },
        { icon: Trophy, text: t.step3, color: 'from-yellow-400 to-orange-400' },
    ];

    return (
        <div className="min-h-screen bg-gradient-to-br from-emerald-50 via-green-50 to-cyan-50 relative overflow-hidden">
            {/* Animated Background Elements */}
            <div className="absolute inset-0 pointer-events-none overflow-hidden">
                <div className="absolute top-20 left-10 w-40 h-40 bg-emerald-300 rounded-full blur-3xl opacity-40 animate-pulse" />
                <div className="absolute top-40 right-20 w-60 h-60 bg-cyan-300 rounded-full blur-3xl opacity-30 animate-pulse" style={{ animationDelay: '1s' }} />
                <div className="absolute bottom-20 left-1/4 w-48 h-48 bg-green-300 rounded-full blur-3xl opacity-35 animate-pulse" style={{ animationDelay: '2s' }} />
                <div className="absolute bottom-40 right-1/3 w-36 h-36 bg-teal-300 rounded-full blur-3xl opacity-40 animate-pulse" style={{ animationDelay: '0.5s' }} />
            </div>

            {/* Confetti Animation */}
            {showConfetti && (
                <div className="fixed inset-0 pointer-events-none z-50 overflow-hidden">
                    {confettiParticles.map((particle) => (
                        <div
                            key={particle.id}
                            className="absolute animate-confetti-fall"
                            style={{
                                left: particle.left,
                                animationDelay: particle.delay,
                                animationDuration: particle.duration,
                                fontSize: particle.size,
                            }}
                        >
                            {particle.emoji}
                        </div>
                    ))}
                </div>
            )}

            {/* Main Content */}
            <div className="relative z-10 flex flex-col items-center justify-center min-h-screen px-4 py-16">
                {/* Success Badge */}
                <div
                    className={`transform transition-all duration-700 ${animationStep >= 1 ? 'translate-y-0 opacity-100' : '-translate-y-10 opacity-0'}`}
                >
                    <div className="inline-block mb-8 transform -rotate-2">
                        <div className="px-6 py-3 bg-gradient-to-r from-emerald-400 to-green-500 text-white font-black text-sm uppercase tracking-wider border-4 border-black shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] rounded-xl flex items-center gap-3">
                            <CheckCircle className="w-6 h-6" strokeWidth={3} />
                            {t.badge}
                            <Sparkles className="w-5 h-5 animate-spin" style={{ animationDuration: '3s' }} />
                        </div>
                    </div>
                </div>

                {/* Main Card */}
                <div
                    className={`max-w-2xl w-full transform transition-all duration-700 ${animationStep >= 2 ? 'translate-y-0 opacity-100 scale-100' : 'translate-y-10 opacity-0 scale-95'}`}
                >
                    <div className="bg-white border-4 border-black rounded-3xl p-8 md:p-12 shadow-[16px_16px_0px_0px_rgba(0,0,0,1)] relative overflow-hidden">
                        {/* Decorative Stars */}
                        <Star className="absolute top-4 right-4 w-8 h-8 text-yellow-400 animate-pulse" fill="currentColor" />
                        <Star className="absolute top-12 right-12 w-5 h-5 text-yellow-300 animate-pulse" style={{ animationDelay: '0.5s' }} fill="currentColor" />
                        <Star className="absolute bottom-8 left-6 w-6 h-6 text-emerald-400 animate-pulse" style={{ animationDelay: '1s' }} fill="currentColor" />

                        {/* Big Check Icon */}
                        <div className="flex justify-center mb-6">
                            <div className="w-24 h-24 bg-gradient-to-br from-emerald-400 to-green-500 rounded-full border-4 border-black shadow-[6px_6px_0px_0px_rgba(0,0,0,1)] flex items-center justify-center animate-bounce" style={{ animationDuration: '2s' }}>
                                <CheckCircle className="w-14 h-14 text-white" strokeWidth={3} />
                            </div>
                        </div>

                        {/* Title */}
                        <h1 className="text-4xl md:text-5xl font-black text-center mb-3 leading-tight">
                            <span className="bg-gradient-to-r from-emerald-600 via-green-600 to-teal-600 bg-clip-text text-transparent">
                                {t.title}
                            </span>
                        </h1>

                        {/* Subtitle */}
                        <p className="text-xl md:text-2xl font-bold text-gray-600 text-center mb-6 italic">
                            {t.subtitle}
                        </p>

                        {/* Description */}
                        <p className="text-gray-700 text-center mb-8 text-lg leading-relaxed max-w-lg mx-auto">
                            {t.description}
                        </p>

                        {/* Divider */}
                        <div className="flex items-center gap-4 mb-8">
                            <div className="flex-1 h-1 bg-gradient-to-r from-transparent via-gray-200 to-transparent rounded-full" />
                            <Zap className="w-6 h-6 text-yellow-500" fill="currentColor" />
                            <div className="flex-1 h-1 bg-gradient-to-r from-transparent via-gray-200 to-transparent rounded-full" />
                        </div>

                        {/* What's Next Section */}
                        <h2 className="text-xl font-black text-center mb-6 uppercase tracking-wider">
                            {t.whatNext}
                        </h2>

                        {/* Steps */}
                        <div className="space-y-4 mb-10">
                            {steps.map((step, index) => {
                                const Icon = step.icon;
                                return (
                                    <div
                                        key={index}
                                        className={`flex items-center gap-4 p-4 bg-gray-50 border-3 border-black rounded-2xl shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] transform transition-all duration-500 hover:scale-[1.02] hover:shadow-[6px_6px_0px_0px_rgba(0,0,0,1)] ${animationStep >= 3 ? 'translate-x-0 opacity-100' : 'translate-x-10 opacity-0'}`}
                                        style={{ transitionDelay: `${index * 150}ms` }}
                                    >
                                        <div className={`w-12 h-12 bg-gradient-to-br ${step.color} rounded-xl border-3 border-black shadow-[3px_3px_0px_0px_rgba(0,0,0,1)] flex items-center justify-center flex-shrink-0`}>
                                            <Icon className="w-6 h-6 text-white" strokeWidth={3} />
                                        </div>
                                        <span className="font-bold text-gray-800 text-lg">{step.text}</span>
                                        <div className="ml-auto">
                                            <div className="w-6 h-6 bg-emerald-400 rounded-full border-2 border-black flex items-center justify-center">
                                                <span className="text-white font-black text-sm">{index + 1}</span>
                                            </div>
                                        </div>
                                    </div>
                                );
                            })}
                        </div>

                        {/* CTA Buttons */}
                        <div
                            className={`flex flex-col sm:flex-row gap-4 transform transition-all duration-700 ${animationStep >= 4 ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}
                        >
                            <button
                                onClick={() => window.location.href = 'https://learning.newmindr.com'}
                                className="flex-1 group px-8 py-5 bg-gradient-to-r from-emerald-400 to-green-500 text-white font-black text-xl rounded-2xl border-4 border-black shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] hover:shadow-[12px_12px_0px_0px_rgba(0,0,0,1)] hover:-translate-x-1 hover:-translate-y-1 active:shadow-[2px_2px_0px_0px_rgba(0,0,0,1)] active:translate-x-1 active:translate-y-1 transition-all duration-200"
                            >
                                <span className="flex items-center justify-center gap-3">
                                    {t.ctaButton}
                                    <ArrowRight className="w-6 h-6 group-hover:translate-x-2 transition-transform" strokeWidth={3} />
                                </span>
                            </button>
                            <Link
                                to="/"
                                className="flex-1 px-8 py-5 bg-white text-gray-900 font-black text-xl rounded-2xl border-4 border-black shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] hover:shadow-[12px_12px_0px_0px_rgba(0,0,0,1)] hover:-translate-x-1 hover:-translate-y-1 active:shadow-[2px_2px_0px_0px_rgba(0,0,0,1)] active:translate-x-1 active:translate-y-1 transition-all duration-200 text-center"
                            >
                                {t.homeButton}
                            </Link>
                        </div>
                    </div>
                </div>

                {/* Thank You Message */}
                <div
                    className={`mt-10 transform transition-all duration-700 ${animationStep >= 4 ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}
                >
                    <div className="flex items-center gap-3 text-gray-600 font-bold text-lg">
                        <Heart className="w-5 h-5 text-red-400 animate-pulse" fill="currentColor" />
                        {t.thankYou}
                        <Heart className="w-5 h-5 text-red-400 animate-pulse" fill="currentColor" />
                    </div>
                </div>
            </div>

            {/* CSS Animations */}
            <style>{`
                @keyframes confetti-fall {
                    0% {
                        transform: translateY(-100vh) rotate(0deg);
                        opacity: 1;
                    }
                    100% {
                        transform: translateY(100vh) rotate(720deg);
                        opacity: 0;
                    }
                }
                .animate-confetti-fall {
                    animation: confetti-fall linear forwards;
                }
            `}</style>
        </div>
    );
}
