import { Link } from 'react-router-dom';
import { Calendar, Clock, ArrowRight, Sparkles, BookOpen, ChevronRight } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';

interface BlogPost {
    id: number;
    platform: string;
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

    // Use local translations as the source of truth
    const posts = (t.blog?.posts || []) as BlogPost[];

    const featuredPost = posts[0];
    const gridPosts = posts.slice(1);

    return (
        <div className="min-h-screen bg-gray-950 text-white font-sans selection:bg-emerald-500/30">
            {/* Background Effects */}
            <div className="fixed inset-0 pointer-events-none">
                <div className="absolute top-0 left-0 w-[500px] h-[500px] bg-emerald-500/10 rounded-full blur-[120px] mix-blend-screen" />
                <div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-yellow-400/10 rounded-full blur-[120px] mix-blend-screen" />
                <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-20 brightness-100 contrast-150" />
            </div>

            <div className="relative z-10 pt-32 pb-24 container mx-auto px-6">
                {/* Header */}
                <div className="flex flex-col items-start gap-6 max-w-4xl mb-24">
                    <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/5 border border-white/10 backdrop-blur-sm">
                        <Sparkles className="w-4 h-4 text-yellow-400" />
                        <span className="text-xs font-bold tracking-widest text-gray-300 uppercase">
                            {language === 'lt' ? 'Naujienlaiškis' : language === 'ru' ? 'Журнал' : 'The Journal'}
                        </span>
                    </div>
                    <h1 className="text-5xl md:text-7xl font-black tracking-tight leading-tight">
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-white via-gray-200 to-gray-500">
                            {t.blog?.title || 'NEWMINDR'}
                        </span>
                    </h1>
                    <p className="text-xl text-gray-400 max-w-2xl leading-relaxed">
                        {t.blog?.subtitle}
                    </p>
                </div>

                {/* Featured Post */}
                {featuredPost && (
                    <Link to={featuredPost.url} className="mb-24 group cursor-pointer block">
                        <div className="grid md:grid-cols-2 gap-8 md:gap-12 items-center">
                            <div className="relative aspect-[4/3] md:aspect-[16/10] overflow-hidden rounded-3xl border border-white/10 shadow-2xl shadow-emerald-900/10">
                                <div className="absolute inset-0 bg-gray-800 animate-pulse" />
                                <img
                                    src={featuredPost.image}
                                    alt={featuredPost.title}
                                    className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                                    loading="lazy"
                                />
                                <div className="absolute top-4 left-4 bg-black/60 backdrop-blur-md px-3 py-1 rounded-full border border-white/10">
                                    <span className="text-xs font-bold text-emerald-400 tracking-wider uppercase">
                                        {featuredPost.platform}
                                    </span>
                                </div>
                            </div>
                            <div className="flex flex-col gap-6">
                                <div className="flex items-center gap-4 text-gray-400 text-sm font-medium tracking-wide">
                                    <div className="flex items-center gap-2">
                                        <Calendar className="w-4 h-4 text-emerald-500" />
                                        <span>{featuredPost.date}</span>
                                    </div>
                                    <div className="flex items-center gap-2">
                                        <Clock className="w-4 h-4 text-emerald-500" />
                                        <span>5 min read</span>
                                    </div>
                                </div>
                                <h2 className="text-4xl md:text-5xl font-bold leading-tight group-hover:text-emerald-400 transition-colors">
                                    {featuredPost.title}
                                </h2>
                                <p className="text-lg text-gray-400 line-clamp-3 leading-relaxed">
                                    {featuredPost.content}
                                </p>
                                <div className="flex items-center gap-2 text-emerald-400 font-bold uppercase tracking-widest text-sm mt-2 group/btn">
                                    Read Article <ArrowRight className="w-4 h-4 transition-transform group-hover/btn:translate-x-2" />
                                </div>
                            </div>
                        </div>
                    </Link>
                )}

                {/* Grid Posts */}
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-16">
                    {gridPosts.map((post) => (
                        <Link to={post.url} key={post.id} className="group flex flex-col gap-6 cursor-pointer">
                            <div className="relative aspect-[4/3] overflow-hidden rounded-2xl border border-white/10 bg-gray-900">
                                <img
                                    src={post.image}
                                    alt={post.title}
                                    className="absolute inset-0 w-full h-full object-cover transition-transform duration-500 group-hover:scale-105 opacity-80 group-hover:opacity-100"
                                    loading="lazy"
                                />
                                <div className="absolute top-4 left-4 bg-black/60 backdrop-blur-md px-3 py-1 rounded-full border border-white/10">
                                    <span className="text-xs font-bold text-emerald-400 tracking-wider uppercase">
                                        {post.platform}
                                    </span>
                                </div>
                            </div>
                            <div className="flex flex-col gap-3">
                                <div className="flex items-center gap-3 text-gray-500 text-xs font-bold tracking-widest uppercase">
                                    <span>{post.date}</span>
                                    <span className="w-1 h-1 rounded-full bg-gray-600" />
                                    <span>3 min read</span>
                                </div>
                                <h3 className="text-2xl font-bold leading-tight group-hover:text-emerald-400 transition-colors">
                                    {post.title}
                                </h3>
                                <p className="text-gray-400 line-clamp-2 text-sm leading-relaxed">
                                    {post.content}
                                </p>
                                <div className="mt-auto pt-2 flex items-center text-sm font-bold text-white group-hover:text-emerald-400 transition-colors">
                                    Read More <ChevronRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                                </div>
                            </div>
                        </Link>
                    ))}
                </div>

                {posts.length === 0 && (
                    <div className="text-center py-24 border border-white/10 rounded-3xl bg-white/5 backdrop-blur-sm">
                        <BookOpen className="w-12 h-12 text-gray-600 mx-auto mb-4" />
                        <h3 className="text-xl font-bold text-gray-300">Journal Updating...</h3>
                        <p className="text-gray-500 max-w-md mx-auto mt-2">
                            We are curating new stories. Check back soon.
                        </p>
                    </div>
                )}
            </div>
        </div>
    );
}
