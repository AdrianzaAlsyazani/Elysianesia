// @ts-check
import { defineConfig } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';

// https://astro.build/config
export default defineConfig({
  site: 'https://adrianzaalsyazani.github.io',  // ← HARUS lowercase!
  base: '/Elysianesia',                         // ← nama repository
  vite: {
    plugins: [tailwindcss()],
  },
});