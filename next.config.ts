import type { NextConfig } from "next";
const isProd = process.env.NODE_ENV === 'production';
const basePath = isProd ? '' : '';

const nextConfig: NextConfig = {
  assetPrefix: isProd ? basePath : '',
  output: 'export', // 静的サイトをビルドする設定
  publicRuntimeConfig: {
    basePath, // basePathを他のファイルから読み込めるようにする
  },
  trailingSlash: true, // 静的サイトをビルドした際 about.htmlを /about/index.html と返してくれるようになる
  images: { unoptimized: true }, //Imageコンポーネントを使用しないようにする　表示速度に影響はあるのか、、、
};

export default nextConfig;
