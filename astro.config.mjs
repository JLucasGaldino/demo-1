import { defineConfig } from "astro/config";
import tailwindcss from "@tailwindcss/vite";

import netlify from "@astrojs/netlify";

export default defineConfig({
  site: 'https://JLucasGaldino.github.io',
  base: '/demo-1',

  vite: {
    plugins: [
      tailwindcss()
    ],
  },

  adapter: netlify(),
});