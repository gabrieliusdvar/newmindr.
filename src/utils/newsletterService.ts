import { supabase } from './supabase';

export interface NewsletterSubscriber {
    id?: string;
    email: string;
    language?: string;
    subscribed?: boolean;
    subscribed_at?: string;
    unsubscribed_at?: string;
}

/**
 * Subscribe an email to the newsletter
 */
export async function subscribeNewsletter(email: string, language: string = 'en'): Promise<{ success: boolean; error?: string }> {
    try {
        // Check if email already exists
        const { data: existing } = await supabase
            .from('newsletter_subscribers')
            .select('id, subscribed')
            .eq('email', email.toLowerCase())
            .single();

        if (existing) {
            if (existing.subscribed) {
                // Already subscribed
                return { success: true };
            } else {
                // Re-subscribe
                const { error } = await supabase
                    .from('newsletter_subscribers')
                    .update({
                        subscribed: true,
                        language,
                        unsubscribed_at: null
                    })
                    .eq('email', email.toLowerCase());

                if (error) throw error;
                return { success: true };
            }
        }

        // New subscriber
        const { error } = await supabase
            .from('newsletter_subscribers')
            .insert({
                email: email.toLowerCase(),
                language,
                subscribed: true,
                subscribed_at: new Date().toISOString()
            });

        if (error) {
            // Handle unique constraint violation gracefully
            if (error.code === '23505') {
                return { success: true }; // Already exists, that's fine
            }
            throw error;
        }

        return { success: true };
    } catch (error: any) {
        console.error('Newsletter subscribe error:', error);
        return {
            success: false,
            error: error?.message || 'Failed to subscribe'
        };
    }
}

/**
 * Unsubscribe an email from the newsletter
 */
export async function unsubscribeNewsletter(email: string): Promise<{ success: boolean; error?: string; notFound?: boolean }> {
    try {
        // Check if email exists
        const { data: existing, error: selectError } = await supabase
            .from('newsletter_subscribers')
            .select('id, subscribed')
            .eq('email', email.toLowerCase())
            .single();

        if (selectError || !existing) {
            // Email not found - but we don't want to reveal this for privacy
            // Just return success as if it was unsubscribed
            return { success: true, notFound: true };
        }

        if (!existing.subscribed) {
            // Already unsubscribed
            return { success: true };
        }

        // Unsubscribe (soft delete - keep the record but mark as unsubscribed)
        const { error } = await supabase
            .from('newsletter_subscribers')
            .update({
                subscribed: false,
                unsubscribed_at: new Date().toISOString()
            })
            .eq('email', email.toLowerCase());

        if (error) throw error;

        return { success: true };
    } catch (error: any) {
        console.error('Newsletter unsubscribe error:', error);
        return {
            success: false,
            error: error?.message || 'Failed to unsubscribe'
        };
    }
}

/**
 * Check if an email is subscribed
 */
export async function isSubscribed(email: string): Promise<boolean> {
    try {
        const { data, error } = await supabase
            .from('newsletter_subscribers')
            .select('subscribed')
            .eq('email', email.toLowerCase())
            .single();

        if (error || !data) return false;
        return data.subscribed === true;
    } catch {
        return false;
    }
}
