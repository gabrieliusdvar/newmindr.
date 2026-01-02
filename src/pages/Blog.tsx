import { useState, useEffect } from 'react';
import { Calendar, Clock, ArrowRight, Sparkles, BookOpen, ChevronRight } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';
import { supabase } from '../utils/supabase';

interface BlogPost {
    id: number;
    platform: string; // Used as Category
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
    const [fetchedPosts, setFetchedPosts] = useState<BlogPost[]>([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchPosts = async () => {
            try {
                const { data } = await supabase
                    .from('social_posts')
                    .select('*')
                    .eq('language', language)
                    .order('published_at', { ascending: false });

                if (data && data.length > 0) {
                    const mappedPosts = data.map((item: any) => ({
                        id: item.id,
                        platform: item.platform || 'General',
                        title: item.title,
                        content: item.content,
                        image: item.image_url,
                        date: new Date(item.published_at).toLocaleDateString(language === 'lt' ? 'lt-LT' : 'en-US', {
                            month: 'long',
                            day: 'numeric',
                            year: 'numeric'
                        }),
                        likes: item.likes,
                        comments: item.comments,
                        url: item.url
                    })) as BlogPost[];
                    setFetchedPosts(mappedPosts);
                } else {
                    setFetchedPosts([]);
                }
            } catch (error) {
                console.error('Error fetching blog posts:', error);
            } finally {
                setLoading(false);
            }
        };
        fetchPosts();
    }, [language, t]);

    // Use fetched posts if available, otherwise use static translations
    const posts: BlogPost[] = fetchedPosts.length > 0
        ? fetchedPosts
        : (t.blog?.posts || []) as BlogPost[];

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
                    <div className="mb-24 group cursor-pointer">
                        <div className="grid md:grid-cols-2 gap-8 md:gap-12 items-center">
                            <div className="relative aspect-[4/3] md:aspect-[16/10] overflow-hidden rounded-3xl border border-white/10 shadow-2xl shadow-emerald-900/10">
                                <div className="absolute inset-0 bg-gray-800 animate-pulse" />
                                <img
                                    src={featuredPost.image}
                                    alt={featuredPost.title}
                                    className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-gray-950/60 to-transparent" />
                            </div>
                            <div className="space-y-6">
                                <div className="flex items-center gap-4 text-sm font-medium text-emerald-400">
                                    <span className="uppercase tracking-wider">{featuredPost.platform.replace('youtube', 'Video').replace('instagram', 'Update').replace('tiktok', 'Social')}</span>
                                    <span className="w-1 h-1 rounded-full bg-emerald-500" />
                                    <span className="text-gray-400 flex items-center gap-2">
                                        <Calendar className="w-4 h-4" />
                                        {featuredPost.date}
                                    </span>
                                </div>
                                <h2 className="text-3xl md:text-4xl font-bold leading-tight group-hover:text-emerald-400 transition-colors">
                                    {featuredPost.title}
                                </h2>
                                <p className="text-lg text-gray-400 line-clamp-3">
                                    {featuredPost.content}
                                </p>
                                <div className="inline-flex items-center gap-2 text-white font-bold group-hover:gap-4 transition-all">
                                    {language === 'lt' ? 'Skaityti toliau' : language === 'ru' ? 'Читать далее' : 'Read Article'}
                                    <ArrowRight className="w-4 h-4" />
                                </div>
                            </div>
                        </div>
                    </div>
                )}

                {/* Grid Posts */}
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-16">
                    {gridPosts.map((post) => (
                        <article key={post.id} className="group flex flex-col gap-6 cursor-pointer">
                            <div className="relative aspect-[4/3] overflow-hidden rounded-2xl border border-white/10 bg-gray-900">
                                <img
                                    src={post.image}
                                    alt={post.title}
                                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                                />
                                <div className="absolute top-4 left-4">
                                    <span className="px-3 py-1 bg-gray-950/80 backdrop-blur-md border border-white/10 rounded-full text-xs font-bold text-white uppercase tracking-wider">
                                        {post.platform.replace('youtube', 'Video').replace('instagram', 'Story').replace('tiktok', 'Highlight')}
                                    </span>
                                </div>
                            </div>
                            <div className="flex flex-col gap-3">
                                <div className="flex items-center gap-3 text-sm text-gray-500">
                                    <Clock className="w-4 h-4" />
                                    <span>{post.date}</span>
                                </div>
                                <h3 className="text-xl font-bold leading-snug group-hover:text-emerald-400 transition-colors">
                                    {post.title}
                                </h3>
                                <p className="text-gray-400 text-sm line-clamp-2">
                                    {post.content}
                                </p>
                                <div className="mt-auto pt-4 flex items-center gap-2 text-sm font-bold text-white/50 group-hover:text-white transition-colors">
                                    {language === 'lt' ? 'Skaityti' : language === 'ru' ? 'Читать' : 'Read'}
                                    <ChevronRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                                </div>
                            </div>
                        </article>
                    ))}
                </div>

                {!loading && posts.length === 0 && (
                    <div className="text-center py-24 border border-dashed border-gray-800 rounded-3xl">
                        <BookOpen className="w-12 h-12 text-gray-700 mx-auto mb-4" />
                        <h3 className="text-xl font-bold text-gray-500">
                            {language === 'lt' ? 'Įrašų nerasta' : 'No articles found'}
                        </h3>
                    </div>
                )}
            </div>
        </div>
    );
}
