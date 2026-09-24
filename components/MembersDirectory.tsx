"use client";

import Image from "next/image";
import Link from "next/link";
import { useSearchParams } from "next/navigation";
import { useEffect, useId, useRef, useState, type FormEvent, type MouseEvent } from "react";
import { MemberCard } from "@/components/MemberCard";
import { MemberSearch } from "@/components/MembersNameSearch";
import {
  MEMBER_COOKIE,
  PREVIEW_COUNT,
  findMember,
  formatBirthDate,
  formatLastPlay,
  formatMemberSince,
  getMembers,
  members,
  membersHref,
  type Member,
} from "@/lib/members";

function saveMemberCookie(id: string) {
  document.cookie = `${MEMBER_COOKIE}=${encodeURIComponent(id)}; Path=/; Max-Age=31536000; SameSite=Lax`;
}

function clearMemberCookie() {
  document.cookie = `${MEMBER_COOKIE}=; Path=/; Max-Age=0; SameSite=Lax`;
}

function MemberSelf({
  member,
  focusOnMount,
  onLogout,
}: {
  member: Member;
  focusOnMount: boolean;
  onLogout: () => void;
}) {
  const detailsId = useId();
  const panelRef = useRef<HTMLElement>(null);
  const [open, setOpen] = useState(true);

  useEffect(() => {
    if (focusOnMount) panelRef.current?.focus();
  }, [focusOnMount]);

  return (
    <section
      ref={panelRef}
      tabIndex={-1}
      aria-label="Your information"
      className="rounded-3xl bg-accent p-5 text-brand outline-none sm:p-6"
    >
      <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
        <div className="flex items-center gap-4">
          <span className="relative h-16 w-16 shrink-0 overflow-hidden rounded-full ring-4 ring-brand">
            <Image
              src={member.photo}
              alt=""
              fill
              sizes="64px"
              className="object-cover"
            />
          </span>
          <div className="min-w-0">
            <p className="text-sm font-semibold tracking-[0.14em] uppercase">You</p>
            <p className="text-2xl font-semibold tracking-tight text-balance text-brand-ink">
              {member.fullName}
            </p>
            <p className="text-sm font-semibold">
              <span className="sr-only">Member ID </span>
              {member.id}
            </p>
          </div>
        </div>
        <div className="flex flex-wrap gap-2">
          <button
            type="button"
            aria-expanded={open}
            aria-controls={detailsId}
            onClick={() => setOpen((value) => !value)}
            className="inline-flex h-11 shrink-0 items-center justify-center rounded-full bg-brand px-5 text-sm font-semibold text-accent transition duration-200 hover:bg-brand-deep focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand"
          >
            {open ? "Hide information" : "Show information"}
          </button>
          <button
            type="button"
            onClick={onLogout}
            className="inline-flex h-11 shrink-0 items-center justify-center rounded-full px-5 text-sm font-semibold text-brand ring-1 ring-brand/30 transition duration-200 hover:bg-brand hover:text-accent focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand"
          >
            Log out
          </button>
        </div>
      </div>
      <dl
        id={detailsId}
        className={
          open
            ? "mt-6 grid gap-4 border-t border-brand/15 pt-6 sm:grid-cols-2"
            : "hidden"
        }
      >
        <div>
          <dt className="text-sm font-semibold">Birthdate</dt>
          <dd className="text-lg font-semibold text-brand-ink">
            {formatBirthDate(member.birthDate)}
          </dd>
        </div>
        <div>
          <dt className="text-sm font-semibold">Age</dt>
          <dd className="text-lg font-semibold text-brand-ink">{member.age}</dd>
        </div>
        <div>
          <dt className="text-sm font-semibold">Occupation</dt>
          <dd className="text-lg font-semibold text-brand-ink">{member.occupation}</dd>
        </div>
        <div>
          <dt className="text-sm font-semibold">Industry</dt>
          <dd className="text-lg font-semibold text-brand-ink">{member.industry}</dd>
        </div>
        <div>
          <dt className="text-sm font-semibold">Level</dt>
          <dd className="text-lg font-semibold text-brand-ink">{member.level}</dd>
        </div>
        <div>
          <dt className="text-sm font-semibold">Member since</dt>
          <dd className="text-lg font-semibold text-brand-ink">
            {formatMemberSince(member.memberSince)}
          </dd>
        </div>
        <div>
          <dt className="text-sm font-semibold">Last play</dt>
          <dd className="text-lg font-semibold text-brand-ink">
            {formatLastPlay(member.lastPlay)}
          </dd>
        </div>
        <div className="sm:col-span-2">
          <dt className="text-sm font-semibold">Bio</dt>
          <dd className="text-base leading-relaxed font-medium text-brand-ink">{member.bio}</dd>
        </div>
      </dl>
    </section>
  );
}

export function MembersDirectory() {
  const params = useSearchParams();
  const sort = params.get("sort") === "za" ? "za" : "az";
  const query = params.get("q")?.trim() ?? "";
  const dialogRef = useRef<HTMLDialogElement>(null);
  const titleId = useId();
  const [signedInId, setSignedInId] = useState("");
  const [focusSelf, setFocusSelf] = useState(false);
  const [error, setError] = useState("");

  useEffect(() => {
    const saved = document.cookie
      .split("; ")
      .find((row) => row.startsWith(`${MEMBER_COOKIE}=`))
      ?.split("=")[1];
    if (!saved) return;
    const id = decodeURIComponent(saved);
    if (members.some((member) => member.id === id)) setSignedInId(id);
  }, []);
  const signedIn = members.find((member) => member.id === signedInId) ?? null;
  const visible = signedIn
    ? getMembers(sort, query)
    : getMembers("az").slice(0, PREVIEW_COUNT);

  function logOut() {
    clearMemberCookie();
    setFocusSelf(false);
    setSignedInId("");
    window.scrollTo({ top: 0, behavior: "auto" });
  }

  function openJoin() {
    setError("");
    dialogRef.current?.showModal();
  }

  function closeOnBackdrop(event: MouseEvent<HTMLDialogElement>) {
    const dialog = event.currentTarget;
    const bounds = dialog.getBoundingClientRect();
    const inside =
      event.clientX >= bounds.left &&
      event.clientX <= bounds.right &&
      event.clientY >= bounds.top &&
      event.clientY <= bounds.bottom;
    if (!inside) dialog.close();
  }

  function onSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const form = event.currentTarget;
    const idInput = form.elements.namedItem("memberId");
    const birthInput = form.elements.namedItem("birthdate");
    if (!(idInput instanceof HTMLInputElement)) return;
    if (!(birthInput instanceof HTMLInputElement)) return;

    idInput.value = idInput.value.trim();
    if (!form.reportValidity()) return;

    const match = findMember(idInput.value, birthInput.value);
    if (!match) {
      setError("That member ID and birthdate don't match.");
      return;
    }

    saveMemberCookie(match.id);
    setFocusSelf(true);
    setSignedInId(match.id);
    setError("");
    dialogRef.current?.close();
    window.scrollTo({ top: 0, behavior: "auto" });
  }

  return (
    <>
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
        {signedIn ? (
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
                  sort === "az" ? "bg-accent text-brand" : "text-white hover:text-accent"
                }`}
              >
                A–Z
              </Link>
              <Link
                href={membersHref(1, "za", query)}
                scroll={false}
                aria-current={sort === "za" ? "true" : undefined}
                className={`rounded-full px-4 py-2 text-sm font-semibold transition duration-200 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent ${
                  sort === "za" ? "bg-accent text-brand" : "text-white hover:text-accent"
                }`}
              >
                Z–A
              </Link>
            </div>
          </div>
        ) : null}
      </div>

      {signedIn ? (
        <div className="mt-10">
          <MemberSelf member={signedIn} focusOnMount={focusSelf} onLogout={logOut} />
          <MemberSearch key={query} query={query} sort={sort} />
        </div>
      ) : null}

      {signedIn && visible.length === 0 ? (
        <p className="mt-12 rounded-3xl bg-brand-ink px-6 py-10 text-center text-lg text-white ring-1 ring-white/15">
          No members match {query}.
        </p>
      ) : (
        <ul className="mt-12 grid grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-1">
          {visible.map((member) => (
            <li key={member.id}>
              <MemberCard member={member} />
            </li>
          ))}
        </ul>
      )}

      {signedIn ? null : (
        <div className="mt-12 flex justify-center">
          <button
            type="button"
            onClick={openJoin}
            className="inline-flex h-12 items-center justify-center rounded-full bg-accent px-6 text-base font-semibold text-brand transition duration-200 hover:bg-accent-deep focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-white"
          >
            Join to access all members
          </button>
          <dialog
            ref={dialogRef}
            aria-labelledby={titleId}
            onClick={closeOnBackdrop}
            onClose={() => setError("")}
            className="join-dialog rounded-3xl border-0 bg-accent p-6 text-brand shadow-[0_28px_80px_-28px_rgba(0,18,66,0.85)] backdrop:bg-brand-ink/75 sm:p-8"
          >
            <button
              type="button"
              onClick={() => dialogRef.current?.close()}
              className="absolute top-6 right-6 z-10 grid h-10 w-10 place-items-center rounded-full bg-brand text-accent transition duration-200 hover:bg-brand-deep focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand"
            >
              <span className="sr-only">Close</span>
              <svg viewBox="0 0 20 20" className="h-5 w-5" aria-hidden="true">
                <path
                  d="M5 5l10 10M15 5L5 15"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.8"
                  strokeLinecap="round"
                />
              </svg>
            </button>
            <h2 id={titleId} className="pr-12 text-2xl font-semibold tracking-tight text-brand-ink">
              Join to access all members
            </h2>
            <p className="mt-2 text-base leading-relaxed">
              Enter your member ID and birthdate.
            </p>
            <form onSubmit={onSubmit} className="mt-6 space-y-5">
              <div>
                <label htmlFor="member-id" className="mb-2 block text-sm font-semibold">
                  Member ID
                </label>
                <input
                  id="member-id"
                  name="memberId"
                  type="text"
                  autoComplete="off"
                  autoCapitalize="characters"
                  spellCheck={false}
                  required
                  maxLength={20}
                  placeholder="TCS-1042"
                  className="h-12 w-full rounded-xl border border-white/35 bg-brand-ink px-4 text-base text-white transition duration-200 outline-none placeholder:text-accent-soft focus-visible:border-accent focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent"
                />
              </div>
              <div>
                <label htmlFor="birthdate" className="mb-2 block text-sm font-semibold">
                  Birthdate
                </label>
                <input
                  id="birthdate"
                  name="birthdate"
                  type="date"
                  autoComplete="bday"
                  required
                  className="h-12 w-full rounded-xl border border-white/35 bg-brand-ink px-4 text-base text-white transition duration-200 outline-none [color-scheme:dark] focus-visible:border-accent focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent"
                />
              </div>
              {error ? (
                <p role="alert" className="text-sm font-semibold text-brand-ink">
                  {error}
                </p>
              ) : null}
              <button
                type="submit"
                className="inline-flex h-12 w-full items-center justify-center rounded-full bg-brand px-6 text-base font-semibold text-accent transition duration-200 hover:bg-brand-deep focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent"
              >
                Continue
              </button>
            </form>
          </dialog>
        </div>
      )}
    </>
  );
}
