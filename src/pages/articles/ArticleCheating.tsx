import { useState } from 'react';
import { ArrowLeft, Bug, Shield, Search, Zap, Heart, Monitor, Terminal, CheckCircle2, AlertTriangle } from 'lucide-react';
import { Link } from 'react-router-dom';
import { useLanguage } from '../../contexts/LanguageContext';

export default function ArticleCheating() {
    const { language } = useLanguage();
    const [activePoint, setActivePoint] = useState<number | null>(null);

    const content = {
        en: {
            back: "Back to Blog",
            title: "Why Kids Cheat Instead of Learning",
            subtitle: "They aren't trying to break the rules. They're trying to survive the system.",
            intro: {
                p1: "Cheating isn’t a new problem—but why kids cheat has changed. In a world of instant answers, constant comparison, and pressure to perform, many children aren’t trying to “break the rules.” They’re trying to survive the system.",
                p2: "If you run an interactive courses website, understanding this is critical. Cheating is rarely about laziness. It’s usually a signal that learning has broken down somewhere earlier.",
                insight: "Key Insight: Kids don’t cheat because they want easy wins. They cheat because they’re afraid to fail publicly."
            },
            interactiveTitle: "DEBUGGING THE CLASSROOM",
            interactiveSubtitle: "Click on a system error to view the root cause analysis.",
            points: [
                {
                    id: 1,
                    icon: Shield,
                    title: "System Error: Unsafe Environment",
                    symptom: "Kids Cheat When Learning Feels Unsafe",
                    diagnosis: "Wrong answer = embarrassment. Low score = punishment.",
                    fix: "When the environment feels unforgiving, cheating becomes a defense mechanism. Interactive learning shifts focus from 'being right' to 'exploring'."
                },
                {
                    id: 2,
                    icon: Search,
                    title: "System Error: Meaning Not Found",
                    symptom: "Memorization Without Meaning",
                    diagnosis: "Why struggle to understand if I just need the right answer?",
                    fix: "When learning is just remembering facts, kids optimize for results. Shift focus to: trying, adjusting, exploring, experimenting."
                },
                {
                    id: 3,
                    icon: AlertTriangle,
                    title: "System Error: External Pressure",
                    symptom: "Pressure from Adults",
                    diagnosis: "Grades over growth. Speed over mastery.",
                    fix: "When adults reward outcomes more than effort, kids learn that 'how' doesn't matter. That's a system problem, not a kid problem."
                },
                {
                    id: 4,
                    icon: Zap,
                    title: "System Error: Low Engagement",
                    symptom: "Boredom Is a Huge Factor",
                    diagnosis: "Bored kids disengage quietly—by copying or Googling.",
                    fix: "Engagement reduces cheating more effectively than punishment. Branching paths, challenges, immediate feedback."
                },
                {
                    id: 5,
                    icon: Heart,
                    title: "System Error: No Ownership",
                    symptom: "Lack of Ownership",
                    diagnosis: "Learning happens TO them, not WITH them.",
                    fix: "When they control pace and make decisions, cheating loses its appeal. Why cheat when the journey is yours?"
                },
                {
                    id: 6,
                    icon: Monitor,
                    title: "System Error: Design Flaw",
                    symptom: "Technology Isn’t the Enemy—Design Is",
                    diagnosis: "Passive videos & one-answer quizzes = Cheating bait.",
                    fix: "Good design: simulations, problem-solving, retries without shame. Build around curiosity, not compliance."
                }
            ],
            conclusion: {
                title: "The Real Question",
                text: "The real question isn't 'Why do kids cheat?' It is: 'What is our learning experience teaching them to value?'",
                list: ["Speed over understanding?", "Scores over curiosity?", "Perfection over progress?"],
                final: "Kids don’t wake up wanting to cheat. They wake up wanting to feel capable, accepted, and successful. Design learning experiences that meet those needs—and cheating stops being a problem you have to fight."
            }
        },
        lt: {
            back: "Grįžti į tinklaraštį",
            title: "Kodėl vaikai sukčiauja užuot mokęsi",
            subtitle: "Jie nebando pažeisti taisyklių. Jie bando išgyventi sistemoje.",
            intro: {
                p1: "Sukčiavimas nėra nauja problema, tačiau priežastys pasikeitė. Pasaulyje, kuriame atsakymai pasiekiami akimirksniu, nuolat lyginama su kitais ir spaudžiama siekti rezultatų, daugelis vaikų nebando „pažeisti taisyklių“. Jie bando išgyventi sistemoje.",
                p2: "Jei kuriate interaktyvius kursus, suprasti tai yra gyvybiškai svarbu. Sukčiavimas retai kyla iš tinginystės. Paprastai tai signalas, kad mokymosi procesas kažkur nutrūko.",
                insight: "Pagrindinė įžvalga: Vaikai sukčiauja ne todėl, kad nori lengvų pergalių. Jie sukčiauja, nes bijo viešai suklysti."
            },
            interactiveTitle: "KLASĖS DERINIMAS (DEBUGGING)",
            interactiveSubtitle: "Spustelėkite sistemos klaidą, kad pamatytumėte priežasčių analizę.",
            points: [
                {
                    id: 1,
                    icon: Shield,
                    title: "Sistemos klaida: Nesaugi aplinka",
                    symptom: "Vaikai sukčiauja, kai jaučiasi nesaugūs",
                    diagnosis: "Klaidingas atsakymas = gėda. Žemas balas = bausmė.",
                    fix: "Kai aplinka neatleidžia klaidų, sukčiavimas tampa gynybos mechanizmu. Interaktyvus mokymasis perkelia dėmesį nuo „buvimo teisiu“ į „tyrinėjimą“."
                },
                {
                    id: 2,
                    icon: Search,
                    title: "Sistemos klaida: Nėra prasmės",
                    symptom: "Įsiminimas be prasmės",
                    diagnosis: "Kam vargti suprantant, jei reikia tik teisingo atsakymo?",
                    fix: "Kai mokymasis tėra faktų kartojimas, vaikai optimizuoja rezultatą. Keiskite fokusą į: bandymą, derinimą, tyrinėjimą, eksperimentavimą."
                },
                {
                    id: 3,
                    icon: AlertTriangle,
                    title: "Sistemos klaida: Išorinis spaudimas",
                    symptom: "Suaugusiųjų spaudimas",
                    diagnosis: "Pažymiai svarbiau už augimą. Greitis svarbiau už meistriškumą.",
                    fix: "Kai suaugusieji vertina rezultatą labiau nei pastangas, vaikai išmoksta, kad „kaip“ nesvarbu. Tai sistemos problema."
                },
                {
                    id: 4,
                    icon: Zap,
                    title: "Sistemos klaida: Mažas įsitraukimas",
                    symptom: "Nuobodulys yra didžiulis faktorius",
                    diagnosis: "Nuobodžiaujantys vaikai atsijungia tyliai – kopijuodami ar „gūglindami“.",
                    fix: "Įsitraukimas mažina sukčiavimą efektyviau nei bausmės. Sprendimai, iššūkiai, grįžtamasis ryšys."
                },
                {
                    id: 5,
                    icon: Heart,
                    title: "Sistemos klaida: Nėra nuosavybės",
                    symptom: "Atsakomybės trūkumas",
                    diagnosis: "Mokymasis vyksta JIEMS, o ne SU JAIS.",
                    fix: "Kai jie kontroliuoja tempą ir priima sprendimus, sukčiavimas praranda prasmę. Kam sukčiauti, kai kelionė priklauso tau?"
                },
                {
                    id: 6,
                    icon: Monitor,
                    title: "Sistemos klaida: Dizaino trūkumas",
                    symptom: "Technologijos nėra priešas – dizainas yra",
                    diagnosis: "Pasyvūs vaizdo įrašai ir vieno atsakymo testai = masalas sukčiavimui.",
                    fix: "Geras dizainas: simuliacijos, problemų sprendimas, bandymai be gėdos. Kurkite smalsumui, ne paklusnumui."
                }
            ],
            conclusion: {
                title: "Tikrasis Klausimas",
                text: "Tikrasis klausimas nėra „Kodėl vaikai sukčiauja?“. Tai yra: „Ką mūsų mokymosi patirtis moko juos vertinti?“",
                list: ["Greitį vietoj supratimo?", "Balus vietoj smalsumo?", "Tobulumą vietoj progreso?"],
                final: "Vaikai nepabunda norėdami sukčiauti. Jie pabunda norėdami jaustis gabūs, priimti ir sėkmingi. Sukurkite mokymosi patirtis, kurios atliepia šiuos poreikius – ir sukčiavimas taps nereikalingas."
            }
        },
        ru: {
            back: "Назад в блог",
            title: "Почему дети списывают вместо того, чтобы учиться",
            subtitle: "Они не пытаются нарушить правила. Они пытаются выжить в системе.",
            intro: {
                p1: "Списывание — проблема не новая, но причины изменились. В мире мгновенных ответов, постоянного сравнения и давления многие дети не пытаются «нарушить правила». Они пытаются выжить в системе.",
                p2: "Если вы создаете интерактивные курсы, понимание этого критически важно. Списывание редко связано с ленью. Обычно это сигнал, что процесс обучения где-то сломался.",
                insight: "Ключевой инсайт: Дети списывают не потому, что хотят легких побед. Они списывают, потому что боятся публичного провала."
            },
            interactiveTitle: "ОТЛАДКА КЛАССА",
            interactiveSubtitle: "Нажмите на системную ошибку, чтобы увидеть анализ причин.",
            points: [
                {
                    id: 1,
                    icon: Shield,
                    title: "Ошибка системы: Небезопасная среда",
                    symptom: "Страх ошибки",
                    diagnosis: "Неверный ответ = смущение. Низкий балл = наказание.",
                    fix: "Когда среда не прощает ошибок, списывание становится защитой. Интерактивное обучение смещает фокус с «быть правым» на «исследование»."
                },
                {
                    id: 2,
                    icon: Search,
                    title: "Ошибка системы: Нет смысла",
                    symptom: "Запоминание без понимания",
                    diagnosis: "Зачем мучиться, если нужен только правильный ответ?",
                    fix: "Когда учеба — это повторение фактов, дети оптимизируют результат. Сместите фокус на: пробы, настройки, исследования, эксперименты."
                },
                {
                    id: 3,
                    icon: AlertTriangle,
                    title: "Ошибка системы: Давление",
                    symptom: "Давление взрослых",
                    diagnosis: "Оценки важнее роста. Скорость важнее мастерства.",
                    fix: "Когда взрослые награждают за результат, а не за усилия, дети учатся, что «как» не важно. Это проблема системы."
                },
                {
                    id: 4,
                    icon: Zap,
                    title: "Ошибка системы: Скука",
                    symptom: "Низкая вовлеченность",
                    diagnosis: "Скучающие дети отключаются тихо — копируя или гугля.",
                    fix: "Вовлеченность снижает списывание лучше наказаний. Ветвящиеся пути, вызовы, мгновенная обратная связь."
                },
                {
                    id: 5,
                    icon: Heart,
                    title: "Ошибка системы: Нет владения",
                    symptom: "Отсутствие ответственности",
                    diagnosis: "Обучение происходит С НИМИ, а не У НИХ.",
                    fix: "Когда они контролируют темп и принимают решения, списывание теряет смысл. Зачем списывать, когда это твой путь?"
                },
                {
                    id: 6,
                    icon: Monitor,
                    title: "Ошибка системы: Ошибка дизайна",
                    symptom: "Технологии — не враг",
                    diagnosis: "Пассивные видео и тесты с одним ответом = приманка для списывания.",
                    fix: "Хороший дизайн: симуляции, решение проблем, попытки без стыда. Стройте на любопытстве, а не послушании."
                }
            ],
            conclusion: {
                title: "Настоящий вопрос",
                text: "Настоящий вопрос не «Почему дети списывают?». А: «Что наш опыт обучения учит их ценить?»",
                list: ["Скорость вместо понимания?", "Баллы вместо любопытства?", "Идеал вместо прогресса?"],
                final: "Дети не просыпаются с желанием списать. Они хотят чувствовать себя способными и успешными. Создайте обучение, отвечающее этим потребностям — и проблема исчезнет."
            }
        }
    };

    const t = content[language as keyof typeof content] || content.en;

    return (
        <div className="min-h-screen bg-neutral-50 font-sans text-gray-900 pt-20">
            {/* Nav */}
            <nav className="fixed top-0 left-0 w-full z-50 bg-white/80 backdrop-blur-md border-b border-gray-200 px-6 py-4 flex justify-between items-center">
                <Link to="/blog" className="flex items-center gap-2 font-bold uppercase tracking-widest hover:text-emerald-500 transition-colors text-xs">
                    <ArrowLeft className="w-4 h-4" />
                    {t.back}
                </Link>
                <div className="font-black text-lg tracking-tighter">NEWMINDR</div>
            </nav>

            <div className="container mx-auto px-6 py-12 max-w-4xl">
                {/* Hero */}
                <header className="mb-16">
                    <div className="inline-block px-3 py-1 bg-red-100 text-red-600 rounded-full text-xs font-black uppercase tracking-widest mb-6">
                        System Failure
                    </div>
                    <h1 className="text-4xl md:text-6xl font-black mb-6 uppercase leading-[0.9] tracking-tighter text-gray-900">
                        {t.title}
                    </h1>
                    <p className="text-xl md:text-2xl font-medium text-gray-500 max-w-2xl leading-relaxed">
                        {t.subtitle}
                    </p>
                </header>

                {/* Intro */}
                <section className="mb-20 grid md:grid-cols-[1fr_300px] gap-12 items-start">
                    <div className="space-y-6 text-lg text-gray-700 leading-relaxed font-medium">
                        <p>{t.intro.p1}</p>
                        <p>{t.intro.p2}</p>
                        <div className="bg-emerald-50 border-l-4 border-emerald-500 p-6 my-8">
                            <p className="font-bold text-emerald-900 italic">
                                "{t.intro.insight}"
                            </p>
                        </div>
                    </div>
                    <div className="bg-gray-900 text-white p-6 rounded-2xl rotate-2 shadow-xl sticky top-24">
                        <Terminal className="w-8 h-8 mb-4 text-emerald-400" />
                        <div className="font-mono text-sm space-y-2 opacity-80">
                            <p className="text-red-400">$ error: student_engagement_404</p>
                            <p className="text-yellow-400">$ warning: fear_level_critical</p>
                            <p className="text-emerald-400">$ run: interactive_patch.exe</p>
                            <p>Loading...</p>
                        </div>
                    </div>
                </section>

                {/* Interactive Debugger */}
                <section className="mb-20">
                    <div className="bg-gray-900 rounded-3xl p-8 md:p-12 text-white shadow-2xl relative overflow-hidden">
                        {/* Background grid */}
                        <div className="absolute inset-0 opacity-10"
                            style={{ backgroundImage: 'linear-gradient(#fff 1px, transparent 1px), linear-gradient(90deg, #fff 1px, transparent 1px)', backgroundSize: '20px 20px' }}>
                        </div>

                        <div className="relative z-10 text-center mb-12">
                            <h2 className="text-3xl font-black uppercase tracking-widest mb-2 flex items-center justify-center gap-3">
                                <Bug className="w-8 h-8 text-red-500" />
                                {t.interactiveTitle}
                            </h2>
                            <p className="text-gray-400">{t.interactiveSubtitle}</p>
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 relative z-10">
                            {t.points.map((point) => (
                                <button
                                    key={point.id}
                                    onClick={() => setActivePoint(activePoint === point.id ? null : point.id)}
                                    className={`text-left p-6 rounded-2xl border-2 transition-all duration-300 group ${activePoint === point.id
                                            ? 'bg-emerald-500 border-emerald-400 text-white shadow-[0_0_30px_rgba(16,185,129,0.3)] scale-105 z-20'
                                            : 'bg-white/5 border-white/10 hover:bg-white/10 hover:border-white/30 text-gray-300'
                                        }`}
                                >
                                    <div className="flex items-center justify-between mb-4">
                                        <point.icon className={`w-8 h-8 ${activePoint === point.id ? 'text-white' : 'text-gray-500 group-hover:text-emerald-400'}`} />
                                        <div className={`text-xs font-black uppercase tracking-widest px-2 py-1 rounded bg-black/20 ${activePoint === point.id ? 'text-white' : 'text-gray-600'}`}>
                                            Error 0{point.id}
                                        </div>
                                    </div>
                                    <h3 className="font-bold text-lg mb-2 leading-tight">{point.title}</h3>

                                    <div className={`overflow-hidden transition-all duration-500 ${activePoint === point.id ? 'max-h-96 opacity-100 mt-4' : 'max-h-0 opacity-0'}`}>
                                        <div className="space-y-3 text-sm">
                                            <div className="bg-red-500/20 p-3 rounded-lg border border-red-500/30">
                                                <div className="flex items-center gap-2 text-red-100 font-bold text-xs uppercase mb-1">
                                                    <AlertTriangle className="w-3 h-3" /> Warning
                                                </div>
                                                <p className="text-white/90 font-medium leading-relaxed">{point.diagnosis}</p>
                                            </div>
                                            <div className="bg-white/20 p-3 rounded-lg border border-white/30">
                                                <div className="flex items-center gap-2 text-white font-bold text-xs uppercase mb-1">
                                                    <CheckCircle2 className="w-3 h-3" /> Fix Applied
                                                </div>
                                                <p className="text-white/90 font-medium leading-relaxed">{point.fix}</p>
                                            </div>
                                        </div>
                                    </div>

                                    {activePoint !== point.id && (
                                        <p className="text-sm text-gray-500 mt-2 line-clamp-2">{point.symptom}</p>
                                    )}
                                </button>
                            ))}
                        </div>
                    </div>
                </section>

                {/* Conclusion */}
                <section className="bg-emerald-400 text-emerald-950 p-8 md:p-12 rounded-3xl border-4 border-emerald-950 shadow-[8px_8px_0_0_#022c22]">
                    <h3 className="text-2xl font-black uppercase mb-6">{t.conclusion.title}</h3>
                    <p className="text-xl font-bold mb-8 leading-relaxed">
                        {t.conclusion.text}
                    </p>
                    <ul className="space-y-3 mb-8">
                        {t.conclusion.list.map((item, i) => (
                            <li key={i} className="flex items-center gap-3 font-semibold">
                                <div className="w-6 h-6 rounded-full bg-emerald-950 text-emerald-400 flex items-center justify-center shrink-0">?</div>
                                {item}
                            </li>
                        ))}
                    </ul>
                    <hr className="border-emerald-950/20 my-8" />
                    <p className="text-lg font-medium leading-relaxed">
                        {t.conclusion.final}
                    </p>
                </section>

                <div className="mt-16 text-center">
                    <Link to="/contact" className="inline-flex items-center gap-3 bg-gray-900 text-white px-8 py-4 rounded-xl font-black uppercase tracking-widest hover:bg-emerald-500 transition-all hover:-translate-y-1 shadow-lg">
                        {language === 'lt' ? 'Pradėti pokytį' : language === 'ru' ? 'Начать изменения' : 'Start the Change'}
                        <ArrowRight className="w-5 h-5" />
                    </Link>
                </div>
            </div>
        </div>
    );
}

function ArrowRight(props: any) {
    return (
        <svg
            {...props}
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
        >
            <path d="M5 12h14" />
            <path d="m12 5 7 7-7 7" />
        </svg>
    )
}
