import { ArrowLeft } from 'lucide-react';
import { Link } from 'react-router-dom';

interface ArticleProps {
    post: any;
}

export default function ArticleGeneric({ post }: ArticleProps) {
    if (!post) return null;

    return (
        <div className="min-h-screen bg-white text-gray-900 font-sans">
            <nav className="fixed top-0 left-0 w-full z-50 bg-white/80 backdrop-blur-md border-b border-gray-100 px-6 py-4 flex justify-between items-center">
                <Link to="/blog" className="flex items-center gap-2 text-sm font-bold text-gray-500 hover:text-black transition-colors">
                    <ArrowLeft className="w-5 h-5" />
                    Back to Journal
                </Link>
                <div className="font-serif italic font-bold text-xl">NewMindr.</div>
            </nav>

            <article className="pt-32 pb-24 container mx-auto px-6 max-w-3xl">
                <header className="mb-12 text-center">
                    <div className="flex items-center justify-center gap-4 text-sm text-gray-500 mb-6 font-medium uppercase tracking-wider">
                        <span className="text-emerald-600">{post.platform || 'Article'}</span>
                        <span>•</span>
                        <span>{new Date(post.published_at).toLocaleDateString()}</span>
                    </div>
                    <h1 className="text-4xl md:text-5xl font-bold leading-tight mb-8">
                        {post.title}
                    </h1>
                    <div className="relative aspect-video w-full overflow-hidden rounded-2xl shadow-xl mb-12">
                        <img
                            src={post.image_url}
                            alt={post.title}
                            className="absolute inset-0 w-full h-full object-cover"
                        />
                    </div>
                </header>

                <div className="prose prose-lg prose-emerald mx-auto">
                    <p className="lead text-xl text-gray-600 mb-8 font-serif">
                        {post.content}
                    </p>
                    {/* Placeholder for real body content if it existed in DB */}
                    <p>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                        Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                    </p>
                    <h3>The Future is Interactive</h3>
                    <p>
                        Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
                        Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                    </p>
                </div>
            </article>
        </div>
    );
}
