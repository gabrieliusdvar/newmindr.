import { useState, useEffect } from 'react';
import { supabase } from '../utils/supabase';
import { useNavigate } from 'react-router-dom';
import { Lock, ArrowRight } from 'lucide-react';

export default function UpdatePassword() {
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState<string | null>(null);
    const [success, setSuccess] = useState(false);
    const navigate = useNavigate();

    useEffect(() => {
        // Check if the user is authenticated (Recovery link logs them in)
        const checkSession = async () => {
            const { data: { session } } = await supabase.auth.getSession();
            if (!session) {
                // If no session, they might have clicked a link but the hash wasn't processed yet or it is invalid.
                // We'll let them try anyway, but update might fail if not logged in.
            }
        };
        checkSession();

        // Listen for auth state changes (e.g. recovery login completing)
        const { data: authListener } = supabase.auth.onAuthStateChange((event) => {
            if (event === 'PASSWORD_RECOVERY') {
                // User is here from recovery link
            }
        });

        return () => {
            authListener.subscription.unsubscribe();
        };
    }, []);

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setError(null);

        if (password !== confirmPassword) {
            setError("Passwords do not match");
            return;
        }

        if (password.length < 6) {
            setError("Password must be at least 6 characters");
            return;
        }

        setLoading(true);

        try {
            const { error } = await supabase.auth.updateUser({ password: password });
            if (error) throw error;
            setSuccess(true);
            setTimeout(() => {
                navigate('/'); // Redirect to home or login
            }, 3000);
        } catch (err: any) {
            setError(err.message);
        } finally {
            setLoading(false);
        }
    };

    if (success) {
        return (
            <div className="min-h-screen bg-gray-50 flex flex-col items-center justify-center p-4">
                <div className="bg-white p-8 rounded-2xl shadow-xl max-w-md w-full text-center border-2 border-emerald-500">
                    <div className="w-16 h-16 bg-emerald-100 rounded-full flex items-center justify-center mx-auto mb-4">
                        <Lock className="w-8 h-8 text-emerald-600" />
                    </div>
                    <h2 className="text-2xl font-black mb-2 font-space">PASSWORD UPDATED</h2>
                    <p className="text-gray-600 mb-6 font-medium">Your password has been securely updated. Redirecting you...</p>
                </div>
            </div>
        );
    }

    return (
        <div className="min-h-screen bg-gray-50 flex flex-col items-center justify-center p-4 font-inter">
            <div className="bg-white p-8 rounded-2xl shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] border-4 border-black max-w-md w-full">
                <div className="text-center mb-8">
                    <h1 className="text-3xl font-black mb-2 uppercase tracking-tight font-space">New Password</h1>
                    <p className="text-gray-600 font-medium">Enter your new secure password below.</p>
                </div>

                {error && (
                    <div className="bg-red-50 border-2 border-red-500 text-red-700 p-4 rounded-xl mb-6 font-bold text-sm">
                        {error}
                    </div>
                )}

                <form onSubmit={handleSubmit} className="space-y-6">
                    <div>
                        <label className="block text-sm font-black uppercase tracking-wider mb-2">New Password</label>
                        <input
                            type="password"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            className="w-full bg-gray-50 border-2 border-black rounded-xl px-4 py-3 font-medium focus:outline-none focus:ring-4 focus:ring-purple-500/20 focus:border-purple-600 transition-all"
                            placeholder="••••••••"
                            required
                        />
                    </div>

                    <div>
                        <label className="block text-sm font-black uppercase tracking-wider mb-2">Confirm Password</label>
                        <input
                            type="password"
                            value={confirmPassword}
                            onChange={(e) => setConfirmPassword(e.target.value)}
                            className="w-full bg-gray-50 border-2 border-black rounded-xl px-4 py-3 font-medium focus:outline-none focus:ring-4 focus:ring-purple-500/20 focus:border-purple-600 transition-all"
                            placeholder="••••••••"
                            required
                        />
                    </div>

                    <button
                        type="submit"
                        disabled={loading}
                        className="w-full bg-black text-white py-4 rounded-xl font-black uppercase tracking-wider hover:bg-purple-600 transition-all transform hover:-translate-y-1 active:translate-y-0 disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2 group shadow-[4px_4px_0px_0px_rgba(139,92,246,1)]"
                    >
                        {loading ? 'Updating...' : 'Update Password'}
                        {!loading && <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />}
                    </button>
                </form>
            </div>
        </div>
    );
}
