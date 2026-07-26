# Portfolio project brief

Read this fully before touching anything. Every rule here carries its
reason, because a rule without a reason gets dropped the first time it's
inconvenient.

---

## 1. Who this is for and what it has to do

I'm Bowen Chen, an early-career web developer. My previous portfolio was
an unmodified Bootstrap template: lorem ipsum on the About page, six
placeholder cards reading "Card title / Short text / Go somewhere", and
the same test image repeated six times. Zero real projects.

I have **almost no shipped work yet**. That's the actual constraint, and
every decision in this project follows from it.

The site's single job: convince a hiring manager, in under sixty seconds,
that I build real things and think clearly about tradeoffs.

### The planned lineup

Four projects, ordered by how much a hiring employer is likely to care.
This is display order on the site and build order in my calendar. Note
that this is *not* the order I find them most fun, which is the point.

**1. Video service website** — highest technical signal.
Real production problems live here: file upload, storage, transcoding,
streaming delivery, auth, database schema. These are the things backend
and full-stack interviews actually probe. Nothing else on this list
generates as many honest `DECISION` fields.
*Risk: scope.* Transcoding and adaptive streaming can eat six months.
Scope it down hard before writing code — a working upload → transcode →
playback loop for one video format beats an unfinished platform.

**2. Health AI-powered website** — highest market relevance.
AI integration is the most in-demand differentiator right now, and it's
the one thing on this list that reads as current rather than generic.
*Two real caveats.* First, "LLM API wrapped in a chat box" is already a
crowded, low-signal category — the project only scores if the AI does
something structurally interesting (retrieval over real data, structured
extraction, validation) rather than proxying a prompt. Second, health is
a domain where a naive build is a *negative* signal: anything that
resembles diagnosis or medical advice will get probed in an interview,
and "I didn't think about that" is a bad answer. Prefer framings where
being wrong is cheap — appointment preparation, medication schedule
tracking, parsing lab result PDFs into structured data, nutrition
lookup. Be ready to answer "what happens when the model is wrong."

**3. bowenchen.dev — this portfolio** — table stakes.
Proves I can ship, deploy, and make design decisions. Necessary, and the
least differentiating of the four, because every candidate has one. It
earns its place by being genuinely finished, not by being clever.

**4. Godot video game** — lowest relevance, highest memorability.
For a web role this doesn't map to the job, and it should never be the
first thing a recruiter sees. It's worth keeping because finishing a game
is real evidence of persistence and systems thinking, and because it
makes me a person rather than a stack list. *Risk: completion.* Games are
the single most likely category to never ship. If it stalls, it stays at
`status: "building"` with an honest one-liner, or it comes off entirely.

**Sequencing rule — this matters more than the ordering.** I currently
have zero shipped projects. Four projects in progress at once is exactly
the failure mode this whole document exists to prevent. Build one at a
time. Each one goes **live on the internet** before the next one starts.
A finished small thing outranks three impressive drafts, every time.

If I ask to start project 2 while project 1 is unshipped, say so and
point at this paragraph.

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
doesn't exist, and most published statistics in this space are
fabricated. Don't optimise against invented metrics. Optimise for
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
--color-ink-faint   #9a9c9f   data labels
--color-rule        #e0e0dc   hairlines
--color-rule-strong #c9c9c3   emphasis rules, underlines
--color-signal      #2f6b4f   deep green — status and link hover ONLY
```

One accent, used in exactly two places. Everything else is ink on paper.

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
LINKS      Live / source.
```

**`DECISION` is the entire point of this site.** Problem and stack are
table stakes that anyone can fake. The tradeoff I made and why is the
only field that demonstrates thinking rather than exposure. If a project
can't fill that field, the project isn't finished and doesn't go up.

---

## 5. Content architecture

All content lives in `content/site.ts` as typed exports. You should never
need to edit a component to publish a project.

**Why:** the failure mode for personal sites is that updating them is
annoying enough that you don't. One typed file means publishing is one
commit, and the type system makes it impossible for the layout to drift
out of sync with the data.

### Ordering

Entries display in the curated order given in section 1, strongest
first — not reverse-chronological. A register can be curated; the dates
stay real and visible, so nothing about it is dishonest. The reason is
blunt: a recruiter reads the first entry and maybe the second. The
strongest project has to be the one they hit first.

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

---

## 9. Current state and first task

The scaffold exists and builds clean: `content/site.ts`,
`components/Record.tsx`, `app/page.tsx`, `app/layout.tsx`,
`app/globals.css`, and a README. One real project entry is written — the
site itself.

**First task:**

1. Run the build, confirm it passes, and show me the site running.
2. Audit against sections 4, 6, and 7 above. Report anything that
   violates them — including anything in the existing code.
3. List every `TODO` in `content/site.ts` and ask me for the values, one
   batch, no guessing.
4. Then stop. Do not add features. The next work is content, and that's
   mine to write.

**Still unresolved — ask me, don't assume:**

1. **What "video service website" means.** A video-on-demand platform
   with upload and playback is a very different project from a marketing
   site for a videography business. The first is a strong technical
   entry; the second is a brochure. Get this pinned down before any
   architecture discussion.
2. **What the health project actually does.** See the caveats in section
   1. Nail the concrete use case before touching an API key.
3. **How much time I have per week**, and whether I'm studying, working,
   or between things. This changes the correct scope of every project on
   the list. Ask once, write the answer into section 1, and scope
   accordingly from then on.

Do not propose implementation plans for projects 1 or 2 until you have
answers. Guessing here wastes weeks, not hours.
