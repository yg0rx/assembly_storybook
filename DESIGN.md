# DESIGN.md

Entry point for any agent or person building UI with the Assembly brand. Read this before writing markup.

If you only read one line: **every value comes from a token, and the components already exist. Do not invent either.**

---

## Source of truth, in priority order

1. **`tokens/tokens.source.json`** is where values are declared. Nothing else declares a value.
2. **`dist/`** is generated from it. Never edit `dist/` by hand.
3. **`css/`** is the component layer. It may read custom properties and nothing else.
4. **Storybook** is the live catalogue. Run `npm run dev` and it serves an MCP endpoint at `http://localhost:6006/mcp`.
5. **`knowledge/`** is the judgement layer: why the rules exist, what is unresolved, what does not exist yet.

When two of these disagree, the earlier one wins, and the disagreement is a bug worth reporting.

## Connecting an agent

With `npm run dev` running:

```bash
claude mcp add --transport http storybook http://localhost:6006/mcp
```

That gives an agent the real component list, the real props and the real docs. It is the difference between an agent that reproduces the system and one that reinvents it badly.

## Before you write a component

Check that it does not already exist. The current catalogue:

| Component | Class | Use it for |
| --- | --- | --- |
| Pill | `.a-pill` | Classifying something that exists. Seven variants. |
| CTA | `.a-cta` | Actions and navigation. Six tiers. |
| Card | `.a-card`, `.a-brand-card` | Grouped content. |
| Panel | `.a-panel`, `.a-panel-card` | Composed sections on the brand ground. |
| Surface | `.a-surface` | The plain framed ground a brand expression sits on. |
| Forms | `.a-field` | Form input with a real label. Default, invalid and disabled states keep the same reusable field API. |
| Selection Buttons | `.a-segmented` | One choice from two to five peers. |
| Index row | `.a-index` | A numbered list that scans as a table of contents. |
| Table | `.a-table` | Specification and comparison data. No page of its own: it is used inside Logo and Partnership. |
| Type | `.a-display` through `.a-label` | The six roles. The only approved text sizes. |
| Logo | `.a-logo-stage`, `.a-versions` | Framing, sizing and reversing the supplied lockups. |
| Co-brand | `.a-cobrand-set`, `.a-cred-row` | The AWS partnership lockups and credential row. |
| Code Style Text | `.a-social-post`, `.a-code-block` | The engineering voice composed as an interactive LinkedIn post. |
| Letter Grafism | `.a-pattern-board`, `.a-pattern-tile` | The drawn letterform composition field. |
| Voice | `.a-voice`, `.a-voice-order` | Six traits and the outcome-first copy order. |
| Bullet list | `.a-bullets`, `.a-bullets__item` | The standard gradient marker. No page of its own: shown in Pill, In context. |
| Proof card | `.a-proof-cards`, `.a-proof-card` | One verified number in a gradient band. Never on a tinted panel. |
| Catalogue | `.a-catalog`, `.a-catalog__row`, `.a-catalog__use` | The house display for a full variant set. One row per variant, beside the job it does. |

## Supplied artwork

`assets/` holds the delivered brand files, extracted verbatim from the brand book and recorded in `assets/manifest.json`. These are never rebuilt, restretched, recoloured or reset in substitute type.

- **Lockups are not redrawn.** Do not place the Assembly and AWS logos next to each other yourself. Optical alignment is equal cap height, and matching image widths instead makes one mark read as borrowed.
- **There is no reversed co-brand file.** The reversal is `filter: brightness(0) invert(1)` on the same asset, so both marks including the AWS smile always turn white together and the two versions cannot drift apart.
- **Pattern tiles keep their 870:1081 ratio.** Use a tile whole, or crop it with `.a-pattern-tile--band`. Never stretch one to fit a box.
- **Three logo families, four fields each.** Only the colour and mono masters are real files. Both reversed states are the colour master under `filter: brightness(0) invert(1)`, so a reversed mark cannot drift from the one it reverses.
- **CLOUD SOLUTIONS is part of the descriptor lockup, not a caption.** Choose the logo family before scaling: descriptor at 256px and above, primary from 112px, symbol from 32px, and no mark below 32px.

## The rules that are not negotiable

**Colour.** Assembly Blue is the field, not an accent placed on a neutral. `accent-ai` marks GenAI and nothing else, and never marks it by hue alone: the word must be there too. Never place `text-brand` on `action-primary`.

**Type.** Rubik sets everything the reader sees, including every number. Secondary editorial statements step back in Light 300, never by getting smaller. Uppercase is reserved for the label role.

**Geometry.** 8px is the core radius everywhere. `--radius-full` is approved for actions and metadata tags only. Spacing comes off the 4px scale, and the lint enforces it.

**Actions.** One primary per surface. A CTA that navigates is an `<a href>`. A CTA that acts is a `<button>`. Never a div with a click handler.

**Focus.** `:focus-visible`, 2px `--focus-ring`, 2px offset. `outline: none` is never approved and the lint fails on it.

## The four markers

Every rule in `knowledge/` carries one. They are not decoration.

- `[Approved]` traces to a supplied master or a stated brand direction. Build on it.
- `[Derived]` is a consistent application of an approved rule. Build on it, and say so.
- `[Proposed]` is inferred from measurement and not signed off. Usable, but declare it when you use it.
- `[Conflict]` means two sources disagree. **Do not resolve it.** Record what you needed and move on. Resolving one quietly is making a brand decision without the authority to make it.

## Known problems, so you do not rediscover them

- Four semantic aliases are marked `[Conflict]`: the reference page declares them twice and disagrees with itself. See `knowledge/conflicts.md`.
- `#131318` and `#A7A7B4` are raw hex values in the dark theme with no primitive behind them. They should be promoted to named tokens.

## Stop at a gap

`knowledge/` closes every file with what it does not cover. Those are absences, not omissions. There is no screen reader testing, no forms validation pattern, no print production spec, no social format spec.

If the answer is not in the pack, it does not exist yet. Write the spec and get it approved. Do not infer one and ship it.
