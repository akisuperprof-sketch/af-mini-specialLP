const nextConfig = {
  // 静的ファイルの配信設定
  async headers() {
    return [
      {
        // 動画ファイル用のヘッダー設定
        source: '/videos/:path*',
        headers: [
          {
            key: 'Content-Type',
            value: 'video/mp4',
          },
          {
            key: 'Cache-Control',
            value: 'public, max-age=31536000, immutable',
          },
          {
            key: 'Accept-Ranges',
            value: 'bytes',
          },
        ],
      },
      {
        // 画像ファイル用のヘッダー設定
        source: '/images/:path*',
        headers: [
          {
            key: 'Cache-Control',
            value: 'public, max-age=31536000, immutable',
          },
        ],
      },
    ];
  },

  // 静的ファイルの最適化設定
  trailingSlash: false,
  
  // 画像最適化の設定
  images: {
    formats: ['image/webp', 'image/avif'],
    deviceSizes: [640, 750, 828, 1080, 1200, 1920, 2048, 3840],
    imageSizes: [16, 32, 48, 64, 96, 128, 256, 384],
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

  // 実験的機能
  experimental: {
    optimizePackageImports: ['lucide-react'],
  },
};

export default nextConfig;
