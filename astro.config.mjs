// @ts-check
import { defineConfig } from 'astro/config';

import tailwindcss from '@tailwindcss/vite';

// https://astro.build/config
export default defineConfig({
  site: 'https://boris148.github.io',
  base: '/growthos-ai-site',
  vite: {
    plugins: [tailwindcss()]
  }
});
