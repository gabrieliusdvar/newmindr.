import { useState, useEffect, useCallback } from 'react';
import { X, Brain, Trophy, Zap, AlertTriangle } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';

export default function MinigamePopup({ isOpen, onClose }: { isOpen: boolean; onClose: () => void }) {
    const { t } = useLanguage();
    const [gameState, setGameState] = useState<'start' | 'playing' | 'ended'>('start');
    const [score, setScore] = useState(0);
    const [timeLeft, setTimeLeft] = useState(10);
    const [brains, setBrains] = useState<{ id: number; x: number; y: number; size: number; color: string }[]>([]);
    const [highScore, setHighScore] = useState(() => Number(localStorage.getItem('brainClickerHighScore')) || 0);

    const spawnBrain = useCallback(() => {
        const id = Date.now();
        const x = Math.random() * 80 + 10; // 10% to 90%
        const y = Math.random() * 80 + 10;
        const size = Math.random() * 40 + 40; // 40px to 80px
        const colors = ['#fca5a5', '#fbbf24', '#34d399', '#60a5fa', '#a78bfa', '#f472b6'];
        const color = colors[Math.floor(Math.random() * colors.length)];

        setBrains(prev => [...prev, { id, x, y, size, color }]);

        // Remove brain after 1.5 seconds if not clicked
        setTimeout(() => {
            setBrains(prev => prev.filter(b => b.id !== id));
        }, 1500);
    }, []);

    useEffect(() => {
        let timer: NodeJS.Timeout;
        let brainInterval: NodeJS.Timeout;

        if (gameState === 'playing') {
            timer = setInterval(() => {
                setTimeLeft(prev => {
                    if (prev <= 1) {
                        setGameState('ended');
                        return 0;
                    }
                    return prev - 1;
                });
            }, 1000);

            brainInterval = setInterval(() => {
                spawnBrain();
            }, 600);
        }

        return () => {
            clearInterval(timer);
            clearInterval(brainInterval);
        };
    }, [gameState, spawnBrain]);

    useEffect(() => {
        if (gameState === 'ended' && score > highScore) {
            setHighScore(score);
            localStorage.setItem('brainClickerHighScore', String(score));
        }
    }, [gameState, score, highScore]);

    if (!isOpen) return null;

    const handleBrainClick = (id: number) => {
        setScore(prev => prev + 1);
        setBrains(prev => prev.filter(b => b.id !== id));
    };

    const startGame = () => {
        setScore(0);
        setTimeLeft(10);
        setBrains([]);
        setGameState('playing');
    };

    return (
        <div className="fixed inset-0 z-[600] flex items-center justify-center p-4 bg-black/80 backdrop-blur-md animate-in fade-in duration-300">
            <div className="relative w-full max-w-2xl bg-white border-4 border-gray-900 rounded-[2.5rem] shadow-[15px_15px_0px_0px_rgba(0,0,0,1)] overflow-hidden flex flex-col min-h-[500px]">
                {/* Header */}
                <div className="p-6 border-b-4 border-gray-900 flex items-center justify-between bg-emerald-400">
                    <div className="flex items-center gap-3">
                        <Brain className="w-8 h-8 text-gray-900 animate-bounce" />
                        <h2 className="text-2xl font-black text-gray-900 uppercase italic tracking-tighter">{t.minigame.title}</h2>
                    </div>
                    <button
                        onClick={onClose}
                        className="p-2 bg-white border-2 border-gray-900 rounded-lg hover:bg-gray-100 transition-all shadow-[3px_3px_0px_0px_rgba(0,0,0,1)] active:translate-y-0.5 active:shadow-none"
                    >
                        <X className="w-6 h-6" />
                    </button>
                </div>

                {/* Game Area */}
                <div className="flex-1 relative overflow-hidden bg-[#fdfcf0]">
                    {gameState === 'start' && (
                        <div className="absolute inset-0 flex flex-col items-center justify-center p-8 text-center">
                            <div className="w-24 h-24 bg-yellow-400 border-4 border-gray-900 rounded-3xl flex items-center justify-center -rotate-6 mb-6 shadow-[8px_8px_0px_0px_rgba(0,0,0,1)]">
                                <Brain className="w-12 h-12 text-gray-900" />
                            </div>
                            <h3 className="text-4xl font-black text-gray-900 mb-4 uppercase italic">{t.minigame.startTitle}</h3>
                            <p className="text-gray-600 font-bold mb-8 max-w-sm">
                                {t.minigame.startDesc}
                            </p>
                            <button
                                onClick={startGame}
                                className="px-10 py-4 bg-gray-900 text-white font-black rounded-2xl border-4 border-gray-900 shadow-[6px_6px_0px_0px_rgba(16,185,129,1)] hover:translate-x-1 hover:translate-y-1 hover:shadow-none transition-all uppercase tracking-widest text-lg"
                            >
                                {t.minigame.startBtn}
                            </button>
                        </div>
                    )}

                    {gameState === 'playing' && (
                        <>
                            <div className="absolute top-4 left-4 right-4 flex justify-between items-center z-10">
                                <div className="bg-white border-4 border-gray-900 px-4 py-2 rounded-xl shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] flex items-center gap-2">
                                    <Trophy className="w-5 h-5 text-yellow-500" />
                                    <span className="font-black text-xl">{score}</span>
                                </div>
                                <div className="bg-white border-4 border-gray-900 px-4 py-2 rounded-xl shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] flex items-center gap-2">
                                    <Zap className={`w-5 h-5 ${timeLeft < 4 ? 'text-red-500 animate-pulse' : 'text-blue-500'}`} />
                                    <span className={`font-black text-xl ${timeLeft < 4 ? 'text-red-500' : ''}`}>{timeLeft}s</span>
                                </div>
                            </div>

                            {brains.map(brain => (
                                <button
                                    key={brain.id}
                                    onClick={() => handleBrainClick(brain.id)}
                                    className="absolute transform -translate-x-1/2 -translate-y-1/2 hover:scale-110 active:scale-90 transition-transform cursor-pointer"
                                    style={{
                                        left: `${brain.x}%`,
                                        top: `${brain.y}%`,
                                        width: `${brain.size}px`,
                                        height: `${brain.size}px`
                                    }}
                                >
                                    <div
                                        className="w-full h-full rounded-2xl border-4 border-gray-900 flex items-center justify-center rotate-3 shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]"
                                        style={{ backgroundColor: brain.color }}
                                    >
                                        <Brain size={brain.size * 0.6} className="text-gray-900" />
                                    </div>
                                </button>
                            ))}
                        </>
                    )}

                    {gameState === 'ended' && (
                        <div className="absolute inset-0 flex flex-col items-center justify-center p-8 text-center bg-gray-900/5 backdrop-blur-sm">
                            <div className="bg-white border-4 border-gray-900 rounded-[3rem] p-10 shadow-[10px_10px_0px_0px_rgba(0,0,0,1)] max-w-md w-full animate-content-reveal">
                                <h3 className="text-5xl font-black text-gray-900 mb-2 uppercase italic tracking-tighter">{t.minigame.levelUp}</h3>
                                <p className="text-gray-500 font-bold mb-8 uppercase tracking-widest text-xs">{t.minigame.agility}</p>

                                <div className="grid grid-cols-2 gap-4 mb-8">
                                    <div className="bg-gray-50 border-2 border-gray-900 p-4 rounded-2xl">
                                        <p className="text-[10px] font-black uppercase text-gray-400 mb-1">{t.minigame.score}</p>
                                        <p className="text-3xl font-black text-gray-900">{score}</p>
                                    </div>
                                    <div className="bg-yellow-400 border-2 border-gray-900 p-4 rounded-2xl shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]">
                                        <p className="text-[10px] font-black uppercase text-gray-900/40 mb-1">{t.minigame.best}</p>
                                        <p className="text-3xl font-black text-gray-900">{highScore}</p>
                                    </div>
                                </div>

                                <div className="flex flex-col gap-3">
                                    <button
                                        onClick={startGame}
                                        className="w-full py-4 bg-emerald-400 text-gray-900 font-black rounded-xl border-4 border-gray-900 shadow-[6px_6px_0px_0px_rgba(0,0,0,1)] hover:translate-x-1 hover:translate-y-1 hover:shadow-none transition-all uppercase tracking-widest text-sm"
                                    >
                                        {t.minigame.retry}
                                    </button>
                                    <button
                                        onClick={onClose}
                                        className="w-full py-3 bg-white text-gray-500 font-bold rounded-xl border-2 border-gray-900 hover:bg-gray-50 transition-all text-xs"
                                    >
                                        {t.minigame.back}
                                    </button>
                                </div>
                            </div>
                        </div>
                    )}
                </div>

                {/* Footer Tip */}
                <div className="p-4 bg-gray-900 text-white flex items-center justify-center gap-2">
                    <AlertTriangle className="w-4 h-4 text-yellow-400" />
                    <p className="text-[10px] font-bold uppercase tracking-widest opacity-80">
                        {t.minigame.warning}
                    </p>
                </div>
            </div>
        </div>
    );
}
