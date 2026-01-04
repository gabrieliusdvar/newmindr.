const fs = require('fs');

const imagePaths = {
    trialEnHeader: 'public/trial/images/b880af19a6348b92c6f411a4c22f48dd.png',
    trialEnEagle: 'public/trial/images/86023f0fadcdbb15636cb424e619e382.png',
    trialLtHeader: 'public/trial/lt/images/a7aa9f0d188e4ae3f4c22028de5258c9.png',
    trialLtEagle: 'public/trial/lt/images/86023f0fadcdbb15636cb424e619e382.png',
    trialRuHeader: 'public/trial/ru/images/0bf0bb2fe7a70ca750b444122b812bd0.png',
    trialRuEagle: 'public/trial/ru/images/86023f0fadcdbb15636cb424e619e382.png',
    newsletterLtHeader: 'public/newsletter/images/e1c32af7216d822d5e67de5642f69670.png',
    newsletterLtContent: 'public/newsletter/images/f792eb1e8b56dc33bcae2476b015b3d9.png',
    newsletterRuHeader: 'public/newsletter/images/f00c60897cb2eeb4b98d8875197bcf36.png',
    newsletterRuContent: 'public/newsletter/images/42e30765187a3a740111d37e904f5cb5.png',
    newsletterEnHeader: 'public/newsletter/images/aff6dd8b8a3b6658dc9c21e719e0921f.png',
    newsletterEnContent: 'public/newsletter/images/e08d778ef3a764e65fd10a0d34eb5f6f.png',
};

const base64Images = {};

for (const [key, imagePath] of Object.entries(imagePaths)) {
    try {
        const imageBuffer = fs.readFileSync(imagePath);
        const base64 = imageBuffer.toString('base64');
        base64Images[key] = `data:image/png;base64,${base64}`;
        console.log(`✓ Converted ${key}`);
    } catch (error) {
        console.error(`✗ Failed ${key}:`, error.message);
    }
}

const tsContent = `// Auto-generated base64 email images
export const EMAIL_IMAGES = ${JSON.stringify(base64Images, null, 2)} as const;
`;

fs.writeFileSync('src/utils/emailImages.ts', tsContent);
console.log('\n✓ Generated src/utils/emailImages.ts');
