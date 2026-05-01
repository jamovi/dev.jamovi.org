import { defineCollection } from 'astro:content';
import { z } from 'zod';
import { glob } from 'astro/loaders';

const docs = defineCollection({
  loader: glob({ pattern: '**/*.md', base: 'src/content/docs' }),
  schema: z.object({
    title: z.string().optional(),
    description: z.string().optional(),
    pubDate: z.date().optional(),
    author: z.string().optional(),
    tags: z.array(z.string()).optional(),
    ogImage: z.string().optional(),
    canonicalURL: z.string().optional(),
    keywords: z.array(z.string()).optional(),
  })
});

export const collections = { docs };
