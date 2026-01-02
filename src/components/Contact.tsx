import { useState, useEffect } from 'react';
import { MapPin, Phone, MessageCircle, Facebook, Instagram, Youtube, Check } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';
import { generateEmailHtml } from '../utils/emailGenerator';

export default function Contact() {
  const { t, language } = useLanguage();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
    helpOptions: [] as string[],
  });

  const [errors, setErrors] = useState({
    name: '',
    email: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitSuccess, setSubmitSuccess] = useState(false);
  const [submitError, setSubmitError] = useState(false);

  useEffect(() => {
    // Lock body scroll and prevent pull-to-refresh/overscroll on mobile
    const originalStyle = window.getComputedStyle(document.body).overflow;
    const originalOverscroll = window.getComputedStyle(document.body).overscrollBehavior;

    document.body.style.overflow = 'hidden';
    document.body.style.overscrollBehavior = 'none';

    return () => {
      document.body.style.overflow = originalStyle;
      document.body.style.overscrollBehavior = originalOverscroll;
    };
  }, []);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
    // Clear error when user types
    if (errors[name as keyof typeof errors]) {
      setErrors(prev => ({ ...prev, [name]: '' }));
    }
  };

  const handleCheckboxChange = (option: string) => {
    setFormData(prev => ({
      ...prev,
      helpOptions: prev.helpOptions.includes(option)
        ? prev.helpOptions.filter(o => o !== option)
        : [...prev.helpOptions, option]
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    // Validation logic
    let newErrors = { name: '', email: '', message: '' };
    let hasError = false;

    if (!formData.name.trim()) {
      newErrors.name = 'required';
      hasError = true;
    }
    if (!formData.email.trim()) {
      newErrors.email = 'required';
      hasError = true;
    } else if (!/^\S+@\S+\.\S+$/.test(formData.email)) {
      newErrors.email = 'invalidEmail';
      hasError = true;
    }
    if (!formData.message.trim()) {
      newErrors.message = 'required';
      hasError = true;
    }

    if (hasError) {
      setErrors(newErrors);
      return;
    }

    // Handle form submission
    console.log('Form submitted:', formData);
    sendEmail();
  };

  const sendEmail = async () => {
    setIsSubmitting(true);
    setSubmitError(false);
    setSubmitSuccess(false);

    try {
      const { sendEmail } = await import('../utils/emailService');

      const helpLabels = formData.helpOptions.map(opt => {
        const option = [
          { key: 'websiteDesign', label: t.contact.websiteDesign },
          { key: 'uxDesign', label: t.contact.uxDesign },
          { key: 'userResearch', label: t.contact.userResearch },
          { key: 'contentCreation', label: t.contact.contentCreation },
          { key: 'strategyConsulting', label: t.contact.strategyConsulting },
          { key: 'other', label: t.contact.other },
        ].find(o => o.key === opt);
        return option ? option.label : opt;
      });

      await sendEmail({
        to: 'hello@newmindr.com',
        subject: t.emails.contact.subject.replace('{name}', formData.name),
        html: generateEmailHtml(language, 'contact', {
          name: formData.name,
          email: formData.email,
          helpOptions: helpLabels.join(', '),
          message: formData.message
        })
      });

      setSubmitSuccess(true);
      setFormData({ name: '', email: '', message: '', helpOptions: [] });
    } catch (err) {
      console.error('Email failed to send:', err);
      setSubmitError(true);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="fixed inset-0 top-[50px] lg:top-[50px] overflow-hidden bg-emerald-400 lg:bg-white overscroll-none touch-none lg:touch-auto">
      <div className="grid lg:grid-cols-[1.2fr_0.8fr] min-h-[calc(100svh-50px)] w-full relative flex flex-col lg:grid">
        {/* Black divider line - moved to 60% */}
        <div className="absolute left-[60%] top-0 bottom-0 w-1 bg-gray-900 transform -translate-x-1/2 z-10 hidden lg:block"></div>

        {/* Left Section - White Background */}
        <div className="hidden lg:flex bg-white p-6 sm:p-8 lg:p-12 flex-col justify-start overflow-visible lg:overflow-hidden relative z-0 shrink-0">
          {/* Floating background decorations */}
          <div className="absolute top-20 left-1/4 w-32 h-32 bg-yellow-200/50 rounded-full blur-3xl opacity-30 animate-pulse"></div>
          <div className="absolute bottom-40 left-10 w-40 h-40 bg-purple-200/50 rounded-full blur-3xl opacity-30 animate-pulse delay-700"></div>
          {/* Contact Information - Sticky Notes */}
          <div className="space-y-4 sm:space-y-6 mb-8 flex flex-col items-center lg:items-center relative z-10 w-full pb-32 lg:pb-0">
            {/* Chat to us - Yellow sticky note */}
            <div
              className="group/note bg-yellow-300 p-6 sm:p-8 rounded-[1.5rem] sm:rounded-[2rem] border-3 sm:border-4 border-gray-900 max-w-sm w-full transition-all duration-300 hover:-translate-y-2 hover:-rotate-0 shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] sm:shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] hover:shadow-none"
              style={{ transform: 'rotate(-2deg)' }}
            >
              <div className="flex items-center gap-3 sm:gap-4 mb-3 sm:mb-4">
                <div className="w-10 h-10 sm:w-12 sm:h-12 bg-white border-2 border-gray-900 rounded-xl flex items-center justify-center shadow-[3px_3px_0_0_rgba(0,0,0,1)] sm:shadow-[4px_4px_0_0_rgba(0,0,0,1)] transform -rotate-3 group-hover/note:rotate-3 transition-transform">
                  <MessageCircle className="w-5 h-5 sm:w-6 sm:h-6 text-gray-900" />
                </div>
                <h3 className="text-lg sm:text-xl font-black text-gray-900 uppercase tracking-tighter">{t.contact.chatTitle}</h3>
              </div>
              <p className="text-gray-800 text-xs sm:text-sm mb-4 sm:mb-6 font-bold leading-relaxed">{t.contact.chatDescription}</p>
              <a href="mailto:hello@newmindr.com" className="inline-flex items-center bg-white border-2 border-gray-900 px-3 sm:px-4 py-1.5 sm:py-2 rounded-xl text-gray-900 font-black text-xs sm:text-sm hover:bg-emerald-400 transition-colors shadow-[3px_3px_0_0_rgba(0,0,0,1)] sm:shadow-[4px_4px_0_0_rgba(0,0,0,1)] active:translate-y-1 active:shadow-none uppercase" style={{ fontFamily: "'Sora', sans-serif" }}>
                hello@newmindr.com
              </a>
            </div>

            {/* Visit us - Pink sticky note */}
            <div
              className="group/note bg-pink-300 p-6 sm:p-8 rounded-[1.5rem] sm:rounded-[2rem] border-3 sm:border-4 border-gray-900 max-w-sm w-full transition-all duration-300 hover:-translate-y-2 hover:-rotate-0 shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] sm:shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] hover:shadow-none"
              style={{ transform: 'rotate(1deg)' }}
            >
              <div className="flex items-center gap-3 sm:gap-4 mb-3 sm:mb-4">
                <div className="w-10 h-10 sm:w-12 sm:h-12 bg-white border-2 border-gray-900 rounded-xl flex items-center justify-center shadow-[3px_3px_0_0_rgba(0,0,0,1)] sm:shadow-[4px_4px_0_0_rgba(0,0,0,1)] transform rotate-3 group-hover/note:-rotate-3 transition-transform">
                  <MapPin className="w-5 h-5 sm:w-6 sm:h-6 text-gray-900" />
                </div>
                <h3 className="text-lg sm:text-xl font-black text-gray-900 uppercase tracking-tighter">{t.contact.visitTitle}</h3>
              </div>
              <p className="text-gray-800 text-xs sm:text-sm mb-4 sm:mb-6 font-bold leading-relaxed">{t.contact.visitDescription}</p>
              <p className="text-gray-900 font-black text-xs sm:text-sm md:text-base border-l-3 sm:border-l-4 border-gray-900 pl-3 sm:pl-4 py-1 italic">
                {t.footer.address}
              </p>
            </div>

            {/* Call us - Blue sticky note */}
            <div
              className="group/note bg-blue-300 p-6 sm:p-8 rounded-[1.5rem] sm:rounded-[2rem] border-3 sm:border-4 border-gray-900 max-w-sm w-full transition-all duration-300 hover:-translate-y-2 hover:-rotate-0 shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] sm:shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] hover:shadow-none"
              style={{ transform: 'rotate(-1.5deg)' }}
            >
              <div className="flex items-center gap-3 sm:gap-4 mb-3 sm:mb-4">
                <div className="w-10 h-10 sm:w-12 sm:h-12 bg-white border-2 border-gray-900 rounded-xl flex items-center justify-center shadow-[3px_3px_0_0_rgba(0,0,0,1)] sm:shadow-[4px_4px_0_0_rgba(0,0,0,1)] transform -rotate-2 group-hover/note:rotate-6 transition-transform">
                  <Phone className="w-5 h-5 sm:w-6 sm:h-6 text-gray-900" />
                </div>
                <h3 className="text-lg sm:text-xl font-black text-gray-900 uppercase tracking-tighter">{t.contact.callTitle}</h3>
              </div>
              <p className="text-gray-800 text-xs sm:text-sm mb-4 sm:mb-6 font-bold leading-relaxed">{t.contact.callDescription}</p>
              <a href="tel:+37063911939" className="inline-flex items-center bg-gray-900 border-2 border-white px-3 sm:px-4 py-1.5 sm:py-2 rounded-xl text-white font-black text-xs sm:text-sm hover:bg-emerald-500 transition-colors shadow-[3px_3px_0_0_rgba(16,185,129,1)] sm:shadow-[4px_4px_0_0_rgba(16,185,129,1)] active:translate-y-1 active:shadow-none uppercase" style={{ fontFamily: "'Sora', sans-serif" }}>
                +370 (639) 11 939
              </a>
            </div>
          </div>

          {/* Social Media Links - Interactive Floating Bar */}
          <div className="hidden lg:flex absolute left-6 top-1/2 transform -translate-y-1/2 flex-col gap-6 z-20">
            {[
              { icon: Facebook, color: 'hover:bg-indigo-600', shadow: 'shadow-[4px_4px_0_0_#1e1b4b]' },
              { icon: Instagram, color: 'hover:bg-pink-500', shadow: 'shadow-[4px_4px_0_0_#831843]' },
              { icon: Youtube, color: 'hover:bg-red-600', shadow: 'shadow-[4px_4px_0_0_#7f1d1d]' },
              {
                icon: (props: any) => (
                  <svg viewBox="0 0 24 24" fill="currentColor" {...props}>
                    <path d="M12.525.02c1.31-.02 2.61-.01 3.91-.02.08 1.53.63 3.09 1.75 4.17 1.12 1.11 2.7 1.62 4.24 1.79v4.03c-1.44-.17-2.89-.6-4.13-1.46-.12 3.43-.2 6.87-.58 10.28-.41 3.22-3.12 5.76-6.36 5.95-3.32.22-6.52-2.07-7.23-5.3-.9-3.92 1.48-8 5.42-8.59.88-.13 1.77-.11 2.65.04V14.5c-1.22-.32-2.58-.1-3.53.7-.95.8-1.39 2.1-1.07 3.29.32 1.19 1.4 2.06 2.62 2.14 1.22.08 2.4-.6 2.87-1.72.33-.78.36-1.63.36-2.47V0z" />
                  </svg>
                ),
                color: 'hover:bg-black',
                shadow: 'shadow-[4px_4px_0_0_#000000]'
              },
            ].map((social, i) => (
              <a
                key={i}
                href="#"
                className={`w-12 h-12 bg-white border-2 border-gray-900 rounded-2xl flex items-center justify-center text-gray-900 transition-all hover:-translate-y-1 hover:-translate-x-1 ${social.shadow} hover:shadow-none ${social.color} hover:text-white`}
              >
                <social.icon className="w-6 h-6" />
              </a>
            ))}
          </div>

          {/* Dog Image - Repositioned right and lower */}
          <div className="absolute bottom-0 right-0 z-20 dog-entrance pointer-events-none lg:pointer-events-auto">
            <img
              src="/vd.png"
              alt={t.contact.dogAlt}
              className="h-[120px] sm:h-[180px] lg:h-[350px] w-auto object-contain transition-transform duration-500 hover:scale-105 transform translate-x-4 translate-y-4 lg:translate-x-0 lg:translate-y-0"
              style={{ maxWidth: 'none', filter: 'drop-shadow(10px 10px 0px rgba(0,0,0,0.1))' }}
            />
          </div>
        </div>

        {/* Right Section - Emerald Green Background with Waves */}
        <div className="flex-1 bg-gradient-to-br from-emerald-300 to-emerald-400 p-6 lg:p-10 flex flex-col justify-center lg:justify-center relative z-10 touch-auto overflow-y-auto lg:overflow-hidden">
          {/* Water Wave Effect */}
          <div className="absolute inset-0 pointer-events-none opacity-20">
            <div
              className="absolute inset-[-100px] animate-water-wave"
              style={{
                backgroundImage: 'radial-gradient(#000 1.5px, transparent 1.5px)',
                backgroundSize: '32px 32px'
              }}
            ></div>
          </div>
          <div className="max-w-md mx-auto w-full pt-4">
            {/* Headline */}
            <h1 className="text-2xl md:text-3xl lg:text-4xl font-black text-gray-900 mb-2 leading-tight uppercase tracking-tighter">
              {t.contact.headline}
            </h1>

            {/* Sub-headline */}
            <p className="text-gray-800 text-sm md:text-base mb-6 font-bold">
              {t.contact.subheadline}
            </p>

            {/* Form */}
            {submitSuccess ? (
              <div className="bg-white border-4 border-gray-900 rounded-3xl p-10 text-center shadow-[12px_12px_0px_0px_rgba(0,0,0,1)] animate-in zoom-in duration-300">
                <div className="w-20 h-20 bg-emerald-100 rounded-full flex items-center justify-center mx-auto mb-6 border-2 border-emerald-500">
                  <Check className="w-10 h-10 text-emerald-600" strokeWidth={3} />
                </div>
                <h2 className="text-3xl font-black text-gray-900 mb-4 uppercase italic leading-none">{t.contact.headline}!</h2>
                <p className="text-gray-600 font-bold mb-8">{t.contact.subheadline}</p>
                <button
                  onClick={() => setSubmitSuccess(false)}
                  className="w-full bg-gray-900 text-white font-black py-4 rounded-xl hover:bg-gray-800 transition-all uppercase tracking-widest text-xs"
                >
                  Send another message
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} noValidate className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-[10px] font-black uppercase mb-1 text-gray-900 pl-2" style={{ fontFamily: "'Space Grotesk', sans-serif" }}>{t.contact.fullName}</label>
                    <div className="relative">
                      <input
                        type="text"
                        name="name"
                        value={formData.name}
                        onChange={handleInputChange}
                        placeholder={t.contact.namePlaceholder}
                        className={`w-full bg-white border-2 ${errors.name ? 'border-red-500 bg-red-50' : 'border-gray-900'} rounded-xl p-3 text-sm text-gray-900 placeholder-gray-400 focus:outline-none focus:bg-yellow-50 transition-all font-black shadow-[4px_4px_0_0_rgba(0,0,0,1)] active:translate-y-1 active:shadow-none`}
                      />
                      {errors.name && (
                        <div className="absolute top-full mt-1 left-0 z-20 flex items-center gap-1.5 bg-white border-2 border-red-500 text-red-600 rounded-md px-2 py-1 shadow-[2px_2px_0px_0px_rgba(0,0,0,0.1)] animate-in slide-in-from-top-1">
                          <div className="w-3.5 h-3.5 bg-red-500 text-white rounded-full flex items-center justify-center text-[8px] font-black border border-gray-900">!</div>
                          <span className="text-[10px] font-black">{t.validation[errors.name as keyof typeof t.validation]}</span>
                        </div>
                      )}
                    </div>
                  </div>
                  <div>
                    <label className="block text-[10px] font-black uppercase mb-1 text-gray-900 pl-2" style={{ fontFamily: "'Space Grotesk', sans-serif" }}>{t.contact.emailAddress}</label>
                    <div className="relative">
                      <input
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleInputChange}
                        placeholder={t.contact.emailPlaceholder}
                        className={`w-full bg-white border-2 ${errors.email ? 'border-red-500 bg-red-50' : 'border-gray-900'} rounded-xl p-3 text-sm text-gray-900 placeholder-gray-400 focus:outline-none focus:bg-yellow-50 transition-all font-black shadow-[4px_4px_0_0_rgba(0,0,0,1)] active:translate-y-1 active:shadow-none`}
                      />
                      {errors.email && (
                        <div className="absolute top-full mt-1 left-0 z-20 flex items-center gap-1.5 bg-white border-2 border-red-500 text-red-600 rounded-md px-2 py-1 shadow-[2px_2px_0px_0px_rgba(0,0,0,0.1)] animate-in slide-in-from-top-1">
                          <div className="w-3.5 h-3.5 bg-red-500 text-white rounded-full flex items-center justify-center text-[8px] font-black border border-gray-900">!</div>
                          <span className="text-[10px] font-black">{t.validation[errors.email as keyof typeof t.validation]}</span>
                        </div>
                      )}
                    </div>
                  </div>
                </div>

                <div>
                  <label className="block text-[10px] font-black uppercase mb-1 text-gray-900 pl-2" style={{ fontFamily: "'Space Grotesk', sans-serif" }}>{t.contact.yourMessage}</label>
                  <div className="relative">
                    <textarea
                      name="message"
                      value={formData.message}
                      onChange={handleInputChange}
                      placeholder={t.contact.messagePlaceholder}
                      rows={3}
                      className={`w-full bg-white border-2 ${errors.message ? 'border-red-500 bg-red-50' : 'border-gray-900'} rounded-xl p-4 text-sm text-gray-900 placeholder-gray-400 focus:outline-none focus:bg-yellow-50 transition-all font-black shadow-[4px_4px_0_0_rgba(0,0,0,1)] active:translate-y-1 active:shadow-none resize-none`}
                    />
                    {errors.message && (
                      <div className="absolute top-full mt-1 left-0 z-20 flex items-center gap-1.5 bg-white border-2 border-red-500 text-red-600 rounded-md px-2 py-1 shadow-[2px_2px_0px_0px_rgba(0,0,0,0.1)] animate-in slide-in-from-top-1">
                        <div className="w-3.5 h-3.5 bg-red-500 text-white rounded-full flex items-center justify-center text-[8px] font-black border border-gray-900">!</div>
                        <span className="text-[10px] font-black">{errors.message}</span>
                      </div>
                    )}
                  </div>
                </div>

                {/* How can we help? */}
                <div className="pt-2">
                  <h3 className="text-base font-black text-gray-900 mb-3 uppercase tracking-tighter">{t.contact.helpTitle}</h3>
                  <div className="grid grid-cols-2 gap-2">
                    {[
                      { key: 'websiteDesign', label: t.contact.websiteDesign },
                      { key: 'uxDesign', label: t.contact.uxDesign },
                      { key: 'userResearch', label: t.contact.userResearch },
                      { key: 'contentCreation', label: t.contact.contentCreation },
                      { key: 'strategyConsulting', label: t.contact.strategyConsulting },
                      { key: 'other', label: t.contact.other },
                    ].map((option) => (
                      <label key={option.key} className="flex items-center gap-2 cursor-pointer group bg-white/50 border border-gray-900/10 p-2 rounded-lg hover:bg-white transition-colors">
                        <div className="relative flex items-center">
                          <input
                            type="checkbox"
                            checked={formData.helpOptions.includes(option.key)}
                            onChange={() => handleCheckboxChange(option.key)}
                            className="w-4 h-4 appearance-none border-2 border-gray-900 rounded checked:bg-gray-900 checked:border-gray-900 focus:outline-none cursor-pointer"
                            style={{
                              backgroundImage: formData.helpOptions.includes(option.key)
                                ? "url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' fill='white'%3E%3Cpath d='M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41z'/%3E%3C/svg%3E\")"
                                : 'none',
                              backgroundSize: 'contain',
                              backgroundRepeat: 'no-repeat',
                              backgroundPosition: 'center',
                            }}
                          />
                        </div>
                        <span className="text-gray-900 font-bold text-[10px] uppercase leading-none group-hover:text-gray-700">
                          {option.label}
                        </span>
                      </label>
                    ))}
                  </div>
                </div>

                {submitError && (
                  <p className="text-red-500 text-xs font-black text-center italic">Failed to send. Please try again or email us directly.</p>
                )}

                {/* Submit Button */}
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className={`w-full bg-gray-900 text-white font-black py-4 rounded-2xl transition-all text-sm uppercase tracking-widest shadow-[4px_4px_0px_0px_#FCD34D] h-16 border-2 border-gray-900 mt-4 
                    ${isSubmitting ? 'opacity-50 animate-pulse bg-gray-700' : 'hover:bg-emerald-600 hover:shadow-none hover:translate-x-1 hover:translate-y-1'}`}
                  style={{ fontFamily: "'Sora', sans-serif" }}
                >
                  {isSubmitting ? 'SENDING...' : t.contact.submitButton}
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
      <style>{`
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

        /* 1. Slide into corner */
        @keyframes slide-into-corner {
          0% { transform: translate(100%, 100%) rotate(10deg); opacity: 0; }
          100% { transform: translate(40%, 45%) rotate(0deg); opacity: 1; }
        }

        /* 2. Glide from corner to panels */
        @keyframes glide-to-panels {
          0% { transform: translate(40%, 45%) rotate(0deg); }
          100% { transform: translate(-10%, 25%) rotate(-5deg); }
        }

        /* 3. Idle float near panels */
        @keyframes float-near-panels {
          0%, 100% { transform: translate(-10%, 25%) translateY(0) rotate(-5deg); }
          50% { transform: translate(-10%, 25%) translateY(-15px) rotate(-2deg); }
        }

        .dog-entrance {
          animation: 
            slide-into-corner 1.2s cubic-bezier(0.34, 1.56, 0.64, 1) forwards,
            glide-to-panels 1.5s cubic-bezier(0.45, 0, 0.55, 1) forwards 2.5s,
            float-near-panels 6s ease-in-out infinite 4s;
        }
      `}</style>
    </div>
  );
}

