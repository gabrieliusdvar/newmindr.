import { Language, translations } from './translations';
import { STRIPE_LINKS } from './emailConfig';

/**
 * Generates a beautiful, premium HTML email template based on the 
 * neo-brutalist design of newmindr.com
 */
export function generateEmailHtml(lang: Language, type: 'newsletter' | 'trial' | 'contact', data: any) {
    const t = translations[lang].emails[type];
    const shared = translations[lang].emails.contact; // Using contact as source for shared footer keys

    // CUSTOM NEWSLETTER TEMPLATES PROVIDED BY USER
    if (type === 'newsletter') {
        const baseUrl = 'https://newmindr.pages.dev/newsletter/images/';
        const unsubscribeText = shared.unsubscribe;

        let newsletterHtml = '';

        if (lang === 'lt') {
            newsletterHtml = `<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd"><html><head><meta name="viewport" content="width=device-width, initial-scale=1.0"><meta http-equiv="Content-Type" content="text/html; charset=UTF-8"> </head><body style="width:100%;background-color:#f0f1f5;margin:0;padding:0"><table width="100%" border="0" cellpadding="0" cellspacing="0" bgcolor="#f0f1f5"><tbody><tr><td align="center"> <table align="center" width="100%" border="0" cellpadding="0" cellspacing="0" style="max-width:600px;background-color:#ffffff"><tbody><tr><td style="padding:10px 0"><img src="${baseUrl}e1c32af7216d822d5e67de5642f69670.png" alt="newmindr. Naujienlaiškis" width="600" style="display:block;width:100%;height:auto;"></td></tr><tr><td style="padding:10px 0"><img src="${baseUrl}f792eb1e8b56dc33bcae2476b015b3d9.png" alt="Atraskite naujas galimybes" width="600" style="display:block;width:100%;height:auto;"></td></tr></tbody></table> </td></tr></tbody></table></body></html>`;
        } else if (lang === 'ru') {
            newsletterHtml = `<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd"><html><head><meta name="viewport" content="width=device-width, initial-scale=1.0"><meta http-equiv="Content-Type" content="text/html; charset=UTF-8"> </head><body style="width:100%;background-color:#f0f1f5;margin:0;padding:0"><table width="100%" border="0" cellpadding="0" cellspacing="0" bgcolor="#f0f1f5"><tbody><tr><td align="center"> <table align="center" width="100%" border="0" cellpadding="0" cellspacing="0" style="max-width:600px;background-color:#ffffff"><tbody><tr><td style="padding:10px 0"><img src="${baseUrl}f00c60897cb2eeb4b98d8875197bcf36.png" alt="newmindr. Новости" width="600" style="display:block;width:100%;height:auto;"></td></tr><tr><td style="padding:10px 0"><img src="${baseUrl}42e30765187a3a740111d37e904f5cb5.png" alt="Узнайте больше" width="600" style="display:block;width:100%;height:auto;"></td></tr></tbody></table> </td></tr></tbody></table></body></html>`;
        } else {
            newsletterHtml = `<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd"><html><head><meta name="viewport" content="width=device-width, initial-scale=1.0"><meta http-equiv="Content-Type" content="text/html; charset=UTF-8"> </head><body style="width:100%;background-color:#f0f1f5;margin:0;padding:0"><table width="100%" border="0" cellpadding="0" cellspacing="0" bgcolor="#f0f1f5"><tbody><tr><td align="center"> <table align="center" width="100%" border="0" cellpadding="0" cellspacing="0" style="max-width:600px;background-color:#ffffff"><tbody><tr><td style="padding:10px 0"><img src="${baseUrl}aff6dd8b8a3b6658dc9c21e719e0921f.png" alt="newmindr. Newsletter" width="600" style="display:block;width:100%;height:auto;"></td></tr><tr><td style="padding:10px 0"><img src="${baseUrl}e08d778ef3a764e65fd10a0d34eb5f6f.png" alt="Discover more" width="600" style="display:block;width:100%;height:auto;"></td></tr></tbody></table> </td></tr></tbody></table></body></html>`;
        }

        const footerHtml = `
            <table width="100%" border="0" cellpadding="0" cellspacing="0">
                <tr>
                    <td align="center" style="padding: 20px 0; background-color: #f0f1f5;">
                        <p style="font-family: sans-serif; font-size: 12px; color: #666; margin: 0;">
                            ${unsubscribeText.split('UNSUBSCRIBE')[0]} 
                            <a href="https://newmindr.com/unsubscribe" style="color: #3b82f6; font-weight: bold; text-decoration: none;">${unsubscribeText.includes('UNSUBSCRIBE') ? 'UNSUBSCRIBE' : 'ATSISAKYTI'}</a>
                        </p>
                    </td>
                </tr>
            </table>
        `;

        return newsletterHtml.replace('</body></html>', `${footerHtml}</body></html>`);
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

    const themeColor = type === 'trial' ? colors.primary : type === 'newsletter' ? colors.secondary : colors.success;

    const interpolate = (str: string, values: any) => {
        return str.replace(/{(\w+)}/g, (_, key) => values[key] || '');
    };

    const header = `
        <div style="background: ${themeColor}; padding: 40px 20px; text-align: center; border-bottom: 4px solid ${colors.black}; position: relative; overflow: hidden;">
            <h1 style="color: ${type === 'newsletter' ? colors.black : colors.white}; margin: 0; font-family: sans-serif; font-size: 32px; font-weight: 900;">
                ${t.title}
            </h1>
        </div>
    `;

    const footer = `
        <div style="background: ${colors.black}; padding: 30px 20px; text-align: center; color: ${colors.white}; font-family: sans-serif;">
            <p style="margin: 0; font-size: 14px; font-weight: bold;">${t.footer || 'newmindr. Learning Reimagined'}</p>
            <p style="margin-top: 15px; font-size: 10px; color: #888;">
                ${shared.unsubscribe.split('UNSUBSCRIBE')[0]} 
                <a href="https://newmindr.com/unsubscribe" style="color: #3b82f6; text-decoration: none;">${shared.unsubscribe.includes('UNSUBSCRIBE') ? 'UNSUBSCRIBE' : 'ATSISAKYTI'}</a>
            </p>
        </div>
    `;

    let actionButton = '';
    if (type === 'trial') {
        actionButton = `
            <div style="margin-top: 30px; text-align: center;">
                <a href="${STRIPE_LINKS.TRIAL}" style="display: inline-block; background: ${colors.black}; color: ${colors.white}; padding: 18px 30px; border-radius: 12px; text-decoration: none; font-weight: 900; font-size: 16px; border: 2px solid ${colors.white}; box-shadow: 4px 4px 0px 0px ${colors.primary};">
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
