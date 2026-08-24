import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';
import tailwind from '@astrojs/tailwind';

// https://astro.build/config
export default defineConfig({
  site: 'http://localhost:4321',
  integrations: [
    sitemap(),
    tailwind({
      applyBaseStyles: true,
    }),
  ],
});
