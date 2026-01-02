import { useState } from 'react';
import { supabase } from '../utils/supabase';
import { translations } from '../utils/translations';

export default function Seed() {
    const [status, setStatus] = useState('Idle');
    const [log, setLog] = useState<string[]>([]);

    const addLog = (msg: string) => setLog(prev => [...prev, msg]);

    const seedData = async () => {
        setStatus('Seeding...');
        setLog([]);
        addLog('Starting seed process...');

        // Clear existing data
        addLog('Cleaning old data...');
        await supabase.from('social_posts').delete().neq('id', 0); // Deletes all rows where id != 0

        const languages = ['en', 'lt', 'ru'] as const;

        try {
            for (const lang of languages) {
                const posts = translations[lang].blog.posts;
                addLog(`Processing ${lang.toUpperCase()}... found ${posts.length} posts.`);

                for (const post of posts) {
                    // Check if exists (simple check by URL matches)
                    // Or usually just upsert via ID? But ID 1 exists in all languages.
                    // We need unique IDs in DB.
                    // We will let DB generate ID, or map static ID + lang to avoid collision if we used static ID?
                    // DB schema: id is Identity. So new IDs will be generated.
                    // We will check duplication by 'url' + 'language' + 'title'?
                    // For simplicity, we just lookup if title exists for that lang.

                    const { data: existing } = await supabase
                        .from('social_posts')
                        .select('id')
                        .eq('language', lang)
                        .eq('title', post.title)
                        .maybeSingle();

                    if (existing) {
                        addLog(`  Skipped (Exists): ${post.title}`);
                        continue;
                    }

                    const { error } = await supabase
                        .from('social_posts')
                        .insert({
                            platform: post.platform,
                            title: post.title,
                            content: post.content,
                            image_url: post.image,
                            url: post.url,
                            likes: post.likes,
                            comments: post.comments,
                            language: lang,
                            published_at: new Date().toISOString() // Or parse '2h ago'? We'll just use now for seed.
                        });

                    if (error) {
                        addLog(`  Error inserting ${post.title}: ${error.message}`);
                    } else {
                        addLog(`  Inserted: ${post.title}`);
                    }
                }
            }
            setStatus('Done!');
            addLog('Seeding complete.');
        } catch (e: any) {
            setStatus('Error');
            addLog(`Critical Error: ${e.message}`);
        }
    };

    return (
        <div className="min-h-screen bg-gray-900 text-white p-20 font-mono">
            <h1 className="text-4xl mb-8 text-emerald-400">Database Seeder</h1>
            <p className="mb-8 text-gray-400">
                This utility will populate your Supabase <code>social_posts</code> table
                with the static data from <code>translations.ts</code>.
            </p>

            <button
                onClick={seedData}
                disabled={status === 'Seeding...'}
                className="px-6 py-3 bg-emerald-500 hover:bg-emerald-600 text-black font-bold rounded"
            >
                {status === 'Seeding...' ? 'Seeding...' : 'Run Seed Script'}
            </button>

            <div className="mt-8 bg-black p-6 rounded border border-gray-800 h-96 overflow-y-auto">
                {log.map((l, i) => (
                    <div key={i} className="mb-1">{l}</div>
                ))}
            </div>
        </div>
    );
}
