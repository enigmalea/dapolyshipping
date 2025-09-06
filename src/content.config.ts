import { defineCollection, z } from "astro:content";
import { SocialLinks } from "@fujocoded/zod-transform-socials";
import { docsLoader } from "@astrojs/starlight/loaders";
import { docsSchema } from "@astrojs/starlight/schema";
import { topicSchema } from "starlight-sidebar-topics/schema";
import { glob } from "astro/loaders";

const mods = defineCollection({
  loader: glob({ pattern: "**/*.md", base: "./src/content/mods/" }),
  schema: ({ image }) =>
    z.object({
      name: z.string(),
      avatar: image(),
      links: SocialLinks,
    }),
});
export const collections = {
  docs: defineCollection({
    loader: docsLoader(),
    schema: docsSchema({ extend: topicSchema }),
  }),
  mods,
};
