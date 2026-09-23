"use client";

import { useState, type FormEvent } from "react";

export function RegisterForm() {
  const [successName, setSuccessName] = useState<string | null>(null);

  function onSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const form = event.currentTarget;
    const nameInput = form.elements.namedItem("name");
    const whatsappInput = form.elements.namedItem("whatsapp");

    if (!(nameInput instanceof HTMLInputElement)) return;
    if (!(whatsappInput instanceof HTMLInputElement)) return;

    nameInput.value = nameInput.value.trim().replace(/\s+/g, " ");
    whatsappInput.value = whatsappInput.value.trim();

    if (!form.reportValidity()) return;

    setSuccessName(nameInput.value.slice(0, 40));
  }

  if (successName) {
    return (
      <div
        role="status"
        aria-live="polite"
        className="rounded-3xl bg-brand px-6 py-10 text-white shadow-[0_24px_60px_-28px_rgba(0,18,66,0.65)] sm:px-9 sm:py-12"
      >
        <p className="text-sm font-semibold tracking-[0.16em] text-accent uppercase">
          You&apos;re in
        </p>
        <p className="mt-3 text-3xl font-semibold tracking-tight text-balance break-words">
          Thanks, {successName}.
        </p>
        <p className="mt-4 max-w-sm text-lg leading-relaxed text-white">
          You&apos;re registered. We&apos;ll be in touch about the next chance
          to meet members.
        </p>
      </div>
    );
  }

  return (
    <form
      onSubmit={onSubmit}
      className="rounded-3xl bg-brand px-6 py-8 text-white shadow-[0_24px_60px_-28px_rgba(0,18,66,0.65)] sm:px-9 sm:py-10"
    >
      <div className="space-y-5">
        <div>
          <label htmlFor="name" className="mb-2 block text-sm font-semibold">
            Name
          </label>
          <input
            id="name"
            name="name"
            type="text"
            autoComplete="name"
            required
            maxLength={80}
            placeholder="Alex Tan"
            className="h-12 w-full rounded-xl border border-white/35 bg-brand-ink px-4 text-base text-white transition duration-200 outline-none placeholder:text-accent-soft focus-visible:border-accent focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent"
          />
        </div>
        <div>
          <label htmlFor="whatsapp" className="mb-2 block text-sm font-semibold">
            WhatsApp number
          </label>
          <input
            id="whatsapp"
            name="whatsapp"
            type="tel"
            inputMode="tel"
            autoComplete="tel"
            required
            minLength={8}
            maxLength={20}
            placeholder="+62 812 3456 7890"
            title="Enter a WhatsApp number, including the country code."
            className="h-12 w-full rounded-xl border border-white/35 bg-brand-ink px-4 text-base text-white transition duration-200 outline-none placeholder:text-accent-soft focus-visible:border-accent focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent"
          />
        </div>
      </div>
      <button
        type="submit"
        className="mt-6 inline-flex h-12 w-full items-center justify-center rounded-full bg-accent px-6 text-base font-semibold text-brand transition duration-200 hover:bg-accent-deep focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-white motion-safe:hover:-translate-y-0.5"
      >
        Register
      </button>
    </form>
  );
}
