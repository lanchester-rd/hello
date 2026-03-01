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
- If you use environment variables (API keys, analytics), add them in the Vercel dashboard under Project Settings → Environment Variables.

Troubleshooting
- If the build fails on Vercel, open the failed build details in the Vercel dashboard and paste the logs here and I'll diagnose.
