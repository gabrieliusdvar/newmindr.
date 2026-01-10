import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import {
    Rocket, Gamepad2, Tv, BookOpen, Coins,
    ArrowRight, Zap, Timer, CheckCircle2, Pickaxe
} from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';

// Floating particle component
const FloatingParticle = ({ delay, duration, size, color }: { delay: number; duration: number; size: number; color: string }) => (
    <div
        className={`absolute rounded-full ${color} opacity-40 animate-float pointer-events-none`}
        style={{
            width: size,
            height: size,
            left: `${Math.random() * 100}%`,
            top: `${Math.random() * 100}%`,
            animationDelay: `${delay}s`,
            animationDuration: `${duration}s`,
        }}
    />
);

// Glitch text effect component
const GlitchText = ({ children, className = "" }: { children: React.ReactNode; className?: string }) => {
    const [glitch, setGlitch] = useState(false);

    useEffect(() => {
        const interval = setInterval(() => {
            setGlitch(true);
            setTimeout(() => setGlitch(false), 100);
        }, 3000 + Math.random() * 2000);
        return () => clearInterval(interval);
    }, []);

    return (
        <span className={`relative inline-block ${className} ${glitch ? 'animate-glitch' : ''}`}>
            {children}
            {glitch && (
                <>
                    <span className="absolute inset-0 text-cyan-400 opacity-70" style={{ clipPath: 'inset(20% 0 60% 0)', transform: 'translateX(-2px)' }}>{children}</span>
                    <span className="absolute inset-0 text-red-400 opacity-70" style={{ clipPath: 'inset(60% 0 20% 0)', transform: 'translateX(2px)' }}>{children}</span>
                </>
            )}
        </span>
    );
};

// Progress bar with animation
const ProgressBar = ({ progress, color }: { progress: number; color: string }) => (
    <div className="w-full h-3 bg-gray-800 rounded-full overflow-hidden border-2 border-gray-700">
        <div
            className={`h-full ${color} transition-all duration-1000 ease-out relative overflow-hidden`}
            style={{ width: `${progress}%` }}
        >
            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent animate-shimmer" />
        </div>
    </div>
);

// Countdown timer component
const CountdownTimer = () => {
    const [time, setTime] = useState({ days: 47, hours: 12, mins: 34, secs: 56 });

    useEffect(() => {
        const interval = setInterval(() => {
            setTime(prev => {
                let { days, hours, mins, secs } = prev;
                secs--;
                if (secs < 0) { secs = 59; mins--; }
                if (mins < 0) { mins = 59; hours--; }
                if (hours < 0) { hours = 23; days--; }
                if (days < 0) days = 0;
                return { days, hours, mins, secs };
            });
        }, 1000);
        return () => clearInterval(interval);
    }, []);

    return (
        <div className="flex gap-3 justify-center">
            {[
                { value: time.days, label: 'DAYS' },
                { value: time.hours, label: 'HRS' },
                { value: time.mins, label: 'MIN' },
                { value: time.secs, label: 'SEC' }
            ].map((item, i) => (
                <div key={i} className="text-center">
                    <div className="w-14 h-14 bg-black border-2 border-emerald-500 rounded-lg flex items-center justify-center font-mono text-2xl font-black text-emerald-400">
                        {String(item.value).padStart(2, '0')}
                    </div>
                    <div className="text-[10px] text-gray-500 mt-1 font-bold">{item.label}</div>
                </div>
            ))}
        </div>
    );
};

export default function Upcoming() {
    const { language } = useLanguage();
    const [activePanel, setActivePanel] = useState<number | null>(null);

    const content = {
        en: {
            title: "THE FUTURE IS LOADING",
            subtitle: "What's Coming to newmindr.",
            description: "We're building something extraordinary. Here's a sneak peek at what's brewing in our labs.",
            comingSoon: "COMING SOON",
            inDevelopment: "IN DEVELOPMENT",
            progress: "Progress",
            stayTuned: "Stay Tuned",
            notifyMe: "Notify Me When Ready",
            backToHome: "Back to Home",
            panels: [
                {
                    icon: Pickaxe,
                    color: "from-emerald-500 to-green-600",
                    bgColor: "bg-emerald-500",
                    borderColor: "border-emerald-500",
                    tag: "MINECRAFT INTEGRATION",
                    title: "THE LEARNING REALM",
                    subtitle: "A Minecraft Server Like No Other",
                    description: "Imagine a world where every block placed, every challenge conquered, and every adventure undertaken counts toward your real learning journey. We're building an exclusive Minecraft server featuring over 1,000+ unique educational quests, puzzles, and challenges - all seamlessly connected to the newmindr. platform.",
                    features: [
                        "1,000+ unique educational tasks and challenges",
                        "Progress syncs directly with your learning profile",
                        "Included with Basic membership - no extra cost",
                        "Collaborative builds with learners worldwide",
                        "Weekly events with exclusive rewards"
                    ],
                    progress: 68,
                    eta: "Q2 2026"
                },
                {
                    icon: Coins,
                    color: "from-yellow-500 to-amber-600",
                    bgColor: "bg-yellow-500",
                    borderColor: "border-yellow-500",
                    tag: "TOKEN ECONOMY",
                    title: "REAL REWARDS",
                    subtitle: "Your Tokens, Real Value",
                    description: "Learning should pay off - literally. We're developing a revolutionary system where the tokens you earn through courses, achievements, and challenges can be exchanged for real-world rewards. From gift cards to merchandise, educational tools to exclusive experiences - your dedication to learning will have tangible benefits.",
                    features: [
                        "Exchange tokens for gift cards & merchandise",
                        "Exclusive newmindr. branded items",
                        "Educational tools and resources",
                        "Special experiences and event access",
                        "Partner brand collaborations"
                    ],
                    progress: 42,
                    eta: "Q3 2026"
                },
                {
                    icon: Gamepad2,
                    color: "from-purple-500 to-violet-600",
                    bgColor: "bg-purple-500",
                    borderColor: "border-purple-500",
                    tag: "ORIGINAL GAME",
                    title: "MINDR. QUEST",
                    subtitle: "Our Own Platformer Adventure",
                    description: "Get ready for an original gaming experience designed from scratch by the newmindr. team! A stunning platformer adventure where quick thinking meets quick reflexes. Solve puzzles, overcome obstacles, and journey through beautifully crafted worlds - all while reinforcing the skills you're learning on our platform.",
                    features: [
                        "Original characters and storyline",
                        "50+ handcrafted levels",
                        "Skill-based progression system",
                        "Hidden educational easter eggs",
                        "Leaderboards and achievements"
                    ],
                    progress: 35,
                    eta: "Q4 2026"
                },
                {
                    icon: Tv,
                    color: "from-pink-500 to-rose-600",
                    bgColor: "bg-pink-500",
                    borderColor: "border-pink-500",
                    tag: "ORIGINAL CONTENT",
                    title: "NEWMINDR. ANIMATED",
                    subtitle: "Our Own Animated Series",
                    description: "Stories that inspire, characters that resonate, and adventures that teach without preaching. We're producing an original animated series featuring the newmindr. universe. Follow our cast of young innovators as they solve real-world problems using creativity, logic, and teamwork. Entertainment meets education in ways never seen before.",
                    features: [
                        "Original animated series",
                        "Relatable characters for all ages",
                        "Educational themes woven into stories",
                        "Exclusive to newmindr. members first",
                        "Interactive companion content"
                    ],
                    progress: 25,
                    eta: "2027"
                },
                {
                    icon: BookOpen,
                    color: "from-cyan-500 to-blue-600",
                    bgColor: "bg-cyan-500",
                    borderColor: "border-cyan-500",
                    tag: "CONTINUOUS GROWTH",
                    title: "EVER-EXPANDING LIBRARY",
                    subtitle: "More Content Every Single Day",
                    description: "Our content library never stops growing. Every day, our team of educators and creators adds new lessons, updates existing courses with fresh material, and develops entirely new learning paths. Your subscription becomes more valuable with each passing week - new modules, new challenges, new opportunities to learn.",
                    features: [
                        "New courses and lessons added weekly",
                        "Existing courses continuously updated",
                        "Community-requested topics prioritized",
                        "Seasonal special events and content",
                        "Expanding to new subjects constantly"
                    ],
                    progress: 100,
                    eta: "ONGOING"
                }
            ]
        },
        lt: {
            title: "ATEITIS KRAUNASI",
            subtitle: "Kas Ateina į newmindr.",
            description: "Mes kuriame kažką nepaprasto. Štai žvilgsnis į tai, kas vyksta mūsų laboratorijose.",
            comingSoon: "NETRUKUS",
            inDevelopment: "KURIAMA",
            progress: "Progresas",
            stayTuned: "Sekite naujienas",
            notifyMe: "Pranešti kai bus paruošta",
            backToHome: "Grįžti į pradžią",
            panels: [
                {
                    icon: Pickaxe,
                    color: "from-emerald-500 to-green-600",
                    bgColor: "bg-emerald-500",
                    borderColor: "border-emerald-500",
                    tag: "MINECRAFT INTEGRACIJA",
                    title: "MOKYMOSI KARALYSTĖ",
                    subtitle: "Minecraft Serveris Kitoks Nei Kiti",
                    description: "Įsivaizduokite pasaulį, kuriame kiekvienas padėtas blokas, kiekvienas įveiktas iššūkis ir kiekviena nuotykis prisideda prie jūsų tikros mokymosi kelionės. Mes kuriame išskirtinį Minecraft serverį su daugiau nei 1,000+ unikalių edukacinių užduočių - visa tai susieta su newmindr. platforma.",
                    features: [
                        "1,000+ unikalių edukacinių užduočių",
                        "Progresas sinchronizuojasi su jūsų profiliu",
                        "Įtraukta į Basic narystę - be papildomo mokesčio",
                        "Bendri projektai su besimokančiais visame pasaulyje",
                        "Kassavaitiniai renginiai su išskirtiniais apdovanojimais"
                    ],
                    progress: 68,
                    eta: "2026 Q2"
                },
                {
                    icon: Coins,
                    color: "from-yellow-500 to-amber-600",
                    bgColor: "bg-yellow-500",
                    borderColor: "border-yellow-500",
                    tag: "ŽETONŲ EKONOMIKA",
                    title: "TIKRI APDOVANOJIMAI",
                    subtitle: "Jūsų Žetonai, Tikra Vertė",
                    description: "Mokymasis turėtų atsipirkti - tiesiogine prasme. Mes kuriame revoliucinę sistemą, kurioje uždirbti žetonai gali būti iškeisti į realaus pasaulio apdovanojimus. Nuo dovanų kortelių iki prekių - jūsų atsidavimas mokymuisi turės apčiuopiamų naudų.",
                    features: [
                        "Keiskite žetonus į dovanų korteles",
                        "Išskirtinės newmindr. prekės",
                        "Edukaciniai įrankiai ir ištekliai",
                        "Specialios patirtys ir renginiai",
                        "Partnerių prekių ženklų bendradarbiavimas"
                    ],
                    progress: 42,
                    eta: "2026 Q3"
                },
                {
                    icon: Gamepad2,
                    color: "from-purple-500 to-violet-600",
                    bgColor: "bg-purple-500",
                    borderColor: "border-purple-500",
                    tag: "ORIGINALUS ŽAIDIMAS",
                    title: "MINDR. QUEST",
                    subtitle: "Mūsų Pačių Platformeris",
                    description: "Pasiruoškite originaliai žaidimų patirčiai! Nuostabus platformerio nuotykis, kuriame greitas mąstymas susitinka su greičiais refleksais. Spręskite galvosūkius, įveikite kliūtis ir keliaute per gražiai sukurtus pasaulius.",
                    features: [
                        "Originalūs personažai ir siužetas",
                        "50+ rankomis sukurtų lygių",
                        "Įgūdžiais paremta progresijos sistema",
                        "Paslėpti edukaciniai easter eggs",
                        "Lyderių lentelės ir pasiekimai"
                    ],
                    progress: 35,
                    eta: "2026 Q4"
                },
                {
                    icon: Tv,
                    color: "from-pink-500 to-rose-600",
                    bgColor: "bg-pink-500",
                    borderColor: "border-pink-500",
                    tag: "ORIGINALUS TURINYS",
                    title: "NEWMINDR. ANIMACIJA",
                    subtitle: "Mūsų Animacinė Serija",
                    description: "Istorijos, kurios įkvepia, personažai, kurie rezonuoja, ir nuotykiai, kurie moko nepamokslaujant. Mes kuriame originalią animacinę seriją su newmindr. visata. Pramoga susitinka su edukacija niekada anksčiau nematytu būdu.",
                    features: [
                        "Originali animacinė serija",
                        "Artimi personažai visiems amžiams",
                        "Edukacinės temos įpintos į istorijas",
                        "Pirma prieiga newmindr. nariams",
                        "Interaktyvus papildomas turinys"
                    ],
                    progress: 25,
                    eta: "2027"
                },
                {
                    icon: BookOpen,
                    color: "from-cyan-500 to-blue-600",
                    bgColor: "bg-cyan-500",
                    borderColor: "border-cyan-500",
                    tag: "NUOLATINIS AUGIMAS",
                    title: "NUOLAT AUGANTI BIBLIOTEKA",
                    subtitle: "Daugiau Turinio Kiekvieną Dieną",
                    description: "Mūsų turinio biblioteka niekada nenustoja augti. Kiekvieną dieną mūsų komanda prideda naujų pamokų, atnaujina esamus kursus šviežia medžiaga ir kuria visiškai naujus mokymosi kelius. Jūsų prenumerata tampa vertingesnė su kiekviena savaite.",
                    features: [
                        "Nauji kursai ir pamokos kiekvieną savaitę",
                        "Esami kursai nuolat atnaujinami",
                        "Bendruomenės pageidaujamos temos prioritetinės",
                        "Sezoniniai specialūs renginiai ir turinys",
                        "Plėtra į naujas temas nuolat"
                    ],
                    progress: 100,
                    eta: "VYKDOMA"
                }
            ]
        },
        ru: {
            title: "БУДУЩЕЕ ЗАГРУЖАЕТСЯ",
            subtitle: "Что Появится в newmindr.",
            description: "Мы создаём нечто экстраординарное. Вот предварительный взгляд на то, что варится в наших лабораториях.",
            comingSoon: "СКОРО",
            inDevelopment: "В РАЗРАБОТКЕ",
            progress: "Прогресс",
            stayTuned: "Следите за новостями",
            notifyMe: "Уведомить когда будет готово",
            backToHome: "На главную",
            panels: [
                {
                    icon: Pickaxe,
                    color: "from-emerald-500 to-green-600",
                    bgColor: "bg-emerald-500",
                    borderColor: "border-emerald-500",
                    tag: "MINECRAFT ИНТЕГРАЦИЯ",
                    title: "ЦАРСТВО ОБУЧЕНИЯ",
                    subtitle: "Minecraft Сервер Как Никакой Другой",
                    description: "Представьте мир, где каждый поставленный блок, каждый преодолённый вызов засчитывается в вашем реальном обучении. Мы создаём эксклюзивный Minecraft сервер с более чем 1,000+ уникальных образовательных заданий - всё связано с платформой newmindr.",
                    features: [
                        "1,000+ уникальных образовательных заданий",
                        "Прогресс синхронизируется с вашим профилем",
                        "Включено в Basic подписку - без доплаты",
                        "Совместные проекты с учениками со всего мира",
                        "Еженедельные события с эксклюзивными наградами"
                    ],
                    progress: 68,
                    eta: "Q2 2026"
                },
                {
                    icon: Coins,
                    color: "from-yellow-500 to-amber-600",
                    bgColor: "bg-yellow-500",
                    borderColor: "border-yellow-500",
                    tag: "ЭКОНОМИКА ТОКЕНОВ",
                    title: "РЕАЛЬНЫЕ НАГРАДЫ",
                    subtitle: "Ваши Токены, Реальная Ценность",
                    description: "Обучение должно окупаться - буквально. Мы разрабатываем революционную систему, где заработанные токены можно обменять на реальные награды. От подарочных карт до товаров - ваша преданность обучению будет иметь осязаемые преимущества.",
                    features: [
                        "Обмен токенов на подарочные карты",
                        "Эксклюзивные товары newmindr.",
                        "Образовательные инструменты и ресурсы",
                        "Особые впечатления и доступ к мероприятиям",
                        "Коллаборации с брендами-партнёрами"
                    ],
                    progress: 42,
                    eta: "Q3 2026"
                },
                {
                    icon: Gamepad2,
                    color: "from-purple-500 to-violet-600",
                    bgColor: "bg-purple-500",
                    borderColor: "border-purple-500",
                    tag: "ОРИГИНАЛЬНАЯ ИГРА",
                    title: "MINDR. QUEST",
                    subtitle: "Наш Собственный Платформер",
                    description: "Приготовьтесь к оригинальному игровому опыту! Потрясающий платформер, где быстрое мышление встречается с быстрыми рефлексами. Решайте головоломки и путешествуйте по красиво созданным мирам.",
                    features: [
                        "Оригинальные персонажи и сюжет",
                        "50+ вручную созданных уровней",
                        "Система прогрессии на основе навыков",
                        "Скрытые образовательные пасхалки",
                        "Таблицы лидеров и достижения"
                    ],
                    progress: 35,
                    eta: "Q4 2026"
                },
                {
                    icon: Tv,
                    color: "from-pink-500 to-rose-600",
                    bgColor: "bg-pink-500",
                    borderColor: "border-pink-500",
                    tag: "ОРИГИНАЛЬНЫЙ КОНТЕНТ",
                    title: "NEWMINDR. АНИМАЦИЯ",
                    subtitle: "Наш Анимационный Сериал",
                    description: "Истории, которые вдохновляют, персонажи, которые резонируют, и приключения, которые учат ненавязчиво. Мы производим оригинальный анимационный сериал с вселенной newmindr.",
                    features: [
                        "Оригинальный анимационный сериал",
                        "Близкие персонажи для всех возрастов",
                        "Образовательные темы вплетены в истории",
                        "Первый доступ для членов newmindr.",
                        "Интерактивный сопутствующий контент"
                    ],
                    progress: 25,
                    eta: "2027"
                },
                {
                    icon: BookOpen,
                    color: "from-cyan-500 to-blue-600",
                    bgColor: "bg-cyan-500",
                    borderColor: "border-cyan-500",
                    tag: "ПОСТОЯННЫЙ РОСТ",
                    title: "ПОСТОЯННО РАСТУЩАЯ БИБЛИОТЕКА",
                    subtitle: "Больше Контента Каждый День",
                    description: "Наша библиотека контента никогда не перестаёт расти. Каждый день наша команда добавляет новые уроки, обновляет существующие курсы и разрабатывает совершенно новые учебные пути. Ваша подписка становится ценнее с каждой неделей.",
                    features: [
                        "Новые курсы и уроки еженедельно",
                        "Существующие курсы постоянно обновляются",
                        "Запросы сообщества в приоритете",
                        "Сезонные специальные события и контент",
                        "Постоянное расширение на новые темы"
                    ],
                    progress: 100,
                    eta: "ИДЁТ"
                }
            ]
        }
    };

    const t = content[language as keyof typeof content] || content.en;

    return (
        <div className="min-h-screen bg-gray-950 text-white pt-24 overflow-hidden relative">
            {/* Animated background */}
            <div className="fixed inset-0 pointer-events-none">
                {/* Grid pattern */}
                <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:60px_60px]" />

                {/* Floating particles */}
                {Array.from({ length: 20 }).map((_, i) => (
                    <FloatingParticle
                        key={i}
                        delay={i * 0.5}
                        duration={10 + Math.random() * 10}
                        size={4 + Math.random() * 8}
                        color={['bg-emerald-500', 'bg-purple-500', 'bg-cyan-500', 'bg-pink-500', 'bg-yellow-500'][i % 5]}
                    />
                ))}

                {/* Gradient orbs */}
                <div className="absolute top-0 left-1/4 w-[600px] h-[600px] bg-purple-500/10 rounded-full blur-[150px] animate-pulse" />
                <div className="absolute bottom-0 right-1/4 w-[600px] h-[600px] bg-emerald-500/10 rounded-full blur-[150px] animate-pulse" style={{ animationDelay: '2s' }} />
            </div>

            {/* Hero Section */}
            <section className="container mx-auto px-6 py-20 text-center relative z-10">
                <div className="inline-flex items-center gap-2 px-4 py-2 bg-emerald-500/20 border border-emerald-500/50 rounded-full font-bold text-sm mb-8 text-emerald-400 animate-pulse">
                    <Timer className="w-4 h-4" />
                    {t.inDevelopment}
                </div>

                <h1 className="text-5xl md:text-8xl font-black mb-6 tracking-tight">
                    <GlitchText className="bg-gradient-to-r from-white via-gray-300 to-white bg-clip-text text-transparent">
                        {t.title}
                    </GlitchText>
                </h1>

                <p className="text-xl md:text-2xl font-bold text-gray-400 mb-4">
                    {t.subtitle}
                </p>
                <p className="text-lg text-gray-500 max-w-2xl mx-auto mb-12">
                    {t.description}
                </p>

                {/* Countdown Timer */}
                <div className="mb-16">
                    <p className="text-sm text-gray-500 mb-4 uppercase tracking-widest">Next Major Update In</p>
                    <CountdownTimer />
                </div>
            </section>

            {/* Panels Section */}
            <section className="container mx-auto px-6 pb-20 relative z-10">
                <div className="grid gap-8">
                    {t.panels.map((panel, index) => {
                        const Icon = panel.icon;
                        const isActive = activePanel === index;

                        return (
                            <div
                                key={index}
                                className={`relative group cursor-pointer transition-all duration-500 ${isActive ? 'z-20' : 'z-10'}`}
                                onClick={() => setActivePanel(isActive ? null : index)}
                            >
                                {/* Card */}
                                <div className={`relative p-8 md:p-10 rounded-3xl border-2 transition-all duration-500 overflow-hidden
                                    ${isActive
                                        ? `${panel.borderColor} bg-gray-900/80 shadow-[0_0_60px_-10px] shadow-current`
                                        : 'border-gray-800 bg-gray-900/40 hover:border-gray-700 hover:bg-gray-900/60'
                                    }`}
                                >
                                    {/* Background gradient on hover/active */}
                                    <div className={`absolute inset-0 bg-gradient-to-br ${panel.color} opacity-0 transition-opacity duration-500 ${isActive ? 'opacity-5' : 'group-hover:opacity-5'}`} />

                                    {/* Content Grid */}
                                    <div className="relative z-10 grid md:grid-cols-[auto_1fr_auto] gap-6 items-start">
                                        {/* Icon */}
                                        <div className={`w-20 h-20 rounded-2xl bg-gradient-to-br ${panel.color} flex items-center justify-center shadow-lg transition-transform duration-500 ${isActive ? 'scale-110 rotate-3' : 'group-hover:scale-105'}`}>
                                            <Icon className="w-10 h-10 text-white" />
                                        </div>

                                        {/* Main Content */}
                                        <div className="flex-1">
                                            <div className={`inline-block px-3 py-1 ${panel.bgColor} rounded-full text-xs font-black text-black mb-3`}>
                                                {panel.tag}
                                            </div>
                                            <h2 className="text-2xl md:text-3xl font-black mb-2">{panel.title}</h2>
                                            <p className={`text-lg font-medium mb-4 bg-gradient-to-r ${panel.color} bg-clip-text text-transparent`}>
                                                {panel.subtitle}
                                            </p>
                                            <p className={`text-gray-400 leading-relaxed transition-all duration-500 ${isActive ? '' : 'line-clamp-2'}`}>
                                                {panel.description}
                                            </p>

                                            {/* Features - only show when active */}
                                            {isActive && (
                                                <div className="mt-6 space-y-3 animate-fadeIn">
                                                    {panel.features.map((feature, i) => (
                                                        <div key={i} className="flex items-center gap-3">
                                                            <CheckCircle2 className={`w-5 h-5 flex-shrink-0 ${panel.borderColor.replace('border-', 'text-')}`} />
                                                            <span className="text-gray-300">{feature}</span>
                                                        </div>
                                                    ))}
                                                </div>
                                            )}

                                            {/* Media Gallery - Minecraft Panel (index 0) */}
                                            {isActive && index === 0 && (
                                                <div className="mt-8 animate-fadeIn">
                                                    <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                                                        {/* Video with floating animation */}
                                                        <div className="col-span-2 relative group/media overflow-hidden rounded-2xl border-2 border-emerald-500/50 animate-float-media" style={{ animationDelay: '0s' }}>
                                                            <video
                                                                autoPlay
                                                                loop
                                                                muted
                                                                playsInline
                                                                className="w-full h-48 object-cover transition-transform duration-500 group-hover/media:scale-110"
                                                            >
                                                                <source src="/minecaft1.mp4" type="video/mp4" />
                                                            </video>
                                                            <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
                                                            <div className="absolute bottom-2 left-3 text-xs font-bold text-emerald-400 flex items-center gap-1">
                                                                <span className="w-2 h-2 bg-emerald-500 rounded-full animate-pulse" />
                                                                LIVE PREVIEW
                                                            </div>
                                                        </div>

                                                        {/* Image 1 */}
                                                        <div className="relative group/media overflow-hidden rounded-2xl border-2 border-emerald-500/30 hover:border-emerald-500 transition-all animate-float-media" style={{ animationDelay: '0.5s' }}>
                                                            <img
                                                                src="/minecraft2.jpg"
                                                                alt="Minecraft Learning Experience"
                                                                className="w-full h-48 object-cover transition-transform duration-500 group-hover/media:scale-110"
                                                            />
                                                            <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent opacity-0 group-hover/media:opacity-100 transition-opacity" />
                                                        </div>

                                                        {/* Image 2 */}
                                                        <div className="relative group/media overflow-hidden rounded-2xl border-2 border-emerald-500/30 hover:border-emerald-500 transition-all animate-float-media" style={{ animationDelay: '1s' }}>
                                                            <img
                                                                src="/minecraft3.jpg"
                                                                alt="Educational Minecraft World"
                                                                className="w-full h-48 object-cover transition-transform duration-500 group-hover/media:scale-110"
                                                            />
                                                            <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent opacity-0 group-hover/media:opacity-100 transition-opacity" />
                                                        </div>

                                                        {/* Image 3 - Full width */}
                                                        <div className="col-span-2 md:col-span-4 relative group/media overflow-hidden rounded-2xl border-2 border-emerald-500/30 hover:border-emerald-500 transition-all animate-float-media" style={{ animationDelay: '1.5s' }}>
                                                            <img
                                                                src="/minecraft4.jpg"
                                                                alt="Collaborative Learning in Minecraft"
                                                                className="w-full h-40 object-cover transition-transform duration-500 group-hover/media:scale-105"
                                                            />
                                                            <div className="absolute inset-0 bg-gradient-to-r from-emerald-900/80 via-transparent to-emerald-900/80" />
                                                            <div className="absolute inset-0 flex items-center justify-center">
                                                                <span className="px-6 py-3 bg-black/70 border-2 border-emerald-500 rounded-full font-black text-emerald-400 text-sm backdrop-blur-sm">
                                                                    1,000+ EDUCATIONAL QUESTS
                                                                </span>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            )}

                                            {/* Media Gallery - Animated Series Panel (index 3) */}
                                            {isActive && index === 3 && (
                                                <div className="mt-8 animate-fadeIn">
                                                    <div className="relative group/media overflow-hidden rounded-3xl border-2 border-pink-500/50 hover:border-pink-500 transition-all animate-float-media">
                                                        <img
                                                            src="/film.png"
                                                            alt="newmindr. Animated Series Preview"
                                                            className="w-full h-64 md:h-80 object-cover transition-transform duration-700 group-hover/media:scale-105"
                                                        />
                                                        <div className="absolute inset-0 bg-gradient-to-t from-black via-black/20 to-transparent" />
                                                        <div className="absolute bottom-0 left-0 right-0 p-6">
                                                            <div className="flex items-center gap-3 mb-2">
                                                                <span className="px-3 py-1 bg-pink-500 rounded-full text-xs font-black text-black">COMING 2027</span>
                                                                <span className="px-3 py-1 bg-white/10 rounded-full text-xs font-bold text-white backdrop-blur-sm">ORIGINAL SERIES</span>
                                                            </div>
                                                            <h4 className="text-2xl font-black text-white mb-1">NEWMINDR. ANIMATED</h4>
                                                            <p className="text-pink-300 text-sm">Where entertainment meets education</p>
                                                        </div>
                                                        {/* Floating decorative elements */}
                                                        <div className="absolute top-4 right-4 w-16 h-16 border-2 border-pink-500/30 rounded-full animate-spin-slow" />
                                                        <div className="absolute top-8 right-8 w-8 h-8 bg-pink-500/20 rounded-full animate-pulse" />
                                                    </div>
                                                </div>
                                            )}
                                        </div>

                                        {/* Progress & ETA */}
                                        <div className="text-right min-w-[150px]">
                                            <div className="text-sm text-gray-500 mb-2">{t.progress}</div>
                                            <div className="text-3xl font-black mb-3">{panel.progress}%</div>
                                            <ProgressBar progress={panel.progress} color={`bg-gradient-to-r ${panel.color}`} />
                                            <div className="mt-4 px-4 py-2 bg-gray-800 rounded-lg inline-block">
                                                <div className="text-xs text-gray-500 uppercase tracking-wider">ETA</div>
                                                <div className="text-lg font-bold">{panel.eta}</div>
                                            </div>
                                        </div>
                                    </div>

                                    {/* Expand indicator */}
                                    <div className={`absolute bottom-4 left-1/2 -translate-x-1/2 flex items-center gap-2 text-gray-500 text-sm transition-opacity ${isActive ? 'opacity-0' : 'opacity-100'}`}>
                                        <span>Click to expand</span>
                                        <ArrowRight className="w-4 h-4 animate-bounce-x" />
                                    </div>
                                </div>
                            </div>
                        );
                    })}
                </div>
            </section>

            {/* CTA Section */}
            <section className="container mx-auto px-6 py-20 text-center relative z-10">
                <div className="max-w-3xl mx-auto p-10 rounded-3xl border-2 border-gray-800 bg-gradient-to-br from-gray-900 to-gray-950 relative overflow-hidden">
                    {/* Animated border */}
                    <div className="absolute inset-0 rounded-3xl bg-gradient-to-r from-emerald-500 via-purple-500 to-pink-500 opacity-20 blur-xl animate-pulse" />

                    <div className="relative z-10">
                        <Rocket className="w-16 h-16 mx-auto mb-6 text-emerald-400 animate-bounce" />
                        <h2 className="text-3xl md:text-4xl font-black mb-4">
                            {t.stayTuned}
                        </h2>
                        <p className="text-gray-400 mb-8 max-w-xl mx-auto">
                            Be the first to experience our upcoming features. Join now and grow with us!
                        </p>
                        <div className="flex flex-wrap gap-4 justify-center">
                            <Link
                                to="/process"
                                className="inline-flex items-center gap-2 px-8 py-4 bg-gradient-to-r from-emerald-500 to-green-600 rounded-xl font-black text-lg shadow-[0_0_30px_-5px_rgba(16,185,129,0.5)] hover:shadow-[0_0_40px_-5px_rgba(16,185,129,0.7)] transition-all hover:scale-105"
                            >
                                <Zap className="w-5 h-5" />
                                Start Learning Now
                            </Link>
                            <Link
                                to="/"
                                className="inline-flex items-center gap-2 px-8 py-4 bg-gray-800 border-2 border-gray-700 rounded-xl font-bold text-lg hover:bg-gray-700 transition-all"
                            >
                                {t.backToHome}
                            </Link>
                        </div>
                    </div>
                </div>
            </section>

            {/* Custom styles */}
            <style>{`
                @keyframes float {
                    0%, 100% { transform: translateY(0) rotate(0deg); }
                    50% { transform: translateY(-20px) rotate(5deg); }
                }
                .animate-float {
                    animation: float ease-in-out infinite;
                }
                @keyframes float-media {
                    0%, 100% { transform: translateY(0) scale(1); }
                    50% { transform: translateY(-8px) scale(1.01); }
                }
                .animate-float-media {
                    animation: float-media 4s ease-in-out infinite;
                }
                @keyframes shimmer {
                    0% { transform: translateX(-100%); }
                    100% { transform: translateX(100%); }
                }
                .animate-shimmer {
                    animation: shimmer 2s infinite;
                }
                @keyframes glitch {
                    0%, 100% { transform: translate(0); }
                    20% { transform: translate(-2px, 2px); }
                    40% { transform: translate(-2px, -2px); }
                    60% { transform: translate(2px, 2px); }
                    80% { transform: translate(2px, -2px); }
                }
                .animate-glitch {
                    animation: glitch 0.1s ease-in-out;
                }
                @keyframes bounce-x {
                    0%, 100% { transform: translateX(0); }
                    50% { transform: translateX(5px); }
                }
                .animate-bounce-x {
                    animation: bounce-x 1s ease-in-out infinite;
                }
                @keyframes fadeIn {
                    from { opacity: 0; transform: translateY(10px); }
                    to { opacity: 1; transform: translateY(0); }
                }
                .animate-fadeIn {
                    animation: fadeIn 0.5s ease-out forwards;
                }
                @keyframes spin-slow {
                    from { transform: rotate(0deg); }
                    to { transform: rotate(360deg); }
                }
                .animate-spin-slow {
                    animation: spin-slow 20s linear infinite;
                }
            `}</style>
        </div>
    );
}
