import Image from "next/image";
import Link from "next/link";
import {
  formatActivityDate,
  photoCountLabel,
  type Activity,
} from "@/lib/activities";

export function ActivityCard({ activity }: { activity: Activity }) {
  const main = activity.images[0];

  return (
    <article className="h-full">
      <Link
        href={`/activities/${activity.slug}`}
        className="group flex h-full flex-col overflow-hidden rounded-3xl bg-brand-ink shadow-[0_20px_44px_-28px_rgba(0,18,66,0.95)] ring-1 ring-white/15 transition duration-300 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-accent motion-safe:hover:-translate-y-1"
      >
        <div className="relative aspect-[4/3] overflow-hidden">
          <Image
            src={main.src}
            alt={main.alt}
            fill
            sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
            className="object-cover transition duration-500 ease-out motion-safe:group-hover:scale-105"
          />
          <span className="absolute right-3 bottom-3 rounded-full bg-brand-ink/85 px-3 py-1 text-sm font-semibold text-white ring-1 ring-white/20">
            {photoCountLabel(activity.images.length)}
          </span>
        </div>
        <div className="flex flex-1 flex-col p-5">
          <h2 className="text-lg font-semibold tracking-tight text-white transition duration-200 group-hover:text-accent">
            {activity.label}
          </h2>
          <time dateTime={activity.date} className="mt-1.5 text-sm text-accent">
            {formatActivityDate(activity.date)}
          </time>
        </div>
      </Link>
    </article>
  );
}
