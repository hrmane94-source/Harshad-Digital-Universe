-- ============================================================
-- HARSHAD MANE — IMMERSIVE PORTFOLIO & PERSONAL OPERATING SYSTEM
-- SUPABASE POSTGRESQL SCHEMA WITH ROW-LEVEL SECURITY (RLS)
-- Target Database: Supabase PostgreSQL
-- Authorized Owner: hrmane94@gmail.com
-- ============================================================

-- Enable UUID extension
create extension if not exists "uuid-ossp";

-- ============================================================
-- 1. PORTFOLIO ENTRIES TABLE (Public + Private Drafts)
-- ============================================================
create table if not exists public.portfolio_entries (
  id uuid primary key default uuid_generate_v4(),
  slug text unique not null,
  title text not null,
  display_title text not null,
  tagline text not null,
  domain text not null,
  importance text not null check (importance in ('flagship', 'featured', 'standard', 'early')),
  role text not null,
  team_context text,
  status text not null check (status in ('active', 'completed', 'prototype', 'in-progress', 'demonstration')),
  publication_status text not null default 'draft' check (publication_status in ('draft', 'in-progress', 'ready', 'published', 'archived')),
  summary text not null,
  problem text not null,
  solution text not null,
  features jsonb not null default '[]'::jsonb,
  technologies jsonb not null default '[]'::jsonb,
  ai_assisted boolean not null default false,
  competition jsonb,
  limitations jsonb not null default '[]'::jsonb,
  lessons_learned jsonb not null default '[]'::jsonb,
  future_work jsonb not null default '[]'::jsonb,
  cover_artwork jsonb not null default '{}'::jsonb,
  assets jsonb not null default '{}'::jsonb,
  links jsonb not null default '{}'::jsonb,
  private_notes text, -- Strictly confidential, accessible only by owner
  created_at timestamp with time zone default timezone('utc'::text, now()) not null,
  updated_at timestamp with time zone default timezone('utc'::text, now()) not null
);

-- Indexing for fast public route lookups
create index if not exists idx_portfolio_slug on public.portfolio_entries (slug);
create index if not exists idx_portfolio_pub_status on public.portfolio_entries (publication_status);

-- Enable RLS
alter table public.portfolio_entries enable row level security;

-- Policy 1: Anyone (public visitors) can view ONLY published entries
create policy "Public can view published portfolio entries"
  on public.portfolio_entries
  for select
  using (
    publication_status = 'published'
  );

-- Policy 2: Authenticated owner has full access (read drafts, create, update, delete)
create policy "Owner can manage all portfolio entries"
  on public.portfolio_entries
  for all
  to authenticated
  using (
    auth.jwt() ->> 'email' = 'hrmane94@gmail.com'
  )
  with check (
    auth.jwt() ->> 'email' = 'hrmane94@gmail.com'
  );


-- ============================================================
-- 2. OWNER TASKS TABLE (Personal Task Management)
-- ============================================================
create table if not exists public.owner_tasks (
  id uuid primary key default uuid_generate_v4(),
  title text not null,
  priority text not null check (priority in ('low', 'medium', 'high', 'urgent')),
  due_date date,
  related_project text,
  status text not null default 'todo' check (status in ('todo', 'in-progress', 'done')),
  completion_date timestamp with time zone,
  notes text,
  created_at timestamp with time zone default timezone('utc'::text, now()) not null,
  updated_at timestamp with time zone default timezone('utc'::text, now()) not null
);

alter table public.owner_tasks enable row level security;

-- Owner-only access for tasks
create policy "Owner can manage tasks"
  on public.owner_tasks
  for all
  to authenticated
  using (auth.jwt() ->> 'email' = 'hrmane94@gmail.com')
  with check (auth.jwt() ->> 'email' = 'hrmane94@gmail.com');


-- ============================================================
-- 3. LEARNING ITEMS TABLE (Skill Tracking & Daily/Weekly Studies)
-- ============================================================
create table if not exists public.learning_items (
  id uuid primary key default uuid_generate_v4(),
  title text not null,
  category text not null check (category in ('Programming', 'Machine Learning', 'Cybersecurity', 'Cloud & DevOps', 'Other')),
  status text not null check (status in ('not-started', 'learning', 'practising', 'building', 'proficient', 'completed')),
  resources text,
  notes text,
  next_action text,
  flexible_weekly_target text,
  created_at timestamp with time zone default timezone('utc'::text, now()) not null,
  updated_at timestamp with time zone default timezone('utc'::text, now()) not null
);

alter table public.learning_items enable row level security;

create policy "Owner can manage learning items"
  on public.learning_items
  for all
  to authenticated
  using (auth.jwt() ->> 'email' = 'hrmane94@gmail.com')
  with check (auth.jwt() ->> 'email' = 'hrmane94@gmail.com');


-- ============================================================
-- 4. PERSONAL GOALS TABLE
-- ============================================================
create table if not exists public.goals (
  id uuid primary key default uuid_generate_v4(),
  category text not null,
  title text not null,
  description text not null,
  target_date text,
  status text not null check (status in ('active', 'achieved', 'paused')),
  is_public boolean not null default true,
  created_at timestamp with time zone default timezone('utc'::text, now()) not null
);

alter table public.goals enable row level security;

create policy "Public can view public goals"
  on public.goals
  for select
  using (is_public = true);

create policy "Owner can manage all goals"
  on public.goals
  for all
  to authenticated
  using (auth.jwt() ->> 'email' = 'hrmane94@gmail.com')
  with check (auth.jwt() ->> 'email' = 'hrmane94@gmail.com');


-- ============================================================
-- 5. PERSONAL REFLECTIONS TABLE (Private Journal Entries)
-- ============================================================
create table if not exists public.reflections (
  id uuid primary key default uuid_generate_v4(),
  title text not null,
  content text not null,
  date date not null default current_date,
  mood text,
  tags text[],
  is_private boolean not null default true, -- Always true by default
  created_at timestamp with time zone default timezone('utc'::text, now()) not null
);

alter table public.reflections enable row level security;

-- Strictly private: no public policy exists!
create policy "Owner can manage reflections"
  on public.reflections
  for all
  to authenticated
  using (auth.jwt() ->> 'email' = 'hrmane94@gmail.com')
  with check (auth.jwt() ->> 'email' = 'hrmane94@gmail.com');


-- ============================================================
-- 6. MEDIA ASSETS METADATA TABLE (Photography, Cinematography, Reels)
-- ============================================================
create table if not exists public.media_assets (
  id uuid primary key default uuid_generate_v4(),
  title text not null,
  category text not null check (category in ('photography', 'cinematography', 'reels', 'nature', 'travel', 'behind-the-scenes', 'personal-moments')),
  media_type text not null check (media_type in ('image', 'video')),
  source text not null,
  thumbnail text,
  poster text,
  alt text not null,
  caption text,
  location text,
  date text,
  featured boolean not null default false,
  published boolean not null default false,
  is_vertical boolean not null default false,
  created_at timestamp with time zone default timezone('utc'::text, now()) not null
);

alter table public.media_assets enable row level security;

create policy "Public can view published media"
  on public.media_assets
  for select
  using (published = true);

create policy "Owner can manage all media assets"
  on public.media_assets
  for all
  to authenticated
  using (auth.jwt() ->> 'email' = 'hrmane94@gmail.com')
  with check (auth.jwt() ->> 'email' = 'hrmane94@gmail.com');


-- ============================================================
-- 7. STORAGE BUCKET CONFIGURATION & POLICIES
-- ============================================================
-- Public Assets Bucket: 'portfolio-public'
-- Private Documents Bucket: 'owner-private'

insert into storage.buckets (id, name, public) 
values ('portfolio-public', 'portfolio-public', true)
on conflict (id) do nothing;

insert into storage.buckets (id, name, public) 
values ('owner-private', 'owner-private', false)
on conflict (id) do nothing;

-- Storage Policy: Public Read on portfolio-public
create policy "Public Access to portfolio-public"
  on storage.objects for select
  using ( bucket_id = 'portfolio-public' );

-- Storage Policy: Owner Upload to portfolio-public
create policy "Owner Upload to portfolio-public"
  on storage.objects for insert
  to authenticated
  with check (
    bucket_id = 'portfolio-public'
    and auth.jwt() ->> 'email' = 'hrmane94@gmail.com'
  );

-- Storage Policy: Owner Private Bucket Access (Read & Write)
create policy "Owner full access to owner-private"
  on storage.objects for all
  to authenticated
  using (
    bucket_id = 'owner-private'
    and auth.jwt() ->> 'email' = 'hrmane94@gmail.com'
  );
