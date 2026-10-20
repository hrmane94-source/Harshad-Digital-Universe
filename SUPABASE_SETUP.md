# Harshad Mane — Supabase Backend & Database Setup Guide

This guide walks you through connecting your private Supabase PostgreSQL database and authenticating your owner workspace (`/owner`).

---

## 🏗️ 1. Create a Supabase Project

1. Go to [supabase.com](https://supabase.com) and sign in (or create a free account).
2. Click **New Project**.
3. Choose an organization, enter a project name (e.g. `harshad-digital-universe`), and set a strong database password.
4. Select your preferred AWS region (e.g., `ap-south-1` Mumbai).
5. Click **Create new project**.

---

## 🔑 2. Get API Credentials

1. In your Supabase dashboard, navigate to **Project Settings** → **API**.
2. Locate:
   - **Project URL** (e.g., `https://xyzcompany.supabase.co`)
   - **Project API Keys** → `anon` `public` key.
3. In your local project root, create a file named `.env` (or copy from `.env.example`):
   ```env
   VITE_SUPABASE_URL=https://your-project-id.supabase.co
   VITE_SUPABASE_ANON_KEY=your-supabase-anon-key-here
   VITE_OWNER_EMAIL=hrmane94@gmail.com
   VITE_SITE_URL=http://localhost:5173
   ```
4. Restart your Vite dev server (`npm run dev`).

---

## 🗄️ 3. Run the SQL Database Schema

1. In the Supabase dashboard, click on **SQL Editor** in the left sidebar.
2. Click **New query**.
3. Open the file `supabase/schema.sql` from this codebase, copy its entire contents, and paste it into the SQL Editor.
4. Click **Run** (Ctrl + Enter).
5. This creates:
   - `portfolio_entries` table with draft/published state
   - `owner_tasks` table for private action items
   - `learning_items` table for study goals
   - `goals` table
   - `reflections` table (strictly private journal)
   - `media_assets` table
   - Storage buckets: `portfolio-public` and `owner-private`
   - Complete Row Level Security (RLS) policies

---

## 🔒 4. Understanding Row Level Security (RLS)

The database schema enforces database-level authorization:
- **Public Visitors:** Can run `SELECT` *only* on rows where `publication_status = 'published'` or `published = true`.
- **Private Drafts & Reflections:** Unauthenticated visitors receive 0 rows. Even if someone inspects the API traffic, drafts cannot be read.
- **Authorized Owner:** Any `INSERT`, `UPDATE`, or `DELETE` requires an authenticated JWT where:
  ```sql
  auth.jwt() ->> 'email' = 'hrmane94@gmail.com'
  ```

---

## 👤 5. Provisioning Your Owner Account

### Method A: Email & Password
1. In your Supabase dashboard, go to **Authentication** → **Users**.
2. Click **Add User** → **Create User**.
3. Email: `hrmane94@gmail.com`
4. Set your private master password.
5. Click **Create User**.
6. You can now visit `http://localhost:5173/owner` and log in with this password!

### Method B: Google OAuth Sign-In
1. In the Supabase dashboard, go to **Authentication** → **Providers** → **Google**.
2. Enable Google.
3. Obtain your **Client ID** and **Client Secret** from the [Google Cloud Console](https://console.cloud.google.com/apis/credentials):
   - Set Authorized Redirect URI to your Supabase callback URL (displayed in the Supabase dashboard).
4. Save the provider settings in Supabase.
5. You can now click **Sign in with Google OAuth** on `/owner`!

---

## 🪣 6. Storage Buckets (Public vs. Private)

The SQL schema automatically configures:
- **`portfolio-public`:** Public read enabled. Used for project screenshots, verified certificates, and gallery media.
- **`owner-private`:** Strictly private. Unauthenticated access is completely blocked. Used for private working notes and sensitive drafts.

---

## ⚡ What Happens If Supabase Is Not Configured?

If `.env` is empty:
- The entire public portfolio (homepage, 3D experience, all 7 case studies, education, achievements, skills, résumé) continues to render seamlessly using verified bundled seed data.
- The `/owner` route presents an informative diagnostic panel indicating that Supabase is unconfigured, without crashing or faking authentication.
