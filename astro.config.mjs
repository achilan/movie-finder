import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';
import cloudflare from '@astrojs/cloudflare';

import react from "@astrojs/react";

// https://astro.build/config
export default defineConfig({
  site:"https://achilan.github.io",
  base: "movie-finder",
  integrations: [tailwind(), react()],
  output: 'server',
  adapter: cloudflare({
    mode: 'advanced'
  }),
  vite: {
    define: {
      'process.env.TMDB_API_KEY': JSON.stringify(process.env.TMDB_API_KEY)
    }
  }
});