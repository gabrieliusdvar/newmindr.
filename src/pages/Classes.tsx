import { useState } from 'react';
import { Link } from 'react-router-dom';
import {
    Sparkles, Rocket, BookOpen, Palette, Cpu, Gamepad2, Lightbulb, Brain,
    Calculator, Leaf, Puzzle, MessageCircle, Smartphone,
    Bot, Users, Code, Mic, Brush, Scale, Wrench, Zap, Crown, DollarSign,
    Music, Target, Beaker, Film, PenTool, Heart, Fingerprint,
    BarChart, Layers, Compass, Globe, ArrowRight, ChevronDown, BookMarked,
    Clock, Gift, CheckCircle2, Library
} from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';

// Course data with detailed, sales-oriented descriptions
const coursesData = {
    "8-12": {
        theme: "EXPLORERS & CREATORS",
        color: "yellow",
        borderColor: "border-yellow-400",
        bgColor: "bg-yellow-400",
        hoverBg: "hover:bg-yellow-50",
        courses: [
            {
                name: "Coding Stories",
                icon: BookOpen,
                desc: "Transform your wildest ideas into living, breathing digital adventures! Your child won't just learn to code - they'll become the author of interactive stories where characters move, backgrounds change, and every choice matters. Watch their eyes light up as they create worlds that respond to their commands.",
                tag: "STORYTELLING",
                highlights: ["Animation", "Logic Building", "Creative Writing"]
            },
            {
                name: "Comic & Visual Storytelling",
                icon: Palette,
                desc: "From blank page to published artist! Children master the secrets of professional comic creators - character design, expressive poses, dynamic panels, and visual pacing. By course end, they'll have created their own complete comic book to share with family and friends.",
                tag: "ART",
                highlights: ["Character Design", "Panel Layout", "Visual Narrative"]
            },
            {
                name: "Creative Writing Studio",
                icon: PenTool,
                desc: "Every great writer started somewhere. This isn't just writing practice - it's a creative laboratory where young minds craft epic adventures, touching poems, and compelling scripts. Professional techniques adapted for young storytellers, with personalized feedback that nurtures their unique voice.",
                tag: "WRITING",
                highlights: ["Story Structure", "Character Development", "Dialogue"]
            },
            {
                name: "Design & Creativity Lab",
                icon: Brush,
                desc: "Unlock the designer within! From logos to posters, digital art to product mockups - children explore the full spectrum of visual design. They'll learn color theory, composition, and digital tools used by real professionals, building a creative skill set that lasts a lifetime.",
                tag: "DESIGN",
                highlights: ["Color Theory", "Digital Tools", "Visual Composition"]
            },
            {
                name: "Digital Builder Lab",
                icon: Layers,
                desc: "Minecraft meets education! Using intuitive 3D building tools, children construct everything from dream homes to entire cities. Spatial reasoning, planning, and architectural thinking develop naturally as they build increasingly complex creations block by block.",
                tag: "BUILDING",
                highlights: ["3D Thinking", "Architecture", "Planning"]
            },
            {
                name: "Game Creator Studio",
                icon: Gamepad2,
                desc: "Stop playing games. Start making them! Young developers learn the complete game creation process - from initial concept to playable prototype. Level design, character mechanics, scoring systems, and player experience. Their friends will be begging to play what they've built.",
                tag: "GAMES",
                highlights: ["Game Design", "Level Creation", "Play Testing"]
            },
            {
                name: "How Things Work",
                icon: Wrench,
                desc: "Satisfy that endless curiosity! Virtual teardowns of everyday objects reveal the brilliant engineering hiding in plain sight. From smartphones to airplanes, bridges to roller coasters - children discover the science and ingenuity behind the modern world.",
                tag: "SCIENCE",
                highlights: ["Engineering", "Physics", "Problem Solving"]
            },
            {
                name: "Logic Quest",
                icon: Puzzle,
                desc: "Train the ultimate problem-solving brain! Through carefully crafted puzzles and challenges, children develop pattern recognition, sequential thinking, and deductive reasoning. These are the exact skills that top tech companies and universities look for.",
                tag: "LOGIC",
                highlights: ["Critical Thinking", "Pattern Recognition", "Strategy"]
            },
            {
                name: "Math Adventures",
                icon: Calculator,
                desc: "Math anxiety? Not here! Numbers come alive through games, real-world challenges, and interactive puzzles. Children don't memorize formulas - they discover why math works and how it applies to things they actually care about. Confidence skyrockets.",
                tag: "MATH",
                highlights: ["Applied Math", "Problem Solving", "Number Sense"]
            },
            {
                name: "Mini Scientists (Digital Lab)",
                icon: Beaker,
                desc: "Lab coats on! Conduct experiments that would be impossible in a regular classroom. Mix chemicals, observe reactions, test hypotheses - all in a safe virtual environment where failure is encouraged and every mistake teaches something valuable.",
                tag: "EXPERIMENTS",
                highlights: ["Scientific Method", "Observation", "Hypothesis Testing"]
            },
            {
                name: "Nature & Earth Explorer",
                icon: Leaf,
                desc: "Planet Earth is the ultimate classroom! Journey through rainforests, dive into oceans, explore weather systems, and understand ecosystems. Children develop environmental awareness and scientific literacy while marveling at nature's incredible designs.",
                tag: "NATURE",
                highlights: ["Ecology", "Climate", "Conservation"]
            },
            {
                name: "Problem Solvers Lab",
                icon: Lightbulb,
                desc: "Real problems. Real solutions. Real impact. Children tackle challenges that matter - from community issues to environmental puzzles. They learn design thinking, prototyping, and the satisfaction of creating solutions that could actually work.",
                tag: "INNOVATION",
                highlights: ["Design Thinking", "Prototyping", "Impact"]
            },
            {
                name: "Space Explorers",
                icon: Rocket,
                desc: "Houston, we have curiosity! From the Moon to Mars, black holes to distant galaxies - children explore the cosmos with the latest discoveries from NASA and ESA. Rocket science becomes accessible, and space dreams become achievable goals.",
                tag: "SPACE",
                highlights: ["Astronomy", "Space Science", "Exploration"]
            },
            {
                name: "Speak & Share",
                icon: MessageCircle,
                desc: "Confidence is a superpower. Through guided practice in a supportive environment, children learn to present ideas clearly, think on their feet, and express themselves with conviction. These communication skills will serve them for life.",
                tag: "COMMUNICATION",
                highlights: ["Public Speaking", "Confidence", "Articulation"]
            },
            {
                name: "Tech Smarts",
                icon: Smartphone,
                desc: "Navigate the digital world like a pro! Beyond just using technology, children understand how it works, how to stay safe online, and how to be responsible digital citizens. Critical skills for the connected generation.",
                tag: "DIGITAL LITERACY",
                highlights: ["Online Safety", "Digital Skills", "Critical Thinking"]
            },
            {
                name: "Thinking Like a Pro",
                icon: Brain,
                desc: "Learn how experts think! From chess grandmasters to successful entrepreneurs - we break down advanced thinking strategies into fun, practical exercises. Strategic planning, decision-making, and mental frameworks that give your child an edge.",
                tag: "CRITICAL THINKING",
                highlights: ["Strategy", "Decision Making", "Mental Models"]
            }
        ]
    },
    "13-16": {
        theme: "INNOVATORS & BUILDERS",
        color: "cyan",
        borderColor: "border-cyan-400",
        bgColor: "bg-cyan-400",
        hoverBg: "hover:bg-cyan-50",
        courses: [
            {
                name: "AI & Future Tech Explorer",
                icon: Bot,
                desc: "The future belongs to those who understand it! Dive deep into artificial intelligence, machine learning, and emerging technologies. Not just theory - students build actual AI projects and understand the technology that's reshaping every industry.",
                tag: "AI",
                highlights: ["Machine Learning", "AI Ethics", "Future Trends"]
            },
            {
                name: "Change-Making Projects",
                icon: Heart,
                desc: "Make a difference. Mean it. Students identify real problems in their communities and develop actionable solutions. From environmental initiatives to social impact projects - this is where purpose meets action and portfolios gain substance.",
                tag: "IMPACT",
                highlights: ["Social Impact", "Project Management", "Leadership"]
            },
            {
                name: "Code Your First App",
                icon: Code,
                desc: "From idea to app store - for real! Students learn the complete mobile development process using industry-standard tools. By course end, they'll have a functional app they designed, coded, and can actually show off to friends and family.",
                tag: "DEVELOPMENT",
                highlights: ["Mobile Development", "UI Design", "Programming"]
            },
            {
                name: "Confident Public Speaking",
                icon: Mic,
                desc: "Own every room you walk into. Advanced presentation techniques, persuasion psychology, and stage presence training. Students practice in safe spaces and develop the commanding communication skills that distinguish leaders from followers.",
                tag: "SPEAKING",
                highlights: ["Persuasion", "Stage Presence", "Storytelling"]
            },
            {
                name: "Creative Portfolio Sprint",
                icon: Brush,
                desc: "Your work speaks louder than grades! Students build professional-quality portfolios showcasing their best projects. Learn curation, presentation, and personal branding - essential for college applications and future opportunities.",
                tag: "PORTFOLIO",
                highlights: ["Personal Branding", "Curation", "Presentation"]
            },
            {
                name: "Debate & Critical Thinking",
                icon: Scale,
                desc: "Win arguments with logic, not volume. Students master research techniques, argumentation frameworks, and rhetorical strategies. They learn to defend positions, consider opposing views, and think critically about complex issues.",
                tag: "DEBATE",
                highlights: ["Argumentation", "Research", "Rhetoric"]
            },
            {
                name: "Engineering & Robotics Basics",
                icon: Wrench,
                desc: "Build machines that move, think, and solve problems! From mechanical principles to electronic components, students design and prototype real robotic systems. The perfect launchpad for future engineers and innovators.",
                tag: "ROBOTICS",
                highlights: ["Mechanical Design", "Electronics", "Programming"]
            },
            {
                name: "Idea to Startup",
                icon: Zap,
                desc: "Every billion-dollar company started as an idea. Students learn the entrepreneurial mindset - identifying opportunities, validating concepts, and building minimum viable products. The business world won't wait for graduation.",
                tag: "STARTUP",
                highlights: ["Business Model", "Validation", "MVP"]
            },
            {
                name: "Leadership in Teams",
                icon: Crown,
                desc: "Leaders aren't born - they're built. Students develop practical leadership skills through collaborative projects, team dynamics exercises, and real responsibility. They learn to motivate others, manage conflicts, and drive results.",
                tag: "LEADERSHIP",
                highlights: ["Team Dynamics", "Motivation", "Conflict Resolution"]
            },
            {
                name: "Marketing & Branding for Teens",
                icon: Target,
                desc: "Understand the psychology behind every purchase. Students learn marketing fundamentals, brand building, and digital strategy. Whether promoting their own projects or understanding the world around them, these skills are invaluable.",
                tag: "MARKETING",
                highlights: ["Brand Strategy", "Digital Marketing", "Psychology"]
            },
            {
                name: "Money, Projects & Smart Decisions",
                icon: DollarSign,
                desc: "Financial literacy schools don't teach! Budgeting, investing basics, project economics, and smart decision-making frameworks. Students graduate with practical money skills that will save them from costly mistakes.",
                tag: "FINANCE",
                highlights: ["Budgeting", "Investment", "Decision Making"]
            },
            {
                name: "Music & Sound Creation",
                icon: Music,
                desc: "Create the soundtrack of your life! From beat production to full compositions, students master digital audio workstations used by professional producers. No prior musical experience required - just creativity and passion.",
                tag: "MUSIC",
                highlights: ["Production", "Composition", "DAW Skills"]
            },
            {
                name: "Pitch Like a Founder",
                icon: Sparkles,
                desc: "Sell your ideas to anyone. The art and science of the perfect pitch - whether for a startup, a school project, or convincing parents. Students learn to distill complex ideas into compelling narratives that move people to action.",
                tag: "PITCHING",
                highlights: ["Storytelling", "Persuasion", "Clarity"]
            },
            {
                name: "Science Experiments That Matter",
                icon: Beaker,
                desc: "Science with real-world impact! Students conduct experiments addressing actual problems - water quality, air pollution, renewable energy. They develop research skills while working on projects worth putting on college applications.",
                tag: "SCIENCE",
                highlights: ["Research Methods", "Data Analysis", "Impact"]
            },
            {
                name: "Storytelling for Games & Film",
                icon: Film,
                desc: "Master the narrative arts! From character arcs to world-building, dialogue to pacing - students learn storytelling techniques used in blockbuster films and bestselling games. Their stories will captivate audiences.",
                tag: "STORYTELLING",
                highlights: ["Narrative Design", "Character Arcs", "World Building"]
            },
            {
                name: "Visual Design Lab",
                icon: PenTool,
                desc: "Design like a professional. Typography, color theory, layout principles, and visual hierarchy - the building blocks of great design. Students create polished work that stands out in any context.",
                tag: "DESIGN",
                highlights: ["Typography", "Layout", "Visual Hierarchy"]
            }
        ]
    },
    "17-19": {
        theme: "FUTURE LEADERS",
        color: "purple",
        borderColor: "border-purple-400",
        bgColor: "bg-purple-400",
        hoverBg: "hover:bg-purple-50",
        courses: [
            {
                name: "AI Tools & Promptcraft",
                icon: Bot,
                desc: "Master the tools reshaping every industry. From ChatGPT to Midjourney, students learn to leverage AI effectively - prompt engineering, workflow integration, and ethical considerations. The skills that will define the next decade of work.",
                tag: "AI",
                highlights: ["Prompt Engineering", "AI Workflows", "Ethics"]
            },
            {
                name: "Automation & No-Code Systems",
                icon: Cpu,
                desc: "Build powerful systems without writing code! Using tools like Zapier, Notion, and Airtable, students automate workflows and create applications that solve real problems. The ultimate productivity multiplier.",
                tag: "AUTOMATION",
                highlights: ["Workflow Design", "No-Code Tools", "Efficiency"]
            },
            {
                name: "Biotech & Health Explorations",
                icon: Heart,
                desc: "Where biology meets technology. Students explore genetic engineering, bioinformatics, and health innovation. Perfect preparation for careers in medicine, biotech startups, or scientific research.",
                tag: "BIOTECH",
                highlights: ["Genetics", "Bioinformatics", "Health Innovation"]
            },
            {
                name: "Brand Design Studio",
                icon: Palette,
                desc: "Create brands that companies pay thousands for. Logo design, brand identity systems, style guides, and visual strategy. Students build professional-caliber portfolios that could land them freelance clients today.",
                tag: "BRANDING",
                highlights: ["Logo Design", "Brand Systems", "Visual Identity"]
            },
            {
                name: "Cybersecurity Essentials",
                icon: Fingerprint,
                desc: "Protect and defend in the digital age. Ethical hacking, security fundamentals, and threat analysis. One of the fastest-growing career fields with critical importance - and students can start building expertise now.",
                tag: "SECURITY",
                highlights: ["Ethical Hacking", "Security Analysis", "Defense"]
            },
            {
                name: "Data Science Foundations",
                icon: BarChart,
                desc: "Turn data into decisions. Statistics, visualization, and analytics using real datasets. Students learn Python, understand machine learning basics, and develop the data literacy that every industry now demands.",
                tag: "DATA",
                highlights: ["Statistics", "Python", "Visualization"]
            },
            {
                name: "Digital Illustration & Visual Style",
                icon: Brush,
                desc: "Develop a signature artistic voice. Advanced digital illustration techniques, style development, and professional workflows. Students create portfolio pieces that showcase their unique artistic identity.",
                tag: "ILLUSTRATION",
                highlights: ["Style Development", "Techniques", "Portfolio"]
            },
            {
                name: "Engineering Design Challenge",
                icon: Compass,
                desc: "Tackle complex engineering problems like a pro. Design thinking, prototyping, iteration, and testing. Students work on challenges that mirror real engineering projects and build problem-solving skills that transfer everywhere.",
                tag: "ENGINEERING",
                highlights: ["Design Process", "Prototyping", "Testing"]
            },
            {
                name: "Leadership and Negotiation",
                icon: Crown,
                desc: "Lead organizations and close deals. Advanced leadership frameworks, negotiation psychology, and executive presence. The skills that distinguish executives from employees - taught before they're even needed.",
                tag: "LEADERSHIP",
                highlights: ["Negotiation", "Executive Presence", "Strategy"]
            },
            {
                name: "Marketing & Content Strategy",
                icon: Target,
                desc: "Marketing that actually converts. Content strategy, analytics, growth hacking, and campaign design. Students learn the complete digital marketing stack used by successful startups and agencies.",
                tag: "MARKETING",
                highlights: ["Content Strategy", "Analytics", "Growth"]
            },
            {
                name: "Physics of Everyday Tech",
                icon: Lightbulb,
                desc: "Understand the science powering modern life. From smartphone screens to electric vehicles, quantum computing to renewable energy - physics made practical, relevant, and genuinely fascinating.",
                tag: "PHYSICS",
                highlights: ["Applied Physics", "Technology", "Innovation"]
            },
            {
                name: "Short Film & Storytelling",
                icon: Film,
                desc: "Direct films that move people. Cinematography, editing, sound design, and narrative craft. Students produce short films that could screen at festivals - and learn the complete filmmaking process.",
                tag: "FILMMAKING",
                highlights: ["Cinematography", "Editing", "Narrative"]
            },
            {
                name: "Social Impact Lab",
                icon: Globe,
                desc: "Design solutions for humanity's biggest challenges. Systems thinking, social entrepreneurship, and sustainable innovation. Students work on projects that could actually change the world - and look incredible on applications.",
                tag: "IMPACT",
                highlights: ["Systems Thinking", "Social Entrepreneurship", "Sustainability"]
            },
            {
                name: "Startup Idea to MVP",
                icon: Rocket,
                desc: "Build something real. From problem identification to working product, students experience the complete startup journey. Customer interviews, prototyping, testing, and iteration - the same process behind billion-dollar companies.",
                tag: "STARTUP",
                highlights: ["Customer Discovery", "MVP Development", "Iteration"]
            },
            {
                name: "UX & Product Design Sprint",
                icon: Layers,
                desc: "Design products people love to use. User research, wireframing, prototyping, and usability testing. Students learn the design thinking process used at Google, Apple, and top startups worldwide.",
                tag: "UX",
                highlights: ["User Research", "Prototyping", "Testing"]
            },
            {
                name: "Web App Builder",
                icon: Code,
                desc: "Full-stack development for the real world. React, databases, APIs, and deployment. Students build complete web applications from scratch - the same skills that command top salaries in tech.",
                tag: "WEB DEV",
                highlights: ["React", "Databases", "Deployment"]
            }
        ]
    }
};

const ageGroups = ["8-12", "13-16", "17-19"] as const;

export default function Classes() {
    const { language } = useLanguage();
    const [activeGroup, setActiveGroup] = useState<typeof ageGroups[number]>("8-12");
    const [expandedCourse, setExpandedCourse] = useState<string | null>(null);
    const [hoveredCourse, setHoveredCourse] = useState<string | null>(null);

    const content = {
        en: {
            title: "ALL CLASSES",
            subtitle: "48 Interactive Courses for Every Age",
            description: "From curious beginners to future leaders. Find your perfect learning path.",
            newContent: "NEW CLASSES ADDED WEEKLY!",
            existingUpdate: "Existing courses get new content regularly. The library keeps growing!",
            booksIncluded: "LIBRARY OF BOOKS INCLUDED",
            booksDesc: "Access our curated collection of well-known educational books, bestsellers, and classic titles - all included with your Basic membership!",
            booksHighlight: "Bestsellers • Classics • Educational Titles",
            explore: "EXPLORE COURSE",
            ageLabel: "YEARS",
            basicMember: "INCLUDED WITH BASIC",
            startLearning: "Start Learning Today",
            totalCourses: "48 COURSES",
            liveSessions: "LIVE SESSIONS",
            selfPaced: "SELF-PACED",
            highlights: "What you'll learn:",
            interactive: "Interactive",
            projectBased: "Project-Based",
            guided: "Guided",
            themes: {
                "8-12": "EXPLORERS & CREATORS",
                "13-16": "INNOVATORS & BUILDERS",
                "17-19": "FUTURE LEADERS"
            }
        },
        lt: {
            title: "VISOS PAMOKOS",
            subtitle: "48 Interaktyvūs Kursai Kiekvienam Amžiui",
            description: "Nuo smalsių naujokų iki ateities lyderių. Raskite savo tobulą mokymosi kelią.",
            newContent: "NAUJOS PAMOKOS KIEKVIENĄ SAVAITĘ!",
            existingUpdate: "Esami kursai nuolat papildomi nauju turiniu. Biblioteka nuolat auga!",
            booksIncluded: "KNYGŲ BIBLIOTEKA ĮTRAUKTA",
            booksDesc: "Prieiga prie mūsų atrinktos žinomų edukacinių knygų kolekcijos, bestselerių ir klasikinių leidinių - viskas įtraukta su Basic naryste!",
            booksHighlight: "Bestseleriai • Klasika • Edukaciniai Leidiniai",
            explore: "TYRINĖTI KURSĄ",
            ageLabel: "METAI",
            basicMember: "ĮTRAUKTA SU BASIC",
            startLearning: "Pradėk Mokytis Šiandien",
            totalCourses: "48 KURSAI",
            liveSessions: "GYVI UŽSIĖMIMAI",
            selfPaced: "SAVO TEMPU",
            highlights: "Ko išmoksite:",
            interactive: "Interaktyvus",
            projectBased: "Projektų pagrindas",
            guided: "Vadovaujamas",
            themes: {
                "8-12": "TYRINĖTOJAI IR KŪRĖJAI",
                "13-16": "NOVATORIAI IR STATYTOJAI",
                "17-19": "ATEITIES LYDERIAI"
            }
        },
        ru: {
            title: "ВСЕ КЛАССЫ",
            subtitle: "48 Интерактивных Курсов Для Каждого Возраста",
            description: "От любознательных новичков до будущих лидеров. Найдите свой идеальный путь.",
            newContent: "НОВЫЕ КЛАССЫ КАЖДУЮ НЕДЕЛЮ!",
            existingUpdate: "Существующие курсы регулярно обновляются. Библиотека постоянно растёт!",
            booksIncluded: "БИБЛИОТЕКА КНИГ ВКЛЮЧЕНА",
            booksDesc: "Доступ к нашей подборке известных образовательных книг, бестселлеров и классических изданий - всё включено в базовую подписку!",
            booksHighlight: "Бестселлеры • Классика • Образовательные Издания",
            explore: "ИЗУЧИТЬ КУРС",
            ageLabel: "ЛЕТ",
            basicMember: "ВКЛЮЧЕНО В БАЗОВУЮ",
            startLearning: "Начни Учиться Сегодня",
            totalCourses: "48 КУРСОВ",
            liveSessions: "ЖИВЫЕ СЕССИИ",
            selfPaced: "В СВОЁМ ТЕМПЕ",
            highlights: "Чему научитесь:",
            interactive: "Интерактивный",
            projectBased: "Проектный",
            guided: "С наставником",
            themes: {
                "8-12": "ИССЛЕДОВАТЕЛИ И ТВОРЦЫ",
                "13-16": "НОВАТОРЫ И СТРОИТЕЛИ",
                "17-19": "ЛИДЕРЫ БУДУЩЕГО"
            }
        }
    };

    const t = content[language as keyof typeof content] || content.en;
    const currentGroup = coursesData[activeGroup];

    return (
        <div className="min-h-screen bg-white pt-24">
            {/* Hero Section */}
            <section className="container mx-auto px-6 py-16 text-center">
                <div className="inline-flex items-center gap-2 px-4 py-2 bg-emerald-100 border-2 border-black rounded-full font-bold text-sm mb-6 shadow-[3px_3px_0px_0px_rgba(0,0,0,1)]">
                    <Sparkles className="w-4 h-4" />
                    {t.totalCourses}
                </div>

                <h1 className="text-5xl md:text-7xl font-black text-gray-900 mb-4 tracking-tight">
                    {t.title}
                </h1>
                <p className="text-xl md:text-2xl font-bold text-gray-700 mb-2">
                    {t.subtitle}
                </p>
                <p className="text-lg text-gray-500 max-w-2xl mx-auto mb-12">
                    {t.description}
                </p>

                {/* Stats Cards */}
                <div className="flex flex-wrap justify-center gap-4 mb-16">
                    <div className="px-6 py-3 bg-yellow-400 border-2 border-black rounded-xl font-bold shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] flex items-center gap-2">
                        <BookMarked className="w-5 h-5" />
                        {t.totalCourses}
                    </div>
                    <div className="px-6 py-3 bg-cyan-400 border-2 border-black rounded-xl font-bold shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] flex items-center gap-2">
                        <Users className="w-5 h-5" />
                        {t.liveSessions}
                    </div>
                    <div className="px-6 py-3 bg-purple-400 border-2 border-black rounded-xl font-bold shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] flex items-center gap-2">
                        <Clock className="w-5 h-5" />
                        {t.selfPaced}
                    </div>
                </div>
            </section>

            {/* Age Group Selector */}
            <section className="container mx-auto px-6 mb-12">
                <div className="flex flex-wrap justify-center gap-4">
                    {ageGroups.map((group) => {
                        const groupData = coursesData[group];
                        const isActive = activeGroup === group;
                        return (
                            <button
                                key={group}
                                onClick={() => setActiveGroup(group)}
                                className={`relative px-8 py-6 border-4 border-black rounded-2xl font-black text-xl transition-all duration-300 ${isActive
                                    ? `${groupData.bgColor} shadow-[6px_6px_0px_0px_rgba(0,0,0,1)] scale-105`
                                    : 'bg-white shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] hover:shadow-[6px_6px_0px_0px_rgba(0,0,0,1)] hover:scale-102'
                                    }`}
                            >
                                <div className="text-3xl mb-1">{group} {t.ageLabel}</div>
                                <div className="text-xs uppercase tracking-widest opacity-70">{t.themes[group as keyof typeof t.themes]}</div>
                                {isActive && (
                                    <div className="absolute -top-3 -right-3 w-8 h-8 bg-black rounded-full flex items-center justify-center">
                                        <CheckCircle2 className="w-5 h-5 text-white" />
                                    </div>
                                )}
                            </button>
                        );
                    })}
                </div>
            </section>

            {/* Courses Grid */}
            <section className="container mx-auto px-6 pb-16">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
                    {currentGroup.courses.map((course, index) => {
                        const Icon = course.icon;
                        const isExpanded = expandedCourse === course.name;
                        const isHovered = hoveredCourse === course.name;

                        return (
                            <div
                                key={course.name}
                                className={`relative group cursor-pointer transition-all duration-300 ${isExpanded ? 'md:col-span-2 lg:col-span-2' : ''
                                    }`}
                                onMouseEnter={() => setHoveredCourse(course.name)}
                                onMouseLeave={() => setHoveredCourse(null)}
                                onClick={() => setExpandedCourse(isExpanded ? null : course.name)}
                                style={{ animationDelay: `${index * 50}ms` }}
                            >
                                <div
                                    className={`h-full p-6 bg-white border-4 border-black rounded-2xl transition-all duration-300 ${isHovered || isExpanded
                                        ? 'shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] -translate-x-1 -translate-y-1'
                                        : 'shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]'
                                        } ${currentGroup.hoverBg}`}
                                >
                                    {/* Tag */}
                                    <div className={`inline-block px-3 py-1 ${currentGroup.bgColor} border-2 border-black rounded-full text-xs font-bold mb-4`}>
                                        {course.tag}
                                    </div>

                                    {/* Icon */}
                                    <div className={`w-14 h-14 ${currentGroup.bgColor} border-3 border-black rounded-xl flex items-center justify-center mb-4 transition-transform duration-300 ${isHovered ? 'rotate-6 scale-110' : ''}`}>
                                        <Icon className="w-7 h-7 text-black" />
                                    </div>

                                    {/* Title */}
                                    <h3 className="text-xl font-black text-gray-900 mb-3 leading-tight">
                                        {course.name}
                                    </h3>

                                    {/* Description */}
                                    <p className={`text-gray-600 text-sm leading-relaxed transition-all duration-300 ${isExpanded ? 'line-clamp-none' : 'line-clamp-3'
                                        }`}>
                                        {course.desc}
                                    </p>

                                    {/* Expand indicator */}
                                    <div className={`mt-4 flex items-center gap-2 text-sm font-bold ${currentGroup.borderColor.replace('border-', 'text-')} transition-all duration-300`}>
                                        <span>{t.explore}</span>
                                        <ChevronDown className={`w-4 h-4 transition-transform duration-300 ${isExpanded ? 'rotate-180' : ''}`} />
                                    </div>

                                    {/* Expanded Content */}
                                    {isExpanded && (
                                        <div className="mt-6 pt-6 border-t-2 border-black animate-fadeIn">
                                            {/* Highlights */}
                                            <p className="text-xs font-bold text-gray-500 mb-2 uppercase tracking-wider">{t.highlights}</p>
                                            <div className="flex flex-wrap gap-2 mb-6">
                                                {course.highlights.map((highlight, i) => (
                                                    <span key={i} className={`px-3 py-1 ${currentGroup.bgColor} border-2 border-black rounded-full text-xs font-bold`}>
                                                        {highlight}
                                                    </span>
                                                ))}
                                            </div>
                                            <div className="flex flex-wrap gap-2 mb-4">
                                                <span className="px-3 py-1 bg-emerald-100 border-2 border-black rounded-full text-xs font-bold">{t.interactive}</span>
                                                <span className="px-3 py-1 bg-blue-100 border-2 border-black rounded-full text-xs font-bold">{t.projectBased}</span>
                                                <span className="px-3 py-1 bg-pink-100 border-2 border-black rounded-full text-xs font-bold">{t.guided}</span>
                                            </div>
                                            <Link
                                                to="/process"
                                                className={`inline-flex items-center gap-2 px-6 py-3 ${currentGroup.bgColor} border-2 border-black rounded-xl font-bold shadow-[3px_3px_0px_0px_rgba(0,0,0,1)] hover:shadow-none hover:translate-x-[3px] hover:translate-y-[3px] transition-all`}
                                                onClick={(e) => e.stopPropagation()}
                                            >
                                                {t.startLearning}
                                                <ArrowRight className="w-4 h-4" />
                                            </Link>
                                        </div>
                                    )}
                                </div>
                            </div>
                        );
                    })}
                </div>
            </section>

            {/* New Content Banner */}
            <section className="bg-black text-white py-16">
                <div className="container mx-auto px-6">
                    <div className="max-w-4xl mx-auto text-center">
                        <div className="inline-flex items-center gap-2 px-4 py-2 bg-emerald-500 border-2 border-white rounded-full font-bold text-sm mb-6 animate-pulse">
                            <Sparkles className="w-4 h-4" />
                            {t.newContent}
                        </div>
                        <p className="text-xl text-gray-300 mb-12">
                            {t.existingUpdate}
                        </p>

                        {/* Books Included Card - Enhanced */}
                        <div className="inline-block p-8 md:p-10 bg-gradient-to-br from-amber-400 via-yellow-400 to-orange-400 border-4 border-white rounded-3xl shadow-[8px_8px_0px_0px_rgba(255,255,255,0.3)] text-black max-w-2xl">
                            <div className="flex items-center justify-center gap-3 mb-4">
                                <Library className="w-10 h-10" />
                                <span className="text-2xl md:text-3xl font-black">{t.booksIncluded}</span>
                            </div>
                            <p className="text-lg font-medium opacity-90 mb-4">{t.booksDesc}</p>
                            <p className="text-sm font-black opacity-70 mb-6">{t.booksHighlight}</p>
                            <div className="inline-flex items-center gap-2 px-6 py-3 bg-black text-white rounded-full font-bold text-sm">
                                <Gift className="w-4 h-4" />
                                {t.basicMember}
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* CTA Section */}
            <section className="container mx-auto px-6 py-20">
                <div className="max-w-3xl mx-auto text-center">
                    <h2 className="text-4xl md:text-5xl font-black mb-8">
                        {t.startLearning}
                    </h2>
                    <Link
                        to="/process"
                        className="inline-flex items-center gap-3 px-10 py-5 bg-emerald-400 border-4 border-black rounded-2xl font-black text-xl shadow-[6px_6px_0px_0px_rgba(0,0,0,1)] hover:shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] hover:-translate-x-1 hover:-translate-y-1 transition-all"
                    >
                        <Rocket className="w-6 h-6" />
                        {t.startLearning}
                        <ArrowRight className="w-6 h-6" />
                    </Link>
                </div>
            </section>
        </div>
    );
}
