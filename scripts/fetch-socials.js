import { createClient } from '@supabase/supabase-js';
import axios from 'axios';
import dotenv from 'dotenv';
import path from 'path';
import { fileURLToPath } from 'url';

// Load .env
const __dirname = path.dirname(fileURLToPath(import.meta.url));
dotenv.config({ path: path.join(__dirname, '../.env') });

// Configuration
const SUPABASE_URL = process.env.VITE_SUPABASE_URL;
const SUPABASE_KEY = process.env.VITE_SUPABASE_ANON_KEY;
const YOUTUBE_KEY = process.env.YOUTUBE_API_KEY;

// Define your accounts here
const SOURCES = [
    // 1. Global Channel -> Synced to English and Russian feeds
    {
        platform: 'youtube',
        channelId: process.env.YOUTUBE_CHANNEL_ID_GLOBAL,
        targetLanguages: ['en', 'ru']
    },
    // 2. Lithuanian Channel -> Synced to Lithuanian feed
    {
        platform: 'youtube',
        channelId: process.env.YOUTUBE_CHANNEL_ID_LT,
        targetLanguages: ['lt']
    }
    // Add TikTok/Instagram here later...
];

if (!SUPABASE_URL || !SUPABASE_KEY) {
    console.error('❌ Missing Supabase Keys');
    process.exit(1);
}
const supabase = createClient(SUPABASE_URL, SUPABASE_KEY);

async function fetchYouTube(source) {
    if (!YOUTUBE_KEY || !source.channelId) {
        console.log(`⚠️  Skipping YouTube for targets [${source.targetLanguages}]: Missing Channel ID or API Key`);
        return;
    }

    console.log(`📺 Fetching YouTube for [${source.targetLanguages.join(', ')}] from channel ${source.channelId}...`);

    try {
        const response = await axios.get(`https://www.googleapis.com/youtube/v3/search`, {
            params: {
                key: YOUTUBE_KEY,
                channelId: source.channelId,
                part: 'snippet',
                order: 'date',
                maxResults: 5,
                type: 'video'
            }
        });

        const videos = response.data.items;
        for (const video of videos) {
            const { title, description, publishedAt, thumbnails } = video.snippet;
            const videoId = video.id.videoId;
            const videoUrl = `https://www.youtube.com/watch?v=${videoId}`;

            // Insert for EACH target language
            for (const lang of source.targetLanguages) {
                // Check duplication per language
                const { data: existing } = await supabase
                    .from('social_posts')
                    .select('id')
                    .eq('url', videoUrl)
                    .eq('language', lang)
                    .maybeSingle();

                if (existing) continue;

                const post = {
                    platform: 'youtube',
                    title: title,
                    content: description,
                    image_url: thumbnails.high?.url || thumbnails.medium?.url,
                    url: videoUrl,
                    published_at: publishedAt,
                    language: lang,
                    likes: '0',
                    comments: '0'
                };

                const { error } = await supabase.from('social_posts').insert(post);
                if (error) console.error(`   ❌ Error (${lang}):`, error.message);
                else console.log(`   ✅ Inserted (${lang}): ${title.substring(0, 30)}...`);
            }
        }
    } catch (e) {
        console.error('   ❌ YouTube API Error:', e.response?.data?.error?.message || e.message);
    }
}

async function main() {
    console.log('🔄 Starting Multi-Channel Sync...');

    for (const source of SOURCES) {
        if (source.platform === 'youtube') {
            await fetchYouTube(source);
        }
        // Handle other platforms
    }

    console.log('✨ Sync Complete!');
}

main();
