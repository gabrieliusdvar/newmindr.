import { useState } from 'react';
import { Mail, Users, Briefcase, Clock, Rocket } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';
import { sendEmail } from '../utils/emailService';
import { generateEmailHtml } from '../utils/emailGenerator';
import { translations } from '../utils/translations';
import MinigamePopup from './MinigamePopup';

export default function Hero() {
  const { t, language } = useLanguage();
  const [email, setEmail] = useState('');
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');
  const [isMinigameOpen, setIsMinigameOpen] = useState(false);

  const validateEmail = (email: string) => {
    return String(email)
      .toLowerCase()
      .match(
        /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
      );
  };

  const handleClaim = async () => {
    if (!validateEmail(email)) {
      setStatus('error');
      setTimeout(() => setStatus('idle'), 600);
      return;
    }

    setStatus('loading');
    try {
      const html = generateEmailHtml(language, 'trial', { name: 'Friend' });
      await sendEmail({
        to: email,
        subject: translations[language].emails.trial.subject,
        html
      });
      setStatus('success');
    } catch (error) {
      console.error('Email failed:', error);
      setStatus('error');
      setTimeout(() => setStatus('idle'), 3000);
    }
  };

  return (
    <section className="relative overflow-hidden min-h-[550px] lg:min-h-0" style={{ paddingTop: '50px' }}>
      {/* Background split - Exactly 50vh each on mobile for true 50/50 split, side-by-side on desktop */}
      <div className="absolute inset-0 flex flex-col lg:flex-row pointer-events-none">
        {/* Green section - Full height on mobile (covers purple), left half on desktop */}
        <div className="h-full lg:h-auto lg:w-1/2 bg-gradient-to-br from-emerald-300 to-emerald-400 border-b-2 lg:border-b-0 lg:border-r-2 border-gray-900 relative overflow-hidden">
          {/* Liquid Water Wave Dots - Responsive size */}
          <div className="absolute inset-0 opacity-20 md:opacity-30">
            <div
              className="absolute inset-[-100px] animate-water-wave"
              style={{
                backgroundImage: 'radial-gradient(#000 1px, transparent 1px)',
                backgroundSize: '16px 16px'
              }}
            ></div>
          </div>
        </div>
        {/* Purple section - Fills remaining space on mobile, right half on desktop */}
        <div className="hidden lg:block flex-1 lg:h-auto lg:w-1/2 bg-gradient-to-br from-purple-300 to-purple-400"></div>
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 3xl:px-12 relative z-10">
        <div className="max-w-7xl 3xl:max-w-[1800px] mx-auto">
          <div className="flex flex-col lg:grid lg:grid-cols-2 lg:min-h-[75vh] 3xl:min-h-[60vh]">
            {/* Left side - Content */}
            <div className="flex flex-col justify-start lg:justify-center py-6 sm:py-8 lg:py-20 3xl:py-24 lg:pl-0 lg:pr-8 lg:-ml-20 3xl:-ml-24">
              <div className="max-w-xl mx-auto lg:mx-0 3xl:max-w-2xl">
                <h1 className="font-black leading-[1.1] mb-6 sm:mb-8 3xl:mb-12 uppercase tracking-tighter text-center lg:text-left">
                  {/* Line 1 */}
                  <span
                    className={`block ${['lt', 'ru'].includes(language) ? 'text-2xl xs:text-3xl sm:text-4xl md:text-5xl lg:text-[2.8rem] 3xl:text-5xl' : 'text-4xl xs:text-5xl sm:text-5xl md:text-6xl lg:text-5xl 3xl:text-6xl'} mb-3 sm:mb-4 3xl:mb-6 text-white whitespace-nowrap lg:whitespace-normal xl:whitespace-nowrap`}
                    style={{
                      WebkitTextStroke: '1px #111827',
                      filter: 'drop-shadow(2px 2px 0px #FACC15)',
                      paintOrder: 'stroke fill'
                    }}
                  >
                    {t.hero.title}
                  </span>

                  {/* Line 2 - The Panel */}
                  <div onClick={() => setIsMinigameOpen(true)} className="inline-block relative mb-4 sm:mb-6 3xl:mb-8 transform -rotate-2 hover:rotate-1 hover:scale-105 transition-all duration-300 cursor-pointer">
                    <div className="absolute inset-0 bg-purple-400 border-2 sm:border-3 3xl:border-4 border-gray-900 rounded-lg sm:rounded-xl 3xl:rounded-2xl shadow-[2px_2px_0px_0px_rgba(0,0,0,1)] sm:shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] 3xl:shadow-[6px_6px_0px_0px_rgba(0,0,0,1)]" />
                    <span className={`relative block ${['lt', 'ru'].includes(language) ? 'text-3xl xs:text-4xl sm:text-4xl md:text-5xl lg:text-5xl xl:text-6xl' : 'text-4xl xs:text-5xl sm:text-5xl md:text-6xl lg:text-6xl xl:text-7xl'} text-gray-900 italic px-3 sm:px-5 3xl:px-8 py-1 sm:py-2 3xl:py-3 font-black`}>
                      {t.hero.superpower}
                    </span>
                  </div>

                  {/* Line 3 */}
                  <div className="flex items-center justify-center lg:justify-start gap-2 sm:gap-3 3xl:gap-4 flex-wrap">
                    <span
                      className={`text-white block ${['lt', 'ru'].includes(language) ? 'text-3xl xs:text-4xl sm:text-5xl md:text-5xl lg:text-5xl xl:text-6xl 3xl:text-8xl' : 'text-5xl xs:text-6xl sm:text-7xl md:text-7xl lg:text-7xl xl:text-8xl 3xl:text-9xl'} py-1 whitespace-nowrap`}
                      style={{
                        WebkitTextStroke: '1px #111827',
                        filter: 'drop-shadow(2px 2px 0px #10B981)',
                        paintOrder: 'stroke fill'
                      }}
                    >
                      {t.hero.subtitle}
                    </span>
                    <div className="relative group/mascot">
                      <div className="absolute inset-0 bg-gray-900 rounded-full blur-xl opacity-20 group-hover/mascot:opacity-40 transition-opacity"></div>
                      <div className="w-10 h-10 xs:w-12 xs:h-12 sm:w-16 sm:h-16 md:w-20 md:h-20 3xl:w-24 3xl:h-24 bg-purple-400 border-2 border-gray-900 rounded-2xl overflow-hidden relative z-10 transition-all group-hover/mascot:rotate-6 group-hover/mascot:scale-110 shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]">
                        <img src="/download (1).png" alt="" className="w-full h-full object-cover" />
                      </div>
                    </div>
                  </div>
                </h1>

                <div className="relative pl-3 sm:pl-4 3xl:pl-6 mb-6 sm:mb-8 3xl:mb-10 group/desc mx-auto lg:mx-0">
                  <div className="absolute left-0 top-1 bottom-1 w-1 sm:w-1.5 bg-gray-900/10 rounded-full group-hover/desc:bg-gray-900/30 transition-colors" />
                  <p className="text-gray-900 text-lg xs:text-xl sm:text-xl md:text-2xl 3xl:text-3xl font-black italic leading-snug tracking-tight max-w-lg 3xl:max-w-xl opacity-80">
                    {t.hero.description}
                  </p>
                </div>

                {/* Search bar - Fully responsive */}
                <div className={`flex flex-col sm:flex-row gap-3 sm:gap-4 3xl:gap-6 items-stretch sm:items-center relative transition-all duration-500 ${status === 'success' ? 'scale-105' : ''}`}>
                  <div className={`flex-1 relative transition-all duration-300 ${status === 'error' ? 'animate-shake' : ''}`}>
                    <Mail className={`absolute left-3 sm:left-4 3xl:left-5 top-1/2 transform -translate-y-1/2 w-4 h-4 sm:w-5 sm:h-5 3xl:w-6 3xl:h-6 z-10 transition-colors ${status === 'error' ? 'text-red-500' : status === 'success' ? 'text-emerald-500' : 'text-gray-500'}`} />
                    <input
                      id="email-input"
                      type="email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      placeholder={t.hero.emailPlaceholder}
                      disabled={status === 'loading' || status === 'success'}
                      className={`w-full bg-white border-2 sm:border-3 3xl:border-4 rounded-lg sm:rounded-xl 3xl:rounded-2xl px-6 sm:px-8 3xl:px-10 py-3 sm:py-4 3xl:py-5 text-base sm:text-lg 3xl:text-xl text-gray-900 font-black focus:outline-none focus:ring-0 shadow-[2px_2px_0px_0px_rgba(0,0,0,1)] sm:shadow-[3px_3px_0px_0px_rgba(0,0,0,1)] 3xl:shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] relative z-10 transition-all duration-300 ${status === 'error'
                        ? 'border-red-500 bg-red-50'
                        : status === 'success'
                          ? 'border-emerald-500 bg-emerald-50'
                          : 'border-gray-900'
                        } ${status === 'loading' ? 'opacity-70 cursor-not-allowed' : ''}`}
                    />
                  </div>
                  <div className="relative">
                    <button
                      id="claim-button"
                      onClick={handleClaim}
                      disabled={status === 'loading' || status === 'success'}
                      className={`w-full sm:w-auto px-6 sm:px-8 3xl:px-10 py-3 sm:py-4 3xl:py-5 text-base sm:text-lg 3xl:text-xl border-2 sm:border-3 3xl:border-4 border-gray-900 rounded-lg sm:rounded-xl 3xl:rounded-2xl shadow-[2px_2px_0px_0px_rgba(0,0,0,1)] sm:shadow-[3px_3px_0px_0px_rgba(0,0,0,1)] 3xl:shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] active:translate-y-1 active:shadow-none font-black text-gray-900 transition-all duration-500 whitespace-nowrap relative z-10 uppercase tracking-tighter ${status === 'success'
                        ? 'bg-emerald-400 shadow-none translate-y-1 translate-x-1'
                        : status === 'error'
                          ? 'bg-red-400'
                          : status === 'loading'
                            ? 'bg-gray-200 cursor-not-allowed'
                            : 'bg-yellow-400 hover:bg-yellow-300 hover:-translate-y-1 hover:shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] sm:hover:shadow-[6px_6px_0px_0px_rgba(0,0,0,1)] 3xl:hover:shadow-[8px_8px_0px_0px_rgba(0,0,0,1)]'
                        }`}
                    >
                      {status === 'success' ? t.hero.ready : status === 'error' ? t.hero.tryAgain : status === 'loading' ? t.hero.sending : t.hero.ctaButton}
                    </button>
                    {status === 'success' && (
                      <div className="absolute -bottom-6 sm:-bottom-8 right-0 text-[10px] xs:text-xs sm:text-sm 3xl:text-base font-black uppercase text-emerald-600 animate-bounce whitespace-nowrap text-right">
                        {t.hero.vibeCheck}
                      </div>
                    )}
                  </div>
                </div>
              </div>
            </div>

            {/* Right side - Image and Extras */}
            <div className="relative flex-1 flex items-end justify-center pb-0 lg:py-12 lg:pl-10 lg:pr-8 lg:-mr-12 3xl:pl-16 3xl:pr-12 3xl:-mr-16 w-full">
              <div className="absolute -inset-x-10 xs:-inset-x-20 sm:-inset-x-64 inset-y-0 pointer-events-none z-0" style={{ overflow: 'visible' }}>
                {[
                  { text: t.hero.backgroundQuotes.system, opacity: 'opacity-[0.55]', pos: { top: '80%', left: '20%' }, delay: '-2s', duration: '14s', rot: -5, endRot: 10 },
                  { text: t.hero.backgroundQuotes.curiosity, opacity: 'opacity-[0.40]', pos: { top: '85%', left: '40%' }, delay: '-8s', duration: '18s', rot: 15, endRot: -5 },
                  { text: t.hero.backgroundQuotes.skills, opacity: 'opacity-[0.20]', pos: { top: '90%', left: '30%' }, delay: '-14s', duration: '22s', rot: -10, endRot: 5 },
                  { text: t.hero.backgroundQuotes.potential, opacity: 'opacity-[0.55]', pos: { top: '75%', left: '50%' }, delay: '-4s', duration: '16s', rot: 5, endRot: 20 },
                  { text: t.hero.backgroundQuotes.future, opacity: 'opacity-[0.40]', pos: { top: '95%', left: '15%' }, delay: '-10s', duration: '20s', rot: -15, endRot: 10 },
                  { text: t.hero.backgroundQuotes.thinkBigger, opacity: 'opacity-[0.20]', pos: { top: '70%', left: '70%' }, delay: '-5s', duration: '15s', rot: 20, endRot: -10 },
                  { text: t.hero.backgroundQuotes.creativeMinds, opacity: 'opacity-[0.55]', pos: { top: '88%', left: '60%' }, delay: '-12s', duration: '19s', rot: -8, endRot: 12 },
                  { text: t.hero.backgroundQuotes.reachHigher, opacity: 'opacity-[0.40]', pos: { top: '82%', left: '80%' }, delay: '-20s', duration: '25s', rot: 12, endRot: -15 },
                  { text: t.hero.backgroundQuotes.activeLearning, opacity: 'opacity-[0.20]', pos: { top: '78%', left: '55%' }, delay: '-6s', duration: '21s', rot: -20, endRot: 8 },
                  { text: t.hero.backgroundQuotes.futureLeaders, opacity: 'opacity-[0.55]', pos: { top: '75%', left: '95%' }, delay: '-3s', duration: '17s', rot: 10, endRot: -5 },
                  { text: t.hero.backgroundQuotes.innovateNow, opacity: 'opacity-[0.20]', pos: { top: '85%', left: '110%' }, delay: '-15s', duration: '23s', rot: -12, endRot: 15 },
                  { text: t.hero.backgroundQuotes.designLife, opacity: 'opacity-[0.40]', pos: { top: '80%', left: '105%' }, delay: '-7s', duration: '19s', rot: 15, endRot: -8 },
                  { text: t.hero.backgroundQuotes.limitless, opacity: 'opacity-[0.55]', pos: { top: '92%', left: '120%' }, delay: '-1s', duration: '16s', rot: -5, endRot: 10 },
                ].map((quote, i) => (
                  <div
                    key={i}
                    className={`absolute whitespace-nowrap bg-white border-2 border-gray-900 px-2 xs:px-3 sm:px-4 py-1 xs:py-1.5 sm:py-2 rounded-lg sm:rounded-xl font-black text-gray-900 text-[7px] xs:text-[8px] sm:text-[10px] 3xl:text-xs shadow-[2px_2px_0_0_rgba(0,0,0,1)] sm:shadow-[4px_4px_0_0_rgba(0,0,0,1)] ${quote.opacity} animate-float-bg`}
                    style={{
                      top: quote.pos.top,
                      left: quote.pos.left,
                      animationDelay: quote.delay,
                      animationDuration: quote.duration,
                      '--start-rot': `${quote.rot}deg`,
                      '--end-rot': `${quote.endRot}deg`
                    } as React.CSSProperties}
                  >
                    {quote.text}
                  </div>
                ))}
              </div>

              {/* Main image container - Pushed to bottom via flex */}
              <div className="relative w-full max-w-sm xs:max-w-md sm:max-w-lg lg:max-w-4xl 3xl:max-w-6xl z-10 mx-auto">
                <div className="relative z-10">
                  <div className="w-full flex items-center justify-center lg:justify-end">
                    <img
                      src="/das.png"
                      alt="Capybara"
                      className="w-full h-auto block translate-y-12 max-w-[380px] xs:max-w-[420px] sm:max-w-[480px] lg:max-w-[595px] 3xl:max-w-[800px] object-contain lg:-mr-20 3xl:-mr-32"
                    />
                  </div>
                </div>

                {/* Statistics bubbles - Fully responsive */}
                <div
                  className="absolute top-6 xs:top-8 sm:top-10 lg:top-20 3xl:top-24 -left-2 xs:-left-4 sm:-left-8 3xl:-left-12 bg-yellow-400 border-2 border-gray-900 rounded-full px-3 xs:px-4 sm:px-6 3xl:px-8 py-1.5 xs:py-2 sm:py-4 3xl:py-5 shadow-[3px_3px_0px_0px_rgba(0,0,0,1)] sm:shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] 3xl:shadow-[6px_6px_0px_0px_rgba(0,0,0,1)] z-20 hover:scale-105 transition-transform animate-float-subtle"
                  style={{ animationDelay: '0s' }}
                >
                  <p className="text-gray-900 font-bold text-xs sm:text-sm md:text-base 3xl:text-lg">{t.heroStats.freeLessons}</p>
                </div>

                <div
                  className="absolute top-12 xs:top-16 sm:top-20 lg:top-32 3xl:top-40 -right-2 xs:-right-4 sm:-right-40 lg:-right-52 3xl:-right-64 bg-emerald-400 border-2 border-gray-900 rounded-full px-3 xs:px-4 sm:px-6 3xl:px-8 py-1.5 xs:py-2 sm:py-4 3xl:py-5 shadow-[3px_3px_0px_0px_rgba(0,0,0,1)] sm:shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] 3xl:shadow-[6px_6px_0px_0px_rgba(0,0,0,1)] z-20 hover:scale-105 transition-transform animate-float-subtle"
                  style={{ animationDelay: '0.5s', animationDuration: '4s' }}
                >
                  <p className="text-gray-900 font-bold text-xs sm:text-sm md:text-base 3xl:text-lg whitespace-nowrap">{t.heroStats.activeStudents}</p>
                </div>

                <div
                  className="absolute -bottom-2 xs:-bottom-4 sm:bottom-5 3xl:bottom-8 left-2 xs:left-4 sm:left-4 3xl:left-6 bg-cyan-200 border-2 border-gray-900 rounded-lg sm:rounded-xl 3xl:rounded-2xl px-3 xs:px-4 sm:px-6 3xl:px-8 py-1.5 xs:py-2 sm:py-4 3xl:py-5 shadow-[3px_3px_0px_0px_rgba(0,0,0,1)] sm:shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] 3xl:shadow-[6px_6px_0px_0px_rgba(0,0,0,1)] z-20 hover:scale-105 transition-transform animate-float-subtle"
                  style={{ animationDelay: '1s', animationDuration: '3.5s' }}
                >
                  <div className="flex items-center gap-1.5 xs:gap-2 sm:gap-3 3xl:gap-4 mb-1 sm:mb-2">
                    <div className="flex -space-x-1.5 xs:-space-x-2">
                      <div className="w-5 h-5 xs:w-6 xs:h-6 sm:w-8 sm:h-8 3xl:w-10 3xl:h-10 bg-blue-400 rounded-full border-2 border-gray-900"></div>
                      <div className="w-5 h-5 xs:w-6 xs:h-6 sm:w-8 sm:h-8 3xl:w-10 3xl:h-10 bg-purple-400 rounded-full border-2 border-gray-900"></div>
                      <div className="w-5 h-5 xs:w-6 xs:h-6 sm:w-8 sm:h-8 3xl:w-10 3xl:h-10 bg-pink-400 rounded-full border-2 border-gray-900"></div>
                    </div>
                  </div>
                  <p className="text-gray-900 font-bold text-xs sm:text-sm 3xl:text-base">{t.heroStats.worldwideStudents}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Features strip - Bento Design */}
      <div className="bg-white py-12 lg:py-20 relative z-10 border-t-2 sm:border-t-4 border-gray-900 mt-12 lg:-mt-12">
        <div className="container mx-auto px-4 sm:px-6">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8 lg:gap-16 max-w-7xl mx-auto">
            {[
              {
                title: t.features.growingRevenue,
                desc: t.features.growingRevenueDesc,
                icon: Users,
                color: 'bg-emerald-400',
                shadow: 'shadow-[4px_4px_0_0_rgba(16,185,129,1)] sm:shadow-[6px_6px_0_0_rgba(16,185,129,1)]'
              },
              {
                title: t.features.bestInClass,
                desc: t.features.bestInClassDesc,
                icon: Briefcase,
                color: 'bg-blue-400',
                shadow: 'shadow-[4px_4px_0_0_rgba(96,165,250,1)] sm:shadow-[6px_6px_0_0_rgba(96,165,250,1)]'
              },
              {
                title: t.features.competitiveAdvantage,
                desc: t.features.competitiveAdvantageDesc,
                icon: Clock,
                color: 'bg-purple-400',
                shadow: 'shadow-[4px_4px_0_0_rgba(167,139,250,1)] sm:shadow-[6px_6px_0_0_rgba(167,139,250,1)]'
              },
              {
                title: t.features.growthPotential,
                desc: t.features.growthPotentialDesc,
                icon: Rocket,
                color: 'bg-pink-300',
                shadow: 'shadow-[4px_4px_0_0_rgba(244,114,182,1)] sm:shadow-[6px_6px_0_0_rgba(244,114,182,1)]'
              }
            ].map((feature, i) => (
              <div
                key={i}
                className={`relative bg-white border-2 sm:border-4 border-gray-900 p-5 rounded-xl sm:rounded-2xl transition-all duration-300 hover:-translate-y-2 hover:-translate-x-1 ${feature.shadow} hover:shadow-none cursor-default group/card`}
              >
                <div className={`w-10 h-10 sm:w-12 sm:h-12 ${feature.color} border-2 border-gray-900 rounded-lg sm:rounded-xl flex items-center justify-center mb-4 shadow-[3px_3px_0_0_rgba(0,0,0,1)] group-hover/card:rotate-6 transition-transform`}>
                  <feature.icon className="w-5 h-5 sm:w-6 sm:h-6 text-gray-900" strokeWidth={2.5} />
                </div>
                <h3 className="text-sm sm:text-base md:text-lg font-black text-gray-900 mb-2 leading-tight uppercase tracking-tighter italic">
                  {feature.title}
                </h3>
                <p className="text-gray-600 text-xs md:text-sm font-bold leading-relaxed">
                  {feature.desc}
                </p>

                {/* Interactive Decoration */}
                <div className="absolute top-4 right-4 opacity-0 group-hover/card:opacity-100 transition-opacity">
                  <div className="w-1.5 h-1.5 rounded-full bg-gray-900 animate-ping"></div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
      <style>{`
        @keyframes float-subtle {
          0%, 100% { transform: translateY(0) translateX(0) rotate(-2deg); }
          50% { transform: translateY(-15px) translateX(8px) rotate(2deg); }
        }
        .animate-float-subtle {
          animation: float-subtle 10s ease-in-out infinite;
        }
        @keyframes float-bg {
          0% { transform: translateY(0) rotate(var(--start-rot)); opacity: 0; }
          20% { opacity: 1; }
          80% { opacity: 1; }
          100% { transform: translateY(-800px) rotate(var(--end-rot)); opacity: 0; }
        }
        .animate-float-bg {
          animation: float-bg linear infinite;
        }
        @keyframes ripple {
          0% { width: 0; height: 0; opacity: 0.5; border-width: 8px; }
          100% { width: 1500px; height: 1500px; opacity: 0; border-width: 1px; }
        }
        .animate-ripple {
          animation: ripple 6s cubic-bezier(0, 0.2, 0.8, 1) infinite;
        }
        @keyframes dot-pulse {
          0%, 100% { transform: scale(1); opacity: 0.2; }
          50% { transform: scale(1.05); opacity: 0.4; }
        }
        .animate-dot-pulse {
          animation: dot-pulse 4s ease-in-out infinite;
        }
        @keyframes water-wave {
          0% { transform: translate(0, 0) rotate(0deg); }
          25% { transform: translate(-10px, 15px) rotate(1deg); }
          50% { transform: translate(0, 25px) rotate(0deg); }
          75% { transform: translate(10px, 15px) rotate(-1deg); }
          100% { transform: translate(0, 0) rotate(0deg); }
        }
        .animate-water-wave {
          animation: water-wave 8s ease-in-out infinite;
        }
        @keyframes water-wave-slow {
          0% { transform: translate(0, 0) rotate(0deg); }
          50% { transform: translate(15px, -15px) rotate(-1deg); }
          100% { transform: translate(0, 0) rotate(0deg); }
        }
        .animate-water-wave-slow {
          animation: water-wave-slow 12s ease-in-out infinite;
        }
        @keyframes shake {
          0%, 100% { transform: translateX(0); }
          25% { transform: translateX(-8px); }
          75% { transform: translateX(8px); }
        }
        .animate-shake {
          animation: shake 0.2s ease-in-out infinite;
        }
        @keyframes arrowBounce {
          0%, 100% { transform: translate(-50%, -50%) translateX(0); }
          50% { transform: translate(-50%, -50%) translateX(15px); }
        }
      `}</style>
      <MinigamePopup isOpen={isMinigameOpen} onClose={() => setIsMinigameOpen(false)} />
    </section >
  );
}
