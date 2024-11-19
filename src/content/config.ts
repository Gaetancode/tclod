import { defineCollection, z } from 'astro:content';

const blog = defineCollection({
  schema: z.object({
    title: z.string(),
    description: z.string(),
    pubDate: z.string().transform((str) => {
      if (!str) return new Date();
      const [day, month, year] = str.split('/');
      return new Date(`${year}-${month}-${day}`);
    }),
    updatedDate: z.string().optional().transform((str) => {
      if (!str) return undefined;
      const [day, month, year] = str.split('/');
      return new Date(`${year}-${month}-${day}`);
    }),
    heroImage: z.string().optional(),
  }),
});

export const collections = { blog };