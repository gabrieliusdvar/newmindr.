import { useNavigate } from 'react-router-dom';
import { useEffect, useState, useMemo } from 'react';

const NotFound = () => {
    const navigate = useNavigate();
    const [floatOffset, setFloatOffset] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setFloatOffset((prev) => (prev + 1) % 360);
        }, 50);
        return () => clearInterval(interval);
    }, []);

    const sarcasticMessages = [
        "Well, this is awkward...",
        "Oops! This page went on vacation.",
        "404: Brain not found. Just like this page.",
        "Congrats! You found a page that doesn't exist.",
        "This page is as lost as your keys.",
        "Even our eagle couldn't find this page.",
        "Plot twist: This page never existed.",
        "You've discovered the void. Impressive!",
    ];

    const sarcasticFunFacts = [
        "Fun fact: This page is playing hide and seek. It's winning.",
        "Fun fact: 404 errors are just pages being introverts.",
        "Fun fact: You just found the internet's black hole.",
        "Fun fact: This page is on a permanent coffee break.",
        "Fun fact: Even Google Maps can't find this page.",
        "Fun fact: This URL leads to absolutely nowhere. Congrats!",
        "Fun fact: You've mastered the art of getting lost online.",
        "Fun fact: This page exists in a parallel universe.",
    ];

    // Pick ONE random message and keep it - useMemo ensures it only runs once
    const randomMessage = useMemo(() => {
        return sarcasticMessages[Math.floor(Math.random() * sarcasticMessages.length)];
    }, []);

    const randomFunFact = useMemo(() => {
        return sarcasticFunFacts[Math.floor(Math.random() * sarcasticFunFacts.length)];
    }, []);

    return (
        <div className="h-screen w-screen bg-gradient-to-br from-purple-600 via-purple-500 to-purple-700 flex items-center justify-center p-4 overflow-hidden relative">
            {/* Decorative Background Elements */}
            <div className="absolute inset-0 overflow-hidden pointer-events-none">
                {/* Geometric shapes */}
                <div className="absolute top-10 left-10 w-16 h-16 bg-yellow-400 rounded-full opacity-20 animate-float"></div>
                <div className="absolute top-1/4 right-20 w-20 h-20 bg-cyan-400 opacity-20 rotate-45 animate-float-delayed"></div>
                <div className="absolute bottom-20 left-1/4 w-16 h-16 bg-pink-400 rounded-full opacity-20 animate-float"></div>
                <div className="absolute bottom-1/3 right-1/3 w-12 h-12 bg-yellow-300 opacity-20 rotate-12 animate-float-delayed"></div>

                {/* Grid pattern */}
                <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.05)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.05)_1px,transparent_1px)] bg-[size:50px_50px]"></div>
            </div>

            {/* Main Content */}
            <div className="relative z-10 max-w-3xl w-full">
                <div className="bg-white rounded-3xl p-6 md:p-8 shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] border-4 border-black transform hover:shadow-[12px_12px_0px_0px_rgba(0,0,0,1)] transition-all duration-300">

                    {/* 404 Title */}
                    <div className="text-center mb-4">
                        <h1
                            className="text-[80px] md:text-[120px] font-black leading-none mb-2"
                            style={{
                                color: '#8B5CF6',
                                textShadow: '6px 6px 0px rgba(0,0,0,1)',
                                transform: 'rotate(-2deg)',
                            }}
                        >
                            404
                        </h1>
                        <div className="h-2 bg-black w-24 mx-auto mb-4"></div>
                    </div>

                    {/* Eagle Image */}
                    <div className="flex justify-center mb-4">
                        <div
                            className="relative"
                            style={{
                                transform: `translateY(${Math.sin(floatOffset * 0.05) * 10}px) rotate(${Math.sin(floatOffset * 0.03) * 5}deg)`,
                                transition: 'transform 0.1s ease-out',
                            }}
                        >
                            <img
                                src="/eagle.png"
                                alt="Lost Eagle"
                                className="w-32 md:w-48 h-auto drop-shadow-[4px_4px_0px_rgba(0,0,0,0.3)]"
                            />
                        </div>
                    </div>

                    {/* Sarcastic Message */}
                    <div className="text-center mb-6">
                        <h2 className="text-xl md:text-3xl font-black text-gray-900 mb-3">
                            {randomMessage}
                        </h2>
                        <p className="text-base md:text-lg text-gray-700 font-semibold">
                            The page you're looking for has flown away. 🦅
                        </p>
                    </div>

                    {/* Action Buttons */}
                    <div className="flex flex-col sm:flex-row gap-3 justify-center items-center mb-4">
                        <button
                            onClick={() => navigate('/')}
                            className="group relative px-6 py-3 bg-purple-600 text-white font-black text-base rounded-xl border-4 border-black shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] hover:shadow-[6px_6px_0px_0px_rgba(0,0,0,1)] hover:translate-x-[-2px] hover:translate-y-[-2px] transition-all duration-200 active:shadow-[2px_2px_0px_0px_rgba(0,0,0,1)] active:translate-x-[2px] active:translate-y-[2px]"
                        >
                            <span className="relative z-10">Take Me Home</span>
                            <div className="absolute inset-0 bg-purple-700 rounded-lg transform translate-x-1 translate-y-1 -z-10"></div>
                        </button>

                        <button
                            onClick={() => navigate(-1)}
                            className="group relative px-6 py-3 bg-yellow-400 text-gray-900 font-black text-base rounded-xl border-4 border-black shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] hover:shadow-[6px_6px_0px_0px_rgba(0,0,0,1)] hover:translate-x-[-2px] hover:translate-y-[-2px] transition-all duration-200 active:shadow-[2px_2px_0px_0px_rgba(0,0,0,1)] active:translate-x-[2px] active:translate-y-[2px]"
                        >
                            <span className="relative z-10">Go Back</span>
                            <div className="absolute inset-0 bg-yellow-500 rounded-lg transform translate-x-1 translate-y-1 -z-10"></div>
                        </button>
                    </div>

                    {/* Fun fact */}
                    <div className="text-center">
                        <p className="text-xs md:text-sm text-gray-600 italic">
                            {randomFunFact}
                        </p>
                    </div>
                </div>

                {/* Floating decorative elements around the card */}
                <div className="absolute -top-4 -left-4 w-10 h-10 bg-cyan-400 rounded-full border-4 border-black animate-bounce"></div>
                <div className="absolute -bottom-4 -right-4 w-12 h-12 bg-pink-400 rotate-45 border-4 border-black animate-bounce" style={{ animationDelay: '0.5s' }}></div>
                <div className="absolute top-1/2 -right-6 w-8 h-8 bg-yellow-400 rounded-full border-4 border-black animate-bounce" style={{ animationDelay: '0.3s' }}></div>
            </div>
        </div>
    );
};

export default NotFound;
