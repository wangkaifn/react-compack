import { defineConfig } from 'dumi';

export default defineConfig({
  outputPath: 'docs-dist',
  themeConfig: {
    name: 'compack',
    footer: 'Copyright © 2025 | Powered by 阿凯',
    logo: '/react.svg',
    socialLinks: {
      github: 'https://github.com/wangkaifn/react-compack',
    },
  },
  favicons: ['/react.svg'],

  alias: {
    'react-compack': require.resolve('./src/index.ts'),
  },
});
