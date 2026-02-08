'use client';

import React, { createContext, useContext, useState, useEffect, ReactNode } from 'react';
import { Language, Translations } from '@/lib/i18n';
import { zhTW } from '@/locales/zh-TW';
import { en } from '@/locales/en';
import { ja } from '@/locales/ja';

interface LanguageContextType {
    language: Language;
    setLanguage: (lang: Language) => void;
    t: Translations;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

const translations: Record<Language, Translations> = {
    'zh-TW': zhTW,
    'en': en,
    'ja': ja,
};

export function LanguageProvider({ children }: { children: ReactNode }) {
    const [language, setLanguageState] = useState<Language>('zh-TW');
    const [mounted, setMounted] = useState(false);

    useEffect(() => {
        // Load language from localStorage on mount
        const savedLanguage = localStorage.getItem('language') as Language;
        if (savedLanguage && translations[savedLanguage]) {
            setLanguageState(savedLanguage);
        }
        setMounted(true);
    }, []);

    const setLanguage = (lang: Language) => {
        setLanguageState(lang);
        localStorage.setItem('language', lang);
    };

    const value: LanguageContextType = {
        language,
        setLanguage,
        t: translations[language],
    };

    // Prevent hydration mismatch by not rendering until mounted
    if (!mounted) {
        return <>{children}</>;
    }

    return (
        <LanguageContext.Provider value={value}>
            {children}
        </LanguageContext.Provider>
    );
}

export function useLanguage() {
    const context = useContext(LanguageContext);
    if (context === undefined) {
        throw new Error('useLanguage must be used within a LanguageProvider');
    }
    return context;
}
