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
            subtitle: "It's not about breaking rules. It's about surviving a broken system.",
            intro: {
                p1: "Let's be honest - cheating has always existed. But today, the reasons behind it have shifted dramatically. We live in an age where answers are one Google search away, where kids are constantly compared to their peers, and where the pressure to get good grades can feel overwhelming. Most children who cheat aren't rebels trying to game the system. They're just trying to keep up.",
                p2: "As parents and educators, this should make us pause. When a child cheats, it's rarely about laziness or bad character. More often, it's a red flag that something in their learning experience isn't working. The question we should be asking isn't \"How do we catch cheaters?\" but \"Why does cheating feel like the only option?\"",
                insight: "Here's what we've learned: Kids don't cheat because they want shortcuts. They cheat because they're terrified of looking stupid in front of others."
            },
            interactiveTitle: "WHERE LEARNING BREAKS DOWN",
            interactiveSubtitle: "Click on each issue to understand what's really happening.",
            points: [
                {
                    id: 1,
                    icon: Shield,
                    title: "When Mistakes Feel Dangerous",
                    symptom: "Children cheat when making errors feels unsafe",
                    diagnosis: "In many classrooms, a wrong answer leads to embarrassment. A low grade means disappointment from parents. This creates fear.",
                    fix: "When we create spaces where mistakes are part of learning - not failures to hide - kids stop needing to cheat. Interactive learning does exactly this: it rewards exploration, not just correct answers."
                },
                {
                    id: 2,
                    icon: Search,
                    title: "Learning Without Understanding",
                    symptom: "Memorizing facts without knowing why they matter",
                    diagnosis: "If the goal is just to remember the right answer for a test, why would anyone bother understanding it? Kids are smart - they optimize for what's measured.",
                    fix: "Real learning happens when kids can experiment, try different approaches, and see how things connect. When understanding becomes the goal, cheating becomes pointless."
                },
                {
                    id: 3,
                    icon: AlertTriangle,
                    title: "Too Much Pressure from Adults",
                    symptom: "When grades matter more than growth",
                    diagnosis: "We mean well, but sometimes our focus on results sends the wrong message. When we celebrate only outcomes, kids learn that the process doesn't count.",
                    fix: "What if we praised effort as much as achievement? What if trying something hard was valued even when it didn't work out? Kids need to know that how they learn matters, not just what they score."
                },
                {
                    id: 4,
                    icon: Zap,
                    title: "Plain Old Boredom",
                    symptom: "Disengagement is a bigger problem than we admit",
                    diagnosis: "Bored kids mentally check out. And when they check out, copying an answer feels easier than struggling through material that doesn't interest them.",
                    fix: "Engaging content changes everything. When learning feels like a game - with challenges, choices, and immediate feedback - kids want to participate. They don't need to cheat when they're actually enjoying themselves."
                },
                {
                    id: 5,
                    icon: Heart,
                    title: "No Sense of Ownership",
                    symptom: "Learning happens to them, not with them",
                    diagnosis: "When kids have no control over what, when, or how they learn, they feel like passengers. And passengers don't care about the journey.",
                    fix: "Give children choices. Let them set their pace. When they feel ownership over their learning, they develop pride in their progress. Why cheat on something you actually care about?"
                },
                {
                    id: 6,
                    icon: Monitor,
                    title: "Bad Design, Not Bad Kids",
                    symptom: "The technology isn't the problem - how we use it is",
                    diagnosis: "Passive videos followed by simple quizzes are practically an invitation to cheat. If the content doesn't require thinking, why would kids think?",
                    fix: "Well-designed learning uses simulations, problem-solving scenarios, and activities where there isn't just one right answer. When you build for curiosity instead of compliance, cheating naturally disappears."
                }
            ],
            conclusion: {
                title: "The Real Question We Should Ask",
                text: "Instead of asking \"Why do kids cheat?\" we need to ask: \"What are we teaching them to value?\"",
                list: ["Are we rewarding speed over understanding?", "Are we valuing grades over genuine curiosity?", "Are we pushing perfection instead of celebrating progress?"],
                final: "No child wakes up wanting to cheat. They wake up wanting to feel capable, accepted, and proud of themselves. When we design learning experiences that meet these basic needs, cheating stops being a problem we have to police. It simply becomes unnecessary."
            },
            cta: "See How We Do It"
        },
        lt: {
            back: "Grįžti į tinklaraštį",
            title: "Kodėl vaikai sukčiauja vietoj to, kad mokytųsi",
            subtitle: "Tai ne apie taisyklių laužymą. Tai apie išgyvenimą sugedusioje sistemoje.",
            intro: {
                p1: "Būkime atviri - sukčiavimas egzistavo visada. Tačiau šiandien priežastys smarkiai pasikeitė. Gyvename laikais, kai atsakymai yra vieno Google paieškos atstumo, kai vaikai nuolat lyginami su bendraamžiais, o spaudimas gauti gerus pažymius gali atrodyti nepakeliamas. Daugelis vaikų, kurie sukčiauja, nėra maištininkai, bandantys apgauti sistemą. Jie tiesiog bando neatsilikti.",
                p2: "Kaip tėvai ir mokytojai, turėtume sustoti ir pagalvoti. Kai vaikas sukčiauja, tai retai būna dėl tinginio ar blogo charakterio. Dažniausiai tai raudonas signalas, kad kažkas mokymosi procese neveikia. Klausimas turėtų būti ne \"Kaip pagauti sukčius?\", o \"Kodėl sukčiavimas atrodo vienintelė išeitis?\"",
                insight: "Štai ką išmokome: Vaikai sukčiauja ne todėl, kad nori lengvų kelių. Jie sukčiauja, nes jiems baisu atrodyti kvailai prieš kitus."
            },
            interactiveTitle: "KUR MOKYMASIS SUGENDA",
            interactiveSubtitle: "Paspauskite ant kiekvienos problemos, kad suprastumėte, kas iš tikrųjų vyksta.",
            points: [
                {
                    id: 1,
                    icon: Shield,
                    title: "Kai klaidos atrodo pavojingos",
                    symptom: "Vaikai sukčiauja, kai klysti jaučiasi nesaugu",
                    diagnosis: "Daugelyje klasių neteisingas atsakymas sukelia gėdą. Žemas pažymys reiškia tėvų nusivylimą. Tai sukuria baimę.",
                    fix: "Kai sukuriame erdves, kur klaidos yra mokymosi dalis - o ne nesėkmės, kurias reikia slėpti - vaikams nebereikia sukčiauti. Interaktyvus mokymasis būtent tai ir daro: apdovanoja tyrinėjimą, ne tik teisingus atsakymus."
                },
                {
                    id: 2,
                    icon: Search,
                    title: "Mokymasis be supratimo",
                    symptom: "Faktų įsiminimas nežinant, kodėl jie svarbūs",
                    diagnosis: "Jei tikslas tik atsiminti teisingą atsakymą testui, kam vargti jį suprasti? Vaikai protingi - jie optimizuoja tam, kas matuojama.",
                    fix: "Tikras mokymasis vyksta, kai vaikai gali eksperimentuoti, bandyti skirtingus būdus ir matyti, kaip viskas susiję. Kai supratimas tampa tikslu, sukčiavimas tampa beprasmis."
                },
                {
                    id: 3,
                    icon: AlertTriangle,
                    title: "Per didelis suaugusiųjų spaudimas",
                    symptom: "Kai pažymiai svarbesni už augimą",
                    diagnosis: "Mes norime gero, bet kartais mūsų dėmesys rezultatams siunčia neteisingą žinutę. Kai švenčiame tik pasiekimus, vaikai išmoksta, kad procesas nesvarbus.",
                    fix: "O kas, jei girtume pastangas tiek pat, kiek pasiekimus? Jei bandymas kažko sunkaus būtų vertinamas net tada, kai nepavyksta? Vaikai turi žinoti, kad svarbu kaip jie mokosi, ne tik kokie jų balai."
                },
                {
                    id: 4,
                    icon: Zap,
                    title: "Paprasčiausias nuobodulys",
                    symptom: "Neįsitraukimas yra didesnė problema, nei pripažįstame",
                    diagnosis: "Nuobodžiaujantys vaikai mintyse išsijungia. O kai išsijungia, nusirašyti atsakymą atrodo lengviau nei kankintis su medžiaga, kuri jiems neįdomi.",
                    fix: "Įtraukiantis turinys viską keičia. Kai mokymasis primena žaidimą - su iššūkiais, pasirinkimais ir tiesioginiu grįžtamuoju ryšiu - vaikai nori dalyvauti. Jiems nereikia sukčiauti, kai jiems tikrai įdomu."
                },
                {
                    id: 5,
                    icon: Heart,
                    title: "Nuosavybės jausmo trūkumas",
                    symptom: "Mokymasis vyksta JIEMS, o ne SU jais",
                    diagnosis: "Kai vaikai nekontroliuoja, ko, kada ar kaip jie mokosi, jie jaučiasi kaip keleiviai. O keleiviai nesirūpina kelione.",
                    fix: "Duokite vaikams pasirinkimus. Leiskite jiems nustatyti savo tempą. Kai jie jaučia nuosavybę savo mokymuisi, jie išsiugdo pasididžiavimą savo pažanga. Kam sukčiauti kažkuo, kas tau iš tikrųjų rūpi?"
                },
                {
                    id: 6,
                    icon: Monitor,
                    title: "Blogas dizainas, ne blogi vaikai",
                    symptom: "Problema ne technologijos, o kaip jas naudojame",
                    diagnosis: "Pasyvūs vaizdo įrašai su paprastais testais praktiškai kviečia sukčiauti. Jei turinys nereikalauja mąstymo, kodėl vaikai turėtų mąstyti?",
                    fix: "Gerai suprojektuotas mokymasis naudoja simuliacijas, problemų sprendimo scenarijus ir veiklas, kur nėra tik vieno teisingo atsakymo. Kai kuriate smalsumui, o ne paklusnumui, sukčiavimas savaime išnyksta."
                }
            ],
            conclusion: {
                title: "Tikrasis klausimas, kurį turėtume kelti",
                text: "Vietoj klausimo \"Kodėl vaikai sukčiauja?\" turime klausti: \"Ko mes juos mokome vertinti?\"",
                list: ["Ar apdovanojame greitį vietoj supratimo?", "Ar vertiname pažymius labiau nei tikrą smalsumą?", "Ar spaudžiame tobulumą vietoj pažangos šventimo?"],
                final: "Joks vaikas nepabunda norėdamas sukčiauti. Jie pabunda norėdami jaustis gabūs, priimti ir didžiuotis savimi. Kai kuriame mokymosi patirtis, kurios atitinka šiuos pagrindinius poreikius, sukčiavimas nustoja būti problema, kurią reikia kontroliuoti. Jis tiesiog tampa nereikalingas."
            },
            cta: "Pažiūrėkite, kaip tai darome"
        },
        ru: {
            back: "Назад в блог",
            title: "Почему дети списывают вместо того, чтобы учиться",
            subtitle: "Дело не в нарушении правил. Дело в выживании в сломанной системе.",
            intro: {
                p1: "Будем честны - списывание существовало всегда. Но сегодня причины кардинально изменились. Мы живем в эпоху, когда ответы находятся на расстоянии одного поиска в Google, когда детей постоянно сравнивают со сверстниками, а давление получать хорошие оценки может казаться невыносимым. Большинство детей, которые списывают - не бунтари, пытающиеся обмануть систему. Они просто пытаются не отставать.",
                p2: "Как родители и педагоги, мы должны задуматься. Когда ребенок списывает, это редко связано с ленью или плохим характером. Чаще это красный флаг, что что-то в процессе обучения не работает. Вопрос должен быть не \"Как поймать списывающих?\", а \"Почему списывание кажется единственным выходом?\"",
                insight: "Вот что мы поняли: Дети списывают не потому, что хотят легких путей. Они списывают, потому что боятся выглядеть глупо перед другими."
            },
            interactiveTitle: "ГДЕ ОБУЧЕНИЕ ЛОМАЕТСЯ",
            interactiveSubtitle: "Нажмите на каждую проблему, чтобы понять, что происходит на самом деле.",
            points: [
                {
                    id: 1,
                    icon: Shield,
                    title: "Когда ошибки кажутся опасными",
                    symptom: "Дети списывают, когда ошибаться небезопасно",
                    diagnosis: "Во многих классах неправильный ответ ведет к смущению. Низкая оценка означает разочарование родителей. Это создает страх.",
                    fix: "Когда мы создаем пространство, где ошибки - часть обучения, а не провалы, которые нужно скрывать, детям больше не нужно списывать. Интерактивное обучение именно это и делает: награждает исследование, а не только правильные ответы."
                },
                {
                    id: 2,
                    icon: Search,
                    title: "Обучение без понимания",
                    symptom: "Запоминание фактов без понимания их значения",
                    diagnosis: "Если цель - просто запомнить правильный ответ для теста, зачем утруждаться его понимать? Дети умны - они оптимизируют то, что измеряется.",
                    fix: "Настоящее обучение происходит, когда дети могут экспериментировать, пробовать разные подходы и видеть связи. Когда понимание становится целью, списывание становится бессмысленным."
                },
                {
                    id: 3,
                    icon: AlertTriangle,
                    title: "Слишком много давления от взрослых",
                    symptom: "Когда оценки важнее развития",
                    diagnosis: "Мы желаем добра, но иногда наш фокус на результатах посылает неправильный сигнал. Когда мы празднуем только достижения, дети учатся, что процесс не важен.",
                    fix: "Что если бы мы хвалили усилия так же, как достижения? Если бы попытка сделать что-то сложное ценилась даже когда не получилось? Дети должны знать, что важно как они учатся, а не только какие у них оценки."
                },
                {
                    id: 4,
                    icon: Zap,
                    title: "Обычная скука",
                    symptom: "Отсутствие вовлеченности - большая проблема, чем мы признаем",
                    diagnosis: "Скучающие дети мысленно отключаются. А когда отключаются, списать ответ кажется легче, чем мучиться с неинтересным материалом.",
                    fix: "Увлекательный контент меняет все. Когда обучение похоже на игру - с вызовами, выборами и мгновенной обратной связью - дети хотят участвовать. Им не нужно списывать, когда им действительно интересно."
                },
                {
                    id: 5,
                    icon: Heart,
                    title: "Отсутствие чувства собственности",
                    symptom: "Обучение происходит с ними, а не у них",
                    diagnosis: "Когда дети не контролируют что, когда и как они учатся, они чувствуют себя пассажирами. А пассажиры не заботятся о путешествии.",
                    fix: "Дайте детям выбор. Позвольте им задавать свой темп. Когда они чувствуют владение своим обучением, они развивают гордость за свой прогресс. Зачем списывать то, что тебе действительно важно?"
                },
                {
                    id: 6,
                    icon: Monitor,
                    title: "Плохой дизайн, а не плохие дети",
                    symptom: "Проблема не в технологиях, а в том, как мы их используем",
                    diagnosis: "Пассивные видео с простыми тестами - практически приглашение списывать. Если контент не требует мышления, зачем детям думать?",
                    fix: "Хорошо спроектированное обучение использует симуляции, сценарии решения проблем и активности, где нет единственного правильного ответа. Когда вы строите для любопытства, а не послушания, списывание исчезает само собой."
                }
            ],
            conclusion: {
                title: "Настоящий вопрос, который мы должны задать",
                text: "Вместо \"Почему дети списывают?\" нужно спросить: \"Чему мы учим их ценить?\"",
                list: ["Награждаем ли мы скорость вместо понимания?", "Ценим ли мы оценки больше искреннего любопытства?", "Давим ли мы на совершенство вместо празднования прогресса?"],
                final: "Ни один ребенок не просыпается с желанием списать. Они просыпаются желая чувствовать себя способными, принятыми и гордыми собой. Когда мы создаем опыт обучения, отвечающий этим базовым потребностям, списывание перестает быть проблемой, которую нужно контролировать. Оно просто становится ненужным."
            },
            cta: "Посмотрите, как мы это делаем"
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
                        {language === 'lt' ? 'Sistemos gedimas' : language === 'ru' ? 'Сбой системы' : 'System Failure'}
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
                                            {language === 'lt' ? 'Klaida' : language === 'ru' ? 'Ошибка' : 'Issue'} 0{point.id}
                                        </div>
                                    </div>
                                    <h3 className="font-bold text-lg mb-2 leading-tight">{point.title}</h3>

                                    <div className={`overflow-hidden transition-all duration-500 ${activePoint === point.id ? 'max-h-96 opacity-100 mt-4' : 'max-h-0 opacity-0'}`}>
                                        <div className="space-y-3 text-sm">
                                            <div className="bg-red-500/20 p-3 rounded-lg border border-red-500/30">
                                                <div className="flex items-center gap-2 text-red-100 font-bold text-xs uppercase mb-1">
                                                    <AlertTriangle className="w-3 h-3" /> {language === 'lt' ? 'Problema' : language === 'ru' ? 'Проблема' : 'Problem'}
                                                </div>
                                                <p className="text-white/90 font-medium leading-relaxed">{point.diagnosis}</p>
                                            </div>
                                            <div className="bg-white/20 p-3 rounded-lg border border-white/30">
                                                <div className="flex items-center gap-2 text-white font-bold text-xs uppercase mb-1">
                                                    <CheckCircle2 className="w-3 h-3" /> {language === 'lt' ? 'Sprendimas' : language === 'ru' ? 'Решение' : 'Solution'}
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
                    <Link to="/process" className="inline-flex items-center gap-3 bg-gray-900 text-white px-8 py-4 rounded-xl font-black uppercase tracking-widest hover:bg-emerald-500 transition-all hover:-translate-y-1 shadow-lg">
                        {t.cta}
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
