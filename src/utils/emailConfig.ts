export const EMAIL_CONFIG = {
    RESEND_API_KEY: 're_Hy7ja2GF_ADaDnFERb3hCSf9kd5YhUpP3',
    FROM_EMAIL: 'newmindr <no-reply@newmindr.com>',
    SUPABASE_URL: 'https://ueobnqseskhrpezrvukk.supabase.co',
    SUPABASE_ANON_KEY: 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InVlb2JucXNlc2tocnBlenJ2dWtrIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NjcyODY4MjYsImV4cCI6MjA4Mjg2MjgyNn0.k_T7FLtqYHh_pHstM4P5OzUEfUyFcs0XfF8sUFiwSM',
};

// Stripe links for each plan and duration
export const STRIPE_LINKS = {
    EN: {
        BASIC_MONTHLY: 'https://buy.stripe.com/test_cNicN4eAb9x87XfaFLfIs00',
        PRO_MONTHLY: 'https://buy.stripe.com/test_aFa6oGcs38t46Tb5lrfIs01',
        BASIC_YEARLY: 'https://buy.stripe.com/test_6oUcN40Jl10C2CV29ffIs02',
        PRO_YEARLY: 'https://buy.stripe.com/test_eVqdR88bNaBc5P79BHfIs03',
        TRIAL: 'https://buy.stripe.com/test_aFa6oGcs38t46Tb5lrfIs01' // Defaulting trial to PRO for now
    },
    // Using EN links as defaults for now
    LT: {
        BASIC_MONTHLY: 'https://buy.stripe.com/test_cNicN4eAb9x87XfaFLfIs00',
        PRO_MONTHLY: 'https://buy.stripe.com/test_aFa6oGcs38t46Tb5lrfIs01',
        BASIC_YEARLY: 'https://buy.stripe.com/test_6oUcN40Jl10C2CV29ffIs02',
        PRO_YEARLY: 'https://buy.stripe.com/test_eVqdR88bNaBc5P79BHfIs03',
        TRIAL: 'https://buy.stripe.com/test_aFa6oGcs38t46Tb5lrfIs01'
    },
    RU: {
        BASIC_MONTHLY: 'https://buy.stripe.com/test_cNicN4eAb9x87XfaFLfIs00',
        PRO_MONTHLY: 'https://buy.stripe.com/test_aFa6oGcs38t46Tb5lrfIs01',
        BASIC_YEARLY: 'https://buy.stripe.com/test_6oUcN40Jl10C2CV29ffIs02',
        PRO_YEARLY: 'https://buy.stripe.com/test_eVqdR88bNaBc5P79BHfIs03',
        TRIAL: 'https://buy.stripe.com/test_aFa6oGcs38t46Tb5lrfIs01'
    }
};
