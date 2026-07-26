// ─────────────────────────────────────────────────────────────
// This is the only file you need to edit to update the site.
// Rules that keep this portfolio honest:
//   1. Never add an entry you cannot talk about for 10 minutes.
//   2. "building" status is allowed ONLY with a real name and a
//      real one-line description. No vague "coming soon" ghosts.
//   3. Every project needs a `decision` — a real tradeoff you
//      made and why. That field is the whole point of the site.
// ─────────────────────────────────────────────────────────────

export const profile = {
  name: "Bowen Chen",
  // One line. What you build, for whom. No adjectives like "passionate".
  role: "Web developer",
  // 2–3 sentences, first person, specific. Replace this entirely.
  summary:
    "I'm a first-year DAW student in Madrid, previously working in systems " +
    "administration — Linux, Windows Server, virtualisation, scripting. That " +
    "taught me to care about how things run, not just how they look. I'm " +
    "currently building Prism, a dashboard that makes CDC and WHO " +
    "epidemiological data queryable in plain language.",
  location: "Madrid, Spain",
  languages: "Spanish (native) · English (near-native) · Mandarin (native spoken)",
  email: "bowenchen.work@gmail.com",
  github: "https://github.com/bowenchen-work",
  linkedin: "https://www.linkedin.com/in/bowenchen-work",
  cvPath: "/cv.pdf", // drop your PDF into /public as cv.pdf
  status: "Open to junior roles",
  contactNote: "Best reached by email. I read everything.",
};

export type Status = "live" | "building" | "archived";

export type Project = {
  id: string;
  title: string;
  date: string; // YYYY-MM
  status: Status;
  oneLine: string;
  problem: string;
  approach: string;
  decision: { title: string; body: string };
  stack: string[];
  links: { label: string; href: string }[];
};

export const projects: Project[] = [
  {
    id: "prism",
    title: "Prism",
    date: "2026-07",
    status: "building",
    oneLine:
      "A dashboard that makes CDC and WHO epidemiological data queryable " +
      "in plain language.",
    problem:
      "CDC and WHO publish authoritative epidemiological data across dozens " +
      "of endpoints, in formats built for specialists. Answering something " +
      "as simple as how flu activity in Spain compares to last year means " +
      "knowing which endpoint holds it and how to parse it.",
    approach:
      "A FastAPI backend that ingests CDC and WHO data, chunks and embeds " +
      "it into a pgvector store, and answers natural-language queries by " +
      "retrieving relevant context and passing it to the Claude API. The " +
      "backend runs; retrieval, ingestion and the dashboard are in progress.",
    decision: {
      title: "Retrieval over fine-tuning",
      body:
        "Epidemiological data changes weekly, so a fine-tuned model goes " +
        "stale between updates and costs a retraining cycle to correct. " +
        "Retrieval keeps the model fixed and the data live, and every " +
        "answer can cite the dataset and fetch timestamp it came from.",
    },
    stack: ["Python", "FastAPI", "PostgreSQL + pgvector", "Claude API", "Next.js", "Docker"],
    links: [
      { label: "Source", href: "https://github.com/bowenchen-work/prism" },
    ],
  },

  {
    id: "portfolio",
    title: "bowenchen.dev",
    date: "2026-07",
    status: "live",
    oneLine: "This site — a work register built from scratch.",
    problem:
      "My previous portfolio was an unmodified Bootstrap template with placeholder " +
      "text and no real projects. It communicated nothing about how I work.",
    approach:
      "Rebuilt as a statically generated Next.js site with a single typed content " +
      "file as the source of truth, so publishing a new project is one commit and " +
      "the layout can never drift out of sync with the data.",
    decision: {
      title: "A register layout instead of a card grid",
      body:
        "A card grid advertises how much work you have; with three projects it " +
        "reads as empty space. A dated register reads as a complete record at any " +
        "length, so the layout stays honest as the site grows.",
    },
    stack: ["Next.js 16", "TypeScript", "Tailwind CSS v4", "Vercel"],
    links: [
      { label: "Source", href: "https://github.com/bowenchen-work/portfolio" },
    ],
  },

  // ── Template. Copy this for each new project. Delete before shipping. ──
  // {
  //   id: "slug",
  //   title: "Project name",
  //   date: "2026-08",
  //   status: "building",
  //   oneLine: "One sentence a non-technical person would understand.",
  //   problem: "What was broken or missing. Concrete.",
  //   approach: "What you built and how. Two sentences.",
  //   decision: {
  //     title: "The tradeoff, stated as a claim",
  //     body: "What you chose, what you rejected, and why. This is the field
  //            interviewers actually read.",
  //   },
  //   stack: ["...", "..."],
  //   links: [{ label: "Live", href: "https://..." }],
  // },
];

export type Role = {
  title: string;
  org: string;
  start: string;
  end: string; // "present" is fine
  body: string;
};

// Delete this array entirely if you have nothing yet — an empty
// section is worse than no section.
export const experience: Role[] = [
  // {
  //   title: "Web Developer Intern",
  //   org: "Company",
  //   start: "2026-01",
  //   end: "present",
  //   body: "What you were responsible for and what shipped because of you.",
  // },
];
