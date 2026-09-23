"use client";

import { useRouter } from "next/navigation";
import { type FormEvent, useState } from "react";
import { membersHref } from "@/lib/members";

export function MemberSearch({
  query,
  sort,
}: {
  query: string;
  sort: "az" | "za";
}) {
  const router = useRouter();
  const [value, setValue] = useState(query);

  function onSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    router.push(membersHref(1, sort, value), { scroll: false });
  }

  function onClear() {
    setValue("");
    if (query !== "") {
      router.push(membersHref(1, sort), { scroll: false });
    }
  }

  return (
    <form role="search" onSubmit={onSubmit} className="mt-8">
      <label htmlFor="member-search" className="mb-2 block text-sm font-semibold text-white">
        Search by name
      </label>
      <div className="flex flex-col gap-3 sm:flex-row">
        <div className="relative min-w-0 flex-1">
          <input
            id="member-search"
            name="q"
            type="text"
            value={value}
            onChange={(event) => setValue(event.target.value)}
            placeholder="Aisha Rahman"
            maxLength={80}
            className="h-12 w-full rounded-xl border border-white/35 bg-brand-ink px-4 pr-12 text-base text-white transition duration-200 outline-none placeholder:text-accent-soft focus-visible:border-accent focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent"
          />
          {value ? (
            <button
              type="button"
              onClick={onClear}
              aria-label="Clear search"
              className="absolute top-1/2 right-2 grid h-8 w-8 -translate-y-1/2 place-items-center rounded-full text-white transition duration-200 hover:bg-white/10 hover:text-accent focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent"
            >
              <svg viewBox="0 0 20 20" className="h-4 w-4" aria-hidden="true">
                <path
                  d="M5 5l10 10M15 5L5 15"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.8"
                  strokeLinecap="round"
                />
              </svg>
            </button>
          ) : null}
        </div>
        <button
          type="submit"
          className="inline-flex h-12 items-center justify-center rounded-full bg-accent px-6 text-sm font-semibold text-brand transition duration-200 hover:bg-accent-deep focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-white"
        >
          Search
        </button>
      </div>
    </form>
  );
}
