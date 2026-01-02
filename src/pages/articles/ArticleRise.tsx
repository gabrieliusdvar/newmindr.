import { useState, useEffect } from 'react';
import { ArrowLeft, TrendingUp, CheckCircle, Smartphone, Zap } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function ArticleRise() {
    const [retention, setRetention] = useState(10);
    const [xp, setXp] = useState(0);

    useEffect(() => {
        document.title = "Why Interactive Learning Is On The Rise | NewMindr Insights";
        // Meta description update would require a library or manual DOM manipulation, simpler to skip for component-level, but Title is key.
    }, []);

    const animateChart = () => {
        setRetention(10);
        setTimeout(() => setRetention(85), 500);
    };

    return (
        <div className="min-h-screen bg-yellow-50 font-sans text-black pt-24 selection:bg-pink-400">
            {/* SEO Hidden H1 */}
            <h1 className="sr-only">Why Interactive Learning Is On The Rise and Replacing Textbooks</h1>

            <nav className="fixed top-0 left-0 w-full z-50 bg-white border-b-4 border-black px-6 py-4 flex justify-between items-center shadow-[0_4px_0_0_#e5e7eb]">
                <Link to="/blog" className="flex items-center gap-2 font-black uppercase tracking-widest hover:underline">
                    <ArrowLeft className="w-6 h-6 border-2 border-black rounded-full bg-white transition hover:scale-110" />
                    Back
                </Link>
                <div className="font-black text-xl tracking-tighter">NEWMINDR.</div>
            </nav>

            <article className="container mx-auto px-6 max-w-4xl pb-24">
                {/* Header */}
                <header className="mb-16">
                    <div className="inline-block bg-black text-white font-bold px-4 py-1 mb-4 rotate-2">
                        INSIGHTS 2026
                    </div>
                    <h2 className="text-6xl md:text-8xl font-black leading-[0.9] mb-8 uppercase">
                        Static Learning <br />
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-pink-500 to-purple-600">Is Dead.</span>
                    </h2>
                    <p className="text-2xl font-bold border-l-8 border-black pl-6 py-2 bg-white shadow-[8px_8px_0_0_#000]">
                        Attention spans aren't shrinking. Content is just getting boring. Here is the data.
                    </p>
                </header>

                {/* Interactive Chart */}
                <section className="mb-20 border-4 border-black bg-white p-8 shadow-[12px_12px_0_0_#000]">
                    <h3 className="text-3xl font-black mb-8 flex items-center gap-3">
                        <TrendingUp className="w-8 h-8" />
                        THE RETENTION GAP
                    </h3>

                    <div className="space-y-8">
                        <div>
                            <div className="flex justify-between font-bold mb-2">
                                <span>Lecture (Listening)</span>
                                <span>5-10%</span>
                            </div>
                            <div className="w-full h-8 bg-gray-200 border-2 border-black rounded-full overflow-hidden">
                                <div className="h-full bg-gray-400 w-[10%]"></div>
                            </div>
                        </div>

                        <div className="cursor-pointer group" onClick={animateChart} onMouseEnter={animateChart}>
                            <div className="flex justify-between font-bold mb-2">
                                <span className="flex items-center gap-2">
                                    Interactive (Doing) <Zap className="w-4 h-4 fill-yellow-400 text-black group-hover:scale-125 transition-transform" />
                                </span>
                                <span className="text-emerald-600">{retention}%</span>
                            </div>
                            <div className="w-full h-8 bg-gray-200 border-2 border-black rounded-full overflow-hidden relative">
                                <div
                                    className="h-full bg-yellow-400 transition-all duration-1000 ease-out flex items-center justify-end px-2"
                                    style={{ width: `${retention}%` }}
                                >
                                    <span className="text-xs font-black">YOU ARE HERE</span>
                                </div>
                            </div>
                            <p className="text-xs text-gray-500 mt-2 font-mono">Hover or tap the bar to verify simulation.</p>
                        </div>
                    </div>
                </section>

                <div className="grid md:grid-cols-2 gap-8 mb-20">
                    <section className="bg-pink-400 border-4 border-black p-8 shadow-[8px_8px_0_0_#000] -rotate-1">
                        <h3 className="text-2xl font-black mb-4 bg-white inline-block px-2 transform -rotate-2">The Dopamine Loop</h3>
                        <p className="font-bold mb-6">
                            Games give instant feedback. Homework gives feedback 2 weeks later. We fixed that.
                        </p>
                        <button
                            onClick={() => setXp(x => x + 100)}
                            className="w-full bg-black text-white font-black py-4 border-4 border-transparent hover:bg-white hover:text-black hover:border-black transition-all active:scale-95 flex items-center justify-center gap-2"
                        >
                            <CheckCircle /> GET INSTANT FEEDBACK
                        </button>
                        {xp > 0 && (
                            <div className="mt-4 text-center font-black animate-bounce">
                                +{xp} XP GAINED!
                            </div>
                        )}
                    </section>

                    <section className="bg-blue-400 border-4 border-black p-8 shadow-[8px_8px_0_0_#000] rotate-1">
                        <h3 className="text-2xl font-black mb-4 bg-white inline-block px-2 transform rotate-2">Mobile First</h3>
                        <p className="font-bold mb-6">
                            Kids live on phones. Why fight it? Our entire curriculum fits in their pocket.
                        </p>
                        <div className="flex justify-center">
                            <Smartphone className="w-16 h-16 animate-pulse text-white" />
                        </div>
                    </section>
                </div>

                {/* CTA Section */}
                <section className="text-center py-16 bg-black text-white border-4 border-black relative overflow-hidden">
                    <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-20" />
                    <div className="relative z-10">
                        <h3 className="text-4xl md:text-5xl font-black mb-6">
                            DON'T LET THEM FALL BEHIND.
                        </h3>
                        <p className="text-xl text-gray-300 mb-8 max-w-lg mx-auto">
                            The Interactive Roadmap covers everything from Logic to Leadership.
                        </p>
                        <Link
                            to="/pricing"
                            className="inline-block bg-yellow-400 text-black text-2xl font-black px-12 py-6 border-4 border-transparent hover:bg-white hover:border-yellow-400 transition-all transform hover:-translate-y-2 shadow-[0_10px_20px_rgba(250,204,21,0.4)]"
                        >
                            BUY THE ROADMAP
                        </Link>
                        <p className="mt-6 text-sm text-gray-500 font-mono">
                            Limited seats for the 2026 Alpha Cohort.
                        </p>
                    </div>
                </section>

            </article>
        </div>
    );
}
