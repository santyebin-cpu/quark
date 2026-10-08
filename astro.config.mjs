import { defineConfig } from 'astro/config';

export default defineConfig({
  site: 'https://quark.energy',
  trailingSlash: 'never',
  build: {
    format: 'file',
  },
});
