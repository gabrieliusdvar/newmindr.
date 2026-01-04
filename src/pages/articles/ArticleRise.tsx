import { useState, useEffect } from 'react';
import { ArrowLeft, TrendingUp, CheckCircle, Smartphone, Zap, Play } from 'lucide-react';
import { Link } from 'react-router-dom';
import { useLanguage } from '../../contexts/LanguageContext';

export default function ArticleRise() {
    const { language } = useLanguage();
    const [retention, setRetention] = useState(10);
    const [xp, setXp] = useState(0);
    const [scrollProgress, setScrollProgress] = useState(0);

    useEffect(() => {
        const handleScroll = () => {
            const totalScroll = document.documentElement.scrollTop;
            const windowHeight = document.documentElement.scrollHeight - document.documentElement.clientHeight;
            const scroll = `${totalScroll / windowHeight}`;
            setScrollProgress(Number(scroll));
        }
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const txt = {
        en: {
            back: "Back",
            tag: "INSIGHTS 2026",
            title1: "Static Learning",
            title2: "Is Dead.",
            subtitle: "Attention spans are shrinking. Traditional content can't compete. Here is the data.",
            chartTitle: "THE RETENTION GAP",
            chartLabel1: "Lecture (Listening)",
            chartLabel2: "Interactive (Doing)",
            chartTooltip: "Hover or tap the bar to verify simulation.",
            youAreHere: "YOU ARE HERE",
            dopamineTitle: "The Dopamine Loop",
            dopamineText: "Games give instant feedback. Homework gives feedback 2 weeks later. We fixed that.",
            feedbackBtn: "GET INSTANT FEEDBACK",
            mobileTitle: "Mobile First",
            mobileText: "Kids live on phones. Why fight it? Our entire curriculum fits in their pocket.",
            ctaTitle: "DON'T FALL BEHIND.",
            ctaSubtitle: "The Interactive Roadmap covers everything from Logic to Leadership.",
            ctaBtn: "TAKE ME TO THE ROADMAP",
            ctaSmall: "Try 7-days for free. It's on us 😎"
        },
        lt: {
            back: "Atgal",
            tag: "ĮŽVALGOS 2026",
            title1: "Statinis Mokymasis",
            title2: "Mirė.",
            subtitle: "Dėmesio koncentracija mažėja. Tradicinis turinys nebegali konkuruoti. Štai duomenys.",
            chartTitle: "ĮSIMINIMO SPRAGA",
            chartLabel1: "Paskaita (Klausymas)",
            chartLabel2: "Interaktyvus (Veiksmas)",
            chartTooltip: "Užveskite pelę arba palieskite stulpelį.",
            youAreHere: "JŪS ČIA",
            dopamineTitle: "Dopamino Ciklas",
            dopamineText: "Žaidimai suteikia greitą grįžtamąjį ryšį. Namų darbai – po 2 savaičių. Mes tai ištaisėme.",
            feedbackBtn: "GAUTI ĮVERTINIMĄ",
            mobileTitle: "Mobile First",
            mobileText: "Vaikai gyvena telefonuose. Kam su tuo kovoti? Visa mūsų programa telpa jų kišenėje.",
            ctaTitle: "NEATSILIKITE.",
            ctaSubtitle: "Interaktyvus planas apima viską – nuo Logikos iki Lyderystės.",
            ctaBtn: "RODYTI PLANĄ",
            ctaSmall: "Išbandyk 7 dienas nemokamai. Mes statom 😎"
        },
        ru: {
            back: "Назад",
            tag: "ИНСАЙТЫ 2026",
            title1: "Статичное Обучение",
            title2: "Умерло.",
            subtitle: "Концентрация внимания падает. Традиционный контент не может конкурировать. Вот данные.",
            chartTitle: "РАЗРЫВ В ЗАПОМИНАНИИ",
            chartLabel1: "Лекция (Слушание)",
            chartLabel2: "Интерактив (Действие)",
            chartTooltip: "Наведите курсор или нажмите на полосу.",
            youAreHere: "ВЫ ЗДЕСЬ",
            dopamineTitle: "Дофаминовая Петля",
            dopamineText: "Игры дают мгновенную реакцию. Домашняя работа – через 2 недели. Мы это исправили.",
            feedbackBtn: "ПОЛУЧИТЬ РЕЗУЛЬТАТ",
            mobileTitle: "Мобильность",
            mobileText: "Дети живут в телефонах. Зачем бороться? Вся наша программа помещается в кармане.",
            ctaTitle: "НЕ ОТСТАВАЙТЕ.",
            ctaSubtitle: "Интерактивная карта охватывает всё: от Логики до Лидерства.",
            ctaBtn: "ОТКРЫТЬ КАРТУ",
            ctaSmall: "Попробуйте 7 дней бесплатно. За наш счет 😎"
        }
    };

    const t = txt[language as keyof typeof txt] || txt.en;

    useEffect(() => {
        document.title = `${t.title1} ${t.title2} | NewMindr`;
    }, [language, t]);

    const animateChart = () => {
        setRetention(10);
        setTimeout(() => setRetention(85), 500);
    };

    return (
        <div className="min-h-screen bg-yellow-50 font-sans text-black pt-24 selection:bg-pink-400 overflow-x-hidden">
            {/* Progress Bar */}
            <div className="fixed top-0 left-0 h-2 bg-black z-[60]" style={{ width: `${scrollProgress * 100}%` }} />

            <h1 className="sr-only">{t.title1} {t.title2}</h1>

            <nav className="fixed top-0 left-0 w-full z-50 bg-white border-b-4 border-black px-6 py-4 flex justify-between items-center shadow-[0_4px_0_0_#e5e7eb]">
                <Link to="/blog" className="flex items-center gap-2 font-black uppercase tracking-widest hover:underline">
                    <ArrowLeft className="w-6 h-6 border-2 border-black rounded-full bg-white transition hover:scale-110" />
                    {t.back}
                </Link>
                <div className="font-black text-xl tracking-tighter">NEWMINDR.</div>
            </nav>

            <article className="container mx-auto px-6 max-w-4xl pb-24 relative">
                {/* Header */}
                <header className="mb-24 relative">
                    <div className="absolute -left-20 -top-20 hidden lg:block">
                        <Play className="w-40 h-40 text-yellow-300 rotate-12 opacity-50" />
                    </div>

                    <div className="inline-block bg-black text-white font-bold px-4 py-1 mb-4 rotate-2">
                        {t.tag}
                    </div>
                    <h2 className="text-6xl md:text-8xl font-black leading-[0.9] mb-8 uppercase relative z-10">
                        {t.title1} <br />
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-pink-500 to-purple-600 animate-pulse">{t.title2}</span>
                    </h2>
                    <p className="text-2xl font-bold border-l-8 border-black pl-6 py-4 bg-white shadow-[8px_8px_0_0_#000] relative z-20">
                        {t.subtitle}
                    </p>
                </header>

                {/* Interactive Chart */}
                <section className="mb-24 border-4 border-black bg-white p-8 shadow-[12px_12px_0_0_#000] hover:shadow-[16px_16px_0_0_#000] transition-shadow duration-300">
                    <h3 className="text-3xl font-black mb-8 flex items-center gap-3">
                        <TrendingUp className="w-8 h-8" />
                        {t.chartTitle}
                    </h3>

                    <div className="space-y-8">
                        {/* Static Bar */}
                        <div>
                            <div className="flex justify-between font-bold mb-2">
                                <span>{t.chartLabel1}</span>
                                <span>5-10%</span>
                            </div>
                            <div className="w-full h-8 bg-gray-200 border-2 border-black rounded-full overflow-hidden">
                                <div className="h-full bg-black/40 w-[10%]"></div>
                            </div>
                        </div>

                        {/* Interactive Bar */}
                        <div className="cursor-pointer group" onClick={animateChart} onMouseEnter={animateChart}>
                            <div className="flex justify-between font-bold mb-2">
                                <span className="flex items-center gap-2 group-hover:text-emerald-600 transition-colors">
                                    {t.chartLabel2} <Zap className="w-4 h-4 fill-yellow-400 text-black group-hover:scale-125 transition-transform" />
                                </span>
                                <span className="text-emerald-600 text-2xl">{retention}%</span>
                            </div>
                            <div className="w-full h-8 bg-gray-200 border-2 border-black rounded-full overflow-hidden relative">
                                <div
                                    className="h-full bg-yellow-400 transition-all duration-1000 ease-out flex items-center justify-end px-2"
                                    style={{ width: `${retention}%` }}
                                >
                                    <span className="text-xs font-black">{t.youAreHere}</span>
                                </div>
                            </div>
                            <p className="text-xs text-gray-500 mt-2 font-mono h-4">
                                {retention < 85 ? t.chartTooltip : 'BOOM! 🚀'}
                            </p>
                        </div>
                    </div>
                </section>

                <div className="grid md:grid-cols-2 gap-8 mb-24">
                    <section className="bg-pink-400 border-4 border-black p-8 shadow-[8px_8px_0_0_#000] -rotate-1 hover:rotate-0 transition-transform duration-300">
                        <h3 className="text-2xl font-black mb-4 bg-white inline-block px-2 transform -rotate-2">{t.dopamineTitle}</h3>
                        <p className="font-bold mb-6 min-h-[5rem]">
                            {t.dopamineText}
                        </p>
                        <button
                            onClick={() => setXp(x => x + 100)}
                            className="w-full bg-black text-white font-black py-4 border-4 border-transparent hover:bg-white hover:text-black hover:border-black transition-all active:scale-95 flex items-center justify-center gap-2"
                        >
                            <CheckCircle /> {t.feedbackBtn}
                        </button>
                        <div className="h-8 mt-4 text-center font-black">
                            {xp > 0 && <span className="animate-bounce inline-block">+{xp} XP!</span>}
                        </div>
                    </section>

                    <section className="bg-blue-400 border-4 border-black p-8 shadow-[8px_8px_0_0_#000] rotate-1 hover:rotate-0 transition-transform duration-300">
                        <h3 className="text-2xl font-black mb-4 bg-white inline-block px-2 transform rotate-2">{t.mobileTitle}</h3>
                        <p className="font-bold mb-6 min-h-[5rem]">
                            {t.mobileText}
                        </p>
                        <div className="flex justify-center py-6">
                            <Smartphone className="w-20 h-20 animate-wiggle text-white drop-shadow-md" />
                        </div>
                    </section>
                </div>

                {/* CTA Section */}
                <section className="text-center py-20 bg-black text-white border-4 border-black relative overflow-hidden group">
                    <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-20" />

                    {/* Hover Effect Background */}
                    <div className="absolute inset-0 bg-emerald-900/0 group-hover:bg-emerald-900/20 transition-colors duration-500" />

                    <div className="relative z-10 px-4">
                        <h3 className="text-4xl md:text-6xl font-black mb-8 uppercase tracking-tight">
                            {t.ctaTitle}
                        </h3>
                        <p className="text-xl md:text-2xl text-gray-300 mb-10 max-w-2xl mx-auto border-b-2 border-emerald-500/50 pb-8">
                            {t.ctaSubtitle}
                        </p>
                        <Link
                            to="/process"
                            className="inline-block bg-yellow-400 text-black text-2xl md:text-3xl font-black px-16 py-8 border-4 border-transparent hover:bg-white hover:border-yellow-400 transition-all transform hover:-translate-y-2 shadow-[0_10px_20px_rgba(250,204,21,0.4)]"
                        >
                            {t.ctaBtn}
                        </Link>
                        <p className="mt-8 text-sm text-gray-400 font-bold tracking-widest uppercase">
                            {t.ctaSmall}
                        </p>
                    </div>
                </section>
            </article>

            <style>{`
                @keyframes wiggle {
                    0%, 100% { transform: rotate(-3deg); }
                    50% { transform: rotate(3deg); }
                }
                .animate-wiggle {
                    animation: wiggle 1s ease-in-out infinite;
                }
            `}</style>
        </div>
    );
}
