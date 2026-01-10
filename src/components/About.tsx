import { Brain, Users, Target, Lightbulb, Rocket, ArrowRight, Minus, Square, X, Files, Search, GitBranch, Code, GraduationCap } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';
import { useNavigate } from 'react-router-dom';
import { useState, useRef, useEffect } from 'react';

export default function About() {
  const { t } = useLanguage();
  const navigate = useNavigate();

  // Interactive States
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const lastPointRef = useRef<{ x: number; y: number } | null>(null);
  const [activePopup, setActivePopup] = useState<string | null>(null);
  const [windowState, setWindowState] = useState<'normal' | 'minimized' | 'maximized'>('normal');
  const [browserPath, setBrowserPath] = useState('/about/more');
  const [isOverlayReady, setIsOverlayReady] = useState(false);

  // Track canvas dimensions to prevent unnecessary redraws
  const canvasDimensionsRef = useRef<{ width: number; height: number }>({ width: 0, height: 0 });
  const isCanvasInitializedRef = useRef(false);
  const currentLanguageRef = useRef<string>('');

  // Canvas Logic
  useEffect(() => {
    const canvas = canvasRef.current;
    const container = containerRef.current;
    if (!canvas || !container) return;

    const setupCanvas = () => {
      const rect = container.getBoundingClientRect();
      if (rect.width === 0 || rect.height === 0) return;

      const newWidth = Math.floor(rect.width);
      const newHeight = Math.floor(rect.height);

      // Check if dimensions actually changed (prevents redraw on scroll)
      const dimensionsChanged =
        canvasDimensionsRef.current.width !== newWidth ||
        canvasDimensionsRef.current.height !== newHeight;

      // Check if language changed
      const languageChanged = currentLanguageRef.current !== t.about.scratchPrompt;

      // If already initialized and nothing changed, don't redraw
      if (isCanvasInitializedRef.current && !dimensionsChanged && !languageChanged) {
        return;
      }

      const ctx = canvas.getContext('2d', { willReadFrequently: true });
      if (!ctx) return;

      // Save current canvas state ONLY if resizing (not language change)
      // Language change should give a fresh overlay
      let imageData: ImageData | null = null;
      if (isCanvasInitializedRef.current && dimensionsChanged && !languageChanged && canvas.width > 0 && canvas.height > 0) {
        try {
          imageData = ctx.getImageData(0, 0, canvas.width, canvas.height);
        } catch (e) {
          console.warn('Could not save canvas state:', e);
        }
      }

      // Update canvas dimensions
      canvas.width = newWidth;
      canvas.height = newHeight;
      canvasDimensionsRef.current = { width: newWidth, height: newHeight };
      currentLanguageRef.current = t.about.scratchPrompt;

      // Fill with purple overlay
      ctx.globalCompositeOperation = 'source-over';
      ctx.fillStyle = 'rgba(167, 139, 250, 0.98)';
      ctx.fillRect(0, 0, canvas.width, canvas.height);

      // Draw "SCRATCH ME" text - responsive size
      const fontSize = Math.min(canvas.width / 18, 50);
      ctx.fillStyle = 'white';
      ctx.font = `900 ${fontSize}px "Outfit", sans-serif`;
      ctx.textAlign = 'center';
      ctx.textBaseline = 'middle';
      ctx.save();
      ctx.shadowColor = 'rgba(0,0,0,0.5)';
      ctx.shadowBlur = 10;
      ctx.fillText(t.about.scratchPrompt, canvas.width / 2, canvas.height / 2);
      ctx.restore();

      // Restore previous scratches if we had saved state
      if (imageData) {
        ctx.globalCompositeOperation = 'destination-out';
        // Scale the old image data to the new canvas size
        const tempCanvas = document.createElement('canvas');
        tempCanvas.width = imageData.width;
        tempCanvas.height = imageData.height;
        const tempCtx = tempCanvas.getContext('2d');
        if (tempCtx) {
          tempCtx.putImageData(imageData, 0, 0);
          ctx.drawImage(tempCanvas, 0, 0, newWidth, newHeight);
        }
      }

      ctx.globalCompositeOperation = 'destination-out';
      ctx.lineCap = 'round';
      ctx.lineJoin = 'round';
      ctx.lineWidth = 100;

      setIsOverlayReady(true);
      canvas.style.backgroundColor = 'transparent';
      isCanvasInitializedRef.current = true;
    };

    // Run immediately and also with a small delay to ensure container dimensions
    setupCanvas();
    const timer = setTimeout(setupCanvas, 50);

    const handleResize = () => {
      // Use requestAnimationFrame to debounce resize events
      requestAnimationFrame(setupCanvas);
    };

    window.addEventListener('resize', handleResize);
    return () => {
      window.removeEventListener('resize', handleResize);
      clearTimeout(timer);
    };
  }, [t.about.scratchPrompt]); // Re-run when language changes

  const handleScratch = (x: number, y: number) => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    const lastPoint = lastPointRef.current;

    ctx.globalCompositeOperation = 'destination-out';
    ctx.lineCap = 'round';
    ctx.lineJoin = 'round';
    // Thinner line on mobile
    ctx.lineWidth = window.innerWidth < 768 ? 50 : 80;

    if (lastPoint) {
      ctx.beginPath();
      ctx.moveTo(lastPoint.x, lastPoint.y);
      ctx.lineTo(x, y);
      ctx.stroke();
    } else {
      ctx.beginPath();
      ctx.arc(x, y, ctx.lineWidth / 2, 0, Math.PI * 2);
      ctx.fill();
    }
    lastPointRef.current = { x, y };
  };

  const handleMouseMove = (e: React.MouseEvent<HTMLCanvasElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    handleScratch(e.clientX - rect.left, e.clientY - rect.top);
  };

  const handleTouchMove = (e: React.TouchEvent<HTMLCanvasElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const touch = e.touches[0];
    handleScratch(touch.clientX - rect.left, touch.clientY - rect.top);
  };

  const services = [
    { id: 'Education', name: t.about.services.education, color: 'bg-yellow-300', icon: Lightbulb },
    { id: 'Learning', name: t.about.services.learning, color: 'bg-blue-300', icon: Rocket },
    { id: 'Courses', name: t.about.services.courses, color: 'bg-emerald-300', icon: GraduationCap },
    { id: 'Programs', name: t.about.services.programs, color: 'bg-purple-300', icon: Code },
    { id: 'More', name: t.about.services.more, color: 'bg-gray-200', icon: ArrowRight },
  ];

  return (
    <div id="about" className="min-h-screen bg-gray-50 pt-24 pb-12">
      {/* 1. Hero Section */}
      <div className="container mx-auto px-4 sm:px-6 mb-10 relative">
        <div className="max-w-4xl">
          <div className="inline-block px-3 py-1 bg-black text-white font-black text-[10px] sm:text-xs tracking-widest uppercase mb-4 transform -rotate-2">
            {t.about.since2022}
          </div>
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-black text-gray-900 leading-[1] sm:leading-[0.9] tracking-tight mb-6 uppercase">
            {t.about.title}
          </h1>
          <p className="text-lg sm:text-xl md:text-2xl text-gray-600 font-bold max-w-2xl leading-relaxed mb-8">
            {t.about.heroSubtitle}
          </p>

          {/* Interactive Popup Buttons */}
          <div className="flex flex-wrap gap-3 sm:gap-4">
            {services.map((service, index) => (
              <button
                key={index}
                onClick={() => {
                  if (service.id === 'Education') setActivePopup('Education');
                  else if (service.id === 'Learning') setActivePopup('Learning');
                  else if (service.id === 'Courses') setActivePopup('Courses');
                  else if (service.id === 'Programs') setActivePopup('Programs');
                  else if (service.id === 'More') setActivePopup('More');
                  setWindowState('normal');
                }}
                className={`group flex items-center gap-1.5 px-3 sm:px-4 py-2 sm:py-2.5 rounded-lg border-2 border-gray-900 font-black text-sm sm:text-base shadow-[2px_2px_0px_0px_rgba(0,0,0,1)] hover:-translate-y-1 hover:shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] active:translate-y-0 active:shadow-[1px_1px_0px_0px_rgba(0,0,0,1)] transition-all bg-white whitespace-nowrap`}
              >
                <div className={`w-5 h-5 sm:w-6 sm:h-6 ${service.color} rounded-md flex items-center justify-center border-2 border-gray-900 group-hover:scale-110 transition-transform`}>
                  <service.icon className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-gray-900" />
                </div>
                {service.name}
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* 2. Mission Section (Scratch-Off) */}
      <div className="container mx-auto px-4 sm:px-6 mb-12 sm:mb-20" id="mission-scratch">
        <div className="bg-white border-4 border-gray-900 rounded-[1rem] sm:rounded-[2rem] shadow-[6px_6px_0px_0px_rgba(0,0,0,1)] sm:shadow-[12px_12px_0px_0px_rgba(0,0,0,1)] relative overflow-hidden" ref={containerRef}>

          {/* Canvas Overlay */}
          <canvas
            ref={canvasRef}
            className="absolute inset-0 z-20 touch-none eraser-cursor-zone transition-opacity duration-300"
            style={{ backgroundColor: 'rgba(167, 139, 250, 0.98)' }}
            onMouseMove={handleMouseMove}
            onTouchMove={handleTouchMove}
            onMouseLeave={() => { lastPointRef.current = null; }}
            onMouseEnter={() => { lastPointRef.current = null; }}
            onTouchEnd={() => { lastPointRef.current = null; }}
          />

          <div className={`p-6 md:p-10 relative z-10 pointer-events-none select-none md:pointer-events-auto md:select-text transition-opacity duration-300 ${isOverlayReady ? 'opacity-100' : 'opacity-0'}`}>
            <div className="absolute top-0 right-0 w-48 h-48 bg-yellow-300 rounded-full blur-3xl opacity-20 -translate-y-1/2 translate-x-1/2"></div>

            <div className="relative">
              <div className="max-w-3xl mb-10">
                <h2 className="text-3xl md:text-5xl font-black text-gray-900 mb-6">{t.about.missionTitle}</h2>
                <p className="text-lg md:text-xl text-gray-700 leading-relaxed font-medium">
                  {t.about.missionDescription}
                </p>
              </div>

              <div className="grid md:grid-cols-3 gap-8">
                {[
                  {
                    icon: Brain,
                    titleKey: 'innovation',
                    descKey: 'innovationDesc',
                    color: 'bg-purple-200',
                    cardBg: 'bg-purple-50',
                    shadow: 'shadow-[8px_8px_0px_0px_rgba(167,139,250,0.5)]',
                    hoverShadow: 'hover:shadow-[12px_12px_0px_0px_rgba(167,139,250,1)]'
                  },
                  {
                    icon: Users,
                    titleKey: 'community',
                    descKey: 'communityDesc',
                    color: 'bg-blue-200',
                    cardBg: 'bg-blue-50',
                    shadow: 'shadow-[8px_8px_0px_0px_rgba(96,165,250,0.5)]',
                    hoverShadow: 'hover:shadow-[12px_12px_0px_0px_rgba(96,165,250,1)]'
                  },
                  {
                    icon: Target,
                    titleKey: 'excellence',
                    descKey: 'excellenceDesc',
                    color: 'bg-emerald-200',
                    cardBg: 'bg-emerald-50',
                    shadow: 'shadow-[8px_8px_0px_0px_rgba(52,211,153,0.5)]',
                    hoverShadow: 'hover:shadow-[12px_12px_0px_0px_rgba(52,211,153,1)]'
                  },
                ].map((value, index) => {
                  const Icon = value.icon;
                  const title = t.about[value.titleKey as keyof typeof t.about] as string;
                  const desc = t.about[value.descKey as keyof typeof t.about] as string;

                  return (
                    <div
                      key={index}
                      className={`relative ${value.cardBg} rounded-2xl p-6 border-3 border-gray-900 transition-all duration-300 group ${value.shadow} ${value.hoverShadow} hover:-translate-y-2 hover:-translate-x-1`}
                    >
                      <div className={`w-12 h-12 ${value.color} rounded-xl flex items-center justify-center mb-4 border-3 border-gray-900 shadow-[3px_3px_0px_0px_rgba(0,0,0,1)] group-hover:rotate-6 transition-transform`}>
                        <Icon className="w-6 h-6 text-gray-900" strokeWidth={2.5} />
                      </div>
                      <h3 className="text-lg font-black text-gray-900 mb-3 uppercase italic tracking-tight">{title}</h3>
                      <p className="text-gray-700 leading-relaxed font-bold text-xs">
                        {desc}
                      </p>

                      {/* Geometric accent */}
                      <div className="absolute top-6 right-6 opacity-20 group-hover:opacity-100 transition-opacity">
                        <div className="w-2 h-2 rounded-full bg-gray-900 animate-ping" />
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* 3. The Ecosystem (Static Cards - Brief Info) */}
      <div className="container mx-auto px-4 sm:px-6 mb-12 sm:mb-20">
        <div className="flex flex-col sm:flex-row items-start sm:items-end justify-between mb-6 sm:mb-8 gap-4">
          <h2 className="text-3xl sm:text-4xl font-black text-gray-900 uppercase tracking-tighter italic">{t.about.ecosystem.title}</h2>
          <div className="w-16 sm:w-24 h-2 bg-gray-900 rounded-full"></div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6 md:gap-8">
          {/* Education Pillar - Brief */}
          <div className="bg-white border-4 border-gray-900 rounded-2xl p-5 sm:p-8 shadow-[4px_4px_0px_0px_#FCD34D] sm:shadow-[6px_6px_0px_0px_#FCD34D] hover:shadow-[8px_8px_0px_0px_#FCD34D] transition-all hover:-translate-y-1 group cursor-pointer" onClick={() => setActivePopup('Education')}>
            <div className="flex justify-between items-start mb-4">
              <div className="w-10 h-10 sm:w-14 sm:h-14 bg-yellow-300 rounded-lg sm:rounded-xl border-2 sm:border-3 border-gray-900 flex items-center justify-center shadow-[3px_3px_0px_0px_rgba(0,0,0,1)] group-hover:scale-110 transition-transform">
                <Lightbulb className="w-5 h-5 sm:w-7 sm:h-7 text-black" />
              </div>
              <ArrowRight className="w-5 h-5 sm:w-7 sm:h-7 text-gray-300 group-hover:text-gray-900 -rotate-45 group-hover:rotate-0 transition-all font-black" />
            </div>
            <h3 className="text-xl sm:text-2xl font-black text-gray-900 mb-2 uppercase italic">{t.about.ecosystem.philosophy}</h3>
            <p className="text-base sm:text-lg text-gray-600 font-bold mb-2">"{t.about.ecosystem.philosophyQuote}"</p>
            <p className="text-gray-600 leading-relaxed font-bold text-xs sm:text-sm">
              {t.about.ecosystem.philosophyDesc}
            </p>
          </div>

          {/* Learning Pillar - Brief */}
          <div className="bg-white border-4 border-gray-900 rounded-2xl p-5 sm:p-8 shadow-[4px_4px_0px_0px_#60A5FA] sm:shadow-[6px_6px_0px_0px_#60A5FA] hover:shadow-[8px_8px_0px_0px_#60A5FA] transition-all hover:-translate-y-1 group cursor-pointer" onClick={() => setActivePopup('Learning')}>
            <div className="flex justify-between items-start mb-4">
              <div className="w-10 h-10 sm:w-14 sm:h-14 bg-blue-400 rounded-lg sm:rounded-xl border-2 sm:border-3 border-gray-900 flex items-center justify-center shadow-[3px_3px_0px_0px_rgba(0,0,0,1)] group-hover:scale-110 transition-transform">
                <Rocket className="w-5 h-5 sm:w-7 sm:h-7 text-white" />
              </div>
              <ArrowRight className="w-5 h-5 sm:w-7 sm:h-7 text-gray-300 group-hover:text-gray-900 -rotate-45 group-hover:rotate-0 transition-all font-black" />
            </div>
            <h3 className="text-xl sm:text-2xl font-black text-gray-900 mb-2 uppercase italic">{t.about.ecosystem.methodology}</h3>
            <p className="text-base sm:text-lg text-gray-600 font-bold mb-2">"{t.about.ecosystem.methodologyQuote}"</p>
            <p className="text-gray-600 leading-relaxed font-bold text-xs sm:text-sm">
              {t.about.ecosystem.methodologyDesc}
            </p>
          </div>

          {/* Courses Pillar - Brief */}
          <div className="bg-white border-4 border-gray-900 rounded-2xl p-5 sm:p-8 shadow-[4px_4px_0px_0px_#34D399] sm:shadow-[6px_6px_0px_0px_#34D399] hover:shadow-[8px_8px_0px_0px_#34D399] transition-all hover:-translate-y-1 group cursor-pointer" onClick={() => setActivePopup('Courses')}>
            <div className="flex justify-between items-start mb-4">
              <div className="w-10 h-10 sm:w-14 sm:h-14 bg-emerald-400 rounded-lg sm:rounded-xl border-2 sm:border-3 border-gray-900 flex items-center justify-center shadow-[3px_3px_0px_0px_rgba(0,0,0,1)] group-hover:scale-110 transition-transform">
                <GraduationCap className="w-5 h-5 sm:w-7 sm:h-7 text-white" />
              </div>
              <ArrowRight className="w-5 h-5 sm:w-7 sm:h-7 text-gray-300 group-hover:text-gray-900 -rotate-45 group-hover:rotate-0 transition-all font-black" />
            </div>
            <h3 className="text-xl sm:text-2xl font-black text-gray-900 mb-2 uppercase italic">{t.about.ecosystem.structure}</h3>
            <p className="text-base sm:text-lg text-gray-600 font-bold mb-2">"{t.about.ecosystem.structureQuote}"</p>
            <p className="text-gray-600 leading-relaxed font-bold text-xs sm:text-sm">
              {t.about.ecosystem.structureDesc}
            </p>
          </div>

          {/* Programs Pillar - Brief */}
          <div className="bg-white border-4 border-gray-900 rounded-2xl p-5 sm:p-8 shadow-[4px_4px_0px_0px_#C084FC] sm:shadow-[6px_6px_0px_0px_#C084FC] hover:shadow-[8px_8px_0px_0px_#C084FC] transition-all hover:-translate-y-1 group cursor-pointer" onClick={() => setActivePopup('Programs')}>
            <div className="flex justify-between items-start mb-4">
              <div className="w-10 h-10 sm:w-14 sm:h-14 bg-purple-400 rounded-lg sm:rounded-xl border-2 sm:border-3 border-gray-900 flex items-center justify-center shadow-[3px_3px_0px_0px_rgba(0,0,0,1)] group-hover:scale-110 transition-transform">
                <Code className="w-5 h-5 sm:w-7 sm:h-7 text-white" />
              </div>
              <ArrowRight className="w-5 h-5 sm:w-7 sm:h-7 text-gray-300 group-hover:text-gray-900 -rotate-45 group-hover:rotate-0 transition-all font-black" />
            </div>
            <h3 className="text-xl sm:text-2xl font-black text-gray-900 mb-2 uppercase italic">{t.about.ecosystem.impact}</h3>
            <p className="text-base sm:text-lg text-gray-600 font-bold mb-2">"{t.about.ecosystem.impactQuote}"</p>
            <p className="text-gray-600 leading-relaxed font-bold text-xs sm:text-sm">
              {t.about.ecosystem.impactDesc}
            </p>
          </div>
        </div>
      </div>

      {/* 4. Statistics */}
      <div className="container mx-auto px-4 sm:px-6 mb-12 sm:mb-20">
        <div className="bg-gray-900 rounded-[1.5rem] p-6 sm:p-8 md:p-12 text-white shadow-[6px_6px_0px_0px_#e5e7eb] sm:shadow-[10px_10px_0px_0px_#e5e7eb] relative overflow-hidden">
          <div className="absolute top-0 right-0 w-48 sm:w-64 h-48 sm:h-64 bg-gray-800 rounded-full blur-3xl opacity-50 translate-x-1/2 -translate-y-1/2"></div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8 relative z-10 text-center md:text-left">
            {[
              { number: "500+", label: t.about.activeStudents },
              { number: "100+", label: t.about.freeLessons },
              { number: "1000+", label: t.about.worldwideStudents }
            ].map((stat, i) => (
              <div key={i} className="border-b-4 md:border-b-0 md:border-l-4 border-gray-700 pb-6 md:pb-0 md:pl-8 last:border-b-0">
                <div className="text-3xl sm:text-4xl md:text-5xl font-black mb-2 text-transparent bg-clip-text bg-gradient-to-r from-white to-gray-400">
                  {stat.number}
                </div>
                <div className="text-sm sm:text-base font-black text-gray-400 uppercase tracking-widest">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* 5. Who It's For */}
      <div className="container mx-auto px-4 sm:px-6 mb-12 sm:mb-16">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8 items-center">
          <div>
            <h2 className="text-3xl sm:text-4xl font-black text-gray-900 mb-6 uppercase tracking-tighter italic">{t.about.who.title}</h2>
            <div className="space-y-4 sm:space-y-6">
              <div className="bg-white border-2 sm:border-3 border-gray-900 rounded-xl p-5 sm:p-6 shadow-[4px_4px_0px_0px_#4ade80]">
                <h3 className="text-lg sm:text-xl font-black text-gray-900 mb-2 uppercase tracking-tight">{t.about.who.students}</h3>
                <p className="text-gray-700 font-bold leading-relaxed text-xs sm:text-sm">
                  {t.about.who.studentsDesc}
                </p>
              </div>
            </div>
          </div>
          <div className="bg-white border-2 sm:border-3 border-gray-900 rounded-xl p-5 sm:p-6 shadow-[4px_4px_0px_0px_#fb7185]">
            <h3 className="text-lg sm:text-xl font-black text-gray-900 mb-2 uppercase tracking-tight">{t.about.who.parents}</h3>
            <p className="text-gray-700 font-bold leading-relaxed text-xs sm:text-sm">
              {t.about.who.parentsDesc}
            </p>
          </div>
        </div>
      </div>

      {/* 6. CTA */}
      <div className="container mx-auto px-4 sm:px-6 text-center">
        <button
          onClick={() => navigate('/process')}
          className="bg-gray-900 text-white text-lg sm:text-xl font-black px-6 sm:px-10 py-4 sm:py-5 rounded-xl shadow-[4px_4px_0px_0px_#3B82F6] sm:shadow-[6px_6px_0px_0px_#3B82F6] hover:-translate-y-2 hover:shadow-[8px_8px_0px_0px_#3B82F6] transition-all active:translate-y-0 active:shadow-[2px_2px_0px_0px_#3B82F6] flex items-center gap-3 mx-auto uppercase tracking-tighter italic"
        >
          {t.about.cta} <ArrowRight className="w-5 h-5 sm:w-6 sm:h-6" />
        </button>
      </div>

      {/* --- FULL POPUPS RESTORED --- */}

      {/* MacBook Style Popup (Education) */}
      {activePopup === 'Education' && (
        <div
          className={`fixed inset-0 z-50 flex items-center justify-center bg-black/50 backdrop-blur-sm transition-all duration-300 ${windowState === 'maximized' ? 'p-0' : 'p-4'}`}
          onClick={() => setActivePopup(null)}
        >
          <div
            className={`bg-white shadow-2xl overflow-hidden animate-in zoom-in-95 duration-200 transition-all ${windowState === 'maximized' ? 'w-full h-full rounded-none' : windowState === 'minimized' ? 'w-full max-w-sm rounded-xl' : 'w-full max-w-2xl rounded-xl'}`}
            onClick={e => e.stopPropagation()}
          >
            <div className="bg-gray-100 px-4 py-3 border-b border-gray-200 flex items-center gap-2">
              <div className="flex gap-2">
                <button onClick={() => setActivePopup(null)} className="w-3 h-3 rounded-full bg-red-500 hover:bg-red-600 transition-colors" />
                <button onClick={() => setWindowState(windowState === 'minimized' ? 'normal' : 'minimized')} className="w-3 h-3 rounded-full bg-yellow-400 hover:bg-yellow-500 transition-colors" />
                <button onClick={() => setWindowState(windowState === 'maximized' ? 'normal' : 'maximized')} className="w-3 h-3 rounded-full bg-green-500 hover:bg-green-600 transition-colors" />
              </div>
              <div className="flex-1 text-center text-sm font-medium text-gray-500 font-mono" style={{ fontFamily: "'Space Grotesk', sans-serif" }}>education.txt</div>
            </div>

            <div className={`p-8 md:p-12 transition-all duration-300 ${windowState === 'minimized' ? 'opacity-90 scale-95' : 'opacity-100'}`}>
              <h3 className={`font-black text-gray-900 mb-6 leading-tight transition-all duration-300 ${windowState === 'minimized' ? 'text-xl' : 'text-3xl md:text-4xl'}`}>
                {t.about.popups.education.title}
              </h3>

              <p className={`text-gray-700 mb-8 leading-relaxed font-medium transition-all duration-300 ${windowState === 'minimized' ? 'text-sm' : 'text-xl'}`}>
                {t.about.popups.education.desc1}
                <br />
                {t.about.popups.education.desc2}
              </p>

              <div className={`bg-gray-50 rounded-2xl border-2 border-dashed border-gray-300 transition-all duration-300 ${windowState === 'minimized' ? 'p-4' : 'p-8'}`}>
                <h4 className={`font-black text-gray-900 mb-6 uppercase tracking-wider transition-all duration-300 ${windowState === 'minimized' ? 'text-xs mb-3' : 'text-base'}`}>
                  {t.about.popups.education.diffTitle}
                </h4>
                <ul className="space-y-4">
                  {[
                    t.about.popups.education.diff1,
                    t.about.popups.education.diff2,
                    t.about.popups.education.diff3
                  ].map((item, i) => (
                    <li key={i} className={`flex items-center gap-4 font-bold text-gray-800 transition-all duration-300 ${windowState === 'minimized' ? 'text-sm gap-2' : 'text-lg'}`}>
                      <span className="w-3 h-3 bg-purple-500 rounded-full" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Windows 95 Style Popup for Learning */}
      {activePopup === 'Learning' && (
        <div
          className={`fixed inset-0 z-50 flex items-center justify-center bg-black/50 backdrop-blur-sm transition-all duration-300 ${windowState === 'maximized' ? 'p-0' : 'p-4'}`}
          onClick={() => setActivePopup(null)}
        >
          <div
            className={`bg-[#c0c0c0] border-2 shadow-2xl overflow-hidden transition-all duration-500 ease-in-out ${windowState === 'maximized' ? 'w-full h-full border-none' : windowState === 'minimized' ? 'w-full max-w-sm border-t-white border-l-white border-b-black border-r-black' : 'w-full max-w-2xl border-t-white border-l-white border-b-black border-r-black'}`}
            style={{
              boxShadow: windowState !== 'maximized' ? '8px 8px 0px 0px rgba(0,0,0,0.5)' : 'none',
              fontFamily: "'Space Grotesk', sans-serif"
            }}
            onClick={e => e.stopPropagation()}
          >
            <div className="bg-[#000080] px-2 py-1 flex items-center justify-between mx-1 mt-1">
              <div className="flex items-center gap-2">
                <span className="text-white font-bold text-sm tracking-wide pl-1">{t.about.popups.learning.title}</span>
              </div>
              <div className="flex gap-1">
                <button onClick={() => setWindowState(windowState === 'minimized' ? 'normal' : 'minimized')} className="w-6 h-5 bg-[#c0c0c0] border-t-white border-l-white border-b-black border-r-black border text-xs font-bold leading-none flex items-center justify-center">_</button>
                <button onClick={() => setWindowState(windowState === 'maximized' ? 'normal' : 'maximized')} className="w-6 h-5 bg-[#c0c0c0] border-t-white border-l-white border-b-black border-r-black border text-xs font-bold leading-none flex items-center justify-center">□</button>
                <div className="relative">
                  <button onClick={() => setActivePopup(null)} className="w-6 h-5 bg-[#c0c0c0] border-t-white border-l-white border-b-black border-r-black border text-xs font-bold leading-none flex items-center justify-center ml-1">X</button>
                  <div className="absolute -inset-2 sm:-inset-4 cursor-pointer z-10" onClick={() => setActivePopup(null)}></div>
                </div>
              </div>
            </div>

            <div className={`p-6 md:p-8 text-black transition-all duration-300 ${windowState === 'minimized' ? 'text-sm' : ''}`}>
              <p className={`mb-6 leading-relaxed font-medium ${windowState === 'minimized' ? 'text-xs' : 'text-lg'}`}>
                {t.about.popups.learning.desc1}
                <br />
                {t.about.popups.learning.desc2}
              </p>

              <div className="bg-white border-2 border-l-black border-t-black border-r-white border-b-white p-6 md:p-8">
                <h4 className={`font-bold uppercase mb-4 ${windowState === 'minimized' ? 'text-xs' : 'text-sm'}`}>{t.about.popups.learning.insideTitle}</h4>
                <ul className="space-y-3">
                  {[t.about.popups.learning.inside1, t.about.popups.learning.inside2, t.about.popups.learning.inside3, t.about.popups.learning.inside4].map((item, i) => (
                    <li key={i} className="flex items-center gap-3">
                      <span className="w-2 h-2 bg-black" />
                      <span className={`font-bold ${windowState === 'minimized' ? 'text-xs' : 'text-lg'}`}>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* iPad Style Popup for Courses */}
      {activePopup === 'Courses' && (
        <div
          className={`fixed inset-0 z-50 flex items-center justify-center bg-black/30 backdrop-blur-sm transition-all duration-300 ${windowState === 'maximized' ? 'p-0' : 'p-6'}`}
          onClick={() => setActivePopup(null)}
        >
          <div
            className={`bg-white/95 backdrop-blur-xl shadow-2xl overflow-hidden transition-all duration-500 ease-[cubic-bezier(0.32,0.72,0,1)] ${windowState === 'maximized' ? 'w-full h-full rounded-none' : windowState === 'minimized' ? 'w-full max-w-sm rounded-3xl scale-95 origin-bottom-right' : 'w-full max-w-2xl rounded-3xl'}`}
            style={{ boxShadow: windowState !== 'maximized' ? '0 25px 50px -12px rgba(0, 0, 0, 0.25)' : 'none' }}
            onClick={e => e.stopPropagation()}
          >
            <div className="bg-gray-50/50 px-6 py-4 flex items-center justify-between border-b border-gray-100 relative">
              <div className="relative">
                <button onClick={() => setActivePopup(null)} className="text-blue-500 font-medium text-lg hover:opacity-70 transition-opacity">Done</button>
                <div className="absolute -inset-4 cursor-pointer z-10" onClick={() => setActivePopup(null)}></div>
              </div>
              <div className="w-12 h-1.5 bg-gray-300 rounded-full absolute left-1/2 -translate-x-1/2 top-1/2 -translate-y-1/2"></div>
              <div className="flex gap-4">
                <button onClick={() => setWindowState(windowState === 'minimized' ? 'normal' : 'minimized')} className="p-2 text-gray-400">_</button>
                <button onClick={() => setWindowState(windowState === 'maximized' ? 'normal' : 'maximized')} className="p-2 text-gray-400">□</button>
              </div>
            </div>

            <div className={`p-8 md:p-10 overflow-y-auto max-h-[85vh] ${windowState === 'minimized' ? 'text-sm' : ''}`}>
              <div className="flex flex-col items-center text-center mb-8">
                <div className="w-16 h-16 bg-blue-500 rounded-2xl mb-4 shadow-lg flex items-center justify-center text-white text-3xl">🎓</div>
                <h3 className={`font-bold text-gray-900 leading-tight mb-3 ${windowState === 'minimized' ? 'text-xl' : 'text-3xl'}`}>{t.about.popups.courses.title}</h3>
                <p className={`text-gray-500 leading-relaxed max-w-xl mx-auto ${windowState === 'minimized' ? 'text-xs line-clamp-2' : 'text-lg'}`}>
                  {t.about.popups.courses.desc1}
                  <br className="hidden md:block" />
                  {t.about.popups.courses.desc2}
                </p>
              </div>

              <div className="space-y-4">
                <h4 className="text-gray-400 font-semibold uppercase tracking-wider text-xs ml-1">{t.about.popups.courses.ageGroups}</h4>
                <div className="space-y-4">
                  {[
                    { range: "8-12", title: t.about.popups.courses.group1, color: "bg-orange-100 text-orange-600" },
                    { range: "13-16", title: t.about.popups.courses.group2, color: "bg-blue-100 text-blue-600" },
                    { range: "17-19", title: t.about.popups.courses.group3, color: "bg-purple-100 text-purple-600" }
                  ].map((group, i) => (
                    <div key={i} className={`flex items-center p-4 rounded-2xl bg-gray-50 hover:bg-white border border-gray-100 hover:border-gray-200 hover:shadow-md transition-all duration-300 group`}>
                      <span className={`px-3 py-1 rounded-full text-sm font-bold mr-4 ${group.color}`}>{group.range}</span>
                      <span className={`font-medium text-gray-900 ${windowState === 'minimized' ? 'text-xs' : 'text-lg'}`}>{group.title}</span>
                      <div className="ml-auto text-gray-300 group-hover:text-gray-400"><ArrowRight className="w-5 h-5" /></div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Terminal Popup for Programs */}
      {activePopup === 'Programs' && (
        <div
          className={`fixed inset-0 z-50 flex items-center justify-center bg-black/50 backdrop-blur-sm transition-all duration-300 ${windowState === 'maximized' ? 'p-0' : 'p-4'}`}
          onClick={() => setActivePopup(null)}
        >
          <div
            className={`bg-[#1e1e1e] shadow-2xl overflow-hidden transition-all duration-500 ease-in-out text-gray-300 ${windowState === 'maximized' ? 'w-full h-full rounded-none' : windowState === 'minimized' ? 'w-full max-w-md rounded-lg border border-[#333]' : 'w-full max-w-3xl rounded-lg border border-[#333]'}`}
            style={{
              boxShadow: windowState !== 'maximized' ? '0 20px 50px rgba(0,0,0,0.5)' : 'none',
              fontFamily: "'Space Grotesk', sans-serif"
            }}
            onClick={e => e.stopPropagation()}
          >
            <div className="bg-[#2d2d2d] px-4 py-2 flex items-center justify-between select-none">
              <span className="text-sm text-gray-400">programs.tsx - newmindr</span>
              <div className="flex gap-2">
                <button onClick={() => setWindowState(windowState === 'minimized' ? 'normal' : 'minimized')} className="hover:bg-[#444] p-1 rounded"><Minus className="w-4 h-4" /></button>
                <button onClick={() => setWindowState(windowState === 'maximized' ? 'normal' : 'maximized')} className="hover:bg-[#444] p-1 rounded"><Square className="w-3 h-3" /></button>
                <div className="relative">
                  <button onClick={() => setActivePopup(null)} className="hover:bg-red-500 hover:text-white p-1 rounded"><X className="w-4 h-4" /></button>
                  <div className="absolute -inset-3 cursor-pointer z-10" onClick={() => setActivePopup(null)}></div>
                </div>
              </div>
            </div>

            <div className="flex h-full">
              <div className={`w-12 bg-[#333333] flex flex-col items-center py-4 gap-4 border-r border-[#252526] ${windowState === 'minimized' ? 'hidden' : 'flex'}`}>
                <Files className="w-6 h-6 text-gray-400" />
                <Search className="w-6 h-6 text-gray-500" />
                <GitBranch className="w-6 h-6 text-gray-500" />
              </div>

              <div className="flex-1 flex flex-col min-h-[400px]">
                <div className="bg-[#1e1e1e] flex text-sm overflow-x-auto border-b border-[#252526]">
                  <div className="bg-[#1e1e1e] text-white px-4 py-2 border-t-2 border-blue-500 flex items-center gap-2">
                    <span className="text-yellow-400">TS</span> programs.tsx
                  </div>
                </div>

                <div className="p-4 overflow-y-auto font-mono text-sm leading-relaxed cursor-text md:text-base">
                  {[
                    { line: 1, content: <span className="text-green-600">{t.about.popups.programs.comment}</span> },
                    { line: 2, content: <span>&nbsp;</span> },
                    { line: 3, content: <span><span className="text-purple-400">const</span> <span className="text-blue-400">programs</span> = <span className="text-yellow-400">{'{'}</span></span> },
                    { line: 4, content: <span className="pl-4"><span className="text-blue-300">description</span>: <span className="text-orange-300">"{t.about.popups.programs.desc}"</span>,</span> },
                    { line: 5, content: <span>&nbsp;</span> },
                    { line: 6, content: <span className="pl-4"><span className="text-blue-300">includes</span>: <span className="text-yellow-400">{'['}</span></span> },
                    { line: 7, content: <span className="pl-8 text-orange-300">"{t.about.popups.programs.item1}",</span> },
                    { line: 8, content: <span className="pl-8 text-orange-300">"{t.about.popups.programs.item2}",</span> },
                    { line: 9, content: <span className="pl-8 text-orange-300">"{t.about.popups.programs.item3}"</span> },
                    { line: 10, content: <span className="pl-4 text-yellow-400">{']'}</span> },
                    { line: 11, content: <span className="text-yellow-400">{'}'}</span> },
                    { line: 12, content: <span>&nbsp;</span> },
                    { line: 13, content: <span><span className="text-purple-400">export</span> <span className="text-purple-400">default</span> <span className="text-blue-400">programs</span>;</span> },
                    { line: 14, content: <span className="animate-pulse">|</span> }
                  ].map((l, i) => (
                    <div key={i} className="flex hover:bg-[#2d2d2d]">
                      <span className="w-8 text-right text-gray-600 mr-4 select-none text-xs leading-6">{l.line}</span>
                      <span className="leading-6">{l.content}</span>
                    </div>
                  ))}
                </div>

                <div className="mt-auto bg-[#007acc] text-white text-xs px-2 py-1 flex justify-between select-none">
                  <div className="flex gap-4"><span>main*</span><span>0 errors</span></div>
                  <div className="flex gap-4"><span>Ln 14, Col 1</span><span>TypeScript React</span></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Browser Popup for & more */}
      {activePopup === 'More' && (
        <div
          className={`fixed inset-0 z-50 flex items-center justify-center bg-black/50 backdrop-blur-sm transition-all duration-300 ${windowState === 'maximized' ? 'p-0' : 'p-4'}`}
          onClick={() => setActivePopup(null)}
        >
          <div
            className={`bg-[#c0c0c0] border-2 shadow-2xl overflow-hidden transition-all duration-500 ease-in-out font-sans ${windowState === 'maximized' ? 'w-full h-full border-none' : windowState === 'minimized' ? 'w-full max-w-sm border-t-white border-l-white border-b-black border-r-black' : 'w-full max-w-3xl border-t-white border-l-white border-b-black border-r-black'}`}
            style={{ boxShadow: windowState !== 'maximized' ? '10px 10px 0px 0px rgba(0,0,0,0.5)' : 'none' }}
            onClick={e => e.stopPropagation()}
          >
            <div className="bg-[#c0c0c0] px-2 py-1 flex items-center justify-between mx-1 mt-1">
              <span className="text-white font-bold text-sm tracking-wide pl-1">NetScape Navigator - [{browserPath === '/about/more' ? t.about.popups.more.title : browserPath}]</span>
              <div className="flex gap-1">
                <button onClick={() => setWindowState(windowState === 'minimized' ? 'normal' : 'minimized')} className="w-5 h-5 bg-[#c0c0c0] border border-t-white border-l-white border-b-black border-r-black text-[10px] font-bold">_</button>
                <button onClick={() => setWindowState(windowState === 'maximized' ? 'normal' : 'maximized')} className="w-5 h-5 bg-[#c0c0c0] border border-t-white border-l-white border-b-black border-r-black text-[10px] font-bold">□</button>
                <button onClick={() => setActivePopup(null)} className="w-5 h-5 bg-[#c0c0c0] border border-t-white border-l-white border-b-black border-r-black text-[10px] font-bold">X</button>
              </div>
            </div>

            <div className="bg-[#c0c0c0] px-2 py-0.5 text-black text-xs border-b border-gray-400 flex gap-4 select-none">
              <span><u>F</u>ile</span><span><u>E</u>dit</span><span><u>V</u>iew</span><span><u>G</u>o</span><span><u>B</u>ookmarks</span><span><u>O</u>ptions</span>
            </div>

            <div className="bg-[#c0c0c0] p-1 border-b border-gray-400 flex items-center gap-2">
              <div className="flex gap-1">
                {[{ label: "Back", action: () => setBrowserPath('/about/more') }, { label: "Home", action: () => setBrowserPath('/about/more') }].map((btn, i) => (
                  <button key={i} onClick={btn.action} className="border-2 border-t-white border-l-white border-b-black border-r-black p-1 min-w-[50px] text-[10px] bg-gray-200 active:border-inset">{btn.label}</button>
                ))}
              </div>
              <div className="flex-1 flex justify-end px-2"><div className="w-8 h-8 bg-black animate-pulse flex items-center justify-center"><span className="text-white font-bold text-xs">N</span></div></div>
            </div>

            <div className="bg-[#c0c0c0] p-1 flex items-center gap-2 border-b border-gray-400 font-mono text-sm">
              <span>{t.about.popups.more.location}:</span>
              <div className="flex-1 bg-white border border-gray-500 px-2 py-0.5 text-black">http://www.newmindr.com{browserPath}</div>
            </div>

            <div className={`bg-white text-black p-6 md:p-8 font-serif h-[400px] overflow-y-auto border-2 border-l-black border-t-black border-r-white border-b-white mx-1 mb-1`} id="browser-content">
              {browserPath === '/about/more' && (
                <>
                  <h1 className="text-3xl font-black mb-6 border-b-2 border-gray-300 pb-2">{t.about.popups.more.title}</h1>
                  <p className="mb-6 leading-relaxed font-bold">{t.about.popups.more.founded}</p>
                  <div className="bg-[#ffffcc] border border-gray-300 p-4 mb-6">
                    <p className="font-bold mb-2">{t.about.popups.more.includes}</p>
                    <ul className="list-disc pl-6 space-y-1">
                      <li><button onClick={() => setBrowserPath('/about/mission')} className="text-blue-700 underline hover:text-red-600">{t.about.popups.more.missionValues}</button></li>
                      <li><button onClick={() => setBrowserPath('/about/who')} className="text-blue-700 underline hover:text-red-600">{t.about.popups.more.whoItsFor}</button></li>
                      <li><button onClick={() => setBrowserPath('/about/design')} className="text-blue-700 underline hover:text-red-600">{t.about.popups.more.designPhil}</button></li>
                    </ul>
                  </div>
                </>
              )}
              {browserPath === '/about/mission' && (
                <>
                  <h1 className="text-3xl font-bold mb-6 border-b-2 border-gray-300 pb-2">{t.about.popups.more.missionValuesTitle}</h1>
                  <div className="bg-blue-50 p-4 border border-blue-200 mb-4">
                    <p className="font-bold text-lg mb-2">{t.about.popups.more.ourMissionLabel}</p>
                    <p>{t.about.popups.more.missionShortDesc}</p>
                  </div>
                </>
              )}
              {browserPath === '/about/design' && (
                <>
                  <h1 className="text-3xl font-bold mb-6 border-b-2 border-gray-300 pb-2">{t.about.popups.more.designPhil}</h1>
                  <p className="mb-4">{t.about.popups.more.designPhilosophyDesc}</p>
                  <ol className="list-decimal pl-6 space-y-2">
                    <li><strong>{t.about.popups.more.designPhil1}</strong></li>
                    <li><strong>{t.about.popups.more.designPhil2}</strong></li>
                    <li><strong>{t.about.popups.more.designPhil3}</strong></li>
                  </ol>
                </>
              )}
              {browserPath === '/about/who' && (
                <>
                  <h1 className="text-3xl font-bold mb-6 border-b-2 border-gray-300 pb-2">{t.about.popups.more.whoItsForTitle}</h1>
                  <p>{t.about.popups.more.whoItsForDesc}</p>
                </>
              )}
            </div>
          </div>
        </div>
      )}

    </div>
  );
}
