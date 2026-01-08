import { useState } from 'react';
import { ArrowLeft, Brain, Smartphone, Zap, Monitor, Rocket, Layers, ArrowRight, Shield, Mountain, Trophy } from 'lucide-react';
import { Link } from 'react-router-dom';
import { useLanguage } from '../../contexts/LanguageContext';

export default function ArticleFutureLearning() {
    const { language } = useLanguage();
    const [activeTab, setActiveTab] = useState<'passive' | 'active'>('active');

    const content = {
        en: {
            back: "Back to Blog",
            readingTime: "5 min read",
            title: "The Future of Learning Is Already Here — Are We Letting Our Kids Miss It?",
            subtitle: "The real question isn't 'Should kids use screens?', but 'What are they using them for?'",
            intro: {
                dilemma: "Parents today face a quiet dilemma.",
                p1: "On one hand, we want to protect our children from too much screen time. On the other — the world they are growing into is digital, fast-changing, and deeply interactive.",
                question: "What are they using them for?"
            },
            section1: {
                title: "1. Screens Are Not the Problem — Passive Time Is",
                desc: "Not all screen time is the same. Interactive courses turn screens into tools, not distractions.",
                passive: {
                    title: "PASSIVE CONSUMPTION",
                    desc: "Endlessly scrolling social media. The brain turns off.",
                    effect: "DOPAMINE HIT",
                    iconTags: ["Scrolling", "Watching", "Zoning Out"]
                },
                active: {
                    title: "ACTIVE CREATION",
                    desc: "Solving problems, making decisions, building. The brain turns ON.",
                    effect: "SKILL GAIN",
                    iconTags: ["Coding", "Designing", "Solving"]
                }
            },
            section2: {
                title: "2. After-School Hours Shape More Than We Think",
                desc: "School ends early. But learning — and influence — does not.",
                problem: "Unstructured time leads to boredom and loss of curiosity.",
                solution: "Structured, interactive learning gives meaningful challenges and a sense of progress.",
                grid: [
                    { title: "Safe Environment", icon: "Shield" },
                    { title: "Meaningful Challenges", icon: "Mountain" },
                    { title: "Sense of Progress", icon: "Trophy" }
                ]
            },
            section3: {
                title: "3. The Biggest Risk Is Not Trying",
                desc: "Many parents wait until grades drop or motivation disappears. But modern learning platforms are a preventive tool.",
                comparison: "Trying interactive courses does not replace school. It supports it.",
                insight: "The real loss is letting curiosity fade when better options already exist."
            },
            conclusion: {
                title: "A Calm, Safe Step Forward",
                text: "Interactive learning is not about pressure. It is about direction.",
                points: [
                    "Learn at their own pace",
                    "Explore topics that interest them",
                    "Turn screen time into growth time"
                ],
                final: "Because the future of learning is not coming. It is already here."
            },
            cta: "Start The Future Now"
        },
        lt: {
            back: "Grįžti į tinklaraštį",
            readingTime: "5 min skaitymas",
            title: "Mokymosi ateitis jau čia — ar leidžiame vaikams ją praleisti?",
            subtitle: "Tikrasis klausimas nėra „Ar vaikai turėtų naudotis ekranais?“, o „Kam jie juos naudoja?“",
            intro: {
                dilemma: "Šiandien tėvai susiduria su tyliu vidiniu konfliktu.",
                p1: "Viena vertus, norime apsaugoti vaikus nuo per ilgo laiko prie ekranų. Kita vertus — pasaulis, kuriame jie augs, yra skaitmeninis, greitai besikeičiantis ir interaktyvus.",
                question: "Kam tie ekranai yra naudojami?"
            },
            section1: {
                title: "1. Ekranai nėra problema — problema yra pasyvus laikas",
                desc: "Ne visas laikas prie ekranų yra vienodas. Interaktyvūs kursai paverčia ekranus įrankiais, o ne trukdžiais.",
                passive: {
                    title: "PASYVUS VARTOJIMAS",
                    desc: "Beprasmiškas naršymas socialiniuose tinkluose. Smegenys „išsijungia“.",
                    effect: "DOPAMINO ŠUOLIS",
                    iconTags: ["Naršymas", "Žiūrėjimas", "Atsijungimas"]
                },
                active: {
                    title: "AKTYVI KŪRYBA",
                    desc: "Problemų sprendimas, sprendimų priėmimas, kūrimas. Smegenys „įsijungia“.",
                    effect: "ĮGŪDŽIŲ AUGIMAS",
                    iconTags: ["Programavimas", "Dizainas", "Sprendimas"]
                }
            },
            section2: {
                title: "2. Laikas po pamokų formuoja daugiau, nei galvojame",
                desc: "Pamokos baigiasi anksti. Tačiau įtaka ir mokymasis — ne.",
                problem: "Neorganizuotas laikas po pamokų dažnai veda prie nuobodulio ir smalsumo praradimo.",
                solution: "Struktūruotas, interaktyvus mokymasis suteikia prasmingus iššūkius ir progreso jausmą.",
                grid: [
                    { title: "Saugi aplinka", icon: "Shield" },
                    { title: "Prasmingi iššūkiai", icon: "Mountain" },
                    { title: "Progreso jausmas", icon: "Trophy" }
                ]
            },
            section3: {
                title: "3. Didžiausia rizika — nepabandyti",
                desc: "Daugelis tėvų laukia, kol pablogės pažymiai ar dings motyvacija. Tačiau šiuolaikinės platformos yra prevencinė priemonė.",
                comparison: "Interaktyvūs kursai nepakeičia mokyklos. Jie ją papildo.",
                insight: "Tikrasis praradimas yra praleista galimybė, kai geresni sprendimai jau egzistuoja."
            },
            conclusion: {
                title: "Ramus žingsnis į priekį",
                text: "Interaktyvus mokymasis nėra apie spaudimą. Jis apie kryptį.",
                points: [
                    "Mokosi savo tempu",
                    "Atranda tai, kas juos domina",
                    "Paverčia laiką prie ekranų augimu"
                ],
                final: "Nes mokymosi ateitis neateina. Ji jau čia."
            },
            cta: "Pradėkite Ateitį Dabar"
        },
        ru: {
            back: "Назад в блог",
            readingTime: "5 мин чтения",
            title: "Будущее обучения уже здесь — позволяем ли мы детям упустить его?",
            subtitle: "Настоящий вопрос не в том, «Стоит ли пользоваться экранами?», а в том, «Для чего они используются?»",
            intro: {
                dilemma: "Сегодня родители сталкиваются с тихой дилеммой.",
                p1: "С одной стороны, мы хотим защитить детей от экранов. С другой — мир их будущего цифровой и интерактивный.",
                question: "Для чего они их используют?"
            },
            section1: {
                title: "1. Экраны — не проблема. Проблема в пассивности",
                desc: "Не все время за экраном одинаково. Интерактив превращает экраны в инструменты.",
                passive: {
                    title: "ПАССИВНОЕ ПОТРЕБЛЕНИЕ",
                    desc: "Бесконечный скроллинг. Мозг отключается.",
                    effect: "ДОФАМИН",
                    iconTags: ["Листание", "Просмотр", "Трата времени"]
                },
                active: {
                    title: "АКТИВНОЕ СОЗИДАНИЕ",
                    desc: "Решение задач, выбор, строительство. Мозг включается.",
                    effect: "НАВЫКИ",
                    iconTags: ["Кодинг", "Дизайн", "Логика"]
                }
            },
            section2: {
                title: "2. Часы после школы формируют личность",
                desc: "Школа заканчивается рано. Но обучение — нет.",
                problem: "Скука и потеря интереса происходят в свободное время.",
                solution: "Структурированное обучение дает вызовы и чувство прогресса.",
                grid: [
                    { title: "Безопасная среда", icon: "Shield" },
                    { title: "Реальные вызовы", icon: "Mountain" },
                    { title: "Чувство прогресса", icon: "Trophy" }
                ]
            },
            section3: {
                title: "3. Самый большой риск — не попробовать",
                desc: "Многие родители ждут падения оценок. Но современные платформы — это превентивная мера.",
                comparison: "Интерактивные курсы не заменяют школу. Они поддерживают ее.",
                insight: "Настоящая потеря — угасание любопытства, когда решения уже рядом."
            },
            conclusion: {
                title: "Спокойный шаг вперед",
                text: "Интерактивное обучение — это не давление. Это направление.",
                points: [
                    "Учатся в своем темпе",
                    "Исследуют интересные темы",
                    "Превращают экранное время в рост"
                ],
                final: "Потому что будущее обучения не наступает. Оно уже здесь."
            },
            cta: "Начать Будущее Сейчас"
        }
    };

    const t = content[language as keyof typeof content] || content.en;

    return (
        <div className="min-h-screen bg-black font-sans text-white pt-24 selection:bg-emerald-500/30">
            {/* Nav */}
            <nav className="fixed top-0 left-0 w-full z-50 bg-black/80 backdrop-blur-md border-b border-white/10 px-6 py-4 flex justify-between items-center">
                <Link to="/blog" className="flex items-center gap-2 text-sm font-bold uppercase tracking-widest text-gray-400 hover:text-white transition-colors">
                    <ArrowLeft className="w-4 h-4" />
                    {t.back}
                </Link>
                <div className="font-black text-xl tracking-tighter text-white">NEWMINDR.</div>
            </nav>

            <div className="container mx-auto px-6 py-12 max-w-4xl relative z-10">
                {/* Header */}
                <header className="mb-20 text-center">
                    <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 text-xs font-bold uppercase tracking-widest mb-6">
                        <Rocket className="w-3 h-3" />
                        {t.readingTime}
                    </div>
                    <h1 className="text-4xl md:text-6xl font-black mb-6 leading-tight tracking-tight text-transparent bg-clip-text bg-gradient-to-r from-white via-gray-200 to-gray-500">
                        {t.title}
                    </h1>
                    <p className="text-xl md:text-2xl font-medium text-gray-400 max-w-2xl mx-auto leading-relaxed">
                        {t.subtitle}
                    </p>
                </header>

                {/* Intro */}
                <section className="mb-24">
                    <div className="bg-gray-900/50 rounded-3xl p-8 border border-white/5 backdrop-blur-sm">
                        <p className="text-2xl font-serif italic text-gray-300 mb-6">"{t.intro.dilemma}"</p>
                        <p className="text-lg text-gray-400 leading-relaxed mb-8">{t.intro.p1}</p>
                        <div className="h-px w-full bg-gradient-to-r from-transparent via-emerald-500/50 to-transparent mb-8"></div>
                        <p className="text-3xl font-black text-white text-center">{t.intro.question}</p>
                    </div>
                </section>

                {/* Section 1: Interactive Comparison */}
                <section className="mb-32">
                    <div className="flex items-center gap-4 mb-8">
                        <span className="flex items-center justify-center w-8 h-8 rounded-full bg-emerald-500 text-black font-bold">1</span>
                        <h2 className="text-2xl font-bold">{t.section1.title}</h2>
                    </div>
                    <p className="text-gray-400 text-lg mb-12 ml-12">{t.section1.desc}</p>

                    <div className="grid md:grid-cols-2 gap-8">
                        {/* Passive Card */}
                        <div
                            className={`cursor-pointer rounded-3xl p-8 border transition-all duration-500 relative overflow-hidden group ${activeTab === 'passive' ? 'bg-red-950/30 border-red-500/50 shadow-[0_0_50px_-12px_rgba(239,68,68,0.3)]' : 'bg-gray-900 border-white/5 opacity-50 hover:opacity-100'
                                }`}
                            onClick={() => setActiveTab('passive')}
                        >
                            <div className="absolute inset-0 bg-noise opacity-10"></div>
                            <Smartphone className={`w-12 h-12 mb-6 ${activeTab === 'passive' ? 'text-red-500' : 'text-gray-500'}`} />
                            <h3 className="text-xl font-black uppercase mb-2 tracking-wider">{t.section1.passive.title}</h3>
                            <p className="text-gray-400 text-sm mb-6">{t.section1.passive.desc}</p>
                            <div className="flex flex-wrap gap-2 mb-8">
                                {t.section1.passive.iconTags.map((tag, i) => (
                                    <span key={i} className="text-[10px] font-bold uppercase px-2 py-1 rounded bg-white/5 text-gray-500">{tag}</span>
                                ))}
                            </div>
                            <div className={`mt-auto inline-flex items-center gap-2 text-xs font-bold uppercase tracking-widest ${activeTab === 'passive' ? 'text-red-400' : 'text-gray-600'}`}>
                                <Zap className="w-3 h-3" />
                                {t.section1.passive.effect}
                            </div>
                        </div>

                        {/* Active Card */}
                        <div
                            className={`cursor-pointer rounded-3xl p-8 border transition-all duration-500 relative overflow-hidden group ${activeTab === 'active' ? 'bg-emerald-950/30 border-emerald-500/50 shadow-[0_0_50px_-12px_rgba(16,185,129,0.3)]' : 'bg-gray-900 border-white/5 opacity-50 hover:opacity-100'
                                }`}
                            onClick={() => setActiveTab('active')}
                        >
                            <div className="absolute inset-0 bg-noise opacity-10"></div>
                            <Brain className={`w-12 h-12 mb-6 ${activeTab === 'active' ? 'text-emerald-500' : 'text-gray-500'}`} />
                            <h3 className="text-xl font-black uppercase mb-2 tracking-wider">{t.section1.active.title}</h3>
                            <p className="text-gray-400 text-sm mb-6">{t.section1.active.desc}</p>
                            <div className="flex flex-wrap gap-2 mb-8">
                                {t.section1.active.iconTags.map((tag, i) => (
                                    <span key={i} className="text-[10px] font-bold uppercase px-2 py-1 rounded bg-white/5 text-gray-500">{tag}</span>
                                ))}
                            </div>
                            <div className={`mt-auto inline-flex items-center gap-2 text-xs font-bold uppercase tracking-widest ${activeTab === 'active' ? 'text-emerald-400' : 'text-gray-600'}`}>
                                <Layers className="w-3 h-3" />
                                {t.section1.active.effect}
                            </div>
                        </div>
                    </div>
                </section>

                {/* Section 2 */}
                <section className="mb-32">
                    <div className="flex items-center gap-4 mb-8">
                        <span className="flex items-center justify-center w-8 h-8 rounded-full bg-emerald-500 text-black font-bold">2</span>
                        <h2 className="text-2xl font-bold">{t.section2.title}</h2>
                    </div>
                    <div className="bg-gradient-to-br from-gray-900 to-black border border-white/10 rounded-3xl p-8 md:p-12 relative overflow-hidden">
                        <div className="absolute top-0 right-0 w-64 h-64 bg-emerald-500/10 blur-[100px] rounded-full pointer-events-none"></div>

                        <div className="grid md:grid-cols-2 gap-12 relative z-10">
                            <div>
                                <h3 className="text-xl font-bold text-white mb-4">{t.section2.problem}</h3>
                                <p className="text-gray-400 leading-relaxed mb-6">{t.section2.desc}</p>
                                <div className="h-1 w-20 bg-emerald-500 rounded-full"></div>
                            </div>
                            <div className="space-y-4">
                                {t.section2.grid.map((item, i) => (
                                    <div key={i} className="bg-white/5 border border-white/5 rounded-xl p-4 flex items-center gap-4 hover:bg-white/10 transition-colors">
                                        <div className="w-10 h-10 rounded-full bg-emerald-500/20 flex items-center justify-center text-emerald-400">
                                            {i === 0 && <Shield className="w-5 h-5" />}
                                            {i === 1 && <Mountain className="w-5 h-5" />}
                                            {i === 2 && <Trophy className="w-5 h-5" />}
                                        </div>
                                        <span className="font-bold text-gray-200">{item.title}</span>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </section>

                {/* Section 3 */}
                <section className="mb-32">
                    <div className="flex items-center gap-4 mb-8">
                        <span className="flex items-center justify-center w-8 h-8 rounded-full bg-emerald-500 text-black font-bold">3</span>
                        <h2 className="text-2xl font-bold">{t.section3.title}</h2>
                    </div>

                    <div className="grid md:grid-cols-2 gap-12 items-center">
                        <div>
                            <p className="text-xl text-gray-300 leading-relaxed mb-8 border-l-4 border-emerald-500 pl-6">
                                {t.section3.desc}
                            </p>
                            <p className="text-gray-500">{t.section3.comparison}</p>
                        </div>
                        <div className="bg-gray-900 rounded-2xl p-8 border border-white/10 text-center">
                            <Monitor className="w-16 h-16 text-emerald-500 mx-auto mb-6 opacity-80" />
                            <p className="text-lg font-medium text-white mb-2">{t.section3.insight}</p>
                        </div>
                    </div>
                </section>

                {/* Conclusion */}
                <section className="text-center mb-24">
                    <div className="inline-block p-1 rounded-full bg-gradient-to-r from-emerald-500 to-cyan-500 mb-8">
                        <div className="bg-black rounded-full px-8 py-4">
                            <h3 className="text-2xl font-black text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 to-cyan-400 uppercase tracking-widest">
                                {t.conclusion.title}
                            </h3>
                        </div>
                    </div>

                    <p className="text-xl text-gray-400 max-w-2xl mx-auto mb-12">
                        {t.conclusion.text}
                    </p>

                    <div className="flex flex-wrap justify-center gap-4 mb-16">
                        {t.conclusion.points.map((point, i) => (
                            <span key={i} className="px-6 py-2 rounded-full border border-white/10 bg-white/5 text-sm font-bold text-gray-300">
                                {point}
                            </span>
                        ))}
                    </div>

                    <p className="text-3xl font-black text-white mb-12 max-w-3xl mx-auto leading-tight">
                        {t.conclusion.final}
                    </p>

                    <Link
                        to="/process"
                        className="group relative inline-flex items-center gap-3 bg-emerald-500 text-black px-10 py-5 rounded-full font-black uppercase tracking-widest hover:bg-emerald-400 transition-all hover:scale-105"
                    >
                        <span>{t.cta}</span>
                        <ArrowRight className="w-5 h-5 transition-transform group-hover:translate-x-1" />
                        <div className="absolute inset-0 rounded-full ring-4 ring-emerald-500/30 group-hover:ring-8 group-hover:ring-emerald-500/10 transition-all"></div>
                    </Link>
                </section>
            </div>

            {/* Background Grain/Effects */}
            <div className="fixed inset-0 pointer-events-none z-0">
                <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-emerald-500/5 rounded-full blur-[120px]" />
                <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-blue-500/5 rounded-full blur-[120px]" />
                <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-20 brightness-100 contrast-150" />
            </div>
        </div>
    );
}
