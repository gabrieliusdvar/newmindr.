import { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { useLanguage } from '../contexts/LanguageContext';
import ArticleRise from './articles/ArticleRise';
import ArticleParents from './articles/ArticleParents';
import ArticleTeens from './articles/ArticleTeens';
import ArticleGeneric from './articles/ArticleGeneric';
import { Loader2 } from 'lucide-react';

export default function BlogPostRouter() {
    const { id } = useParams<{ id: string }>();
    const { t } = useLanguage();

    // We fetch from local translations now
    const posts = t.blog?.posts || [];
    const postId = Number(id);

    const post = posts.find((p: any) => p.id === postId);

    if (!post) {
        return (
            <div className="min-h-screen flex items-center justify-center bg-black text-white">
                <div className="text-center">
                    <h1 className="text-4xl font-bold mb-4">404</h1>
                    <p className="text-gray-400">Article not found.</p>
                </div>
            </div>
        );
    }

    // Router Logic
    // ID 1 (The Setup) -> Interactive Rise Article (The requested one)
    if (post.id === 1 || post.title.includes('Interactive') || post.platform === 'Insights' || post.platform === 'Įžvalgos') {
        return <ArticleRise />;
    }

    // Fallbacks for older/different data if added locally later
    if (post.platform === 'Parents') return <ArticleParents />;
    if (post.platform === 'Students') return <ArticleTeens />;

    return <ArticleGeneric post={post} />;
}
