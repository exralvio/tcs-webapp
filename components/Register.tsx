import { RegisterForm } from "@/components/RegisterForm";

const points = [
  "Network with members across the community",
  "Find opportunities through the people you play with",
  "Meet someone new at the next session",
];

export function Register() {
  return (
    <section
      id="register"
      aria-labelledby="register-heading"
      className="scroll-mt-4 bg-accent text-brand-ink"
    >
      <div className="mx-auto grid w-full max-w-6xl items-center gap-12 px-5 py-20 sm:px-8 sm:py-24 lg:grid-cols-2 lg:gap-20 lg:py-32">
        <div className="fade-up">
          <p className="text-sm font-semibold tracking-[0.16em] text-brand uppercase">
            Membership
          </p>
          <h2
            id="register-heading"
            className="mt-3 text-[clamp(2.05rem,4.4vw,3.5rem)] leading-[1.05] font-semibold tracking-[-0.04em] text-balance"
          >
            Register as a member
          </h2>
          <p className="mt-4 max-w-md text-lg leading-relaxed text-pretty">
            Join the member network. Leave your name and email, and we&apos;ll
            connect you with the next session and the people in it.
          </p>
          <ul className="mt-8 space-y-3">
            {points.map((point) => (
              <li key={point} className="flex items-start gap-3 text-base">
                <span
                  aria-hidden="true"
                  className="mt-2 h-2.5 w-2.5 shrink-0 rounded-full bg-brand"
                />
                <span>{point}</span>
              </li>
            ))}
          </ul>
        </div>
        <div className="fade-up">
          <RegisterForm />
        </div>
      </div>
    </section>
  );
}
