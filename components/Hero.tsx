import Image from "next/image";

const notes = ["Member network", "New opportunities", "Real connections"];

export function Hero() {
  return (
    <section
      id="top"
      className="relative overflow-hidden bg-brand"
      aria-labelledby="hero-heading"
    >
      <div className="relative mx-auto grid w-full max-w-6xl items-center gap-12 px-5 py-16 sm:px-8 sm:py-20 lg:min-h-[calc(100svh-4rem)] lg:grid-cols-[1.15fr_0.85fr] lg:gap-16 lg:py-24">
        <div>
          <p className="rise-in text-sm font-semibold tracking-[0.16em] text-accent uppercase">
            Badminton community
          </p>
          <h1
            id="hero-heading"
            className="rise-in mt-4 max-w-xl text-[clamp(2.75rem,7vw,5.25rem)] leading-[0.98] font-semibold tracking-[-0.045em] text-balance text-white [animation-delay:80ms]"
          >
            Connect on the
            <span className="block text-accent">court.</span>
          </h1>
          <p className="rise-in mt-6 max-w-xl text-lg leading-relaxed text-pretty text-white [animation-delay:160ms]">
            TheCourtSociety empowers members to network with each other. Play
            together, meet the right people, and find new opportunities.
          </p>
          <div className="rise-in mt-8 [animation-delay:240ms]">
            <a
              href="#register"
              className="inline-flex h-12 items-center gap-2 rounded-full bg-accent px-6 text-base font-semibold text-brand shadow-[0_16px_40px_-18px_rgba(218,251,60,0.85)] transition duration-200 hover:bg-accent-deep focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-white motion-safe:hover:-translate-y-0.5"
            >
              Join TheCourtSociety
              <svg viewBox="0 0 20 20" aria-hidden="true" className="h-4 w-4">
                <path
                  d="M4 10h12M11 5l5 5-5 5"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.8"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </a>
          </div>
          <ul className="rise-in mt-8 flex flex-wrap gap-2 [animation-delay:320ms]">
            {notes.map((note) => (
              <li
                key={note}
                className="rounded-full border border-white/30 bg-brand-deep px-3 py-1.5 text-sm text-white"
              >
                {note}
              </li>
            ))}
          </ul>
        </div>

        <div className="rise-in relative mx-auto w-full max-w-md pb-4 pr-4 lg:max-w-none [animation-delay:200ms]">
          <div
            aria-hidden="true"
            className="absolute right-0 bottom-0 h-[calc(100%-1rem)] w-[calc(100%-1rem)] rounded-[2rem] bg-accent"
          />
          <div className="relative aspect-[4/3] overflow-hidden rounded-[1.75rem] shadow-[0_28px_60px_-28px_rgba(0,18,66,0.9)]">
            <Image
              src="/images/smash.jpg"
              alt="A badminton player jumping to hit a smash on an indoor court"
              fill
              priority
              sizes="(max-width: 1024px) 100vw, 40vw"
              className="object-cover object-[62%_center]"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
