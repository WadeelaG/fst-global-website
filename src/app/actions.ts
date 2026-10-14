"use server";

import { getSupabaseClient } from "@/lib/supabase";

export type WaitlistState = {
  status: "idle" | "success" | "error";
  message: string;
};

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

export async function joinWaitlist(
  _prevState: WaitlistState,
  formData: FormData
): Promise<WaitlistState> {
  const email = String(formData.get("email") || "").trim();

  if (!EMAIL_RE.test(email)) {
    return { status: "error", message: "Enter a valid email address." };
  }

  const supabase = getSupabaseClient();
  if (!supabase) {
    return {
      status: "error",
      message: "Signups aren't connected yet — check back shortly.",
    };
  }

  const { error } = await supabase
    .from("waitlist")
    .insert({ email: email.toLowerCase() });

  if (error) {
    if (error.code === "23505") {
      return { status: "success", message: "You're already on the list!" };
    }
    return { status: "error", message: "Something went wrong. Please try again." };
  }

  return { status: "success", message: "You're on the list! We'll be in touch." };
}
