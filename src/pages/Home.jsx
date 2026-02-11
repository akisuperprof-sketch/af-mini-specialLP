import React, { useEffect } from 'react';

export default function Home() {
    useEffect(() => {
        const handleRedirect = async () => {
            // 1. Get Parameters
            const urlParams = new URLSearchParams(window.location.search);
            const pid = urlParams.get('pid') || 'root_redirect';
            const lp = urlParams.get('lp') || 'main_redirect';

            // 2. Log Click (Tracking) - Fire and forget with short timeout
            const trackPromise = fetch(`/api/log_click?pid=${pid}&lp=${lp}`, {
                method: 'GET',
                mode: 'no-cors'
            }).catch(e => console.error("Tracking Error:", e));

            // Set a hard timeout for tracking to ensure redirect happens
            const timeoutPromise = new Promise(resolve => setTimeout(resolve, 800));

            try {
                // Wait for either tracking to finish or timeout
                await Promise.race([trackPromise, timeoutPromise]);
            } catch (e) {
                console.error("Redirect logic error:", e);
            }

            // 3. Redirect to Main LP (①)
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
