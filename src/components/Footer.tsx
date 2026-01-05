import { useState } from 'react';
import { Mail, Facebook, Youtube, Instagram, Heart } from 'lucide-react';
import { Link } from 'react-router-dom';
import { useLanguage } from '../contexts/LanguageContext';
import { generateEmailHtml } from '../utils/emailGenerator';
import { useModal } from '../contexts/ModalContext';

export default function Footer() {
  const { t, language } = useLanguage();
  const { openModal } = useModal();
  const [locationClicked, setLocationClicked] = useState(false);
  const [showMessage, setShowMessage] = useState(false);
  const [email, setEmail] = useState('');
  const [error, setError] = useState('');
  const [success, setSuccess] = useState(false);

  const handleSubscribe = async (e: React.FormEvent) => {
    e.preventDefault();
    setError('');

    if (!email) {
      setError('required');
      return;
    }

    // Strict email regex
    if (!/^\S+@\S+\.\S+$/.test(email)) {
      setError('invalidEmail');
      return;
    }

    try {
      const { sendEmail } = await import('../utils/emailService');

      await sendEmail({
        to: email,
        subject: t.emails.newsletter.subject,
        html: generateEmailHtml(language, 'newsletter', {})
      });

      console.log('Newsletter subscribed:', email);
      setSuccess(true);
      setEmail('');

      // Reset success message after 3 seconds
      setTimeout(() => setSuccess(false), 3000);
    } catch (err: any) {
      console.error('Email failed to send:', err);
      setError(err?.message || 'error');
    }
  };

  const handleHeartClick = () => {
    setLocationClicked(!locationClicked);
    if (!locationClicked) {
      setShowMessage(true);
      setTimeout(() => setShowMessage(false), 2000);
    }
  };

  const navItems = [
    { name: t.footer.aboutUs, type: 'about' as const },
    { name: t.footer.ourCourses, type: 'courses' as const },
    { name: t.footer.programs, type: 'programs' as const },
    { name: t.footer.pricing, type: 'pricing' as const },
    { name: t.footer.showcase, path: '/showcase' },
    { name: t.footer.blog, path: '/blog' },
    { name: t.footer.contact, type: 'contact' as const },
  ];

  return (
    <footer className="bg-white border-t-4 border-gray-900 overflow-hidden">
      {/* Interactive Marquee - Line 1 (Right) */}
      <div className="bg-gray-900 py-1.5 overflow-hidden border-b-2 border-gray-800">
        <div className="flex animate-marquee-right whitespace-nowrap">
          {[...Array(4)].map((_, i) => (
            <div key={i} className="flex items-center shrink-0">
              {[...Array(10)].map((_, j) => (
                <div key={j} className="flex items-center gap-4 mx-4">
                  <span className="text-white font-black text-xs italic uppercase tracking-tighter opacity-90" style={{ fontFamily: "'Outfit', sans-serif" }}>
                    {t.footer.ignitePotential}
                  </span>
                  <div className="w-1.5 h-1.5 rounded-full bg-yellow-400"></div>
                </div>
              ))}
            </div>
          ))}
        </div>
      </div>

      {/* Interactive Marquee - Line 2 (Left) */}
      <div className="bg-gray-900 py-1.5 overflow-hidden border-b-4 border-gray-900">
        <div className="flex animate-marquee-left whitespace-nowrap">
          {[...Array(4)].map((_, i) => (
            <div key={i} className="flex items-center shrink-0">
              {[...Array(10)].map((_, j) => (
                <div key={j} className="flex items-center gap-4 mx-4">
                  <span className="text-white font-black text-xs italic uppercase tracking-tighter opacity-90" style={{ fontFamily: "'Outfit', sans-serif" }}>
                    {t.footer.stopConsuming}
                  </span>
                  <div className="w-1.5 h-1.5 rounded-full bg-emerald-400"></div>
                </div>
              ))}
            </div>
          ))}
        </div>
      </div>

      <div className="container mx-auto px-6 py-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-8 mb-8">
          {/* Brand Vision */}
          <div className="lg:col-span-5 flex flex-col justify-between">
            <div>
              <div className="mb-6">
                <Link to="/" className="group relative block w-fit">
                  <div className="w-20 h-20 bg-purple-400 border-4 border-gray-900 rounded-2xl flex items-center justify-center -rotate-3 transition-all duration-300 group-hover:rotate-0 hover:scale-105 shadow-[8px_8px_0px_0px_rgba(167,139,250,1)] group-hover:shadow-[10px_10px_0px_0px_rgba(167,139,250,1)] active:translate-y-1 active:shadow-none bg-cover bg-center overflow-hidden">
                    <img src="/download (1).png" alt="Logo" className="w-full h-full object-cover" />
                  </div>
                </Link>
              </div>
              <h2 className="text-3xl font-black text-gray-900 leading-[0.9] mb-4 tracking-tighter">
                {t.footer.learning} <br />
                <span className="text-emerald-500">{t.footer.reimagined}</span>
              </h2>
              <p className="text-gray-600 text-sm font-medium leading-relaxed max-w-md">
                {t.footer.brandDescription}
              </p>
            </div>

            {/* Interactive Location */}
            <div
              className="mt-8 group cursor-pointer w-fit relative"
              onClick={handleHeartClick}
            >
              {showMessage && (
                <div className="absolute -top-10 left-1/2 -translate-x-1/2 whitespace-nowrap bg-gray-900 text-white px-3 py-1.5 rounded-lg font-black text-[10px] animate-float-up-fade shadow-[3px_3px_0px_0px_rgba(16,185,129,1)] z-30">
                  {t.footer.loveYou}
                </div>
              )}
              <div className={`flex items-center gap-3 p-4 border-4 border-gray-900 rounded-xl shadow-[6px_6px_0_0_rgba(0,0,0,1)] hover:translate-x-1 hover:translate-y-1 hover:shadow-none transition-all ${locationClicked ? 'bg-red-500' : 'bg-gray-50'}`}>
                <div className={`w-10 h-10 border-2 border-gray-900 rounded-lg flex items-center justify-center shadow-[3px_3px_0_0_rgba(0,0,0,1)] transition-colors ${locationClicked ? 'bg-white' : 'bg-white group-hover:bg-red-50'}`}>
                  <Heart className={`w-5 h-5 transition-all ${locationClicked ? 'text-red-600 fill-red-600 scale-125 animate-pulse' : 'text-red-500 fill-red-500 group-hover:animate-pulse'}`} />
                </div>
                <div>
                  <p className={`text-[10px] font-black uppercase tracking-widest leading-none mb-1 ${locationClicked ? 'text-white/80' : 'text-gray-400'}`}>{t.footer.locationLabel}</p>
                  <p className={`text-base font-black leading-tight transition-colors ${locationClicked ? 'text-white' : 'text-gray-900'}`}>
                    {t.footer.address}
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Quick Nav & Links */}
          <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 lg:gap-8">
            <div>
              <h3 className="text-[10px] font-black text-gray-400 uppercase tracking-widest mb-4" style={{ fontFamily: "'Space Grotesk', sans-serif" }}>{t.footer.navigation}</h3>
              <ul className="flex flex-col gap-1 sm:gap-2">
                {navItems.map((item) => (
                  <li key={item.name} className="flex">
                    {item.path ? (
                      <Link
                        to={item.path}
                        className="text-gray-900 text-sm font-bold hover:text-emerald-500 hover:translate-x-2 transition-all block w-fit leading-none py-1.5 !min-h-0"
                      >
                        {item.name}
                      </Link>
                    ) : (
                      <button
                        onClick={() => openModal(item.type as any)}
                        className="text-gray-900 text-sm font-bold hover:text-emerald-500 hover:translate-x-2 transition-all block w-fit text-left p-0 bg-transparent border-none appearance-none leading-none py-1.5 !min-h-0 !min-w-0"
                      >
                        {item.name}
                      </button>
                    )}
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h3 className="text-[10px] font-black text-gray-400 uppercase tracking-widest mb-4" style={{ fontFamily: "'Space Grotesk', sans-serif" }}>{t.footer.connect}</h3>
              <div className="grid grid-cols-2 gap-3">
                {[
                  { icon: Facebook, color: 'hover:bg-indigo-600', url: language === 'lt' ? 'https://www.facebook.com/newmindr.lt/' : 'https://www.facebook.com/newmindr' },
                  { icon: Instagram, color: 'hover:bg-pink-500', url: language === 'lt' ? 'https://www.instagram.com/newmindr.lt/' : 'https://www.instagram.com/newmindr' },
                  { icon: Youtube, color: 'hover:bg-red-600', url: language === 'lt' ? 'https://www.youtube.com/@newmindr_LT' : 'https://www.youtube.com/@newmindr' },
                  {
                    icon: (props: any) => (
                      <svg viewBox="0 0 24 24" fill="currentColor" {...props}>
                        <path d="M12.525.02c1.31-.02 2.61-.01 3.91-.02.08 1.53.63 3.09 1.75 4.17 1.12 1.11 2.7 1.62 4.24 1.79v4.03c-1.44-.17-2.89-.6-4.13-1.46-.12 3.43-.2 6.87-.58 10.28-.41 3.22-3.12 5.76-6.36 5.95-3.32.22-6.52-2.07-7.23-5.3-.9-3.92 1.48-8 5.42-8.59.88-.13 1.77-.11 2.65.04V14.5c-1.22-.32-2.58-.1-3.53.7-.95.8-1.39 2.1-1.07 3.29.32 1.19 1.4 2.06 2.62 2.14 1.22.08 2.4-.6 2.87-1.72.33-.78.36-1.63.36-2.47V0z" />
                      </svg>
                    ),
                    color: 'hover:bg-black',
                    url: language === 'lt' ? 'https://www.tiktok.com/@newmindr_lt' : 'https://www.tiktok.com/@newmindr.com'
                  },
                ].map((social, i) => (
                  <a
                    key={i}
                    href={social.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`w-10 h-10 bg-white border-2 border-gray-900 rounded-lg flex items-center justify-center shadow-[4px_4px_0_0_rgba(0,0,0,1)] hover:translate-x-1 hover:translate-y-1 hover:shadow-none transition-all group ${social.color}`}
                  >
                    <social.icon className="w-5 h-5 text-gray-900 group-hover:text-white transition-colors" />
                  </a>
                ))}
              </div>
              <div className="mt-6 space-y-3">
                <a href="mailto:hello@newmindr.com" className="flex items-center gap-2 text-gray-900 text-sm font-bold hover:text-emerald-500 transition-colors group">
                  <div className="p-1.5 bg-gray-50 border-2 border-gray-900 rounded-md group-hover:bg-emerald-50 transition-colors">
                    <Mail className="w-3.5 h-3.5" />
                  </div>
                  hello@newmindr.com
                </a>
              </div>
            </div>

            <div>
              <h3 className="text-[10px] font-black text-gray-400 uppercase tracking-widest mb-4" style={{ fontFamily: "'Space Grotesk', sans-serif" }}>{t.footer.newsletter}</h3>
              <p className="text-[10px] text-gray-500 font-bold mb-3 leading-relaxed">
                {t.footer.newsletterDescription}
              </p>
              <div className="space-y-4">
                <form onSubmit={handleSubscribe} noValidate>
                  <div className="space-y-2">
                    <div className="relative">
                      <input
                        type="email"
                        value={email}
                        onChange={(e) => {
                          setEmail(e.target.value);
                          if (error) setError('');
                        }}
                        placeholder={t.footer.enterEmail}
                        className={`w-full bg-white border-2 ${error ? 'border-red-500 bg-red-50' : 'border-gray-900'} rounded-lg px-3 py-2 text-xs font-bold text-gray-900 focus:outline-none focus:bg-gray-50 transition-colors`}
                      />
                      {error && (
                        <div className="absolute top-full mt-1 left-0 right-0 z-20 flex items-center gap-1.5 bg-white border-2 border-red-500 text-red-600 rounded-md px-2 py-1 shadow-[2px_2px_0px_0px_rgba(0,0,0,0.1)] animate-in slide-in-from-top-1">
                          <div className="w-3.5 h-3.5 bg-red-500 text-white rounded-full flex items-center justify-center text-[7px] shrink-0 font-black">!</div>
                          <span className="text-[9px] font-black leading-tight">
                            {error.includes(' ') ? error : (t.validation[error as keyof typeof t.validation] || 'Connection Error')}
                          </span>
                        </div>
                      )}
                    </div>
                    <button
                      type="submit"
                      disabled={success}
                      className={`w-full py-2 border-2 border-gray-900 rounded-lg font-black text-gray-900 shadow-[4px_4px_0_0_rgba(0,0,0,1)] hover:translate-x-1 hover:translate-y-1 hover:shadow-none active:translate-y-1 transition-all uppercase tracking-widest text-xs ${success ? 'bg-emerald-400' : 'bg-yellow-400 hover:bg-yellow-300'}`}
                      style={{ fontFamily: "'Sora', sans-serif" }}
                    >
                      {success ? 'SUBSCRIBED!' : t.footer.subscribe}
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t-4 border-gray-900 flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-4">
            <div className="flex items-center gap-2">
              <img src="/download (1).png" alt="" className="w-5 h-5 object-cover rounded shadow-[1px_1px_0px_0px_rgba(0,0,0,1)]" />
              <span className="text-[10px] font-black text-gray-900 underline decoration-yellow-400 decoration-2">newmindr. ©{new Date().getFullYear()}</span>
            </div>
            <div className="flex items-center gap-3 text-[9px] font-bold text-gray-500 uppercase tracking-widest">
              <button onClick={() => openModal('privacy')} className="hover:text-gray-900 transition-colors underline decoration-2 decoration-gray-200 hover:decoration-emerald-500">{t.footer.privacyPolicy}</button>
              <button onClick={() => openModal('terms')} className="hover:text-gray-900 transition-colors underline decoration-2 decoration-gray-200 hover:decoration-emerald-500">{t.footer.termsOfService}</button>
            </div>
          </div>
          <div className="flex items-center gap-2 px-3 py-1 bg-gray-900 text-white rounded-lg text-[9px] font-black uppercase tracking-[0.2em] -rotate-1 shadow-[3px_3px_0_0_rgba(251,191,36,1)]" style={{ fontFamily: "'Space Grotesk', sans-serif" }}>
            {t.footer.poweredBy}
          </div>
        </div>
      </div>

      <div className="h-2 flex">
        <div className="flex-1 bg-yellow-400"></div>
        <div className="flex-1 bg-emerald-400"></div>
        <div className="flex-1 bg-blue-400"></div>
        <div className="flex-1 bg-red-400"></div>
        <div className="flex-1 bg-purple-400"></div>
      </div>

      <style>{`
        @keyframes float-up-fade {
          0% { transform: translate(-50%, 0); opacity: 0; }
          20% { transform: translate(-50%, -20px); opacity: 1; }
          80% { transform: translate(-50%, -40px); opacity: 1; }
          100% { transform: translate(-50%, -60px); opacity: 0; }
        }
        .animate-float-up-fade {
          animation: float-up-fade 2s ease-out forwards;
        }
        @keyframes marquee-left {
          0% { transform: translateX(0); }
          100% { transform: translateX(-25%); }
        }
        @keyframes marquee-right {
          0% { transform: translateX(-25%); }
          100% { transform: translateX(0); }
        }
        .animate-marquee-left {
          animation: marquee-left 25s linear infinite;
        }
        .animate-marquee-right {
          animation: marquee-right 25s linear infinite;
        }
      `}</style>
    </footer>
  );
}
