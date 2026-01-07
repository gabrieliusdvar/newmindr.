import { useState } from 'react';
import { ArrowLeft, Clock, Smartphone, Brain, Gamepad, Coffee, Sparkles, ArrowRight, Shield, XCircle, CheckCircle } from 'lucide-react';
import { Link } from 'react-router-dom';
import { useLanguage } from '../../contexts/LanguageContext';

export default function ArticleAfterSchool() {
    const { language } = useLanguage();
    const [activePath, setActivePath] = useState<number | null>(null);

    const content = {
        en: {
            back: "Back to Blog",
            title: "After School: The Most Important Hours of a Child’s Day",
            subtitle: "School ends early, but learning doesn’t stop. It’s not about replacing school — it’s about protecting time.",
            intro: {
                p1: "The bell rings at 3 PM. For the next 6-7 hours, your child is free. This 'gap' between school ending and bedtime is often where the most significant development happens - or doesn't.",
                p2: "Without structure, this time easily fills with endless scrolling, unstructured boredom, or passive consumption. But with the right direction, it can be a playground for curiosity, discipline, and real-world skills.",
                insight: "The goal isn't to add more work. It's to replace 'dead time' with 'growth time'."
            },
            timeline: {
                title: "After School Hours",
                schoolEnds: "School Ends",
                gap: "The Critical Gap",
                bedtime: "Bedtime"
            },
            interactiveTitle: "CHOOSE A PATH",
            interactiveSubtitle: "See how different after-school habits shape a child's future.",
            paths: [
                {
                    id: 1,
                    icon: Smartphone,
                    title: "The Consumer",
                    desc: "Unrestricted screen time & social media.",
                    result: "Anxiety & Apathy",
                    color: "bg-red-500",
                    details: "When the brain constantly consumes short-form content, attention span shrinks. Dopamine spikes replace genuine satisfaction."
                },
                {
                    id: 2,
                    icon: Gamepad,
                    title: "The Drifter",
                    desc: "Zero structure, random gaming.",
                    result: "Stagnation",
                    color: "bg-yellow-400",
                    details: "Relaxation is good, but 5 hours of 'nothing' leads to a loss of momentum. Habits are built in the gaps."
                },
                {
                    id: 3,
                    icon: Sparkles,
                    title: "The Creator",
                    desc: "Structured interactive learning.",
                    result: "Confidence & Skills",
                    color: "bg-emerald-500",
                    details: "Using time to build, code, or solve problems. It feels like play, but the brain is actively wiring itself for success."
                }
            ],
            conclusion: {
                title: "Structure Protects Potential",
                text: "We aren't fighting against fun. We are fighting against wasted potential.",
                final: "Give your child a safe, meaningful direction after school. Turn the 'gap' into their greatest advantage."
            },
            cta: "Explore Our After-School Programs"
        },
        lt: {
            back: "Grįžti į tinklaraštį",
            title: "Po pamokų: svarbiausios vaiko dienos valandos",
            subtitle: "Po pamokų vaikai turi daug laisvo laiko. Tai galimybė augti arba prarasti laiką. Svarbu ne pakeisti mokyklą, o apsaugoti laiką.",
            intro: {
                p1: "Skambutis nuskamba 15 val. Kitas 6-7 valandas jūsų vaikas laisvas. Šis tarpas tarp mokyklos ir miego dažnai yra laikas, kai vyksta didžiausias vystymasis - arba ne.",
                p2: "Be struktūros šis laikas lengvai užsipildo begaliniu naršymu, nuoboduliu ar pasyviu vartojimu. Tačiau su tinkama kryptimi tai gali tapti smalsumo, disciplinos ir tikrų įgūdžių žaidimų aikštele.",
                insight: "Tikslas nėra pridėti daugiau darbo. Tikslas yra pakeisti „mirusį laiką“ į „augimo laiką“."
            },
            timeline: {
                title: "Valandos po pamokų",
                schoolEnds: "Pamokos baigiasi",
                gap: "Svarbus tarpas",
                bedtime: "Miego laikas"
            },
            interactiveTitle: "PASIRINKITE KELIĄ",
            interactiveSubtitle: "Pamatykite, kaip skirtingi įpročiai po pamokų formuoja vaiko ateitį.",
            paths: [
                {
                    id: 1,
                    icon: Smartphone,
                    title: "Vartotojas",
                    desc: "Neribotas laikas prie ekranų.",
                    result: "Nerimas ir apatija",
                    color: "bg-red-500",
                    details: "Kai smegenys nuolat vartoja trumpą turinį, dėmesio koncentracija mažėja. Dopamino šuoliai pakeičia tikrą pasitenkinimą."
                },
                {
                    id: 2,
                    icon: Gamepad,
                    title: "Klaidžiotojas",
                    desc: "Jokios struktūros, atsitiktiniai žaidimai.",
                    result: "Stagnacija",
                    color: "bg-yellow-400",
                    details: "Poilsis yra gerai, bet 5 valandos „nieko“ lemia pagreičio praradimą. Įpročiai formuojasi tuštumose."
                },
                {
                    id: 3,
                    icon: Sparkles,
                    title: "Kūrėjas",
                    desc: "Struktūruotas interaktyvus mokymasis.",
                    result: "Pasitikėjimas ir įgūdžiai",
                    color: "bg-emerald-500",
                    details: "Laikas naudojamas kurti, programuoti ar spręsti problemas. Tai atrodo kaip žaidimas, bet smegenys aktyviai ruošiasi sėkmei."
                }
            ],
            conclusion: {
                title: "Struktūra apsaugo potencialą",
                text: "Mes nekovojame prieš pramogas. Mes kovojame prieš iššvaistytą potencialą.",
                final: "Suteikite vaikui saugią, prasmingą kryptį po pamokų. Paverskite šį laiką jų didžiausiu privalumu."
            },
            cta: "Atraskite mūsų popamokines programas"
        },
        ru: {
            back: "Назад в блог",
            title: "После школы: Самые важные часы дня",
            subtitle: "Школа заканчивается рано, но обучение не прекращается. Дело не в замене школы, а в защите времени.",
            intro: {
                p1: "Звонок звенит в 15:00. Следующие 6-7 часов ваш ребенок свободен. Этот промежуток между школой и сном часто становится временем самого значительного развития - или его отсутствия.",
                p2: "Без структуры это время легко заполняется бесконечным скроллингом или пассивным потреблением. Но с правильным направлением оно может стать площадкой для любопытства, дисциплины и реальных навыков.",
                insight: "Цель не в том, чтобы добавить работы. Цель - заменить «мертвое время» на «время роста»."
            },
            timeline: {
                title: "Часы после школы",
                schoolEnds: "Школа заканчивается",
                gap: "Критический пробел",
                bedtime: "Время сна"
            },
            interactiveTitle: "ВЫБЕРИТЕ ПУТЬ",
            interactiveSubtitle: "Посмотрите, как привычки после школы формируют будущее ребенка.",
            paths: [
                {
                    id: 1,
                    icon: Smartphone,
                    title: "Потребитель",
                    desc: "Неограниченное экранное время.",
                    result: "Тревога и Апатия",
                    color: "bg-red-500",
                    details: "Когда мозг постоянно потребляет короткий контент, концентрация внимания падает. Дофаминовые всплески заменяют истинное удовлетворение."
                },
                {
                    id: 2,
                    icon: Gamepad,
                    title: "Странник",
                    desc: "Нет структуры, случайные игры.",
                    result: "Застой",
                    color: "bg-yellow-400",
                    details: "Отдых - это хорошо, но 5 часов «ничегонеделания» ведут к потере импульса. Привычки формируются в промежутках."
                },
                {
                    id: 3,
                    icon: Sparkles,
                    title: "Создатель",
                    desc: "Структурированное интерактивное обучение.",
                    result: "Уверенность и Навыки",
                    color: "bg-emerald-500",
                    details: "Использование времени для создания, кодинга или решения проблем. Это похоже на игру, но мозг активно настраивается на успех."
                }
            ],
            conclusion: {
                title: "Структура защищает потенциал",
                text: "Мы не боремся против веселья. Мы боремся против растраченного потенциала.",
                final: "Дайте ребенку безопасное, значимое направление после школы. Превратите это время в их главное преимущество."
            },
            cta: "Изучите наши программы после школы"
        }
    };

    const t = content[language as keyof typeof content] || content.en;

    return (
        <div className="min-h-screen bg-gray-50 font-sans text-gray-900 pt-24 selection:bg-purple-200">
            {/* Nav */}
            <nav className="fixed top-0 left-0 w-full z-50 bg-white border-b-4 border-black px-6 py-4 flex justify-between items-center shadow-[0_4px_0_0_#e5e7eb]">
                <Link to="/blog" className="flex items-center gap-2 font-black uppercase tracking-widest hover:underline">
                    <ArrowLeft className="w-6 h-6 border-2 border-black rounded-full bg-white transition hover:scale-110" />
                    {t.back}
                </Link>
                <div className="font-black text-xl tracking-tighter">NEWMINDR.</div>
            </nav>

            <div className="container mx-auto px-6 py-12 max-w-4xl">
                {/* Hero */}
                <header className="mb-16 text-center">
                    <div className="inline-block px-4 py-1.5 bg-purple-100 text-purple-600 rounded-full text-xs font-black uppercase tracking-widest mb-6 border-2 border-purple-200">
                        {t.timeline.title}
                    </div>
                    <h1 className="text-4xl md:text-6xl font-black mb-6 leading-tight tracking-tighter text-gray-900">
                        {t.title}
                    </h1>
                    <p className="text-xl md:text-2xl font-medium text-gray-500 max-w-2xl mx-auto leading-relaxed">
                        {t.subtitle}
                    </p>
                </header>

                {/* Content */}
                <section className="mb-20 grid md:grid-cols-[1fr_250px] gap-12 items-start">
                    <div className="space-y-6 text-lg text-gray-700 leading-relaxed font-medium">
                        <p>{t.intro.p1}</p>
                        <p>{t.intro.p2}</p>
                        <div className="bg-purple-50 border-l-4 border-purple-500 p-6 my-8 rounded-r-xl">
                            <p className="font-bold text-purple-900 italic flex gap-3">
                                <Clock className="w-6 h-6 flex-shrink-0" />
                                "{t.intro.insight}"
                            </p>
                        </div>
                    </div>
                    <div className="hidden md:block bg-gray-900 text-white p-6 rounded-2xl -rotate-2 shadow-xl sticky top-24 border-4 border-gray-900">
                        <Clock className="w-12 h-12 mb-4 text-purple-400" />
                        <div className="font-mono text-sm space-y-4 opacity-90">
                            <div className="border-b border-gray-700 pb-2">
                                <span className="text-gray-500">15:00</span>
                                <p className="font-bold">{t.timeline.schoolEnds}</p>
                            </div>
                            <div className="border-b border-gray-700 pb-2">
                                <span className="text-yellow-500">15:30 - 18:30</span>
                                <p className="font-bold text-yellow-300">{t.timeline.gap}</p>
                            </div>
                            <div>
                                <span className="text-gray-500">21:00</span>
                                <p className="font-bold">{t.timeline.bedtime}</p>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Interactive Paths */}
                <section className="mb-20">
                    <div className="bg-gray-900 rounded-3xl p-8 md:p-12 text-white shadow-[12px_12px_0_0_#000] relative overflow-hidden border-4 border-black">
                        <div className="text-center mb-12 relative z-10">
                            <h2 className="text-3xl font-black uppercase tracking-widest mb-2 text-white">
                                {t.interactiveTitle}
                            </h2>
                            <p className="text-gray-400 font-bold">{t.interactiveSubtitle}</p>
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 relative z-10">
                            {t.paths.map((path) => (
                                <button
                                    key={path.id}
                                    onClick={() => setActivePath(activePath === path.id ? null : path.id)}
                                    className={`relative p-6 rounded-2xl border-4 transition-all duration-300 text-left h-full flex flex-col items-center text-center ${activePath === path.id
                                        ? 'bg-white text-gray-900 border-white scale-105 z-20 shadow-2xl'
                                        : 'bg-gray-800 border-gray-700 hover:bg-gray-700 hover:border-gray-500 text-gray-300 contrast-75'
                                        }`}
                                >
                                    <div className={`w-16 h-16 rounded-full ${path.color} flex items-center justify-center mb-4 border-2 border-black shadow-[4px_4px_0_0_rgba(0,0,0,0.3)]`}>
                                        <path.icon className="w-8 h-8 text-white" strokeWidth={2.5} />
                                    </div>
                                    <h3 className="text-xl font-black uppercase mb-2">{path.title}</h3>
                                    <p className={`text-sm font-bold mb-4 ${activePath === path.id ? 'text-gray-600' : 'text-gray-400'}`}>{path.desc}</p>

                                    {activePath === path.id && (
                                        <div className="animate-in slide-in-from-bottom duration-300">
                                            <div className="w-full h-px bg-gray-200 my-4"></div>
                                            <p className="text-sm font-medium leading-snug mb-3">{path.details}</p>
                                            <div className="inline-block px-3 py-1 bg-gray-900 text-white text-xs font-black uppercase rounded">
                                                = {path.result}
                                            </div>
                                        </div>
                                    )}

                                    {activePath !== path.id && (
                                        <div className="mt-auto opacity-50">
                                            <div className="w-8 h-8 rounded-full border-2 border-current flex items-center justify-center mx-auto">
                                                <ArrowRight className="w-4 h-4" />
                                            </div>
                                        </div>
                                    )}
                                </button>
                            ))}
                        </div>
                    </div>
                </section>

                {/* Conclusion */}
                <section className="bg-purple-400 text-purple-950 p-8 md:p-12 rounded-3xl border-4 border-black shadow-[8px_8px_0_0_#000]">
                    <div className="flex items-start gap-4">
                        <Shield className="w-12 h-12 flex-shrink-0" strokeWidth={2.5} />
                        <div>
                            <h3 className="text-2xl font-black uppercase mb-4">{t.conclusion.title}</h3>
                            <p className="text-xl font-bold mb-6 leading-relaxed">
                                {t.conclusion.text}
                            </p>
                            <p className="text-lg font-medium leading-relaxed opacity-90">
                                {t.conclusion.final}
                            </p>
                        </div>
                    </div>
                </section>

                <div className="mt-16 text-center">
                    <Link to="/process" className="inline-flex items-center gap-3 bg-gray-900 text-white px-8 py-4 rounded-xl font-black uppercase tracking-widest hover:bg-purple-500 transition-all hover:-translate-y-1 shadow-lg border-2 border-black">
                        {t.cta}
                        <ArrowRight className="w-5 h-5" />
                    </Link>
                </div>
            </div>
        </div>
    );
}
