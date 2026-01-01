import { useState } from 'react';
import { Check } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';
import { STRIPE_LINKS } from '../utils/emailConfig';

export default function Pricing() {
  const { t, language } = useLanguage();
  const [isYearly, setIsYearly] = useState(true);

  const plans = [
    {
      name: 'Basic',
      monthlyPrice: '€12',
      yearlyPrice: '€10',
      descriptionKey: 'perfectPlan' as const,
      features: t.studyingProcess.modal.buy.basic.features,
      notIncluded: t.studyingProcess.modal.buy.basic.notIncluded,
      bgColor: 'bg-gradient-to-br from-pink-300 to-pink-400',
      buttonTextKey: 'getStarted' as const
    },
    {
      name: 'Professional',
      monthlyPrice: '€56',
      yearlyPrice: '€45',
      descriptionKey: 'idealForCreators' as const,
      features: t.studyingProcess.modal.buy.pro.features,
      bgColor: 'bg-gradient-to-br from-green-300 to-green-400',
      buttonTextKey: 'getProfessional' as const
    }
  ];

  const handlePayment = (planName: string) => {
    const langKey = (language.toUpperCase() as keyof typeof STRIPE_LINKS) || 'EN';
    const links = STRIPE_LINKS[langKey] || STRIPE_LINKS.EN;

    if (planName === 'Basic') {
      window.location.href = isYearly ? links.BASIC_YEARLY : links.BASIC_MONTHLY;
    } else {
      window.location.href = isYearly ? links.PRO_YEARLY : links.PRO_MONTHLY;
    }
  };

  return (
    <section id="pricing" className="relative bg-[#0a0a0a] py-12 lg:py-20 overflow-hidden">
      {/* Top decorative border */}
      <div className="absolute top-0 left-0 right-0 z-20 text-white text-2xl sm:text-4xl font-black opacity-30 overflow-hidden select-none">
        <div className="whitespace-nowrap animate-marquee">
          {'<<<<<<<  '.repeat(20)}
        </div>
      </div>

      {/* Bottom decorative border */}
      <div className="absolute bottom-0 left-0 right-0 z-20 text-white text-2xl sm:text-4xl font-black opacity-30 overflow-hidden select-none">
        <div className="whitespace-nowrap animate-marquee-reverse">
          {'>>>>>>>  '.repeat(20)}
        </div>
      </div>

      {/* Background pattern - simplified and contained */}
      <div
        className="absolute inset-0 pointer-events-none opacity-[0.05] select-none overflow-hidden"
        style={{
          zIndex: 1,
          fontFamily: "'Outfit', sans-serif",
          display: 'flex',
          flexWrap: 'wrap',
          gap: '2rem',
          padding: '2rem',
        }}
      >
        {Array.from({ length: 100 }).map((_, i) => (
          <span key={i} className="text-4xl lg:text-5xl font-black text-white whitespace-nowrap">newmindr.</span>
        ))}
      </div>

      <div className="container mx-auto px-4 sm:px-6 relative z-10">
        <div className="max-w-6xl mx-auto">
          {/* Title */}
          <div className="text-center mb-8 sm:mb-12">
            <h2 className="text-4xl sm:text-5xl md:text-7xl font-black text-white leading-tight mb-8 uppercase tracking-tighter">
              {t.pricing.title}
            </h2>

            {/* Toggle Switch */}
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-12">
              <div className="flex items-center gap-4">
                <span
                  onClick={() => setIsYearly(false)}
                  className={`text-base sm:text-lg font-bold cursor-pointer transition-colors ${!isYearly ? 'text-white' : 'text-gray-400 hover:text-white/80'}`}
                >
                  {t.pricing.monthly}
                </span>
                <button
                  onClick={() => setIsYearly(!isYearly)}
                  className="relative w-14 sm:w-16 h-7 sm:h-8 bg-gray-700 border-2 border-white rounded-full transition-colors shadow-[2px_2px_0px_0px_rgba(255,255,255,1)] shrink-0 !min-w-0 !min-h-0"
                >
                  <div
                    className={`absolute top-0.5 sm:top-1 w-5 h-5 bg-white rounded-full transition-all duration-300 ${isYearly ? 'left-8 sm:left-9' : 'left-0.5 sm:left-1'
                      }`}
                  />
                </button>
                <span
                  onClick={() => setIsYearly(true)}
                  className={`text-base sm:text-lg font-bold cursor-pointer transition-colors ${isYearly ? 'text-white' : 'text-gray-400 hover:text-white/80'}`}
                >
                  {t.pricing.yearly}
                </span>
              </div>
              <div className="bg-yellow-400 text-gray-900 px-3 py-1 rounded-full text-[10px] sm:text-xs font-black shadow-[2px_2px_0px_0px_rgba(0,0,0,1)] animate-bounce">
                {t.pricing.save}
              </div>
            </div>
          </div>

          {/* Pricing Cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {plans.map((plan, index) => (
              <div
                key={index}
                className="relative"
              >
                {/* Decorative animals - Hidden on mobile to prevent overflow, shown on lg */}
                <div className="hidden lg:block">
                  {plan.name === 'Basic' && (
                    <div className="absolute z-0 top-[100px] -left-24">
                      <img
                        src="/bas.png"
                        alt="Cat"
                        className="w-32 h-32 animate-cat-peek"
                        style={{ transform: 'rotate(-55deg)' }}
                      />
                    </div>
                  )}
                  {plan.name === 'Professional' && (
                    <div className="absolute z-0 -top-16 -right-12">
                      <img
                        src="/das.png"
                        alt="Capybara"
                        className="w-32 h-32 animate-bounce-rotate"
                      />
                    </div>
                  )}
                </div>

                <div
                  className={`${plan.bgColor} rounded-3xl p-6 sm:p-8 border-4 border-white shadow-[8px_8px_0px_0px_rgba(255,255,255,1)] sm:shadow-[12px_12px_0px_0px_rgba(255,255,255,1)] hover:-translate-y-2 transition-all duration-300 relative z-10`}
                >
                  <div className="mb-6">
                    <h3 className="text-xl font-bold text-gray-900 mb-2 uppercase tracking-tight">{t.pricing[plan.name.toLowerCase() as 'basic' | 'professional']}</h3>
                    <div className="flex items-baseline gap-2 mb-2">
                      <span className="text-4xl sm:text-5xl font-black text-gray-900">
                        {isYearly ? plan.yearlyPrice : plan.monthlyPrice}
                      </span>
                      {plan.monthlyPrice !== 'Free' && (
                        <span className="text-base sm:text-lg text-gray-700 font-medium">{t.pricing.perMonth}</span>
                      )}
                    </div>
                    <p className="text-gray-800 font-medium text-sm sm:text-base">{t.pricing[plan.descriptionKey]}</p>
                  </div>

                  <ul className="space-y-3 sm:space-y-4 mb-8">
                    {plan.features.map((feature: string, featureIndex: number) => (
                      <li key={featureIndex} className="flex items-start gap-3 text-sm sm:text-base">
                        <Check className="w-5 h-5 text-gray-900 flex-shrink-0 mt-0.5" strokeWidth={3} />
                        <span className="text-gray-900 font-bold">{feature}</span>
                      </li>
                    ))}
                    {/* @ts-ignore */}
                    {plan.notIncluded && (
                      <li className="flex items-start gap-3 mt-6 pt-4 border-t-2 border-gray-900/10">
                        <span className="text-gray-900/60 font-black italic text-xs">{plan.notIncluded}</span>
                      </li>
                    )}
                  </ul>

                  <button
                    onClick={() => handlePayment(plan.name)}
                    className="w-full bg-gray-900 text-white font-black py-4 rounded-xl border-2 border-white shadow-[4px_4px_0px_0px_rgba(255,255,255,1)] hover:bg-gray-800 active:translate-y-1 active:shadow-none transition-all uppercase tracking-widest text-sm"
                  >
                    {t.pricing[plan.buttonTextKey]}
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
      <style>{`
        @keyframes marquee {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
        .animate-marquee {
          display: inline-block;
          animation: marquee 20s linear infinite;
        }
        .animate-marquee-reverse {
          display: inline-block;
          animation: marquee 20s linear infinite reverse;
        }
      `}</style>
    </section>
  );
}
