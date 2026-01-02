import { useState, useEffect } from 'react';
import { Instagram, Youtube, Facebook, Share2, MessageCircle, Heart, ExternalLink, Loader2, Play, Camera, Globe } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';

interface BlogPost {
    id: number;
    platform: 'instagram' | 'youtube' | 'tiktok' | 'twitter' | 'facebook';
    title: string;
    content: string;
    image: string;
    date: string;
    likes: string;
    comments: string;
    url: string;
}

export default function Blog() {
    const { t, language } = useLanguage();
    const [activeCategory, setActiveCategory] = useState('all');
    const [isScanning, setIsScanning] = useState(true);

    // Get posts from translations
    const posts: BlogPost[] = (t.blog?.posts || []) as BlogPost[];

    useEffect(() => {
        const timer = setTimeout(() => setIsScanning(false), 2000);
        return () => clearTimeout(timer);
    }, []);

    const filteredPosts = activeCategory === 'all'
        ? posts
        : posts.filter(p => p.platform === activeCategory);

    const categories = [
        { id: 'all', label: language === 'ru' ? 'ВСЯ ЛЕНТА' : 'THE WHOLE FEED', icon: Globe },
        { id: 'instagram', label: 'INSTAGRAM', icon: Instagram },
        { id: 'youtube', label: 'YOUTUBE', icon: Youtube },
        { id: 'tiktok', label: 'TIKTOK', icon: Camera },
        { id: 'facebook', label: 'FACEBOOK', icon: Facebook },
    ];

    return (
        <div className="min-h-screen bg-white" style={{ backgroundImage: 'radial-gradient(#e5e7eb 1px, transparent 1px)', backgroundSize: '24px 24px' }}>
            {/* Blog Hero */}
            <section className="pt-40 pb-24 bg-gray-950 relative overflow-hidden">
                {/* Animated Grid Background */}
                <div className="absolute inset-0 opacity-20" style={{
                    backgroundImage: 'radial-gradient(circle at 2px 2px, #374151 1px, transparent 0)',
                    backgroundSize: '40px 40px'
                }}></div>

                {/* Scanning Lines */}
                <div className="absolute inset-0 pointer-events-none overflow-hidden opacity-20">
                    <div className="scan-line w-full h-[2px] bg-emerald-500/50 absolute top-0 shadow-[0_0_15px_#10b981]"></div>
                </div>

                <div className="container mx-auto px-6 relative z-10 text-center">
                    <div className="max-w-5xl mx-auto">
                        <div className="inline-flex items-center gap-3 bg-white border-4 border-gray-900 px-6 py-2.5 rounded-2xl mb-12 shadow-[6px_6px_0_0_#FCD34D] -rotate-1 animate-float">
                            <div className={`w-3 h-3 rounded-full ${isScanning ? 'bg-yellow-400 animate-pulse' : 'bg-emerald-400 shadow-[0_0_12px_#10b981]'}`}></div>
                            <span className="text-gray-900 text-xs font-black uppercase tracking-widest leading-none" style={{ fontFamily: "'Space Grotesk', sans-serif" }}>
                                {isScanning ? t.blog?.scanning : t.blog?.pulse}
                            </span>
                        </div>

                        <div className="relative group">
                            {/* Floating Tech Accents */}
                            <div className="hidden lg:block absolute -top-12 -left-12 p-3 bg-gray-900 border-2 border-emerald-500 rounded-xl text-emerald-500 font-mono text-[10px] animate-float delay-100 z-20 shadow-[4px_4px_0_0_#10b981]">
                                <Globe className="w-4 h-4 mb-1" /> {t.blog?.activeFeed}
                            </div>
                            <div className="hidden lg:block absolute -bottom-8 -right-8 p-3 bg-gray-900 border-2 border-purple-500 rounded-xl text-purple-500 font-mono text-[10px] animate-float delay-300 z-20 shadow-[4px_4px_0_0_#a855f7]">
                                <Share2 className="w-4 h-4 mb-1" /> {t.blog?.distributed}
                            </div>

                            <h1
                                className="text-8xl md:text-[13rem] font-black text-white mb-8 uppercase tracking-tighter leading-none select-none"
                                style={{
                                    fontFamily: "'Outfit', sans-serif",
                                    textShadow: '8px 8px 0px #10b981'
                                }}
                            >
                                {t.blog?.title}<span className="inline-block w-[0.14em] h-[0.14em] bg-emerald-400 ml-4 mb-[0.15em]"></span>
                            </h1>
                        </div>

                        <p className="text-gray-400 text-xl md:text-2xl font-medium max-w-3xl mx-auto leading-relaxed border-l-4 border-emerald-500/30 pl-8" style={{ fontFamily: "'Inter', sans-serif" }}>
                            {t.blog?.subtitle}
                        </p>
                    </div>
                </div>

                {/* Ambient glow */}
                <div className="absolute top-1/4 -left-20 w-96 h-96 bg-emerald-500/10 rounded-full blur-[120px] animate-pulse"></div>
                <div className="absolute bottom-1/4 -right-20 w-96 h-96 bg-purple-500/10 rounded-full blur-[120px] animate-pulse delay-700"></div>
            </section>

            {/* Filter Bar */}
            <div className="sticky top-[76px] z-40 bg-white/80 backdrop-blur-md border-y-4 border-gray-900">
                <div className="container mx-auto px-6 overflow-x-auto">
                    <div className="flex items-center justify-center gap-4 py-4 min-w-max">
                        {categories.map((cat) => (
                            <button
                                key={cat.id}
                                onClick={() => setActiveCategory(cat.id)}
                                className={`flex items-center gap-2 px-6 py-2.5 rounded-xl border-4 border-gray-900 font-black text-xs transition-all hover:-translate-y-1 active:translate-y-0 uppercase tracking-widest ${activeCategory === cat.id
                                    ? 'bg-yellow-400 shadow-[6px_6px_0_0_#000]'
                                    : 'bg-white hover:bg-gray-50'
                                    }`}
                                style={{ fontFamily: "'Sora', sans-serif" }}
                            >
                                <cat.icon className="w-4 h-4" />
                                {cat.label}
                            </button>
                        ))}
                    </div>
                </div>
            </div>

            {/* Feed Grid */}
            <section className="py-20">
                <div className="container mx-auto px-6">
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
                        {filteredPosts.map((post, i) => (
                            <div
                                key={post.id}
                                className="group bg-white border-4 border-gray-900 rounded-[2.5rem] overflow-hidden shadow-[12px_12px_0_0_rgba(0,0,0,1)] hover:shadow-none hover:translate-x-1 hover:translate-y-1 transition-all"
                                style={{ animationDelay: `${i * 0.1}s` }}
                            >
                                {/* Post Media */}
                                <div className="relative h-64 overflow-hidden border-b-4 border-gray-900">
                                    <img
                                        src={post.image}
                                        alt={post.title}
                                        className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                                    />
                                    <div className="absolute top-4 left-4">
                                        <div className={`flex items-center gap-2 px-3 py-1.5 rounded-xl border-2 border-gray-900 shadow-[3px_3px_0_0_rgba(0,0,0,1)] text-[10px] font-black uppercase text-white ${post.platform === 'instagram' ? 'bg-gradient-to-tr from-yellow-400 via-red-500 to-purple-600' :
                                            post.platform === 'youtube' ? 'bg-red-600' :
                                                post.platform === 'tiktok' ? 'bg-black' :
                                                    'bg-blue-600'
                                            }`} style={{ fontFamily: "'Space Grotesk', sans-serif" }}>
                                            {post.platform === 'instagram' && <Instagram className="w-3 h-3" />}
                                            {post.platform === 'youtube' && <Youtube className="w-3 h-3" />}
                                            {post.platform === 'tiktok' && <Camera className="w-3 h-3" />}
                                            {post.platform === 'facebook' && <Facebook className="w-3 h-3" />}
                                            {post.platform}
                                        </div>
                                    </div>
                                    {post.platform === 'youtube' && (
                                        <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                                            <div className="w-16 h-16 bg-white border-4 border-gray-900 rounded-full flex items-center justify-center shadow-[4px_4px_0_0_rgba(0,0,0,1)]">
                                                <Play className="w-6 h-6 text-gray-900 fill-gray-900 ml-1" />
                                            </div>
                                        </div>
                                    )}
                                </div>

                                {/* Content */}
                                <div className="p-8">
                                    <div className="flex items-center justify-between mb-4">
                                        <span className="text-[10px] font-black text-gray-400 uppercase tracking-widest">{post.date}</span>
                                        <button className="w-8 h-8 bg-gray-50 border-2 border-gray-900 rounded-lg flex items-center justify-center text-gray-400 hover:text-gray-900 hover:bg-emerald-400 transition-all shadow-[2px_2px_0_0_rgba(0,0,0,1)]">
                                            <Share2 className="w-4 h-4" />
                                        </button>
                                    </div>
                                    <h3
                                        className="text-2xl font-black text-gray-900 mb-4 leading-tight group-hover:text-emerald-600 transition-colors"
                                        style={{ fontFamily: "'Outfit', sans-serif" }}
                                    >
                                        {post.title}
                                    </h3>
                                    <p className="text-gray-600 font-medium text-sm leading-relaxed mb-8">
                                        {post.content}
                                    </p>

                                    {/* Interaction Stats */}
                                    <div className="flex items-center justify-between pt-6 border-t-2 border-gray-100">
                                        <div className="flex items-center gap-6" style={{ fontFamily: "'Space Grotesk', sans-serif" }}>
                                            <div className="flex items-center gap-1.5 cursor-pointer group/stat">
                                                <Heart className="w-4 h-4 text-gray-400 group-hover/stat:text-red-500 group-hover/stat:fill-red-500 transition-all" />
                                                <span className="text-xs font-black text-gray-900">{post.likes}</span>
                                            </div>
                                            <div className="flex items-center gap-1.5 cursor-pointer group/stat">
                                                <MessageCircle className="w-4 h-4 text-gray-400 group-hover/stat:text-blue-500 transition-all" />
                                                <span className="text-xs font-black text-gray-900">{post.comments}</span>
                                            </div>
                                        </div>
                                        <a
                                            href={post.url}
                                            className="w-10 h-10 bg-gray-50 border-2 border-gray-900 rounded-xl flex items-center justify-center hover:bg-yellow-400 transition-all shadow-[3px_3px_0_0_rgba(0,0,0,1)] hover:shadow-none"
                                            style={{ fontFamily: "'Sora', sans-serif" }}
                                        >
                                            <ExternalLink className="w-4 h-4 text-gray-900" />
                                        </a>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>

                    {/* Load More / Scanning Button */}
                    <div className="mt-20 text-center">
                        <button
                            className="px-12 py-6 bg-white border-4 border-gray-900 rounded-[2rem] font-black text-gray-900 shadow-[8px_8px_0_0_#FCD34D] hover:shadow-none hover:translate-x-1 hover:translate-y-1 transition-all flex items-center gap-4 mx-auto uppercase tracking-widest text-sm"
                            style={{ fontFamily: "'Sora', sans-serif" }}
                        >
                            <Loader2 className="w-5 h-5 animate-spin" />
                            {t.blog?.loadMore}
                        </button>
                    </div>
                </div>
            </section>

            <style>{`
        @keyframes float {
          0%, 100% { transform: translateY(0) rotate(0deg); }
          50% { transform: translateY(-10px) rotate(1deg); }
        }
        .animate-float {
          animation: float 4s ease-in-out infinite;
        }
        .scan-line {
          animation: scan 6s linear infinite;
        }
        @keyframes scan {
          0% { transform: translateY(-100%); }
          100% { transform: translateY(100vh); }
        }
      `}</style>
        </div>
    );
}
