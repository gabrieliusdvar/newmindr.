import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { TrendingDown, BookX, Gamepad2, Target, Users, Zap, Trophy } from 'lucide-react';
import { useLanguage } from '../../contexts/LanguageContext';

const ArticleFail = () => {
    const navigate = useNavigate();
    const { language } = useLanguage();
    const [activeStatIndex, setActiveStatIndex] = useState(0);
    const [eagleFloat, setEagleFloat] = useState(0);
    const [revealedStats, setRevealedStats] = useState<number[]>([]);

    useEffect(() => {
        const interval = setInterval(() => {
            setEagleFloat((prev) => (prev + 1) % 360);
        }, 50);
        return () => clearInterval(interval);
    }, []);

    const txt = {
        en: {
            title: "Why Students Fail",
            subtitle: "(And How We're Changing That)",
            intro: "The shocking truth about traditional education... and the solution you've been waiting for.",
            hardTruth: "The Hard Truth",
            hardTruthP1: "Every year, millions of students struggle, not because they lack intelligence or potential, but because the traditional education system fails to engage them in ways that actually work.",
            hardTruthP2: "Let's look at the numbers...",
            shockingStats: "The Shocking Statistics",
            clickReveal: "Click to Reveal",
            stat1: "of students fail due to lack of engagement",
            stat2: "struggle because traditional methods don't match their learning style",
            stat3: "of students say they'd perform better with interactive learning",
            stat4: "fail due to lack of motivation and unclear goals",
            whyHappens: "Why This Happens",
            reason1Title: "Passive Learning Doesn't Work",
            reason1Text: "Sitting in lectures and memorizing facts is proven to be the least effective way to learn. Studies show we retain only 5% of what we hear in lectures.",
            reason2Title: "One-Size-Fits-All Approach",
            reason2Text: "Every student learns differently. Visual learners, kinesthetic learners, and auditory learners all need different approaches - but traditional education treats everyone the same.",
            reason3Title: "Lack of Engagement",
            reason3Text: "When learning feels like a chore, students disengage. Research shows that engaged students are 2.5x more likely to succeed than their disengaged peers.",
            solutionTitle: "Enter: newmindr",
            solutionIntro: "We're not just another online learning platform. Every day we're expanding our classes and making them better for our users.",
            feature1Title: "Gamified Learning",
            feature1Text: "Turn education into an adventure with interactive challenges and rewards.",
            feature2Title: "Personalized Paths",
            feature2Text: "Learning that adapts to YOUR unique style and pace.",
            feature3Title: "Active Engagement",
            feature3Text: "Learn by doing, not just watching. Hands-on, interactive experiences.",
            resultsTitle: "The Results Speak for Themselves:",
            result1: "90% retention rate vs. 5% in traditional lectures",
            result2: "3x faster learning through active engagement",
            result3: "85% of students report increased motivation",
            ctaTitle: "Ready to Stop Failing and Start Soaring?",
            ctaText: "Discover how our interactive learning process transforms struggling students into confident achievers.",
            ctaButton: "See Our Learning Process",
            ctaFooter: "Join thousands of students who've already made the switch."
        },
        lt: {
            title: "Kodėl mokiniai patiria nesėkmes",
            subtitle: "(ir kaip mes tai keičiame)",
            intro: "Šokiruojanti tiesa apie tradicinį švietimą... ir sprendimas, kurio laukėte.",
            hardTruth: "Sunki tiesa",
            hardTruthP1: "Kasmet milijonai mokinių susiduria su sunkumais ne dėl to, kad jiems trūksta intelekto ar potencialo, bet todėl, kad tradicinė švietimo sistema nesugeba juos įtraukti būdais, kurie tikrai veikia.",
            hardTruthP2: "Pažiūrėkime į skaičius...",
            shockingStats: "Šokiruojanti statistika",
            clickReveal: "Spustelėkite atskleisti",
            stat1: "mokinių patiria nesėkmes dėl įsitraukimo stokos",
            stat2: "kovoja, nes tradiciniai metodai neatitinka jų mokymosi stiliaus",
            stat3: "mokinių teigia, kad geriau mokytųsi su interaktyviu mokymu",
            stat4: "patiria nesėkmes dėl motyvacijos stokos ir neaiškių tikslų",
            whyHappens: "Kodėl taip atsitinka",
            reason1Title: "Pasyvus mokymasis neveikia",
            reason1Text: "Sėdėjimas paskaitose ir faktų įsiminimas yra įrodyta mažiausiai efektyvus mokymosi būdas. Tyrimai rodo, kad įsimenama tik 5% to, ką girdime paskaitose.",
            reason2Title: "Vienas dydis visiems",
            reason2Text: "Kiekvienas mokinys mokosi skirtingai. Vizualūs, kinestetiniai ir klausos besimokantieji reikalauja skirtingų metodų - bet tradicinis švietimas visus traktuoja vienodai.",
            reason3Title: "Įsitraukimo stoka",
            reason3Text: "Kai mokymasis tampa našta, mokiniai nebeįsitraukia. Tyrimai rodo, kad įsitraukę mokiniai 2,5 karto labiau linkę sėkmingai mokytis nei neįsitraukę.",
            solutionTitle: "Pristatome: newmindr",
            solutionIntro: "Mes ne tiesiog dar viena internetinė mokymosi platforma. Kasdien plečiame savo pamokas ir darome jas geresnes vartotojams.",
            feature1Title: "Žaidybinis mokymasis",
            feature1Text: "Paversk mokymąsi nuotykiu su interaktyviais iššūkiais ir apdovanojimais.",
            feature2Title: "Individualizuoti keliai",
            feature2Text: "Mokymasis, kuris prisitaiko prie JŪSŲ unikalaus stiliaus ir tempo.",
            feature3Title: "Aktyvus įsitraukimas",
            feature3Text: "Mokykis darydamas, ne tik žiūrėdamas. Praktinė, interaktyvi patirtis.",
            resultsTitle: "Rezultatai kalba patys už save:",
            result1: "90% įsiminimo lygis prieš 5% tradicinėse paskaitose",
            result2: "3x greitesnis mokymasis per aktyvų įsitraukimą",
            result3: "85% mokinių praneša apie padidėjusią motyvaciją",
            ctaTitle: "Pasiruošę nustoti patirti nesėkmes ir pradėti kilti?",
            ctaText: "Atraskite, kaip mūsų interaktyvus mokymosi procesas paverčia kovojančius mokinius pasitikėjusiais savimi sėkmės siekėjais.",
            ctaButton: "Žiūrėti mokymosi procesą",
            ctaFooter: "Prisijunkite prie tūkstančių mokinių, kurie jau padarė pasirinkimą."
        },
        ru: {
            title: "Почему студенты терпят неудачу",
            subtitle: "(и как мы это меняем)",
            intro: "Шокирующая правда о традиционном образовании... и решение, которого вы ждали.",
            hardTruth: "Суровая правда",
            hardTruthP1: "Каждый год миллионы студентов испытывают трудности не потому, что им не хватает интеллекта или потенциала, а потому, что традиционная система образования не может вовлечь их способами, которые действительно работают.",
            hardTruthP2: "Давайте посмотрим на цифры...",
            shockingStats: "Шокирующая статистика",
            clickReveal: "Нажмите, чтобы открыть",
            stat1: "студентов терпят неудачу из-за отсутствия вовлеченности",
            stat2: "борются, потому что традиционные методы не соответствуют их стилю обучения",
            stat3: "студентов говорят, что учились бы лучше с интерактивным обучением",
            stat4: "терпят неудачу из-за отсутствия мотивации и неясных целей",
            whyHappens: "Почему это происходит",
            reason1Title: "Пассивное обучение не работает",
            reason1Text: "Сидение на лекциях и запоминание фактов - доказанно наименее эффективный способ обучения. Исследования показывают, что мы запоминаем только 5% того, что слышим на лекциях.",
            reason2Title: "Подход «один размер для всех»",
            reason2Text: "Каждый студент учится по-разному. Визуальным, кинестетическим и аудиальным ученикам нужны разные подходы - но традиционное образование относится ко всем одинаково.",
            reason3Title: "Отсутствие вовлеченности",
            reason3Text: "Когда обучение становится рутиной, студенты теряют интерес. Исследования показывают, что вовлеченные студенты в 2,5 раза чаще добиваются успеха, чем невовлеченные.",
            solutionTitle: "Представляем: newmindr",
            solutionIntro: "Мы не просто еще одна платформа онлайн-обучения. Каждый день мы расширяем наши классы и делаем их лучше для наших пользователей.",
            feature1Title: "Геймифицированное обучение",
            feature1Text: "Превратите образование в приключение с интерактивными задачами и наградами.",
            feature2Title: "Персонализированные пути",
            feature2Text: "Обучение, которое адаптируется к ВАШЕМУ уникальному стилю и темпу.",
            feature3Title: "Активное вовлечение",
            feature3Text: "Учитесь на практике, а не только наблюдая. Практический, интерактивный опыт.",
            resultsTitle: "Результаты говорят сами за себя:",
            result1: "90% уровень запоминания против 5% на традиционных лекциях",
            result2: "В 3 раза быстрее обучение через активное вовлечение",
            result3: "85% студентов сообщают о повышении мотивации",
            ctaTitle: "Готовы перестать терпеть неудачи и начать взлетать?",
            ctaText: "Откройте для себя, как наш интерактивный процесс обучения превращает борющихся студентов в уверенных в себе достигателей.",
            ctaButton: "Посмотреть процесс обучения",
            ctaFooter: "Присоединяйтесь к тысячам студентов, которые уже сделали выбор."
        }
    };

    const t = txt[language as keyof typeof txt] || txt.en;

    const statistics = [
        {
            number: "30%",
            fact: t.stat1,
            color: "bg-red-500",
            Icon: TrendingDown
        },
        {
            number: "45%",
            fact: t.stat2,
            color: "bg-orange-500",
            Icon: BookX
        },
        {
            number: "60%",
            fact: t.stat3,
            color: "bg-yellow-500",
            Icon: Gamepad2
        },
        {
            number: "25%",
            fact: t.stat4,
            color: "bg-purple-500",
            Icon: Target
        }
    ];

    const handleStatReveal = (index: number) => {
        if (!revealedStats.includes(index)) {
            setRevealedStats([...revealedStats, index]);
        }
        setActiveStatIndex(index);
    };

    return (
        <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100">
            {/* Hero Section */}
            <div className="relative bg-gradient-to-br from-red-600 via-orange-600 to-yellow-500 text-white py-20 px-4 overflow-hidden">
                {/* Animated Background Pattern */}
                <div className="absolute inset-0 opacity-10">
                    <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.1)_2px,transparent_2px),linear-gradient(90deg,rgba(255,255,255,0.1)_2px,transparent_2px)] bg-[size:50px_50px]"></div>
                </div>

                {/* Floating Eagle */}
                <div
                    className="absolute right-10 top-10 hidden lg:block"
                    style={{
                        transform: `translateY(${Math.sin(eagleFloat * 0.05) * 20}px) rotate(${Math.sin(eagleFloat * 0.03) * 10}deg)`,
                        transition: 'transform 0.1s ease-out',
                    }}
                >
                    <img
                        src="/eagle.png"
                        alt="Eagle mascot"
                        className="w-48 h-auto drop-shadow-[0_0_30px_rgba(255,255,255,0.5)] animate-pulse"
                    />
                </div>

                <div className="max-w-4xl mx-auto relative z-10">
                    <h1 className="text-5xl md:text-7xl font-black mb-6 leading-tight" style={{ textShadow: '4px 4px 0px rgba(0,0,0,0.3)' }}>
                        {t.title}
                        <span className="block text-3xl md:text-4xl mt-4 text-yellow-200">
                            {t.subtitle}
                        </span>
                    </h1>
                    <p className="text-xl md:text-2xl font-semibold opacity-90">
                        {t.intro}
                    </p>
                </div>

                {/* Decorative elements */}
                <div className="absolute bottom-0 left-0 w-full h-20 bg-gradient-to-t from-gray-50 to-transparent"></div>
            </div>

            {/* Main Content */}
            <div className="max-w-4xl mx-auto px-4 py-16">

                {/* Introduction */}
                <div className="bg-white rounded-3xl p-8 md:p-12 shadow-[8px_8px_0px_0px_rgba(0,0,0,0.1)] border-4 border-gray-200 mb-12">
                    <div className="flex items-center gap-4 mb-6">
                        <div className="w-16 h-16 bg-red-500 rounded-2xl flex items-center justify-center border-4 border-black shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]">
                            <TrendingDown className="w-8 h-8 text-white" strokeWidth={3} />
                        </div>
                        <h2 className="text-3xl md:text-4xl font-black text-gray-900">
                            {t.hardTruth}
                        </h2>
                    </div>
                    <p className="text-lg md:text-xl text-gray-700 leading-relaxed mb-6">
                        {t.hardTruthP1}
                    </p>
                    <p className="text-lg md:text-xl text-gray-700 leading-relaxed">
                        {t.hardTruthP2}
                    </p>
                </div>

                {/* Interactive Statistics */}
                <div className="mb-12">
                    <h2 className="text-3xl md:text-4xl font-black text-gray-900 mb-8 text-center">
                        {t.shockingStats}
                    </h2>

                    <div className="grid md:grid-cols-2 gap-6">
                        {statistics.map((stat, index) => {
                            const IconComponent = stat.Icon;
                            return (
                                <div
                                    key={index}
                                    onClick={() => handleStatReveal(index)}
                                    className={`
                    relative bg-white rounded-3xl p-8 border-4 border-black cursor-pointer
                    transform transition-all duration-300 hover:scale-105
                    ${activeStatIndex === index ? 'shadow-[12px_12px_0px_0px_rgba(0,0,0,1)]' : 'shadow-[6px_6px_0px_0px_rgba(0,0,0,1)]'}
                    ${revealedStats.includes(index) ? 'opacity-100' : 'opacity-70'}
                  `}
                                >
                                    <div className={`w-20 h-20 ${stat.color} rounded-2xl flex items-center justify-center mb-4 border-4 border-black shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]`}>
                                        <IconComponent className="w-10 h-10 text-white" strokeWidth={3} />
                                    </div>
                                    <div className={`text-6xl md:text-7xl font-black mb-4 ${stat.color.replace('bg-', 'text-')}`}>
                                        {stat.number}
                                    </div>
                                    <p className="text-lg md:text-xl font-bold text-gray-800">
                                        {stat.fact}
                                    </p>

                                    {!revealedStats.includes(index) && (
                                        <div className="absolute inset-0 bg-gradient-to-br from-gray-900/10 to-gray-900/5 rounded-3xl flex items-center justify-center backdrop-blur-sm">
                                            <span className="text-2xl font-black text-gray-700">{t.clickReveal}</span>
                                        </div>
                                    )}
                                </div>
                            );
                        })}
                    </div>
                </div>

                {/* The Problem Section */}
                <div className="bg-gradient-to-br from-red-50 to-orange-50 rounded-3xl p-8 md:p-12 border-4 border-red-200 mb-12">
                    <div className="flex items-center gap-4 mb-6">
                        <div className="w-16 h-16 bg-orange-500 rounded-2xl flex items-center justify-center border-4 border-black shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]">
                            <BookX className="w-8 h-8 text-white" strokeWidth={3} />
                        </div>
                        <h2 className="text-3xl md:text-4xl font-black text-gray-900">
                            {t.whyHappens}
                        </h2>
                    </div>

                    <div className="space-y-6">
                        <div className="flex items-start gap-4">
                            <div className="flex-shrink-0 w-12 h-12 bg-red-500 rounded-full flex items-center justify-center text-white text-2xl font-black border-4 border-black">
                                1
                            </div>
                            <div>
                                <h3 className="text-xl font-black text-gray-900 mb-2">{t.reason1Title}</h3>
                                <p className="text-gray-700 text-lg">
                                    {t.reason1Text}
                                </p>
                            </div>
                        </div>

                        <div className="flex items-start gap-4">
                            <div className="flex-shrink-0 w-12 h-12 bg-orange-500 rounded-full flex items-center justify-center text-white text-2xl font-black border-4 border-black">
                                2
                            </div>
                            <div>
                                <h3 className="text-xl font-black text-gray-900 mb-2">{t.reason2Title}</h3>
                                <p className="text-gray-700 text-lg">
                                    {t.reason2Text}
                                </p>
                            </div>
                        </div>

                        <div className="flex items-start gap-4">
                            <div className="flex-shrink-0 w-12 h-12 bg-yellow-500 rounded-full flex items-center justify-center text-white text-2xl font-black border-4 border-black">
                                3
                            </div>
                            <div>
                                <h3 className="text-xl font-black text-gray-900 mb-2">{t.reason3Title}</h3>
                                <p className="text-gray-700 text-lg">
                                    {t.reason3Text}
                                </p>
                            </div>
                        </div>
                    </div>
                </div>

                {/* The Solution - newmindr */}
                <div className="bg-gradient-to-br from-purple-600 to-blue-600 text-white rounded-3xl p-8 md:p-12 border-4 border-black shadow-[12px_12px_0px_0px_rgba(0,0,0,1)] mb-12 relative overflow-hidden">
                    {/* Eagle in corner */}
                    <div className="absolute -bottom-10 -right-10 opacity-20">
                        <img src="/eagle.png" alt="Eagle" className="w-64 h-auto rotate-12" />
                    </div>

                    <div className="relative z-10">
                        <div className="flex items-center gap-4 mb-6">
                            <div className="w-16 h-16 bg-white rounded-2xl flex items-center justify-center border-4 border-black shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]">
                                <Trophy className="w-8 h-8 text-purple-600" strokeWidth={3} />
                            </div>
                            <h2 className="text-4xl md:text-5xl font-black" style={{ textShadow: '4px 4px 0px rgba(0,0,0,0.3)' }}>
                                {t.solutionTitle}
                            </h2>
                        </div>

                        <p className="text-xl md:text-2xl font-semibold mb-8 leading-relaxed">
                            {t.solutionIntro}
                        </p>

                        <div className="grid md:grid-cols-3 gap-6 mb-8">
                            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 border-2 border-white/30">
                                <div className="w-16 h-16 bg-yellow-400 rounded-2xl flex items-center justify-center mb-3 border-4 border-black shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]">
                                    <Gamepad2 className="w-8 h-8 text-gray-900" strokeWidth={3} />
                                </div>
                                <h3 className="text-xl font-black mb-2">{t.feature1Title}</h3>
                                <p className="text-white/90">{t.feature1Text}</p>
                            </div>

                            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 border-2 border-white/30">
                                <div className="w-16 h-16 bg-cyan-400 rounded-2xl flex items-center justify-center mb-3 border-4 border-black shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]">
                                    <Target className="w-8 h-8 text-gray-900" strokeWidth={3} />
                                </div>
                                <h3 className="text-xl font-black mb-2">{t.feature2Title}</h3>
                                <p className="text-white/90">{t.feature2Text}</p>
                            </div>

                            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 border-2 border-white/30">
                                <div className="w-16 h-16 bg-pink-400 rounded-2xl flex items-center justify-center mb-3 border-4 border-black shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]">
                                    <Zap className="w-8 h-8 text-gray-900" strokeWidth={3} />
                                </div>
                                <h3 className="text-xl font-black mb-2">{t.feature3Title}</h3>
                                <p className="text-white/90">{t.feature3Text}</p>
                            </div>
                        </div>

                        <div className="bg-white/20 backdrop-blur-sm rounded-2xl p-6 border-2 border-white/40">
                            <h3 className="text-2xl font-black mb-4">{t.resultsTitle}</h3>
                            <ul className="space-y-3 text-lg">
                                <li className="flex items-center gap-3">
                                    <div className="w-8 h-8 bg-green-400 rounded-lg flex items-center justify-center border-2 border-black flex-shrink-0">
                                        <span className="text-black font-black">✓</span>
                                    </div>
                                    <span><strong>{t.result1}</strong></span>
                                </li>
                                <li className="flex items-center gap-3">
                                    <div className="w-8 h-8 bg-green-400 rounded-lg flex items-center justify-center border-2 border-black flex-shrink-0">
                                        <span className="text-black font-black">✓</span>
                                    </div>
                                    <span><strong>{t.result2}</strong></span>
                                </li>
                                <li className="flex items-center gap-3">
                                    <div className="w-8 h-8 bg-green-400 rounded-lg flex items-center justify-center border-2 border-black flex-shrink-0">
                                        <span className="text-black font-black">✓</span>
                                    </div>
                                    <span><strong>{t.result3}</strong></span>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>

                {/* Call to Action */}
                <div className="bg-white rounded-3xl p-8 md:p-12 border-4 border-black shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] text-center">
                    <div className="flex justify-center mb-6">
                        <div className="w-20 h-20 bg-gradient-to-br from-purple-600 to-blue-600 rounded-2xl flex items-center justify-center border-4 border-black shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]">
                            <Users className="w-10 h-10 text-white" strokeWidth={3} />
                        </div>
                    </div>
                    <h2 className="text-3xl md:text-5xl font-black text-gray-900 mb-6">
                        {t.ctaTitle}
                    </h2>
                    <p className="text-xl md:text-2xl text-gray-700 mb-8 leading-relaxed">
                        {t.ctaText}
                    </p>

                    <button
                        onClick={() => navigate('/process')}
                        className="group relative px-12 py-6 bg-gradient-to-r from-purple-600 to-blue-600 text-white font-black text-xl md:text-2xl rounded-2xl border-4 border-black shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] hover:shadow-[12px_12px_0px_0px_rgba(0,0,0,1)] hover:translate-x-[-4px] hover:translate-y-[-4px] transition-all duration-200 active:shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] active:translate-x-[4px] active:translate-y-[4px]"
                    >
                        <span className="relative z-10 flex items-center gap-3 justify-center">
                            {t.ctaButton}
                            <Zap className="w-6 h-6" strokeWidth={3} />
                        </span>
                        <div className="absolute inset-0 bg-gradient-to-r from-purple-700 to-blue-700 rounded-xl transform translate-x-2 translate-y-2 -z-10"></div>
                    </button>

                    <p className="text-gray-600 mt-6 text-lg italic">
                        {t.ctaFooter}
                    </p>
                </div>

            </div>
        </div>
    );
};

export default ArticleFail;
