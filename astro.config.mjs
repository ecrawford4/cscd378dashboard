import dotenv from 'dotenv';
dotenv.config();

import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';

dotenv.config();

// https://astro.build/config
export default defineConfig({
  integrations: [tailwind()],
  vite: {
    define: {
      'process.env': process.env
    }
  }
});