-- Run this in your gk-digital-marketing-crm Supabase project (SQL Editor)
-- when you're ready to start capturing real leads from the website form.

create table if not exists leads (
  id uuid primary key default gen_random_uuid(),
  lead_name text not null,
  business_name text,
  email text not null,
  phone text not null,
  service_interested text,
  budget text,
  message text,
  source text default 'website_contact_form',
  pipeline_stage text default 'New Lead',
  created_at timestamptz default now()
);

-- Optional: enable Row Level Security once you add auth to a future admin
-- dashboard. For now, the API route uses the service_role key server-side,
-- which bypasses RLS, so this is safe to leave off until you build that.
