'use client';

import { useLanguage } from '@/contexts/LanguageContext';

export default function BlogPage() {
    const { t } = useLanguage();

    const blogCategories = [
        {
            title: t.blog.travel.title,
            description: t.blog.travel.description,
            url: 'https://wiry-timpani-17d.notion.site/Travel-89db0fec704844f4b5328143937a6181',
            icon: '✈️',
        },
        {
            title: t.blog.book.title,
            description: t.blog.book.description,
            url: 'https://wiry-timpani-17d.notion.site/6332c78168974b94b904cafa520ac90d?v=faa56ea0ba4842fcbd78a339b97fee96',
            icon: '📚',
        },
    ];

    return (
        <div className="bg-white dark:bg-gray-900 min-h-screen">
            <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
                {/* Header */}
                <div className="text-center mb-16">
                    <h1 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-4">
                        {t.blog.title}
                    </h1>
                    <p className="text-xl text-gray-600 dark:text-gray-400">
                        {t.blog.subtitle}
                    </p>
                </div>

                {/* Blog Categories */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
                    {blogCategories.map((category) => (
                        <a
                            key={category.title}
                            href={category.url}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="group"
                        >
                            <div className="bg-gradient-to-br from-white to-gray-50 dark:from-gray-800 dark:to-gray-900 rounded-xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 border border-gray-200 dark:border-gray-700 hover:border-blue-500 dark:hover:border-blue-400 transform hover:-translate-y-2">
                                <div className="text-6xl mb-4">{category.icon}</div>
                                <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-3 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
                                    {category.title}
                                </h2>
                                <p className="text-gray-600 dark:text-gray-400 mb-4">
                                    {category.description}
                                </p>
                                <div className="inline-flex items-center text-blue-600 dark:text-blue-400 font-medium">
                                    {t.blog.readMore}
                                    <svg className="ml-2 h-5 w-5 transform group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                                    </svg>
                                </div>
                            </div>
                        </a>
                    ))}

                    {/* Coming Soon Card for LifeOS */}
                    <div className="bg-gradient-to-br from-gray-100 to-gray-200 dark:from-gray-800 dark:to-gray-900 rounded-xl p-8 shadow-lg border border-gray-300 dark:border-gray-700 opacity-75">
                        <div className="text-6xl mb-4">🧠</div>
                        <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-3">
                            {t.blog.lifeos.title}
                        </h2>
                        <p className="text-gray-600 dark:text-gray-400 mb-4">
                            {t.blog.lifeos.description}
                        </p>
                        <div className="inline-flex items-center text-gray-500 dark:text-gray-500 font-medium">
                            {t.blog.comingSoon}
                        </div>
                    </div>
                </div>

                {/* Note */}
                <div className="mt-16 text-center">
                    <p className="text-gray-600 dark:text-gray-400">
                        {t.blog.note}
                    </p>
                </div>
            </div>
        </div>
    );
}
