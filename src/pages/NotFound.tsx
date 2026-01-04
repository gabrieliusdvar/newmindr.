import { useNavigate } from 'react-router-dom';
import { useEffect, useState } from 'react';

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

    const randomMessage = sarcasticMessages[Math.floor(Math.random() * sarcasticMessages.length)];

    return (
        <div className="min-h-screen bg-gradient-to-br from-purple-600 via-purple-500 to-purple-700 flex items-center justify-center p-4 overflow-hidden relative">
            {/* Decorative Background Elements */}
            <div className="absolute inset-0 overflow-hidden pointer-events-none">
                {/* Geometric shapes */}
                <div className="absolute top-10 left-10 w-20 h-20 bg-yellow-400 rounded-full opacity-20 animate-float"></div>
                <div className="absolute top-1/4 right-20 w-32 h-32 bg-cyan-400 opacity-20 rotate-45 animate-float-delayed"></div>
                <div className="absolute bottom-20 left-1/4 w-24 h-24 bg-pink-400 rounded-full opacity-20 animate-float"></div>
                <div className="absolute bottom-1/3 right-1/3 w-16 h-16 bg-yellow-300 opacity-20 rotate-12 animate-float-delayed"></div>

                {/* Grid pattern */}
                <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.05)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.05)_1px,transparent_1px)] bg-[size:50px_50px]"></div>
            </div>

            {/* Main Content */}
            <div className="relative z-10 max-w-4xl w-full">
                <div className="bg-white rounded-3xl p-8 md:p-12 shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] border-4 border-black transform hover:shadow-[12px_12px_0px_0px_rgba(0,0,0,1)] transition-all duration-300">

                    {/* 404 Title */}
                    <div className="text-center mb-8">
                        <h1
                            className="text-[120px] md:text-[180px] font-black leading-none mb-4"
                            style={{
                                color: '#8B5CF6',
                                textShadow: '6px 6px 0px rgba(0,0,0,1)',
                                transform: 'rotate(-2deg)',
                            }}
                        >
                            404
                        </h1>
                        <div className="h-2 bg-black w-32 mx-auto mb-6"></div>
                    </div>

                    {/* Eagle Image */}
                    <div className="flex justify-center mb-8">
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
                                className="w-48 md:w-64 h-auto drop-shadow-[4px_4px_0px_rgba(0,0,0,0.3)]"
                            />
                        </div>
                    </div>

                    {/* Sarcastic Message */}
                    <div className="text-center mb-8">
                        <h2 className="text-2xl md:text-4xl font-black text-gray-900 mb-4">
                            {randomMessage}
                        </h2>
                        <p className="text-lg md:text-xl text-gray-700 font-semibold">
                            The page you're looking for has flown away. 🦅
                        </p>
                    </div>

                    {/* Action Buttons */}
                    <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                        <button
                            onClick={() => navigate('/')}
                            className="group relative px-8 py-4 bg-purple-600 text-white font-black text-lg rounded-xl border-4 border-black shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] hover:shadow-[6px_6px_0px_0px_rgba(0,0,0,1)] hover:translate-x-[-2px] hover:translate-y-[-2px] transition-all duration-200 active:shadow-[2px_2px_0px_0px_rgba(0,0,0,1)] active:translate-x-[2px] active:translate-y-[2px]"
                        >
                            <span className="relative z-10">Take Me Home</span>
                            <div className="absolute inset-0 bg-purple-700 rounded-lg transform translate-x-1 translate-y-1 -z-10"></div>
                        </button>

                        <button
                            onClick={() => navigate(-1)}
                            className="group relative px-8 py-4 bg-yellow-400 text-gray-900 font-black text-lg rounded-xl border-4 border-black shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] hover:shadow-[6px_6px_0px_0px_rgba(0,0,0,1)] hover:translate-x-[-2px] hover:translate-y-[-2px] transition-all duration-200 active:shadow-[2px_2px_0px_0px_rgba(0,0,0,1)] active:translate-x-[2px] active:translate-y-[2px]"
                        >
                            <span className="relative z-10">Go Back</span>
                            <div className="absolute inset-0 bg-yellow-500 rounded-lg transform translate-x-1 translate-y-1 -z-10"></div>
                        </button>
                    </div>

                    {/* Fun fact */}
                    <div className="mt-8 text-center">
                        <p className="text-sm text-gray-600 italic">
                            Fun fact: You're the {Math.floor(Math.random() * 1000) + 1}th person to get lost today! 🎉
                        </p>
                    </div>
                </div>

                {/* Floating decorative elements around the card */}
                <div className="absolute -top-6 -left-6 w-12 h-12 bg-cyan-400 rounded-full border-4 border-black animate-bounce"></div>
                <div className="absolute -bottom-6 -right-6 w-16 h-16 bg-pink-400 rotate-45 border-4 border-black animate-bounce" style={{ animationDelay: '0.5s' }}></div>
                <div className="absolute top-1/2 -right-8 w-10 h-10 bg-yellow-400 rounded-full border-4 border-black animate-bounce" style={{ animationDelay: '0.3s' }}></div>
            </div>
        </div>
    );
};

export default NotFound;
