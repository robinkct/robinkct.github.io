'use client';

import { useEffect } from 'react';

export default function TravelRedirect() {
    useEffect(() => {
        // 立即跳轉到 Notion Travel 頁面
        window.location.href = 'https://www.notion.so/robinkuo/Travel-89db0fec704844f4b5328143937a6181';
    }, []);

    return (
        <div className="min-h-screen flex items-center justify-center bg-gray-50 dark:bg-gray-900">
            <div className="text-center">
                <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600 mx-auto mb-4"></div>
                <p className="text-gray-600 dark:text-gray-400">Redirecting to Travel Blog...</p>
            </div>
        </div>
    );
}
