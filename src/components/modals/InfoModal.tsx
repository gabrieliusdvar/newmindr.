import { useState, useEffect } from 'react';
import { X, Check, Target, Trophy, Clock, Zap, MessageCircle, Facebook, Instagram, Youtube } from 'lucide-react';
import { useLanguage } from '../../contexts/LanguageContext';

interface InfoModalProps {
    type: 'about' | 'programs' | 'pricing' | 'contact' | null;
    onClose: () => void;
}

export default function InfoModal({ type, onClose }: InfoModalProps) {
    const [isYearly, setIsYearly] = useState(true);
    const { t, language } = useLanguage();

    useEffect(() => {
        if (type) {
            document.body.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = 'unset';
        }
        return () => {
            document.body.style.overflow = 'unset';
        };
    }, [type]);

    if (!type) return null;

    const content = {
        about: {
            title: t.infoModal.about.title,
            subtitle: t.infoModal.about.subtitle,
            color: "bg-emerald-400",
            icon: <Target className="w-8 h-8" />,
            body: (
                <div className="space-y-6">
                    <p className="text-lg font-bold text-gray-700 leading-relaxed">
                        {t.infoModal.about.intro}
                    </p>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div className="p-4 bg-emerald-50 border-2 border-gray-900 rounded-xl shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]">
                            <h4 className="font-black text-gray-900 mb-2 uppercase">{t.infoModal.about.missionTitle}</h4>
                            <p className="text-sm font-bold text-gray-600">{t.infoModal.about.missionDesc}</p>
                        </div>
                        <div className="p-4 bg-yellow-50 border-2 border-gray-900 rounded-xl shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]">
                            <h4 className="font-black text-gray-900 mb-2 uppercase">{t.infoModal.about.methodTitle}</h4>
                            <p className="text-sm font-bold text-gray-600">{t.infoModal.about.methodDesc}</p>
                        </div>
                    </div>
                    <p className="text-gray-600 font-medium">{t.infoModal.about.footer}</p>
                </div>
            )
        },
        programs: {
            title: t.infoModal.programs.title,
            subtitle: t.infoModal.programs.subtitle,
            color: "bg-blue-400",
            icon: <Trophy className="w-8 h-8" />,
            body: (
                <div className="space-y-6">
                    <div className="space-y-4">
                        {[
                            { title: t.infoModal.programs.youngExplorers, desc: t.infoModal.programs.youngExplorersDesc, color: "text-yellow-600" },
                            { title: t.infoModal.programs.teenInnovators, desc: t.infoModal.programs.teenInnovatorsDesc, color: "text-blue-600" },
                            { title: t.infoModal.programs.futureLeaders, desc: t.infoModal.programs.futureLeadersDesc, color: "text-purple-600" }
                        ].map((p, idx) => (
                            <div key={idx} className="flex gap-4 items-start p-4 hover:bg-gray-50 rounded-xl transition-colors border-2 border-transparent hover:border-gray-900">
                                <div className="w-8 h-8 bg-gray-900 rounded-lg flex-shrink-0 flex items-center justify-center text-white">
                                    <Check className="w-5 h-5" />
                                </div>
                                <div>
                                    <h4 className={`font-black text-lg ${p.color}`}>{p.title}</h4>
                                    <p className="text-sm font-bold text-gray-600">{p.desc}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            )
        },
        pricing: {
            title: t.infoModal.pricing.title,
            subtitle: t.infoModal.pricing.subtitle,
            color: "bg-pink-400",
            icon: <Zap className="w-8 h-8" />,
            body: (
                <div className="space-y-6">
                    {/* Toggle Switch */}
                    <div className="flex items-center justify-center gap-4 mb-4">
                        <span
                            onClick={() => setIsYearly(false)}
                            className={`text-sm font-bold cursor-pointer transition-colors ${!isYearly ? 'text-gray-900' : 'text-gray-400 hover:text-gray-600'}`}
                            style={{ fontFamily: "'Space Grotesk', sans-serif" }}
                        >
                            {t.infoModal.pricing.monthly}
                        </span>
                        <button
                            onClick={() => setIsYearly(!isYearly)}
                            className="relative w-12 h-6 bg-gray-200 border-2 border-gray-900 rounded-full transition-colors shadow-[2px_2px_0px_0px_rgba(0,0,0,1)] !min-w-0 !min-h-0"
                        >
                            <div
                                className={`absolute top-0.5 w-4 h-4 bg-gray-900 rounded-full transition-all duration-300 ${isYearly ? 'left-6' : 'left-1'}`}
                            />
                        </button>
                        <span
                            onClick={() => setIsYearly(true)}
                            className={`text-sm font-bold cursor-pointer transition-colors ${isYearly ? 'text-gray-900' : 'text-gray-400 hover:text-gray-600'}`}
                            style={{ fontFamily: "'Space Grotesk', sans-serif" }}
                        >
                            {t.infoModal.pricing.yearly}
                        </span>
                        <div className="bg-yellow-400 border-2 border-gray-900 text-[10px] px-2 py-0.5 font-black rounded-lg uppercase animate-bounce" style={{ fontFamily: "'Space Grotesk', sans-serif" }}>{t.infoModal.pricing.save}</div>
                    </div>

                    <div className="grid gap-4">
                        <div className="p-6 border-4 border-gray-900 rounded-2xl bg-white shadow-[6px_6px_0px_0px_rgba(0,0,0,1)]">
                            <div className="flex justify-between items-center mb-4">
                                <h4 className="text-2xl font-black">{t.infoModal.pricing.basic.title}</h4>
                                <span className="text-3xl font-black text-pink-500">€{isYearly ? '10' : '12'}<span className="text-sm">/mo</span></span>
                            </div>
                            <p className="font-bold text-gray-600 mb-4">{t.infoModal.pricing.basic.desc}</p>
                            <ul className="space-y-2">
                                <li className="flex gap-2 items-center text-sm font-bold text-gray-700 italic"><Check className="w-4 h-4" strokeWidth={3} /> {t.infoModal.pricing.basic.feature1}</li>
                                <li className="flex gap-2 items-center text-sm font-bold text-gray-700 italic"><Check className="w-4 h-4" strokeWidth={3} /> {t.infoModal.pricing.basic.feature2}</li>
                            </ul>
                        </div>
                        <div className="px-6 pb-6 pt-12 border-4 border-gray-900 rounded-2xl bg-emerald-100 shadow-[6px_6px_0px_0px_rgba(0,0,0,1)] relative overflow-hidden">
                            <div className="absolute top-3 right-3 bg-yellow-400 border-2 border-gray-900 text-[10px] px-2 py-1 font-black rounded-lg uppercase shadow-[2px_2px_0px_0px_rgba(0,0,0,1)]" style={{ fontFamily: "'Space Grotesk', sans-serif" }}>{t.infoModal.pricing.pro.badge}</div>
                            <div className="flex justify-between items-center mb-4">
                                <h4 className="text-2xl font-black">{t.infoModal.pricing.pro.title}</h4>
                                <span className="text-3xl font-black text-emerald-600">€{isYearly ? '45' : '56'}<span className="text-sm">/mo</span></span>
                            </div>
                            <p className="font-bold text-gray-900/70 mb-4">{t.infoModal.pricing.pro.desc}</p>
                            <ul className="space-y-2">
                                <li className="flex gap-2 items-center text-sm font-black text-gray-900 italic"><Check className="w-4 h-4" strokeWidth={3} /> {t.infoModal.pricing.pro.feature1}</li>
                                <li className="flex gap-2 items-center text-sm font-black text-gray-900 italic"><Check className="w-4 h-4" strokeWidth={3} /> {t.infoModal.pricing.pro.feature2}</li>
                            </ul>
                        </div>
                    </div>
                </div>
            )
        },
        contact: {
            title: t.infoModal.contact.title,
            subtitle: t.infoModal.contact.subtitle,
            color: "bg-yellow-400",
            icon: <MessageCircle className="w-8 h-8" />,
            body: (
                <div className="space-y-8">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                        <div className="space-y-4">
                            <h4 className="text-xl font-black uppercase italic text-gray-900 underline decoration-yellow-400">{t.infoModal.contact.directContact}</h4>
                            <div className="space-y-2">
                                <a href="mailto:hello@newmindr.com" className="flex items-center gap-3 font-bold text-gray-700 hover:text-gray-900 transition-colors">
                                    <div className="w-8 h-8 bg-gray-900 rounded-lg flex items-center justify-center text-white"><Clock className="w-4 h-4" /></div>
                                    hello@newmindr.com
                                </a>
                            </div>
                        </div>
                        <div className="space-y-4 text-center md:text-left">
                            <h4 className="text-xl font-black uppercase italic text-gray-900 underline decoration-blue-400">{t.infoModal.contact.ourStudio}</h4>
                            <p className="font-bold text-gray-600">
                                {t.infoModal.contact.address}
                            </p>
                        </div>
                    </div>
                    <div className="p-6 bg-gray-900 rounded-2xl text-white shadow-[8px_8px_0px_0px_rgba(251,191,36,1)]">
                        <h4 className="text-lg font-black mb-2 tracking-widest uppercase">{t.infoModal.contact.visitSocial}</h4>
                        <p className="text-sm font-bold text-white/60 mb-4">{t.infoModal.contact.socialDesc}</p>
                        <div className="flex gap-4">
                            {[
                                { icon: Facebook, color: 'hover:bg-indigo-600', url: 'https://www.facebook.com/newmindr' },
                                { icon: Instagram, color: 'hover:bg-pink-500', url: language === 'lt' ? 'https://www.instagram.com/newmindr.lt/' : 'https://www.instagram.com/newmindr' },
                                { icon: Youtube, color: 'hover:bg-red-600', url: language === 'lt' ? 'https://www.youtube.com/@newmindr_LT' : 'https://www.youtube.com/@newmindr' },
                                {
                                    icon: (props: any) => (
                                        <svg viewBox="0 0 24 24" fill="currentColor" {...props}>
                                            <path d="M12.525.02c1.31-.02 2.61-.01 3.91-.02.08 1.53.63 3.09 1.75 4.17 1.12 1.11 2.7 1.62 4.24 1.79v4.03c-1.44-.17-2.89-.6-4.13-1.46-.12 3.43-.2 6.87-.58 10.28-.41 3.22-3.12 5.76-6.36 5.95-3.32.22-6.52-2.07-7.23-5.3-.9-3.92 1.48-8 5.42-8.59.88-.13 1.77-.11 2.65.04V14.5c-1.22-.32-2.58-.1-3.53.7-.95.8-1.39 2.1-1.07 3.29.32 1.19 1.4 2.06 2.62 2.14 1.22.08 2.4-.6 2.87-1.72.33-.78.36-1.63.36-2.47V0z" />
                                        </svg>
                                    ),
                                    color: 'hover:bg-black',
                                    url: 'https://www.tiktok.com/@newmindr'
                                },
                            ].map((s, idx) => (
                                <a
                                    key={idx}
                                    href={s.url}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className={`w-12 h-12 border-4 border-white/20 rounded-xl flex items-center justify-center font-black group transition-all cursor-pointer shadow-[4px_4px_0px_0px_rgba(255,255,255,0.1)] active:translate-y-1 active:shadow-none hover:border-white ${s.color}`}
                                >
                                    <s.icon className="w-5 h-5 text-white transition-colors" />
                                </a>
                            ))}
                        </div>
                    </div>
                </div>
            )
        }
    };

    const current = content[type as keyof typeof content];

    return (
        <div
            className="fixed inset-0 z-[100] flex items-center justify-center bg-black/40 p-4 animate-in fade-in duration-200 backdrop-blur-sm"
            onClick={onClose}
        >
            <div
                className="bg-white w-full max-w-2xl max-h-[90vh] rounded-3xl border-4 border-gray-900 shadow-[12px_12px_0px_0px_rgba(0,0,0,1)] flex flex-col relative animate-in zoom-in-95 duration-200"
                onClick={e => e.stopPropagation()}
            >
                {/* Header Strip */}
                <div className={`h-24 ${current.color} border-b-4 border-gray-900 flex items-center px-8 shrink-0 relative overflow-hidden`}>
                    <div className="absolute top-0 right-0 w-32 h-32 bg-white/20 rounded-bl-full translate-x-8 -translate-y-8"></div>
                    <div className="w-14 h-14 bg-white border-2 border-gray-900 rounded-2xl flex items-center justify-center shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] z-10 shrink-0">
                        {current.icon}
                    </div>
                    <div className="ml-6 z-10">
                        <h2 className="text-3xl font-black text-gray-900 uppercase italic leading-none" style={{ fontFamily: "'Outfit', sans-serif" }}>{current.title}</h2>
                        <p className="text-gray-900/60 font-bold text-sm uppercase tracking-widest mt-1" style={{ fontFamily: "'Space Grotesk', sans-serif" }}>{current.subtitle}</p>
                    </div>
                </div>

                {/* Close Button hit area */}
                <div className="absolute top-2 right-2 sm:top-4 sm:right-4 z-50 p-6 cursor-pointer group" onClick={onClose}>
                    <button
                        className="w-10 h-10 flex items-center justify-center bg-red-500 border-2 border-gray-900 rounded-full hover:bg-red-600 transition-all shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] active:translate-y-1 active:shadow-none font-bold"
                    >
                        <X className="w-6 h-6 text-white" strokeWidth={3} />
                    </button>
                </div>

                {/* Scrollable Content */}
                <div className="overflow-y-auto p-10 md:p-12 [&::-webkit-scrollbar]:hidden [-ms-overflow-style:'none'] [scrollbar-width:'none']">
                    {current.body}

                    <div className="mt-12 pt-8 border-t-2 border-gray-100 flex justify-center">
                        <button
                            onClick={onClose}
                            className="px-8 py-3 bg-gray-900 text-white font-black rounded-xl hover:bg-emerald-500 transition-all shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] active:translate-y-1 active:shadow-none text-sm uppercase tracking-widest"
                            style={{ fontFamily: "'Sora', sans-serif" }}
                        >
                            {t.infoModal.gotIt}
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
}
