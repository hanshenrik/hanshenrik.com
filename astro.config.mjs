// @ts-check
import mdx from "@astrojs/mdx";
import sitemap from "@astrojs/sitemap";
import tailwindcss from "@tailwindcss/vite";
import icon from "astro-icon";
import { defineConfig } from "astro/config";

// https://astro.build/config
export default defineConfig({
  site: "https://hanshenrik.com",
  vite: {
    plugins: [tailwindcss()],
  },
  integrations: [
    icon({
      include: {
        arcticons: ["*"],
      },
    }),
    mdx(),
    sitemap(),
  ],
});
