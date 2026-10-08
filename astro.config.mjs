import { defineConfig } from 'astro/config';

export default defineConfig({
  site: 'https://qark.energy', // placeholder until the real domain is confirmed
  trailingSlash: 'never',
  build: {
    format: 'file',
  },
  // The dev toolbar overlays the bottom of the page, where the design puts its chapter labels.
  devToolbar: {
    enabled: false,
  },
});
