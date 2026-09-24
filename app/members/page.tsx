import type { Metadata } from "next";
import { Suspense } from "react";
import { Footer } from "@/components/Footer";
import { MembersDirectory } from "@/components/MembersDirectory";
import { SiteHeader } from "@/components/SiteHeader";

export const metadata: Metadata = {
  title: "Members — TheCourtSociety",
  description:
    "Meet TheCourtSociety members. Browse the network and find new opportunities.",
};

export default function MembersPage() {
  return (
    <>
      <SiteHeader current="members" />
      <main id="main" className="bg-brand-dark [overflow-anchor:none]">
        <div className="mx-auto w-full max-w-6xl px-5 py-16 sm:px-8 sm:py-20">
          <Suspense>
            <MembersDirectory />
          </Suspense>
        </div>
      </main>
      <Footer />
    </>
  );
}
