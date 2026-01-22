import { defineConfig } from "astro/config";
import tailwindcss from "@tailwindcss/vite";

export default defineConfig({
  site: 'https://JLucasGaldino.github.io',
  base: '/demo-1',
  vite: {
    plugins: [
      tailwindcss()
    ],
  },
});