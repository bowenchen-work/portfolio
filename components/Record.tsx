import type { Project, Status } from "@/content/site";

const statusStyle: Record<Status, string> = {
  live: "text-signal border-signal/35",
  building: "text-ink-mid border-rule-strong",
  archived: "text-ink-faint border-rule",
};

function StatusChip({ status }: { status: Status }) {
  return (
    <span
      className={`data shrink-0 border px-2 py-[3px] leading-none ${statusStyle[status]}`}
    >
      {status}
    </span>
  );
}

function Field({ label, children }: { label: string; children: React.ReactNode }) {
  return (
    <div className="grid grid-cols-1 gap-1 py-4 sm:grid-cols-[8.5rem_1fr] sm:gap-6">
      <dt className="data pt-[5px]">{label}</dt>
      <dd className="max-w-[62ch] text-[0.9375rem] leading-[1.7] text-ink-mid">
        {children}
      </dd>
    </div>
  );
}

export default function Record({ project }: { project: Project }) {
  return (
    <article className="border-t border-rule py-8 first:border-t-0 sm:py-10">
      <header className="mb-2 flex flex-wrap items-baseline gap-x-4 gap-y-2">
        <span className="data tabular-nums">{project.date}</span>
        <h3 className="text-[1.375rem] font-medium tracking-[-0.01em] text-ink">
          {project.title}
        </h3>
        <StatusChip status={project.status} />
      </header>

      <p className="mb-4 max-w-[62ch] text-[0.9375rem] text-ink-mid sm:mb-6">
        {project.oneLine}
      </p>

      <dl className="divide-y divide-rule border-y border-rule">
        <Field label="Problem">{project.problem}</Field>
        <Field label="Approach">{project.approach}</Field>
        <Field label="Decision">
          <span className="block font-medium text-ink">
            {project.decision.title}
          </span>
          <span className="mt-1 block">{project.decision.body}</span>
        </Field>
        <Field label="Stack">
          <ul className="flex flex-wrap gap-x-3 gap-y-1">
            {project.stack.map((s) => (
              <li
                key={s}
                className="font-[family-name:var(--font-mono)] text-[0.75rem] text-ink-mid"
              >
                {s}
              </li>
            ))}
          </ul>
        </Field>
        {project.links.length > 0 && (
          <Field label="Links">
            <ul className="flex flex-wrap gap-x-5 gap-y-1">
              {project.links.map((l) => (
                <li key={l.href}>
                  <a
                    href={l.href}
                    target="_blank"
                    rel="noreferrer"
                    className="text-ink underline decoration-rule-strong underline-offset-[5px] transition-colors hover:decoration-signal"
                  >
                    {l.label}
                  </a>
                </li>
              ))}
            </ul>
          </Field>
        )}
      </dl>
    </article>
  );
}
