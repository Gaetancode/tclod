import { defineCollection, z } from 'astro:content';

const blog = defineCollection({
  schema: z.object({
    title: z.string(),
    description: z.string(),
    pubDate: z.string().transform((str) => {
      const [day, month, year] = str.split('/');
      return new Date(`${year}-${month}-${day}`).toISOString();
    }),
    heroImage: z.string().optional(),
  }),
});

export const collections = { blog };