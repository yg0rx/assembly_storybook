# Assembly Brand System Handoff (2026-08-11)

## One-paragraph state

This repo is the functional half of the Assembly Cloud Solutions brand: a token source of truth, a vanilla CSS component layer, a themed Storybook catalogue with an MCP endpoint for agents, and the guardrails that stop the system drifting. It was built this session from `~/Desktop/Claude Code/projects/assembly_brand_book/brand-system.html` (brand book v1.6) and its `knowledge/` pack (v1.7). The key structural move is the direction of flow: the brand book declares values inside the page and generates tokens out of it, which is backwards for a functional system, so here `tokens/tokens.source.json` is the single declaration and everything else is generated from it. Everything builds and every check passes. **Nothing is committed.** The repo is git-initialised on `main` with zero commits and no remote, so all 18 top-level entries are untracked and at risk.

## Shipped this session

- Token source of truth, 46 primitives, 15 aliases with light and dark, 6 type roles, 5 gradients: `tokens/tokens.source.json`
- Build generating 4 formats (CSS custom properties, W3C DTCG JSON, Tailwind v4, Figma variables): `tokens/build.mjs` to `dist/`
- Fluid type roles: ranges like `16-20px` become `clamp()` interpolated between the sm and xl breakpoints
- Component layer, 18 CSS files, tokens only, no declared values: `css/`
- Storybook 10.5.7 HTML/Vite, 67 stories, 16 docs pages: `stories/`, `.storybook/`
- Storybook themed from the tokens themselves: `.storybook/theme.js`, `manager.js`, `manager-head.html`
- Twelve self-drawn sidebar icons, one per component: `.storybook/icons.js`
- MCP endpoint via `@storybook/addon-mcp`, live at `localhost:6006/mcp` while `npm run dev` runs
- Accessibility spec, the largest declared gap in the original pack: `knowledge/accessibility.md`
- Guardrails: `scripts/lint-tokens.mjs`, `scripts/test-contrast.mjs`, `scripts/test-a11y.mjs`
- Generated, committed contrast matrix so a token change shows its consequence in the same diff: `knowledge/contrast-matrix.md`
- Pre-commit hook, CI workflow (dormant until a remote exists), review and branching rules: `.husky/pre-commit`, `.github/workflows/ci.yml`, `CONTRIBUTING.md`, `SECURITY.md`
- Agent entry point: `DESIGN.md`
- 22 brand assets extracted from base64 in the brand book and from `~/Desktop/assembly_fixes/all versions/`: `assets/` with `manifest.json`
- Logo section rebuilt: 3 families (symbol, primary, descriptor) x 4 fields, plus Assembly application floors at 256 / 112 / 32px
- Type section rebuilt around a self-hosted Rubik variable font, a live font-catalogue specimen, the six roles, and technical application guidance: `css/type.css`, `stories/Type.stories.js`
- Two components taken from beautiful-ui-five.vercel.app: `css/segmented.css`, `css/index-row.css`

## Key decisions and why

- **Vanilla CSS + HTML over React or Lit.** The source was vanilla CSS with tokens, the markup ports 1:1, the deliverable is a framework-agnostic stylesheet, and it is the least new syntax for a designer learning to code.
- **Conflicts recorded, never resolved.** The brand book declares its aliases twice and the two declarations disagree in 4 places. Per rule 3 of the pack, resolving one quietly is a brand decision without the authority to make it. All 4 are in `knowledge/conflicts.md` and marked `conflict` in the source. The build currently emits the rendered-table reading.
- **Contrast exceptions need a reason, a severity and an owner.** The two must-fix text decisions are resolved. Four accepted decorative separators remain exempt from WCAG 1.4.11. The test fails on stale exceptions, so a fix cannot leave one behind.
- **The two contrast decisions are applied.** `ink-450` now sets muted text on light grounds. GenAI rests on the original 9% amber surface, uses amber text, and reserves `amber-600` for the accessible control boundary.
- **colour-contrast disabled in axe, both in CI and in the Storybook panel.** It is measured directly against the tokens by `test:contrast`, across every pair in both themes rather than whatever a story happens to render. Verified with all rules enabled that no other rule fires anywhere, so the exclusion list is one rule long.
- **Reversed marks are filters, not files.** Each logo family ships a colour master and a mono master; both reversed states are the colour master under `filter: brightness(0) invert(1)`. Four files per family means four files that can drift when one is re-exported. Same rule for the AWS co-brand.
- **Exact replication beats the 4px grid where the artwork demands it.** The code motif is reproduced pixel for pixel including its 7px and 6px off-grid values. This contradicts the grid guardrail, so `knowledge/grid-exceptions.json` records each one with a reason, mirroring the contrast-exceptions pattern. The lint fails on stale entries.
- **Icons drawn here, not sourced from Flaticon.** Per-icon licences and mandatory attribution are a dependency a brand system should not inherit for twelve glyphs.
- **Dark toggle removed from Storybook, dark tokens kept.** Light is what ships, so a toggle implied a choice that is not on offer. The dark aliases still exist and are still contrast-tested in both modes.
- **Numerals are Rubik with tabular figures, not monospace,** diverging from the reference site, because `typography.md` says Rubik sets every number and monospace stays a utility for the code motif and token names.

## Uncommitted work

**Everything.** `git log` reports no commits on `main`. All of it is untracked:

`.github/ .gitignore .husky/ .storybook/ CONTRIBUTING.md DESIGN.md README.md SECURITY.md assets/ css/ dist/ fonts/ knowledge/ package-lock.json package.json scripts/ stories/ tokens/`

This is the single biggest risk in the handoff. The user has a standing rule to commit only when asked, so the first action of the next session should be to ask whether to commit rather than committing unprompted.

Separately, the parent repo at `~/Desktop/Claude Code` has 136 changed files, almost all pre-existing and unrelated to this work. Nothing in it was modified this session.

## Open items

1. **Four token conflicts.** needs-decision. `knowledge/conflicts.md`. Two of the four resolutions introduce raw hex with no primitive behind them (`#131318`, `#A7A7B4`); these should become named ink tokens whichever way the conflicts settle.
2. **Commit the repo.** ready-to-execute once the user asks. No remote exists; CI is written and dormant until one is added.
3. **Migrate the brand book page to read from `dist/`.** ready-to-execute. This is the structural fix that makes the repo the only source of truth.
4. **Segmented `--brand` variant.** needs-decision, low stakes. Flagged to the user as deletable if a segmented control should never carry brand blue. No response yet.
5. **Descriptor lockup is raster, not vector.** blocked-on an SVG export. Extracted at 708x194 from PNG because no PDF vector converter is installed. An SVG would also let the mono variant come from a filter, dropping two files.
6. **Not built:** deck masters and the application gallery from the reference page, visual regression testing, screen reader testing, a forms validation pattern.

## Known bugs

None outstanding. Three found and fixed this session, listed because the causes recur:

- Storybook autodocs rendered the first story twice on all 14 docs pages, because the `Stories` block defaults to `includePrimary: true`. Fixed once project-wide with a custom docs page in `.storybook/preview.js`.
- `scripts/lint-tokens.mjs` flagged the HTML entity `&#8594;` as a hex colour. Fixed by stripping numeric entities before matching.
- Type role sizes were emitted as invalid CSS (`16-20px`). Fixed by converting ranges to `clamp()` in `tokens/build.mjs`.

One environment note, not a bug: killing and restarting the dev server makes an open browser tab show "Connection lost". Reload the tab.

## Resume instructions

```bash
cd ~/Desktop/brand_system/assemblycloud
npm install
npm run check          # build tokens, lint tokens, measure contrast
npm run dev            # Storybook at http://localhost:6006
npm run test:a11y      # axe against all 67 stories, needs a browser
```

`npx playwright install chromium` if the a11y suite reports a missing browser.

**Read `DESIGN.md` first.** It carries the non-negotiable rules, the current catalogue and the known problems, so you do not rediscover them one bad component at a time. Then `CONTRIBUTING.md` for what a reviewer may not do, and `knowledge/conflicts.md` plus `knowledge/accessibility.md` for what is unresolved.

**Check first:** `Foundations/Type`, `Brand/Code Style Text`, and `Brand/Letter Grafism` in Storybook. They contain the newest interaction and content-system work.

**The one rule:** a value is declared once, in `tokens/tokens.source.json`, and generated outward. If a component needs a value that is not a token, the token is missing. `npm run lint:tokens` fails the commit if you declare one anywhere else.

To connect an agent, with `npm run dev` running:

```bash
claude mcp add --transport http storybook http://localhost:6006/mcp
```
