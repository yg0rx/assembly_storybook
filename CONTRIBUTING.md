# Contributing

The guardrails in this repo exist because a design system drifts silently. Every rule below is enforced by a script, not by memory.

## The one rule

**A value is declared once, in `tokens/tokens.source.json`, and generated outward.**

Everything else follows from that. If a component needs a colour, a radius or a spacing step that does not exist as a token, the token is missing. Add it to the source and rebuild. Do not add the value to the CSS.

`npm run lint:tokens` fails the commit if you do.

## Branching

- `main` is always releasable. Nothing lands on it directly.
- Branch per change: `tokens/`, `component/`, `a11y/`, `docs/`, `fix/`. For example `tokens/ink-450-contrast-fix` or `component/pill-loading-state`.
- One concern per branch. A token change and a new component are two branches, because the review question is different for each.
- Rebase rather than merge, so the history reads as a sequence of decisions.

## Commits

- Present tense, one line, what changed and why it matters: `add ink-450 so text-muted clears AA on white`.
- No em dashes.
- A commit that changes `tokens.source.json` must include the rebuilt `dist/` and the regenerated `knowledge/contrast-matrix.md`. The pre-commit hook stages them for you. CI fails if they are missing, because a value and its consequences must be reviewable in the same diff.

## What runs, and when

| Check | Command | Pre-commit | CI |
| --- | --- | --- | --- |
| Token build | `npm run build:tokens` | yes | yes |
| Generated output committed | git status on `dist/` | staged automatically | yes, fails if stale |
| Token lint | `npm run lint:tokens` | yes | yes |
| Contrast | `npm run test:contrast` | yes | yes |
| Accessibility | `npm run test:a11y` | no, too slow | yes |
| Dependency audit | `npm audit --audit-level=high` | no | yes |

Run everything locally with `npm run check`, and the full set including axe with `npm run check && npm run test:a11y`.

## Review

A reviewer is answering four questions, in this order.

1. **Is a new value declared outside the source?** The lint catches most of this. It does not catch a token added to the source that duplicates an existing one, so check the source diff for near-duplicates.
2. **Did the marker move?** `approved`, `derived`, `proposed` and `conflict` mean specific things, defined in `knowledge/README.md`. Promoting a `proposed` value to `approved` is a brand decision and needs Ygor, not a reviewer.
3. **Did the contrast matrix change?** `knowledge/contrast-matrix.md` is regenerated on every test run. If the diff shows a ratio moving, that is the real subject of the review, whatever the pull request says it is about.
4. **Does the component state its own rules?** A story without a description in `parameters.docs` is half a component. The prose is what an agent reads through MCP, so an undocumented component is invisible to the harness.

### What a reviewer may not do

Resolve a `[Conflict]` marker. Conflicts are recorded in `knowledge/conflicts.md` because two sources disagree, and settling one is a brand decision made by the brand owner. Quietly picking a side in review is how a system loses its authority.

## Adding a component

1. Add the CSS to `css/`, using tokens only. Import it in `css/index.css`.
2. Add a story with a `parameters.docs.description.component` that states what the component is for and, more importantly, when not to use it.
3. Cover every state you built. A variant with no story does not exist as far as the harness is concerned.
4. Run `npm run test:a11y`. Semantics are part of the component, not a later pass.
5. If the component needed a value that was not a token, say so in the pull request. That is the interesting part of the change.

## Adding a contrast exception

Only when the pair genuinely cannot meet the threshold.

Every exception in `knowledge/contrast-exceptions.json` needs a `reason`, a `severity` and, at `must-fix` severity, a `proposedFix` and what it is `blockedOn`. An exception without a proposed fix is a decision to ship the failure forever, so write one.

The test fails on stale exceptions. When you fix the token, delete the exception in the same commit.
