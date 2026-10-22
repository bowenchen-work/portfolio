# Portfolio project brief

Read this fully before touching anything. Every rule here carries its
reason, because a rule without a reason gets dropped the first time it's
inconvenient.

---

## 1. Who this is for and what it has to do

I'm Bowen Chen, an early-career web developer. "Systems person who
learned to code, not a coder who vaguely heard of servers."

My previous portfolio was an unmodified Bootstrap template: lorem ipsum
on the About page, six placeholder cards reading "Card title / Short
text / Go somewhere", and the same test image repeated six times. Zero
real projects.

I have **almost no shipped work yet**: one live project, this site.
That's the actual constraint, and every decision in this project follows
from it.

The site's single job: convince a hiring manager, in under sixty seconds,
that I build real things and think clearly about tradeoffs.

### About me

- Studying DAW (Desarrollo de Aplicaciones Web), first year, Madrid,
  2026–2027 school year.
- Prior hands-on sysadmin experience: Ubuntu Server, Amazon Linux, Active
  Directory, DNS, DHCP, SSH, AWS EC2, VirtualBox.
- Time per week: varies a lot week to week and is unpredictable.
- Not that interested in health-related environments. Don't propose
  health projects.

### The lineup (next six months)

"Prism Social Media Web App prototype, later Prism Social Media with real
modern in-use frameworks and tools prototype version." Nothing else is on
the lineup.

### Prism

- The CDC/WHO health dashboard version is dead.
- One-liner: "A social media platform where original creators are
  credited by default and you regain control of your time."
- Closed source. Prism's repo stays private.
- Plan for presenting it publicly: a link to the live social media, real
  statistics, and maybe a non-detailed diagram of some of my algorithms
  and architectural designs. Statistics must be real and sourced. Any
  diagram is a static image or SVG, with no client JS and no new
  dependency.
- On the site it is a `building` entry: name, one-liner, and
  `source: null`. The other fields wait until it can fill `DECISION`
  (section 4).

**Sequencing rule — this matters more than the ordering.** I currently
have one shipped project. One project in progress: Prism, in two stages.
More than one project in progress at once is exactly the failure mode
this whole document exists to prevent. Build one at a time. Each one
goes **live on the internet** before the next one starts. A finished
small thing outranks three impressive drafts, every time.

If I ask to start the later Prism version while the prototype is
unshipped, say so and point at this paragraph.

---

## 2. The governing principle

**Finished beats original, by a lot.**

A competent, unoriginal, complete portfolio outperforms a distinctive
empty one every single time. I decided this deliberately after looking at
the evidence, and it overrules any conflict below.

The reasoning: a portfolio is a **filter, not a driver**. It rarely wins
a job; it can lose one. Design quality behaves like a floor, not a
ceiling:

- Below the floor (broken, empty, lorem ipsum, visibly untouched
  template) — costs real opportunities.
- At the floor (clean, finished, fast, works on mobile, real content) —
  captures nearly all available value.
- Above the floor (striking, memorable, original) — returns very little
  extra, except for design-adjacent and freelance work.

So: **ship a smaller thing that is completely done** rather than a larger
thing that is 80% done. When you have to choose between polish and
completion, choose completion and tell me what you cut.

There is no real data on hiring rates by portfolio style — that number
doesn't exist, and most published statistics in this space have no
traceable source. Don't optimise against invented metrics. Optimise for
"finished, honest, fast."

---

## 3. Non-negotiable constraints

- **Next.js 16 (App Router), TypeScript, Tailwind CSS v4.** Chosen for
  employer recognition, not technical elegance. Astro would genuinely be
  the better tool for a static content site — I know, and I chose
  recognition on purpose.
- **Statically prerendered. No client JavaScript for content.** A
  recruiter opens this on a phone on mobile data.
- **Light mode only**, with `color-scheme: light` declared. A deliberate
  choice, not an omission: one well-executed theme beats two half-tested
  ones.
- **No CMS, no database, no auth, no analytics platform.** All content is
  a typed TypeScript file. Adding infrastructure to a personal site is
  procrastination dressed as engineering.
- **Deploys to Vercel** from a GitHub repo, with a custom domain.
- **Repository:** public, with a README. CI (build + typecheck on push)
  is a later, separate task and isn't added yet. No ARCHITECTURE.md: one
  data file and one component don't need a diagram.

---

## 4. Design direction: a work register

The site is a **dated, indexed record of work** — not a marketing page.

**Why this specifically:** a card grid advertises volume. With three
projects it reads as empty space, and the layout is actively working
against me. A register reads as a complete record at any length. Six
entries in a well-kept ledger look intentional; six cards in a grid look
sparse. The layout has to stay honest as the site grows from one project
to fifteen.

### Tokens

```
--color-paper       #f7f7f5   cool off-white, not cream
--color-ink         #17181a
--color-ink-mid     #62656a   body copy
--color-ink-faint   #6b6e73   data labels (4.77:1 on paper, WCAG AA)
--color-rule        #e0e0dc   hairlines
--color-rule-strong #c9c9c3   emphasis rules, underlines
--color-signal      #2f6b4f   deep green — status, link hover, focus rings ONLY
```

One accent, used in exactly three places: status, link hover, and
keyboard focus rings (a section 7 requirement). Everything else is ink on
paper. Known exception: the `::selection` highlight uses a hard-coded
pale green (`#d9e5de`), not a token.

### Type

- **Instrument Serif** — my name only. Nowhere else.
- **Instrument Sans** — all reading text.
- **IBM Plex Mono** — tabular data only: dates, IDs, stack lists, field
  labels, status chips.

**The mono rule is load-bearing.** Monospace is permitted for tabular
data (dates, IDs, stack lists) and structural labels — field labels,
status chips, section labels like "Work" or "Contact". It is never
permitted for prose headings, project titles, or the display name. The
moment it appears in one of those, it becomes costume, and the site
collapses into the terminal-aesthetic genre I'm specifically avoiding.
Mono in a data column or a structural label is functional; mono in a
prose headline is cosplay.

### The signature element

The `Record` block. Each project renders as a spec sheet with a fixed
field set, marked up as a semantic `<dl>`:

```
2026-07   bowenchen.dev   [live]
One sentence a non-technical person understands.
─────────────────────────────────────────────
PROBLEM    What was broken or missing.
APPROACH   What I built and how.
DECISION   The tradeoff, stated as a claim, then why.
STACK      Technologies actually used.
LINKS      Live, then Source — or "Closed source" (source: null).
```

**`DECISION` is the entire point of this site.** Problem and stack are
table stakes that anyone can fake. The tradeoff I made and why is the
only field that demonstrates thinking rather than exposure. A DECISION
names the cost of the choice, not just its justification (see the
Decisions log). If a project can't fill that field, the project isn't
finished: it can appear only as `building`, with a real name and
one-liner (section 5, rule 2), and the type won't let it be marked
`live` or `archived` until DECISION is filled.

### The experience record

A role is not a project, so it doesn't get PROBLEM / APPROACH /
DECISION. It has its own fixed field set, also a semantic `<dl>`:

```
2025-05 — 2025-07   Leganés, Madrid
IT Technician — Avizor
One sentence: what I did, with the organisation as context.
─────────────────────────────────────────────
CONTEXT    Why the role existed (program, internship type).
WORK       What I actually did, in prose.
STACK      Named technologies only — no skill-tag keywords.
```

An ongoing role has `end: null`, rendered as "present".

---

## 5. Content architecture

All content lives in `content/site.ts` as typed exports. You should never
need to edit a component to publish a project.

**Why:** the failure mode for personal sites is that updating them is
annoying enough that you don't. One typed file means publishing is one
commit, and the type system makes it impossible for the layout to drift
out of sync with the data.

### Ordering

Entries display strongest first: live entries before building entries —
not reverse-chronological. A register can be curated; the dates stay
real and visible, so nothing about it is dishonest. The reason is blunt:
a recruiter reads the first entry and maybe the second. The strongest
project has to be the one they hit first.

Implement this as an explicit array order in `content/site.ts`. Do not
add a sort function — the array order *is* the decision, and it should be
visible in the file I edit.

### Content honesty rules — enforce these against me

1. **No entry I can't discuss for ten minutes.** This site is interview
   preparation that happens to be public. Anything on it, I will be asked
   about.
2. **`status: "building"` requires a real name and a real one-line
   description.** "Inventory API for my dad's shop — in progress" reads
   as momentum. "Project coming soon" reads as filler and costs more than
   an empty section would.
3. **Never generate placeholder content.** No lorem ipsum, no invented
   projects, no plausible-sounding filler, no example metrics. My last
   site died of placeholder text. If content is missing, leave a visible
   `TODO` and tell me — do not fill the hole.
4. **Never invent facts about me.** No fabricated employers, dates,
   metrics, or testimonials. If you need a fact, ask.
5. **An empty section is deleted, not populated.** If I have no
   experience entries, the Experience section does not render.
6. **Describe what my projects do, not what other platforms do wrong.**
   Contrast is fine; accusation isn't. No accusing potential big tech
   workers and employers: they're the people reading this site.

---

## 6. Anti-patterns — banned, with reasons

These are the tropes that make a dev portfolio indistinguishable from
every other dev portfolio. Do not add them, and push back if I ask for
them.

**Genre tells:**
- Terminal or CLI framing, fake shell prompts, `$` cursors
- `// 01`, `// 02` numbered section comments — numbering implies a
  sequence, and my sections aren't one. Dates carry real information;
  decorative numbers don't.
- Typewriter-effect "Hi, I'm ___" headlines
- Near-black background with a single acid-green or vermilion accent
- Tech-stack logo walls of every technology I've ever touched
- Custom cursors, particle fields, 3D hero scenes
- Bento grids
- Scroll-triggered fade-ins on every element

**AI-generated tells:**
- Violet-to-blue gradients; gradient text
- Perfectly symmetric three-card grids
- Emoji section headers
- Warm cream background (#F4F1EA-ish) with terracotta accent — this is
  currently the single most recognisable machine-generated look
- Copy like "passionate developer crafting elegant solutions." Vagueness
  is the tell, not the colour palette.

**Scope creep — the most likely failure mode:**
- Do not add a blog, a chatbot, a dark-mode toggle, a command palette, an
  i18n layer, a CMS, or a visitor counter.
- Do not add a dependency without asking. The dependency list is a
  feature.
- Every one of these is more fun than writing project case studies, which
  is exactly why they're dangerous. The bottleneck is content, not
  features.

---

## 7. Quality floor — don't regress these

- Skip link to main content
- Visible keyboard focus rings on every interactive element
- Semantic markup — `<dl>/<dt>/<dd>` for record fields, real headings
- `prefers-reduced-motion` respected
- Text contrast at WCAG AA or better
- Responsive to 320px
- `npm run build` passes with zero TypeScript errors before any commit

---

## 8. How I want you to work

- **Small commits, working state at every step.** I'm learning this stack
  as we go; a 400-line diff teaches me nothing.
- **Explain the why on non-obvious choices**, briefly. I need to defend
  this site in interviews. If I can't explain a line, it shouldn't be
  there.
- **Push back on me.** If I ask for something that contradicts this
  document, say so and name the rule. I'd rather argue than drift.
- **Ask before assuming facts about me.** Guessing produces exactly the
  hollow copy this whole project exists to avoid.
- **Tell me when I'm procrastinating.** If I start asking for animations
  while the project count is still one, say it plainly.
- Next.js 16.4 ships its own docs in `node_modules/next/dist/docs/`, so
  check them before using an API.

---

## 9. Current state

The site's current content is `content/site.ts`; what changed and when is
`git log`. This section deliberately repeats neither, because the July
version of it went stale.

---

## 10. Decisions log

Each entry carries its reason, like every rule above.

- **Analytics: held off entirely.** Vercel's deployment dashboard
  already provides request-level data at zero cost with no code changes.
  For a portfolio shared directly with known contacts, raw visitor
  counts don't inform decisions. If analytics are ever added, Vercel Web
  Analytics is the only compliant option (cookieless, GDPR-safe,
  lightweight). Google Analytics is ruled out because of the cookie,
  consent-banner and overhead cost. Any analytics addition requires an
  explicit brief update, not incremental drift.
- **DECISION fields must name costs and tradeoffs explicitly, not just
  justify choices.** Without that they become self-congratulatory.
- **Scope crossings get flagged before committing, not after.** Claude
  Code must tell me what it wants to do before doing it, because the
  changes it makes in production may be very expensive. I fear it does
  something it thought I wanted but actually just hallucinated. When I
  check it afterwards, I probably wouldn't understand what that code
  does. And it's important to know what my decisions would actually do
  to the project: if Claude Code does it without my knowing, I wouldn't
  know why it made such decisions.
- **The portfolio repo is public with no license (all rights
  reserved).** Prism is closed source, so this repo is the only code a
  reviewer can read, and the design is already visible in the deployed
  HTML and CSS anyway.
- **Closed-source projects use `source: null`, rendered as "Closed
  source".** The compiler forces a deliberate answer, the same reasoning
  as `end: string | null` on Role.
- **AGENTS.md is turned off with `agentRules: false`.** One instruction
  file (CLAUDE.md), not two that can drift apart.
- **Commits use my GitHub noreply address.** The repo is public, and
  commit metadata is readable by anyone.
