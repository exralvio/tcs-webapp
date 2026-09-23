import type { Metadata } from "next";
import Link from "next/link";
import { Footer } from "@/components/Footer";
import { MemberCard } from "@/components/MemberCard";
import { MemberPagination } from "@/components/MemberPagination";
import { MemberSearch } from "@/components/MembersNameSearch";
import { SiteHeader } from "@/components/SiteHeader";
import { getMemberPage, membersHref } from "@/lib/members";

export const metadata: Metadata = {
  title: "Members — TheCourtSociety",
  description:
    "Meet TheCourtSociety members. Browse the network and find new opportunities.",
};

type MembersPageProps = {
  searchParams: Promise<{ page?: string; sort?: string; q?: string }>;
};

export default async function MembersPage({ searchParams }: MembersPageProps) {
  const params = await searchParams;
  const sort = params.sort === "za" ? "za" : "az";
  const query = params.q?.trim() ?? "";
  const requestedPage = Number(params.page);
  const pageNumber = Number.isFinite(requestedPage) ? requestedPage : 1;
  const { members, page, totalPages, total } = getMemberPage(sort, pageNumber, query);

  return (
    <>
      <SiteHeader current="members" />
      <main id="main" className="bg-brand-dark">
        <div className="mx-auto w-full max-w-6xl px-5 py-16 sm:px-8 sm:py-20">
          <div className="flex flex-col gap-8 sm:flex-row sm:items-end sm:justify-between">
            <div className="max-w-2xl">
              <p className="text-sm font-semibold tracking-[0.16em] text-accent uppercase">
                The network
              </p>
              <h1 className="mt-3 text-[clamp(2.05rem,4.4vw,3.5rem)] leading-[1.05] font-semibold tracking-[-0.04em] text-balance text-white">
                Members
              </h1>
              <p className="mt-4 max-w-xl text-lg leading-relaxed text-pretty text-white">
                Meet the people in TheCourtSociety. Play together, start a
                conversation, and find a new opportunity.
              </p>
            </div>
            <div className="flex flex-col gap-2">
              <p id="sort-label" className="text-sm font-semibold text-white">
                Sort by name
              </p>
              <div
                role="group"
                aria-labelledby="sort-label"
                className="inline-flex rounded-full bg-brand-ink p-1 ring-1 ring-white/20"
              >
                <Link
                  href={membersHref(1, "az", query)}
                  scroll={false}
                  aria-current={sort === "az" ? "true" : undefined}
                  className={`rounded-full px-4 py-2 text-sm font-semibold transition duration-200 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent ${
                    sort === "az"
                      ? "bg-accent text-brand"
                      : "text-white hover:text-accent"
                  }`}
                >
                  A–Z
                </Link>
                <Link
                  href={membersHref(1, "za", query)}
                  scroll={false}
                  aria-current={sort === "za" ? "true" : undefined}
                  className={`rounded-full px-4 py-2 text-sm font-semibold transition duration-200 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent ${
                    sort === "za"
                      ? "bg-accent text-brand"
                      : "text-white hover:text-accent"
                  }`}
                >
                  Z–A
                </Link>
              </div>
            </div>
          </div>

          <MemberSearch key={query} query={query} sort={sort} />

          {members.length === 0 ? (
            <p className="mt-12 rounded-3xl bg-brand-ink px-6 py-10 text-center text-lg text-white ring-1 ring-white/15">
              No members match {query}.
            </p>
          ) : (
            <ul className="mt-12 grid grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-1">
              {members.map((member) => (
                <li key={member.id}>
                  <MemberCard member={member} />
                </li>
              ))}
            </ul>
          )}

          <MemberPagination
            page={page}
            totalPages={totalPages}
            sort={sort}
            query={query}
            showing={members.length}
            total={total}
          />
        </div>
      </main>
      <Footer />
    </>
  );
}
