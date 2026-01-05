import { useState } from 'react';
import { Link } from 'react-router-dom';
import { Mail, CheckCircle, ArrowLeft, Heart } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';

export default function Unsubscribe() {
    const { language } = useLanguage();
    const [email, setEmail] = useState('');
    const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');
    const [errorMessage, setErrorMessage] = useState('');

    const content = {
        en: {
            title: "Unsubscribe",
            subtitle: "We're sad to see you go, but we understand.",
            emailLabel: "Enter your email address",
            emailPlaceholder: "your@email.com",
            button: "Unsubscribe",
            loading: "Processing...",
            successTitle: "You've been unsubscribed",
            successMessage: "You will no longer receive newsletters from us. If this was a mistake, you can always re-subscribe from our website.",
            errorRequired: "Please enter your email address",
            errorInvalid: "Please enter a valid email address",
            errorGeneral: "Something went wrong. Please try again.",
            backHome: "Back to Homepage",
            note: "Note: This only unsubscribes you from marketing emails. Important account-related emails will still be sent."
        },
        lt: {
            title: "Atsisakyti prenumeratos",
            subtitle: "Liūdna jus paleisti, bet suprantame.",
            emailLabel: "Įveskite savo el. pašto adresą",
            emailPlaceholder: "jusu@email.com",
            button: "Atsisakyti",
            loading: "Apdorojama...",
            successTitle: "Prenumerata atšaukta",
            successMessage: "Jūs nebegausite naujienlaiškių iš mūsų. Jei tai buvo klaida, visada galite vėl užsiprenumeruoti mūsų svetainėje.",
            errorRequired: "Įveskite savo el. pašto adresą",
            errorInvalid: "Įveskite teisingą el. pašto adresą",
            errorGeneral: "Kažkas nepavyko. Bandykite dar kartą.",
            backHome: "Grįžti į pagrindinį",
            note: "Pastaba: Tai atšaukia tik rinkodaros laiškus. Svarbūs pranešimai apie paskyrą bus siunčiami."
        },
        ru: {
            title: "Отписаться",
            subtitle: "Нам грустно вас отпускать, но мы понимаем.",
            emailLabel: "Введите ваш email адрес",
            emailPlaceholder: "ваш@email.com",
            button: "Отписаться",
            loading: "Обработка...",
            successTitle: "Вы отписаны",
            successMessage: "Вы больше не будете получать рассылку от нас. Если это была ошибка, вы всегда можете подписаться снова на нашем сайте.",
            errorRequired: "Введите ваш email адрес",
            errorInvalid: "Введите правильный email адрес",
            errorGeneral: "Что-то пошло не так. Попробуйте снова.",
            backHome: "Вернуться на главную",
            note: "Примечание: Это отменяет только маркетинговые письма. Важные уведомления об аккаунте будут отправляться."
        }
    };

    const t = content[language as keyof typeof content] || content.en;

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setErrorMessage('');

        if (!email.trim()) {
            setErrorMessage(t.errorRequired);
            return;
        }

        if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
            setErrorMessage(t.errorInvalid);
            return;
        }

        setStatus('loading');

        try {
            // Simulate API call - in production, this would call your backend
            await new Promise(resolve => setTimeout(resolve, 1500));

            // Here you would typically call your unsubscribe API
            // For example: await fetch('/api/unsubscribe', { method: 'POST', body: JSON.stringify({ email }) });

            console.log('Unsubscribe request for:', email);
            setStatus('success');
        } catch (error) {
            setStatus('error');
            setErrorMessage(t.errorGeneral);
        }
    };

    if (status === 'success') {
        return (
            <div className="min-h-screen bg-gradient-to-br from-gray-900 to-gray-800 flex items-center justify-center p-6">
                <div className="max-w-md w-full">
                    <div className="bg-white border-4 border-black rounded-3xl p-10 text-center shadow-[12px_12px_0_0_rgba(16,185,129,0.5)]">
                        <div className="w-20 h-20 bg-emerald-100 rounded-full flex items-center justify-center mx-auto mb-6 border-4 border-emerald-500">
                            <CheckCircle className="w-10 h-10 text-emerald-600" strokeWidth={2.5} />
                        </div>
                        <h1 className="text-3xl font-black text-gray-900 mb-4 uppercase tracking-tight">
                            {t.successTitle}
                        </h1>
                        <p className="text-gray-600 font-medium mb-8 leading-relaxed">
                            {t.successMessage}
                        </p>
                        <Link
                            to="/"
                            className="inline-flex items-center gap-2 bg-gray-900 text-white font-black py-4 px-8 rounded-xl hover:bg-emerald-500 transition-all uppercase tracking-widest text-sm"
                        >
                            <ArrowLeft className="w-4 h-4" />
                            {t.backHome}
                        </Link>
                    </div>
                </div>
            </div>
        );
    }

    return (
        <div className="min-h-screen bg-gradient-to-br from-gray-900 to-gray-800 flex items-center justify-center p-6">
            <div className="max-w-md w-full">
                {/* Card */}
                <div className="bg-white border-4 border-black rounded-3xl overflow-hidden shadow-[12px_12px_0_0_rgba(0,0,0,0.3)]">
                    {/* Header */}
                    <div className="bg-red-400 border-b-4 border-black p-8 text-center">
                        <div className="w-16 h-16 bg-white border-4 border-black rounded-2xl flex items-center justify-center mx-auto mb-4 shadow-[4px_4px_0_0_rgba(0,0,0,1)]">
                            <Mail className="w-8 h-8 text-gray-900" />
                        </div>
                        <h1 className="text-3xl font-black text-gray-900 uppercase tracking-tight">
                            {t.title}
                        </h1>
                        <p className="text-gray-800 font-bold mt-2">
                            {t.subtitle}
                        </p>
                    </div>

                    {/* Form */}
                    <form onSubmit={handleSubmit} className="p-8 space-y-6">
                        <div>
                            <label className="block text-xs font-black uppercase tracking-widest text-gray-500 mb-2">
                                {t.emailLabel}
                            </label>
                            <input
                                type="email"
                                value={email}
                                onChange={(e) => {
                                    setEmail(e.target.value);
                                    setErrorMessage('');
                                }}
                                placeholder={t.emailPlaceholder}
                                className={`w-full bg-white border-4 ${errorMessage ? 'border-red-500' : 'border-gray-900'} rounded-xl px-4 py-4 text-lg font-bold text-gray-900 focus:outline-none focus:border-emerald-500 transition-colors shadow-[4px_4px_0_0_rgba(0,0,0,1)]`}
                            />
                            {errorMessage && (
                                <p className="text-red-500 text-sm font-bold mt-2">{errorMessage}</p>
                            )}
                        </div>

                        <button
                            type="submit"
                            disabled={status === 'loading'}
                            className={`w-full py-4 border-4 border-gray-900 rounded-xl font-black text-lg uppercase tracking-widest transition-all shadow-[4px_4px_0_0_rgba(0,0,0,1)] hover:translate-x-1 hover:translate-y-1 hover:shadow-none
                                ${status === 'loading'
                                    ? 'bg-gray-300 text-gray-500 cursor-not-allowed'
                                    : 'bg-red-400 text-gray-900 hover:bg-red-500'
                                }`}
                        >
                            {status === 'loading' ? t.loading : t.button}
                        </button>

                        <p className="text-xs text-gray-500 text-center font-medium leading-relaxed">
                            {t.note}
                        </p>
                    </form>

                    {/* Footer */}
                    <div className="bg-gray-100 border-t-4 border-gray-900 p-6 text-center">
                        <Link
                            to="/"
                            className="inline-flex items-center gap-2 text-gray-900 font-bold hover:text-emerald-600 transition-colors"
                        >
                            <Heart className="w-4 h-4 text-red-500 fill-red-500" />
                            {t.backHome}
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    );
}
