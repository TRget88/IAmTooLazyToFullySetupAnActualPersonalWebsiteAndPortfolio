---
title: 'Nurbly'
description: 'Git-style version control built for CAD. Essentially GitHub for mechanical design.'
tags: ['CAD', 'Rust', 'React', 'PostgreSQL', 'Git']
featured: true
year: 2026
order: 1
label: 'Independent project'
link: 'https://nurbly.com'
---

**The problem.** Software teams have Git, branches, and pull requests. Engineers
designing physical hardware still track revisions with file names like
`part_v5_final.sldprt`, or they pay for heavy enterprise PLM that is out of reach
for a smaller team. A whole discipline of careful, collaborative version control
simply never reached the people who move atoms.

**What it is.** Nurbly brings real version control and collaboration to CAD.
Commits, branches, pull requests, forks, and releases, but for mechanical design.
Engineers who move atoms deserve the tools that transformed how we move
electrons.

## How it works

I built Nurbly solo, on genuine bare Git and the Git LFS batch protocol rather
than a lookalike. On top of that sits a PostgreSQL metadata layer with CAD-aware
intelligence, including geometry analysis and bills of materials. A Rust backend
on Axum and tokio serves it, a React and TypeScript front end drives it, and a
Python and OpenCASCADE pipeline converts STEP files to GLB and computes geometry
diffs between revisions.

The result is a browser-first workflow: an in-browser 3D viewer with assembly
trees and interference detection, a bundled command-line tool for people who
prefer the terminal, and a full collaboration layer so a team can review a design
change the way software teams review code.

## Stack

Bare Git and Git LFS, PostgreSQL, Rust (Axum and tokio), React and TypeScript,
Python and OpenCASCADE. Built end to end by one person.
