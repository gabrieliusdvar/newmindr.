import { useState } from 'react';
import { ArrowLeft, Gamepad2, Brain, Target, Repeat, XCircle, AlertTriangle, CheckCircle2, ArrowRight, Sparkles, Layers } from 'lucide-react';
import { Link } from 'react-router-dom';
import { useLanguage } from '../../contexts/LanguageContext';

export default function ArticlePlayToLearn() {
    const { language } = useLanguage();
    const [activeComparison, setActiveComparison] = useState<'game' | 'school'>('game');

    const content = {
        en: {
            back: "Back to Blog",
            readingTime: "5 min read",
            title: "What a Child Really Learns by Playing (And Why It’s More Important Than Grades)",
            subtitle: "Play is not a waste of time. It is the purest form of learning.",
            intro: {
                p1: "Many parents know this situation.",
                p2: "A child can play games for hours. But as soon as they need to open a book — motivation vanishes.",
                question: "Are games doing harm?",
                answer: "But perhaps it's worth asking differently. Play is not a waste of time. It is a form of learning."
            },
            section1: {
                title: "When a child plays, they are not passive",
                items: [
                    { title: "Decisions", desc: "Making constant choices", icon: "Target" },
                    { title: "Problem Solving", desc: "Overcoming obstacles", icon: "Brain" },
                    { title: "Planning", desc: "Thinking steps ahead", icon: "Layers" },
                    { title: "Resilience", desc: "Learning from mistakes", icon: "Repeat" }
                ],
                quote: "In games, there is no punishment for trying. There is only feedback."
            },
            section2: {
                title: "Why do children learn faster in games?",
                toggleGame: "IN GAMES",
                toggleSchool: "IN SCHOOL",
                gamePoints: [
                    "You made a mistake — you try again immediately",
                    "You reached the goal — you get an instant reward",
                    "You see progress — you want to continue"
                ],
                schoolPoints: [
                    "A mistake often means a bad grade",
                    "The pace is the same for everyone",
                    "Progress is not always visible"
                ],
                insight: "Children's brains naturally choose what makes them feel safe while learning."
            },
            section3: {
                title: "Not All Play Is Created Equal",
                killTime: {
                    title: "Killing Time",
                    desc: "Mindless clicking, passive consumption, no challenge.",
                    icon: "XCircle"
                },
                develop: {
                    title: "Developing Thinking",
                    desc: "Solving real tasks, logic, patience, independence.",
                    icon: "CheckCircle2"
                },
                statement: "This is not an escape from reality. This is preparation for it."
            },
            section4: {
                title: "Why grades are not the best success indicator",
                text: "Grades show what a child remembered for that moment. But they do not show:",
                skills: [
                    "If the child knows HOW to learn",
                    "If they are not afraid to try",
                    "If they can think independently"
                ],
                summary: "Gamified, interactive learning helps develop exactly these abilities — those that last a lifetime."
            },
            conclusion: {
                title: "What does this mean for parents?",
                text: "It doesn't mean giving up books. It means expanding how we learn.",
                cta: "Experience Better Learning"
            }
        },
        lt: {
            back: "Grįžti į tinklaraštį",
            readingTime: "5 min skaitymas",
            title: "Ką vaikas iš tikrųjų išmoksta žaisdamas (ir kodėl tai svarbiau nei pažymiai)",
            subtitle: "Žaidimas nėra laiko švaistymas. Tai — gryniausia mokymosi forma.",
            intro: {
                p1: "Daugelis tėvų pažįsta šią situaciją.",
                p2: "Vaikas valandų valandas gali žaisti žaidimus. Bet vos tik reikia atsiversti knygą — motyvacija dingsta.",
                question: "Ar žaidimai daro žalą?",
                answer: "Tačiau gal verta paklausti kitaip. Žaidimas nėra laiko švaistymas. Jis — mokymosi forma."
            },
            section1: {
                title: "Kai vaikas žaidžia, jis nėra pasyvus",
                items: [
                    { title: "Sprendimai", desc: "Nuolatinis pasirinkimų priėmimas", icon: "Target" },
                    { title: "Problemos", desc: "Kliūčių įveikimas čia ir dabar", icon: "Brain" },
                    { title: "Planavimas", desc: "Kelių žingsnių numatymas", icon: "Layers" },
                    { title: "Klaidos", desc: "Mokymasis iš klaidų be baimės", icon: "Repeat" }
                ],
                quote: "Žaidimuose nėra bausmės už bandymą. Yra tik grįžtamasis ryšys."
            },
            section2: {
                title: "Kodėl žaidimuose vaikai mokosi greičiau?",
                toggleGame: "ŽAIDIMUOSE",
                toggleSchool: "MOKYKLOJE (DAŽNAI)",
                gamePoints: [
                    "Suklydai — bandai dar kartą iškart",
                    "Pasiekei tikslą — gauni atlygį",
                    "Matai progresą — nori tęsti"
                ],
                schoolPoints: [
                    "Klaida reiškia blogą pažymį",
                    "Tempas visiems vienodas",
                    "Progresas ne visada matomas"
                ],
                insight: "Vaikų smegenys natūraliai renkasi tai, kas leidžia jaustis saugiai mokantis."
            },
            section3: {
                title: "Svarbu atskirti du dalykus",
                killTime: {
                    title: "„Nužudyti laiką“",
                    desc: "Pasyvus spaudinėjimas, jokio iššūkio, laiko stūmimas.",
                    icon: "XCircle"
                },
                develop: {
                    title: "Lavinti mąstymą",
                    desc: "Realios užduotys, loginis mąstymas, kantrybė.",
                    icon: "CheckCircle2"
                },
                statement: "Tai nėra pabėgimas nuo realybės. Tai — pasiruošimas jai."
            },
            section4: {
                title: "Kodėl pažymiai nėra geriausias rodiklis",
                text: "Pažymiai parodo, ką vaikas prisiminė tam momentui. Tačiau jie neparodo:",
                skills: [
                    "Ar vaikas moka mokytis",
                    "Ar nebijo bandyti",
                    "Ar geba galvoti savarankiškai"
                ],
                summary: "Žaidybinis, interaktyvus mokymasis padeda ugdyti būtent šiuos gebėjimus — tuos, kurie išlieka visam gyvenimui."
            },
            conclusion: {
                title: "Ką tai reiškia tėvams?",
                text: "Tai nereiškia, kad reikia atsisakyti knygų. Tai reiškia, kad verta išplėsti mokymosi būdus.",
                cta: "Išbandyti Interaktyvų Mokymąsi"
            }
        },
        ru: {
            back: "Назад в блог",
            readingTime: "5 мин чтения",
            title: "Чему на самом деле учится ребенок в игре (и почему это важнее оценок)",
            subtitle: "Игра — это не пустая трата времени. Это чистая форма обучения.",
            intro: {
                p1: "Многим родителям знакома эта ситуация.",
                p2: "Ребенок может часами играть в игры. Но как только нужно открыть книгу — мотивация исчезает.",
                question: "Вредят ли игры?",
                answer: "Но, возможно, стоит спросить иначе. Игра — это не пустая трата времени. Это форма обучения."
            },
            section1: {
                title: "Когда ребенок играет, он не пассивен",
                items: [
                    { title: "Решения", desc: "Постоянный выбор действий", icon: "Target" },
                    { title: "Проблемы", desc: "Преодоление препятствий", icon: "Brain" },
                    { title: "Планирование", desc: "Мышление на шаги вперед", icon: "Layers" },
                    { title: "Ошибки", desc: "Учеба на ошибках без страха", icon: "Repeat" }
                ],
                quote: "В играх нет наказания за попытку. Есть только обратная связь."
            },
            section2: {
                title: "Почему в играх дети учатся быстрее?",
                toggleGame: "В ИГРАХ",
                toggleSchool: "В ШКОЛЕ",
                gamePoints: [
                    "Ошибся — пробуешь снова немедленно",
                    "Достиг цели — получаешь награду",
                    "Видишь прогресс — хочешь продолжать"
                ],
                schoolPoints: [
                    "Ошибка означает плохую оценку",
                    "Темп одинаков для всех",
                    "Прогресс не всегда виден"
                ],
                insight: "Детский мозг естественно выбирает то, что позволяет чувствовать себя в безопасности."
            },
            section3: {
                title: "Важно различать две вещи",
                killTime: {
                    title: "«Убить время»",
                    desc: "Бездумное нажатие, пассивность, отсутствие вызова.",
                    icon: "XCircle"
                },
                develop: {
                    title: "Развивать мышление",
                    desc: "Реальные задачи, логика, терпение, самостоятельность.",
                    icon: "CheckCircle2"
                },
                statement: "Это не побег от реальности. Это подготовка к ней."
            },
            section4: {
                title: "Почему оценки — не лучший показатель",
                text: "Оценки показывают, что ребенок запомнил. Но они не показывают:",
                skills: [
                    "Умеет ли ребенок учиться",
                    "Не боится ли пробовать",
                    "Способен ли думать самостоятельно"
                ],
                summary: "Игровое, интерактивное обучение помогает развить именно эти способности — те, которые остаются на всю жизнь."
            },
            conclusion: {
                title: "Что это значит для родителей?",
                text: "Это не значит отказаться от книг. Это значит расширить способы обучения.",
                cta: "Попробовать Интерактив"
            }
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
                        <Gamepad2 className="w-3 h-3" />
                        {t.readingTime}
                    </div>
                    <h1 className="text-4xl md:text-6xl font-black mb-6 leading-tight tracking-tight text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 via-white to-emerald-600">
                        {t.title}
                    </h1>
                    <p className="text-xl md:text-2xl font-medium text-gray-400 max-w-2xl mx-auto leading-relaxed">
                        {t.subtitle}
                    </p>
                </header>

                {/* Intro */}
                <section className="mb-24">
                    <div className="bg-gradient-to-br from-gray-900 via-gray-900 to-black rounded-3xl p-8 md:p-12 border border-white/5 shadow-2xl relative overflow-hidden">
                        <div className="absolute top-0 right-0 w-64 h-64 bg-emerald-500/5 blur-[80px] rounded-full pointer-events-none"></div>

                        <p className="text-xl text-gray-300 mb-6 font-medium">{t.intro.p1}</p>
                        <p className="text-lg text-gray-400 leading-relaxed mb-8">{t.intro.p2}</p>

                        <div className="flex flex-col md:flex-row items-start md:items-center gap-6 p-6 rounded-2xl bg-white/5 border border-white/5">
                            <AlertTriangle className="w-8 h-8 text-yellow-500 flex-shrink-0" />
                            <div>
                                <p className="text-lg font-bold text-white mb-1">{t.intro.question}</p>
                                <p className="text-emerald-400 font-medium italic">"{t.intro.answer}"</p>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Section 1: Active Skills */}
                <section className="mb-32">
                    <h2 className="text-3xl font-black text-center mb-12">{t.section1.title}</h2>
                    <div className="grid md:grid-cols-2 gap-6">
                        {t.section1.items.map((item, i) => (
                            <div key={i} className="group p-6 rounded-2xl bg-gray-900 border border-white/10 hover:border-emerald-500/50 hover:bg-emerald-950/20 transition-all duration-300">
                                <div className="flex items-center gap-4 mb-4">
                                    <div className="w-12 h-12 rounded-full bg-emerald-500/10 flex items-center justify-center text-emerald-400 group-hover:scale-110 transition-transform">
                                        {item.icon === 'Target' && <Target className="w-6 h-6" />}
                                        {item.icon === 'Brain' && <Brain className="w-6 h-6" />}
                                        {item.icon === 'Layers' && <Layers className="w-6 h-6" />}
                                        {item.icon === 'Repeat' && <Repeat className="w-6 h-6" />}
                                    </div>
                                    <h3 className="text-xl font-bold text-white">{item.title}</h3>
                                </div>
                                <p className="text-gray-400 pl-16">{item.desc}</p>
                            </div>
                        ))}
                    </div>
                    <div className="mt-8 text-center bg-emerald-500/10 border border-emerald-500/20 rounded-full py-4 px-8 inline-block mx-auto">
                        <p className="text-emerald-400 font-bold">{t.section1.quote}</p>
                    </div>
                </section>

                {/* Section 2: Comparison Interactive */}
                <section className="mb-32">
                    <h2 className="text-3xl font-black text-center mb-12">{t.section2.title}</h2>

                    <div className="bg-gray-900 rounded-3xl border border-white/10 overflow-hidden">
                        <div className="flex border-b border-white/10">
                            <button
                                onClick={() => setActiveComparison('game')}
                                className={`flex-1 py-6 text-sm font-black uppercase tracking-widest transition-all ${activeComparison === 'game' ? 'bg-emerald-500 text-black' : 'hover:bg-white/5 text-gray-500'}`}
                            >
                                {t.section2.toggleGame}
                            </button>
                            <button
                                onClick={() => setActiveComparison('school')}
                                className={`flex-1 py-6 text-sm font-black uppercase tracking-widest transition-all ${activeComparison === 'school' ? 'bg-blue-500 text-black' : 'hover:bg-white/5 text-gray-500'}`}
                            >
                                {t.section2.toggleSchool}
                            </button>
                        </div>

                        <div className="p-12 min-h-[300px] flex items-center justify-center relative">
                            {/* Game Content */}
                            <div className={`transition-all duration-500 absolute w-full px-12 ${activeComparison === 'game' ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-10 pointer-events-none'}`}>
                                <div className="flex flex-col gap-6">
                                    {t.section2.gamePoints.map((point, i) => (
                                        <div key={i} className="flex items-center gap-4 text-lg font-medium text-emerald-100">
                                            <CheckCircle2 className="w-6 h-6 text-emerald-500 flex-shrink-0" />
                                            <span>{point}</span>
                                        </div>
                                    ))}
                                </div>
                                <div className="mt-8 pt-8 border-t border-white/10 text-center text-sm text-emerald-400/70 font-bold uppercase tracking-widest">
                                    DOPAMINE • PROGRESS • FUN
                                </div>
                            </div>

                            {/* School Content */}
                            <div className={`transition-all duration-500 absolute w-full px-12 ${activeComparison === 'school' ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-10 pointer-events-none'}`}>
                                <div className="flex flex-col gap-6">
                                    {t.section2.schoolPoints.map((point, i) => (
                                        <div key={i} className="flex items-center gap-4 text-lg font-medium text-blue-100">
                                            <div className="w-6 h-6 rounded-full border-2 border-blue-500/50 flex items-center justify-center flex-shrink-0">
                                                <span className="w-2 h-2 rounded-full bg-blue-500"></span>
                                            </div>
                                            <span>{point}</span>
                                        </div>
                                    ))}
                                </div>
                                <div className="mt-8 pt-8 border-t border-white/10 text-center text-sm text-blue-400/70 font-bold uppercase tracking-widest">
                                    GRADES • STANDARDS • PRESSURE
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Section 3: Kill Time vs Develop */}
                <section className="mb-32">
                    <h2 className="text-3xl font-black text-center mb-12">{t.section3.title}</h2>
                    <div className="grid md:grid-cols-2 gap-8">
                        <div className="p-8 rounded-3xl bg-red-950/10 border border-red-500/20 opacity-50 text-center">
                            <XCircle className="w-16 h-16 text-red-500 mx-auto mb-6" />
                            <h3 className="text-xl font-bold text-red-400 mb-2">{t.section3.killTime.title}</h3>
                            <p className="text-gray-500">{t.section3.killTime.desc}</p>
                        </div>
                        <div className="p-8 rounded-3xl bg-emerald-950/30 border border-emerald-500/50 scale-105 shadow-[0_0_50px_-10px_rgba(16,185,129,0.2)] text-center relative overflow-hidden">
                            <div className="absolute inset-0 bg-emerald-500/5 animate-pulse"></div>
                            <CheckCircle2 className="w-16 h-16 text-emerald-500 mx-auto mb-6 relative z-10" />
                            <h3 className="text-xl font-bold text-emerald-400 mb-2 relative z-10">{t.section3.develop.title}</h3>
                            <p className="text-gray-300 relative z-10">{t.section3.develop.desc}</p>
                        </div>
                    </div>
                    <p className="text-center mt-12 text-2xl font-serif text-white italic">"{t.section3.statement}"</p>
                </section>

                {/* Section 4: Grades vs Skills */}
                <section className="mb-32 flex flex-col items-center">
                    <div className="bg-white/5 rounded-3xl p-8 md:p-12 w-full border border-white/10">
                        <h2 className="text-2xl font-bold mb-8 text-center">{t.section4.title}</h2>
                        <div className="flex flex-col gap-6">
                            <p className="text-gray-400 text-center mb-4">{t.section4.text}</p>
                            <div className="grid gap-4 max-w-lg mx-auto w-full">
                                {t.section4.skills.map((skill, i) => (
                                    <div key={i} className="bg-black/40 p-4 rounded-xl border border-white/5 flex items-center gap-4">
                                        <Sparkles className="w-5 h-5 text-emerald-500" />
                                        <span className="font-bold text-gray-200">{skill}</span>
                                    </div>
                                ))}
                            </div>
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

                    <Link
                        to="/process"
                        className="group relative inline-flex items-center gap-3 bg-emerald-500 text-black px-10 py-5 rounded-full font-black uppercase tracking-widest hover:bg-emerald-400 transition-all hover:scale-105"
                    >
                        <span>{t.conclusion.cta}</span>
                        <ArrowRight className="w-5 h-5 transition-transform group-hover:translate-x-1" />
                        <div className="absolute inset-0 rounded-full ring-4 ring-emerald-500/30 group-hover:ring-8 group-hover:ring-emerald-500/10 transition-all"></div>
                    </Link>
                </section>
            </div>

            {/* Background Effects */}
            <div className="fixed inset-0 pointer-events-none z-0">
                <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-emerald-500/5 rounded-full blur-[120px]" />
                <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-purple-500/5 rounded-full blur-[120px]" />
                <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-20 brightness-100 contrast-150" />
            </div>
        </div>
    );
}
