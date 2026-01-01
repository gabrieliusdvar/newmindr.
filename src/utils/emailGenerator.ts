import { Language, translations } from './translations';

/**
 * Generates a beautiful, premium HTML email template based on the 
 * neo-brutalist design of newmindr.com
 */
export function generateEmailHtml(lang: Language, type: 'newsletter' | 'trial' | 'contact', data: any) {
    const t = translations[lang].emails[type];

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

    // Helper to replace variables in translation strings
    const interpolate = (str: string, values: any) => {
        return str.replace(/{(\w+)}/g, (_, key) => values[key] || '');
    };

    const header = `
        <div style="background: ${themeColor}; padding: 40px 20px; text-align: center; border-bottom: 4px solid ${colors.black}; position: relative; overflow: hidden;">
            <!-- Simple background deco -->
            <div style="position: absolute; top: -10px; right: -10px; width: 60px; height: 60px; background: rgba(0,0,0,0.1); border-radius: 50%;"></div>
            <div style="position: absolute; bottom: 10px; left: 20px; width: 30px; height: 30px; background: rgba(255,255,255,0.2); border-radius: 4px; transform: rotate(15deg);"></div>
            
            <h1 style="color: ${type === 'newsletter' ? colors.black : colors.white}; margin: 0; font-family: 'Outfit', sans-serif; font-size: 36px; text-transform: uppercase; letter-spacing: -1px; font-weight: 900; font-style: italic;">
                ${t.title}
            </h1>
        </div>
    `;

    const footer = `
        <div style="background: ${colors.black}; padding: 30px 20px; text-align: center; color: ${colors.white};">
            <p style="margin: 0; font-size: 14px; font-weight: bold; font-family: sans-serif; letter-spacing: 1px;">
                ${t.footer || 'newmindr. Learning Reimagined'}
            </p>
            <div style="margin-top: 15px;">
                <a href="https://newmindr.com" style="color: ${colors.white}; text-decoration: none; font-size: 12px; margin: 0 10px; opacity: 0.6;">Website</a>
                <a href="https://instagram.com/newmindr" style="color: ${colors.white}; text-decoration: none; font-size: 12px; margin: 0 10px; opacity: 0.6;">Instagram</a>
            </div>
            <p style="margin-top: 20px; font-size: 10px; color: #555;">© ${new Date().getFullYear()} newmindr. Built for the next generation.</p>
        </div>
    `;

    let bodyContent = '';

    if (type === 'newsletter') {
        bodyContent = `
            <div style="padding: 40px 30px;">
                <p style="font-size: 18px; line-height: 1.6; color: ${colors.black}; font-family: sans-serif;">${t.greeting}</p>
                <p style="font-size: 16px; line-height: 1.6; color: #444; font-family: sans-serif; margin-top: 20px;">${t.content}</p>
                <div style="margin-top: 40px; text-align: center;">
                    <a href="https://newmindr.com/blog" style="display: inline-block; background: ${themeColor}; color: ${colors.black}; padding: 18px 35px; border: 3px solid ${colors.black}; border-radius: 12px; text-decoration: none; font-weight: 900; font-size: 16px; box-shadow: 6px 6px 0px 0px ${colors.black}; transition: all 0.2s;">
                        EXPLORE LATEST UPDATES
                    </a>
                </div>
            </div>
        `;
    } else if (type === 'trial') {
        bodyContent = `
            <div style="padding: 40px 30px;">
                <h2 style="font-size: 24px; color: ${colors.black}; font-family: 'Outfit', sans-serif; font-weight: 900;">${interpolate(t.greeting, data)}</h2>
                <p style="font-size: 18px; line-height: 1.6; color: #111; font-family: sans-serif; margin-top: 15px;">${t.subGreeting}</p>
                <p style="font-size: 16px; line-height: 1.6; color: #444; font-family: sans-serif; margin-top: 20px;">${t.content}</p>
                
                <div style="margin: 45px 0; text-align: center;">
                    <a href="https://newmindr.com" style="display: inline-block; background: ${colors.black}; color: ${colors.white}; padding: 20px 40px; border-radius: 15px; text-decoration: none; font-weight: 900; font-size: 18px; letter-spacing: 1px; box-shadow: 0px 10px 20px rgba(0,0,0,0.1);">
                        ${t.cta}
                    </a>
                </div>
                
                <div style="background: ${colors.gray}; border-radius: 16px; padding: 20px; border: 2px dashed #ccc; text-align: center;">
                    <p style="margin: 0; font-size: 14px; color: #666; font-style: italic;">${t.disclaimer}</p>
                </div>
            </div>
        `;
    } else if (type === 'contact') {
        bodyContent = `
            <div style="padding: 40px 30px;">
                <div style="background: ${colors.gray}; border: 3px solid ${colors.black}; border-radius: 20px; padding: 30px; box-shadow: 8px 8px 0px 0px rgba(16,185,129,0.2);">
                    <div style="margin-bottom: 20px;">
                        <label style="display: block; font-size: 10px; font-weight: 900; color: #999; text-transform: uppercase; margin-bottom: 5px;">${t.name}</label>
                        <p style="margin: 0; font-size: 18px; font-weight: 900; color: ${colors.black};">${data.name}</p>
                    </div>
                    <div style="margin-bottom: 20px;">
                        <label style="display: block; font-size: 10px; font-weight: 900; color: #999; text-transform: uppercase; margin-bottom: 5px;">${t.email}</label>
                        <p style="margin: 0; font-size: 18px; font-weight: 900; color: ${colors.black};">${data.email}</p>
                    </div>
                    <div style="margin-bottom: 20px;">
                        <label style="display: block; font-size: 10px; font-weight: 900; color: #999; text-transform: uppercase; margin-bottom: 5px;">${t.help}</label>
                        <p style="margin: 0; font-size: 16px; font-weight: 700; color: ${colors.black};">${data.helpOptions || 'General'}</p>
                    </div>
                    <div style="margin-top: 30px; border-top: 2px solid ${colors.black}; pt-20">
                        <label style="display: block; font-size: 10px; font-weight: 900; color: #999; text-transform: uppercase; margin: 20px 0 10px 0;">${t.message}</label>
                        <p style="margin: 0; font-size: 16px; line-height: 1.6; color: #111; white-space: pre-wrap; font-style: italic;">"${data.message}"</p>
                    </div>
                </div>
            </div>
        `;
    }

    return `
        <!DOCTYPE html>
        <html>
        <head>
            <meta charset="utf-8">
            <meta name="viewport" content="width=device-width, initial-scale=1.0">
            <title>${interpolate(t.subject, data)}</title>
            <style>
                @import url('https://fonts.googleapis.com/css2?family=Outfit:wght@900&display=swap');
            </style>
        </head>
        <body style="margin: 0; padding: 0; background-color: ${colors.gray};">
            <table width="100%" border="0" cellspacing="0" cellpadding="0">
                <tr>
                    <td align="center" style="padding: 40px 10px;">
                        <table width="600" border="0" cellspacing="0" cellpadding="0" style="background: ${colors.white}; border: 4px solid ${colors.black}; border-radius: 28px; overflow: hidden; box-shadow: 15px 15px 0px 0px rgba(0,0,0,0.05);">
                            <tr>
                                <td>
                                    ${header}
                                    ${bodyContent}
                                    ${footer}
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
