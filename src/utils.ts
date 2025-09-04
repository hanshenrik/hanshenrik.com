import { z } from "astro:content";

export const stringToHtmlTagId = (str: string) => {
  return str.replace(/[^a-zA-Z0-9]/g, "-").toLowerCase();
};

// Define the Zod schema for post data
export const postDataSchema = z.object({
  title: z.string(),
  description: z.string(),
  pubDate: z.date(),
  image: z.string().optional(),
  author: z.string().optional(),
  draft: z.boolean().optional().default(false),
  updatedAt: z.date().optional(),
  tags: z.array(z.string()).optional(),
});

// Infer the TypeScript type from the Zod schema
export type PostData = z.infer<typeof postDataSchema>;

// Type guard to check if post has required fields for RSS/blog display
export function hasRequiredRssPostFields<T extends { data: any }>(
  post: T,
): post is T & {
  data: T["data"] & Pick<PostData, "title" | "description" | "pubDate">;
} {
  return (
    typeof post.data.title === "string" &&
    typeof post.data.description === "string" &&
    post.data.pubDate instanceof Date
  );
}

// Type guard for post data specifically
export function hasRequiredPostData<T extends Partial<PostData>>(
  data: T,
): data is T & Pick<PostData, "title" | "description" | "pubDate"> {
  return (
    typeof data.title === "string" &&
    typeof data.description === "string" &&
    data.pubDate instanceof Date
  );
}
