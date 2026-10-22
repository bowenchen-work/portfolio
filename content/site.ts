// ─────────────────────────────────────────────────────────────
// This is the only file you need to edit to update the site.
// Rules that keep this portfolio honest:
//   1. Never add an entry you cannot talk about for 10 minutes.
//   2. "building" status is allowed ONLY with a real name and a
//      real one-line description. No vague "coming soon" ghosts.
//   3. Every live or archived project needs a `decision` — a real
//      tradeoff you made and why. That field is the whole point of
//      the site.
// ─────────────────────────────────────────────────────────────

export const profile = {
  name: "Bowen Chen",
  // One line. What you build, for whom. No adjectives like "passionate".
  role: "Web developer",
  summary:
    "I'm a first-year DAW student in Madrid, previously working in systems " +
    "administration — Linux, Windows Server, virtualisation, scripting. That " +
    "taught me to care about how things run, not just how they look.",
  location: "Madrid, Spain",
  languages: "Spanish (native) · English (near-native) · Mandarin (native spoken)",
  email: "hello@bowenchen.dev",
  github: "https://github.com/bowenchen-work",
  linkedin: "https://www.linkedin.com/in/bowenchen-work",
  cvPath: "/cv.pdf",
  status: "Open to junior roles",
  contactNote: "Best reached by email. I read everything.",
};

export type Status = "live" | "building" | "archived";

type ProjectDetail = {
  problem: string;
  approach: string;
  decision: { title: string; body: string };
  stack: string[];
};

export type Project = {
  id: string;
  title: string;
  date: string; // YYYY-MM
  oneLine: string;
  // Repo URL, or null for closed source. Required, so every project
  // states it deliberately — null renders as "Closed source".
  source: string | null;
  links: { label: string; href: string }[];
} & (
  | ({ status: "live" | "archived" } & ProjectDetail)
  // A "building" entry may go up with just a name and a one-liner
  // (rule 2 above). The detail fields are required once it ships.
  | ({ status: "building" } & Partial<ProjectDetail>)
);

export const projects: Project[] = [
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
      title: "A register, not a card grid",
      body:
        "The cost: cards are more eye-catching and more engaging than text, " +
        "and a non-technical HR reviewer would likely prefer them. I chose the " +
        "register because it gets straight to the point with no fluff, suits a " +
        "technical visitor with genuine curiosity, and still reads as a " +
        "complete record with only two projects.",
    },
    stack: ["Next.js 16", "TypeScript", "Tailwind CSS v4", "Vercel"],
    source: "https://github.com/bowenchen-work/portfolio",
    links: [],
  },

  {
    id: "prism",
    title: "Prism",
    date: "2026-09",
    status: "building",
    oneLine:
      "A social media platform where original creators are credited by " +
      "default and you regain control of your time.",
    source: null,
    links: [],
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
  //   source: "https://github.com/...", // or null if closed source
  //   links: [{ label: "Live", href: "https://..." }],
  // },
];

export type Role = {
  title: string;
  org: string;
  start: string; // YYYY-MM
  end: string | null; // null = present
  location: string;
  oneLine: string; // one sentence — what you did, org context subordinate
  context: string; // why this role existed (program, internship type)
  work: string; // what you actually did, in prose
  stack: string[]; // named technologies only — no skill-tag keywords
};

// Delete this array entirely if you have nothing yet — an empty
// section is worse than no section.
export const experience: Role[] = [
  {
    title: "IT Technician",
    org: "Avizor",
    start: "2025-05",
    end: "2025-07",
    location: "Leganés, Madrid",
    oneLine:
      "Three months of desktop and server support at a Madrid contact-lens " +
      "manufacturer that also produces private-label products for other " +
      "health and pharmaceutical brands.",
    context:
      "Curricular internship for my SMR qualification (Computer Systems " +
      "and Network Technician).",
    work:
      "Managed server backups and administered user accounts in Active " +
      "Directory and Azure. Repaired and maintained desktop hardware and " +
      "software across Mac and PC, and supported the workstations attached " +
      "to the testing equipment in Avizor's chemistry and microbiology labs.",
    stack: ["Windows Server 2019", "Active Directory"],
  },

  // {
  //   title: "Web Developer Intern",
  //   org: "Company",
  //   start: "2026-01",
  //   end: null,
  //   location: "City, Country",
  //   oneLine: "One sentence a non-technical person would understand.",
  //   context: "Why this role existed — program, internship type, etc.",
  //   work: "What you were responsible for and what you actually did.",
  //   stack: ["Named technology", "..."],
  // },
];
