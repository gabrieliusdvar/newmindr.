import { Compass, Hammer, Target, Rocket, GraduationCap } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';

export default function Programs() {
  const { t } = useLanguage();
  const programs = [
    {
      titleKey: 'virtualClass' as const,
      descriptionKey: 'virtualClassDesc' as const,
      icon: Compass,
      bgColor: 'bg-emerald-400',
      iconBg: 'bg-white',
      iconColor: 'text-emerald-500',
      shadowColor: 'shadow-emerald-400/50',
      image: '/program_exploring.jpg',
      borderColor: 'border-emerald-500',
      fillColor: 'bg-emerald-500',
    },
    {
      titleKey: 'studentMonitoring' as const,
      descriptionKey: 'studentMonitoringDesc' as const,
      icon: Hammer,
      bgColor: 'bg-blue-400',
      iconBg: 'bg-white',
      iconColor: 'text-blue-500',
      shadowColor: 'shadow-blue-400/50',
      image: '/program_building_v2.jpg',
      borderColor: 'border-blue-500',
      fillColor: 'bg-blue-500',
    },
    {
      titleKey: 'scholarshipProgram' as const,
      descriptionKey: 'scholarshipProgramDesc' as const,
      icon: Target,
      bgColor: 'bg-pink-300',
      iconBg: 'bg-white',
      iconColor: 'text-pink-400',
      shadowColor: 'shadow-pink-300/50',
      image: '/program_future.jpg',
      borderColor: 'border-pink-400',
      fillColor: 'bg-pink-400',
    },
  ];

  return (
    <section className="relative bg-[#0a0a0a] py-20 overflow-hidden" style={{
      borderTop: '5px dashed #22c55e',
      borderBottom: '5px dashed #22c55e'
    }}>
      <div className="absolute -left-20 top-20 opacity-20">
        <div className="w-32 h-32 bg-purple-600 rounded-full blur-3xl"></div>
      </div>
      <div className="absolute -right-20 bottom-20 opacity-20">
        <div className="w-40 h-40 bg-cyan-600 rounded-full blur-3xl"></div>
      </div>

      <div className="absolute top-10 right-1/4 animate-float">
        <div className="w-16 h-16 bg-pink-400 rounded-full flex items-center justify-center shadow-lg">
          <GraduationCap className="w-8 h-8 text-white" strokeWidth={3} />
        </div>
      </div>

      <div className="absolute bottom-10 left-1/4 animate-float-delayed">
        <Rocket className="w-12 h-12 text-red-400 rotate-45" />
      </div>

      {/* Decorative elements - light colored, fewer than Features section */}
      {/* Circles */}
      <div className="absolute left-10 top-1/3 w-16 h-16 border-3 border-gray-500 rounded-full opacity-15 transform rotate-12 animate-float-subtle"></div>
      <div className="absolute right-20 top-1/4 w-12 h-12 border-2 border-gray-400 rounded-full opacity-12 animate-sway-delayed"></div>
      <div className="absolute left-1/4 bottom-1/4 w-14 h-14 border-3 border-gray-500 rounded-full opacity-10 animate-float-subtle-delayed"></div>

      {/* Wavy lines - springs */}
      <svg className="absolute left-5 top-1/2 opacity-12 animate-float-subtle" width="50" height="80" viewBox="0 0 50 80" fill="none">
        <path d="M10 0 Q 25 20, 10 40 Q -5 60, 10 80" stroke="#d1d5db" strokeWidth="2" fill="none" />
      </svg>
      <svg className="absolute right-10 bottom-1/3 opacity-10 transform rotate-180 animate-sway" width="45" height="70" viewBox="0 0 45 70" fill="none">
        <path d="M10 0 Q 22 18, 10 35 Q -2 52, 10 70" stroke="#d1d5db" strokeWidth="2" fill="none" />
      </svg>

      {/* Bubbles */}
      <div className="absolute left-16 top-20 w-6 h-6 border-2 border-gray-400 rounded-full opacity-15 animate-float-subtle"></div>
      <div className="absolute right-1/4 bottom-20 w-5 h-5 border-2 border-gray-500 rounded-full opacity-12 animate-float-subtle-delayed"></div>
      <div className="absolute left-1/3 bottom-16 w-7 h-7 border-2 border-gray-400 rounded-full opacity-10 animate-sway"></div>

      {/* Dots */}
      <div className="absolute right-16 top-1/3 w-2.5 h-2.5 bg-gray-400 rounded-full opacity-20 animate-float-subtle"></div>
      <div className="absolute left-20 bottom-1/3 w-2 h-2 bg-gray-500 rounded-full opacity-15 animate-sway-delayed"></div>
      <div className="absolute right-1/3 bottom-24 w-3 h-3 bg-gray-400 rounded-full opacity-18 animate-float-subtle-delayed"></div>

      {/* Lines */}
      <div className="absolute left-1/3 top-16 w-20 h-1 bg-gray-500 opacity-12 transform rotate-25 animate-sway"></div>
      <div className="absolute right-24 bottom-1/4 w-24 h-1 bg-gray-400 opacity-10 transform -rotate-15 animate-float-subtle"></div>

      {/* Abstract shapes */}
      <div className="absolute right-12 top-1/2 w-8 h-8 border-2 border-gray-400 opacity-12 transform rotate-45 animate-sway-delayed" style={{ borderRadius: '50% 50% 30% 70% / 50% 70% 30% 50%' }}></div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12 sm:mb-16 relative">
            <h2 className="text-4xl sm:text-5xl md:text-7xl font-black text-white leading-tight mb-4">
              {t.programs.title}
              <br />
              {t.programs.subtitle}{' '}
              <span className="relative inline-block">
                <span className="bg-gradient-to-r from-green-400 to-green-500 text-gray-900 px-4 sm:px-6 py-2 rounded-none rotate-[-2deg] inline-block">
                  {t.programs.education}
                </span>
                <svg className="absolute -bottom-4 sm:-bottom-6 left-0 right-0 rotate-[-2deg]" viewBox="0 0 200 10" xmlns="http://www.w3.org/2000/svg">
                  <path d="M0,5 Q50,0 100,5 T200,5" stroke="#22c55e" strokeWidth="2" fill="none" strokeDasharray="5,5" />
                </svg>
              </span>
            </h2>
            <p className="text-gray-400 text-base sm:text-lg max-w-2xl mx-auto mt-6">
              {t.programs.description}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 sm:gap-12 md:gap-8">
            {programs.map((program, index) => {
              // Determine hole positions based on card index and screen size
              // On mobile, we might want holes on only one side or both for consistency
              const holes = [];

              const sideLeft = { side: 'left', position: ['top-8', 'top-[35%]', 'bottom-[35%]', 'bottom-8'] };
              const sideRight = { side: 'right', position: ['top-8', 'top-[35%]', 'bottom-[35%]', 'bottom-8'] };

              if (index === 0) {
                // Interactive Exploring: Right side only
                holes.push(...sideRight.position.map(pos => ({ side: 'right', position: pos })));
              } else if (index === 1) {
                // Creative Building: Both sides
                holes.push(...sideLeft.position.map(pos => ({ side: 'left', position: pos })));
                holes.push(...sideRight.position.map(pos => ({ side: 'right', position: pos })));
              } else {
                // Future Ready: Left side only
                holes.push(...sideLeft.position.map(pos => ({ side: 'left', position: pos })));
              }

              return (
                <div
                  key={index}
                  className={`relative border-4 ${program.borderColor} rounded-3xl p-8 shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] transform hover:-translate-y-2 hover:shadow-[12px_12px_0px_0px_rgba(0,0,0,1)] transition-all duration-300 cursor-pointer group overflow-hidden`}
                >
                  {/* Background Image Layer */}
                  <div className="absolute inset-0 z-0">
                    <img
                      src={program.image}
                      alt=""
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                    />
                  </div>



                  {/* Notepad hole punches */}
                  {holes.map((hole, holeIndex) => (
                    <div
                      key={holeIndex}
                      className={`absolute z-20 ${hole.side === 'left' ? '-left-3' : '-right-3'} ${hole.position.includes('top-1/2') || hole.position.includes('bottom-1/2') ? `${hole.position} -translate-y-1/2` : hole.position} ${program.fillColor}`}
                      style={{
                        width: '18px',
                        height: '18px',
                        borderRadius: '50%',
                      }}
                    ></div>
                  ))}

                  <div className="relative z-30 flex flex-col h-full">
                    <div className={`${program.iconBg} w-24 h-24 rounded-3xl border-4 border-gray-900 flex items-center justify-center mb-6 transform group-hover:rotate-12 transition-transform shadow-[4px_4px_0_0_rgba(0,0,0,1)]`}>
                      <program.icon className={`w-12 h-12 ${program.iconColor}`} strokeWidth={3} />
                    </div>

                    <h3 className="text-3xl font-black text-white mb-3 tracking-tight drop-shadow-md" style={{ fontFamily: "'Outfit', sans-serif" }}>
                      {t.programs[program.titleKey]}
                    </h3>

                    <p className="text-white font-bold leading-relaxed text-lg drop-shadow-[1px_1px_0px_rgba(0,0,0,1)]">
                      {t.programs[program.descriptionKey]}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
