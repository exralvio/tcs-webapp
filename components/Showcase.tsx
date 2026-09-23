import Image from "next/image";

const activities = [
  {
    title: "Open play",
    caption: "Rotate in, warm up, and find a game.",
    src: "/images/open-play.jpg",
    alt: "A player serving a shuttlecock while others wait for a game in a sports hall",
    position: "object-center",
  },
  {
    title: "Doubles night",
    caption: "Partners, pace, and long rallies.",
    src: "/images/doubles.jpg",
    alt: "Two doubles players moving toward a shuttlecock at the net",
    position: "object-center",
  },
  {
    title: "Coaching",
    caption: "Footwork, clears, and net play.",
    src: "/images/coaching.jpg",
    alt: "A mixed doubles pair setting up for a clear on a badminton court",
    position: "object-center",
  },
  {
    title: "Weekend social",
    caption: "Easy games and new faces.",
    src: "/images/social.jpg",
    alt: "Players gathering for a casual game on a covered outdoor court",
    position: "object-[center_30%]",
  },
  {
    title: "First serve",
    caption: "A welcome court if you are new.",
    src: "/images/shuttle.jpg",
    alt: "Close-up of a shuttlecock held beside a badminton racket",
    position: "object-center",
  },
  {
    title: "Match night",
    caption: "Friendly games that still matter.",
    src: "/images/match.jpg",
    alt: "Several badminton courts set up in a packed indoor arena",
    position: "object-center",
  },
];

export function Showcase() {
  return (
    <section
      id="showcase"
      aria-labelledby="showcase-heading"
      className="bg-brand-dark"
    >
      <div className="mx-auto w-full max-w-6xl px-5 py-20 sm:px-8 sm:py-24 lg:py-32">
        <div className="fade-up max-w-2xl">
          <p className="text-sm font-semibold tracking-[0.16em] text-accent uppercase">
            On court
          </p>
          <h2
            id="showcase-heading"
            className="mt-3 text-[clamp(2.05rem,4.4vw,3.5rem)] leading-[1.05] font-semibold tracking-[-0.04em] text-balance text-white"
          >
            Sessions worth showing up for
          </h2>
          <p className="mt-4 max-w-xl text-lg leading-relaxed text-pretty text-white">
            Drop-in games, coaching, and social sessions — a look at life on
            our courts.
          </p>
        </div>

        <ul className="mt-12 grid grid-cols-1 gap-5 sm:mt-14 sm:grid-cols-2 sm:gap-6 lg:grid-cols-3">
          {activities.map((activity) => (
            <li key={activity.title} className="fade-up min-w-0">
              <article className="group flex h-full flex-col overflow-hidden rounded-3xl bg-brand-ink shadow-[0_20px_44px_-28px_rgba(0,18,66,0.95)] ring-1 ring-white/15 transition duration-300 motion-safe:hover:-translate-y-1 motion-safe:hover:shadow-[0_28px_50px_-24px_rgba(0,18,66,0.95)]">
                <div className="relative aspect-[4/3] overflow-hidden">
                  <Image
                    src={activity.src}
                    alt={activity.alt}
                    fill
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                    className={`object-cover transition duration-500 ease-out motion-safe:group-hover:scale-105 ${activity.position}`}
                  />
                  <span
                    aria-hidden="true"
                    className="absolute inset-x-0 top-0 h-1 origin-left scale-x-0 bg-accent transition duration-300 motion-safe:group-hover:scale-x-100"
                  />
                </div>
                <div className="flex flex-1 flex-col p-5">
                  <h3 className="text-lg font-semibold tracking-tight text-white">
                    {activity.title}
                  </h3>
                  <p className="mt-1.5 text-sm leading-relaxed text-white">
                    {activity.caption}
                  </p>
                </div>
              </article>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
