// @ts-check
import { defineConfig } from 'astro/config';

// https://astro.build/config
export default defineConfig({
  // Deployed at the custom domain www.kirklandbrooks.com via GitHub Pages.
  // `site` is used for canonical URLs and sitemaps. `base` stays unset because
  // a custom domain serves from the root, not from a /repo path.
  site: 'https://www.kirklandbrooks.com',
});
