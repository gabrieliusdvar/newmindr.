import { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { supabase } from '../utils/supabase';
import ArticleRise from './articles/ArticleRise';
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

    // FORCE INTERACTIVE LAYOUT FOR EVERYTHING
    // The user explicitly requested to remove the static ones.
    return <ArticleRise />;
}
