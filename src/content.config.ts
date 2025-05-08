import { file, glob } from "astro/loaders";
import { defineCollection, z } from "astro:content";
import { v4 as uuidv4 } from "uuid";

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
    description: z.string().optional(),
    type: z.enum(["Album", "Single", "EP", "Live"]).optional(),
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
        format: z.string(),
        type: z.enum(["band", "solo"]),
      })
      .optional(),
  }),
});

const gigs = defineCollection({
  loader: file("src/data/gigs.json", {
    parser: (text, ...props) => {
      const data = JSON.parse(text);
      return data.map((gig: any) => ({ id: uuidv4(), ...gig }));
    },
  }),
  schema: z.object({
    id: z.string(),
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
  loader: file("src/data/softwares.json"),
  schema: z.object({
    id: z.string(),
    name: z.string(),
    description: z.string(),
    url: z.string().optional(),
    githubUrl: z.string().optional(),
  }),
});

const videos = defineCollection({
  loader: file("src/data/videos.json"),
  schema: z.object({
    id: z.string(),
    artist: z.string(),
    name: z.string(),
    youtubeLink: z.string(),
    description: z.string(),
    isPlaylist: z.boolean().optional(),
  }),
});

export const collections = {
  drypp: blog,
  recordings,
  gigs,
  software,
  videos,
};
