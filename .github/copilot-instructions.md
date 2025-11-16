## Quick orientation for AI coding agents

This repo is a personal Eleventy (11ty) static site built by adapting the "Minimal Mistakes" Jekyll theme. Source lives under `src/` and the site is built with Node/npm scripts defined in the root `package.json`.

Keep edits focused on the `src/` tree. The build pipeline compiles Sass, runs Eleventy, and bundles/copies assets to `dist/` (or the directory `eleventy` writes to when building).

Key files and locations
- Templates/layouts: `src/layouts/*.html` (e.g. `src/layouts/default.html`) — contains the top-level HTML structure and includes.
- Reusable pieces: `src/components/*` (e.g. `src/components/head.html`, `src/components/scripts.html`, `src/components/skip-links.html`). Use these includes rather than duplicating markup.
- Content pages and collections: `src/pages/`, `src/posts/`, `src/past-projects/`.
- Data and config: `src/data/` (site data like `site.json`, `navigation.json`, `ui-text.yml`) and `src/layout.js` for any programmatic data.
- Styles: `src/_sass/` with `minimal-mistakes.scss`. The built CSS is output by the npm scripts.
- Assets and JS: `src/assets/` and `src/components/analytics-providers/` for analytics snippets.

Developer workflows (how to run and build)
- Install: `npm install`
- Dev (live server + watch Sass): `npm run start` — this runs the Sass build and starts Eleventy in serve/watch mode.
- Build: `npm run build` — runs both `build:sass` and `build:eleventy` (see `package.json` for individual scripts like `build:sass` and `build:eleventy`).
- Debug Eleventy: `npm run debug` (sets `DEBUG=Eleventy:*`).

Project conventions and patterns (be specific)
- Template language: Liquid/Jekyll-style tags are used by 11ty here. Includes are written as `{% include components/head.html %}`. Preserve existing front-matter and Liquid expressions.
- Use components/includes: prefer editing `src/components/*` when you need header/footer/analytics/skip-links changes. Example: `src/components/skip-links.html` contains accessible skip links — update copy in `src/data/ui-text.yml` for translations.
- Feature flags in data: the site toggles features via `site.*` values in data files (e.g. `site.search`, `site.head_scripts`, `site.footer_scripts`, `site.search_provider`). Make changes to `src/data/site.json` (or corresponding data file) when adding global flags.
- Search providers: conditional includes in `src/components/scripts.html` select search code based on `site.search_provider` (`lunr`, `algolia`, `google`). Add provider-specific assets in `src/components/search/`.

Integration points and external dependencies
- Eleventy: the site is driven by `@11ty/eleventy` (see `src/package.json`). Use Eleventy collections and data files for content-driven behavior.
- Sass: `sass` compiles the theme Sass in `src/_sass/` to `dist/assets/styles/minimal-mistakes.css`.
- Analytics: multiple provider snippets live under `src/components/analytics-providers/` and are included from `src/components/analytics.html` — prefer editing those provider files for analytics changes.
- CDN fonts/icons: Font Awesome is preloaded in `src/components/head.html` (watch for external CDN usage).

Guidance for code changes
- Don't modify compiled/minified files under `dist/` or `assets/js/main.min.js`. Change source under `src/` and run the build.
- Preserve Liquid tag logic and front-matter. When adding new template variables, prefer adding them to `src/data/site.json` or the relevant page front-matter.
- When adding JS/CSS, put source in `src/assets/` (or `src/_sass/`) and update `src/components/head.html`/`scripts.html` or data (`site.head_scripts`/`site.footer_scripts`) to include them.
- Accessibility: there are built-in skip links (`src/components/skip-links.html`) and ARIA-aware components — keep these patterns when changing navigation or page structure.

Examples to reference in edits
- Add a global script: set `site.footer_scripts` in `src/data/site.json` or add a script path and it will be included via `src/components/scripts.html`.
- Toggle search: set `site.search` and `site.search_provider` in `src/data/site.json` to enable different search providers; see `src/components/search/*` for provider code.

What NOT to change
- Don’t edit vendor/minified bundles in `src/assets/js` unless you intend to rebuild `assets/js/main.min.js` via the project's build scripts.
- Avoid renaming the `src/components/` includes without updating every layout that references them.

If you need more context
- Look at `package.json` (root and `src/package.json`) for scripts and dependencies.
- Inspect `src/layouts/default.html` and the components included there to see the page structure to follow.

If something is unclear or you'd like broader edits (e.g., adding a new plugin, changing output directory), tell me which area to expand and I'll update this guidance.
