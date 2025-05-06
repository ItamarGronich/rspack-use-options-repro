import { defineConfig } from '@rspack/cli';

// Target browsers, see: https://github.com/browserslist/browserslist
const targets = ['chrome >= 87', 'edge >= 88', 'firefox >= 78', 'safari >= 14'];

export default defineConfig({
  entry: {
    main: './src/index.js',
  },
  target: `browserslist:${targets.join(', ')}`,
  resolve: {
    extensions: [
      '...',
      '.cjs',
      '.mjs',
      '.jsx',
      '.cjsx',
      '.mjsx',
      '.ts',
      '.cts',
      '.mts',
      '.tsx',
      '.ctsx',
      '.mtsx',
    ],
  },
  module: {
    rules: [
      {
        test: /\.[mc]?[jt]sx?$/,
        // This doesn't work with the options shorthand
        // I you change this to `loader: 'builtin:swc-loader'` it will work
        use: 'builtin:swc-loader',
        options: {
          jsc: {
            parser: {
              syntax: 'typescript',
            },
          },
          env: { targets },
        },
      },
    ],
  },
});
