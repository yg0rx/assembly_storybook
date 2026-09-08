# Assembly Cloud Solutions, brand system

The functional half of the Assembly brand. Tokens, CSS components, a Storybook catalogue, an MCP endpoint for agents and the guardrails that keep all of it honest.

The other half is the brand book, which lives at `projects/assembly_brand_book/brand-system.html`. That page is a rendered argument. This repo is the machine.

## Quick start

```bash
npm install
npm run build:tokens     # generate dist/ from the source
npm run dev              # Storybook at http://localhost:6006
npm run check            # build, lint and contrast
npm run test:a11y        # axe against every story, needs a browser
```

Rubik is committed and self-hosted under the SIL Open Font License 1.1. See `fonts/README.md`. Storybook makes no external font request, so a clean checkout renders the six public type roles correctly.

## What is where

```text
tokens/tokens.source.json   the single source of truth. every value, once.
tokens/build.mjs            generates all four output formats
dist/                       generated. committed so consumers read it directly.
css/                        the component layer. tokens only, no values.
assets/                     supplied brand artwork. never rebuilt. see manifest.json.
stories/                    Storybook. the live catalogue.
knowledge/                  the judgement layer. why, not what.
scripts/                    the guardrails.
DESIGN.md                   the agent entry point. read this first.
CONTRIBUTING.md             branching, review and what a reviewer may not do.
```

## The direction of flow

This is the part that makes it a system rather than a document.

```text
tokens.source.json
      │
      ├──> dist/tokens.css            CSS custom properties
      ├──> dist/tokens.json           W3C DTCG
      ├──> dist/theme.css             Tailwind v4
      ├──> dist/figma-variables.json  Figma variables
      │
      └──> css/*.css ──> stories/*.js ──> Storybook ──> /mcp ──> agents
```

The brand book page currently runs this backwards: values are declared inside the page and the tokens are generated out of it. That is correct for a portfolio piece and wrong for a functional system, because the first product that consumes those tokens becomes a second source of truth. Migrating the page to read from `dist/` is the next structural step.

## Consuming it

```css
/* everything */
@import 'assemblycloud-brand-system/css';

/* tokens only, bring your own components */
@import 'assemblycloud-brand-system/tokens.css';

/* tailwind v4 */
@import 'assemblycloud-brand-system/theme.css';
```

Components consume intent, never a raw value:

```css
.thing {
  background: var(--surface-raised);
  color: var(--text-primary);
  border: 1px solid var(--border-subtle);
  border-radius: var(--radius-core);
  padding: var(--space-6);
}
```

## For agents

Run `npm run dev`, then:

```bash
claude mcp add --transport http storybook http://localhost:6006/mcp
```

Read `DESIGN.md` first. It states the non-negotiable rules, the current catalogue and the known problems, so an agent does not rediscover them one bad component at a time.

## Guardrails

| Check | What it stops |
| --- | --- |
| `lint:tokens` | A value declared outside the source. Raw hex, off-scale spacing, off-scale radius, suppressed focus outlines. |
| `test:contrast` | A token change that quietly breaks a contrast pair. Regenerates `knowledge/contrast-matrix.md` so the consequence lands in the same diff as the cause. |
| `test:a11y` | Broken semantics. axe against all 67 stories in a real browser. |
| `npm audit` | Supply chain. High and critical fail, moderate is recorded in `SECURITY.md`. |
| pre-commit hook | The first three, plus staging the regenerated output. |
| `.github/workflows/ci.yml` | All of it, plus a check that `dist/` is not stale. Dormant until this repo has a remote. |

## Status

Built 11 August 2026 from brand book v1.6 and knowledge pack v1.7.

**Working:** 46 primitives, 15 semantic aliases with light and dark modes, 6 type roles, 5 gradients, 18 CSS files, 67 stories, 16 docs pages, 0 axe violations, 4 output formats, 22 supplied brand assets.

**Unresolved and recorded, not fixed:**

- 4 semantic aliases carry a `[Conflict]` marker. See `knowledge/conflicts.md`.
- The two text decisions are resolved. Four decorative border pairs remain as accepted exceptions. See `knowledge/contrast-exceptions.json` and `knowledge/accessibility.md`.
- 2 dark theme values are raw hex with no primitive behind them.

**Not built yet:** the brand book reading from `dist/`, visual regression testing, screen reader testing, a forms validation pattern, and the deck masters and application gallery from the reference page.
