# Iman Gholami — Website

## Updating CV downloads

The website publishes only the academic CV at `public/cv.pdf`, copied from
`cv-academic/main.pdf` on `main`. The homepage CV link points to `/cv.pdf`.

Keep `/cv.pdf` as the academic download to preserve existing links. After copying
the updated PDF, run `npm run build`, then commit and push the source files.
Publish the locally built site with:

```sh
npm run deploy:pages
```

The command builds locally and pushes only `dist/` to the `gh-pages` branch,
including `.nojekyll` and the custom-domain `CNAME`. GitHub Pages is configured
to serve that branch at https://igholami.com/. Publication does not use the
repository's custom Actions workflow. A push to `main` saves source changes;
run the publishing command to update the live site. Git write access is required.

Bump the cache versions in `public/sw.js` when refreshing the offline PDF copies.

---

# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## Expanding the ESLint configuration

If you are developing a production application, we recommend using TypeScript with type-aware lint rules enabled. Check out the [TS template](https://github.com/vitejs/vite/tree/main/packages/create-vite/template-react-ts) for information on how to integrate TypeScript and [`typescript-eslint`](https://typescript-eslint.io) in your project.
