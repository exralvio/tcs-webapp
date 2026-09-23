"use client";

import Link from "next/link";
import { useLayoutEffect } from "react";
import { membersHref } from "@/lib/members";

let pendingTopScroll = false;

function scrollToTop() {
  const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  window.scrollTo({ top: 0, behavior: reduceMotion ? "auto" : "smooth" });
}

export function MemberPagination({
  page,
  totalPages,
  sort,
  showing,
  total,
}: {
  page: number;
  totalPages: number;
  sort: "az" | "za";
  showing: number;
  total: number;
}) {
  useLayoutEffect(() => {
    if (!pendingTopScroll) return;
    pendingTopScroll = false;
    scrollToTop();
  }, [page, sort]);

  return (
    <nav
      aria-label="Members pages"
      className="mt-12 flex flex-col items-center gap-4 sm:flex-row sm:justify-between"
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
                href={membersHref(number, sort)}
                scroll={false}
                aria-label={`Page ${number}`}
                aria-current={current ? "page" : undefined}
                onClick={() => {
                  if (!current) pendingTopScroll = true;
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
