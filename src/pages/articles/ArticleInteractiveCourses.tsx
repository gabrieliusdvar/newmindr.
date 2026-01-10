import { useState } from 'react';
import { ArrowLeft, MousePointer2, AlertTriangle, Terminal, ScanFace, X, Check, ArrowRight } from 'lucide-react';
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
            back: "Escape to Blog",
            readingTime: "30 sec (if you skim)",
            title: "Interactive Courses: Because Reading is So 20th Century",
            subtitle: "An unbiased* review of why interactive learning is the greatest invention since sliced bread. (*totally biased)",
            intro: "Welcome, fellow human. You are here because you want to learn something, but you refuse to read a PDF like a medieval scholar. Good choice.",
            imageCaption: "This is a very legally distinct image. Please do not screenshot. We have pixelated lawyers.",
            section1: {
                title: "The Problem with 'Static' Learning",
                text: "Imagine trying to learn to ride a bike by reading a book called 'The Physics of Bicycle Stability'. You would fall. A lot. That is what textbooks are. They are paper promises of failure.",
                button: "Click to feel smart",
                buttonFeedback: ["Nothing happened.", "Still nothing.", "Wow, you really like clicking.", "Okay, you win. You are the master of clicking."]
            },
            section2: {
                title: "Why Interactive is 'Very Nice'",
                desc: "Like Borat would say. It's very nice. Instead of sleeping, you are clicking. Your brain is tricked into thinking it is having fun.",
                comparison: [
                    { old: "Reading a wall of text", new: "Dragging a block of code" },
                    { old: "Falling asleep", new: "Getting dopamine hits" },
                    { old: "Wondering why you exist", new: "Leveling up your avatar" }
                ]
            },
            interactiveDemo: {
                title: "Sarcasm Simulator 2026",
                desc: "Adjust the slider to see how much we care about traditional education methods.",
                sliderLabel: "Respect for PDFs"
            },
            cta: "Give us money (mostly for the courses)",
            finalThought: "If you read this far, you passed the literacy test. Now go play something."
        },
        lt: {
            back: "Grįžti į realybę",
            readingTime: "30 sek (jei skaitai tik antraštes)",
            title: "Interaktyvūs kursai: Nes skaitymas yra atgyvena",
            subtitle: "Nešališka* apžvalga, kodėl interaktyvus mokymasis yra geriau už pjaustytą batoną. (*visiškai šališka)",
            intro: "Sveikas, žmogau. Esi čia, nes nori kažką išmokti, bet atsisakai skaityti PDF failus kaip viduramžių vienuolis. Geras pasirinkimas.",
            imageCaption: "Tai teisiškai labai apsaugotas paveikslėlis. Prašome nedaryti ekrano kopijų. Mes turime pikselizuotus advokatus.",
            section1: {
                title: "Problema su 'Statiniu' mokymusi",
                text: "Įsivaizduok, kad mokaisi važiuoti dviračiu skaitydamas knygą 'Dviračio stabilumo fizika'. Tu nugriūtum. Daug kartų. Tai yra vadovėliai. Popieriniai pažadai, kad tau nepavyks.",
                button: "Spausk, kad jaustumeis protingas",
                buttonFeedback: ["Nieko neįvyko.", "Vis dar nieko.", "O, tau tikrai patinka spausti.", "Gerai, laimėjai. Tu spaudinėjimo meistras."]
            },
            section2: {
                title: "Kodėl interaktyvumas yra 'Very Nice'",
                desc: "Kaip pasakytų Boratas - very nice. Vietoj miegojimo, tu spaudinėji. Tavo smegenys apgautos galvoti, kad joms smagu.",
                comparison: [
                    { old: "Teksto sienos skaitymas", new: "Kodo bloko tempimas" },
                    { old: "Užmigimas", new: "Dopamino dozės gavimas" },
                    { old: "Egzistencinių klausimų kėlimas", new: "Avataro lygio kėlimas" }
                ]
            },
            interactiveDemo: {
                title: "Sarkazmo Simuliatorius 2026",
                desc: "Pateikite slankiklį, kad pamatytumėte, kiek mums rūpi tradiciniai švietimo metodai.",
                sliderLabel: "Pagarba PDF failams"
            },
            cta: "Duokite mums pinigų (už kursus)",
            finalThought: "Jei perskaitei iki čia, išlaikei raštingumo testą. Dabar eik pažaisk."
        },
        ru: {
            back: "Вернуться в блог",
            readingTime: "30 сек (если по диагонали)",
            title: "Интерактивные курсы: Потому что чтение — это прошлый век",
            subtitle: "Непредвзятый* обзор того, почему интерактивное обучение — лучшее изобретение человечества. (*абсолютно предвзятый)",
            intro: "Приветствую, человек. Ты здесь, потому что хочешь чему-то научиться, но отказываешься читать PDF как средневековый монарх. Отличный выбор.",
            imageCaption: "Это юридически защищенное изображение. Пожалуйста, не делайте скриншоты. У нас есть пиксельные юристы.",
            section1: {
                title: "Проблема 'Статичного' обучения",
                text: "Представь, что учишься кататься на велосипеде, читая книгу 'Физика устойчивости велосипеда'. Ты упадешь. Много раз. Вот что такое учебники. Бумажные гарантии провала.",
                button: "Нажми, чтобы почувствовать себя умным",
                buttonFeedback: ["Ничего не произошло.", "Всё еще ничего.", "Ого, тебе правда нравится нажимать.", "Ладно, ты победил. Ты мастер кликов."]
            },
            section2: {
                title: "Почему интерактив — это 'Very Nice'",
                desc: "Как сказал бы Борат — very nice. Вместо сна ты кликаешь. Твой мозг обманут и думает, что ему весело.",
                comparison: [
                    { old: "Чтение стены текста", new: "Перетаскивание блока кода" },
                    { old: "Засыпание", new: "Получение дофамина" },
                    { old: "Размышления о тщетности бытия", new: "Прокачка аватара" }
                ]
            },
            interactiveDemo: {
                title: "Симулятор Сарказма 2026",
                desc: "Подвигайте ползунок, чтобы увидеть, насколько нам важны традиционные методы обучения.",
                sliderLabel: "Уважение к PDF"
            },
            cta: "Дайте нам денег (на курсы)",
            finalThought: "Если ты дочитал досюда, ты прошел тест на грамотность. Теперь иди поиграй."
        }
    };

    const t = content[language as keyof typeof content] || content.en;

    return (
        <div className="min-h-screen bg-black font-mono text-green-400 selection:bg-green-500/30 overflow-x-hidden">
            {/* Glitchy Background */}
            <div className="fixed inset-0 pointer-events-none z-0 opacity-20">
                <div className="absolute top-0 left-0 w-full h-full bg-[repeating-linear-gradient(0deg,transparent,transparent_2px,#00ff00_2px,#00ff00_4px)] opactiy-10"></div>
            </div>

            {/* Nav */}
            <nav className="fixed top-0 left-0 w-full z-50 bg-black/90 border-b border-green-500/30 px-6 py-4 flex justify-between items-center backdrop-blur-sm">
                <Link to="/blog" className="flex items-center gap-2 text-sm font-bold uppercase hover:text-white transition-colors">
                    <ArrowLeft className="w-4 h-4" />
                    {t.back}
                </Link>
                <div className="font-black text-xl tracking-widest text-green-500 animate-pulse">SYSTEM_OVERRIDE</div>
            </nav>

            <div className="container mx-auto px-6 py-24 max-w-4xl relative z-10">
                {/* Header */}
                <header className="mb-20 text-center relative">
                    <div className="absolute -top-10 left-1/2 -translate-x-1/2 text-[10rem] font-black text-green-900/10 select-none pointer-events-none">
                        ERROR
                    </div>
                    <div className="inline-flex items-center gap-2 px-3 py-1 rounded bg-green-900/30 border border-green-500/50 text-green-400 text-xs font-bold uppercase mb-6">
                        <Terminal className="w-3 h-3" />
                        {t.readingTime}
                    </div>
                    <h1 className="text-4xl md:text-6xl font-black mb-6 leading-none tracking-tighter text-white glitch-text">
                        {t.title}
                    </h1>
                    <p className="text-xl md:text-2xl text-green-600/80 max-w-2xl mx-auto italic">
                        {t.subtitle}
                    </p>
                </header>

                {/* THE IMAGE */}
                <div className="mb-24 relative group">
                    <div className="absolute -inset-2 bg-gradient-to-r from-red-500 via-green-500 to-blue-500 opacity-20 blur-xl group-hover:opacity-40 transition-opacity animate-tilt"></div>
                    <div className="relative border-2 border-dashed border-green-500/50 bg-black p-4 rounded-xl transform rotate-1 transition-transform group-hover:rotate-0">
                        <img
                            src="/no-stealable.png"
                            alt="Very unique non-stealable content"
                            className="w-full rounded shadow-2xl grayscale group-hover:grayscale-0 transition-all duration-500"
                        />
                        <div className="bg-red-600 text-white font-bold text-xs absolute top-4 right-4 px-2 py-1 rotate-12 shadow-lg">
                            DO NOT RIGHT CLICK
                        </div>
                    </div>
                    <div className="mt-4 text-center">
                        <p className="text-sm font-bold text-red-500 uppercase tracking-widest flex items-center justify-center gap-2">
                            <AlertTriangle className="w-4 h-4" />
                            {t.imageCaption}
                            <AlertTriangle className="w-4 h-4" />
                        </p>
                    </div>
                </div>

                {/* Intro */}
                <div className="prose prose-invert prose-green mx-auto mb-20">
                    <p className="text-xl leading-relaxed text-gray-300 first-letter:text-5xl first-letter:font-black first-letter:text-green-500 first-letter:mr-2 float-left">
                        {t.intro}
                    </p>
                </div>

                {/* Interactive Section 1 */}
                <section className="mb-32 border-l-4 border-green-500 pl-8 py-4 bg-green-900/10 rounded-r-xl">
                    <h2 className="text-3xl font-black text-white mb-6 uppercase">{t.section1.title}</h2>
                    <p className="text-gray-400 mb-8 text-lg">{t.section1.text}</p>

                    <button
                        onClick={handleUselessButton}
                        className="bg-green-600 hover:bg-green-500 text-black font-black py-4 px-8 rounded shadow-[4px_4px_0px_0px_rgba(255,255,255,1)] hover:translate-y-1 hover:shadow-none transition-all flex items-center gap-2"
                    >
                        <MousePointer2 className="w-5 h-5" />
                        {t.section1.button} ({clickCount})
                    </button>
                    {clickCount > 0 && (
                        <p className="mt-4 text-sm font-mono text-green-300 animate-bounce">
                            {'>'} {t.section1.buttonFeedback[Math.min(clickCount - 1, 3)]}
                        </p>
                    )}
                </section>

                {/* Comparison Table */}
                <section className="mb-32">
                    <h2 className="text-3xl font-black text-center mb-12 flex items-center justify-center gap-3">
                        <ScanFace className="w-8 h-8" />
                        {t.section2.title}
                    </h2>
                    <p className="text-center text-gray-400 mb-12 max-w-md mx-auto">{t.section2.desc}</p>

                    <div className="grid gap-4">
                        {t.section2.comparison.map((item, i) => (
                            <div key={i} className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                <div className="bg-red-900/20 border border-red-500/20 p-6 rounded-lg flex items-center justify-between group">
                                    <span className="text-red-400 font-medium">{item.old}</span>
                                    <X className="w-5 h-5 text-red-500 opacity-50 group-hover:opacity-100" />
                                </div>
                                <div className="bg-green-900/20 border border-green-500/20 p-6 rounded-lg flex items-center justify-between group">
                                    <span className="text-green-400 font-bold">{item.new}</span>
                                    <Check className="w-5 h-5 text-green-500 opacity-50 group-hover:opacity-100" />
                                </div>
                            </div>
                        ))}
                    </div>
                </section>

                {/* Sarcasm Simulator */}
                <section className="mb-32 bg-gray-900 p-8 rounded-xl border-2 border-dashed border-gray-700">
                    <h3 className="text-xl font-bold text-white mb-2">{t.interactiveDemo.title}</h3>
                    <p className="text-gray-500 mb-8">{t.interactiveDemo.desc}</p>

                    <div className=" space-y-4">
                        <div className="flex justify-between text-xs uppercase tracking-widest text-gray-500">
                            <span>Boring</span>
                            <span>{t.interactiveDemo.sliderLabel}: {sarcasmLevel}%</span>
                            <span>Genius</span>
                        </div>
                        <input
                            type="range"
                            min="0"
                            max="100"
                            value={sarcasmLevel}
                            onChange={(e) => setSarcasmLevel(parseInt(e.target.value))}
                            className="w-full h-4 bg-gray-800 rounded-lg appearance-none cursor-pointer [&::-webkit-slider-thumb]:appearance-none [&::-webkit-slider-thumb]:w-8 [&::-webkit-slider-thumb]:h-8 [&::-webkit-slider-thumb]:bg-green-500 [&::-webkit-slider-thumb]:rounded hover:[&::-webkit-slider-thumb]:bg-green-400"
                        />
                        <div className="mt-4 p-4 bg-black rounded border border-green-500/30 text-center">
                            {sarcasmLevel < 30 && <span className="text-red-400">PDFs are fun! (Liar)</span>}
                            {sarcasmLevel >= 30 && sarcasmLevel < 70 && <span className="text-yellow-400">Neutral. Boring.</span>}
                            {sarcasmLevel >= 70 && <span className="text-green-400 font-black text-xl">INTERACTIVE SUPREMACY!</span>}
                        </div>
                    </div>
                </section>

                {/* Footer / CTA */}
                <section className="text-center py-20 border-t border-green-500/20">
                    <p className="text-gray-500 mb-8 text-sm uppercase tracking-widest">{t.finalThought}</p>
                    <Link to="/courses" className="inline-flex items-center gap-2 bg-white text-black text-xl font-black py-4 px-12 rounded-full hover:scale-110 transition-transform hover:shadow-[0_0_40px_rgba(255,255,255,0.5)]">
                        {t.cta} <ArrowRight className="w-6 h-6" />
                    </Link>
                </section>

            </div>
        </div>
    );
}
