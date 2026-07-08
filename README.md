# IAmTooLazyToFullySetupAnActualPersonalWebsiteAndPortfolio

I used a very descriptive name. This is my lazy portfolio. It might be a little tonge in cheek because I don't think anyone actually reads or reviews these.

---

Built with [Astro](https://astro.build). Dark, minimal, and fully static.
Projects are plain Markdown files, so adding work means writing a `.md`, with no
database, no CMS, and no server to maintain.

## Quick start

```bash
npm install
npm run dev      # http://localhost:4321
```

| Command           | What it does                                  |
| ----------------- | --------------------------------------------- |
| `npm run dev`     | Start the dev server with hot reload          |
| `npm run build`   | Build the static site into `dist/`            |
| `npm run preview` | Serve the built `dist/` locally to spot-check |

## Editing the site

- **Your name, tagline, contact links:** `src/config.ts` (one file drives the
  nav, hero, footer, and page titles).
- **Look and feel:** `src/styles/global.css`. Every color and spacing value is a
  CSS variable at the top under `:root`. Change the accent in one place.
- **Pages:** `src/pages/` (`index.astro` = home, `about.astro`, `404.astro`).

## Adding a project

Create a new Markdown file in `src/content/projects/`, e.g.
`src/content/projects/my-thing.md`:

```markdown
---
title: 'My Thing'
description: 'One line about what it is.'
tags: ['Rust', 'CLI'] # optional
featured: true # optional, shows on the home page
year: 2026 # optional
order: 1 # optional, lower sorts first
repo: 'https://github.com/you/my-thing' # optional
demo: 'https://my-thing.example.com' # optional
---

Write the project story here in Markdown. Headings, lists, code blocks, and
images (drop files in `public/` and link them as `/my-image.png`) all work.
```

The file name becomes the URL: `my-thing.md` becomes `/projects/my-thing`.
The frontmatter is validated on build, so a typo'd field fails the build with a
clear message instead of shipping broken.

## Deploying

Every push to `main` triggers the GitHub Actions workflow in
`.github/workflows/deploy.yml`, which builds the site and publishes it to GitHub
Pages at [www.kirklandbrooks.com](https://www.kirklandbrooks.com). The custom
domain is pinned by `public/CNAME`, and `site` in `astro.config.mjs` points at
it. Because it is just static files, it can also run on Netlify, Vercel, or
Cloudflare Pages with build command `npm run build` and output directory `dist`.

## Why Astro (and not WordPress)?

For a mostly-static portfolio, a static site is cheaper (free hosting), faster
(pre-built HTML on a CDN), more secure (no server or database to attack), and
zero-maintenance (nothing to patch). Content still lives in easy-to-edit
Markdown. If you ever want a click-to-edit admin UI, a git-based CMS like
[Keystatic](https://keystatic.com) or Decap can be added on top, still with no
database required.
