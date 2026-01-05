import { Language, translations } from './translations';
import { STRIPE_LINKS } from './emailConfig';

/**
 * Hosted image URLs for email templates
 * Using hosted URLs instead of base64 for better email client compatibility
 */
const EMAIL_IMAGE_URLS = {
    // Base URL for hosted images
    baseUrl: 'https://newmindr.pages.dev',

    // Trial images
    trialEnHeader: 'https://newmindr.pages.dev/trial/images/b880af19a6348b92c6f411a4c22f48dd.png',
    trialEnEagle: 'https://newmindr.pages.dev/trial/images/86023f0fadcdbb15636cb424e619e382.png',
    trialLtHeader: 'https://newmindr.pages.dev/trial/images/lt-header.png',
    trialLtEagle: 'https://newmindr.pages.dev/trial/images/lt-eagle.png',
    trialRuHeader: 'https://newmindr.pages.dev/trial/images/ru-header.png',
    trialRuEagle: 'https://newmindr.pages.dev/trial/images/ru-eagle.png',

    // Newsletter images
    newsletterEnHeader: 'https://newmindr.pages.dev/newsletter/images/aff6dd8b8a3b6658dc9c21e719e0921f.png',
    newsletterEnContent: 'https://newmindr.pages.dev/newsletter/images/e08d778ef3a764e65fd10a0d34eb5f6f.png',
    newsletterLtHeader: 'https://newmindr.pages.dev/newsletter/images/e1c32af7216d822d5e67de5642f69670.png',
    newsletterLtContent: 'https://newmindr.pages.dev/newsletter/images/f792eb1e8b56dc33bcae2476b015b3d9.png',
    newsletterRuHeader: 'https://newmindr.pages.dev/newsletter/images/f00c60897cb2eeb4b98d8875197bcf36.png',
    newsletterRuContent: 'https://newmindr.pages.dev/newsletter/images/42e30765187a3a740111d37e904f5cb5.png',
};

/**
 * Generates a beautiful, premium HTML email template based on the 
 * neo-brutalist design of newmindr.com
 */
export function generateEmailHtml(lang: Language, type: 'newsletter' | 'trial' | 'contact', data: any) {
    const t = translations[lang].emails[type];
    const shared = translations[lang].emails.contact; // Using contact as source for shared footer keys

    const getUnsubscribeParts = (text: string) => {
        const parts = text.split('? ');
        if (parts.length > 1) {
            return {
                prompt: parts[0] + '? ',
                action: parts[1]
            };
        }
        // Fallback
        const words = text.split(' ');
        const action = words[words.length - 1];
        const prompt = words.slice(0, -1).join(' ') + ' ';
        return { prompt, action };
    };

    const unsub = getUnsubscribeParts(shared.unsubscribe);

    // CUSTOM TRIAL TEMPLATES PROVIDED BY USER
    if (type === 'trial') {
        const langKey = (lang.toUpperCase() as keyof typeof STRIPE_LINKS) || 'EN';
        const trialLink = STRIPE_LINKS[langKey]?.TRIAL || STRIPE_LINKS.EN.TRIAL;

        if (lang === 'en') {
            const baseUrl = 'https://newmindr.pages.dev/trial/images/';
            return `<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd"><html><head><meta name="viewport" content="width=device-width, initial-scale=1.0"><meta http-equiv="Content-Type" content="text/html; charset=UTF-8"></head><body style="width:100%;background-color:#f0f1f5;margin:0;padding:0"><table width="100%" border="0" cellpadding="0" cellspacing="0" bgcolor="#f0f1f5"><tbody><tr><td align="center"><table align="center" width="100%" border="0" cellpadding="0" cellspacing="0" style="max-width:600px;background-color:#f8f4eb"><tbody><tr><td><img src="${baseUrl}b880af19a6348b92c6f411a4c22f48dd.png" width="600" style="display:block;width:100%;height:auto;"></td></tr><tr><td style="padding:20px;text-align:center;font-family:Verdana, Geneva, sans-serif;font-size:26px;line-height:1.2;color:#000">You’re just one step away from starting your 7-day free trial.</td></tr><tr><td style="padding:20px;font-family:Verdana, Geneva, sans-serif;font-size:16px;line-height:1.4;color:#000;text-align:left">To activate your trial and get full access to all courses, please complete the checkout through our secure payment system.<br><span style="color:#cb6ce6">&gt;</span> You won’t be charged today - billing starts only after the trial ends.</td></tr><tr><td align="center" style="padding:20px"><a href="${trialLink}" target="_blank" style="display:inline-block;padding:15px 30px;background-color:#e2a9f1;color:#000;font-weight:bold;font-size:18px;text-decoration:none;border-radius:0px;font-family:Verdana, Geneva, sans-serif">Start 7-day free trial</a></td></tr><tr><td style="padding:20px;text-align:center;font-family:Verdana, Geneva, sans-serif;font-size:24px;color:#000">What you’ll get during the trial:<br><span style="font-size:16px;line-height:1.8">• Full access to all courses<br>• Learn anytime, at your own pace<br>• Cancel anytime before the trial ends</span></td></tr><tr><td align="center" style="padding:20px"><img src="${baseUrl}86023f0fadcdbb15636cb424e619e382.png" width="275" style="display:block;max-width:275px;height:auto;"></td></tr><tr><td style="padding:30px;text-align:center;background-color:#fffcf5;font-family:Verdana, Geneva, sans-serif;font-size:13px"><a href="mailto:hello@newmindr.com" style="color:#08040a;text-decoration:none">hello@newmindr.com</a><br>© newmindr.</td></tr></tbody></table></td></tr></tbody></table><table width="100%" border="0" cellpadding="0" cellspacing="0"><tr><td align="center" style="padding: 20px 0; background-color: #f0f1f5;"><p style="font-family: sans-serif; font-size: 11px; color: #666; margin: 0;">${unsub.prompt} <a href="https://newmindr.com/unsubscribe" style="color: #3b82f6; font-weight: bold; text-decoration: none;">${unsub.action}</a></p></td></tr></table></body></html>`;
        } else if (lang === 'lt') {
            return `<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd"><html><head><meta name="viewport" content="width=device-width, initial-scale=1.0"><meta http-equiv="Content-Type" content="text/html; charset=UTF-8"></head><body style="width:100%;background-color:#f0f1f5;margin:0;padding:0"><table width="100%" border="0" cellpadding="0" cellspacing="0" bgcolor="#f0f1f5"><tbody><tr><td align="center"><table align="center" width="100%" border="0" cellpadding="0" cellspacing="0" style="max-width:600px;background-color:#f8f4eb"><tbody><tr><td><img src="${EMAIL_IMAGES.trialLtHeader}" width="600" style="display:block;width:100%;height:auto;"></td></tr><tr><td style="padding:20px;text-align:center;font-family:Verdana, Geneva, sans-serif;font-size:26px;line-height:1.2;color:#000">Liko vos vienas žingsnis iki 7 dienų nemokamo bandomojo laikotarpio.</td></tr><tr><td style="padding:20px;font-family:Verdana, Geneva, sans-serif;font-size:16px;line-height:1.4;color:#000;text-align:left">Norėdami aktyvuoti bandomąjį laikotarpį ir gauti pilną prieigą prie visų kursų, užbaikite atsiskaitymą per mūsų saugią mokėjimo sistemą.<br><span style="color:#cb6ce6">&gt;</span> Mokestis nebus taikomas iki bandomojo laikotarpio pabaigos.</td></tr><tr><td align="center" style="padding:20px"><a href="${trialLink}" target="_blank" style="display:inline-block;padding:15px 30px;background-color:#e2a9f1;color:#000;font-weight:bold;font-size:18px;text-decoration:none;border-radius:0px;font-family:Verdana, Geneva, sans-serif">Pradėti 7 dienų nemokamą bandomąjį laikotarpį</a></td></tr><tr><td style="padding:20px;text-align:center;font-family:Verdana, Geneva, sans-serif;font-size:20px;color:#000"><b>Ką gausite bandomojo laikotarpio metu:</b><br><span style="font-size:15px;line-height:1.8">• Pilną prieigą prie visų kursų<br>• Mokymąsi bet kada, jums patogiu tempu<br>• Galimybę bet kada atšaukti iki bandomojo laikotarpio pabaigos</span></td></tr><tr><td align="center" style="padding:20px"><img src="${EMAIL_IMAGES.trialLtEagle}" width="275" style="display:block;max-width:275px;height:auto;"></td></tr><tr><td style="padding:30px;text-align:center;background-color:#fffcf5;font-family:Verdana, Geneva, sans-serif;font-size:13px"><a href="mailto:hello@newmindr.com" style="color:#08040a;text-decoration:none">hello@newmindr.com</a><br>© newmindr.</td></tr></tbody></table></td></tr></tbody></table><table width="100%" border="0" cellpadding="0" cellspacing="0"><tr><td align="center" style="padding: 20px 0; background-color: #f0f1f5;"><p style="font-family: sans-serif; font-size: 11px; color: #666; margin: 0;">${unsub.prompt} <a href="https://newmindr.com/unsubscribe" style="color: #3b82f6; font-weight: bold; text-decoration: none;">${unsub.action}</a></p></td></tr></table></body></html>`;
        } else if (lang === 'ru') {
            return `<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd"><html><head><meta name="viewport" content="width=device-width, initial-scale=1.0"><meta http-equiv="Content-Type" content="text/html; charset=UTF-8"></head><body style="width:100%;background-color:#f0f1f5;margin:0;padding:0"><table width="100%" border="0" cellpadding="0" cellspacing="0" bgcolor="#f0f1f5"><tbody><tr><td align="center"><table align="center" width="100%" border="0" cellpadding="0" cellspacing="0" style="max-width:600px;background-color:#f8f4eb"><tbody><tr><td><img src="${EMAIL_IMAGES.trialRuHeader}" width="600" style="display:block;width:100%;height:auto;"></td></tr><tr><td style="padding:20px;text-align:center;font-family:Verdana, Geneva, sans-serif;font-size:26px;line-height:1.2;color:#000">Остался всего один шаг до 7-дневного бесплатного пробного периода.</td></tr><tr><td style="padding:20px;font-family:Verdana, Geneva, sans-serif;font-size:16px;line-height:1.4;color:#000;text-align:left">Чтобы активировать пробный период и получить полный доступ ко всем курсам, завершите оплату через нашу безопасную платёжную систему.<br><span style="color:#cb6ce6">&gt;</span> Оплата не будет списана до окончания пробного периода.</td></tr><tr><td align="center" style="padding:20px"><a href="${trialLink}" target="_blank" style="display:inline-block;padding:15px 30px;background-color:#e2a9f1;color:#000;font-weight:bold;font-size:18px;text-decoration:none;border-radius:0px;font-family:Verdana, Geneva, sans-serif">Начать 7-дневный бесплатный пробный период</a></td></tr><tr><td style="padding:20px;text-align:center;font-family:Verdana, Geneva, sans-serif;font-size:20px;color:#000"><b>Что вы получите в течение пробного периода:</b><br><span style="font-size:15px;line-height:1.8">• Полный доступ ко всем курсам<br>• Обучение в любое время, в удобном для вас темпе<br>• Возможность отменить подписку в любое время до окончания пробного периода</span></td></tr><tr><td align="center" style="padding:20px"><img src="${EMAIL_IMAGES.trialRuEagle}" width="275" style="display:block;max-width:275px;height:auto;"></td></tr><tr><td style="padding:30px;text-align:center;background-color:#fffcf5;font-family:Verdana, Geneva, sans-serif;font-size:13px"><a href="mailto:hello@newmindr.com" style="color:#08040a;text-decoration:none">hello@newmindr.com</a><br>© newmindr.</td></tr></tbody></table></td></tr></tbody></table><table width="100%" border="0" cellpadding="0" cellspacing="0"><tr><td align="center" style="padding: 20px 0; background-color: #f0f1f5;"><p style="font-family: sans-serif; font-size: 11px; color: #666; margin: 0;">${unsub.prompt} <a href="https://newmindr.com/unsubscribe" style="color: #3b82f6; font-weight: bold; text-decoration: none;">${unsub.action}</a></p></td></tr></table></body></html>`;
        }
    }

    // CUSTOM NEWSLETTER TEMPLATES PROVIDED BY USER
    if (type === 'newsletter') {

        let newsletterHtml = '';

        if (lang === 'lt') {
            newsletterHtml = `<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd"><html><head><meta name="viewport" content="width=device-width, initial-scale=1.0"><meta http-equiv="Content-Type" content="text/html; charset=UTF-8"> </head><body style="width:100%;background-color:#f0f1f5;margin:0;padding:0"><table width="100%" border="0" cellpadding="0" cellspacing="0" bgcolor="#f0f1f5"><tbody><tr><td align="center"> <table align="center" width="100%" border="0" cellpadding="0" cellspacing="0" style="max-width:600px;background-color:#ffffff"><tbody><tr><td style="padding:10px 0"><img src="${EMAIL_IMAGES.newsletterLtHeader}" alt="newmindr. Naujienlaiškis" width="600" style="display:block;width:100%;height:auto;"></td></tr><tr><td style="padding:10px 0"><img src="${EMAIL_IMAGES.newsletterLtContent}" alt="Atraskite naujas galimybes" width="600" style="display:block;width:100%;height:auto;"></td></tr></tbody></table> </td></tr></tbody></table></body></html>`;
        } else if (lang === 'ru') {
            newsletterHtml = `<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd"><html><head><meta name="viewport" content="width=device-width, initial-scale=1.0"><meta http-equiv="Content-Type" content="text/html; charset=UTF-8"> </head><body style="width:100%;background-color:#f0f1f5;margin:0;padding:0"><table width="100%" border="0" cellpadding="0" cellspacing="0" bgcolor="#f0f1f5"><tbody><tr><td align="center"> <table align="center" width="100%" border="0" cellpadding="0" cellspacing="0" style="max-width:600px;background-color:#ffffff"><tbody><tr><td style="padding:10px 0"><img src="${EMAIL_IMAGES.newsletterRuHeader}" alt="newmindr. Новости" width="600" style="display:block;width:100%;height:auto;"></td></tr><tr><td style="padding:10px 0"><img src="${EMAIL_IMAGES.newsletterRuContent}" alt="Узнайте больше" width="600" style="display:block;width:100%;height:auto;"></td></tr></tbody></table> </td></tr></tbody></table></body></html>`;
        } else {
            newsletterHtml = `<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd"><html><head><meta name="viewport" content="width=device-width, initial-scale=1.0"><meta http-equiv="Content-Type" content="text/html; charset=UTF-8"> </head><body style="width:100%;background-color:#f0f1f5;margin:0;padding:0"><table width="100%" border="0" cellpadding="0" cellspacing="0" bgcolor="#f0f1f5"><tbody><tr><td align="center"> <table align="center" width="100%" border="0" cellpadding="0" cellspacing="0" style="max-width:600px;background-color:#ffffff"><tbody><tr><td style="padding:10px 0"><img src="${EMAIL_IMAGES.newsletterEnHeader}" alt="newmindr. Newsletter" width="600" style="display:block;width:100%;height:auto;"></td></tr><tr><td style="padding:10px 0"><img src="${EMAIL_IMAGES.newsletterEnContent}" alt="Discover more" width="600" style="display:block;width:100%;height:auto;"></td></tr></tbody></table> </td></tr></tbody></table></body></html>`;
        }

        const footerHtml = `
            <table width="100%" border="0" cellpadding="0" cellspacing="0">
                <tr>
                    <td align="center" style="padding: 20px 0; background-color: #f0f1f5;">
                        <p style="font-family: sans-serif; font-size: 12px; color: #666; margin: 0;">
                            ${unsub.prompt} 
                            <a href="https://www.newmindr.com/unsubscribe" style="color: #3b82f6; font-weight: bold; text-decoration: none;">${unsub.action}</a>
                        </p>
                    </td>
                </tr>
            </table>
        `;

        return newsletterHtml.replace('</body></html>', `${footerHtml}</body></html>`);
    }

    // CUSTOM CONTACT TEMPLATE
    if (type === 'contact') {
        const colors = {
            emerald: '#34d399',
            black: '#111111',
            white: '#ffffff',
            gray: '#f3f4f6',
            yellow: '#fcd34d'
        };

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
                            <!-- Header -->
                            <tr>
                                <td style="background-color: ${colors.emerald}; padding: 40px 30px; border-bottom: 4px solid ${colors.black}; text-align: center;">
                                    <h1 style="margin: 0; font-size: 32px; font-weight: 900; color: ${colors.black}; text-transform: uppercase; letter-spacing: -1px;">
                                        ${t.title}
                                    </h1>
                                </td>
                            </tr>
                            
                            <!-- Content -->
                            <tr>
                                <td style="padding: 40px 30px;">
                                    <table width="100%" border="0" cellspacing="0" cellpadding="0">
                                        <!-- Sender Info -->
                                        <tr>
                                            <td style="padding-bottom: 30px;">
                                                <table width="100%" border="0" cellspacing="0" cellpadding="10" style="background-color: ${colors.gray}; border: 2px solid ${colors.black}; border-radius: 12px;">
                                                    <tr>
                                                        <td width="30%" style="font-weight: 900; text-transform: uppercase; font-size: 12px; color: #666;">${t.name}</td>
                                                        <td style="font-weight: 700; font-size: 16px; color: ${colors.black};">${data.name}</td>
                                                    </tr>
                                                    <tr>
                                                        <td style="font-weight: 900; text-transform: uppercase; font-size: 12px; color: #666;">${t.email}</td>
                                                        <td style="font-weight: 700; font-size: 16px; color: ${colors.black};"><a href="mailto:${data.email}" style="color: #3b82f6; text-decoration: none;">${data.email}</a></td>
                                                    </tr>
                                                </table>
                                            </td>
                                        </tr>

                                        <!-- Help Options -->
                                        <tr>
                                            <td style="padding-bottom: 30px;">
                                                <p style="margin: 0 0 10px 0; font-weight: 900; text-transform: uppercase; font-size: 12px; color: #666;">${t.help}</p>
                                                <div style="background-color: ${colors.yellow}; padding: 10px 15px; border: 2px solid ${colors.black}; border-radius: 8px; display: inline-block; font-weight: 900; font-size: 14px; color: ${colors.black};">
                                                    ${data.helpOptions || 'General'}
                                                </div>
                                            </td>
                                        </tr>

                                        <!-- Message -->
                                        <tr>
                                            <td>
                                                <p style="margin: 0 0 10px 0; font-weight: 900; text-transform: uppercase; font-size: 12px; color: #666;">${t.message}</p>
                                                <div style="background-color: ${colors.white}; padding: 20px; border: 2px solid ${colors.black}; border-radius: 12px; font-size: 16px; line-height: 1.6; color: ${colors.black}; white-space: pre-wrap;">${data.message}</div>
                                            </td>
                                        </tr>
                                    </table>
                                </td>
                            </tr>

                            <!-- Footer -->
                            <tr>
                                <td style="background-color: ${colors.black}; padding: 30px; text-align: center;">
                                    <p style="margin: 0; color: ${colors.white}; font-size: 14px; font-weight: 900; text-transform: uppercase; letter-spacing: 1px;">
                                        ${t.footer}
                                    </p>
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

    // Theme colors
    const colors = {
        primary: '#3b82f6', // Trial (Blue)
        secondary: '#fbbf24', // Newsletter (Yellow)
        success: '#10b981', // Contact (Green)
        black: '#111111',
        white: '#ffffff',
        gray: '#f3f4f6'
    };

    const themeColor = type === 'trial' ? colors.primary : colors.success;

    const interpolate = (str: string, values: any) => {
        return str.replace(/{(\w+)}/g, (_, key) => values[key] || '');
    };

    const header = `
        <div style="background: ${themeColor}; padding: 40px 20px; text-align: center; border-bottom: 4px solid ${colors.black}; position: relative; overflow: hidden;">
            <h1 style="color: ${colors.white}; margin: 0; font-family: sans-serif; font-size: 32px; font-weight: 900;">
                ${t.title}
            </h1>
        </div>
    `;

    const footer = `
        <div style="background: ${colors.black}; padding: 30px 20px; text-align: center; color: ${colors.white}; font-family: sans-serif;">
            <p style="margin: 0; font-size: 14px; font-weight: bold;">${t.footer || 'newmindr. Learning Reimagined'}</p>
            <p style="margin-top: 15px; font-size: 10px; color: #888;">
                ${unsub.prompt} 
                <a href="https://www.newmindr.com/unsubscribe" style="color: #3b82f6; text-decoration: none;">${unsub.action}</a>
            </p>
        </div>
    `;

    let actionButton = '';
    if (type === 'trial') {
        const langKey = (lang.toUpperCase() as keyof typeof STRIPE_LINKS) || 'EN';
        const trialLink = STRIPE_LINKS[langKey]?.TRIAL || STRIPE_LINKS.EN.TRIAL;

        actionButton = `
            <div style="margin-top: 30px; text-align: center;">
                <a href="${trialLink}" style="display: inline-block; background: ${colors.black}; color: ${colors.white}; padding: 18px 30px; border-radius: 12px; text-decoration: none; font-weight: 900; font-size: 16px; border: 2px solid ${colors.white}; box-shadow: 4px 4px 0px 0px ${colors.primary};">
                    ${lang === 'lt' ? 'AKTYVUOTI NEMOKAMĄ BANDYMĄ' : lang === 'ru' ? 'АКТИВИРОВАТЬ БЕСПЛАТНУЮ ВЕРСИЮ' : 'ACTIVATE FREE TRIAL'}
                </a>
            </div>
        `;
    }

    let bodyContent = `
        <div style="padding: 40px 30px; font-family: sans-serif;">
            <p style="font-size: 18px; line-height: 1.6; color: ${colors.black};">${interpolate(t.greeting, data)}</p>
            <p style="font-size: 16px; line-height: 1.6; color: #444; margin-top: 20px;">${t.content || t.subGreeting || ''}</p>
            ${actionButton}
        </div>
    `;

    return `<!DOCTYPE html><html><body style="margin: 0; padding: 0; background-color: ${colors.gray};"><table width="100%" border="0" cellspacing="0" cellpadding="0"><tr><td align="center" style="padding: 40px 10px;"><table width="600" border="4" cellspacing="0" cellpadding="0" style="background: ${colors.white}; border-color: ${colors.black}; border-style: solid;"><tr><td>${header}${bodyContent}${footer}</td></tr></table></td></tr></table></body></html>`;
}
