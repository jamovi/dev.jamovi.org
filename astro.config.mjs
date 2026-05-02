import { defineConfig } from 'astro/config';
import remarkGithubAlerts from 'remark-github-alerts';

import sitemap from '@astrojs/sitemap';

import remarkImageEnhancer from './src/plugins/remark-image-enhancer.mjs';

// https://astro.build/config
export default defineConfig({
  site: 'https://dev.jamovi.org',

  markdown: {
    remarkPlugins: [remarkGithubAlerts, remarkImageEnhancer],
    shikiConfig: {
      themes: {
        light: 'github-light',
        dark: 'github-dark',
      },
    },
  },

  integrations: [sitemap()],
});
