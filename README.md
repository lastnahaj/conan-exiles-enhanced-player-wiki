# Conan Exiles Enhanced Player Wiki

This repository contains the player-facing wiki for a 5x rates, full-PvP Conan Exiles Enhanced
server. It combines the required mod stack into task-oriented guides while keeping configurable or
server-specific behavior clearly separated from verified facts.

## Local development

Use Node.js 22.

```bash
pnpm install --frozen-lockfile
pnpm run dev
```

Run the complete production check with:

```bash
pnpm run build
```

The verification step checks internal links, source coverage, page status, canonical Workshop
identities, public-content boundaries, and image provenance.

## Content updates

- Put player guidance in `docs/` and record every page in `data/verification.json`.
- Keep canonical Workshop names, IDs, guide routes, and sources in `data/mods.json`.
- Record every reviewed first-party source in `data/sources.json`.
- Publish configurable server behavior only after it has been observed on the live server.
- Keep Legacy and Enhanced evidence separate.

## Images

Use current Enhanced Workshop imagery, official author documentation, or screenshots supplied by
the server owner. A Legacy-era image may illustrate a feature that is independently confirmed in
the current Enhanced source, but it must be visibly labeled as a historical interface reference.
Every locally stored image must have a complete entry in `data/image-sources.json`. If provenance
is incomplete, keep the page text-only.

## Deployment

The `Deploy Player Wiki` workflow verifies and builds the VitePress site, then deploys the static
output to GitHub Pages whenever `main` changes.
