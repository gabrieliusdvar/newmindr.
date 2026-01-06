
import { createClient } from "https://esm.sh/@supabase/supabase-js@2";
import Stripe from "https://esm.sh/stripe@11.1.0?target=deno";
import { Resend } from "https://esm.sh/resend@2.0.0";

const stripe = new Stripe(Deno.env.get("STRIPE_SECRET_KEY") ?? "", {
    apiVersion: "2022-11-15",
    httpClient: Stripe.createFetchHttpClient(),
});

const cryptoProvider = Stripe.createSubtleCryptoProvider();
const resend = new Resend(Deno.env.get("RESEND_API_KEY"));

const translations = {
    en: {
        welcome: {
            title: "Access Granted",
            greeting: "Welcome to newmindr., {email}!",
            content: "We've created a secure account for you to access the learning platform. Here are your login credentials:",
            emailLabel: "Email:",
            passwordLabel: "Temporary Password:",
            cta: "LOGIN TO PLATFORM",
            footer: "Please change your password after your first login."
        },
        welcomeBack: {
            title: "Subscription Active",
            greeting: "Welcome back, {email}!",
            content: "Your subscription is now active. You can log in with your existing credentials.",
            emailLabel: "Email:",
            passwordLabel: "Password:",
            cta: "OPEN PLATFORM",
            footer: "Need help? Reply to this email."
        }
    },
    lt: {
        welcome: {
            title: "Prieiga Suteikta",
            greeting: "Sveiki atvykę į newmindr., {email}!",
            content: "Sukūrėme jums saugią paskyrą mokymosi platformai pasiekti. Štai jūsų prisijungimo duomenys:",
            emailLabel: "El. paštas:",
            passwordLabel: "Laikinas slaptažodis:",
            cta: "PRISIJUNGTI Į PLATFORMĄ",
            footer: "Prašome pasikeisti slaptažodį po pirmojo prisijungimo."
        },
        welcomeBack: {
            title: "Prenumerata Aktyvi",
            greeting: "Sveiki sugrįžę, {email}!",
            content: "Jūsų prenumerata aktyvuota. Galite prisijungti su turimais duomenimis.",
            emailLabel: "El. paštas:",
            passwordLabel: "Slaptažodis:",
            cta: "ATIDARYTI PLATFORMĄ",
            footer: "Reikia pagalbos? Atsakykite į šį laišką."
        }
    },
    ru: {
        welcome: {
            title: "Доступ Разрешен",
            greeting: "Добро пожаловать в newmindr., {email}!",
            content: "Мы создали для вас аккаунт для доступа к платформе обучения. Вот ваши данные для входа:",
            emailLabel: "Email:",
            passwordLabel: "Временный пароль:",
            cta: "ВОЙТИ В ПЛАТФОРМУ",
            footer: "Пожалуйста, смените пароль после первого входа."
        },
        welcomeBack: {
            title: "Подписка Активна",
            greeting: "С возвращением, {email}!",
            content: "Ваша подписка активирована. Вы можете войти с существующими данными.",
            emailLabel: "Email:",
            passwordLabel: "Пароль:",
            cta: "ОТКРЫТЬ ПЛАТФОРМУ",
            footer: "Нужна помощь? Ответьте на это письмо."
        }
    }
};

function generatePassword(length = 12) {
    const charset = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789!@#$%^&*";
    let retVal = "";
    for (let i = 0, n = charset.length; i < length; ++i) {
        retVal += charset.charAt(Math.floor(Math.random() * n));
    }
    return retVal;
}

function generateEmailHtml(lang: 'en' | 'lt' | 'ru', type: 'welcome' | 'welcomeBack', data: any) {
    const t = (translations[lang] || translations.en)[type];
    const colors = {
        purple: '#8b5cf6',
        black: '#111111',
        white: '#ffffff',
        gray: '#f3f4f6'
    };
    const loginLink = 'https://learning.newmindr.com/login';
    const passwordDisplay = type === 'welcome'
        ? `<td style="font-weight: 700; color: ${colors.black}; font-size: 18px; letter-spacing: 1px; background: #fff; padding: 5px 10px; border: 1px solid #000; display: inline-block;">${data.password}</td>`
        : `<td style="font-weight: 700; color: ${colors.black}; font-size: 16px; font-style: italic;">(Use existing password)</td>`;

    return `
    <!DOCTYPE html>
    <html>
    <head>
        <meta charset="utf-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
    </head>
    <body style="margin: 0; padding: 0; background-color: ${colors.gray}; font-family: 'Inter', Helvetica, Arial, sans-serif;">
        <table width="100%" border="0" cellspacing="0" cellpadding="0">
            <tr>
                <td align="center" style="padding: 40px 10px;">
                    <table width="600" border="4" cellspacing="0" cellpadding="0" style="background: ${colors.white}; border-color: ${colors.black}; border-style: solid; box-shadow: 12px 12px 0px 0px ${colors.black};">
                        <tr>
                            <td style="background-color: ${colors.purple}; padding: 40px 30px; border-bottom: 4px solid ${colors.black}; text-align: center;">
                                <h1 style="margin: 0; font-size: 32px; font-weight: 900; color: ${colors.white}; text-transform: uppercase; letter-spacing: 1px; text-shadow: 2px 2px 0px #000;">
                                    ${t.title}
                                </h1>
                            </td>
                        </tr>
                        <tr>
                            <td style="padding: 40px 30px;">
                                <p style="font-size: 18px; line-height: 1.6; color: ${colors.black}; font-weight: bold; margin-bottom: 20px;">
                                    ${t.greeting.replace('{email}', data.email)}
                                </p>
                                <p style="font-size: 16px; line-height: 1.6; color: #444; margin-bottom: 30px;">
                                    ${t.content}
                                </p>
                                <div style="background-color: ${colors.gray}; border: 2px solid ${colors.black}; border-radius: 12px; padding: 20px; margin-bottom: 30px;">
                                    <table width="100%" border="0" cellspacing="0" cellpadding="5">
                                        <tr>
                                            <td style="font-weight: 900; color: #666; font-size: 14px; text-transform: uppercase;">${t.emailLabel}</td>
                                            <td style="font-weight: 700; color: ${colors.black}; font-size: 16px;">${data.email}</td>
                                        </tr>
                                        <tr>
                                            <td style="font-weight: 900; color: #666; font-size: 14px; text-transform: uppercase;">${t.passwordLabel}</td>
                                            ${passwordDisplay}
                                        </tr>
                                    </table>
                                </div>
                                <div style="text-align: center;">
                                    <a href="${loginLink}" style="display: inline-block; background: ${colors.black}; color: ${colors.white}; padding: 18px 30px; border-radius: 12px; text-decoration: none; font-weight: 900; font-size: 16px; border: 2px solid ${colors.white}; box-shadow: 4px 4px 0px 0px ${colors.purple}; text-transform: uppercase;">
                                        ${t.cta}
                                    </a>
                                </div>
                            </td>
                        </tr>
                        <tr>
                            <td style="background-color: ${colors.black}; padding: 30px; text-align: center;">
                                <p style="margin: 0; color: ${colors.white}; font-size: 14px; font-weight: 700;">${t.footer}</p>
                            </td>
                        </tr>
                    </table>
                </td>
            </tr>
        </table>
    </body>
    </html>
    `;
}

Deno.serve(async (req) => {
    const signature = req.headers.get("Stripe-Signature");
    const webhookSecret = Deno.env.get("STRIPE_WEBHOOK_SECRET");

    if (!webhookSecret) {
        console.error("Missing STRIPE_WEBHOOK_SECRET env var");
        return new Response("Server misconfiguration", { status: 500 });
    }

    if (!signature) {
        console.error("Missing Stripe-Signature header");
        return new Response("Missing signature", { status: 400 });
    }

    const body = await req.text();
    let event;

    try {
        event = await stripe.webhooks.constructEventAsync(
            body,
            signature,
            webhookSecret,
            undefined,
            cryptoProvider
        );
    } catch (err) {
        console.error(`Webhook signature verification failed: ${err.message}`);
        return new Response(`Webhook Error: ${err.message}`, { status: 400 });
    }

    const supabase = createClient(
        Deno.env.get("SUPABASE_URL") ?? "",
        Deno.env.get("SUPABASE_SERVICE_ROLE_KEY") ?? ""
    );

    console.log(`Received event: ${event.type}`);

    // Helper to safely convert Stripe timestamp to ISO
    const toISO = (ts: number | null | undefined) => {
        if (!ts) return null;
        try {
            return new Date(ts * 1000).toISOString();
        } catch (e) {
            console.error("Date conversion error for TS:", ts, e);
            return null;
        }
    };

    try {
        if (event.type === "customer.subscription.created" || event.type === "customer.subscription.updated") {
            const subscription = event.data.object;
            const customerId = subscription.customer as string;

            if (!customerId) {
                console.error("No customer ID in subscription object");
                return new Response("Invalid subscription data", { status: 400 });
            }

            const customer = await stripe.customers.retrieve(customerId);
            const email = (customer as any).email;
            let preferredLocale = (customer as any).preferred_locales?.[0]?.substring(0, 2).toLowerCase() || 'en';
            if (!['en', 'lt', 'ru'].includes(preferredLocale)) preferredLocale = 'en';

            if (!email) {
                console.error('No email found for customer', customerId);
                return new Response("No email found", { status: 400 });
            }

            console.log(`Processing subscription for: ${email} (${preferredLocale})`);

            // Safe date handling
            const start = toISO(subscription.current_period_start) || toISO(subscription.start_date) || toISO(subscription.created);
            const end = toISO(subscription.current_period_end) || toISO(subscription.trial_end);

            // sync subscription data
            const subscriptionData = {
                stripe_customer_id: customerId,
                stripe_subscription_id: subscription.id,
                email: email,
                status: subscription.status,
                plan_interval: subscription.items?.data?.[0]?.plan?.interval || 'month',
                current_period_start: start,
                current_period_end: end,
            };

            const { error: upsertError } = await supabase
                .from("subscriptions")
                .upsert(subscriptionData, { onConflict: "stripe_subscription_id" });

            if (upsertError) console.error("Error upserting subscription:", upsertError);

            // Account Creation / Email Logic
            if (event.type === "customer.subscription.created") {
                const tempPassword = generatePassword();

                // Attempt to create user
                const { data: newUser, error: createError } = await supabase.auth.admin.createUser({
                    email: email,
                    password: tempPassword,
                    email_confirm: true // Auto-confirm
                });

                if (createError) {
                    console.log(`User creation note (likely exists): ${createError.message}. Sending Welcome Back email.`);

                    // Send "Welcome Back" Email
                    const html = generateEmailHtml(preferredLocale as any, 'welcomeBack', { email });
                    try {
                        const res = await resend.emails.send({
                            from: 'newmindr <hello@newmindr.com>',
                            to: email,
                            subject: (translations[preferredLocale as 'en' | 'lt' | 'ru'] || translations.en).welcomeBack.title,
                            html: html
                        });
                        console.log("Welcome Back email sent:", res);
                    } catch (e) {
                        console.error("Resend Error (Welcome Back):", e);
                    }

                } else if (newUser) {
                    console.log("User created successfully. Sending New Account email...");

                    // Send "New Account" Email
                    const html = generateEmailHtml(preferredLocale as any, 'welcome', { email, password: tempPassword });
                    try {
                        const res = await resend.emails.send({
                            from: 'newmindr <hello@newmindr.com>',
                            to: email,
                            subject: (translations[preferredLocale as 'en' | 'lt' | 'ru'] || translations.en).welcome.title,
                            html: html
                        });
                        console.log("New Account email sent:", res);
                    } catch (e) {
                        console.error("Resend Error (New Account):", e);
                    }
                }
            }
        }
    } catch (err) {
        console.error("Handler error:", err);
        return new Response(JSON.stringify({ error: err.message }), {
            status: 500,
            headers: { "Content-Type": "application/json" },
        });
    }

    return new Response(JSON.stringify({ received: true }), {
        headers: { "Content-Type": "application/json" },
    });
});
