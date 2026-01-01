import { EMAIL_CONFIG } from './emailConfig';

/**
 * Sends an email using Resend via a Supabase Edge Function (the secure way).
 * 
 * WHY SUPABASE? 
 * Resend blocks requests directly from browsers for security. 
 * We send the data to Supabase, and Supabase sends it to Resend.
 */
export async function sendEmail(params: {
    to: string;
    subject: string;
    html: string;
}) {
    // Note: This calls a Supabase Edge Function named 'send-email'
    // You need to create this function in your Supabase Dashboard
    const response = await fetch(`${EMAIL_CONFIG.SUPABASE_URL}/functions/v1/send-email`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${EMAIL_CONFIG.SUPABASE_ANON_KEY}`
        },
        body: JSON.stringify({
            ...params,
            from: EMAIL_CONFIG.FROM_EMAIL,
            apiKey: EMAIL_CONFIG.RESEND_API_KEY
        })
    });

    if (!response.ok) {
        const errorData = await response.json().catch(() => ({}));
        console.error('Supabase Email Error:', {
            status: response.status,
            statusText: response.statusText,
            data: errorData
        });
        throw new Error(`Email failed: ${response.status} ${response.statusText}`);
    }

    return await response.json();
}
