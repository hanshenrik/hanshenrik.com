import { file, glob } from "astro/loaders";
import { defineCollection, z } from "astro:content";
import { v4 as uuidv4 } from "uuid";

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
    tidalLink: z.string().optional(),
    spotifyLink: z.string().optional(),
    appleLink: z.string().optional(),
    soundcloudLink: z.string().optional(),
    youtubeLink: z.string().optional(),
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
  loader: file("src/data/gigs.json", {
    parser: (text, ..._props) => {
      const data = JSON.parse(text);
      return data.map((gig: any) => ({ id: uuidv4(), ...gig }));
    },
  }),
  schema: z.object({
    date: z.string(),
    toDate: z.string().optional(),
    venue: z.string(),
    venueUrl: z.string().optional(),
    city: z.string(),
    artist: z.string(),
    artistUrl: z.string().optional(),
    eventDescription: z.string(),
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
    youtubeLink: z.string(),
    description: z.string(),
    isPlaylist: z.boolean().optional(),
    order: z.number().optional(),
  }),
});

const vouchers = defineCollection({
  loader: file("src/data/vouchers.json", {
    parser: (text, ..._props) => {
      const data = JSON.parse(text);
      return data.map((voucher: any) => ({ id: uuidv4(), ...voucher }));
    },
  }),
  schema: z.object({
    name: z.string(),
    description: z.string(),
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
