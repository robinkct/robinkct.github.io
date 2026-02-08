export type Language = 'zh-TW' | 'en' | 'ja';

export interface AboutTranslations {
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
}

export const languages: { code: Language; name: string; flag: string }[] = [
    { code: 'zh-TW', name: '繁體中文', flag: '🇹🇼' },
    { code: 'en', name: 'English', flag: '🇺🇸' },
    { code: 'ja', name: '日本語', flag: '🇯🇵' },
];
