import { formatLastPlay, formatMemberSince, type Member } from "@/lib/members";

const tones = [
  "bg-accent text-brand",
  "bg-accent-soft text-brand-ink",
  "bg-brand text-accent",
  "bg-brand-deep text-white",
];

function initials(fullName: string) {
  return fullName
    .split(" ")
    .map((part) => part[0])
    .slice(0, 2)
    .join("");
}

export function MemberCard({ member }: { member: Member }) {
  const tone =
    member.id.split("").reduce((sum, character) => sum + character.charCodeAt(0), 0) %
    tones.length;

  return (
    <article className="flex h-full flex-col rounded-3xl bg-brand-ink p-5 shadow-[0_20px_44px_-28px_rgba(0,18,66,0.95)] ring-1 ring-white/15 sm:p-6 lg:flex-row lg:items-center lg:gap-10 lg:p-8">
      <div className="flex items-center gap-4 lg:w-56 lg:shrink-0 lg:flex-col lg:gap-4 lg:text-center">
        <div
          role="img"
          aria-label={`${member.fullName} profile picture`}
          className={`grid h-16 w-16 shrink-0 place-items-center rounded-full text-lg font-semibold tracking-tight lg:h-36 lg:w-36 lg:text-3xl ${tones[tone]}`}
        >
          {initials(member.fullName)}
        </div>
        <div className="min-w-0 lg:w-full">
          <p className="text-sm font-semibold tracking-wide text-accent">
            <span className="sr-only">Member ID </span>
            {member.id}
          </p>
          <h2 className="text-xl font-semibold tracking-tight text-balance text-white lg:text-2xl">
            {member.fullName}
          </h2>
        </div>
      </div>
      <dl className="mt-5 space-y-3 border-white/15 text-sm leading-relaxed lg:mt-0 lg:flex-1 lg:border-l lg:py-2 lg:pl-10">
        <div>
          <dt className="font-semibold text-accent">Occupation</dt>
          <dd className="text-white">{member.occupation}</dd>
        </div>
        <div>
          <dt className="font-semibold text-accent">Bio</dt>
          <dd className="text-white">{member.bio}</dd>
        </div>
        <div>
          <dt className="font-semibold text-accent">Member since</dt>
          <dd className="text-white">{formatMemberSince(member.memberSince)}</dd>
        </div>
        <div>
          <dt className="font-semibold text-accent">Last play</dt>
          <dd className="text-white">{formatLastPlay(member.lastPlay)}</dd>
        </div>
      </dl>
    </article>
  );
}
