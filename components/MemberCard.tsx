import { MemberProfileButton } from "@/components/MemberProfile";
import { formatLastPlay, formatMemberSince, type Member } from "@/lib/members";

export function MemberCard({ member }: { member: Member }) {
  return (
    <article className="flex h-full flex-col rounded-3xl bg-brand-ink p-5 shadow-[0_20px_44px_-28px_rgba(0,18,66,0.95)] ring-1 ring-white/15 sm:p-6 lg:flex-row lg:items-center lg:gap-10 lg:p-8">
      <MemberProfileButton
        member={member}
        memberSince={formatMemberSince(member.memberSince)}
        lastPlayed={formatLastPlay(member.lastPlay)}
      />
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
