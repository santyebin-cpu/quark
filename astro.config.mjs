import { defineConfig } from 'astro/config';

export default defineConfig({
  site: 'https://qarkenergy.com',
  trailingSlash: 'never',
  build: {
    format: 'file',
  },
});
