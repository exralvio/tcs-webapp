import { Logo } from "@/components/Logo";

const socials = [
  {
    label: "Instagram",
    href: "https://instagram.com/thecourtsociety",
    icon: (
      <svg viewBox="0 0 24 24" aria-hidden="true" className="h-5 w-5">
        <rect
          x="3.5"
          y="3.5"
          width="17"
          height="17"
          rx="5"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.8"
        />
        <circle cx="12" cy="12" r="3.6" fill="none" stroke="currentColor" strokeWidth="1.8" />
        <circle cx="17.2" cy="6.8" r="0.9" fill="currentColor" />
      </svg>
    ),
  },
  {
    label: "Facebook",
    href: "https://facebook.com/thecourtsociety",
    icon: (
      <svg viewBox="0 0 24 24" aria-hidden="true" className="h-5 w-5">
        <path
          d="M14 8.5V6.8c0-.7.5-1.1 1.2-1.1H17V3h-2.1C12.4 3 11 4.5 11 6.7v1.8H9v2.7h2V21h3v-9.8h2.3l.4-2.7H14Z"
          fill="currentColor"
        />
      </svg>
    ),
  },
  {
    label: "YouTube",
    href: "https://youtube.com",
    icon: (
      <svg viewBox="0 0 24 24" aria-hidden="true" className="h-5 w-5">
        <path
          d="M20.2 8.2a2.4 2.4 0 0 0-1.7-1.7C16.9 6.1 12 6.1 12 6.1s-4.9 0-6.5.4a2.4 2.4 0 0 0-1.7 1.7A25 25 0 0 0 3.4 12a25 25 0 0 0 .4 3.8 2.4 2.4 0 0 0 1.7 1.7c1.6.4 6.5.4 6.5.4s4.9 0 6.5-.4a2.4 2.4 0 0 0 1.7-1.7 25 25 0 0 0 .4-3.8 25 25 0 0 0-.4-3.8Z"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.6"
        />
        <path d="M10.6 14.8V9.2L15.2 12l-4.6 2.8Z" fill="currentColor" />
      </svg>
    ),
  },
];

export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="bg-brand-ink text-white">
      <div className="mx-auto flex w-full max-w-6xl flex-col gap-8 px-5 py-12 sm:px-8 md:flex-row md:items-center md:justify-between">
        <div>
          <p className="text-lg font-semibold tracking-tight">
            <Logo />
          </p>
          <p className="mt-1 text-sm text-white">Badminton, together.</p>
        </div>
        <ul className="flex items-center gap-3">
          {socials.map((social) => (
            <li key={social.label}>
              <a
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={social.label}
                className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-white/30 text-white transition duration-200 hover:border-accent hover:bg-accent hover:text-brand focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-accent motion-safe:hover:-translate-y-0.5"
              >
                {social.icon}
              </a>
            </li>
          ))}
        </ul>
      </div>
      <div className="border-t border-white/15">
        <div className="mx-auto flex w-full max-w-6xl flex-col gap-2 px-5 py-5 text-sm text-white sm:flex-row sm:items-center sm:justify-between sm:px-8">
          <p>© {year} TheCourtSociety</p>
          <p>Photos: Unsplash, Pexels, and Wikimedia Commons.</p>
        </div>
      </div>
    </footer>
  );
}
