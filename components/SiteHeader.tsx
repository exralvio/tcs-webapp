"use client";

import Link from "next/link";
import { useEffect, useId, useState } from "react";
import { Logo } from "@/components/Logo";

const linkClass =
  "text-sm font-medium text-white transition-colors duration-200 hover:text-accent focus-visible:rounded-sm focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-accent";

function navClass(active: boolean) {
  return active
    ? "text-sm font-semibold text-accent focus-visible:rounded-sm focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-accent"
    : linkClass;
}

export function SiteHeader({
  current = "home",
}: {
  current?: "home" | "members" | "activities";
}) {
  const onHome = current === "home";
  const menuId = useId();
  const [open, setOpen] = useState(false);

  useEffect(() => {
    if (!open) return;
    function onKey(event: KeyboardEvent) {
      if (event.key === "Escape") setOpen(false);
    }
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [open]);

  function close() {
    setOpen(false);
  }

  const links = [
    { href: "/#showcase", label: "Sessions", active: false },
    { href: "/activities", label: "Activities", active: current === "activities" },
    { href: "/members", label: "Members", active: current === "members" },
  ];

  return (
    <header className="sticky top-0 z-30 border-b border-white/15 bg-brand">
      <div className="mx-auto flex h-16 w-full max-w-6xl items-center justify-between gap-3 px-5 sm:px-8">
        <Link
          href={onHome ? "/#top" : "/"}
          onClick={close}
          className="text-sm font-semibold tracking-tight text-white transition-colors duration-200 hover:text-accent focus-visible:rounded-sm focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-accent sm:text-base"
        >
          <Logo />
        </Link>
        <nav aria-label="Primary" className="hidden items-center gap-6 md:flex">
          {links.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              aria-current={link.active ? "page" : undefined}
              className={navClass(link.active)}
            >
              {link.label}
            </Link>
          ))}
          <Link
            href="/#register"
            className="inline-flex h-10 items-center rounded-full bg-accent px-4 text-sm font-semibold text-brand transition duration-200 hover:bg-accent-deep focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-white motion-safe:hover:-translate-y-0.5"
          >
            Join
          </Link>
        </nav>
        <button
          type="button"
          aria-expanded={open}
          aria-controls={menuId}
          onClick={() => setOpen((value) => !value)}
          className="grid h-11 w-11 place-items-center rounded-full text-white ring-1 ring-white/25 transition duration-200 hover:text-accent focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent md:hidden"
        >
          <span className="sr-only">{open ? "Close menu" : "Open menu"}</span>
          {open ? (
            <svg viewBox="0 0 20 20" className="h-5 w-5" aria-hidden="true">
              <path
                d="M5 5l10 10M15 5L5 15"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.8"
                strokeLinecap="round"
              />
            </svg>
          ) : (
            <svg viewBox="0 0 20 20" className="h-5 w-5" aria-hidden="true">
              <path
                d="M4 6h12M4 10h12M4 14h12"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.8"
                strokeLinecap="round"
              />
            </svg>
          )}
        </button>
      </div>
      <nav
        id={menuId}
        aria-label="Primary"
        hidden={!open}
        className="border-t border-white/15 px-5 py-4 md:hidden"
      >
        <ul className="flex flex-col gap-1">
          {links.map((link) => (
            <li key={link.href}>
              <Link
                href={link.href}
                aria-current={link.active ? "page" : undefined}
                onClick={close}
                className={`flex rounded-xl px-3 py-3 ${navClass(link.active)}`}
              >
                {link.label}
              </Link>
            </li>
          ))}
          <li className="pt-2">
            <Link
              href="/#register"
              onClick={close}
              className="inline-flex h-11 w-full items-center justify-center rounded-full bg-accent px-4 text-sm font-semibold text-brand transition duration-200 hover:bg-accent-deep focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-white"
            >
              Join
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}
