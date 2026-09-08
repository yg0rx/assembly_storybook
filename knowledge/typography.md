# Assembly Typography

Version 1.7. Part of the Assembly brand system knowledge pack.

Marker convention is defined in `design_principles.md` section 0: `[Approved]`, `[Derived]`, `[Proposed]`, `[Conflict]`.

---

## 1. Families

**One dominant family, three supporting families, each with one job.** `[Approved]`

| Token | Family | Classification | Job |
| --- | --- | --- | --- |
| `font-brand` | Rubik | Sans serif, neo grotesk | Everything the reader sees: display, title, intro, body, proof numbers, interface |
| `font-editorial` | Nunito Sans | Sans serif, humanist | Longer editorial passages where a softer reading rhythm helps |
| `font-partner` | Amazon Ember | Sans serif | Partner voice inside AWS-led or AWS-certified co-brand contexts only |
| (no token) | Helvetica Neue | Sans serif, grotesk | Existing production documents and compatibility with current assets |

The three supporting families are never promoted. Each sets one thing.

**Monospace is a utility, not a family.** `[Approved]`
Monospace exists for the code motif and for token names. It carries no brand weight and is never promoted to a brand family.

**Partner marks are set in the partner's own face.** `[Approved]`
Production co-brand material sets a partner wordmark in that partner's typeface, which is why Amazon Ember is licensed at all. This is the same rule that governs partner logotypes in `brand_identity_craft.md` section 7.

---

## 2. The scale laws

**Rubik sets every number.** `[Approved]`
Display, title, intro, body, proof numbers and system labels are all Rubik. Proof numbers in particular: a second family for figures is the most common way a system like this starts to drift.

**Hierarchy moves by weight, not by size.** `[Approved]`
A secondary editorial statement steps back to Rubik Light 300. It does not get smaller.

- Primary, Rubik 400: "Infrastructure that grows as fast as you do."
- Secondary, Rubik 300: "Reliability, security and cost control for the next 10x of growth."

Shrinking the secondary line makes it look like a caption. Lightening it keeps it editorial.

**One connective label style.** `[Approved]`
10 to 11px, weight 500, `.08em` to `.2em` tracking, uppercase. Section eyebrows, metadata, micro pills and the signature line all use it. There is no second label style.

**Display tracking runs negative.** `[Approved]`
Between -5% and -7% at display and title sizes. Rubik at display size already carries the width the brand needs; the tracking is what gives it the compression.

**No second display voice.** `[Approved]`
A geometric display face was trialled for headlines and removed. Two display voices halve the recognition value of each.

---

## 3. The master ramp

Six roles. These are the institutional master values, sized for a slide read across a room. `[Approved]`

| Role | Token | Size | Line | Tracking | Weight | Sample |
| --- | --- | --- | --- | --- | --- | --- |
| Display | `text-display` | 96 to 154px | 90% | -6.5% | 400 | Founder momentum. |
| Title | `text-title` | 48 to 108px | 95% | -5.5% | 400 | Clear outcomes. |
| Intro | `text-intro` | 20 to 31px | 120% | -2.5% | 300 | Architecture that lasts beyond launch. |
| Body | `text-body` | 16 to 20px | 145% | -1% | 400 | Make complexity useful and easy to act on. |
| Proof number | `text-proof` | 40 to 72px | 100% | -5% | 700 | 150+ |
| System label | `text-label` | 10 to 12px | 120% | +20% | 500 | WE ARE SPECIALISTS IN CLOUD SOLUTIONS |

`text-label` is the only role with positive tracking, and it is the only role that is always uppercase.

---

## 4. The documentation ramp

The brand reference page is a worked application of the master ramp, scaled down because a reference is read at arm's length and a slide is read across a room. Four steps and three utilities. No size is set anywhere else on the page: if a thing needs a size, it uses one of these. `[Derived]`

| Element | Size | Line | Tracking | Weight | Maps to |
| --- | --- | --- | --- | --- | --- |
| `h2` | `clamp(32px, 5vw, 56px)` | 0.92 | -1.6px | 400 | `text-title` |
| `.side-kicker` | 30px (20px under 900px) | 0.9 | -0.5px | 400 | `text-title` |
| `.lede` | 20px | 32.5px | -0.2px | 300 | `text-intro` |
| `h3` | 18px | 28px | -0.1px | 500 | `text-body` |
| `body` | 16px | 26px | 0 | 400 | `text-body` |
| `.small` | 14px | 22px | 0 | inherit | `text-body` |
| `.tiny` | 12px | 19px | 0 | inherit | `text-body` |
| `.eyebrow` | 10px | 1 | `.08em` uppercase | 500 | `text-label` |
| `.export-stat b` | `clamp(40px, 4.6vw, 72px)` | 1 | -0.05em | 700 | `text-proof` |

Note that `.export-stat b` reproduces `text-proof` exactly. That is deliberate: the proof number is the one role that is not scaled down for the page, because a proof number is the thing a reader is meant to stop on.

---

## 5. Weights

**Four weights carry roles.** `[Approved]`

| Weight | Name | Role |
| --- | --- | --- |
| 300 | Light | Intro, secondary editorial statements |
| 400 | Regular | Display, title, body, the default everywhere |
| 500 | Medium | `h3`, system labels, table first columns, emphasis inside body |
| 700 | Bold | Proof numbers only |

**600 is ratified with no role.** `[Approved]`
Rubik SemiBold is licensed and present as a family weight, and it has no assigned job. Nothing is promoted to 600 without a role to sit in. If you find yourself reaching for 600, the answer is almost always 500.

**Recorded conflict: Bold and SemiBold in the deck.** `[Conflict]`
The type system documents Light, Regular and Medium as the hierarchy device and assigns Bold to proof numbers only. The workshop deck in circulation uses Rubik Bold on value-prop labels and SemiBold on the words `CLOUD SOLUTIONS` in the footer line. Neither placement is documented. Both are recorded and neither is resolved here.

---

## 6. Retired faces

**Do not reintroduce.** `[Approved]`

| Face | Status | Why |
| --- | --- | --- |
| Exo / Exo 2 | Retired | Trialled as a geometric display face and removed. Two display voices halve the recognition value of each. |
| Poppins | Retired | Was the UI and eyebrow face in an earlier web direction. Superseded by Rubik at weight 500. |

Both files remain in `brand/assembly/assets/` as legacy artefacts. Their presence on disk is not permission.

**Recorded conflict: the built website.** `[Conflict]`
The Assembly website at `projects/assembly/site/css/styles.css` runs a four-face system that contradicts the brand book directly:

```css
--font-body:  "Rubik", sans-serif;
--font-ui:    "Poppins", sans-serif;
--font-stat:  "Exo 2", sans-serif;
--font-strap: "Nunito Sans", sans-serif;
```

In that system, eyebrows are Poppins Medium at 14px with +8% tracking, stat numerals are Exo 2 ExtraBold at 64px, and the footer strap is Nunito Sans ExtraLight. The brand book is the newer authority and explicitly retires Exo and Poppins. The site has not been migrated. Both states are recorded; migrating the site is a separate piece of work.

---

## 7. Applied rules

**The signature line is never running copy.** `[Approved]`
`WE ARE SPECIALISTS IN CLOUD SOLUTIONS` is always uppercase, always `text-label`, and never set in title case or folded into a paragraph.

**The core signature is never re-typed in a substitute family.** `[Approved]`
`CLOUD DONE WITH INTENT`, uppercase, always Rubik.

**The wordmark is never rebuilt from live type.** `[Approved]`
The Assembly wordmark carries four drawn departures from stock Rubik. Setting the name in the typeface loses all four at once. See `brand_identity_craft.md` section 2.

**Specimens are set in their own role.** `[Derived]`
When documenting the ramp, each sample is set at its own role rather than at a common preview size, so the ramp is visible inside the table instead of described beside it.

---

## Applying this file

1. **Set everything in Rubik first, numbers included.** Justify any other family against section 1 before you use it. Three of the four have a single narrow job.
2. **Pick a role, not a pixel size.** Choose from the six in section 3. If nothing fits, the text does not have a job yet, which is a content problem rather than a type problem.
3. **To step something back, drop to 300.** Never shrink it. Shrinking turns an editorial line into a caption.
4. **Any uppercase label is `text-label`.** There is no second one. If you are about to invent an eyebrow treatment, you are about to break the thing that ties the surfaces together.
5. **Do not use weight 600.** It is licensed and roleless. The answer is almost always 500.
6. **Do not reintroduce Exo or Poppins**, whatever the font files sitting in `brand/assembly/assets/` suggest. Presence on disk is not permission.
7. **Never re-type the wordmark.** Place the supplied SVG. See `brand_identity_craft.md` section 2 for what typing it loses.

---

## Not in this system

Absent from every source in the Assembly repository. Do not infer these.

- **No optical sizing rules.** Rubik is a static family here, with no optical size axis in use and no guidance on adjusting tracking or weight by rendered size beyond the ramp's own size bands.
- **No baseline grid and no vertical rhythm rule.** Line heights are set per role and do not resolve to a common baseline unit. There is no leading grid.
- **No rag, hyphenation, widow or orphan rules.** The reference sets `text-wrap: balance` on headings and caps measure by `ch`, but neither is stated as a brand rule.
- **No minimum or maximum type size for print.** All sizes in this file are screen pixels. There is no point-size equivalent and no print type spec.
- **No language or script coverage statement.** Rubik supports Latin, Cyrillic and Hebrew; nothing records which of those Assembly needs or what happens outside them.
- **No fallback stack rationale.** `Arial, sans-serif` follows Rubik in the CSS with no stated reason and no metric-matching check.
- **No licensing or embedding terms** for any of the four families.

---

## Companion files

- `design_principles.md`: the reasoning layer, hierarchy and contrast laws
- `grid_systems.md`: spacing scale, measure caps, the document grid
- `specs_reference.md`: formats and measured artefact geometry
- `brand_identity_craft.md`: wordmark construction and the drawn letterforms
