import { createClient } from "@supabase/supabase-js";

export function getSupabaseClient() {
  // Matches the env var names the Vercel Supabase integration creates
  // automatically. Falls back to the plain names for local setups that
  // added them by hand.
  const url =
    process.env.NEXT_PUBLIC_SUPABASE_URL || process.env.SUPABASE_URL;
  const key =
    process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY || process.env.SUPABASE_ANON_KEY;

  if (!url || !key) {
    return null;
  }

  return createClient(url, key);
}
