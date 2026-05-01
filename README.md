# Green Nest Nursery (Salla Twilight Theme)

Plant nursery theme structure based on Twilight conventions (similar to Theme Raed).

## Repo

- GitHub: `https://github.com/meishref/sallath_1-5-2026`

## Important notes

- Do **not** commit `node_modules/` (it is ignored via `.gitignore`).
- `twilight.json` must be valid JSON **and** match Salla's Twilight schema. This repo uses the official Theme Raed `twilight.json` as a baseline, customized for this project.

## Local static preview (optional)

This is only for quick HTML/CSS/JS preview (Twig won't fully render like Salla):

```bash
npm install
npm run dev
```

## Salla CLI

From the theme root:

```bash
salla login
salla theme create
salla theme:preview
```

If Partners Portal shows a JSON error, push the latest `twilight.json` from this repo to GitHub, then re-import the theme.
