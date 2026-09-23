import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { Footer } from "@/components/Footer";
import { SiteHeader } from "@/components/SiteHeader";
import {
  activities,
  formatActivityDate,
  getActivity,
  photoCountLabel,
} from "@/lib/activities";

type ActivityPageProps = {
  params: Promise<{ slug: string }>;
};

export function generateStaticParams() {
  return activities.map((activity) => ({ slug: activity.slug }));
}

export async function generateMetadata({
  params,
}: ActivityPageProps): Promise<Metadata> {
  const { slug } = await params;
  const activity = getActivity(slug);
  if (!activity) return { title: "Activity — TheCourtSociety" };

  return {
    title: `${activity.label} — TheCourtSociety`,
    description: `${activity.label} on ${formatActivityDate(activity.date)}. ${photoCountLabel(activity.images.length)}.`,
  };
}

export default async function ActivityPage({ params }: ActivityPageProps) {
  const { slug } = await params;
  const activity = getActivity(slug);
  if (!activity) notFound();

  const main = activity.images[0];

  return (
    <>
      <SiteHeader current="activities" />
      <main id="main" className="bg-brand-dark">
        <div className="mx-auto w-full max-w-6xl px-5 py-16 sm:px-8 sm:py-20">
          <Link
            href="/activities"
            className="inline-flex items-center text-sm font-semibold text-accent transition duration-200 hover:text-white focus-visible:rounded-sm focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-accent"
          >
            Activities
          </Link>
          <div className="mt-6 flex flex-col gap-3 sm:flex-row sm:items-end sm:justify-between">
            <div>
              <h1 className="text-[clamp(2.05rem,4.4vw,3.5rem)] leading-[1.05] font-semibold tracking-[-0.04em] text-balance text-white">
                {activity.label}
              </h1>
              <time
                dateTime={activity.date}
                className="mt-3 block text-lg text-accent"
              >
                {formatActivityDate(activity.date)}
              </time>
            </div>
            <p className="text-sm font-semibold text-white">
              {photoCountLabel(activity.images.length)}
            </p>
          </div>

          <div className="relative mt-8 aspect-[16/9] overflow-hidden rounded-3xl bg-brand-ink ring-1 ring-white/15">
            <Image
              src={main.src}
              alt={main.alt}
              fill
              priority
              sizes="(max-width: 1152px) 100vw, 1152px"
              className="object-cover"
            />
          </div>

          <ul className="mt-5 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {activity.images.slice(1).map((image) => (
              <li key={image.src}>
                <div className="relative aspect-[4/3] overflow-hidden rounded-3xl bg-brand-ink ring-1 ring-white/15">
                  <Image
                    src={image.src}
                    alt={image.alt}
                    fill
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                    className="object-cover"
                  />
                </div>
              </li>
            ))}
          </ul>
        </div>
      </main>
      <Footer />
    </>
  );
}
