import type { Metadata } from "next";
import { ActivityPost } from "@/components/ActivityPost";
import { Footer } from "@/components/Footer";
import { SiteHeader } from "@/components/SiteHeader";
import { activities } from "@/lib/activities";

export const metadata: Metadata = {
  title: "Activities — TheCourtSociety",
  description:
    "See TheCourtSociety activities. Open a session to view every photo.",
};

export default function ActivitiesPage() {
  return (
    <>
      <SiteHeader current="activities" />
      <main id="main" className="bg-brand-dark">
        <div className="mx-auto w-full max-w-6xl px-5 py-16 sm:px-8 sm:py-20">
          <div className="max-w-2xl">
            <p className="text-sm font-semibold tracking-[0.16em] text-accent uppercase">
              On court
            </p>
            <h1 className="mt-3 text-[clamp(2.05rem,4.4vw,3.5rem)] leading-[1.05] font-semibold tracking-[-0.04em] text-balance text-white">
              Activities
            </h1>
            <p className="mt-4 max-w-xl text-lg leading-relaxed text-pretty text-white">
              Sessions from the court. Open an activity to see every photo.
            </p>
          </div>
          <ul className="mt-12 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {activities.map((activity) => (
              <li key={activity.slug}>
                <ActivityPost activity={activity} />
              </li>
            ))}
          </ul>
        </div>
      </main>
      <Footer />
    </>
  );
}
