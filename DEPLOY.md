Vercel deployment (Next.js App Router)
====================================

This project is a Next.js App Router application. Vercel is the recommended host (full App Router support, edge functions, and automatic builds).

Quick setup (recommended)

1. Go to https://vercel.com and sign in with GitHub.
2. Import the repository and select the project.
3. Vercel auto-detects Next.js - leave defaults (Build Command: `npm run build`, Output Directory: `.next`).
4. Deploy. Subsequent pushes to the connected branch will trigger automatic builds.

Deploy via Vercel CLI

```bash
# install CLI if needed
npm i -g vercel
vercel login
cd /path/to/repo
vercel # follow prompts for project and team
vercel --prod # deploy production
```

Notes
- `vercel.json` is included as a minimal config; Vercel generally auto-detects Next.js so this file is optional.
- The legacy static site is preserved as `index.legacy.html` and accessible from the site nav item "2017 - 2024".
- If you use environment variables (API keys, analytics), add them in the dashboard under Project Settings → Environment Variables.

Cloudflare Pages Deployment
===========================

This project is compatible with Cloudflare Pages via the Next.js App Router.

Quick setup (recommended)

1. Go to your Cloudflare Dashboard and select **Workers & Pages**.
2. Create a new Page and connect it to your GitHub repository.
3. Configure **Build Settings**:
   - **Framework Preset**: `Next.js`
   - **Build Command**: `npx @cloudflare/next-on-pages@latest`
   - **Build Output Directory**: `.vercel/output`
4. In **Environment Variables**, ensure you set:
   - `NODE_VERSION`: `18` (or higher)
5. Deploy.

Deploy via Wrangler CLI

```bash
# install wrangler and build adapter
npm i -D wrangler @cloudflare/next-on-pages

# build for Cloudflare
npx @cloudflare/next-on-pages

# deploy to production
npx wrangler pages deploy .vercel/output
```

Troubleshooting
- If the build fails on Cloudflare, ensure you are using the `@cloudflare/next-on-pages` adapter as standard `next build` is not sufficient for Cloudflare's edge runtime.
