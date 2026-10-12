import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';
import { loadEnv } from 'vite';

// prefix '' so PUBLIC_* keys are visible here too (Vite's default prefix is VITE_).
const env = loadEnv('production', process.cwd(), '');
const site = (env.PUBLIC_SITE_URL || 'https://auditt007-cpu.github.io/').replace(/\/+$/, '') + '/';

export default defineConfig({
  site,
  output: 'static',
  trailingSlash: 'ignore',
  build: { format: 'directory' },
  integrations: [sitemap()],
});
