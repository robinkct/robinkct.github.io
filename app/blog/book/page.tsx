'use client';

import { useEffect } from 'react';

const NOTION_URL = 'https://www.notion.so/robinkuo/6332c78168974b94b904cafa520ac90d?v=faa56ea0ba4842fcbd78a339b97fee96';

export default function BookRedirect() {
    useEffect(() => {
        // Use replace to avoid back button issues
        window.location.replace(NOTION_URL);
    }, []);

    return (
        <>
            <head>
                <title>Redirecting to Book Blog...</title>
                <meta httpEquiv="refresh" content={`0; url=${NOTION_URL}`} />
                <link rel="canonical" href={NOTION_URL} />
            </head>
            <div className="min-h-screen flex items-center justify-center bg-gray-50 dark:bg-gray-900">
                <div className="text-center">
                    <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600 mx-auto mb-4"></div>
                    <p className="text-gray-600 dark:text-gray-400">Redirecting to Book Blog...</p>
                    <p className="text-sm text-gray-500 mt-2">
                        If you are not redirected, <a href={NOTION_URL} className="text-blue-600 hover:underline">click here</a>.
                    </p>
                </div>
            </div>
        </>
    );
}
