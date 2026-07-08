import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

// Each Markdown file in src/content/projects/ becomes one project page.
// The frontmatter at the top of each file must match this schema. If it
// doesn't, `astro build` fails with a clear error (so typos can't ship).
const projects = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/projects' }),
  schema: z.object({
    title: z.string(),
    description: z.string(),
    tags: z.array(z.string()).default([]),
    featured: z.boolean().default(false),
    /** A short kind label, e.g. "My company" or "Independent project". */
    label: z.string().optional(),
    year: z.number().optional(),
    /** Lower numbers sort first on the Projects page. */
    order: z.number().default(999),
    /** Optional source-code link. */
    repo: z.string().url().optional(),
    /** Optional link to the live site or product. */
    link: z.string().url().optional(),
  }),
});

export const collections = { projects };
