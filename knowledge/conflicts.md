# Assembly token conflicts

Version 1.7. Part of the Assembly brand system knowledge pack.

`brand-system.html` declares its semantic aliases twice: once as a rendered table in the Color section, and once as a JavaScript array powering the token exporter. Building this repo required reading both, and they disagree in four places.

Per rule 3 of the pack, a conflict is recorded rather than resolved. Each entry below states both readings, what the build currently emits, and why. None of these are signed off.

---

## 1. `surface-raised`, dark mode `[Conflict]`

| Source | Value |
| --- | --- |
| Alias table in the page | `#131318` |
| Exporter array | `ink-950` (`#08080B`) |
| **Build emits** | `#131318` |

`ink-950` is also `surface-page` in dark mode. Taking the exporter reading would make a card the exact colour of the page behind it, and every panel in the dark theme would lose its edge. The table reading is the one that works.

The cost of the table reading is that `#131318` is a raw hex with no primitive behind it. It is the only value in the system that is not a token. It should become `ink-925` or similar.

---

## 2. `text-secondary`, dark mode `[Conflict]`

| Source | Value |
| --- | --- |
| Alias table in the page | `#A7A7B4` |
| Exporter array | `blue-300` (`#88A4FF`) |
| **Build emits** | `#A7A7B4` |

`blue-300` is already `text-brand` in dark mode. Taking the exporter reading would give secondary copy and links the identical colour, which collapses two meanings the system separates everywhere else.

Same cost as above: `#A7A7B4` is a raw hex with no primitive behind it.

---

## 3. `border-subtle` `[Conflict]`

| Source | Light value |
| --- | --- |
| Alias table in the page | `ink-900` at 12% |
| Exporter array | `ink-900`, opacity dropped |
| Page CSS `--rule` | `rgba(0,40,255,.18)`, which is `blue-700` at 18% |
| **Build emits** | `ink-900` at 12% |

Three readings, three different colours. The exporter reading is plainly a bug: a fully opaque `ink-900` hairline would be an 18:1 black rule on white.

The genuine disagreement is between the table and the CSS: the documented alias is a neutral grey tint, and the page actually draws a blue tint. The blue rule is visibly what the reference page looks like, so the implemented value may be the intended one and the table may be the error. This needs a look, not a guess.

---

## 4. `border-brand` `[Conflict]`

| Source | Light value |
| --- | --- |
| Alias table in the page | `blue-700` at 35% |
| Exporter array | `blue-700`, opacity dropped |
| Page CSS `--rule-strong` | `rgba(0,40,255,.34)`, which is 34% |
| **Build emits** | `blue-700` at 35% |

35% against 34% is a rounding difference and not worth a decision. The exporter dropping opacity is the same bug as above.

Recorded because the alias intent string says "label pills, focus outlines", and the focus-outline half is wrong. `border-brand` measures 1.98:1 and cannot be a focus indicator. See `accessibility.md` section 2.

---

## Two smaller drifts, not conflicts

- `blue-500` is described as "Charts, secondary fills" in the rendered token grid and "Gradient mid stop" in the exporter. Both uses are reasonable. The description needs merging, the value does not move.
- `amber-500` `#FF8100` is used throughout the page CSS but never appears as a swatch in the Contextual accents grid, which shows only `amber-400` and `violet-500`. The token exists in the exporter, so this is a documentation omission rather than a disagreement.

---

## Resolving these

The build currently emits the table reading in all four cases, which is recorded in `tokens/tokens.source.json` as `resolution: "table"` with a note. Changing any of them is a one-line edit to that file followed by `npm run build:tokens`.

Two of the four resolutions introduce raw hex values that no primitive backs. Whichever way the conflicts are settled, `#131318` and `#A7A7B4` should be promoted to named ink primitives so the dark theme is built from tokens like the light theme is.

---

## Companion files

- `README.md` for the marker convention
- `accessibility.md` for the contrast consequences of the border decisions
- `brand_identity_craft.md` section 8 for the colour architecture these aliases sit in
