# allisonmeier.com

My portfolio & professional site!

## Run locally

For the usual workflow, run this single command:

```bash
npm start
```

This starts Vite and opens the local site in your default browser. Keep the terminal open while editing; changes refresh automatically.

For a fresh clone, install dependencies once first:

```bash
npm ci
```

## Preview access

The homepage currently shows a private preview screen while the site is being updated. The temporary password is `allison`; change `SITE_PASSWORD` near the top of `src/main.js` before sharing the preview.

This is a client-side preview gate, not secure authentication. Anyone with access to the site files could inspect or bypass it.

## Build for production

```bash
npm run build
```

The booking CTA currently opens `hello@allisonmeier.com`. Replace that link with a Calendly or Cal.com URL/embed when the scheduling account is ready.

## GitHub Pages

The repository includes a GitHub Actions workflow at `.github/workflows/deploy.yml`.

1. Push the repository to GitHub on the `main` branch.
2. In **Settings → Pages**, set **Source** to **GitHub Actions**.
3. In **Settings → Pages → Custom domain**, enter `allisonmeier.com`.
4. At your domain provider, point the domain to GitHub Pages using the DNS records GitHub provides. For the `www` version, add the GitHub Pages CNAME record shown there.

After that, every push to `main` rebuilds and publishes the site automatically.
