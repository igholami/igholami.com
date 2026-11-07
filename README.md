# Iman Gholami — Website

## Updating CV downloads

The homepage links to both CV versions:

- `public/cv.pdf`: academic CV, copied from `cv-academic/main.pdf` on `main`.
- `public/work-cv.pdf`: work CV, copied from `cv-iman-gholami/dist/iman-gholami-cv.pdf` on `main`.

Keep `/cv.pdf` as the academic download to preserve existing links. After copying
updated PDFs, run `npm run build` and commit the files. Pushes to `main` deploy
through `.github/workflows/deploy.yml` to https://igholami.com/.

Bump the cache versions in `public/sw.js` when refreshing the offline PDF copies.

---

# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## Expanding the ESLint configuration

If you are developing a production application, we recommend using TypeScript with type-aware lint rules enabled. Check out the [TS template](https://github.com/vitejs/vite/tree/main/packages/create-vite/template-react-ts) for information on how to integrate TypeScript and [`typescript-eslint`](https://typescript-eslint.io) in your project.
