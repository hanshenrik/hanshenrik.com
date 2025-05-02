import { file, glob } from "astro/loaders";
import { defineCollection, z } from "astro:content";

const blog = defineCollection({
  loader: glob({ pattern: "**/*.{md,mdx}", base: "./src/content/drypp" }),
  schema: z.object({
    title: z.string(),
    description: z.string(),
    pubDate: z.date(),
    updatedDate: z.date().optional(),
    heroImage: z.string().optional(),
    draft: z.boolean().default(false),
  }),
});

const recordings = defineCollection({
  loader: file("src/data/recordings.json"),
  schema: z.object({
    id: z.string(),
    artist: z.string(),
    name: z.string(),
    description: z.string(),
    year: z.number().optional(),
    tidalLink: z.string().optional(),
    spotifyLink: z.string().optional(),
    appleLink: z.string().optional(),
    soundcloudLink: z.string().optional(),
    youtubeLink: z.string().optional(),
    image: z.string().optional(),
    imageAttribution: z.string().optional(),
    localFile: z
      .object({
        src: z.string(),
        format: z.string().optional(),
      })
      .optional(),
  }),
});
export const collections = {
  drypp: blog,
  recordings,
};
