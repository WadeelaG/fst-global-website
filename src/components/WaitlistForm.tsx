"use client";

import { useActionState } from "react";
import { joinWaitlist, type WaitlistState } from "@/app/actions";

const initialState: WaitlistState = { status: "idle", message: "" };

export default function WaitlistForm() {
  const [state, formAction, pending] = useActionState(joinWaitlist, initialState);

  return (
    <div className="w-full max-w-md">
      <form
        action={formAction}
        className="flex flex-col gap-3 sm:flex-row sm:gap-2"
      >
        <input
          type="email"
          name="email"
          required
          placeholder="you@email.com"
          className="flex-1 rounded-full border border-white/15 bg-white/5 px-5 py-3.5 text-sm text-foreground placeholder:text-foreground-dim backdrop-blur-sm outline-none transition focus:border-accent focus:bg-white/10"
        />
        <button
          type="submit"
          disabled={pending}
          className="shrink-0 rounded-full bg-accent px-6 py-3.5 text-sm font-semibold text-white transition hover:bg-accent-light disabled:opacity-60"
        >
          {pending ? "Joining…" : "Notify Me"}
        </button>
      </form>
      {state.message && (
        <p
          role="status"
          className={`mt-3 text-sm ${
            state.status === "success" ? "text-emerald-400" : "text-amber-400"
          }`}
        >
          {state.message}
        </p>
      )}
    </div>
  );
}
