# Assembly Accessibility

Version 1.7. Part of the Assembly brand system knowledge pack.

Marker convention is defined in `design_principles.md` section 0: `[Approved]`, `[Derived]`, `[Proposed]`, `[Conflict]`.

This file was the largest declared gap in the pack. Every ratio in it is measured from `tokens/tokens.source.json` by `scripts/test-contrast.mjs`, not estimated. The full table lives in `contrast-matrix.md` and regenerates on every test run, so a token change and its contrast consequence land in the same diff.

Target is WCAG 2.1 Level AA. AAA is noted where the system already clears it, and is not a requirement.

---

## 1. Contrast

### The measured position `[Approved]`

Thirty-two of the thirty-six measured pairs pass. The remaining four are decorative border exceptions, not readable text or control-label failures.

**Text is strong.** Every copy pair except one clears AA, and most clear AAA. `text-primary` on the page ground is 18.11:1. `text-brand`, which is Assembly Blue as a link colour, is 7.64:1 on white and still 6.98:1 on the tinted brand ground. Blue at #0028FF is a genuinely accessible brand colour, which is not true of most brand blues.

**The dark theme is stronger than the light theme.** Every dark pair passes except the two decorative borders. This is worth knowing because the light theme is the one that ships.

### The resolved text and GenAI decisions `[Approved]`

The two must-fix decisions were resolved on 2026-08-11 and removed from `contrast-exceptions.json`.

- **`text-muted` now uses `ink-450` on light grounds.** It measures 4.97:1 on white and 4.52:1 on ink-100. ink-400 remains available as a primitive but no longer sets readable metadata.
- **GenAI keeps the approved bright orange.** `accent-ai` remains amber-500 and rests as a 9% surface with amber text. `accent-ai-strong` uses amber-600 for a control boundary that clears 3:1 against white; the solid amber state uses ink text. The dark theme uses amber-400.

### The four accepted exceptions `[Derived]`

`border-subtle` and `border-brand` fail 1.4.11 in both themes, at 1.28:1 to 2.17:1. They are accepted because they are decorative separators and soft outlines, and 1.4.11 covers UI components and meaningful graphics rather than ornament. Every element they border is identifiable by fill, label and position without the stroke.

This exception has one condition, and it is the important part of this section: **a border may never be the only thing that identifies a control.** The `border-brand` alias intent still reads "label pills, focus outlines". The focus-outline half of that is wrong and must not be built. `focus-ring` exists, measures 6.42:1, and is the only approved focus indicator.

### Rules

- Body copy at any size uses `text-primary` or `text-secondary`. Both clear AAA on every ground. `[Approved]`
- `text-muted` is for text that is genuinely supplementary. It still clears AA at the smallest approved label size. `[Approved]`
- Never place `text-brand` on `action-primary`. Blue on blue is 1:1. `[Approved]`
- Colour pairs outside `contrast-matrix.md` are unmeasured and therefore unapproved. Add the pair to `PAIRS` in the test and measure it before shipping it. `[Approved]`

---

## 2. Focus `[Approved]`

The page already implements this correctly and it is now a rule rather than an accident.

- Indicator is `2px solid var(--focus-ring)` at `2px` offset. Measures 6.42:1 on the page ground and 5.84:1 inside a card, both clearing the 3:1 required by 1.4.11.
- Use `:focus-visible`, never `:focus`. A mouse click on a button must not draw the ring; a Tab key press must.
- `outline` is never set to `none` without a replacement indicator in the same rule. There is no exception to this.
- The offset is what makes the ring survive on both the white and the blue ground, so it is not optional styling.

---

## 3. Colour is never the only carrier `[Approved]`

The system leans hard on one colour, which makes 1.4.1 a live risk rather than a formality.

- `accent-ai` marks GenAI. It must always sit next to the word "GenAI" or an equivalent label, never mark a feature by hue alone.
- Pill variants encode taxonomy through their label text. The solid, soft and outline fills are emphasis, not meaning.
- The credential dots in the partner row are decorative. The credential name beside each one carries the information.
- Chart and data work must vary shape, label or position as well as hue. The blue ramp alone is not sufficient encoding.

---

## 4. Target size `[Proposed]`

WCAG 2.2 target size (2.5.8) requires 24 by 24 CSS pixels minimum for pointer targets.

- `.pill--micro` is 24px minimum height and clears this exactly, with no margin for error.
- `.cta` is 52px minimum height. `.pill--metric` is 44px. Both clear it comfortably.
- Interactive pills below 24px in either dimension are not approved. If a label needs to be smaller, it is not interactive.

Marked proposed because 2.2 conformance has not been stated as a target. The values are already met, so adopting it costs nothing.

---

## 5. Motion `[Approved]`

- The one transition is `.2s var(--ease)`. Nothing in the system animates for longer than 250ms, so no motion in the component layer can trigger vestibular issues.
- `prefers-reduced-motion: reduce` disables all transitions and smooth scrolling. This is implemented in `css/base.css` and is not opt-in per component.
- Nothing auto-plays, auto-advances or loops. There is no carousel in this system, deliberately.

---

## 6. Type and reading `[Derived]`

- Body is 16px minimum at 145% line height. The `text-body` role sets both.
- Never set text below 10px. `text-label` bottoms out at 10px and is uppercase with 0.2em tracking, which is the smallest legible configuration in the system.
- Line length caps at roughly 65 to 70 characters. The existing `max-width` caps in the component CSS carry this.
- Uppercase is reserved for the label role. Uppercase running copy is not approved, for reading speed as much as for style.
- Text must survive 200% zoom without loss of content (1.4.4) and 400% reflow to a single column (1.4.10). The container and breakpoint tokens already produce this.

---

## 7. Semantics `[Approved]`

The component layer ships markup, so the markup is part of the system.

- A pill is a `<span>`. It classifies, it does not act. If it needs to be clickable it is a CTA, not a pill.
- A CTA that navigates is an `<a href>`. A CTA that acts is a `<button>`. Never a `<div>` with a click handler.
- Icon-only controls carry an `aria-label`. Decorative SVG carries `aria-hidden="true"` and an empty `alt`.
- Tables use `<th>` with a scope. The spec tables in the reference page already do.
- One `<h1>` per page. The heading level never skips.
- Form fields have a real `<label for>`. Placeholder text is not a label, and the placeholder colour is ink-400, which fails contrast anyway.

---

## Applying this file

1. Run `npm run test:contrast` before shipping a token change. It rewrites `contrast-matrix.md`, so review the diff rather than the console.
2. Run `npm run test:a11y` before shipping a component change. It runs axe against every story.
3. A new colour pair is unapproved until it is in `PAIRS` and measured.
4. An exception needs a reason, a severity and an owner. An exception without a proposed fix is a decision to ship the failure permanently, so write one.
5. When a `must-fix` exception is resolved, remove it. The test fails on stale exceptions, which is how the file stays honest.

---

## Not in this system

These are absences, not omissions. If the answer is not here it does not exist yet.

- **No screen reader testing.** Nothing has been driven with VoiceOver, NVDA or JAWS. axe catches roughly a third of real issues and nobody should claim otherwise.
- **No keyboard walkthrough of composed pages.** Individual components are keyboard operable. Tab order across a full assembled page has not been checked.
- **No cognitive accessibility position.** Plain-language targets, reading level and error recovery are unaddressed.
- **No accessibility statement.** No conformance claim has been published and none should be until screen reader testing exists.
- **No forms validation pattern.** Error states, required-field marking and error summaries are not designed. `field` ships the input and the label only.

---

## Companion files

- `README.md` for the marker convention and how to apply the pack
- `design_principles.md` for contrast and colour behaviour as design intent
- `brand_identity_craft.md` for the colour architecture these ratios measure
- `typography.md` for the role ramp referenced in section 6
- `conflicts.md` for the token disagreements found between the page and its own export
- `contrast-matrix.md` for the generated measurements
