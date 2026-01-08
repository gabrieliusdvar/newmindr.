import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { useLanguage } from '../contexts/LanguageContext';

interface SEOConfig {
    title: string;
    description: string;
    keywords: string;
    ogImage?: string;
}

const seoConfigs: Record<string, Record<string, SEOConfig>> = {
    '/': {
        en: {
            title: 'newmindr.',
            description: 'An interactive learning platform with engaging online courses, a private community, and experiences that make learning stick.',
            keywords: 'newmindr, newmindr., interactive learning, interactive courses, online courses, education platform, e-learning, leadership courses, gamified learning'
        },
        lt: {
            title: 'newmindr. | Interaktyvaus mokymosi platforma - Internetiniai kursai',
            description: 'newmindr. yra pirmaujanti interaktyvaus mokymosi platforma vaikams, paaugliams ir suaugusiems. Atraskite įtraukiančius internetinius kursus lyderystės, derybų, komiksų kūrimo ir kitose srityse.',
            keywords: 'newmindr, newmindr., interaktyvus mokymasis, interaktyvūs kursai, kursai, internetiniai kursai, mokymosi platforma, lyderystės kursai, švietimas, naujos mintys, naujos smegenys'
        },
        ru: {
            title: 'newmindr. | Платформа интерактивного обучения - Онлайн курсы',
            description: 'newmindr. — ведущая платформа интерактивного обучения для детей, подростков и взрослых. Изучайте увлекательные онлайн-курсы по лидерству, переговорам, созданию комиксов и многому другому.',
            keywords: 'newmindr, newmindr., интерактивное обучение, интерактивные курсы, онлайн курсы, образовательная платформа, курсы лидерства, геймификация'
        }
    },
    '/about': {
        en: {
            title: 'About Us | newmindr. Interactive Learning',
            description: 'Learn about newmindr. and our mission to revolutionize education through interactive, gamified learning experiences for all ages.',
            keywords: 'about newmindr, interactive learning company, educational innovation, gamified education, learning platform'
        },
        lt: {
            title: 'Apie mus | newmindr. Interaktyvus mokymasis',
            description: 'Sužinokite apie newmindr. ir mūsų misiją revoliucionuoti švietimą per interaktyvias, žaidybintas mokymosi patirtis visiems amžiams.',
            keywords: 'apie newmindr, interaktyvaus mokymosi įmonė, švietimo inovacijos, žaidybintas švietimas'
        },
        ru: {
            title: 'О нас | newmindr. Интерактивное обучение',
            description: 'Узнайте о newmindr. и нашей миссии революционизировать образование через интерактивное, геймифицированное обучение для всех возрастов.',
            keywords: 'о newmindr, интерактивное обучение, образовательные инновации, геймификация образования'
        }
    },
    '/blog': {
        en: {
            title: 'Blog | newmindr. Interactive Learning Insights',
            description: 'Read the latest articles on interactive learning, education innovation, gamification, and tips for effective studying from newmindr.',
            keywords: 'education blog, interactive learning articles, gamification insights, teaching tips, learning strategies'
        },
        lt: {
            title: 'Tinklaraštis | newmindr. Interaktyvaus mokymosi įžvalgos',
            description: 'Skaitykite naujausius straipsnius apie interaktyvų mokymąsi, švietimo inovacijas, žaidybinimą ir efektyvaus mokymosi patarimus.',
            keywords: 'švietimo tinklaraštis, interaktyvaus mokymosi straipsniai, žaidybinimo įžvalgos, mokymo patarimai'
        },
        ru: {
            title: 'Блог | newmindr. Инсайты интерактивного обучения',
            description: 'Читайте последние статьи об интерактивном обучении, образовательных инновациях, геймификации и советах по эффективному обучению.',
            keywords: 'образовательный блог, статьи об интерактивном обучении, геймификация, советы по обучению'
        }
    },
    '/contact': {
        en: {
            title: 'Contact Us | newmindr. Interactive Learning',
            description: 'Get in touch with newmindr. We are here to help with questions about our interactive courses and learning platform.',
            keywords: 'contact newmindr, interactive learning support, education help, course inquiries'
        },
        lt: {
            title: 'Susisiekite | newmindr. Interaktyvus mokymasis',
            description: 'Susisiekite su newmindr. Mes čia, kad padėtume atsakyti į klausimus apie mūsų interaktyvius kursus ir mokymosi platformą.',
            keywords: 'susisiekti su newmindr, interaktyvaus mokymosi palaikymas, švietimo pagalba'
        },
        ru: {
            title: 'Контакты | newmindr. Интерактивное обучение',
            description: 'Свяжитесь с newmindr. Мы здесь, чтобы помочь с вопросами о наших интерактивных курсах и платформе обучения.',
            keywords: 'контакты newmindr, поддержка интерактивного обучения, помощь с образованием'
        }
    },
    '/showcase': {
        en: {
            title: 'Showcase | newmindr. Rewards & Achievements',
            description: 'Explore exclusive rewards, avatars, and achievements available on the newmindr. interactive learning platform.',
            keywords: 'newmindr rewards, learning achievements, educational gamification, course rewards, interactive learning prizes'
        },
        lt: {
            title: 'Vitrina | newmindr. Apdovanojimai ir pasiekimai',
            description: 'Atraskite išskirtinius apdovanojimus, avataras ir pasiekimus prieinamus newmindr. interaktyvaus mokymosi platformoje.',
            keywords: 'newmindr apdovanojimai, mokymosi pasiekimai, švietimo žaidybinimas'
        },
        ru: {
            title: 'Витрина | newmindr. Награды и достижения',
            description: 'Исследуйте эксклюзивные награды, аватары и достижения на платформе интерактивного обучения newmindr.',
            keywords: 'награды newmindr, достижения в обучении, геймификация образования'
        }
    },
    '/process': {
        en: {
            title: 'How It Works | newmindr. Learning Process',
            description: 'Discover how interactive learning works at newmindr. Learn about our unique approach to gamified education and course structure.',
            keywords: 'how newmindr works, interactive learning process, gamified education method, learning approach'
        },
        lt: {
            title: 'Kaip tai veikia | newmindr. Mokymosi procesas',
            description: 'Atraskite, kaip veikia interaktyvus mokymasis newmindr. platformoje. Sužinokite apie mūsų unikalų požiūrį į žaidybintą švietimą.',
            keywords: 'kaip veikia newmindr, interaktyvaus mokymosi procesas, žaidybinto švietimo metodas'
        },
        ru: {
            title: 'Как это работает | newmindr. Процесс обучения',
            description: 'Узнайте, как работает интерактивное обучение в newmindr. Наш уникальный подход к геймифицированному образованию.',
            keywords: 'как работает newmindr, процесс интерактивного обучения, метод геймификации'
        }
    }
};

export default function SEOHead() {
    const { pathname } = useLocation();
    const { language } = useLanguage();

    useEffect(() => {
        // Get base path (without query params or trailing segments)
        let basePath = pathname;

        // Handle blog post routes
        if (pathname.startsWith('/blog/')) {
            basePath = '/blog';
        }

        const config = seoConfigs[basePath]?.[language] || seoConfigs['/']?.[language] || seoConfigs['/'].en;

        // Update document title
        document.title = config.title;

        // Update meta tags
        const updateMetaTag = (name: string, content: string, isProperty = false) => {
            const attr = isProperty ? 'property' : 'name';
            let element = document.querySelector(`meta[${attr}="${name}"]`);
            if (element) {
                element.setAttribute('content', content);
            } else {
                element = document.createElement('meta');
                element.setAttribute(attr, name);
                element.setAttribute('content', content);
                document.head.appendChild(element);
            }
        };

        // Update standard meta tags
        updateMetaTag('description', config.description);
        updateMetaTag('keywords', config.keywords);

        // Update Open Graph tags
        updateMetaTag('og:title', config.title, true);
        updateMetaTag('og:description', config.description, true);
        updateMetaTag('og:url', `https://www.newmindr.com${pathname}`, true);

        // Update Twitter tags
        updateMetaTag('twitter:title', config.title);
        updateMetaTag('twitter:description', config.description);

        // Update canonical
        let canonical = document.querySelector('link[rel="canonical"]');
        if (canonical) {
            canonical.setAttribute('href', `https://www.newmindr.com${pathname}`);
        }

        // Update hreflang based on current language
        const updateHreflang = (lang: string, href: string) => {
            let element = document.querySelector(`link[hreflang="${lang}"]`);
            if (element) {
                element.setAttribute('href', href);
            }
        };

        updateHreflang('en', `https://www.newmindr.com${pathname}`);
        updateHreflang('lt', `https://www.newmindr.com${pathname}?lang=lt`);
        updateHreflang('ru', `https://www.newmindr.com${pathname}?lang=ru`);

    }, [pathname, language]);

    return null;
}
