'use client';

import { useState, useEffect } from 'react';
import { Language, AboutTranslations, languages } from '@/lib/i18n';
import { zhTW } from '@/locales/zh-TW';
import { en } from '@/locales/en';
import { ja } from '@/locales/ja';

const translations: Record<Language, AboutTranslations> = {
    'zh-TW': zhTW,
    'en': en,
    'ja': ja,
};

export default function AboutPage() {
    const [language, setLanguageState] = useState<Language>('zh-TW');
    const [isOpen, setIsOpen] = useState(false);

    useEffect(() => {
        const savedLanguage = localStorage.getItem('aboutLanguage') as Language;
        if (savedLanguage && translations[savedLanguage]) {
            setLanguageState(savedLanguage);
        }
    }, []);

    const setLanguage = (lang: Language) => {
        setLanguageState(lang);
        localStorage.setItem('aboutLanguage', lang);
        setIsOpen(false);
    };

    const t = translations[language];
    const currentLanguage = languages.find(lang => lang.code === language);

    return (
        <div className="bg-white dark:bg-gray-900">
            <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
                {/* Language Switcher - Top Right */}
                <div className="flex justify-end mb-8">
                    <div className="relative">
                        <button
                            onClick={() => setIsOpen(!isOpen)}
                            className="flex items-center gap-2 px-3 py-2 rounded-md text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors"
                            aria-label="Change language"
                        >
                            <span className="text-xl">{currentLanguage?.flag}</span>
                            <span className="text-sm font-medium">{currentLanguage?.name}</span>
                            <svg
                                className={`h-4 w-4 transition-transform ${isOpen ? 'rotate-180' : ''}`}
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke="currentColor"
                            >
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                            </svg>
                        </button>

                        {isOpen && (
                            <div className="absolute right-0 mt-2 w-48 bg-white dark:bg-gray-800 rounded-lg shadow-lg border border-gray-200 dark:border-gray-700 py-1 z-50">
                                {languages.map((lang) => (
                                    <button
                                        key={lang.code}
                                        onClick={() => setLanguage(lang.code)}
                                        className={`w-full flex items-center gap-3 px-4 py-2 text-left hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors ${language === lang.code ? 'bg-blue-50 dark:bg-blue-900/20' : ''
                                            }`}
                                    >
                                        <span className="text-xl">{lang.flag}</span>
                                        <span className="text-sm font-medium text-gray-900 dark:text-white">
                                            {lang.name}
                                        </span>
                                        {language === lang.code && (
                                            <svg className="ml-auto h-4 w-4 text-blue-600 dark:text-blue-400" fill="currentColor" viewBox="0 0 20 20">
                                                <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                                            </svg>
                                        )}
                                    </button>
                                ))}
                            </div>
                        )}
                    </div>
                </div>

                {/* Header */}
                <div className="text-center mb-16">
                    <h1 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-4">
                        {t.title}
                    </h1>
                    <p className="text-xl text-gray-600 dark:text-gray-400">
                        {t.subtitle}
                    </p>
                </div>

                {/* Introduction */}
                <section className="mb-16">
                    <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-6">{t.introduction.title}</h2>
                    <p className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed mb-4">
                        {t.introduction.content}
                    </p>
                </section>

                {/* Experience */}
                <section className="mb-16">
                    <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-6">{t.experience.title}</h2>
                    <div className="space-y-8">
                        <div className="border-l-4 border-blue-600 pl-6">
                            <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">
                                {t.experience.jobTitle}
                            </h3>
                            <p className="text-gray-600 dark:text-gray-400 mb-3">
                                {t.experience.description}
                            </p>
                            <ul className="list-disc list-inside text-gray-700 dark:text-gray-300 space-y-2">
                                {t.experience.points.map((point, index) => (
                                    <li key={index}>{point}</li>
                                ))}
                            </ul>
                        </div>
                    </div>
                </section>

                {/* Skills */}
                <section className="mb-16">
                    <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-6">{t.skills.title}</h2>
                    <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                        {t.skills.list.map((skill) => (
                            <div
                                key={skill}
                                className="bg-gray-100 dark:bg-gray-800 rounded-lg px-4 py-3 text-center font-medium text-gray-900 dark:text-white hover:bg-blue-100 dark:hover:bg-blue-900 transition-colors"
                            >
                                {skill}
                            </div>
                        ))}
                    </div>
                </section>

                {/* Contact */}
                <section>
                    <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-6">{t.contact.title}</h2>
                    <p className="text-lg text-gray-700 dark:text-gray-300 mb-6">
                        {t.contact.description}
                    </p>
                    <div className="flex flex-wrap gap-4">
                        <a
                            href="https://github.com/robinkct"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center px-6 py-3 bg-gray-900 dark:bg-white text-white dark:text-gray-900 rounded-lg hover:bg-gray-800 dark:hover:bg-gray-100 transition-colors font-medium"
                        >
                            <svg className="h-5 w-5 mr-2" fill="currentColor" viewBox="0 0 24 24">
                                <path fillRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" clipRule="evenodd" />
                            </svg>
                            GitHub
                        </a>
                        <a
                            href="https://www.linkedin.com/in/chinting-kuo-3b7666191"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors font-medium"
                        >
                            <svg className="h-5 w-5 mr-2" fill="currentColor" viewBox="0 0 24 24">
                                <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                            </svg>
                            LinkedIn
                        </a>
                    </div>
                </section>
            </div>
        </div>
    );
}
