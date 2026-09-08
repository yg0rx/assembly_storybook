# Assembly Specs Reference

Version 1.7. Part of the Assembly brand system knowledge pack.

Marker convention is defined in `design_principles.md` section 0: `[Approved]`, `[Derived]`, `[Proposed]`, `[Conflict]`.

**Read this first.** This is the thinnest file in the pack, and the gap is the point. Assembly has measured canvas sizes and measured artefact geometry, taken off the supplied masters. It has no production specification: no bleed, no DPI, no CMYK, no social formats. Everything below section 4 is a list of what does not exist. Treat that list as binding.

---

## 1. Canvas formats

Measured off the supplied masters. `[Approved]`

| Format | Size | Use |
| --- | --- | --- |
| Institutional presentation | 1920 x 1080 | 16:9 deck, chapter transitions and proof slides |
| Customer case study | 1400 x 1980 | Portrait document, one story per spread |
| Statement / proof split | 50/50 to 55/45 | Preferred ratio in both formats |
| Pattern tile | 537 x 668 | The portrait module |
| Email signature board | 3936 x 329 | Three states on one board |
| Slide-deck component board | 11267 x 11745 | Drawn at 1920 x 1080 slide scale |

All values are unitless artboard coordinates from the source SVG and PDF masters. They are not points, not millimetres, and carry no stated resolution.

---

## 2. Digital minimums

The application floors are Assembly system decisions approved on 2026-08-11. They sit above the measured asset failure points, which remain useful only as diagnostic evidence.

| Mark | Assembly application floor | Measured failure point | Action below the floor |
| --- | ---: | ---: | --- |
| Descriptor lockup | 256px | 220px | Switch to the primary lockup |
| Primary lockup | 112px | 88px | Switch to the symbol |
| Symbol | 32px | 24px | Do not place the mark |
| Descriptor co-brand | 256px | 220px | Switch to the logotypes-only lockup |
| Logotypes-only co-brand | 112px | 88px | Switch to the compact co-brand |

The 256 / 112 / 32px sequence is the production rule. The 220 / 88 / 24px sequence records where fine detail begins to collapse and must never be presented as an approved application size.

---

## 3. Measured artefact geometry

Taken off two masters that arrived after the brand book was written: the email signature the sales team runs, and the workshop deck with its component sheet. These are measurements of artwork in circulation, not specifications. Several of them are flagged against the rules.

### Email signature, `assembly-email-signature.svg` `[Approved]` as measurement

| Part | Measured | Status against the system |
| --- | --- | --- |
| Photo plate | 127.53 x 147.4, `#0028FF` fading to zero alpha upward over eight stops | Official blue, holds |
| Name | Rubik Regular 23.23 | Holds |
| Role line | Rubik Medium 23.23, `#0022FD` | `[Conflict]` off-brand blue |
| Contact lines | Medium key, Regular value, on M, T and W | Holds |
| Booking link | Rubik Medium 22.44, underlined, `#0022FD` | `[Conflict]` off-brand blue, and not approved language |
| Symbol | 38.03 square | Holds |
| Partner badge | 214.81 x 52.7, one 25.37 radius top right, ink plate over an orange plate offset 6.39 left and 8.78 up | `[Conflict]` undocumented |

The badge in the master reads "Well-Archicted". It is a typo, it is on a signature currently in circulation, and it is the one item in this file worth fixing today rather than deciding on later.

### Workshop deck, `assembly-slide-deck-components.svg` `[Approved]` as measurement

| Element | Measured | Status against the system |
| --- | --- | --- |
| Canvas | 1920 x 1080 | Matches the institutional format |
| Ground | `#0022FF` | `[Conflict]` off-brand blue |
| Pattern crop | 35% opacity, bleeding off one edge | Approved module |
| Co-brand row hairline | 1.62 wide, 53.65 tall, between each mark | `[Conflict]` undocumented |
| Footer line | Uppercase, SemiBold on `CLOUD SOLUTIONS`, `#0009FF` | `[Conflict]` weight and blue both undocumented |
| Speaker plate | 205.06 x 177.42, and 255.91 x 221.41 on the profile slide | Same device as the signature |
| Body ink | `#161615` | Core Ink, holds |

### Deck CTA models `[Conflict]`

Four capsule instances, none agreeing with the 8px core radius rule and none agreeing with each other.

| Model | Size | Radius | Share of height | Label |
| --- | --- | --- | --- | --- |
| Solid | 613.95 x 147.97 | 59.8 | 40.4% | Regular 81.97 |
| Outline | 723.36 x 178.33 | 52.83 | 29.6% | Regular 61.19 |
| Merged, outer | 1947.16 x 316.65 | 115.51 | 36.5% | Regular 108.65 |
| Merged, inner | 653.24 x 186.79 | 69.31 | 37.1% | Regular 108.68 |

The merged model is the outline model enlarged with the solid model dropped inside it, which is why it works: it is one component, not two glued together. All four share a single fill, `#0000FA` to `#000000` left to right, and the same fill draws the rule between the value props below. In every one the URL splits into `assembly.cloud` Regular and `/genai` Medium.

### Value-prop pair `[Approved]` as measurement

A blue numeral at 127.87 leads a Bold label and a Regular body. The pair is separated by an 11.03 rule carrying the CTA gradient.

### Credential marker `[Approved]` as measurement

19 square with two opposite corners cut at 6.07, which is 32% of the side. That geometry is the wordmark's cut logic reduced to chip size, and it is the strongest part of the device. The five colours it carries are not in the palette. See `brand_identity_craft.md` section 8.

---

## 4. Safe zone

**The entire specification.** `[Approved]`

> Titles, speakers and partner marks stay inside the clear half.

Co-brand marks use the upper-left opening position or the lower-left closing position. Copy is never placed across active glyph detail.

There is no numeric safe margin anywhere in the system. This qualitative sentence is all that exists.

---

## 5. Token export formats

What the system can currently hand to a build, generated live from the reference page rather than maintained by hand. `[Derived]`

| Format | Filename | Contents |
| --- | --- | --- |
| CSS variables | `assembly-tokens.css` | `:root` plus a `[data-theme="dark"]` block |
| JSON, W3C DTCG | `assembly-tokens.json` | Design Tokens Community Group format |
| Tailwind v4 | `assembly-theme.css` | `@theme` block |
| Figma variables | `assembly-figma-variables.json` | Primitives and Semantic collections, Light and Dark modes |

Counts at version 1.7: 36 primitives, 6 type roles, 13 semantic aliases, 2 themes per alias.

### Known defects in the generated exports `[Conflict]`

Found by loading `assembly-tokens.css` into a blank page and consuming it. Patch these on the way in until the serialiser is fixed.

| Defect | Effect | Correct value |
| --- | --- | --- |
| The six `--text-*` tokens carry a size **range**, not a size | `font: var(--text-display)` serialises as `400 96/**/-154px/90%` and resolves to 16px, weight 400, normal leading. It silently does nothing. | Pick one end of the range per breakpoint. The ranges are in `typography.md` section 3. |
| `--font-partner` ships as `'Amazon Ember'` | The embedded family is **Amazon Ember Display**. The token falls through to the generic sans-serif. | `'Amazon Ember Display', sans-serif` |
| `surface-raised` dark exports as `ink-950` | Raised surfaces collapse into the page ground in every dark theme. | `#131318` |

Everything else consumes correctly: `action-primary`, `action-primary-fg`, `focus-ring`, `radius-*`, all `space-*` and `font-brand` all resolve as documented.

---

## Applying this file

1. **For a canvas size, use section 1.** Those six are measured off the masters. Everything else is a size someone chose once.
2. **For a logo size, use section 2.** Below a minimum, change version rather than scale down. That is what the compact and primary versions are for.
3. **For anything print or social, stop.** The specification does not exist. Do not convert the pixel figures here into millimetres, do not assume 300 DPI, and do not generate a CMYK breakdown. Write the spec and get it approved.
4. **When rebuilding an artefact from section 3, read the status column first.** Rows marked `[Conflict]` are defects in circulation, not precedent to copy forward.
5. **Fix the badge.** The partner badge on the live email signature reads "Well-Archicted". It is the one item in this file worth acting on today.
6. **When someone asks for the safe zone in numbers, say there isn't one.** "Inside the clear half" is the entire specification, and inventing a margin here would make it look like there is more system than there is.

---

## Not in this system

This is the substantive content of this file. Every item below was searched for across both working directories and does not exist in any markdown, CSS, HTML, SVG or PDF source. Do not infer, estimate or generate any of them.

### Print production: nothing exists

- **No bleed values.** The phrase "full-bleed" appears as layout language only. There is no 3mm, no 0.125in, no bleed figure of any kind.
- **No trim size, crop marks or registration marks.**
- **No safe margin in millimetres or inches.**
- **No DPI or PPI.** Zero mentions across the entire repository.
- **No CMYK breakdown for any brand colour.** The system is RGB hex only, including the two official values.
- **No Pantone or spot colour reference.**
- **No paper stock, finish, ink limit or colour-management profile.**
- **No print type size spec.** All typography is stated in screen pixels.

### Social and digital delivery: nothing exists

- **No social formats.** No 1080 x 1080, no 1200 x 630, no 1080 x 1920. No LinkedIn, Instagram, X or YouTube specification.
- **No Open Graph or share-card spec.** One `og-cover.svg` exists at `projects/assembly/site/assets/` and its dimensions are undocumented.
- **No favicon or app-icon spec.** No sizes, no simplified mark, no monochrome variant.
- **No email template spec** beyond the measured signature above.
- **No video, motion or presentation-export spec.**

### Asset management: nothing exists

- **No file-naming convention.**
- **No folder structure standard for delivery.**
- **No versioning scheme for assets** (the brand book versions itself; the assets do not).
- **No asset request or approval process.**

### What to do instead

If a print or social deliverable is required, the honest answer is that the specification has to be written, not looked up. Derive nothing from this file except the canvas formats in section 1 and the digital minimums in section 2. Anything else presented as an Assembly production spec is invented.

---

## Companion files

- `design_principles.md`: the marker convention and the reasoning layer
- `typography.md`: the type ramp, in screen pixels only
- `grid_systems.md`: spacing, container and the composition law
- `brand_identity_craft.md`: logo geometry, clear space, colour architecture
