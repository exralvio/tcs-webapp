import Link from "next/link";
import { Logo } from "@/components/Logo";

const linkClass =
  "text-sm font-medium text-white transition-colors duration-200 hover:text-accent focus-visible:rounded-sm focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-accent";

export function SiteHeader({
  current = "home",
}: {
  current?: "home" | "members" | "activities";
}) {
  const onHome = current === "home";

  return (
    <header className="sticky top-0 z-30 border-b border-white/15 bg-brand">
      <div className="mx-auto flex h-16 w-full max-w-6xl items-center justify-between gap-3 px-5 sm:px-8">
        <Link
          href={onHome ? "/#top" : "/"}
          className="text-sm font-semibold tracking-tight text-white transition-colors duration-200 hover:text-accent focus-visible:rounded-sm focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-accent sm:text-base"
        >
          <Logo />
        </Link>
        <nav aria-label="Primary" className="flex items-center gap-3 sm:gap-6">
          <Link href="/#showcase" className={linkClass}>
            Sessions
          </Link>
          <Link
            href="/activities"
            aria-current={current === "activities" ? "page" : undefined}
            className={
              current === "activities"
                ? "text-sm font-semibold text-accent focus-visible:rounded-sm focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-accent"
                : linkClass
            }
          >
            Activities
          </Link>
          <Link
            href="/members"
            aria-current={current === "members" ? "page" : undefined}
            className={
              current === "members"
                ? "text-sm font-semibold text-accent focus-visible:rounded-sm focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-accent"
                : linkClass
            }
          >
            Members
          </Link>
          <Link
            href="/#register"
            className="inline-flex h-10 items-center rounded-full bg-accent px-3 text-sm font-semibold text-brand transition duration-200 hover:bg-accent-deep focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-white motion-safe:hover:-translate-y-0.5 sm:px-4"
          >
            Join
          </Link>
        </nav>
      </div>
    </header>
  );
}
