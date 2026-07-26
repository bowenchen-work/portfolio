import { profile, projects, experience } from "@/content/site";
import Record from "@/components/Record";

function SectionHeading({ children }: { children: React.ReactNode }) {
  return (
    <h2 className="data mb-6 border-b border-rule-strong pb-2 !text-ink">
      {children}
    </h2>
  );
}

export default function Home() {
  return (
    <>
      <div className="sticky top-0 z-40 border-b border-rule bg-paper/90 backdrop-blur-sm">
        <div className="mx-auto flex max-w-[46rem] items-center justify-between px-6 py-3">
          <span className="data !text-ink">{profile.name}</span>
          <span className="data flex items-center gap-2">
            <span className="inline-block h-[6px] w-[6px] rounded-full bg-signal" />
            {profile.status}
          </span>
        </div>
      </div>

      <main id="main" className="mx-auto max-w-[46rem] px-6 pb-24">
        <header className="pt-16 sm:pt-24">
          <h1 className="font-[family-name:var(--font-display)] text-[clamp(3rem,10vw,4.75rem)] leading-[0.95] tracking-[-0.02em]">
            {profile.name}
          </h1>
          <p className="mt-4 text-[1.0625rem] text-ink">{profile.role}</p>
          <p className="mt-5 max-w-[58ch] text-[0.9375rem] leading-[1.75] text-ink-mid">
            {profile.summary}
          </p>

          <ul className="mt-8 flex flex-wrap items-center gap-x-6 gap-y-2 border-t border-rule pt-5">
            <li className="data">{profile.location}</li>
            {[
              { label: "Email", href: `mailto:${profile.email}` },
              { label: "GitHub", href: profile.github },
              { label: "LinkedIn", href: profile.linkedin },
              { label: "CV", href: profile.cvPath },
            ].map((l) => (
              <li key={l.label}>
                <a
                  href={l.href}
                  className="data !text-ink underline decoration-rule-strong underline-offset-[5px] transition-colors hover:decoration-signal"
                >
                  {l.label}
                </a>
              </li>
            ))}
          </ul>
        </header>

        <section className="pt-16 sm:pt-20">
          <SectionHeading>Work</SectionHeading>
          {projects.length > 0 ? (
            projects.map((p) => <Record key={p.id} project={p} />)
          ) : (
            <p className="text-[0.9375rem] text-ink-mid">
              Nothing published yet. First entry lands soon.
            </p>
          )}
        </section>

        {experience.length > 0 && (
          <section className="pt-16 sm:pt-20">
            <SectionHeading>Experience</SectionHeading>
            <ul className="divide-y divide-rule border-y border-rule">
              {experience.map((r) => (
                <li
                  key={`${r.org}-${r.start}`}
                  className="grid grid-cols-1 gap-1 py-5 sm:grid-cols-[8.5rem_1fr] sm:gap-6"
                >
                  <span className="data pt-[5px] tabular-nums">
                    {r.start} — {r.end}
                  </span>
                  <div className="max-w-[62ch]">
                    <p className="text-[0.9375rem] font-medium text-ink">
                      {r.title}, {r.org}
                    </p>
                    <p className="mt-1 text-[0.9375rem] leading-[1.7] text-ink-mid">
                      {r.body}
                    </p>
                  </div>
                </li>
              ))}
            </ul>
          </section>
        )}

        <section className="pt-16 sm:pt-20">
          <SectionHeading>Contact</SectionHeading>
          <p className="max-w-[58ch] text-[0.9375rem] leading-[1.75] text-ink-mid">
            {profile.contactNote}
          </p>
          <a
            href={`mailto:${profile.email}`}
            className="mt-4 inline-block text-[1.75rem] text-ink underline decoration-rule-strong underline-offset-[7px] transition-colors hover:decoration-signal"
          >
            {profile.email}
          </a>
        </section>

        <footer className="mt-20 border-t border-rule pt-5">
          <p className="data">
            © {new Date().getFullYear()} {profile.name} — built from scratch,
            no template
          </p>
        </footer>
      </main>
    </>
  );
}
