# FST Global — Coming Soon

Next.js + Tailwind + Framer Motion/GSAP landing page, with a Supabase-backed
email waitlist. Everything below uses free tiers.

## Run it locally

```bash
npm install
npm run dev
```

Open http://localhost:3000.

## Connect the waitlist (Supabase, free)

The site builds and runs without this — the form just shows "Signups aren't
connected yet" until you do this:

1. Create a free account at [supabase.com](https://supabase.com) and create a
   new project (free tier: 500MB database, more than enough for this).
2. In the Supabase dashboard, open **SQL Editor > New query**, paste the
   contents of [`supabase/schema.sql`](./supabase/schema.sql), and run it.
   This creates the `waitlist` table.
3. Go to **Settings > API** and copy the **Project URL** and the **anon
   public** key.
4. Copy `.env.local.example` to `.env.local` and fill in those two values:
   ```
   SUPABASE_URL=https://your-project-ref.supabase.co
   SUPABASE_ANON_KEY=your-anon-public-key
   ```
5. Restart `npm run dev`. Submitted emails land in the `waitlist` table —
   view them anytime in the Supabase Table Editor.

## Deploy (Vercel, free)

1. Push this project to a GitHub repository.
2. Go to [vercel.com/new](https://vercel.com/new), sign in with GitHub, and
   import the repo. Vercel auto-detects Next.js — no config needed.
3. Before the first deploy (or after, in **Project Settings > Environment
   Variables**), add `SUPABASE_URL` and `SUPABASE_ANON_KEY` with the same
   values from your `.env.local`.
4. Deploy. Every push to `main` auto-redeploys from then on.

Free tier covers this comfortably: Vercel's Hobby plan and Supabase's free
project tier both have generous limits for a pre-launch site.

## Project structure

- `src/app/page.tsx` — assembles the page from components
- `src/components/Hero.tsx` — hero with image carousel, parallax, headline
- `src/components/WaitlistForm.tsx` — email capture form (Server Action)
- `src/components/Teasers.tsx` — "what's coming" scroll-reveal cards
- `src/app/actions.ts` — the `joinWaitlist` Server Action
- `src/lib/supabase.ts` — Supabase client factory
- `supabase/schema.sql` — run once in Supabase to create the `waitlist` table
- `public/images/` — stock photography (Unsplash, free license) — swap for
  real product/shop photos when ready
- `public/fst-logo.png` — brand logo (background made transparent)
