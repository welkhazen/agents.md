"use client";

import { FormEvent, useState } from "react";
import { useRouter } from "next/navigation";
import { LeadRole, validateLeadInput } from "@/lib/validators";

export function LeadForm({ role }: { role: LeadRole }) {
  const router = useRouter();
  const [pending, setPending] = useState(false);
  const [error, setError] = useState<string | null>(null);

  async function onSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setError(null);
    const formData = new FormData(event.currentTarget);
    const payload = {
      name: String(formData.get("name") || ""),
      email: String(formData.get("email") || ""),
      note: String(formData.get("note") || "") || undefined,
      role
    };

    const validationError = validateLeadInput(payload);
    if (validationError) {
      setError(validationError);
      return;
    }

    setPending(true);
    const response = await fetch("/api/lead", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(payload)
    });
    setPending(false);

    if (!response.ok) {
      setError("Something went wrong. Please try again.");
      return;
    }

    router.push(`/thank-you?role=${role}`);
  }

  return (
    <form className="space-y-4" onSubmit={onSubmit}>
      <input name="name" placeholder="Full name" className="w-full rounded-lg border border-slate-300 px-4 py-2" />
      <input name="email" placeholder="Work email" className="w-full rounded-lg border border-slate-300 px-4 py-2" />
      <textarea name="note" placeholder="Anything we should know?" className="h-28 w-full rounded-lg border border-slate-300 px-4 py-2" />
      {error && <p className="text-sm text-red-600">{error}</p>}
      <button
        disabled={pending}
        className="w-full rounded-lg bg-brand-500 px-4 py-2 font-semibold text-white transition hover:bg-brand-600 disabled:cursor-not-allowed disabled:opacity-70"
      >
        {pending ? "Submitting..." : "Get Started"}
      </button>
    </form>
  );
}
