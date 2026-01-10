import { useState } from 'react';
import { ArrowLeft, MousePointer2, AlertTriangle, ScanFace, X, Check, ArrowRight, Zap, Newspaper } from 'lucide-react';
import { Link } from 'react-router-dom';
import { useLanguage } from '../../contexts/LanguageContext';

export default function ArticleInteractiveCourses() {
    const { language } = useLanguage();
    const [clickCount, setClickCount] = useState(0);
    const [sarcasmLevel, setSarcasmLevel] = useState(50);

    const handleUselessButton = () => {
        setClickCount(prev => prev + 1);
    };

    const content = {
        en: {
            back: "Back to Papers",
            readingTime: "READ TIME: 30 SEC",
            title: "INTERACTIVE COURSES SHOCK THE WORLD!",
            subtitle: "Citizens confused: 'Wait, learning can actually be fun?' Exclusive report inside.",
            intro: "EXTRA! EXTRA! READ ALL ABOUT IT! You are here because you refused to read a PDF like a medieval scholar. Good choice, detective.",
            imageCaption: "EVIDENCE #1: DO NOT STEAL THIS IMAGE",
            section1: {
                title: "THE STATIC DISASTER",
                text: "Imagine attempting to master the art of cycling by merely perusing a tome titled 'The Physics of Bicycle Stability'. You would plummet. Repeatedly. This is the tragedy of textbooks. Paper promises of failure!",
                button: "PRESS FOR TRUTH",
                buttonFeedback: ["NOTHING HAPPENED!", "STILL NOTHING!", "WOW, PERSISTENT!", "OKAY, YOU WIN!"]
            },
            section2: {
                title: "WHY IT IS 'VERY NICE'",
                desc: "Our investigative team confirms: It is indeed very nice. Your brain is tricked into enjoyment.",
                comparison: [
                    { old: "Board reading text", new: "Dragging code blocks" },
                    { old: "Sleeping in class", new: "Dopamine Hits" },
                    { old: "Existential Dread", new: "Leveling Up" }
                ]
            },
            interactiveDemo: {
                title: "SARCASM-O-METER",
                desc: "Adjust the dial to measure our disdain for old methods.",
                sliderLabel: "RESPECT FOR PDFS"
            },
            cta: "INVEST IN YOUR BRAIN",
            finalThought: "YOU PASSED THE LITERACY TEST. NOW GO PLAY."
        },
        lt: {
            back: "Grįžti į laikraščius",
            readingTime: "LAIKAS: 30 SEK",
            title: "INTERAKTYVŪS KURSAI ŠOKIRUOJA PASAULĮ!",
            subtitle: "Piliečiai sutrikę: 'Palauk, mokymasis gali būti smagus?' Išskirtinis reportažas.",
            intro: "EKSTRA! EKSTRA! SKAITYKITE VISKĄ APIE TAI! Jūs esate čia, nes atsisakėte skaityti PDF kaip viduramžių vienuolis. Geras pasirinkimas.",
            imageCaption: "ĮRODYMAS #1: NEVOGTI ŠIO PAVEIKSLĖLIO",
            section1: {
                title: "STATINĖ KATASTROFA",
                text: "Įsivaizduok, kad bandai išmokti važiuoti dviračiu skaitydamas knygą 'Dviračio stabilumo fizika'. Tu kristum. Nuolat. Tai yra vadovėlių tragedija. Popieriniai pažadai!",
                button: "SPAUSK DĖL TIESOS",
                buttonFeedback: ["NIEKO NEĮVYKO!", "VIS DAR NIEKO!", "O, TU ATKAKLUS!", "GERAI, LAIMĖJAI!"]
            },
            section2: {
                title: "KODĖL TAI 'VERY NICE'",
                desc: "Mūsų tyrimų komanda patvirtina: Tai tikrai very nice. Tavo smegenys apgautos mėgautis.",
                comparison: [
                    { old: "Lentos skaitymas", new: "Kodo blokų tampymas" },
                    { old: "Miegojimas klasėje", new: "Dopamino dozės" },
                    { old: "Egzistencinė baimė", new: "Lygio kėlimas" }
                ]
            },
            interactiveDemo: {
                title: "SARKAZMATORIUS",
                desc: "Pasukite rankenėlę, kad pamatuotumėte mūsų panieką seniems metodams.",
                sliderLabel: "Pagarba PDF'ams"
            },
            cta: "INVESTUOK Į SMEGENIS",
            finalThought: "IŠLAIKEI RAŠTINGUMO TESTĄ. DABAR EIK ŽAISTI."
        },
        ru: {
            back: "Назад к газетам",
            readingTime: "ВРЕМЯ: 30 СЕК",
            title: "ИНТЕРАКТИВНЫЕ КУРСЫ ШОКИРУЮТ МИР!",
            subtitle: "Граждане в замешательстве: 'Подождите, учиться может быть весело?' Эксклюзивный репортаж.",
            intro: "ЭКСТРА! ЭКСТРА! ЧИТАЙТЕ! Вы здесь, потому что отказались читать PDF как средневековый монах. Отличный выбор.",
            imageCaption: "УЛИКА #1: НЕ КРАСТЬ ЭТО ИЗОБРАЖЕНИЕ",
            section1: {
                title: "СТАТИЧНАЯ КАТАСТРОФА",
                text: "Представьте, что вы пытаетесь научиться ездить на велосипеде, читая книгу 'Физика устойчивости велосипеда'. Вы бы падали. Постоянно. Это трагедия учебников. Бумажные обещания!",
                button: "ЖМИ ЗА ПРАВДУ",
                buttonFeedback: ["НИЧЕГО НЕ ПРОИЗОШЛО!", "ВСЕ ЕЩЕ НИЧЕГО!", "ОГО, НАСТОЙЧИВО!", "ЛАДНО, ТЫ ПОБЕДИЛ!"]
            },
            section2: {
                title: "ПОЧЕМУ ЭТО 'VERY NICE'",
                desc: "Наша следственная группа подтверждает: Это действительно very nice. Ваш мозг обманут и получает удовольствие.",
                comparison: [
                    { old: "Чтение доски", new: "Перетаскивание кода" },
                    { old: "Сон на уроке", new: "Дофамин" },
                    { old: "Экзистенциальный ужас", new: "Прокачка уровня" }
                ]
            },
            interactiveDemo: {
                title: "САРКАЗМОМЕТР",
                desc: "Покрутите ручку, чтобы измерить наше презрение к старым методам.",
                sliderLabel: "УВАЖЕНИЕ К PDF"
            },
            cta: "ИНВЕСТИРУЙ В МОЗГ",
            finalThought: "ТЫ ПРОШЕЛ ТЕСТ НА ГРАМОТНОСТЬ. ТЕПЕРЬ ИДИ ИГРАЙ."
        }
    };

    const t = content[language as keyof typeof content] || content.en;

    return (
        <div className="min-h-screen bg-[#f0f0e8] font-mono text-black selection:bg-yellow-400 selection:text-black overflow-x-hidden">
            {/* Paper Texture Overlay */}
            <div className="fixed inset-0 pointer-events-none opacity-40 z-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] brightness-100 contrast-150 mix-blend-multiply"></div>

            {/* Nav */}
            <nav className="fixed top-0 left-0 w-full z-50 bg-[#f0f0e8] border-b-4 border-black px-6 py-4 flex justify-between items-center z-[100]">
                <Link to="/blog" className="flex items-center gap-2 text-sm font-black uppercase hover:bg-black hover:text-white px-4 py-2 border-2 border-black transition-all shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] hover:shadow-none hover:translate-x-[2px] hover:translate-y-[2px]">
                    <ArrowLeft className="w-4 h-4" />
                    {t.back}
                </Link>
                <div className="font-black text-2xl tracking-tighter uppercase border-2 border-black px-4 py-1 bg-white shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] rotate-1">
                    THE DAILY SARCASM
                </div>
            </nav>

            <div className="container mx-auto px-6 py-32 max-w-4xl relative z-10">

                {/* HEADLINE SECTION */}
                <header className="mb-20 text-center border-b-8 border-black pb-12 relative">
                    <div className="flex justify-center mb-6">
                        <div className="inline-flex items-center gap-2 px-6 py-2 bg-black text-white text-sm font-black uppercase tracking-widest -rotate-2">
                            <Newspaper className="w-4 h-4" />
                            {t.readingTime}
                        </div>
                    </div>
                    <h1 className="text-5xl md:text-8xl font-black mb-8 leading-[0.9] tracking-tighter uppercase font-serif">
                        {t.title}
                    </h1>
                    <div className="flex flex-col md:flex-row items-center justify-center gap-6 border-t-4 border-black pt-8">
                        <span className="font-bold uppercase tracking-widest text-sm">VOL. 99</span>
                        <span className="w-2 h-2 bg-black rounded-full hidden md:block"></span>
                        <p className="text-xl md:text-2xl font-serif italic max-w-2xl text-center">
                            "{t.subtitle}"
                        </p>
                        <span className="w-2 h-2 bg-black rounded-full hidden md:block"></span>
                        <span className="font-bold uppercase tracking-widest text-sm">PRICE: FREE</span>
                    </div>
                </header>

                {/* THE IMAGE AS A POLAROID/COMIC PANEL */}
                <div className="mb-24 flex justify-center">
                    <div className="relative bg-white p-4 border-4 border-black shadow-[16px_16px_0px_0px_rgba(0,0,0,1)] transform -rotate-1 hover:rotate-0 transition-transform duration-500 max-w-2xl w-full">
                        <div className="absolute -top-6 -right-6 bg-yellow-400 text-black font-black text-sm px-4 py-2 border-4 border-black shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] z-10 rotate-12">
                            TOP SECRET!
                        </div>
                        <div className="border-2 border-black overflow-hidden relative group">
                            <img
                                src="/no-stealable.png"
                                alt="Comic panel evidence"
                                className="w-full grayscale contrast-125 group-hover:grayscale-0 transition-all duration-500"
                            />
                            {/* Halftone Overlay */}
                            <div className="absolute inset-0 bg-[radial-gradient(circle,black_1px,transparent_1px)] bg-[length:10px_10px] opacity-20 pointer-events-none mix-blend-overlay"></div>
                        </div>
                        <div className="mt-4 text-center border-t-2 border-black pt-2">
                            <p className="font-bold uppercase tracking-widest flex items-center justify-center gap-2 text-xs">
                                <ScanFace className="w-4 h-4" />
                                {t.imageCaption}
                            </p>
                        </div>
                    </div>
                </div>

                {/* COLUMNS LAYOUT FOR INTRO */}
                <div className="grid md:grid-cols-2 gap-12 mb-24 font-serif text-lg leading-relaxed text-justify relative">
                    {/* Dropped Cap */}
                    <div className="md:col-span-2 text-center mb-8 text-2xl font-bold border-y-2 border-black py-4 bg-yellow-300">
                        {t.intro}
                    </div>
                </div>

                {/* SECTION 1: COMIC STRIP STYLE */}
                <section className="mb-32 relative">
                    <div className="bg-white border-4 border-black p-8 shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] relative overflow-hidden">
                        {/* Comic Dots Background */}
                        <div className="absolute inset-0 bg-[radial-gradient(#000_1px,transparent_1px)] [background-size:16px_16px] opacity-10"></div>

                        <div className="relative z-10 flex flex-col md:flex-row gap-8 items-start">
                            <div className="flex-1">
                                <h2 className="text-4xl font-black uppercase mb-4 bg-black text-white inline-block px-4 py-2 -rotate-2 transform origin-bottom-left">
                                    {t.section1.title}
                                </h2>
                                <p className="font-serif text-xl mb-8 leading-relaxed">
                                    {t.section1.text}
                                </p>

                                <button
                                    onClick={handleUselessButton}
                                    className="relative group bg-red-600 text-white font-black text-xl px-10 py-6 border-4 border-black shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] hover:translate-x-1 hover:translate-y-1 hover:shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] transition-all flex items-center gap-3 overflow-hidden outline-none"
                                >
                                    <span className="relative z-10 uppercase flex items-center gap-2">
                                        <Zap className="w-6 h-6 fill-yellow-400 text-black ml-[-2px]" />
                                        {t.section1.button}
                                    </span>
                                    <div className="absolute inset-0 bg-[repeating-linear-gradient(45deg,transparent,transparent_10px,#000_10px,#000_20px)] opacity-10 group-hover:opacity-20"></div>
                                </button>
                            </div>

                            {/* Speech Bubble Feedback */}
                            {clickCount > 0 && (
                                <div className="absolute -top-10 -right-10 md:relative md:top-auto md:right-auto md:w-48 animate-bounce delay-75">
                                    <div className="bg-white border-4 border-black p-6 rounded-[50%] relative shadow-[8px_8px_0px_0px_rgba(0,0,0,1)]">
                                        <p className="font-black text-center text-xl uppercase italic">
                                            {t.section1.buttonFeedback[Math.min(clickCount - 1, 3)]}!!
                                        </p>
                                        <div className="absolute bottom-[-20px] left-10 w-0 h-0 border-l-[20px] border-l-transparent border-t-[20px] border-t-black border-r-[0px] border-r-transparent"></div>
                                        <div className="absolute bottom-[-14px] left-[44px] w-0 h-0 border-l-[14px] border-l-transparent border-t-[14px] border-t-white border-r-[0px] border-r-transparent"></div>
                                    </div>
                                </div>
                            )}
                        </div>
                    </div>
                </section>

                {/* SECTION 2: THIS VS THAT TABLE */}
                <section className="mb-32">
                    <h2 className="text-4xl font-black text-center mb-16 uppercase underline decoration-wavy decoration-4 decoration-yellow-400">
                        {t.section2.title}
                    </h2>
                    <p className="text-center font-serif text-xl italic mb-12 max-w-xl mx-auto border-l-4 border-black pl-4">
                        {t.section2.desc}
                    </p>

                    <div className="border-4 border-black bg-white shadow-[12px_12px_0px_0px_rgba(0,0,0,1)]">
                        {t.section2.comparison.map((item, i) => (
                            <div key={i} className={`grid grid-cols-2 border-b-4 border-black last:border-b-0 divide-x-4 divide-black ${i % 2 === 0 ? 'bg-white' : 'bg-[#f0f0e8]'}`}>
                                <div className="p-8 text-center group bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-100 hover:bg-red-50 transition-colors relative overflow-hidden">
                                    <div className="absolute inset-0 bg-[radial-gradient(circle,rgba(255,0,0,0.1)_2px,transparent_2px)] bg-[length:20px_20px] opacity-0 group-hover:opacity-100 transition-opacity"></div>
                                    <div className="flex flex-col items-center gap-4 relative z-10">
                                        <X className="w-12 h-12 text-black" strokeWidth={3} />
                                        <span className="font-serif font-bold text-xl">{item.old}</span>
                                    </div>
                                </div>
                                <div className="p-8 text-center group hover:bg-green-50 transition-colors relative overflow-hidden">
                                    <div className="absolute inset-0 bg-[radial-gradient(circle,rgba(0,255,0,0.1)_2px,transparent_2px)] bg-[length:20px_20px] opacity-0 group-hover:opacity-100 transition-opacity"></div>
                                    <div className="flex flex-col items-center gap-4 relative z-10">
                                        <Check className="w-12 h-12 text-black" strokeWidth={3} />
                                        <span className="font-black text-xl uppercase tracking-wider">{item.new}</span>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </section>

                {/* SARCASM SIMULATOR: GAUGE STYLE */}
                <section className="mb-32 bg-black text-white p-12 border-4 border-black shadow-[16px_16px_0px_0px_rgba(255,255,0,1)] relative">
                    <div className="absolute -top-6 left-1/2 -translate-x-1/2 bg-white text-black font-black uppercase px-8 py-3 border-4 border-black -rotate-1 z-10">
                        {t.interactiveDemo.title}
                    </div>

                    <div className="mt-8 space-y-8">
                        <p className="text-center font-mono text-yellow-300">{t.interactiveDemo.desc}</p>

                        <div className="relative pt-10 pb-4">
                            <div className="flex justify-between text-xs font-black uppercase tracking-widest text-white mb-2">
                                <span>ZZZ...</span>
                                <span>{t.interactiveDemo.sliderLabel}</span>
                                <span>EINSTEIN</span>
                            </div>
                            <input
                                type="range"
                                min="0"
                                max="100"
                                value={sarcasmLevel}
                                onChange={(e) => setSarcasmLevel(parseInt(e.target.value))}
                                className="w-full h-8 bg-gray-800 rounded-none border-2 border-white appearance-none cursor-pointer outline-none
                                [&::-webkit-slider-thumb]:appearance-none 
                                [&::-webkit-slider-thumb]:w-8 
                                [&::-webkit-slider-thumb]:h-12 
                                [&::-webkit-slider-thumb]:bg-yellow-400 
                                [&::-webkit-slider-thumb]:border-2 
                                [&::-webkit-slider-thumb]:border-black
                                [&::-webkit-slider-thumb]:rounded-none
                                hover:[&::-webkit-slider-thumb]:bg-yellow-300"
                            />
                        </div>

                        <div className="border-2 border-white p-6 text-center bg-gray-900 font-mono text-xl min-h-[100px] flex items-center justify-center">
                            {sarcasmLevel < 30 && <span className="text-red-400 animate-pulse">ERROR: SARCASM LEVELS TOO LOW.</span>}
                            {sarcasmLevel >= 30 && sarcasmLevel < 70 && <span className="text-yellow-400">ANALYZING... OPINION DETECTED.</span>}
                            {sarcasmLevel >= 70 && <span className="text-green-400 font-black glitch-text">MAXIMUM SARCASM ACHIEVED! SYSTEM UNSTABLE!</span>}
                        </div>
                    </div>
                </section>

                {/* FOOTER CTA */}
                <section className="text-center py-20 border-t-8 border-black border-dotted">
                    <p className="font-black text-2xl uppercase mb-12 tracking-widest">{t.finalThought}</p>
                    <Link to="/courses" className="inline-flex items-center gap-4 bg-yellow-400 text-black text-2xl font-black py-6 px-16 border-4 border-black shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] hover:shadow-none hover:translate-x-2 hover:translate-y-2 transition-all group">
                        {t.cta}
                        <ArrowRight className="w-8 h-8 group-hover:translate-x-2 transition-transform" strokeWidth={3} />
                    </Link>
                </section>

            </div>
        </div>
    );
}
