# Compiled theme assets (Twilight)

Salla theme preview and storefront expect webpack output files in this **`public/`** folder at the repository root (same pattern as [Theme Raed](https://github.com/SallaApp/theme-raed)).

Files here were synced from Theme Raed’s `public/` so standard bundles resolve:

- `app.css` / `app.js` — main entry
- `product-card.js`, `home.js`, `product.js`, etc. — code-split chunks

Your custom styles/scripts in `src/assets/` are still loaded from `layouts/master.twig`; these bundles add Twilight/Web Component compatibility.

To regenerate from source later, add a `webpack.config.js` based on Theme Raed and run `npm run build`.
