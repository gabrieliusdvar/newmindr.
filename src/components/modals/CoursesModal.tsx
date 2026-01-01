import { useEffect } from 'react';
import { X } from 'lucide-react';
import { useLanguage } from '../../contexts/LanguageContext';

interface CoursesModalProps {
    isOpen: boolean;
    onClose: () => void;
}

export default function CoursesModal({ isOpen, onClose }: CoursesModalProps) {
    const { t } = useLanguage();

    useEffect(() => {
        if (isOpen) {
            document.body.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = 'unset';
        }
        return () => {
            document.body.style.overflow = 'unset';
        };
    }, [isOpen]);

    if (!isOpen) return null;

    return (
        <div
            className="fixed inset-0 z-[100] flex items-center justify-center bg-black/40 p-4 animate-in fade-in duration-200 backdrop-blur-sm"
            onClick={onClose}
            style={{ willChange: 'opacity' }}
        >
            <div
                className="bg-white w-full max-w-6xl max-h-[85vh] rounded-3xl border-4 border-gray-900 shadow-[12px_12px_0px_0px_rgba(0,0,0,1)] overflow-hidden flex flex-col relative animate-in zoom-in-95 duration-200"
                onClick={e => e.stopPropagation()}
                style={{ willChange: 'transform, opacity' }}
            >
                {/* Close Button */}
                {/* Close Button hit area */}
                <div className="absolute top-2 right-2 sm:top-4 sm:right-4 z-50 p-6 cursor-pointer group" onClick={onClose}>
                    <button
                        className="w-10 h-10 sm:w-12 sm:h-12 flex items-center justify-center bg-gray-100/80 hover:bg-gray-200 rounded-full transition-all group border-2 border-gray-900 shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] active:translate-y-1 active:shadow-none"
                        aria-label="Close modal"
                    >
                        <X className="w-5 h-5 sm:w-6 sm:h-6 text-gray-900 group-hover:rotate-90 transition-transform" />
                    </button>
                </div>

                <div className="overflow-y-auto p-8 md:p-12 [&::-webkit-scrollbar]:hidden [-ms-overflow-style:'none'] [scrollbar-width:'none']">
                    <div className="text-center mb-12">
                        <h2 className="text-4xl md:text-5xl font-black text-gray-900 mb-4 tracking-tight uppercase italic underline decoration-yellow-400 decoration-8 underline-offset-4" style={{ fontFamily: "'Outfit', sans-serif" }}>
                            {t.coursesModal.title}
                        </h2>
                        <p className="text-xl text-gray-600 max-w-2xl mx-auto font-bold">{t.coursesModal.subtitle}</p>
                    </div>

                    <div className="grid md:grid-cols-3 gap-8">
                        {/* Age Groups */}
                        {[
                            {
                                age: t.coursesModal.groups["8-12"].age,
                                theme: t.coursesModal.groups["8-12"].theme,
                                bg: "bg-yellow-300",
                                accent: "bg-yellow-400",
                                list: t.coursesModal.groups["8-12"].list
                            },
                            {
                                age: t.coursesModal.groups["13-16"].age,
                                theme: t.coursesModal.groups["13-16"].theme,
                                bg: "bg-blue-300",
                                accent: "bg-blue-400",
                                list: t.coursesModal.groups["13-16"].list
                            },
                            {
                                age: t.coursesModal.groups["17-19"].age,
                                theme: t.coursesModal.groups["17-19"].theme,
                                bg: "bg-purple-300",
                                accent: "bg-purple-400",
                                list: t.coursesModal.groups["17-19"].list
                            },
                        ].map((group, idx) => (
                            <div key={idx} className="space-y-6">
                                <div className={`${group.bg} border-4 border-gray-900 p-6 rounded-2xl text-center shadow-[6px_6px_0px_0px_rgba(0,0,0,1)] relative overflow-hidden group/age`}>
                                    <div className="absolute top-0 right-0 w-12 h-12 bg-white/30 rounded-bl-full translate-x-2 -translate-y-2 group-hover/age:translate-x-0 group-hover/age:translate-y-0 transition-transform duration-200"></div>
                                    <h3 className="text-3xl font-black text-gray-900 mb-1" style={{ fontFamily: "'Outfit', sans-serif" }}>{group.age}</h3>
                                    <p className="font-black text-gray-900/70 text-sm uppercase tracking-wider" style={{ fontFamily: "'Space Grotesk', sans-serif" }}>{group.theme}</p>
                                </div>
                                <ul className="space-y-3 pl-2">
                                    {group.list.map((course: string, i: number) => (
                                        <li key={i} className="flex items-start gap-3 group/item">
                                            <div className={`w-2 h-2 mt-1.5 ${group.accent} border-2 border-gray-900 rounded-full group-hover/item:scale-125 transition-transform shrink-0 shadow-[2px_2px_0px_0px_rgba(0,0,0,1)] duration-150`} style={{ willChange: 'transform' }} />
                                            <span className="text-gray-900 font-bold group-hover:text-black text-base leading-tight transition-colors duration-150">{course}</span>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
}
