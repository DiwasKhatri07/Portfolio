# Portfolio Architecture

## Overview

The production experience is a standalone static page. `index.html` is the canonical source for the live presentation: markup, visual styling, interaction behavior, project data, social links, and the user-controlled soundtrack are kept together so the site is easy to deploy and inspect.

The original WebDev scaffold remains under `client/` as project history and as a reference for the generated development environment. The root-level `index.html` is the file intended for GitHub Pages and simple static hosting.

## Runtime behavior

The page uses semantic HTML sections for the hero, story, selected projects, journey, toolkit, social directory, soundtrack, and contact CTA. CSS custom properties control the olive, acid green, ink, paper, and muted tones. Small JavaScript behaviors handle section reveals, project interactions, menu behavior, and switching the embedded YouTube track.

The soundtrack explicitly uses `autoplay=0`. There is no background audio, no hidden audio element, and no automatic playback. A visitor must select a track and use the YouTube player controls.

Project preview images use GitHub's public Open Graph endpoint. This keeps the repository lightweight while showing current public repository artwork. When a project has a verified public demo, the card exposes a live button. Otherwise it only exposes the repository and labels the missing demo honestly.

## Accessibility and performance

The site uses visible focus states, reduced-motion handling, lazy-loaded project preview images, descriptive image alt text, and responsive layouts. The site has no backend and does not require API keys. If a GitHub Open Graph image is unavailable, the card content remains useful because the project title, description, repository link, and technology tags are independent of the preview image.

## Updating the site

1. Edit the root `index.html` for the deployed static experience.
2. Keep project descriptions factual and link only to verified public destinations.
3. Run `python3 -m http.server 8080` to inspect locally.
4. Run the GitHub Pages workflow or push to `main` after reviewing the change.
5. Update `diwas-khatri-resume.pdf` from `resume-source/main.typ` when the CV content changes.
