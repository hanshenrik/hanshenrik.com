import prefetch from "@astrojs/prefetch";
import sitemap from "@astrojs/sitemap";
import tailwind from "@astrojs/tailwind";
import { defineConfig } from "astro/config";
import lottie from "astro-integration-lottie";

// https://astro.build/config
import robotsTxt from "astro-robots-txt";

// https://astro.build/config
import mdx from "@astrojs/mdx";

// https://astro.build/config
export default defineConfig({
  site: "https://mandaljazz.no",
  integrations: [
    tailwind(),
    sitemap(),
    prefetch(),
    robotsTxt(),
    mdx(),
    lottie(),
  ],
});
