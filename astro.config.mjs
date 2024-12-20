// @ts-check
import { defineConfig } from 'astro/config';
import sitemap from "@astrojs/sitemap";
import tailwindcss from '@tailwindcss/vite';
export default defineConfig({
  vite: {
    plugins: [tailwindcss()],
  },
  site: 'https://a-chacon.com',
  integrations: [sitemap()]
});
