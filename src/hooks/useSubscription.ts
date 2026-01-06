import { useEffect, useState } from 'react';
import { supabase } from '../utils/supabase';
import { useLanguage } from '../contexts/LanguageContext';

export interface Subscription {
    status: 'active' | 'trialing' | 'past_due' | 'canceled' | 'incomplete' | 'incomplete_expired' | 'unpaid' | 'none';
    planInterval: 'month' | 'year' | null;
    currentPeriodEnd: string | null;
}

export function useSubscription(email: string | null | undefined) {
    const [subscription, setSubscription] = useState<Subscription>({
        status: 'none',
        planInterval: null,
        currentPeriodEnd: null
    });
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        if (!email) {
            setLoading(false);
            return;
        }

        async function fetchSubscription() {
            try {
                // Fetch the most recent active or trialing subscription
                const { data, error } = await supabase
                    .from('subscriptions')
                    .select('*')
                    .eq('email', email)
                    .in('status', ['active', 'trialing'])
                    .order('current_period_end', { ascending: false })
                    .limit(1)
                    .single();

                if (error) {
                    if (error.code !== 'PGRST116') { // PGRST116 = no rows returned
                        console.error('Error fetching subscription:', error);
                    }
                    setSubscription(prev => ({ ...prev, status: 'none' }));
                } else if (data) {
                    setSubscription({
                        status: data.status,
                        planInterval: data.plan_interval,
                        currentPeriodEnd: data.current_period_end
                    });
                }
            } catch (err) {
                console.error('Subscription check failed:', err);
            } finally {
                setLoading(false);
            }
        }

        fetchSubscription();
    }, [email]);

    return { subscription, loading };
}
