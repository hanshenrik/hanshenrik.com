import { z } from "astro:content";

export const stringToHtmlTagId = (str: string) => {
  return str.replace(/[^a-zA-Z0-9]/g, "-").toLowerCase();
};

const rssPostDataSchema = z.object({
  title: z.string(),
  description: z.string(),
  pubDate: z.date(),
});

export type RssPostData = z.infer<typeof rssPostDataSchema>;

export const blogPostDataSchema = rssPostDataSchema.extend({
  image: z.string().optional(),
  imageAttribution: z.string().optional(),
  updatedAt: z.date().optional(),
  tags: z.array(z.string()).optional().default([]),
});

export type BlogPostData = z.infer<typeof blogPostDataSchema>;

export function hasRequiredRssPostFields<T extends { data: any }>(
  post: T,
): post is T & {
  data: T["data"] & RssPostData;
} {
  return (
    typeof post.data.title === "string" &&
    typeof post.data.description === "string" &&
    post.data.pubDate instanceof Date
  );
}
