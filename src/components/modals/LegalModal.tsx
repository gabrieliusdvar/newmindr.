import { useEffect } from 'react';
import { X } from 'lucide-react';
import { useLanguage } from '../../contexts/LanguageContext';

interface LegalModalProps {
    type: 'privacy' | 'terms' | null;
    onClose: () => void;
}

export default function LegalModal({ type, onClose }: LegalModalProps) {
    const { t } = useLanguage();

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

    const isPrivacy = type === 'privacy';
    const content = isPrivacy ? t.legal.privacy : t.legal.terms;

    return (
        <div
            className="fixed inset-0 z-[200] flex items-center justify-center bg-black animate-in fade-in duration-300"
            onClick={onClose}
        >
            {/* Sticky Header with Close Button */}
            <div className="absolute top-0 left-0 right-0 h-20 bg-black/80 backdrop-blur-md flex items-center justify-between px-8 z-50 border-b border-white/10">
                <h2 className="text-2xl font-black text-white uppercase italic tracking-tighter" style={{ fontFamily: "'Outfit', sans-serif" }}>
                    {content.title}
                </h2>
                {/* Close Button hit area */}
                <div className="absolute top-0 right-0 h-full flex items-center px-4 cursor-pointer group" onClick={onClose}>
                    <button
                        className="w-10 h-10 flex items-center justify-center bg-red-500 border-2 border-white rounded-full hover:bg-red-600 transition-all shadow-[4px_4px_0px_0px_rgba(255,255,255,0.3)] active:translate-y-1 active:shadow-none font-bold"
                    >
                        <X className="w-6 h-6 text-white" strokeWidth={3} />
                    </button>
                </div>
            </div>

            {/* Content Container */}
            <div className="w-full h-full overflow-y-auto pt-24 pb-20 px-6 md:px-12 lg:px-24">
                <div className="max-w-4xl mx-auto py-12">
                    <div className="space-y-12 text-[#fdfcf0] leading-relaxed" style={{ fontFamily: "'Space Grotesk', sans-serif" }}>
                        <section className="space-y-6">
                            <h1 className="text-5xl md:text-7xl font-black text-white uppercase italic mb-12 border-b-4 border-white pb-6">
                                {content.title}
                            </h1>
                            <p className="text-xl font-bold opacity-80">{content.lastUpdated}</p>
                            <p className={`text-lg ${!isPrivacy ? 'italic bg-white/5 p-6 rounded-2xl border border-white/10' : ''}`}>
                                {content.intro}
                            </p>
                        </section>

                        {content.sections.map((section: any, idx: number) => (
                            <section key={idx} className="space-y-4">
                                <h3 className="text-2xl font-black text-white uppercase">{section.title}</h3>
                                <p>{section.content}</p>
                                {section.list && (
                                    <ul className="list-disc pl-6 space-y-2 opacity-80">
                                        {section.list.map((item: string, itemIdx: number) => (
                                            <li key={itemIdx}>{item}</li>
                                        ))}
                                    </ul>
                                )}
                            </section>
                        ))}

                        <div className="pt-12 border-t border-white/10">
                            <p className="text-sm opacity-50">{content.footer}</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
