# Portfolio — work register

Static Next.js site. Every piece of content lives in one typed file.

## Run it

```bash
npm install
npm run dev      # http://localhost:3000
```

## Editing content

Everything is in `content/site.ts`. You should not need to touch the
components to publish a project.

Three rules that keep this site working:

1. **Never add an entry you can't talk about for ten minutes.** The site
   is interview preparation that happens to be public.
2. **`status: "building"` requires a real name and a real one-line
   description.** A dated entry called "Inventory API for my dad's shop —
   in progress" reads as momentum. "Project coming soon" reads as filler
   and costs you more than an empty section would.
3. **Every project needs a `decision`.** Problem and stack are table
   stakes; the tradeoff you made and why is the only field that shows how
   you think. If you can't fill it in, the project isn't finished.

Drop your CV at `public/cv.pdf`.

## Deploy

```bash
git init && git add -A && git commit -m "Initial commit"
gh repo create portfolio --public --source=. --push
```

Then at vercel.com: New Project → import the repo → Deploy. No config
needed; the defaults are correct for this project. Every push to `main`
redeploys automatically.

Add a custom domain under Project → Settings → Domains. Buy the domain
first (Namecheap, Porkbun, Cloudflare — around €12/year) and point it at
Vercel using their instructions. `bowenchen.dev` instead of
`something.vercel.app` is the cheapest credibility you can buy.

## Design decisions you should be able to defend

Interviewers do ask "why does your site look like this." Short answers:

- **Register, not a card grid.** A grid advertises volume; at three
  projects it reads as empty. A dated register reads as a complete
  record at any length.
- **Monospace only for tabular data** — dates, IDs, stack lists. Never
  for headings. Mono earns its place by aligning columns, not by
  signalling "developer".
- **Light mode only.** A deliberate choice, not an omission. A single
  well-executed theme beats two half-tested ones, and `color-scheme:
  light` is declared so it renders correctly on dark-mode systems.
- **One accent colour**, used only for status and link hover. Everything
  else is ink on paper.
- **Statically prerendered**, no client JavaScript for content. Loads
  fast on a recruiter's phone on mobile data.

## Accessibility floor

Skip link, visible keyboard focus rings, semantic `dl`/`dt`/`dd` for the
record fields, `prefers-reduced-motion` respected, text contrast above
WCAG AA. Don't regress these — they get checked.
