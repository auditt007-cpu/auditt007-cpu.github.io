import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

const guides = defineCollection({
  loader: glob({
    pattern: '**/*.md',
    base: './src/content/guides',
    // §3 contract: `<lang>/<slug>.md` share one slug across en/ru/ar. The default id is just the
    // file name, so the three versions would collide and overwrite each other — keep the lang dir.
    generateId: ({ entry }) => entry.replace(/\.(md|mdx)$/, ''),
  }),
  schema: z.object({
    title: z.string().min(1).max(70),
    description: z.string().min(1).max(160),
    slug: z.string().regex(/^[a-z0-9]+(?:-[a-z0-9]+)*$/),
    question: z.string().min(1),
    source_url: z.string().url(),
    comment_url: z.string().url(),
    keywords: z.array(z.string()).min(1),
    funnel: z.enum(['bottom', 'mid', 'top']),
    intent: z.string().min(1),
    date: z.coerce.date(),
    lang: z.enum(['en', 'ru', 'ar']),
    hero_image: z.string().nullable(),
    faq: z
      .array(z.object({ q: z.string().min(1), a: z.string().min(1) }))
      .min(3)
      .max(5),
    word_count: z.number().int().positive(),
  }),
});

export const collections = { guides };
