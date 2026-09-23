import { Logo } from "@/components/Logo";

const linkClass =
  "text-sm font-medium text-white transition-colors duration-200 hover:text-accent focus-visible:rounded-sm focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-accent";

export function SiteHeader() {
  return (
    <header className="sticky top-0 z-30 border-b border-white/15 bg-brand">
      <div className="mx-auto flex h-16 w-full max-w-6xl items-center justify-between gap-3 px-5 sm:px-8">
        <a
          href="#top"
          className="text-sm font-semibold tracking-tight text-white transition-colors duration-200 hover:text-accent focus-visible:rounded-sm focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-accent sm:text-base"
        >
          <Logo />
        </a>
        <nav aria-label="Primary" className="flex items-center gap-4 sm:gap-6">
          <a href="#showcase" className={linkClass}>
            Sessions
          </a>
          <a
            href="#register"
            className="inline-flex h-10 items-center rounded-full bg-accent px-4 text-sm font-semibold text-brand transition duration-200 hover:bg-accent-deep focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-white motion-safe:hover:-translate-y-0.5"
          >
            Join
          </a>
        </nav>
      </div>
    </header>
  );
}
