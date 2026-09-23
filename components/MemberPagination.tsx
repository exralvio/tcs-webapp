"use client";

import Link from "next/link";
import { useEffect } from "react";
import { membersHref } from "@/lib/members";

let pendingTopScroll = false;

export function MemberPagination({
  page,
  totalPages,
  sort,
  query,
  showing,
  total,
}: {
  page: number;
  totalPages: number;
  sort: "az" | "za";
  query: string;
  showing: number;
  total: number;
}) {
  useEffect(() => {
    if (!pendingTopScroll) return;
    pendingTopScroll = false;
    window.scrollTo({ top: 0, behavior: "auto" });
  }, [page, sort]);

  return (
    <nav
      aria-label="Members pages"
      className="mt-12 flex flex-col items-center gap-4 [overflow-anchor:none] sm:flex-row sm:justify-between"
    >
      <p className="text-sm text-white">
        Showing {showing} of {total} members
      </p>
      <ol className="flex items-center gap-2">
        {Array.from({ length: totalPages }, (_, index) => {
          const number = index + 1;
          const current = number === page;
          return (
            <li key={number}>
              <Link
                href={membersHref(number, sort, query)}
                scroll={false}
                aria-label={`Page ${number}`}
                aria-current={current ? "page" : undefined}
                onClick={(event) => {
                  if (current) return;
                  pendingTopScroll = true;
                  event.currentTarget.blur();
                }}
                className={`inline-flex h-11 w-11 items-center justify-center rounded-full text-sm font-semibold transition duration-200 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent ${
                  current
                    ? "bg-accent text-brand"
                    : "bg-brand-ink text-white ring-1 ring-white/25 hover:text-accent"
                }`}
              >
                {number}
              </Link>
            </li>
          );
        })}
      </ol>
    </nav>
  );
}
