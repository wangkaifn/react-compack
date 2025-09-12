import { defineConfig } from 'dumi';
export const isDev = process.env.NODE_ENV === 'development';
export const prodUrl = 'https://wangkaifn.github.io/react-compack/';
export default defineConfig({
  outputPath: 'docs-dist',
  themeConfig: {
    name: 'compack',
    footer: 'Copyright © 2025 | Powered by 阿凯',
    logo: isDev ? '/react-compack/react.svg' : prodUrl + '/react.svg',
    socialLinks: {
      github: 'https://github.com/wangkaifn/react-compack',
    },
  },
  favicons: [isDev ? '/react-compack/react.svg' : prodUrl + '/react.svg'],
  alias: {
    'react-compack': require.resolve('./src/index.ts'),
  },
  // 部署到 GitHub Pages
  base: '/react-compack/',
  publicPath: '/react-compack/',
});
