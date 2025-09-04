import rss from "@astrojs/rss";
import type { APIContext } from "astro";
import { type CollectionEntry, getCollection } from "astro:content";
import { isBefore } from "date-fns";

import { type PostData, hasRequiredRssPostFields } from "../../utils";

const includePostInRssFeed = (
  post: CollectionEntry<"drypp"> & { data: PostData },
) => !post.data.draft && isBefore(post.data.pubDate, new Date());

export async function GET(context: APIContext) {
  const posts = await getCollection("drypp");
  const filteredPosts = posts
    .filter(hasRequiredRssPostFields)
    .filter(includePostInRssFeed);

  return rss({
    title: "Drypp",
    description: "Drypp av musikk og podkast.",
    site: context.site!,
    trailingSlash: false,
    items: filteredPosts.map((post) => ({
      title: post.data.title,
      pubDate: post.data.pubDate,
      description: post.data.description,
      link: `/drypp/${post.id}`,
      // Include image if it exists
      ...(post.data.image && { image: post.data.image }),
      // Include any other custom fields you want in the RSS feed
      ...(post.data.author && { author: post.data.author }),
    })),
    // (optional) inject custom xml
    customData: `<language>en-us</language>`,
  });
}
