# Automating Social Media Feed Integration

Currently, the blog feed is simulated using static data in `src/utils/translations.ts`. To make this fully automatic (fetching real posts from TikTok, Instagram, YouTube), you will need to integrate with their respective APIs.

Since these APIs require authentication (API Keys/Secrets) that cannot be safely stored in the frontend, you need a small backend service or Edge Function.

## 1. Architecture Overview

**Frontend (React)** -> **Backend API / Edge Function** -> **Social Platforms**

1.  **Backend**: Scheduled job (e.g., every hour) fetches latest posts from:
    *   **TikTok** (via TikTok Display API)
    *   **Instagram** (via Instagram Graph API)
    *   **YouTube** (via YouTube Data API)
2.  **Normalization**: The backend standardizes the data into a common format (title, image, url, date, platform).
3.  **Storage/Cache**: Data is saved to a database (Supabase) or a JSON file (S3/Blob Storage) to avoid hitting API rate limits.
4.  **Frontend**: The React app fetches this prepared list based on the user's language.

## 2. API Setup Guide

### TikTok
*   **Account**: You need separate Developer accounts for Global and LT regions if they are different business entities, or manage multiple access tokens.
*   **Endpoint**: `https://open.tiktokapis.com/v2/research/video/query/` (or similar display endpoints).
*   **Filtering**: You will query by `@username` (`newmindr.com` vs `newmindr_lt`).

### Instagram
*   **Setup**: Create a Meta App linked to your Instagram Business accounts.
*   **Endpoint**: `GET /{ig-user-id}/media`
*   **Filtering**: Iterate through the connected accounts.

### YouTube
*   **Setup**: Google Cloud Console project with YouTube Data API v3 enabled.
*   **Endpoint**: `search.list` with `channelId`.
*   **Filtering**: Use Channel IDs for the Global and LT channels.

## 3. Implementation Plan (with Supabase)

Since you already have Supabase in your project plan:

1.  **Create a Table**: `social_posts`
    *   `id`: uuid
    *   `platform`: text (tiktok, instagram...)
    *   `content`: text
    *   `image_url`: text
    *   `link`: text
    *   `language`: text (en, lt, ru)
    *   `published_at`: timestamp

2.  **Create an Edge Function**: `fetch-socials`
    *   Write a script (TypeScript) that calls the social APIs.
    *   Map the results to your table structure.
    *   Tag them by language (e.g., if fetched from `newmindr_lt`, tag `lt`).
    *   Upsert into `social_posts`.

3.  **Schedule**: Set a cron job in Supabase to run this function every 60 minutes.

4.  **Update Frontend (`Blog.tsx`)**:
    *   Instead of reading `t.blog.posts`, fetch from Supabase:
        ```typescript
        const { data } = await supabase
          .from('social_posts')
          .select('*')
          .eq('language', currentLanguage) // 'lt' or 'en'
          .order('published_at', { ascending: false });
        ```

## 4. Immediate Example (Manual)

For now, we have implemented the **structure** manually in `translations.ts`.
-   **English/Russian**: Points to `@newmindr.com` / `@newmindr`.
-   **Lithuanian**: Points to `@newmindr_lt`.

This allows the UI to work correctly immediately. When you build the backend integration, you simply replace the data source in `Blog.tsx`.
