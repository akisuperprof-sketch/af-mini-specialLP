/** @type {import('next').NextConfig} */
const nextConfig = {
    // 画像最適化の設定
    images: {
        unoptimized: true,
    },
    // ESLintの設定
    eslint: {
        ignoreDuringBuilds: true,
    },
    // TypeScriptの設定
    typescript: {
        ignoreBuildErrors: true,
    },
};

export default nextConfig;
