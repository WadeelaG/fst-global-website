-- Run this in the Supabase SQL Editor (Project > SQL Editor > New query) once your project is created.

create table if not exists waitlist (
  id uuid primary key default gen_random_uuid(),
  email text not null unique,
  created_at timestamptz not null default now()
);

alter table waitlist enable row level security;

-- Allow anyone (the public site, using the anon key) to insert a signup row.
create policy "Public can join waitlist"
  on waitlist for insert
  to anon
  with check (true);

-- No select policy is created, so signups are not publicly readable.
-- View signups from the Supabase dashboard (Table Editor), where you're
-- authenticated as the project owner and RLS doesn't apply.
