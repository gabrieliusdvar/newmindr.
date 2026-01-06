import { serve } from "https://deno.land/std@0.168.0/http/server.ts";
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
        title: "Access Granted",
        greeting: "Welcome to newmindr., {email}!",
        content: "We've created a secure account for you to access the learning platform. Here are your login credentials:",
        emailLabel: "Email:",
        passwordLabel: "Temporary Password:",
        cta: "LOGIN TO PLATFORM",
        footer: "Please change your password after your first login."
    },
    lt: {
        title: "Prieiga Suteikta",
        greeting: "Sveiki atvykę į newmindr., {email}!",
        content: "Sukūrėme jums saugią paskyrą mokymosi platformai pasiekti. Štai jūsų prisijungimo duomenys:",
        emailLabel: "El. paštas:",
        passwordLabel: "Laikinas slaptažodis:",
        cta: "PRISIJUNGTI Į PLATFORMĄ",
        footer: "Prašome pasikeisti slaptažodį po pirmojo prisijungimo."
    },
    ru: {
        title: "Доступ Разрешен",
        greeting: "Добро пожаловать в newmindr., {email}!",
        content: "Мы создали для вас аккаунт для доступа к платформе обучения. Вот ваши данные для входа:",
        emailLabel: "Email:",
        passwordLabel: "Временный пароль:",
        cta: "ВОЙТИ В ПЛАТФОРМУ",
        footer: "Пожалуйста, смените пароль после первого входа."
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

function generateEmailHtml(lang: 'en' | 'lt' | 'ru', data: any) {
    const t = translations[lang] || translations.en;
    const colors = {
        purple: '#8b5cf6',
        black: '#111111',
        white: '#ffffff',
        gray: '#f3f4f6'
    };
    const loginLink = 'https://learning.newmindr.com/login';

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
                                            <td style="font-weight: 700; color: ${colors.black}; font-size: 18px; letter-spacing: 1px; background: #fff; padding: 5px 10px; border: 1px solid #000; display: inline-block;">${data.password}</td>
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

serve(async (req) => {
    const signature = req.headers.get("Stripe-Signature");
    const webhookSecret = Deno.env.get("STRIPE_WEBHOOK_SECRET");

    if (!signature || !webhookSecret) {
        return new Response("Missing signature or secret", { status: 400 });
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
        return new Response(`Webhook Error: ${err.message}`, { status: 400 });
    }

    const supabase = createClient(
        Deno.env.get("SUPABASE_URL") ?? "",
        Deno.env.get("SUPABASE_SERVICE_ROLE_KEY") ?? ""
    );

    console.log(`Received event: ${event.type}`);

    try {
        if (event.type === "customer.subscription.created" || event.type === "customer.subscription.updated") {
            const subscription = event.data.object;
            const customerId = subscription.customer as string;
            const customer = await stripe.customers.retrieve(customerId);
            const email = (customer as any).email;
            let preferredLocale = (customer as any).preferred_locales?.[0]?.substring(0, 2).toLowerCase() || 'en';
            if (!['en', 'lt', 'ru'].includes(preferredLocale)) preferredLocale = 'en';

            if (!email) {
                console.error('No email found for customer', customerId);
                return new Response("No email found", { status: 400 });
            }

            console.log(`Processing subscription for: ${email} (${preferredLocale})`);

            // sync subscription data
            const subscriptionData = {
                stripe_customer_id: customerId,
                stripe_subscription_id: subscription.id,
                email: email,
                status: subscription.status,
                plan_interval: subscription.items.data[0].plan.interval,
                plan_amount: subscription.items.data[0].plan.amount,
                currency: subscription.items.data[0].plan.currency,
                current_period_start: new Date(subscription.current_period_start * 1000).toISOString(),
                current_period_end: new Date(subscription.current_period_end * 1000).toISOString(),
                updated_at: new Date().toISOString(),
            };

            const { error: upsertError } = await supabase
                .from("subscriptions")
                .upsert(subscriptionData, { onConflict: "stripe_subscription_id" });

            if (upsertError) console.error("Error upserting subscription:", upsertError);

            // Account Creation Logic (Only on new subscription creation or if user doesn't exist)
            if (event.type === "customer.subscription.created") {
                // Check if user exists
                const { data: { users }, error: userError } = await supabase.auth.admin.listUsers();
                const existingUser = users.find(u => u.email === email);

                if (!existingUser) {
                    console.log(`Creating new user for ${email}...`);
                    const tempPassword = generatePassword();

                    const { data: newUser, error: createError } = await supabase.auth.admin.createUser({
                        email: email,
                        password: tempPassword,
                        email_confirm: true // Auto-confirm
                    });

                    if (createError) {
                        console.error("Error creating user:", createError);
                    } else if (newUser) {
                        console.log("User created successfully. Sending welcome email...");

                        // Send Email
                        const html = generateEmailHtml(preferredLocale as any, { email, password: tempPassword });

                        try {
                            const emailData = await resend.emails.send({
                                from: 'newmindr <hello@newmindr.com>', // User SHOULD populate this in env if different
                                to: email,
                                subject: translations[preferredLocale as 'en' | 'lt' | 'ru'].title,
                                html: html
                            });
                            console.log("Welcome email sent:", emailData);
                        } catch (emailErr) {
                            console.error("Failed to send email:", emailErr);
                        }
                    }
                } else {
                    console.log(`User ${email} already exists. Skipping account creation.`);
                    // Optional: Send email saying "Your subscription is active, login with existing account"
                }
            }
        }
    } catch (err) {
        console.error(err);
        return new Response(JSON.stringify({ error: err.message }), {
            status: 500,
            headers: { "Content-Type": "application/json" },
        });
    }

    return new Response(JSON.stringify({ received: true }), {
        headers: { "Content-Type": "application/json" },
    });
});
