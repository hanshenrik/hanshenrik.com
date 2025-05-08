// @ts-check
import mdx from "@astrojs/mdx";
import sitemap from "@astrojs/sitemap";
import tailwindcss from "@tailwindcss/vite";
import yeskunallumami from "@yeskunall/astro-umami";
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
        solar: ["*"],
        ph: ["*"],
      },
    }),
    mdx(),
    sitemap(),
    yeskunallumami({ id: "2082e225-af96-4b65-affb-cd3700eaa208" }),
  ],
});
