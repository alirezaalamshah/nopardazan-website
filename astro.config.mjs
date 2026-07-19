// @ts-check
import { defineConfig } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';
import sitemap from '@astrojs/sitemap';
import rehypeBaseLinks from './src/lib/rehype-base-links.mjs';

// GitHub Pages staging values — update on launch day (see technical plan doc)
const SITE = 'https://alirezaalamshah.github.io';
const BASE = '/nopardazan-website';

// https://astro.build/config
export default defineConfig({
  site: SITE,
  base: BASE,
  trailingSlash: 'always',
  integrations: [sitemap()],
  markdown: {
    rehypePlugins: [[rehypeBaseLinks, BASE]],
  },
  vite: {
    plugins: [tailwindcss()],
  },
});
