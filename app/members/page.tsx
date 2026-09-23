import type { Metadata } from "next";
import { cookies } from "next/headers";
import { Footer } from "@/components/Footer";
import { MembersDirectory } from "@/components/MembersDirectory";
import { SiteHeader } from "@/components/SiteHeader";
import { MEMBER_COOKIE, members } from "@/lib/members";

export const metadata: Metadata = {
  title: "Members — TheCourtSociety",
  description:
    "Meet TheCourtSociety members. Browse the network and find new opportunities.",
};

type MembersPageProps = {
  searchParams: Promise<{ sort?: string; q?: string }>;
};

export default async function MembersPage({ searchParams }: MembersPageProps) {
  const params = await searchParams;
  const cookieStore = await cookies();
  const savedId = cookieStore.get(MEMBER_COOKIE)?.value ?? "";
  const memberId = members.some((member) => member.id === savedId) ? savedId : "";
  const sort = params.sort === "za" ? "za" : "az";
  const query = params.q?.trim() ?? "";

  return (
    <>
      <SiteHeader current="members" />
      <main id="main" className="bg-brand-dark [overflow-anchor:none]">
        <div className="mx-auto w-full max-w-6xl px-5 py-16 sm:px-8 sm:py-20">
          <MembersDirectory sort={sort} query={query} memberId={memberId} />
        </div>
      </main>
      <Footer />
    </>
  );
}
