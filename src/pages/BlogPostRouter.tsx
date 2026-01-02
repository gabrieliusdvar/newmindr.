import { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { supabase } from '../utils/supabase';
import ArticleRise from './articles/ArticleRise';
import ArticleParents from './articles/ArticleParents';
import ArticleTeens from './articles/ArticleTeens';
import ArticleGeneric from './articles/ArticleGeneric';
import { Loader2 } from 'lucide-react';

export default function BlogPostRouter() {
    const { id } = useParams<{ id: string }>();
    const [post, setPost] = useState<any>(null);
    const [loading, setLoading] = useState(true);
    const navigate = useNavigate();

    useEffect(() => {
        const fetchPost = async () => {
            if (!id) return;
            setLoading(true);

            // Fetch from Supabase
            const { data, error } = await supabase
                .from('social_posts')
                .select('*')
                .eq('id', id)
                .single();

            if (error || !data) {
                console.error('Post not found', error);
            } else {
                setPost(data);
            }
            setLoading(false);
        };

        fetchPost();
    }, [id, navigate]);

    if (loading) {
        return (
            <div className="min-h-screen flex items-center justify-center bg-gray-900 text-white">
                <Loader2 className="w-8 h-8 animate-spin text-emerald-500" />
            </div>
        );
    }

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
    // ID 1 (The Setup) -> Interactive Rise Article
    if (post.id === 1 || post.title.includes('Interactive') || post.platform === 'Insights') {
        return <ArticleRise />;
    }

    // Fallbacks for older data if it exists
    if (post.platform === 'Parents') return <ArticleParents />;
    if (post.platform === 'Students') return <ArticleTeens />;

    return <ArticleGeneric post={post} />;
}
