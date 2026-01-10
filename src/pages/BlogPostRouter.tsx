import { useParams } from 'react-router-dom';
import { useLanguage } from '../contexts/LanguageContext';
import ArticleRise from './articles/ArticleRise';
import ArticleFail from './articles/ArticleFail';
import ArticleParents from './articles/ArticleParents';
import ArticleTeens from './articles/ArticleTeens';
import ArticleCheating from './articles/ArticleCheating';
import ArticleGeneric from './articles/ArticleGeneric';
import ArticleAfterSchool from './articles/ArticleAfterSchool';
import ArticleFutureLearning from './articles/ArticleFutureLearning';
import ArticlePlayToLearn from './articles/ArticlePlayToLearn';
import ArticleInteractiveCourses from './articles/ArticleInteractiveCourses';

export default function BlogPostRouter() {
    const { id } = useParams<{ id: string }>();
    const { t } = useLanguage();

    // We fetch from local translations now
    const posts = t.blog?.posts || [];

    // Improved Lookup: Checks ID or URL Slug
    const post = posts.find((p: any) =>
        String(p.id) === id ||
        (p.url && p.url.endsWith(id || ''))
    );

    if (!post) {
        return (
            <div className="min-h-screen flex items-center justify-center bg-black text-white">
                <div className="text-center">
                    <h1 className="text-4xl font-bold mb-4">404</h1>
                    <p className="text-gray-400">Article not found: {id}</p>
                    <button onClick={() => window.history.back()} className="mt-4 text-emerald-500 hover:underline">
                        Go Back
                    </button>
                </div>
            </div>
        );
    }

    // Router Logic

    // ID 7 or interactive-courses
    if (post.id === 7 || post.url.includes('interactive-courses')) {
        return <ArticleInteractiveCourses />;
    }

    // ID 4 or after-school -> After School Article
    if (post.id === 4 || post.url.includes('after-school')) {
        return <ArticleAfterSchool />;
    }

    // ID 5 or future-learning
    if (post.id === 5 || post.url.includes('future-learning')) {
        return <ArticleFutureLearning />;
    }

    // ID 6 or play-to-learn
    if (post.id === 6 || post.url.includes('play-to-learn')) {
        return <ArticlePlayToLearn />;
    }

    // ID 3 or why-kids-cheat
    if (post.id === 3 || post.url.includes('why-kids-cheat')) {
        return <ArticleCheating />;
    }

    // ID 1 (The Setup) or Interactive Slug -> Interactive Rise Article
    if (post.id === 1 || post.url.includes('interactive-rise') || post.platform === 'Insights' || post.platform === 'Įžvalgos' || post.platform === 'Инсайты') {
        return <ArticleRise />;
    }

    // ID 2 or why-students-fail slug -> Why Students Fail Article
    if (post.id === 2 || post.url.includes('why-students-fail') || post.platform === 'Education' || post.platform === 'Švietimas' || post.platform === 'Образование') {
        return <ArticleFail />;
    }

    // Fallbacks for older protocols
    if (post.platform === 'Parents') return <ArticleParents />;
    if (post.platform === 'Students') return <ArticleTeens />;

    return <ArticleGeneric post={post} />;
}
