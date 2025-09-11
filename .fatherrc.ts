import { defineConfig } from 'father';

export default defineConfig({
  // more father config: https://github.com/umijs/father/blob/master/docs/config.md
  // ESM 格式输出
  esm: {
    output: 'dist/esm',
    transformer: 'babel',
    ignores: ['**/demo/**', '**/*.md'],
  },
  cjs: {
    output: 'dist/cjs',
    transformer: 'babel',
    ignores: ['**/demo/**', '**/*.md'],
  },
  umd: {
    output: 'dist/umd',
    name: 'ReactCompack',
    externals: {
      react: 'React',
      'react-dom': 'ReactDOM',
    },
  },
});
