'use client';

import { useEffect } from 'react';

export default function BookRedirect() {
    useEffect(() => {
        // 立即跳轉到 Notion Book 頁面
        window.location.href = 'https://www.notion.so/robinkuo/6332c78168974b94b904cafa520ac90d?v=faa56ea0ba4842fcbd78a339b97fee96';
    }, []);

    return (
        <div className="min-h-screen flex items-center justify-center bg-gray-50 dark:bg-gray-900">
            <div className="text-center">
                <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600 mx-auto mb-4"></div>
                <p className="text-gray-600 dark:text-gray-400">Redirecting to Book Blog...</p>
            </div>
        </div>
    );
}
