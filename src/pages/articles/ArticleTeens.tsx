import { useState, useEffect } from 'react';
import { ArrowLeft, Zap, Terminal, Cpu } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function ArticleTeens() {
    const [progress, setProgress] = useState(0);

    useEffect(() => {
        const timer = setInterval(() => {
            setProgress(p => p < 100 ? p + 1 : 0);
        }, 50);
        return () => clearInterval(timer);
    }, []);

    return (
        <div className="min-h-screen bg-gray-950 font-mono text-emerald-400 selection:bg-emerald-500/30 pt-20">
            {/* Nav */}
            <nav className="fixed top-0 left-0 w-full z-50 bg-gray-900/80 backdrop-blur-md border-b border-emerald-500/20 px-6 py-4 flex justify-between items-center">
                <Link to="/blog" className="flex items-center gap-2 text-sm font-bold uppercase tracking-widest hover:text-white transition-colors">
                    <ArrowLeft className="w-5 h-5" />
                    System.Return()
                </Link>
                <div className="flex items-center gap-2">
                    <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse"></span>
                    <span className="font-bold tracking-widest">NM_TERMINAL_V2</span>
                </div>
            </nav>

            <div className="container mx-auto px-6 py-12 max-w-3xl">
                {/* Hero */}
                <header className="mb-20 text-center relative">
                    <div className="absolute inset-0 bg-emerald-500/10 blur-[100px] rounded-full"></div>
                    <h1 className="relative text-5xl md:text-7xl font-bold mb-6 tracking-tighter text-white glitch-text" data-text="HACK YOUR BRAIN">
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 to-cyan-400">HACK</span> YOUR BRAIN
                    </h1>
                    <p className="relative text-xl text-gray-400 max-w-lg mx-auto border-l-2 border-emerald-500 pl-4 py-2 bg-gray-900/50">
                        Stop grinding. Start leveling up. The old system is laggy. Here is the patch.
                    </p>
                </header>

                {/* Glitch CSS (Inline for simplicity) */}
                <style>{`
                    .glitch-text {
                        position: relative;
                    }
                    .glitch-text::before, .glitch-text::after {
                        content: attr(data-text);
                        position: absolute;
                        top: 0;
                        left: 0;
                        width: 100%;
                        height: 100%;
                    }
                    .glitch-text::before {
                        left: 2px;
                        text-shadow: -1px 0 red;
                        clip: rect(24px, 550px, 90px, 0);
                        animation: glitch-anim-2 3s infinite linear alternate-reverse;
                    }
                    .glitch-text::after {
                        left: -2px;
                        text-shadow: -1px 0 blue;
                        clip: rect(85px, 550px, 140px, 0);
                        animation: glitch-anim 2.5s infinite linear alternate-reverse;
                    }
                    @keyframes glitch-anim {
                        0% { clip: rect(12px, 9999px, 54px, 0); }
                        20% { clip: rect(89px, 9999px, 86px, 0); }
                        40% { clip: rect(32px, 9999px, 6px, 0); }
                        60% { clip: rect(56px, 9999px, 2px, 0); }
                        80% { clip: rect(3px, 9999px, 34px, 0); }
                        100% { clip: rect(78px, 9999px, 94px, 0); }
                    }
                     @keyframes glitch-anim-2 {
                        0% { clip: rect(65px, 9999px, 12px, 0); }
                        20% { clip: rect(33px, 9999px, 56px, 0); }
                        40% { clip: rect(98px, 9999px, 4px, 0); }
                        60% { clip: rect(12px, 9999px, 78px, 0); }
                        80% { clip: rect(45px, 9999px, 23px, 0); }
                        100% { clip: rect(67px, 9999px, 90px, 0); }
                    }
                `}</style>

                {/* Content */}
                <div className="grid gap-8">
                    <section className="bg-gray-900 border border-gray-800 p-8 rounded-2xl hover:border-emerald-500/50 transition-colors group">
                        <div className="flex items-center gap-4 mb-4">
                            <div className="w-12 h-12 bg-gray-800 rounded-lg flex items-center justify-center group-hover:bg-emerald-500/20 transition-colors">
                                <Terminal className="w-6 h-6 text-emerald-400" />
                            </div>
                            <h2 className="text-2xl font-bold text-white">1. The Code Base</h2>
                        </div>
                        <p className="text-gray-400 leading-relaxed">
                            School makes you memorize syntax without letting you write the program. We flip it.
                            You start with a "Boss Fight" (a complex problem), and you gather the "Loot" (knowledge)
                            needed to defeat it.
                        </p>
                    </section>

                    <section className="bg-gray-900 border border-gray-800 p-8 rounded-2xl hover:border-purple-500/50 transition-colors group">
                        <div className="flex items-center gap-4 mb-4">
                            <div className="w-12 h-12 bg-gray-800 rounded-lg flex items-center justify-center group-hover:bg-purple-500/20 transition-colors">
                                <Cpu className="w-6 h-6 text-purple-400" />
                            </div>
                            <h2 className="text-2xl font-bold text-white">2. XP vs Grades</h2>
                        </div>
                        <div className="mb-4">
                            <div className="flex justify-between text-xs font-bold uppercase mb-2">
                                <span className="text-purple-400">Current XP</span>
                                <span className="text-white">Level 5</span>
                            </div>
                            <div className="h-2 w-full bg-gray-800 rounded-full overflow-hidden">
                                <div className="h-full bg-gradient-to-r from-emerald-400 to-purple-500" style={{ width: `${progress}%` }}></div>
                            </div>
                        </div>
                        <p className="text-gray-400 leading-relaxed">
                            Grades are punishments. XP is progress. In NewMindr, you can't "fail".
                            You just haven't leveled up yet. Every mistake is just debugging data.
                        </p>
                    </section>
                </div>

                <div className="mt-16 bg-gradient-to-r from-emerald-900/20 to-purple-900/20 p-8 rounded-3xl text-center border border-emerald-500/30">
                    <h3 className="text-2xl font-bold text-white mb-4">Ready to initialize?</h3>
                    <Link to="/process" className="inline-flex items-center gap-3 bg-emerald-500 text-black font-bold uppercase tracking-wider px-8 py-4 rounded hover:bg-emerald-400 transition-colors shadow-[0_0_20px_#10b98160]">
                        <Zap className="w-5 h-5 fill-current" />
                        Start Free Trial
                    </Link>
                </div>

            </div>
        </div>
    );
}
