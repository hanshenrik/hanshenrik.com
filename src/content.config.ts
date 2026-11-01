import { defineCollection, z } from "astro:content";
import { glob } from "astro/loaders";

import { blogPostDataSchema } from "./utils";

const blog = defineCollection({
  type: "content",
  schema: blogPostDataSchema,
});

const recordings = defineCollection({
  type: "content",
  schema: z.object({
    artist: z.string(),
    name: z.string(),
    description: z.string().optional(),
    type: z.enum(["Album", "Single", "EP", "Live"]).optional(),
    year: z.number().optional(),
    album: z.string().optional(),
    tidalUrl: z.string().optional(),
    spotifyUrl: z.string().optional(),
    appleUrl: z.string().optional(),
    soundcloudUrl: z.string().optional(),
    youtubeUrl: z.string().optional(),
    image: z.string().optional(),
    imageAttribution: z.string().optional(),
    order: z.number().optional().default(0),
    localFile: z
      .object({
        src: z.string(),
        format: z.string(),
        type: z.enum(["band", "solo"]),
      })
      .optional(),
  }),
});

const gigs = defineCollection({
  loader: glob({ pattern: "**/*.mdx", base: "src/content/gigs" }),
  schema: z.object({
    date: z.string(),
    toDate: z.string().optional(),
    venue: z.string(),
    venueUrl: z.string().optional(),
    city: z.string().optional(),
    artist: z.string(),
    artistUrl: z.string().optional(),
    eventDescription: z.string().optional(),
    eventUrl: z.string().optional(),
    facebookUrl: z.string().optional(),
    ticketsUrl: z.string().optional(),
    createdAt: z.string(),
  }),
});

const software = defineCollection({
  type: "content",
  schema: z.object({
    name: z.string(),
    description: z.string(),
    url: z.string().optional(),
    githubUrl: z.string().optional(),
    order: z.number().optional(),
    image: z.string().optional(),
  }),
});

const videos = defineCollection({
  type: "content",
  schema: z.object({
    artist: z.string(),
    name: z.string(),
    youtubeUrl: z.string(),
    description: z.string(),
    isPlaylist: z.boolean().optional(),
    order: z.number().optional(),
  }),
});

const vouchers = defineCollection({
  loader: glob({ pattern: "**/*.mdx", base: "src/content/vouchers" }),
  schema: z.object({
    name: z.string(),
    description: z.string().optional(),
    value: z.string().optional(),
    url: z.string().optional(),
    code: z.string().nullish(),
    image: z.string().optional(),
    order: z.number().optional(),
  }),
});

export const collections = {
  drypp: blog,
  recordings,
  gigs,
  software,
  videos,
  vouchers,
};
