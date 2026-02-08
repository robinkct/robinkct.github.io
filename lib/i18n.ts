export type Language = 'zh-TW' | 'en' | 'ja';

export interface Translations {
    nav: {
        home: string;
        about: string;
        projects: string;
        blog: string;
    };
    home: {
        greeting: string;
        name: string;
        tagline: string;
        aboutMe: string;
        viewProjects: string;
        aboutCard: {
            title: string;
            description: string;
        };
        projectsCard: {
            title: string;
            description: string;
        };
        blogCard: {
            title: string;
            description: string;
        };
    };
    about: {
        title: string;
        subtitle: string;
        introduction: {
            title: string;
            content: string;
        };
        experience: {
            title: string;
            jobTitle: string;
            description: string;
            points: string[];
        };
        skills: {
            title: string;
            list: string[];
        };
        contact: {
            title: string;
            description: string;
        };
    };
    projects: {
        title: string;
        subtitle: string;
        viewCode: string;
        liveDemo: string;
        noProjects: string;
        viewMore: string;
    };
    blog: {
        title: string;
        subtitle: string;
        travel: {
            title: string;
            description: string;
        };
        book: {
            title: string;
            description: string;
        };
        lifeos: {
            title: string;
            description: string;
        };
        readMore: string;
        comingSoon: string;
        note: string;
    };
    footer: {
        description: string;
        quickLinks: string;
        connect: string;
        copyright: string;
    };
}

export const languages: { code: Language; name: string; flag: string }[] = [
    { code: 'zh-TW', name: '繁體中文', flag: '🇹🇼' },
    { code: 'en', name: 'English', flag: '🇺🇸' },
    { code: 'ja', name: '日本語', flag: '🇯🇵' },
];
