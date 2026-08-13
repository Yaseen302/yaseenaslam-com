# YASEENX — yaseenaslam.com

Premium multi-page portfolio for Mohammad Yaseen Aslam, built with React, TypeScript and vinext for production deployment.

## Local development

```bash
npm install
npm run dev
```

## Production build

```bash
npm run build
```

## Contact form

Copy `.env.example` to `.env.local` and connect a transactional email provider in `app/api/contact/route.ts`. Never commit real credentials.

## Vercel deployment

1. Upload this project to a GitHub repository.
2. In Vercel, click **Add New → Project** and import the repository.
3. Keep Framework Preset as **Next.js** and click **Deploy**.
4. Vercel will issue a `*.vercel.app` production URL.
5. In **Settings → Domains**, add `yaseenaslam.com` and apply Vercel's displayed DNS records at your registrar.
