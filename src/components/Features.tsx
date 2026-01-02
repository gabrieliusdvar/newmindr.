import { useState, useEffect } from 'react';
import { Globe, Palette, Brain, Users, Eye, X, Rocket } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';

const minigameStyles = `
  @keyframes shake {
    0%, 100% { transform: translateX(0); }
    25% { transform: translateX(-4px); }
    75% { transform: translateX(4px); }
  }
  @keyframes floatUp {
    0% { transform: translateY(0); opacity: 1; }
    100% { transform: translateY(-40px); opacity: 0; }
  }
  @keyframes float {
    0% { transform: translate(0, 0); }
    25% { transform: translate(10px, -15px); }
    50% { transform: translate(-5px, 10px); }
    75% { transform: translate(-12px, -8px); }
    100% { transform: translate(0, 0); }
  }
  .animate-shake { animation: shake 0.2s ease-in-out; }
  .animate-float-up { animation: floatUp 0.8s ease-out forwards; }
  .animate-float { animation: float 3s ease-in-out infinite; }
`;

export default function Features() {
  const { t, language } = useLanguage();
  const [activeTab, setActiveTab] = useState(0);
  const [isBrowserMenuOpen, setIsBrowserMenuOpen] = useState(false);
  const [gameStats, setGameStats] = useState([
    { xp: 0, level: 1 }, // Logic
    { xp: 0, level: 1 }, // Creative
    { xp: 0, level: 1 }, // Social
    { xp: 0, level: 1 }  // Visual
  ]);
  const [isGameActive, setIsGameActive] = useState(false);
  const [gameScore, setGameScore] = useState(0);
  const [gameType, setGameType] = useState(0);
  const [targetPos, setTargetPos] = useState({ top: '50%', left: '50%' });
  const [showCongrats, setShowCongrats] = useState(false);
  const [clickFeedback, setClickFeedback] = useState<{ id: number, text: string, x: number, y: number }[]>([]);
  const [shake, setShake] = useState(false);
  const [showInstructions, setShowInstructions] = useState(false);

  // Logic Game States (Math)
  const [logicTarget, setLogicTarget] = useState(0);
  const [logicOptions, setLogicOptions] = useState<number[]>([]);

  // Creative (Old Logic) states
  const [isTargetRed, setIsTargetRed] = useState(false);

  // Visual (Tracing) states
  const [traceIndex, setTraceIndex] = useState(0);
  const [traceNodes, setTraceNodes] = useState<{ x: string, y: string }[]>([]);

  // Social Game States
  const [currentWord, setCurrentWord] = useState('');
  const [scrambledWord, setScrambledWord] = useState<string[]>([]);
  const [userSpelled, setUserSpelled] = useState<string[]>([]);

  const [isGameOver, setIsGameOver] = useState(false);
  const [lastActionTime, setLastActionTime] = useState(performance.now());

  const games = [
    {
      name: t.features.minigames.logic.name,
      icon: Brain,
      color: 'bg-emerald-400',
      task: t.features.minigames.logic.task,
      instruction: t.features.minigames.logic.instruction
    },
    {
      name: t.features.minigames.creative.name,
      icon: Palette,
      color: 'bg-amber-400',
      task: t.features.minigames.creative.task,
      instruction: t.features.minigames.creative.instruction
    },
    {
      name: t.features.minigames.social.name,
      icon: Users,
      color: 'bg-purple-400',
      task: t.features.minigames.social.task,
      instruction: t.features.minigames.social.instruction
    },
    {
      name: t.features.minigames.visual.name,
      icon: Eye,
      color: 'bg-pink-300',
      task: t.features.minigames.visual.task,
      instruction: t.features.minigames.visual.instruction
    }
  ];

  // Creative Game (Old Logic) Red/Green Toggle
  useEffect(() => {
    if (isGameActive && gameType === 1 && !isGameOver) {
      const interval = setInterval(() => {
        if (Math.random() > 0.7 && !isTargetRed) {
          setIsTargetRed(true);
          setTimeout(() => setIsTargetRed(false), 800 + Math.random() * 700);
        }
      }, 2000);
      return () => clearInterval(interval);
    }
  }, [isGameActive, gameType, isTargetRed, isGameOver]);

  const handleStartGame = (index: number) => {
    setGameType(index);
    setShowInstructions(true);
    setIsGameActive(true);
    setGameScore(0);
    setIsGameOver(false);
  };

  const startGameActual = () => {
    setShowInstructions(false);
    setIsGameActive(true);
    setIsGameOver(false);
    setGameScore(0);
    setLastActionTime(performance.now());

    if (gameType === 0) { // Math
      const target = Math.floor(Math.random() * 20 + 10);
      const opt1 = Math.floor(Math.random() * (target - 1) + 1);
      const opt2 = target - opt1;
      const noise = [
        Math.floor(Math.random() * 30),
        Math.floor(Math.random() * 30),
        Math.floor(Math.random() * 30),
        Math.floor(Math.random() * 30)
      ];
      setLogicTarget(target);
      setLogicOptions([opt1, opt2, ...noise].sort(() => Math.random() - 0.5));
      setUserSpelled([]);
    } else if (gameType === 2) { // Social
      const words = t.features.minigames.social.words;
      const word = words[Math.floor(Math.random() * words.length)];
      setCurrentWord(word);
      setScrambledWord(word.split('').sort(() => Math.random() - 0.5));
      setUserSpelled([]);
    } else if (gameType === 3) { // Visual
      const nodes = Array.from({ length: 5 }, () => ({
        x: Math.floor(Math.random() * 70 + 15) + '%',
        y: Math.floor(Math.random() * 70 + 15) + '%'
      }));
      setTraceNodes(nodes);
      setTraceIndex(0);
    }
    moveTarget();
  };

  const moveTarget = () => {
    setTargetPos({
      top: 20 + Math.random() * 60 + '%',
      left: 20 + Math.random() * 60 + '%'
    });
  };

  const handleBoost = (typeIdx: number) => {
    setGameStats(prev => {
      const newStats = [...prev];
      const current = newStats[typeIdx];
      current.xp += 10;
      if (current.xp >= 100) {
        current.level += 1;
        current.xp = 0;
        if (current.level === 10) setShowCongrats(true);
      }
      return newStats;
    });
  };

  const handleAction = (e?: React.MouseEvent) => {
    if (isGameOver) return;
    if (e) e.stopPropagation();

    const now = performance.now();
    const speed = ((now - lastActionTime) / 1000).toFixed(2) + 's';
    setLastActionTime(now);

    setGameScore(prev => prev + 1);
    handleBoost(gameType);
    setShake(true);
    setTimeout(() => setShake(false), 200);

    if (e) {
      const viewport = e.currentTarget.closest('.game-viewport');
      if (viewport) {
        const rect = viewport.getBoundingClientRect();
        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;
        const id = Date.now();
        setClickFeedback(prev => [...prev.filter(f => f.text !== speed), { id, text: speed, x, y }]);
        setTimeout(() => {
          setClickFeedback(prev => prev.filter(f => f.id !== id));
        }, 1000);
      }
    }

    if (gameType === 0) { // New logic math logic
      setUserSpelled([]);
      const target = Math.floor(Math.random() * 20 + 10);
      const opt1 = Math.floor(Math.random() * (target - 1) + 1);
      const opt2 = target - opt1;
      setLogicTarget(target);
      setLogicOptions([opt1, opt2, Math.random() * 20, Math.random() * 20, Math.random() * 20, Math.random() * 20].map(n => Math.floor(n)).sort(() => Math.random() - 0.5));
    } else {
      moveTarget();
    }
  };

  const handleMathClick = (num: number, e: React.MouseEvent) => {
    const newSpelled = [...userSpelled, num.toString()];
    setUserSpelled(newSpelled);
    if (newSpelled.length === 2) {
      if (parseInt(newSpelled[0]) + parseInt(newSpelled[1]) === logicTarget) {
        handleAction(e);
      } else {
        setIsGameOver(true);
        setShake(true);
      }
    }
  };

  const handleCreativeClick = (e: React.MouseEvent) => {
    if (isTargetRed) {
      setIsGameOver(true);
      setShake(true);
    } else {
      handleAction(e);
    }
  };

  const handleSocialClick = (letter: string, idx: number, e: React.MouseEvent) => {
    const newSelection = [...userSpelled, letter];
    const newScrambled = [...scrambledWord];
    newScrambled.splice(idx, 1);

    setScrambledWord(newScrambled);
    setUserSpelled(newSelection);

    if (newScrambled.length === 0) {
      if (newSelection.join('') === currentWord) {
        handleAction(e);
        startGameActual();
      } else {
        setIsGameOver(true);
        setShake(true);
      }
    }
  };

  const handleVisualClick = (nodeIdx: number, e: React.MouseEvent) => {
    if (nodeIdx === traceIndex) {
      if (traceIndex === traceNodes.length - 1) {
        handleAction(e);
        startGameActual();
      } else {
        setTraceIndex(prev => prev + 1);
      }
    } else {
      setIsGameOver(true);
      setShake(true);
    }
  };

  const tabs = [t.programs.virtualClass, t.programs.scholarshipProgram, t.programs.studentMonitoring];

  const features = [
    {
      titleKey: 'learningVirtually' as const,
      descriptionKey: 'learningVirtuallyDesc' as const,
      badgeKey: 'totallyFree' as const,
      badgeColor: 'bg-gradient-to-r from-pink-300 to-pink-400',
    },
    {
      titleKey: 'scholarshipForEveryone' as const,
      descriptionKey: 'scholarshipForEveryoneDesc' as const,
      badgeKey: 'limitedSpots' as const,
      badgeColor: 'bg-gradient-to-r from-purple-400 to-purple-500',
    },
    {
      titleKey: 'trackStudentProgress' as const,
      descriptionKey: 'trackStudentProgressDesc' as const,
      badgeKey: 'realTime' as const,
      badgeColor: 'bg-gradient-to-r from-green-400 to-green-500',
    },
  ];

  const avatars = [
    {
      name: t.features.avatars.creative.name,
      color: 'from-blue-400 to-purple-400',
      description: t.features.avatars.creative.desc,
      icon: Palette
    },
    {
      name: t.features.avatars.logical.name,
      color: 'from-pink-300 to-pink-500',
      description: t.features.avatars.logical.desc,
      icon: Brain
    },
    {
      name: t.features.avatars.social.name,
      color: 'from-green-400 to-cyan-400',
      description: t.features.avatars.social.desc,
      icon: Users
    },
    {
      name: t.features.avatars.visual.name,
      color: 'from-yellow-400 to-pink-400',
      description: t.features.avatars.visual.desc,
      icon: Eye
    },
  ];

  return (
    <section className="relative bg-white py-12 lg:py-20 overflow-hidden">
      <div className="absolute top-20 left-10 opacity-10">
        <div className="w-40 h-40 bg-emerald-400 rounded-full blur-3xl"></div>
      </div>

      <div className="absolute top-1/3 left-20 animate-float hidden lg:block">
        <div className="w-20 h-20 bg-gradient-to-br from-emerald-400 to-cyan-400 rounded-full flex items-center justify-center shadow-lg shadow-emerald-400/50">
          <Globe className="w-10 h-10 text-white" strokeWidth={3} />
        </div>
      </div>

      <div className="absolute top-1/2 right-10 opacity-10">
        <div className="w-32 h-32 bg-purple-400 rounded-full blur-3xl"></div>
      </div>

      <div className="container mx-auto px-4 sm:px-6 relative z-10">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-8 lg:mb-16">
            <h2 className="text-4xl sm:text-5xl md:text-7xl font-black text-gray-900 leading-tight mb-4 uppercase tracking-tighter">
              {t.features.title}{' '}
              <span className="relative inline-block">
                <span className="bg-gradient-to-r from-cyan-400 to-cyan-500 text-gray-900 px-4 sm:px-6 py-2 rounded-full inline-block">
                  {t.features.titleHighlight}
                </span>
              </span>
              .
            </h2>
          </div>

          {/* Folder-style tabs - Improved for mobile responsiveness */}
          <div className="relative mb-0 overflow-x-auto no-scrollbar pb-2">
            <div className="flex items-end gap-0 px-2 min-w-max sm:min-w-0">
              {/* Globe icon on the left - Hidden on tiny screens and for long languages on mobile */}
              <div className={`${['ru', 'lt', 'en'].includes(language) ? 'hidden md:flex' : 'hidden sm:flex'} w-10 h-10 bg-cyan-400 rounded-full items-center justify-center mb-0 mr-2 z-30 flex-shrink-0`}>
                <Globe className="w-6 h-6 text-white" strokeWidth={3} />
              </div>

              {tabs.map((tab, index) => {
                const isActive = activeTab === index;
                const getTabColors = () => {
                  if (index === 0) return isActive ? 'bg-yellow-300 text-gray-900' : 'bg-gray-200 text-gray-600';
                  if (index === 1) return isActive ? 'bg-indigo-400 text-white' : 'bg-gray-200 text-gray-600';
                  return isActive ? 'bg-pink-300 text-gray-900' : 'bg-gray-200 text-gray-600';
                };

                const isLongLang = ['ru', 'lt', 'en'].includes(language);

                return (
                  <button
                    key={index}
                    onClick={() => setActiveTab(index)}
                    className={`${isLongLang ? 'px-1 sm:px-1.5 text-[8px] xs:text-[9px] sm:text-[10px] md:text-[11px] tracking-tighter' : 'px-3 sm:px-4 text-xs sm:text-sm md:text-base'} py-2 font-black transition-all duration-200 relative overflow-hidden border-2 sm:border-4 border-gray-900 ${isActive ? 'z-30 translate-y-0' : 'z-10 translate-y-1 opacity-70 hover:opacity-100'
                      } ${getTabColors()}`}
                    style={{
                      borderBottomWidth: isActive ? '0' : '4px',
                      borderRadius: '0.75rem 0.75rem 0 0',
                      marginRight: '-1px',
                      boxShadow: isActive ? 'none' : '2px 4px -2px 0px rgba(0,0,0,1)',
                    }}
                  >
                    <span className="relative z-10 whitespace-nowrap">{tab}</span>
                  </button>
                );
              })}
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-start">
            {/* Folder content area with DEEPER shadow */}
            <div className={`rounded-b-2xl sm:rounded-b-3xl rounded-tr-2xl sm:rounded-tr-3xl p-6 sm:p-12 relative border-2 sm:border-4 border-gray-900 ${activeTab === 0
              ? 'bg-yellow-300'
              : activeTab === 1
                ? 'bg-indigo-400'
                : 'bg-pink-300'
              } transition-all duration-500 ease-in-out shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] sm:shadow-[12px_12px_0px_0px_rgba(0,0,0,1)]`}
              style={{
                borderTopLeftRadius: '0',
                overflow: 'visible'
              }}>
              <div className="absolute -bottom-20 -left-20 w-64 h-64 bg-white/20 rounded-full blur-3xl"></div>

              <div className="relative z-10">
                <h3 className={`text-3xl sm:text-4xl md:text-5xl font-black mb-4 sm:mb-6 leading-tight uppercase tracking-tighter italic ${activeTab === 1 ? 'text-white' : 'text-gray-900'
                  }`}>
                  {t.features[features[activeTab].titleKey]}
                </h3>

                <p className={`text-base sm:text-lg mb-6 sm:mb-8 leading-relaxed font-bold ${activeTab === 1 ? 'text-white/90' : 'text-gray-800'
                  }`}>
                  {t.features[features[activeTab].descriptionKey]}
                </p>

                <div className="inline-block">
                  <div className={`${features[activeTab].badgeColor} px-4 py-1.5 rounded-full border-2 border-gray-900 text-[10px] font-black uppercase tracking-widest shadow-[2px_2px_0_0_rgba(0,0,0,1)]`}>
                    {t.features[features[activeTab].badgeKey]}
                  </div>
                </div>
              </div>

              {/* Decorative components - arrows etc. - better handled for mobile */}
              <div className="hidden sm:block lg:absolute -bottom-20 left-8 z-30 mt-8 lg:mt-0">
                <div className="relative">
                  <div className="text-gray-900 text-3xl sm:text-4xl font-bold transform -rotate-6"
                    style={{
                      fontFamily: "'Comic Sans MS', 'Marker Felt', cursive",
                    }}>
                    {t.features.important}
                  </div>
                  <img
                    src="/arrow.png"
                    alt="arrow"
                    className="absolute -top-16 sm:-top-24 left-24 sm:left-32 transform rotate-[35deg] pointer-events-none"
                    style={{
                      width: '120px',
                      height: 'auto',
                      filter: 'brightness(0) saturate(0)',
                      opacity: 0.8
                    }}
                  />
                </div>
              </div>
            </div>

            {/* Minigame Simulator Card */}
            <div className="bg-gray-100 rounded-3xl p-6 sm:p-12 border-2 sm:border-4 border-gray-900 shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] sm:shadow-[16px_16px_0px_0px_rgba(0,0,0,1)] lg:scale-105 system-cursor-zone">
              <div className="bg-white rounded-2xl overflow-hidden shadow-lg border-2 border-gray-900">
                <div className="bg-gray-200 px-4 py-3 flex items-center gap-2 border-b-2 border-gray-900">
                  <div className="flex gap-1.5">
                    <div className="w-2.5 h-2.5 rounded-full bg-red-400 border border-gray-900"></div>
                    <div className="w-2.5 h-2.5 rounded-full bg-yellow-400 border border-gray-900"></div>
                    <div className="w-2.5 h-2.5 rounded-full bg-green-400 border border-gray-900"></div>
                  </div>
                  <div className="flex-1 bg-white rounded-md px-3 py-1 text-[10px] text-gray-500 flex items-center border border-gray-300 notranslate" translate="no">
                    <span className="mr-2">🔒</span>
                    learning.newmindr.com
                  </div>
                </div>

                <div className={`p-4 sm:p-8 bg-white relative min-h-[340px] sm:min-h-[380px] overflow-hidden ${shake ? 'animate-shake' : ''}`}>
                  <style>{minigameStyles}</style>
                  {/* Floating Click Speed Popups */}
                  {clickFeedback.map(f => (
                    <div
                      key={f.id}
                      className="absolute z-[110] font-black text-emerald-500 text-sm animate-float-up pointer-events-none"
                      style={{ top: f.y - 20, left: f.x }}
                    >
                      {f.text}
                    </div>
                  ))}

                  {/* Congratulations Celebration */}
                  {showCongrats && (
                    <div className="absolute inset-0 z-[100] bg-gray-900 flex flex-col items-center justify-center p-8 text-center animate-in fade-in duration-500 rounded-b-2xl">
                      <div className="w-20 h-20 bg-yellow-400 rounded-full flex items-center justify-center mb-6 animate-bounce border-4 border-white shadow-[0_0_30px_rgba(250,204,21,0.5)]">
                        <Rocket className="w-10 h-10 text-gray-900" />
                      </div>
                      <h4 className="text-white text-3xl font-black mb-4 leading-tight">{t.features.masteryAchieved}</h4>
                      <p className="text-gray-300 text-sm leading-relaxed mb-8">
                        "{t.features.masteryDesc}<span className="text-yellow-400 font-black">{t.features.neverGiveUp}</span>"
                      </p>
                      <button
                        onClick={() => setShowCongrats(false)}
                        className="px-8 py-3 bg-white text-gray-900 font-bold rounded-xl hover:bg-gray-100 transition-all border-2 border-gray-900 shadow-[4px_4px_0px_0px_rgba(255,255,255,0.3)]"
                        style={{ fontFamily: "'Sora', sans-serif" }}
                      >
                        {t.features.continueExploring}
                      </button>
                    </div>
                  )}

                  {/* Interactive Overlay Menu */}
                  {isBrowserMenuOpen && !isGameActive && (
                    <div className="absolute inset-0 z-50 bg-gray-900/95 backdrop-blur-sm p-8 animate-in fade-in zoom-in duration-200 flex flex-col rounded-b-2xl">
                      <div className="flex justify-between items-center mb-6">
                        <div>
                          <h4 className="text-white font-black text-xl">{t.features.skillPath}</h4>
                          <p className="text-gray-400 text-[10px]">{t.features.nonLinear}</p>
                        </div>
                        <div className="absolute top-4 right-4 z-50 p-4 cursor-pointer group" onClick={() => setIsBrowserMenuOpen(false)}>
                          <button
                            className="w-8 h-8 rounded-full bg-white/10 flex items-center justify-center text-white group-hover:bg-white/20 transition-colors"
                          >
                            <X className="w-4 h-4" />
                          </button>
                        </div>
                      </div>

                      <div className="flex-1 space-y-4">
                        <div className="grid grid-cols-2 gap-3">
                          {games.map((g, idx) => (
                            <button
                              key={idx}
                              onClick={() => setGameType(idx)}
                              className={`p-4 rounded-xl border border-white/10 text-white transition-all active:scale-95 flex flex-col items-center gap-2 relative overflow-hidden group ${gameType === idx ? 'bg-white/20' : 'bg-white/5'}`}
                            >
                              <div className="absolute top-0 left-0 h-1 bg-emerald-400 opacity-50 transition-all group-hover:w-full" style={{ width: `${gameStats[idx].xp}%` }}></div>
                              <g.icon className="w-6 h-6" />
                              <div className="text-center">
                                <p className="text-[10px] font-black">{g.name.split(' ')[0]}</p>
                                <p className="text-[8px] opacity-50">LVL {gameStats[idx].level}</p>
                              </div>
                            </button>
                          ))}
                        </div>
                        <button
                          onClick={() => handleStartGame(gameType)}
                          className="w-full p-4 bg-emerald-500 hover:bg-emerald-400 rounded-xl border-2 border-gray-900 shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] text-gray-900 text-sm font-black transition-all active:translate-y-1 active:shadow-none flex items-center justify-center gap-2"
                          style={{ fontFamily: "'Sora', sans-serif" }}
                        >
                          <Rocket className="w-5 h-5" />
                          {t.features.minigames.launchMission} ({games[gameType].name})
                        </button>
                      </div>
                    </div>
                  )}

                  {/* Minigame Active State */}
                  {isGameActive ? (
                    <div className="absolute inset-0 z-[60] bg-white p-6 animate-in slide-in-from-bottom duration-300 rounded-b-2xl flex flex-col">
                      <div className="flex justify-between items-start mb-4 border-b-2 border-gray-100 pb-4">
                        <div className="flex flex-col gap-2">
                          <div className="flex items-center gap-2">
                            <div className={`${games[gameType].color} text-gray-900 px-3 py-1 rounded-full text-[10px] font-black shadow-[2px_2px_0_0_rgba(0,0,0,1)]`} style={{ fontFamily: "'Space Grotesk', sans-serif" }}>
                              {games[gameType].name}
                            </div>
                            <div className="bg-purple-100 text-purple-600 px-3 py-1 rounded-full text-[10px] font-black border-2 border-purple-200" style={{ fontFamily: "'Space Grotesk', sans-serif" }}>
                              {t.features.minigames.level} {gameStats[gameType].level}
                            </div>
                            <div className="bg-gray-100 text-gray-900 px-3 py-1 rounded-full text-[10px] font-black border-2 border-gray-200" style={{ fontFamily: "'Space Grotesk', sans-serif" }}>
                              {t.features.minigames.score}: {gameScore}
                            </div>
                          </div>
                        </div>
                        <button
                          onClick={() => { setIsGameActive(false); setIsGameOver(false); }}
                          className="bg-red-100 text-red-600 px-3 py-1 rounded-full text-[10px] font-black hover:bg-red-200 transition-colors border-2 border-red-200"
                          style={{ fontFamily: "'Sora', sans-serif" }}
                        >
                          {t.features.minigames.exit}
                        </button>
                      </div>

                      <div className="relative flex-1 border-4 border-gray-900 rounded-2xl flex items-center justify-center bg-gray-50/30 overflow-hidden shadow-inner game-viewport min-h-[180px]">
                        {showInstructions ? (
                          <div className="absolute inset-0 z-[80] bg-white/95 flex flex-col items-center justify-center p-4 text-center animate-in fade-in zoom-in duration-300">
                            <div className={`w-12 h-12 rounded-2xl ${games[gameType].color} flex items-center justify-center border-4 border-gray-900 shadow-[4px_4px_0_0_rgba(0,0,0,1)] mb-4 animate-bounce`}>
                              {(() => {
                                const GameIcon = games[gameType].icon;
                                return <GameIcon className="w-6 h-6 text-gray-900" />;
                              })()}
                            </div>
                            <div className="relative flex flex-col items-center">
                              <h3 className="text-xl font-black text-gray-900 mb-2 uppercase tracking-tighter">{games[gameType].name}</h3>
                              <p className="text-[10px] text-gray-600 font-bold mb-8 max-w-[200px] leading-relaxed italic">{games[gameType].instruction}</p>

                              <button
                                onClick={startGameActual}
                                className="px-6 py-2 bg-emerald-500 text-gray-900 font-black rounded-xl border-2 border-gray-900 shadow-[4px_4px_0_0_rgba(0,0,0,1)] hover:-translate-y-1 hover:shadow-[6px_6px_0_0_rgba(0,0,0,1)] active:translate-y-1 active:shadow-none transition-all uppercase tracking-widest text-xs"
                                style={{ fontFamily: "'Sora', sans-serif" }}
                              >
                                {t.features.minigames.beginMission}
                              </button>
                            </div>
                          </div>
                        ) : isGameOver ? (
                          <div className="flex flex-col items-center gap-4 animate-in fade-in zoom-in duration-300">
                            <div className="w-16 h-16 bg-red-100 rounded-full flex items-center justify-center mb-2">
                              <X className="w-8 h-8 text-red-600" />
                            </div>
                            <h3 className="text-2xl font-black text-red-600 uppercase tracking-tighter">{t.features.minigames.missionFailed}</h3>
                            <button
                              onClick={() => startGameActual()}
                              className="px-8 py-3 bg-gray-900 text-white font-black rounded-xl shadow-[6px_6px_0_0_rgba(220,38,38,1)] hover:-translate-y-1 active:translate-y-1 transition-all uppercase tracking-widest"
                              style={{ fontFamily: "'Sora', sans-serif" }}
                            >
                              {t.features.minigames.startAgain}
                            </button>
                          </div>
                        ) : (
                          <>
                            {clickFeedback.map(f => (
                              <div
                                key={f.id}
                                className={`absolute z-[110] font-black text-emerald-500 text-sm animate-float-up pointer-events-none`}
                                style={{ top: f.y - 20, left: f.x - 20 }}
                              >
                                {f.text}
                              </div>
                            ))}

                            {gameType === 0 && ( /* LOGIC: TARGET SUM */
                              <div className="w-full h-full flex flex-col items-center justify-center p-6 gap-6">
                                <div className="text-center">
                                  <p className="text-[10px] font-black text-gray-400 uppercase tracking-[0.3em] mb-1">{t.features.targetSum}</p>
                                  <div className="text-5xl font-black text-gray-900 bg-white border-4 border-gray-900 px-6 py-2 rounded-2xl shadow-[6px_6px_0_0_rgba(0,0,0,1)] italic">
                                    {logicTarget}
                                  </div>
                                </div>
                                <div className="grid grid-cols-3 gap-3">
                                  {logicOptions.map((n, i) => (
                                    <button
                                      key={i}
                                      onClick={(e) => handleMathClick(n, e)}
                                      className={`w-14 h-14 bg-white border-2 border-gray-900 rounded-xl font-black text-lg shadow-[4px_4px_0_0_rgba(0,0,0,1)] hover:-translate-y-1 active:translate-y-0.5 transition-all ${userSpelled.includes(n.toString()) ? 'bg-emerald-100 border-emerald-500' : ''}`}
                                    >
                                      {n}
                                    </button>
                                  ))}
                                </div>
                                <div className="flex gap-2 h-6">
                                  {userSpelled.map((s, i) => (
                                    <div key={i} className="px-3 bg-emerald-500 text-white font-black rounded text-[10px] flex items-center uppercase">{s}</div>
                                  ))}
                                </div>
                              </div>
                            )}

                            {gameType === 1 && ( /* CREATIVE: CATCH & AVOID */
                              <button
                                onClick={(e) => handleCreativeClick(e)}
                                className={`absolute border-2 border-gray-900 rounded-full shadow-[4px_4px_0_0_rgba(0,0,0,1)] flex items-center justify-center cursor-crosshair animate-float ${isTargetRed ? 'bg-red-500 scale-110' : 'bg-emerald-400'}`}
                                style={{
                                  top: targetPos.top,
                                  left: targetPos.left,
                                  width: '48px',
                                  height: '48px',
                                  transition: 'top 300ms, left 300ms'
                                }}
                              >
                                {(() => {
                                  const GameIcon = games[gameType].icon;
                                  return <GameIcon className="w-1/2 h-1/2 text-gray-900" />;
                                })()}
                              </button>
                            )}

                            {gameType === 2 && ( /* SOCIAL: WORD VALIDATE */
                              <div className="flex flex-col items-center gap-4 p-4">
                                <div className="flex flex-wrap justify-center gap-2 mb-4 min-h-[40px]">
                                  {userSpelled.map((l, i) => (
                                    <div key={i} className="w-8 h-8 border-b-4 border-purple-500 flex items-center justify-center text-xl font-black text-purple-600 animate-in slide-in-from-bottom-2">
                                      {l}
                                    </div>
                                  ))}
                                  {Array.from({ length: Math.max(0, currentWord.length - userSpelled.length) }).map((_, i) => (
                                    <div key={i} className="w-8 h-8 border-b-4 border-gray-200"></div>
                                  ))}
                                </div>
                                <div className="grid grid-cols-4 gap-2">
                                  {scrambledWord.map((letter, i) => (
                                    <button
                                      key={`${letter}-${i}`}
                                      onClick={(e) => handleSocialClick(letter, i, e)}
                                      className="w-10 h-10 bg-white border-2 border-gray-900 rounded-lg shadow-[2px_2px_0_0_rgba(0,0,0,1)] font-black hover:-translate-y-1 active:translate-y-1 transition-all"
                                    >
                                      {letter}
                                    </button>
                                  ))}
                                </div>
                              </div>
                            )}

                            {gameType === 3 && ( /* VISUAL: STEADY TRACE */
                              <div className="relative w-full h-full">
                                <svg className="absolute inset-0 w-full h-full pointer-events-none">
                                  <path
                                    d={`M ${traceNodes.map(n => `${parseFloat(n.x) * 3}% ${parseFloat(n.y) * 3}%`).join(' L ')}`}
                                    fill="none"
                                    stroke="gray"
                                    strokeWidth="2"
                                    className="opacity-20"
                                  />
                                </svg>
                                {traceNodes.map((node, i) => (
                                  <button
                                    key={i}
                                    onClick={(e) => handleVisualClick(i, e)}
                                    className={`absolute w-8 h-8 rounded-full border-2 border-gray-900 flex items-center justify-center font-black text-[10px] transition-all
                                      ${i === traceIndex ? 'bg-pink-300 scale-125 shadow-[4px_4px_0_0_rgba(0,0,0,1)] z-10' :
                                        i < traceIndex ? 'bg-pink-100 text-pink-500 border-pink-200' : 'bg-white text-gray-400'}`}
                                    style={{ top: node.y, left: node.x }}
                                  >
                                    {i + 1}
                                  </button>
                                ))}
                                <p className="absolute bottom-4 left-1/2 -translate-x-1/2 text-[8px] font-black text-gray-400 uppercase tracking-[0.3em]">{t.features.stayOnPath}</p>
                              </div>
                            )}
                          </>
                        )}
                      </div>

                      <div className="mt-4 flex items-center gap-3">
                        <div className="flex-1 h-3 bg-gray-100 rounded-full overflow-hidden border-2 border-gray-900 shadow-[2px_2px_0px_0px_rgba(0,0,0,1)]">
                          <div
                            className="h-full bg-emerald-400 transition-all duration-300"
                            style={{ width: `${gameStats[gameType].xp}%` }}
                          />
                        </div>
                        <span className="text-[12px] font-black text-gray-900" style={{ fontFamily: "'Space Grotesk', sans-serif" }}>{gameStats[gameType].xp}%</span>
                      </div>
                    </div>
                  ) : (
                    <div className="grid grid-cols-2 gap-8">
                      {avatars.map((avatar, index) => (
                        <div
                          key={index}
                          className="bg-gray-50 rounded-2xl p-5 hover:shadow-lg transition-all group min-h-[160px] flex flex-col system-cursor-zone"
                        >
                          <div className={`w-12 h-12 rounded-full bg-gradient-to-br ${avatar.color} mb-3 shadow-lg flex items-center justify-center flex-shrink-0`}>
                            <avatar.icon className="w-6 h-6 text-white" strokeWidth={2.5} />
                          </div>

                          {/* Animated text that fades in */}
                          <div className="opacity-0 group-hover:opacity-100 transition-opacity duration-300 hidden group-hover:block">
                            <h4 className={`text-gray-900 font-bold mb-0.5 ${['ru', 'lt'].includes(language) ? 'text-[10px] sm:text-[11px]' : 'text-xs sm:text-sm'}`}>
                              {avatar.name}
                            </h4>
                            <p className={`text-gray-600 leading-snug ${['ru', 'lt'].includes(language) ? 'text-[9px] sm:text-[10px]' : 'text-[10px] sm:text-xs'}`}>
                              {avatar.description}
                            </p>
                          </div>

                          {/* Grey placeholder lines when not hovered */}
                          <div className="group-hover:hidden">
                            <div className="h-2 bg-gray-200 rounded-full mb-1 w-3/4"></div>
                            <div className="h-1.5 bg-gray-200 rounded-full w-1/2"></div>
                          </div>
                        </div>
                      ))}
                    </div>
                  )}

                  <div className="mt-6 flex justify-end">
                    <button
                      onClick={() => setIsBrowserMenuOpen(true)}
                      className="px-6 py-2 bg-blue-500 text-white rounded-full hover:bg-blue-600 shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] active:translate-y-1 active:shadow-none transition-all font-black text-sm uppercase tracking-wider flex items-center gap-2"
                      style={{ cursor: 'url("data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTYiIGhlaWdodD0iMTYiIHZpZXdCb3g9IjAgMCAxNiAxNiIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48cGF0aCBkPSJNMSAxTDEgMTFMNCA4TDcgMTRMOSAxM0w2IDdMMTIgNUwxIDFaIiBmaWxsPSJibGFjayIvPjwvc3ZnPg==") 1 1, pointer' }}
                    >
                      {t.features.play}
                    </button>
                  </div>
                </div>
              </div>
            </div>

            {/* Games Disclaimer */}
            <div className="mt-6 bg-gradient-to-r from-blue-50 to-purple-50 border-2 border-gray-900 rounded-2xl p-4 sm:p-6 shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]">
              <div className="flex items-start gap-3">
                <div className="flex-shrink-0 w-8 h-8 sm:w-10 sm:h-10 bg-yellow-300 rounded-full border-2 border-gray-900 flex items-center justify-center shadow-[2px_2px_0px_0px_rgba(0,0,0,1)]">
                  <span className="text-lg sm:text-xl">💡</span>
                </div>
                <div className="flex-1">
                  <p className="text-gray-700 text-xs sm:text-sm font-bold leading-relaxed">
                    {t.features.gamesDisclaimer}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
