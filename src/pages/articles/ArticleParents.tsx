import { useState } from 'react';
import { ArrowLeft, Check, X, Star } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function ArticleParents() {
    const [mode, setMode] = useState<'boring' | 'fun'>('boring');

    return (
        <div className="min-h-screen bg-white font-sans text-black pt-20">
            {/* Nav */}
            <nav className="fixed top-0 left-0 w-full z-50 bg-yellow-400 border-b-4 border-black px-6 py-4 flex justify-between items-center">
                <Link to="/blog" className="flex items-center gap-2 font-black uppercase tracking-widest hover:underline">
                    <ArrowLeft className="w-6 h-6 border-2 border-black rounded-full bg-white" />
                    Back to Blog
                </Link>
                <div className="font-black text-xl">NEWMINDR PARENTS</div>
            </nav>

            <div className="container mx-auto px-6 py-12 max-w-4xl">
                {/* Hero */}
                <header className="mb-16 border-4 border-black shadow-[12px_12px_0_0_#000] bg-pink-400 p-8 md:p-12 rotate-1 mt-10">
                    <h1 className="text-5xl md:text-7xl font-black mb-6 uppercase leading-[0.9]">
                        Why Textbooks Are <span className="line-through decoration-4 decoration-white">Failing</span> Boring.
                    </h1>
                    <p className="text-xl font-bold bg-white inline-block px-4 py-2 border-2 border-black">
                        And how to fix it in 3 steps.
                    </p>
                </header>

                {/* Interactive Demo */}
                <section className="mb-20">
                    <h2 className="text-4xl font-black mb-8 uppercase flex items-center gap-4">
                        <span className="bg-black text-white px-4 pt-1 pb-2">The Test:</span>
                        See the difference
                    </h2>

                    <div className="border-4 border-black p-8 bg-blue-100 relative">
                        {/* Toggle */}
                        <div className="absolute -top-6 right-8 flex gap-4">
                            <button
                                onClick={() => setMode('boring')}
                                className={`px-6 py-3 font-bold border-4 border-black transition-all ${mode === 'boring' ? 'bg-gray-400 shadow-[4px_4px_0_0_#000] translate-y-0' : 'bg-white translate-y-2'}`}
                            >
                                Regular School
                            </button>
                            <button
                                onClick={() => setMode('fun')}
                                className={`px-6 py-3 font-bold border-4 border-black transition-all ${mode === 'fun' ? 'bg-yellow-400 shadow-[4px_4px_0_0_#000] translate-y-0' : 'bg-white translate-y-2'}`}
                            >
                                NewMindr Way
                            </button>
                        </div>

                        {/* Content Box */}
                        <div className={`mt-8 border-4 border-black p-8 transition-all duration-500 ${mode === 'boring' ? 'bg-white' : 'bg-green-400'}`}>
                            {mode === 'boring' ? (
                                <div className="space-y-4 opacity-50 grayscale">
                                    <h3 className="font-serif text-2xl font-bold">Chapter 4: Photosynthesis</h3>
                                    <p className="text-justify font-serif">
                                        Photosynthesis is a process used by plants and other organisms to convert light energy into chemical energy that, through cellular respiration, can later be released to fuel the organism's metabolic activities. This chemical energy is stored in carbohydrate molecules...
                                    </p>
                                    <div className="text-red-600 font-bold rotate-12 border-2 border-red-600 inline-block p-2">BOREDOM LEVEL: 100%</div>
                                </div>
                            ) : (
                                <div className="space-y-6">
                                    <div className="flex items-center gap-4">
                                        <div className="w-16 h-16 bg-black rounded-full flex items-center justify-center text-yellow-400">
                                            <Star className="w-8 h-8 fill-current animate-spin-slow" />
                                        </div>
                                        <h3 className="text-3xl font-black italic">MISSION: SOLAR CHARGE!</h3>
                                    </div>
                                    <p className="font-bold text-xl">
                                        "Quick! You are a Chloroplast Commander. Your mission? Catch the sunlight particles before the energy bar runs out!"
                                    </p>
                                    <div className="h-6 w-full bg-black rounded-full overflow-hidden border-2 border-white">
                                        <div className="h-full bg-yellow-300 w-[70%] animate-pulse"></div>
                                    </div>
                                    <div className="bg-black text-white inline-block px-4 py-2 font-black rotate-2 shadow-[4px_4px_0_0_#FFF]">
                                        ENGAGEMENT: MAXIMIZED 🚀
                                    </div>
                                </div>
                            )}
                        </div>
                    </div>
                </section>

                <section className="grid md:grid-cols-2 gap-8">
                    <div className="border-4 border-black bg-white p-6 shadow-[8px_8px_0_0_#000]">
                        <h3 className="text-2xl font-black mb-4 bg-red-400 inline-block px-2 border-2 border-black">Problem</h3>
                        <p className="font-bold">Kids are passive. They sit. They listen. They forget.</p>
                        <ul className="mt-4 space-y-2">
                            <li className="flex items-center gap-2"><X className="w-6 h-6 text-red-600" /> Retention rate: 10%</li>
                            <li className="flex items-center gap-2"><X className="w-6 h-6 text-red-600" /> Boredom: High</li>
                        </ul>
                    </div>
                    <div className="border-4 border-black bg-yellow-400 p-6 shadow-[8px_8px_0_0_#000]">
                        <h3 className="text-2xl font-black mb-4 bg-white inline-block px-2 border-2 border-black">Solution</h3>
                        <p className="font-bold">Active participation. Choices. Consequences. Rewards.</p>
                        <ul className="mt-4 space-y-2">
                            <li className="flex items-center gap-2"><Check className="w-6 h-6 text-green-700" /> Retention rate: 85%</li>
                            <li className="flex items-center gap-2"><Check className="w-6 h-6 text-green-700" /> Fun: Guaranteed</li>
                        </ul>
                    </div>
                </section>

                <div className="mt-16 text-center">
                    <Link to="/contact" className="inline-block bg-black text-white text-2xl font-black px-12 py-6 border-4 border-transparent hover:bg-white hover:text-black hover:border-black transition-all hover:shadow-[8px_8px_0_0_#000]">
                        BOOK A DEMO NOW
                    </Link>
                </div>
            </div>
        </div>
    );
}
