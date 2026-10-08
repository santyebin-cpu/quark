import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

export default defineConfig({
  site: 'https://qarkenergy.com',
  trailingSlash: 'never',
  build: {
    format: 'file',
  },
  integrations: [
    sitemap({
      // Pages are served without ".html" (see the canonical tags in Layout.astro).
      serialize(item) {
        item.url = item.url.replace(/\.html$/, '').replace(/\/$/, '') || 'https://qarkenergy.com';
        if (item.url === 'https://qarkenergy.com') item.url += '/';
        return item;
      },
      filter: (page) => !/\/404(\.html)?$/.test(page),
    }),
  ],
  // The dev toolbar overlays the bottom of the page, where the design puts its chapter labels.
  devToolbar: {
    enabled: false,
  },
});
