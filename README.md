# Iman Gholami — Website

## Updating CV downloads

The website publishes the academic CV at `public/cv.pdf`. The homepage CV link
points to `/cv.pdf`.

The current PDF is the November 12, 2026 academic CV from
`igholami/cv-academic`, revision `bc46c11` on `jane-street-fellowship`, copied
from the fellowship project's `cv-academic/main.pdf`. Its SHA-256 is
`48e39b117bab3101921aa9fcefb2b47abd360f938218a1161688285a5835895e`.
That checkout currently contains newer changes than the CV repository's `main`.
Use the latest approved academic PDF when refreshing the website.

Keep `/cv.pdf` as the academic download to preserve existing links. After copying
the updated PDF, run `npm run build`, then commit and push the source files.
Publish the locally built site with:

```sh
npm run deploy:pages
```

The command builds locally and pushes only `dist/` to the `gh-pages` branch,
including `.nojekyll` and the custom-domain `CNAME`. GitHub Pages is configured
to serve that branch as the origin for https://igholami.com/. Publication does not use the
repository's custom Actions workflow. A push to `main` saves source changes;
run the publishing command to update the live site. Git write access is required.

Bump the cache versions in `public/sw.js` when refreshing the offline PDF copies.

## Cloudflare DNS and HTTPS

Cloudflare is configured in front of the existing GitHub Pages origin. Both the
apex A/AAAA records and the `www` CNAME are proxied. Continue publishing with
`npm run deploy:pages`; the origin's `CNAME` must remain `igholami.com` and
GitHub Pages HTTPS enforcement must remain enabled.

The public Cloudflare configuration is recorded in
[`deployment/cloudflare.json`](deployment/cloudflare.json). Zone ID:
`ceb539678dc851db4318ee445bd2bb79`.

- Nameservers: `chuck.ns.cloudflare.com`, `coco.ns.cloudflare.com`.
- TLS mode: Full (strict), minimum TLS 1.2, Always Use HTTPS enabled.
- `www` redirects to `https://igholami.com/`, preserving the path and query.
- `/cv.pdf*` and `/sw.js*` bypass Cloudflare edge caching.
- iCloud MX, DKIM, SPF, Apple verification, the existing apex verification TXT,
  and Squarespace Domain Connect records are preserved and are DNS-only.
- Credentials stay outside this repository and browser bundles.

### Registrar cutover

Prepared November 12, 2026; activation requires the Squarespace registrar change.
Before replacing the Google Domains nameservers, disable the old DNSSEC signing
and remove its DS record at the registrar. Confirm the old DS record is absent
at the `.com` parent before changing nameservers; otherwise validating resolvers
can reject the new DNS responses. Set only the two Cloudflare nameservers above.

After propagation, verify Cloudflare reports the zone as active, the public NS
records show Cloudflare, both HTTPS hostnames work, `www` redirects, and response
headers contain `server: cloudflare` and `cf-ray`. Check iCloud MX, SPF and DKIM
records against the saved configuration. Check `/cv.pdf` against the SHA above.
Re-enable DNSSEC through Cloudflare and add its new DS at Squarespace once the
cutover is stable; do not reuse the former Google Domains DS.

References: [Cloudflare nameserver setup](https://developers.cloudflare.com/dns/zone-setups/full-setup/setup/)
and [DNSSEC migration](https://developers.cloudflare.com/dns/dnssec/dnssec-migration/).

---

# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## Expanding the ESLint configuration

If you are developing a production application, we recommend using TypeScript with type-aware lint rules enabled. Check out the [TS template](https://github.com/vitejs/vite/tree/main/packages/create-vite/template-react-ts) for information on how to integrate TypeScript and [`typescript-eslint`](https://typescript-eslint.io) in your project.
