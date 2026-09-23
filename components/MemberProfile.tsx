"use client";

import Image from "next/image";
import { useId, useRef, type MouseEvent } from "react";
import type { Member } from "@/lib/members";

export function MemberProfileButton({
  member,
  memberSince,
  lastPlayed,
}: {
  member: Member;
  memberSince: string;
  lastPlayed: string;
}) {
  const dialogRef = useRef<HTMLDialogElement>(null);
  const titleId = useId();

  function openProfile() {
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

  return (
    <div className="lg:w-56 lg:shrink-0">
      <h2>
        <button
          type="button"
          onClick={openProfile}
          className="group flex w-full cursor-pointer items-center gap-4 rounded-2xl text-left focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-accent lg:flex-col lg:gap-4 lg:text-center"
        >
          <span
            aria-hidden="true"
            className="relative h-16 w-16 shrink-0 overflow-hidden rounded-full ring-accent transition duration-200 group-hover:ring-4 lg:h-36 lg:w-36"
          >
            <Image
              src={member.photo}
              alt=""
              fill
              sizes="(min-width: 1024px) 144px, 64px"
              className="object-cover"
            />
          </span>
          <span className="min-w-0 lg:w-full">
            <span className="block text-sm font-semibold tracking-wide text-accent">
              <span className="sr-only">Member ID </span>
              {member.id}
            </span>
            <span className="mt-0.5 block text-xl font-semibold tracking-tight text-balance text-white transition duration-200 group-hover:text-accent lg:text-2xl">
              {member.fullName}
            </span>
          </span>
        </button>
      </h2>

      <dialog
        ref={dialogRef}
        aria-labelledby={titleId}
        onClick={closeOnBackdrop}
        className="member-dialog rounded-3xl border-0 bg-accent p-6 text-brand shadow-[0_28px_80px_-28px_rgba(0,18,66,0.85)] backdrop:bg-brand-ink/75 sm:p-8"
      >
        <button
          type="button"
          onClick={() => dialogRef.current?.close()}
          className="absolute top-6 right-6 z-10 grid h-10 w-10 place-items-center rounded-full bg-brand text-accent transition duration-200 hover:bg-brand-deep focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand sm:top-8 sm:right-8"
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
        <div className="grid grid-cols-[8.5rem_minmax(0,1fr)] items-center gap-5 sm:grid-cols-[11rem_minmax(0,1fr)] sm:gap-8">
          <span className="relative col-start-1 row-start-1 h-32 w-32 justify-self-center overflow-hidden rounded-full ring-4 ring-brand sm:h-44 sm:w-44">
            <Image
              src={member.photo}
              alt=""
              fill
              sizes="(min-width: 640px) 176px, 128px"
              className="object-cover"
            />
          </span>
          <div className="col-start-2 row-start-1 min-w-0 pr-12">
            <p className="text-sm font-semibold tracking-wide text-brand">
              <span className="sr-only">Member ID </span>
              {member.id}
            </p>
            <h2
              id={titleId}
              className="mt-1 text-2xl font-semibold tracking-tight text-balance text-brand-ink sm:text-3xl"
            >
              {member.fullName}
            </h2>
            <dl className="mt-4 space-y-3">
              <div>
                <dt className="text-sm font-semibold text-brand">Age</dt>
                <dd className="text-lg font-semibold text-brand-ink">{member.age}</dd>
              </div>
              <div>
                <dt className="text-sm font-semibold text-brand">Bio</dt>
                <dd className="text-base leading-relaxed font-medium text-brand-ink">
                  {member.bio}
                </dd>
              </div>
            </dl>
          </div>
        </div>

        <div className="mt-8 grid gap-8 sm:grid-cols-2">
          <section>
            <h3 className="text-sm font-semibold tracking-[0.14em] text-brand uppercase">
              Match Stats
            </h3>
            <dl className="mt-4 space-y-4">
              <div>
                <dt className="text-sm font-semibold text-brand">Level</dt>
                <dd className="text-lg font-semibold text-brand-ink">{member.level}</dd>
              </div>
              <div>
                <dt className="text-sm font-semibold text-brand">Member since</dt>
                <dd className="text-lg font-semibold text-brand-ink">{memberSince}</dd>
              </div>
              <div>
                <dt className="text-sm font-semibold text-brand">Last Played</dt>
                <dd className="text-lg font-semibold text-brand-ink">{lastPlayed}</dd>
              </div>
              <div>
                <dt className="text-sm font-semibold text-brand">Total Matches</dt>
                <dd className="text-lg font-semibold text-brand-ink">{member.totalMatches}</dd>
              </div>
            </dl>
          </section>

          <section>
            <h3 className="text-sm font-semibold tracking-[0.14em] text-brand uppercase">
              Professional Profile
            </h3>
            <dl className="mt-4 space-y-4">
              <div>
                <dt className="text-sm font-semibold text-brand">Occupation</dt>
                <dd className="text-lg font-semibold text-brand-ink">{member.occupation}</dd>
              </div>
              <div>
                <dt className="text-sm font-semibold text-brand">Industry</dt>
                <dd className="text-lg font-semibold text-brand-ink">{member.industry}</dd>
              </div>
              <div>
                <dt className="text-sm font-semibold text-brand">Current goals</dt>
                <dd className="text-base leading-relaxed font-medium text-brand-ink">
                  {member.currentGoals}
                </dd>
              </div>
              <div>
                <dt className="text-sm font-semibold text-brand">Skills</dt>
                <dd>
                  <ul className="mt-2 flex flex-wrap gap-2">
                    {member.skills.map((skill) => (
                      <li
                        key={skill}
                        className="rounded-full bg-brand px-3 py-1 text-sm font-semibold text-accent"
                      >
                        {skill}
                      </li>
                    ))}
                  </ul>
                </dd>
              </div>
            </dl>
          </section>
        </div>
      </dialog>
    </div>
  );
}
