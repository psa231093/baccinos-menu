# Bacino's Italian Grill — Digital Menu

A modern, mobile-first menu for Bacino's Italian Grill, built with **React + Vite
+ Tailwind CSS**. Two top-level modes (**Food** / **Drinks**), each with
scrollable category tabs, photo cards for food, and tailored layouts for drinks
(simple list, can-beer with size/ABV, and a glass/bottle wine table).

## Develop

```bash
npm install
npm run dev      # http://localhost:5173
npm run build    # static output in dist/
npm run preview  # preview the production build
```

Deploy `dist/` to any static host (Netlify, Vercel, GitHub Pages, S3, …).

## Structure

- `src/data/menu.js` — **single source of truth** for all menu content
  (items, prices, descriptions, locations). Edit here to update the menu.
- `src/components/` — `Header`, `ModeToggle`, `SearchBar`, `CategoryCircles`
  (visual browse strip), `CategoryNav` (slim sticky scroll-spy pills),
  `MenuSection` (renders `cards` / `list` / `beer` / `wine` layouts), `Footer`.
- `src/hooks/useScrollSpy.js` — highlights the section currently under the bar.
- `public/img/dishes/` — dish photos. `public/img/cat/` — drink category thumbnails.
- `scripts/extract_assets.py` — one-time script that extracted the logo, dish
  photos, and category thumbnails from the print PDF (PyMuPDF + Pillow). Not needed
  at runtime.

## Notes

- Content was transcribed from `Grill Menu 2026 By MZ.pdf`. The "Match Plan"
  bracket and welcome hero were intentionally excluded.
- To add/replace a dish photo: drop a JPEG in `public/img/dishes/` and point the
  item's `img` at it in `menu.js`.
- Each category has a `navImage` in `menu.js` for its browse-strip circle; set it
  to `null` to show a brand-gradient circle with the category's initial instead.
