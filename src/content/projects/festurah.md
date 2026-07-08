---
title: 'Festurah'
description: 'A free festival and event discovery app for travelers, built as an installable Progressive Web App.'
tags: ['PWA', 'Rust', 'React', 'TypeScript', 'SQLite']
featured: true
year: 2025
order: 3
label: 'Independent project'
link: 'https://festurah.com'
---

**The problem.** Most event tools only tell you what is happening near you right
now. Travelers plan the other way around. They pick a place and a date first, then
want to know what is worth showing up for once they arrive.

**What it is.** Festurah searches ahead, by destination and date. It carries a
curated, deduplicated catalog of roughly 5,600 date-verified events across about
23 categories, with camping as a first-class filter for people on the road and
automatic handling of recurring annual events so the calendar stays honest year
to year. It installs straight from the browser, works offline, and is free.

## How it works

A Rust and Axum backend over SQLite with JWT auth, and a React 19, TypeScript,
Vite, and Tailwind front end shipped as an installable PWA. A large share of the
processing is frontloaded, precomputed and cached ahead of time and pushed to the
client where the local-first PWA handles it, which keeps the backend light enough
to run the whole thing on a single VPS for about $4 a month.

## Status

Live in production and free to use.
