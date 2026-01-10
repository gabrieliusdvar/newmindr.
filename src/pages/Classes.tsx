import { useState } from 'react';
import { Link } from 'react-router-dom';
import {
    Sparkles, Rocket, BookOpen, Palette, Cpu, Gamepad2, Lightbulb, Brain,
    Calculator, Leaf, Puzzle, MessageCircle, Smartphone,
    Bot, Users, Code, Mic, Brush, Scale, Wrench, Zap, Crown, DollarSign,
    Music, Target, Beaker, Film, PenTool, Heart, Fingerprint,
    BarChart, Layers, Compass, Globe, ArrowRight, ChevronDown, BookMarked,
    Clock, Gift, CheckCircle2
} from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';

// Course data with unique descriptions and icons
const coursesData = {
    "8-12": {
        theme: "EXPLORERS & CREATORS",
        color: "yellow",
        borderColor: "border-yellow-400",
        bgColor: "bg-yellow-400",
        hoverBg: "hover:bg-yellow-50",
        courses: [
            { name: "Coding Stories", icon: BookOpen, desc: "Turn your imagination into interactive adventures! Learn to code by creating your own animated stories.", tag: "STORYTELLING" },
            { name: "Comic & Visual Storytelling", icon: Palette, desc: "Become a comic book artist! Design characters, panels, and bring narratives to life visually.", tag: "ART" },
            { name: "Creative Writing Studio", icon: PenTool, desc: "Craft epic tales, poems, and scripts. Your words, your worlds, your stories.", tag: "WRITING" },
            { name: "Design & Creativity Lab", icon: Brush, desc: "Experiment with colors, shapes, and digital tools. Design anything you can dream.", tag: "DESIGN" },
            { name: "Digital Builder Lab", icon: Layers, desc: "Build digital worlds block by block. From simple structures to complex creations.", tag: "BUILDING" },
            { name: "Game Creator Studio", icon: Gamepad2, desc: "Design your own video games! Learn game mechanics, levels, and player experience.", tag: "GAMES" },
            { name: "How Things Work", icon: Wrench, desc: "Take apart the world (virtually)! Discover the science behind everyday objects.", tag: "SCIENCE" },
            { name: "Logic Quest", icon: Puzzle, desc: "Solve mind-bending puzzles and train your brain to think like a detective.", tag: "LOGIC" },
            { name: "Math Adventures", icon: Calculator, desc: "Math isn't boring here! Explore numbers through games, puzzles, and real challenges.", tag: "MATH" },
            { name: "Mini Scientists (Digital Lab)", icon: Beaker, desc: "Conduct virtual experiments! Mix, observe, and discover like a real scientist.", tag: "EXPERIMENTS" },
            { name: "Nature & Earth Explorer", icon: Leaf, desc: "Journey through ecosystems, weather patterns, and the wonders of our planet.", tag: "NATURE" },
            { name: "Problem Solvers Lab", icon: Lightbulb, desc: "Face real-world challenges and invent creative solutions. Think. Build. Solve.", tag: "INNOVATION" },
            { name: "Space Explorers", icon: Rocket, desc: "Blast off to the stars! Learn about planets, galaxies, and space missions.", tag: "SPACE" },
            { name: "Speak & Share", icon: MessageCircle, desc: "Find your voice! Practice presenting ideas confidently and clearly.", tag: "COMMUNICATION" },
            { name: "Tech Smarts", icon: Smartphone, desc: "Navigate the digital world safely and smartly. From apps to cybersecurity basics.", tag: "DIGITAL LITERACY" },
            { name: "Thinking Like a Pro", icon: Brain, desc: "Learn how experts think. Strategy, planning, and decision-making skills.", tag: "CRITICAL THINKING" }
        ]
    },
    "13-16": {
        theme: "INNOVATORS & BUILDERS",
        color: "cyan",
        borderColor: "border-cyan-400",
        bgColor: "bg-cyan-400",
        hoverBg: "hover:bg-cyan-50",
        courses: [
            { name: "AI & Future Tech Explorer", icon: Bot, desc: "Dive into artificial intelligence, machine learning, and the tech shaping tomorrow.", tag: "AI" },
            { name: "Change-Making Projects", icon: Heart, desc: "Create projects that matter. Tackle real problems in your community.", tag: "IMPACT" },
            { name: "Code Your First App", icon: Code, desc: "From idea to app store. Build functional mobile applications from scratch.", tag: "DEVELOPMENT" },
            { name: "Confident Public Speaking", icon: Mic, desc: "Command any room. Master the art of persuasion, storytelling, and stage presence.", tag: "SPEAKING" },
            { name: "Creative Portfolio Sprint", icon: Brush, desc: "Build a stunning portfolio that showcases your unique skills and style.", tag: "PORTFOLIO" },
            { name: "Debate & Critical Thinking", icon: Scale, desc: "Argue like a champion. Research, reason, and defend your positions.", tag: "DEBATE" },
            { name: "Engineering & Robotics Basics", icon: Wrench, desc: "Build machines that move! Introduction to mechanical and robotic concepts.", tag: "ROBOTICS" },
            { name: "Idea to Startup", icon: Zap, desc: "Turn your ideas into business concepts. Entrepreneurship starts here.", tag: "STARTUP" },
            { name: "Leadership in Teams", icon: Crown, desc: "Lead with confidence. Motivate teams, manage projects, inspire action.", tag: "LEADERSHIP" },
            { name: "Marketing & Branding for Teens", icon: Target, desc: "Create brands that pop. Learn marketing psychology and visual identity.", tag: "MARKETING" },
            { name: "Money, Projects & Smart Decisions", icon: DollarSign, desc: "Financial literacy meets project management. Make smarter life choices.", tag: "FINANCE" },
            { name: "Music & Sound Creation", icon: Music, desc: "Produce beats, compose melodies, and master digital audio workstations.", tag: "MUSIC" },
            { name: "Pitch Like a Founder", icon: Sparkles, desc: "Perfect your pitch. Convince investors, teachers, anyone who matters.", tag: "PITCHING" },
            { name: "Science Experiments That Matter", icon: Beaker, desc: "Conduct experiments with real-world applications. Science with impact.", tag: "SCIENCE" },
            { name: "Storytelling for Games & Film", icon: Film, desc: "Write scripts, develop characters, and create narratives for interactive media.", tag: "STORYTELLING" },
            { name: "Visual Design Lab", icon: PenTool, desc: "Master design principles. Typography, color theory, and visual communication.", tag: "DESIGN" }
        ]
    },
    "17-19": {
        theme: "FUTURE LEADERS",
        color: "purple",
        borderColor: "border-purple-400",
        bgColor: "bg-purple-400",
        hoverBg: "hover:bg-purple-50",
        courses: [
            { name: "AI Tools & Promptcraft", icon: Bot, desc: "Master AI tools. Write effective prompts and leverage AI in your workflow.", tag: "AI" },
            { name: "Automation & No-Code Systems", icon: Cpu, desc: "Automate everything. Build systems without writing a single line of code.", tag: "AUTOMATION" },
            { name: "Biotech & Health Explorations", icon: Heart, desc: "Explore the intersection of biology and technology. Health innovation awaits.", tag: "BIOTECH" },
            { name: "Brand Design Studio", icon: Palette, desc: "Create professional brand identities. From logo to full brand systems.", tag: "BRANDING" },
            { name: "Cybersecurity Essentials", icon: Fingerprint, desc: "Protect digital assets. Learn ethical hacking and security fundamentals.", tag: "SECURITY" },
            { name: "Data Science Foundations", icon: BarChart, desc: "Turn data into insights. Statistics, visualization, and analytics.", tag: "DATA" },
            { name: "Digital Illustration & Visual Style", icon: Brush, desc: "Develop a signature artistic style. Professional digital illustration techniques.", tag: "ILLUSTRATION" },
            { name: "Engineering Design Challenge", icon: Compass, desc: "Solve complex engineering problems. Design, prototype, iterate.", tag: "ENGINEERING" },
            { name: "Leadership and Negotiation", icon: Crown, desc: "Advanced leadership strategies. Negotiate deals and lead organizations.", tag: "LEADERSHIP" },
            { name: "Marketing & Content Strategy", icon: Target, desc: "Strategic marketing for the digital age. Content that converts.", tag: "MARKETING" },
            { name: "Physics of Everyday Tech", icon: Lightbulb, desc: "Understand the physics behind modern technology. Science made practical.", tag: "PHYSICS" },
            { name: "Short Film & Storytelling", icon: Film, desc: "Direct your own short films. Cinematography, editing, and narrative.", tag: "FILMMAKING" },
            { name: "Social Impact Lab", icon: Globe, desc: "Design solutions for social challenges. Make a real difference.", tag: "IMPACT" },
            { name: "Startup Idea to MVP", icon: Rocket, desc: "Build minimum viable products. From concept to launch.", tag: "STARTUP" },
            { name: "UX & Product Design Sprint", icon: Layers, desc: "Design user experiences. Research, prototype, and test digital products.", tag: "UX" },
            { name: "Web App Builder", icon: Code, desc: "Build full-stack web applications. Modern frameworks and deployment.", tag: "WEB DEV" }
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
            booksIncluded: "BOOKS INCLUDED",
            booksDesc: "Digital books and reading materials are included with your Basic membership!",
            explore: "EXPLORE COURSE",
            ageLabel: "YEARS",
            basicMember: "BASIC MEMBERSHIP",
            startLearning: "Start Learning Today",
            totalCourses: "48 COURSES",
            liveSessions: "LIVE SESSIONS",
            selfPaced: "SELF-PACED"
        },
        lt: {
            title: "VISOS PAMOKOS",
            subtitle: "48 Interaktyvūs Kursai Kiekvienam Amžiui",
            description: "Nuo smalsių naujokų iki ateities lyderių. Raskite savo tobulą mokymosi kelią.",
            newContent: "NAUJOS PAMOKOS KIEKVIENĄ SAVAITĘ!",
            existingUpdate: "Esami kursai nuolat papildomi nauju turiniu. Biblioteka nuolat auga!",
            booksIncluded: "KNYGOS ĮTRAUKTOS",
            booksDesc: "Skaitmeninės knygos ir mokomoji medžiaga įtraukta su Basic naryste!",
            explore: "TYRINĖTI KURSĄ",
            ageLabel: "METAI",
            basicMember: "BASIC NARYSTĖ",
            startLearning: "Pradėk Mokytis Šiandien",
            totalCourses: "48 KURSAI",
            liveSessions: "GYVI UŽSIĖMIMAI",
            selfPaced: "SAVO TEMPU"
        },
        ru: {
            title: "ВСЕ КЛАССЫ",
            subtitle: "48 Интерактивных Курсов Для Каждого Возраста",
            description: "От любознательных новичков до будущих лидеров. Найдите свой идеальный путь.",
            newContent: "НОВЫЕ КЛАССЫ КАЖДУЮ НЕДЕЛЮ!",
            existingUpdate: "Существующие курсы регулярно обновляются. Библиотека постоянно растёт!",
            booksIncluded: "КНИГИ ВКЛЮЧЕНЫ",
            booksDesc: "Цифровые книги и учебные материалы включены в базовую подписку!",
            explore: "ИЗУЧИТЬ КУРС",
            ageLabel: "ЛЕТ",
            basicMember: "БАЗОВАЯ ПОДПИСКА",
            startLearning: "Начни Учиться Сегодня",
            totalCourses: "48 КУРСОВ",
            liveSessions: "ЖИВЫЕ СЕССИИ",
            selfPaced: "В СВОЁМ ТЕМПЕ"
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
                                <div className="text-xs uppercase tracking-widest opacity-70">{groupData.theme}</div>
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
                                    <h3 className="text-xl font-black text-gray-900 mb-2 leading-tight">
                                        {course.name}
                                    </h3>

                                    {/* Description */}
                                    <p className={`text-gray-600 text-sm leading-relaxed transition-all duration-300 ${isExpanded ? 'line-clamp-none' : 'line-clamp-2'
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
                                            <div className="flex flex-wrap gap-2 mb-4">
                                                <span className="px-3 py-1 bg-emerald-100 border-2 border-black rounded-full text-xs font-bold">Interactive</span>
                                                <span className="px-3 py-1 bg-blue-100 border-2 border-black rounded-full text-xs font-bold">Project-Based</span>
                                                <span className="px-3 py-1 bg-pink-100 border-2 border-black rounded-full text-xs font-bold">Guided</span>
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
                        <p className="text-xl text-gray-300 mb-8">
                            {t.existingUpdate}
                        </p>

                        {/* Books Included Card */}
                        <div className="inline-block p-8 bg-gradient-to-br from-yellow-400 to-orange-400 border-4 border-white rounded-3xl shadow-[8px_8px_0px_0px_rgba(255,255,255,0.3)] text-black">
                            <div className="flex items-center justify-center gap-3 mb-4">
                                <Gift className="w-8 h-8" />
                                <span className="text-2xl font-black">{t.booksIncluded}</span>
                            </div>
                            <p className="text-lg font-medium opacity-80 mb-4">{t.booksDesc}</p>
                            <div className="inline-block px-4 py-2 bg-black text-white rounded-full font-bold text-sm">
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
