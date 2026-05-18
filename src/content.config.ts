import { z, defineCollection } from 'astro:content';
import { glob } from 'astro/loaders';

const tulisan = defineCollection({
  // Menggunakan URL dan import.meta.url agar jalur folder 'tulisan' terbaca akurat di Windows
  loader: glob({ 
    pattern: '**/[^_]*.{md,mdx}', 
    base: new URL('./content/tulisan', import.meta.url).pathname 
  }),
  schema: z.object({
    title: z.string(),
    description: z.string(),
    date: z.coerce.date(),
    author: z.string().default('Adrianza'),
    category: z.string(),
    readingTime: z.string(),
  }),
});

export const collections = { tulisan };