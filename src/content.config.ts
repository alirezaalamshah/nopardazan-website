import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

const solutions = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/solutions' }),
  schema: ({ image }) =>
    z.object({
      title: z.string(),
      summary: z.string(),
      seoDescription: z.string().max(160),
      heroImage: image().optional(),
      heroImageAlt: z.string().optional(),
      icon: z.enum(['heart', 'shopping-bag', 'link', 'nfc', 'card-reader', 'dumbbell', 'cube']).default('cube'),
      customers: z.string(),
      features: z.array(z.string()).default([]),
      relatedHardware: z.array(z.string()).default([]),
      order: z.number().default(0),
    }),
});

const hardware = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/hardware' }),
  schema: ({ image }) =>
    z.object({
      title: z.string(),
      summary: z.string(),
      seoDescription: z.string().max(160),
      heroImage: image().optional(),
      heroImageAlt: z.string().optional(),
      icon: z.enum(['heart', 'shopping-bag', 'link', 'nfc', 'card-reader', 'dumbbell', 'cube']).default('card-reader'),
      customers: z.string(),
      specs: z.array(z.object({ label: z.string(), value: z.string() })).default([]),
      compatibleOS: z.array(z.string()).default([]),
      relatedSolutions: z.array(z.string()).default([]),
      order: z.number().default(0),
    }),
});

const portfolio = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/portfolio' }),
  schema: ({ image }) =>
    z.object({
      title: z.string(),
      audience: z.string(),
      customers: z.string(),
      icon: z.enum(['heart', 'shopping-bag', 'link', 'nfc', 'card-reader', 'dumbbell', 'cube']).default('dumbbell'),
      summary: z.string(),
      seoDescription: z.string().max(160),
      challenge: z.string(),
      solution: z.string(),
      heroImage: image().optional(),
      heroImageAlt: z.string().optional(),
      order: z.number().default(0),
    }),
});

const testimonials = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/testimonials' }),
  schema: ({ image }) =>
    z.object({
      quote: z.string(),
      author: z.string(),
      company: z.string(),
      companyUrl: z.string().url().optional(),
      avatar: image().optional(),
      featured: z.boolean().default(false),
      order: z.number().default(0),
    }),
});

export const collections = { solutions, hardware, portfolio, testimonials };
