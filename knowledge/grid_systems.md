# Assembly Grid Systems

Version 1.7. Part of the Assembly brand system knowledge pack.

Marker convention is defined in `design_principles.md` section 0: `[Approved]`, `[Derived]`, `[Proposed]`, `[Conflict]`.

Read the caveat in "Not in this system" before using this file for print or deck layout. Assembly has a strong spacing system and a strong composition law. It does not have a documented column grid.

---

## 1. The base unit

**4px is the grid base.** `[Approved]`
Every gap and margin in the system is one of eleven values. Nothing is spaced with a number that is not on this list.

| Token | CSS var | Value | Named use |
| --- | --- | --- | --- |
| `space-1` | `--s1` | 4px | Grid base |
| `space-2` | `--s2` | 8px | |
| `space-3` | `--s3` | 12px | |
| `space-4` | `--s4` | 16px | |
| `space-5` | `--s5` | 20px | |
| `space-6` | `--s6` | 24px | |
| `space-7` | `--s7` | 28px | |
| `space-8` | `--s8` | 36px | |
| `space-9` | `--s9` | 48px | |
| `space-10` | `--s10` | 72px | Section rhythm |
| `space-11` | `--s11` | 96px | Section rhythm |

The scale is not a strict geometric progression. Steps 1 to 6 move in 4px increments, then the scale opens up. This is deliberate: fine control where components need it, coarse jumps where sections need it.

**Corner radius scale.** `[Approved]`

| Token | Value | Use |
| --- | --- | --- |
| `radius-core` | 8px | Approved core UI corner. The default everywhere. |
| `radius-300` | 10px | Inputs |
| `radius-400` | 16px | Cards inside a panel |
| `radius-600` | 24px | Panels |
| `radius-full` | 999px | Actions and metadata tags `[Conflict]` |

`radius-full` conflicts with the stated rule that component corners are controlled rather than capsular. See `design_principles.md` section 8. Do not resolve it inside a layout.

---

## 2. Container and gutter

**One container, one gutter.** `[Approved]`

| Token | Value | Behaviour |
| --- | --- | --- |
| `--container` | 1200px | Maximum content width |
| `--gutter` | 40px | Page inset, dropping to 24px at 720px and below |

```css
.wrap { width: min(100%, var(--container)); margin: 0 auto; padding: 0 var(--gutter); }
@media (max-width: 720px) { :root { --gutter: 24px } }
```

---

## 3. The document grid

The grid the brand reference itself runs on. One layout for every section: a rail names the section's role and the argument runs in a single measured column beside it. `[Derived]`

```css
.two-col {
  display: grid;
  grid-template-columns: 160px minmax(0, 1fr);
  gap: 48px;
  align-items: start;
}
.col-side { position: sticky; top: 88px }

@media (max-width: 900px) {
  .two-col { grid-template-columns: minmax(0, 1fr); gap: 20px }
  .col-side { position: static; flex-direction: row; align-items: baseline }
}
```

The rail is a fixed 160px, not a fraction. It holds a label pair and never holds content, so it does not need to flex. Below 900px it stops being a column and becomes an inline label above the content.

**Card grids.** `[Derived]`

| Class | Columns | Collapse |
| --- | --- | --- |
| `.g2` | 2 | 1 column at 620px |
| `.g3` | 3 | 2 columns at 900px, 1 at 620px |
| `.g4` | 4 | 2 columns at 900px, 1 at 620px |

Gap is `--s4` (16px) on all three.

**Section rhythm.** `[Derived]`
96px of vertical padding per section, dropping to 72px at 720px and below, with a 1px hairline rule between sections. The first section carries no top rule.

---

## 4. Measure

**Line length is capped by rule, not by accident.** `[Derived]`

| Element | Cap |
| --- | --- |
| Body paragraph | 66ch |
| Entry heading | 46ch |
| Supporting "Where:" line | 62ch |

Caps are set in `ch` so they follow the type size rather than fighting it. Paragraphs run the width of the column, the same measure the images and tables beside them use. Cards keep their own tighter caps.

---

## 5. The composition grid

This is the real Assembly layout law, and it governs slides and documents rather than web pages. `[Approved]`

**Statement on one side, proof on the other.**
The recurring structure is asymmetric but controlled: one dominant message, one organised evidence field, one anchored signature line.

**The split holds between 50/50 and 55/45.**
The statement side takes between half and 55% of the surface. Past 55% the proof field stops reading as a structured surface and becomes a margin.

**Edge anchoring.**
Content aligns to a strong outer margin and pattern modules stay flush. The pattern field runs to the edge of its side rather than floating inside it, which is what makes the split read as deliberate.

**Empty space is doing work.**
The Assembly Cloud gap between narrative and proof, and the gutters inside the pattern field, are composition rather than padding. Filling every available area is the fastest way to make the system look generic.

**Safe zone.**
Titles, speakers and partner marks stay inside the clear half. This is stated qualitatively in every source. There is no numeric margin. See `specs_reference.md`.

---

## 6. The pattern module

The pattern has its own grid, and it is a tile grid rather than a column grid. `[Approved]`

| Rule | Detail |
| --- | --- |
| Module size | 537 x 668, portrait |
| Combination | Complete modules only. Partial modules and stretched tiles both break the letterform geometry. |
| Gutters | White gutters between modules are part of the composition, not padding. |
| Placement | Anchor to an edge and preserve a clear content zone. |
| Source | The supplied SVG is the master. Live type is never a substitute for it. |

Crops in the reference are positioned by percentage rather than by pixel offset, so the page cannot drift from the master when the master is replaced.

---

## 7. Web breakpoints

**Recorded conflict: two breakpoint sets.** `[Conflict]`

| Source | Breakpoints | Status |
| --- | --- | --- |
| Website redesign audit, section 8 | 1200 / 992 / 768 / 480 | Marked `[ASSUMPTION]` in the audit itself |
| Built site, `projects/assembly/site/css/styles.css` | 992 / 768 / 560 | Shipping |
| Brand reference page | 900 / 720 / 620 | Shipping |

Three sets, none of them agreed as the brand standard. The 12-column desktop grid described in the audit was never confirmed either; the audit labels it an assumption and the built site does not implement it. Do not cite any of these as "the Assembly grid".

The reference page's own breakpoints (900 / 720 / 620) are chosen from its content, not from device widths: 900 is where the sticky rail stops earning its column, 720 is where the gutter has to narrow, 620 is where multi-column card grids stop working. That reasoning is reusable even though the numbers are not a standard.

---

## Applying this file

1. **Every gap is a token from section 1.** If the number you want is not on that list, round to the nearest one that is. Eleven values is the whole vocabulary.
2. **Web work starts at 1200 container, 40 gutter**, with the collapse points in section 3. Do not invent a breakpoint; the system already has three disagreeing sets.
3. **Slide and document work starts at the split.** Set 50/50 to 55/45 first, anchor content to a strong outer margin, then place the pattern flush to its edge.
4. **Protect the empty space.** The Cloud gap between statement and proof is the composition. If a stakeholder asks to fill it, that is the conversation, not a quick fix.
5. **Pattern goes in as whole tiles, cropped by percentage.** Never a partial module, never a stretch.
6. **Cap the measure.** 66ch body, 46ch heading. Long lines are the fastest way to make a considered page look untended.
7. **If you need a real column grid, you are past what this system documents.** Write the spec and get it approved rather than deriving one from the breakpoints in section 7.

---

## Not in this system

Absent from every source in the Assembly repository. Do not infer these.

- **No baseline grid and no vertical rhythm rule.** Line heights are set per type role and do not resolve to a common baseline unit. Nothing in the system snaps to a leading grid.
- **No modular grid.** There is no documented modular or compound grid anywhere: no module count, no field division, no cross-alignment rule.
- **No agreed column count.** The 12-column web grid exists only as an assumption in an audit that says so. Print and deck layouts have no column count at all.
- **No margins for the named formats.** Neither the 1920 x 1080 institutional format nor the 1400 x 1980 case-study format has a documented margin, gutter or column. Only the canvas size and the split ratio are recorded.
- **No numeric safe zone.** "Inside the clear half" is the entire specification.
- **No rule for when to break the grid.** This was requested as a field and has no source. Nothing in the system states when an exception is permitted, who approves one, or how it is marked. Inventing one here would be the exact failure mode the marker convention exists to prevent.
- **No responsive rules for the pattern module.** How a 537 x 668 tile behaves at mobile width is undocumented.
- **No print grid, gutter or column spec of any kind.** See `specs_reference.md` for the full extent of the print gap.

---

## Companion files

- `design_principles.md`: space and composition as rules rather than measurements
- `typography.md`: the ramp the measure caps are sized against
- `specs_reference.md`: canvas formats and measured artefact geometry
- `brand_identity_craft.md`: the pattern master and its construction
