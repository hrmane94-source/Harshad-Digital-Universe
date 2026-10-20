# Harshad Mane — Production Deployment Guide

This guide covers deploying your portfolio to **Vercel**, **Netlify**, or **Cloudflare Pages** with single-page app (SPA) routing and environment variables.

---

## 🚀 Option 1: Deploying to Vercel (Recommended)

1. Push your repository to GitHub:
   ```bash
   git add .
   git commit -m "feat: complete Harshad Mane portfolio and OS"
   git push origin main
   ```
2. Go to [vercel.com](https://vercel.com) and click **Add New...** → **Project**.
3. Import your `harshad-digital-universe` repository.
4. **Framework Preset:** Vite
5. **Build Command:** `npm run build`
6. **Output Directory:** `dist`
7. **Environment Variables:**
   - `VITE_SUPABASE_URL`: Your Supabase Project URL
   - `VITE_SUPABASE_ANON_KEY`: Your Supabase Anon Key
   - `VITE_OWNER_EMAIL`: `hrmane94@gmail.com`
   - `VITE_SITE_URL`: Your production custom domain (e.g. `https://harshadmane.dev`)
8. Click **Deploy**.
9. The included `vercel.json` ensures direct route URLs (`/projects/falcon-404`, `/about`, etc.) reload without 404 errors!

---

## 🌐 Option 2: Deploying to Netlify

1. Go to [netlify.com](https://netlify.com) and click **Add new site** → **Import an existing project**.
2. Select GitHub and pick the repository.
3. **Build settings:**
   - Build command: `npm run build`
   - Publish directory: `dist`
4. Add your Environment Variables in **Site settings** → **Environment variables**.
5. The included `public/_redirects` file automatically handles client-side routing on Netlify.

---

## 🏷️ Setting up a Custom Domain (e.g., `harshadmane.dev`)

1. In your domain registrar (Namecheap, GoDaddy, Cloudflare, etc.):
   - Add a `CNAME` record pointing `@` or `www` to `cname.vercel-dns.com` (or Netlify DNS).
2. In Vercel / Netlify dashboard, go to **Domains** and enter your domain name.
3. SSL certificates are provisioned automatically.
4. Update `VITE_SITE_URL` in your environment variables to match your live custom domain.
