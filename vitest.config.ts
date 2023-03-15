/// <reference types="vitest" />
/// <reference types="vite/client" />

import {defineConfig} from 'vite';
import tsconfigPaths from 'vite-tsconfig-paths';

export default defineConfig({
  plugins: [tsconfigPaths()],
  test: {
    globals: true,
    include: [
      './packages/**/*.{test,spec}.{js,mjs,cjs,ts,mts,cts,jsx,tsx}',
    ],
    watchExclude: ['.*\\/node_modules\\/.*', '.*\\/build\\/.*'],
  },
});
