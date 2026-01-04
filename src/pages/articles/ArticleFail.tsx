import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

const ArticleFail = () => {
    const navigate = useNavigate();
    const [activeStatIndex, setActiveStatIndex] = useState(0);
    const [eagleFloat, setEagleFloat] = useState(0);
    const [revealedStats, setRevealedStats] = useState<number[]>([]);

    useEffect(() => {
        const interval = setInterval(() => {
            setEagleFloat((prev) => (prev + 1) % 360);
        }, 50);
        return () => clearInterval(interval);
    }, []);

    const statistics = [
        {
            number: "30%",
            fact: "of students fail due to lack of engagement",
            color: "bg-red-500",
            icon: "😴"
        },
        {
            number: "45%",
            fact: "struggle because traditional methods don't match their learning style",
            color: "bg-orange-500",
            icon: "📚"
        },
        {
            number: "60%",
            fact: "of students say they'd perform better with interactive learning",
            color: "bg-yellow-500",
            icon: "🎮"
        },
        {
            number: "25%",
            fact: "fail due to lack of motivation and unclear goals",
            color: "bg-purple-500",
            icon: "🎯"
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
                        Why Students Fail
                        <span className="block text-3xl md:text-4xl mt-4 text-yellow-200">
                            (And How We're Changing That)
                        </span>
                    </h1>
                    <p className="text-xl md:text-2xl font-semibold opacity-90">
                        The shocking truth about traditional education... and the solution you've been waiting for.
                    </p>
                </div>

                {/* Decorative elements */}
                <div className="absolute bottom-0 left-0 w-full h-20 bg-gradient-to-t from-gray-50 to-transparent"></div>
            </div>

            {/* Main Content */}
            <div className="max-w-4xl mx-auto px-4 py-16">

                {/* Introduction */}
                <div className="bg-white rounded-3xl p-8 md:p-12 shadow-[8px_8px_0px_0px_rgba(0,0,0,0.1)] border-4 border-gray-200 mb-12">
                    <h2 className="text-3xl md:text-4xl font-black text-gray-900 mb-6">
                        The Hard Truth 📊
                    </h2>
                    <p className="text-lg md:text-xl text-gray-700 leading-relaxed mb-6">
                        Every year, millions of students struggle, not because they lack intelligence or potential,
                        but because the traditional education system fails to engage them in ways that actually work.
                    </p>
                    <p className="text-lg md:text-xl text-gray-700 leading-relaxed">
                        Let's look at the numbers...
                    </p>
                </div>

                {/* Interactive Statistics */}
                <div className="mb-12">
                    <h2 className="text-3xl md:text-4xl font-black text-gray-900 mb-8 text-center">
                        The Shocking Statistics
                    </h2>

                    <div className="grid md:grid-cols-2 gap-6">
                        {statistics.map((stat, index) => (
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
                                <div className="text-6xl mb-4">{stat.icon}</div>
                                <div className={`text-6xl md:text-7xl font-black mb-4 ${stat.color.replace('bg-', 'text-')}`}>
                                    {stat.number}
                                </div>
                                <p className="text-lg md:text-xl font-bold text-gray-800">
                                    {stat.fact}
                                </p>

                                {!revealedStats.includes(index) && (
                                    <div className="absolute inset-0 bg-gradient-to-br from-gray-900/10 to-gray-900/5 rounded-3xl flex items-center justify-center backdrop-blur-sm">
                                        <span className="text-2xl font-black text-gray-700">Click to Reveal</span>
                                    </div>
                                )}
                            </div>
                        ))}
                    </div>
                </div>

                {/* The Problem Section */}
                <div className="bg-gradient-to-br from-red-50 to-orange-50 rounded-3xl p-8 md:p-12 border-4 border-red-200 mb-12">
                    <h2 className="text-3xl md:text-4xl font-black text-gray-900 mb-6">
                        Why This Happens 🤔
                    </h2>

                    <div className="space-y-6">
                        <div className="flex items-start gap-4">
                            <div className="flex-shrink-0 w-12 h-12 bg-red-500 rounded-full flex items-center justify-center text-white text-2xl font-black border-4 border-black">
                                1
                            </div>
                            <div>
                                <h3 className="text-xl font-black text-gray-900 mb-2">Passive Learning Doesn't Work</h3>
                                <p className="text-gray-700 text-lg">
                                    Sitting in lectures and memorizing facts is proven to be the least effective way to learn.
                                    Studies show we retain only <strong>5% of what we hear</strong> in lectures.
                                </p>
                            </div>
                        </div>

                        <div className="flex items-start gap-4">
                            <div className="flex-shrink-0 w-12 h-12 bg-orange-500 rounded-full flex items-center justify-center text-white text-2xl font-black border-4 border-black">
                                2
                            </div>
                            <div>
                                <h3 className="text-xl font-black text-gray-900 mb-2">One-Size-Fits-All Approach</h3>
                                <p className="text-gray-700 text-lg">
                                    Every student learns differently. Visual learners, kinesthetic learners, and auditory learners
                                    all need different approaches - but traditional education treats everyone the same.
                                </p>
                            </div>
                        </div>

                        <div className="flex items-start gap-4">
                            <div className="flex-shrink-0 w-12 h-12 bg-yellow-500 rounded-full flex items-center justify-center text-white text-2xl font-black border-4 border-black">
                                3
                            </div>
                            <div>
                                <h3 className="text-xl font-black text-gray-900 mb-2">Lack of Engagement</h3>
                                <p className="text-gray-700 text-lg">
                                    When learning feels like a chore, students disengage. Research shows that <strong>engaged students
                                        are 2.5x more likely to succeed</strong> than their disengaged peers.
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
                        <h2 className="text-4xl md:text-5xl font-black mb-6" style={{ textShadow: '4px 4px 0px rgba(0,0,0,0.3)' }}>
                            Enter: newmindr 🚀
                        </h2>

                        <p className="text-xl md:text-2xl font-semibold mb-8 leading-relaxed">
                            We're not just another online learning platform. We're a revolution in how education works.
                        </p>

                        <div className="grid md:grid-cols-3 gap-6 mb-8">
                            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 border-2 border-white/30">
                                <div className="text-4xl mb-3">🎮</div>
                                <h3 className="text-xl font-black mb-2">Gamified Learning</h3>
                                <p className="text-white/90">Turn education into an adventure with interactive challenges and rewards.</p>
                            </div>

                            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 border-2 border-white/30">
                                <div className="text-4xl mb-3">🎯</div>
                                <h3 className="text-xl font-black mb-2">Personalized Paths</h3>
                                <p className="text-white/90">AI-powered learning that adapts to YOUR unique style and pace.</p>
                            </div>

                            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 border-2 border-white/30">
                                <div className="text-4xl mb-3">⚡</div>
                                <h3 className="text-xl font-black mb-2">Active Engagement</h3>
                                <p className="text-white/90">Learn by doing, not just watching. Hands-on, interactive experiences.</p>
                            </div>
                        </div>

                        <div className="bg-white/20 backdrop-blur-sm rounded-2xl p-6 border-2 border-white/40">
                            <h3 className="text-2xl font-black mb-4">The Results Speak for Themselves:</h3>
                            <ul className="space-y-3 text-lg">
                                <li className="flex items-center gap-3">
                                    <span className="text-2xl">✅</span>
                                    <span><strong>90% retention rate</strong> vs. 5% in traditional lectures</span>
                                </li>
                                <li className="flex items-center gap-3">
                                    <span className="text-2xl">✅</span>
                                    <span><strong>3x faster learning</strong> through active engagement</span>
                                </li>
                                <li className="flex items-center gap-3">
                                    <span className="text-2xl">✅</span>
                                    <span><strong>85% of students</strong> report increased motivation</span>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>

                {/* Call to Action */}
                <div className="bg-white rounded-3xl p-8 md:p-12 border-4 border-black shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] text-center">
                    <h2 className="text-3xl md:text-5xl font-black text-gray-900 mb-6">
                        Ready to Stop Failing and Start Soaring? 🦅
                    </h2>
                    <p className="text-xl md:text-2xl text-gray-700 mb-8 leading-relaxed">
                        Discover how our interactive learning process transforms struggling students into confident achievers.
                    </p>

                    <button
                        onClick={() => navigate('/process')}
                        className="group relative px-12 py-6 bg-gradient-to-r from-purple-600 to-blue-600 text-white font-black text-xl md:text-2xl rounded-2xl border-4 border-black shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] hover:shadow-[12px_12px_0px_0px_rgba(0,0,0,1)] hover:translate-x-[-4px] hover:translate-y-[-4px] transition-all duration-200 active:shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] active:translate-x-[4px] active:translate-y-[4px]"
                    >
                        <span className="relative z-10">See Our Learning Process →</span>
                        <div className="absolute inset-0 bg-gradient-to-r from-purple-700 to-blue-700 rounded-xl transform translate-x-2 translate-y-2 -z-10"></div>
                    </button>

                    <p className="text-gray-600 mt-6 text-lg italic">
                        Join thousands of students who've already made the switch.
                    </p>
                </div>

            </div>
        </div>
    );
};

export default ArticleFail;
