"use client";

import Image from "next/image";
import { useId, useRef, useState, type MouseEvent } from "react";
import {
  formatActivityDate,
  photoCountLabel,
  type Activity,
} from "@/lib/activities";

export function ActivityPost({ activity }: { activity: Activity }) {
  const dialogRef = useRef<HTMLDialogElement>(null);
  const titleId = useId();
  const [selected, setSelected] = useState(0);
  const main = activity.images[0];
  const current = activity.images[selected] ?? main;

  function openGallery() {
    setSelected(0);
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
    <article className="h-full">
      <h2 className="h-full">
        <button
          type="button"
          onClick={openGallery}
          className="group flex h-full w-full cursor-pointer flex-col overflow-hidden rounded-3xl bg-brand-ink text-left shadow-[0_20px_44px_-28px_rgba(0,18,66,0.95)] ring-1 ring-white/15 transition duration-300 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-accent motion-safe:hover:-translate-y-1"
        >
          <span className="relative aspect-[4/3] overflow-hidden">
            <Image
              src={main.src}
              alt=""
              fill
              sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
              className="object-cover transition duration-500 ease-out motion-safe:group-hover:scale-105"
            />
            <span className="absolute right-3 bottom-3 rounded-full bg-brand-ink/85 px-3 py-1 text-sm font-semibold text-white ring-1 ring-white/20">
              {photoCountLabel(activity.images.length)}
            </span>
          </span>
          <span className="flex flex-1 flex-col p-5">
            <span className="text-lg font-semibold tracking-tight text-white transition duration-200 group-hover:text-accent">
              {activity.label}
            </span>
            <time dateTime={activity.date} className="mt-1.5 text-sm text-accent">
              {formatActivityDate(activity.date)}
            </time>
          </span>
        </button>
      </h2>

      <dialog
        ref={dialogRef}
        aria-labelledby={titleId}
        onClick={closeOnBackdrop}
        className="activity-dialog rounded-3xl border-0 bg-brand-ink p-5 text-white shadow-[0_28px_80px_-28px_rgba(0,18,66,0.85)] backdrop:bg-brand-ink/75 sm:p-8"
      >
        <button
          type="button"
          onClick={() => dialogRef.current?.close()}
          className="absolute top-5 right-5 z-10 grid h-10 w-10 place-items-center rounded-full bg-accent text-brand transition duration-200 hover:bg-accent-deep focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent sm:top-8 sm:right-8"
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
        <div className="pr-12">
          <h2
            id={titleId}
            className="text-2xl font-semibold tracking-tight text-balance text-white sm:text-3xl"
          >
            {activity.label}
          </h2>
          <div className="mt-2 flex flex-wrap items-center gap-x-4 gap-y-1">
            <time dateTime={activity.date} className="text-sm font-semibold text-accent">
              {formatActivityDate(activity.date)}
            </time>
            <p className="text-sm text-white">{photoCountLabel(activity.images.length)}</p>
          </div>
        </div>
        <div className="mt-6">
          <div className="relative aspect-[16/9] overflow-hidden rounded-2xl bg-brand-dark ring-1 ring-white/15">
            <Image
              src={current.src}
              alt={current.alt}
              fill
              sizes="(max-width: 1088px) 100vw, 1088px"
              className="object-cover"
            />
          </div>
          <ul className="mt-3 flex gap-3 overflow-x-auto p-1">
            {activity.images.map((image, index) => {
              const active = index === selected;
              return (
                <li key={`${image.src}-${index}`} className="shrink-0">
                  <button
                    type="button"
                    aria-pressed={active}
                    aria-label={`Photo ${index + 1} of ${activity.images.length}`}
                    onClick={() => setSelected(index)}
                    className={`relative h-16 w-24 overflow-hidden rounded-xl ring-2 transition duration-200 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent ${
                      active ? "ring-accent" : "ring-white/25 hover:ring-white/60"
                    }`}
                  >
                    <Image
                      src={image.src}
                      alt=""
                      fill
                      sizes="96px"
                      className="object-cover"
                    />
                  </button>
                </li>
              );
            })}
          </ul>
        </div>
      </dialog>
    </article>
  );
}
