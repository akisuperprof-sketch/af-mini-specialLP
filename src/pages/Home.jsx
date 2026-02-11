import React, { useEffect } from 'react';

export default function Home() {
    useEffect(() => {
        const handleRedirect = async () => {
            // 1. Get Parameters
            const urlParams = new URLSearchParams(window.location.search);
            const pid = urlParams.get('pid') || 'root_redirect';
            const lp = urlParams.get('lp') || 'main_redirect';
            const utmSource = urlParams.get('utm_source') || '';

            // 2. Log Click (Tracking)
            try {
                // Use the proxied API path
                // Using keepalive or beacon might be safer but standard fetch with wait is ok for simple redirect logic
                await fetch(`/api/log_click?pid=${pid}&lp=${lp}`, {
                    method: 'GET',
                    mode: 'no-cors' // Ensure it attempts even if CORS issues (though proxy solves this)
                });
            } catch (e) {
                console.error("Tracking Error:", e);
            }

            // 3. Redirect to Main LP (①)
            // Preserve query parameters
            const targetUrl = new URL("https://v0-air-future-mini-design.vercel.app/");
            urlParams.forEach((value, key) => {
                targetUrl.searchParams.set(key, value);
            });

            window.location.href = targetUrl.toString();
        };

        handleRedirect();
    }, []);

    return (
        <div className="flex flex-col items-center justify-center min-h-screen bg-white">
            <div className="flex flex-col items-center">
                <div className="w-12 h-12 border-4 border-blue-500 border-t-transparent rounded-full animate-spin"></div>
            </div>
        </div>
    );
}
