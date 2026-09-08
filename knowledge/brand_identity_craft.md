# Assembly Brand Identity Craft

Version 1.7. Part of the Assembly brand system knowledge pack.

Marker convention is defined in `design_principles.md` section 0: `[Approved]`, `[Derived]`, `[Proposed]`, `[Conflict]`.

Every number in this file was measured off the supplied construction file rather than estimated from a render, so the mark can be rebuilt or checked without opening Illustrator.

---

## 1. Symbol construction

**A 45 degree diagonal, a square footprint, and the numeral 01 inside.** `[Approved]`

| Measure | Value |
| --- | --- |
| Diagonal | Exactly 45.0 degrees (dx 267.25, dy -267.25) |
| Bounding box | Square to within 0.05% |
| Hidden detail | The numeral `01`. The counter reads as the zero, the right stem as the one. |

The diagonal is the same angle the wordmark cuts its terminals on, which is what ties symbol and wordmark together. The `01` is meant to be found on a second look and reads as a rising ascension. It is never emphasised, outlined or coloured separately.

**Two corrections to earlier documentation.** `[Approved]`
Earlier drafts recorded the diagonal as 5 degrees and the interior detail as "a number one". Both were wrong and both are corrected above from the source artboard. Anything citing 5 degrees is stale.

---

## 2. Wordmark construction

**Three cut angles, not one, and each is doing a different job.** `[Approved]`

| Letters | Cut | Why |
| --- | --- | --- |
| `a` and both `s` | 45 degrees | Matches the symbol's diagonal |
| `b` and `l` ascenders | 30 degrees | Shallower, so the tall strokes do not turn into arrows |
| `e` and `y` | Their own steeper cuts | |

**Four deliberate departures from a stock face.** `[Approved]`
The modified `a`, the double `s` drawn to read as moving, the personalised `e`, and the personalised `m` anchoring the rhythm between the open counters. Re-typing the name in any available font loses all four at once.

**Never rebuild the mark from live type.** `[Approved]`
This follows directly from the above. Closing any of the open counters turns a designed letterform back into a default one.

---

## 3. Lockup ratios

Two approved versions. Both preserve a square symbol and use the symbol height as their proportional anchor. `[Approved]`

| Measure | Primary lockup | Descriptor lockup |
| --- | --- | --- |
| Aspect ratio | 5.36 : 1 | 3.86 : 1 |
| Symbol | 1 : 1 square | 1 : 1 square |
| Symbol height | = lockup height | = lockup height |
| Symbol to wordmark gap | 0.225 x symbol | 0.145 x symbol |
| Wordmark width | 4.14 x symbol | 2.71 x symbol |
| Descriptor cap height | Not used | 0.105 x symbol |
| Descriptor drop below baseline | Not used | 0.058 x symbol |
| Assembly application minimum | 112px | 256px |
| Measured asset failure point | 88px | 220px |

Every ratio holds to three decimal places across all four supplied instances, so both versions can be rebuilt at any size from the symbol alone.

**Version choice.** `[Approved]`
Use the descriptor lockup when the category still has to be stated: first-contact material, decks opening to a new audience, co-branded surfaces and anything printed. Everywhere else, including all interface chrome and any placement under 256px wide, use the primary lockup. Below 112px switch to the symbol. Below 32px do not place the mark.

---

## 4. Clear space

**x = 0.214 x the symbol height.** `[Proposed]`

`x` is the width of the `1` stem inside the symbol. It is applied on all four sides of the lockup, measured from the outer edge of the mark.

The figure is not arbitrary. It is already the distance the symbol rises above the ascenders, and it is within a hair of the internal symbol-to-wordmark gap, so the rule only repeats a measurement the mark already makes three times. That is why it is proposed with confidence rather than invented.

---

## 5. Field and reversal

**Assembly Cloud is the mark's default ground.** `[Approved]`
Every application unless a blue field is the deliberate art direction.

**On blue, the mark reverses to Assembly Cloud in full, symbol included.** `[Approved]`
Never a partial reversal. Never one element in colour while another reverses.

**Never place the mark over active pattern detail.** `[Approved]`

---

## 6. Misuse

**Do not stretch, outline, shadow or recolour the wordmark.** `[Approved]`

Applies to all formats. Also:

- Never set the descriptor in a substitute face.
- Never rebuild the mark from live type.
- Never place it over active pattern detail.
- Never emphasise, outline or separately colour the `01` inside the symbol.
- Never shrink a lockup past its documented minimum. Use the next version down instead.

---

## 7. Co-branding

**Co-branding is an art direction, not a badge wall.** `[Approved]`
Assembly holds Advanced Tier partner status with AWS. On a shared surface that standing is drawn, not listed: two marks at one optical weight, separated by a single rule, with neither logo enlarged to claim the relationship.

**Four supplied lockups, reproduced as delivered.** `[Approved]`
Do not rebuild them by placing the two logos next to each other.

| Version | Use |
| --- | --- |
| Descriptor co-brand, powered by AWS, white | First contact, print, proposals, any surface where the relationship itself is the message |
| Logotypes only, divided by one rule, white | The default co-brand mark. Decks, footers, partner rows where the audience already knows the relationship. |
| Compact, symbol against the AWS mark, white | Tight interface placements and small print where the wordmark would fall under its 112px minimum |
| Logotypes only, blue | Both marks reverse together, including the AWS smile |

**Applying the logotypes.** `[Approved]`

| Measure | Value | Note |
| --- | --- | --- |
| Optical alignment | Equal cap height | Scaling to equal image width makes one of them read as borrowed |
| Divider | 1px rule, `x` either side | Never a slash, a plus or a vertical bar |
| Clear space | `x` on all four sides | The lockup as a whole, from the outer edge of either mark |
| Descriptor co-brand minimum | 256px | Assembly floor with a buffer above descriptor failure |
| Logotypes-only minimum | 112px | Assembly floor across the wordmark |
| Under 112px | Compact version | Never shrink a wordmark pair past its minimum |
| Field | White by default | On Assembly Blue both marks go fully white. Never over active pattern detail. |
| Order | Assembly first | Reverse only inside AWS-led material where AWS is the host brand |

Optical alignment, the divider and the field rule are carried from the supplied lockups. The two application minimums follow the Assembly 256 / 112 / 32px family sequence. `[Approved]`

**Partner marks are set in the partner's own face.** `[Approved]`
Production co-brand material uses the partner's own lockup, which is the same rule that licenses Amazon Ember for AWS contexts.

---

## 8. Colour architecture

### The two official values `[Approved]`

| Name | Value | Reserved meaning |
| --- | --- | --- |
| Assembly Blue | `#0028FF` | Primary brand field, CTA, border, navigation signal, active state |
| Assembly Cloud | `#EFF5FF` | The official white. Default canvas, panel field, pattern space, section separation, and the reverse colour of the mark. |

Two production utilities that carry no brand meaning:

| Name | Value | Use |
| --- | --- | --- |
| Core Ink | `#161615` | Long-form text on Cloud |
| Pure White | `#FFFFFF` | Production utility only, not the official ground |

**The law.** Assembly Blue is the field, not an accent placed on a neutral. Variation comes from opacity, direction and overlap, never from a new hue. There is no third accent.

### Primitive ramp

The ramp mixes two different kinds of value and the marker column says which. **Measured** means the value was found in a supplied master; the count is how many masters contain it. **Invented** means the value exists only in the token layer: it was created to make the brand usable in software and has never appeared in Assembly artwork. Both are legitimate. Confusing them is not, which is why they no longer share a single `[Approved]` heading.

| Token | Value | Marker | In masters | Use |
| --- | --- | --- | --- | --- |
| `blue-700` | `#0028FF` | `[Approved]` | 6 logo masters, signature, `assembly_brand-01` | Assembly Blue, canonical mark and primary action |
| `blue-100` | `#EFF5FF` | `[Approved]` | Logo masters, `assembly_brand-01` | Assembly Cloud, brand ground, tinted sections |
| `ink-900` | `#161615` | `[Approved]` | Logo masters, deck body ink | Primary copy, headings and body |
| `white` | `#FFFFFF` | `[Approved]` | Logo masters | Preferred logo field, cards, on-primary text |
| `blue-300` | `#88A4FF` | `[Derived]` | `assembly_brand-01` only | Text on dark, muted accents |
| `blue-500` | `#283DFF` | `[Derived]` | `GenAI_assembly` only | Gradient mid stop, charts, secondary fills |
| `blue-800` | `#000279` | `[Derived]` | `GenAI_assembly` only | Campaign gradient end, dark panels |
| `blue-900` | `#00023F` | `[Derived]` | 1 master | Dark brand surface, deep hero backdrops |
| `amber-500` | `#FF8100` | `[Derived]` | 1 master | AI accent, light theme |
| `amber-400` | `#FCA515` | `[Derived]` | 1 master | AI accent, dark theme |
| `violet-500` | `#5500F9` | `[Conflict]` | 1 master, but see below | Model and compute visualisation only |
| `blue-600` | `#0044FF` | `[Proposed]` | **none** | Focus ring, hover lift, links on dark |
| `ink-100` | `#F4F4F6` | `[Proposed]` | **none** | Raised surface light, table heads |
| `ink-400` | `#8A8A94` | `[Proposed]` | **none** | System labels, metadata |
| `ink-500` | `#5C5C68` | `[Proposed]` | **none** | Tertiary copy, body support |
| `ink-700` | `#4A4A55` | `[Proposed]` | **none** | Secondary copy, intro statements |
| `ink-950` | `#08080B` | `[Proposed]` | **none** | Dark page ground |

Six values, the whole warm-neutral ink scale plus `blue-600`, appear in **zero** Assembly masters. They are an interface palette built alongside the brand rather than extracted from it. Use them in software, do not present them as brand colours, and do not cite them as evidence of anything.

**Recorded conflict: violet-500.** `[Conflict]` The token is described as the one violet, for compute visualisation only. The actual GenAI campaign artwork (`GenAI_assembly.svg`) runs a different violet family: `#8A3FF3`, `#B171F5`, `#C763FF`. `#5500F9` appears once and is not what the campaign was drawn in. Either the token adopts the artwork or the artwork adopts the token.

Two further values are documented in the alias table but carry no primitive token: `#A7A7B4` (dark-theme secondary text) and `#131318` (dark-theme raised surface).

### Semantic aliases `[Approved]`

Components consume intent, not raw palette values.

| Alias | Light | Dark | Intent |
| --- | --- | --- | --- |
| `surface-page` | white | `ink-950` | Root background |
| `surface-raised` | `ink-100` | `#131318` | Cards and panels |
| `surface-brand` | `blue-100` | `blue-900` | Tinted brand sections |
| `border-subtle` | `ink-900` at 12% | `blue-100` at 12% | Hairlines and table rules |
| `border-brand` | `blue-700` at 35% | `blue-300` at 40% | Label pills, focus outlines |
| `text-primary` | `ink-900` | `blue-100` | Display through body |
| `text-secondary` | `ink-700` | `#A7A7B4` | Intro and secondary statements |
| `text-muted` | `ink-450` | `ink-400` | System labels, metadata |
| `text-brand` | `blue-700` | `blue-300` | Links and token names |
| `action-primary` | `blue-700` | `blue-700` | Primary button background |
| `action-primary-fg` | white | white | Label on primary |
| `accent-ai` | `amber-500` | `amber-400` | GenAI fills only |
| `accent-ai-fg` | `ink-900` | `ink-950` | Text on GenAI fills |
| `accent-ai-strong` | `amber-600` | `amber-400` | GenAI control boundary |
| `focus-ring` | `blue-600` | `blue-300` | 2px offset ring |

**Known export defect.** `[Conflict]`
The generated token exports emit `surface-raised` dark as `ink-950`, matching `surface-page` and collapsing raised surfaces into the page ground. The documented and implemented value is `#131318`. The exports are wrong; this table is right.

### Derived chrome `[Derived]`

| Role | Value |
| --- | --- |
| Hairline rule | `rgba(0,40,255,.18)` |
| Strong rule | `rgba(0,40,255,.34)` |
| Chip field | `rgba(0,40,255,.05)` |

Never a borrowed grey.

### Approved gradients `[Approved]`

Direction and role are fixed so gradients remain systematic.

| Token | Definition | Use |
| --- | --- | --- |
| `gradient-announcement` | `linear-gradient(90deg, #000000 0%, #0028FF 100%)` | Site announcement bar |
| `gradient-logotype` | `linear-gradient(180deg, #0028FF 0%, #EFF5FF 100%)` | Oversized letterform bleeds and stationery |
| `gradient-chapter` | `linear-gradient(135deg, #0028FF 0%, #88A4FF 100%)` | Chapter transitions and blue fields |

Primary blue endpoints use canonical `#0028FF`.

### Credential markers `[Conflict]`

A fourth colour system nobody has ratified. The marker geometry is excellent: a 19 square with two opposite corners cut at 6.07, which is 32% of the side, the wordmark's cut logic reduced to chip size. The colours are the problem.

| Credential | Marker | Status |
| --- | --- | --- |
| Advanced Tier Services | `#FF7600` | Not in the palette |
| AWS Well-Architected Partner Program | `#FF7600` | Not in the palette |
| Generative AI Essentials | `#913DF4` | Not in the palette |
| Technical Accredited | `#3C92F9` | Not in the palette |
| Cloud Practitioner | `#343F4D` | Not in the palette |
| Partner badge plate | `#FF9900` and `#323842` | AWS brand values, correct |

Two oranges sit next to each other in one signature: AWS official `#FF9900` on the badge, and `#FF7600` on the markers beside it. Either the markers adopt the partner values they are describing, or they drop to one ink and let the label carry the meaning. Colour is the wrong dimension to encode five credentials in a brand that documents one blue.

### The drift register `[Conflict]`

An earlier version of this register listed seven blues. That figure was inherited from the brand book and was never measured. **Every `.svg` master was parsed for hex values: there are 47 distinct blue and violet values in circulation, not seven.** The register below is that measurement.

**The good news first.** All six logo masters, including both construction plates, contain exactly one blue: `#0028FF`. The mark itself has not drifted at all. Every value below comes from the pattern, the deck, the campaign artwork or the composite board.

| Master | Distinct blues | Values |
| --- | --- | --- |
| All six logo lockups and construction plates | **1** | `#0028FF` |
| `assembly-email-signature.svg` | 4 | `#0028FF` `#0022FD` `#3C92F9` `#913DF4` |
| `assembly-approved-pattern.svg` | 6 | `#0019FF` `#001BFF` `#001FFF` `#0024FF` `#002BFF` `#003CFF` |
| `assembly_brand-01.svg` | 12 | `#0019FF` `#001BFF` `#001FFF` `#0024FF` `#00269D` `#002784` `#0028FF` `#002AFF` `#002BFF` `#003CFF` `#60A5FF` `#88A4FF` |
| `assembly-slide-deck-components.svg` | 17 | `#0000FA` `#0009FF` `#0019FF` `#0319FD` `#0627FF` `#1736FF` `#2109FF` `#344FFF` `#3D27F2` `#3E2DF2` `#4033F2` `#4542F2` `#4748F3` `#4D6BFE` `#5C71FF` `#8F9EFF` `#CCD3FF` |
| `GenAI_assembly.svg` | 21 | `#0000FA` `#000279` `#0009FF` `#0010FF` `#0319FD` `#075FE8` `#1E00E4` `#2000FF` `#2109FF` `#2218FC` `#2319FF` `#2520F8` `#2734FF` `#283DFF` `#293FFF` `#4D6BFE` `#5500F9` `#558EF8` `#8A3FF3` `#B171F5` `#C763FF` |

Three of these are not drift and should not be treated as such: `#3C92F9` and `#913DF4` are credential markers (their own unratified problem, above), and `#FF9900` with `#323842` are AWS brand values used correctly.

**How to read the rest.** The drift is not one problem, it is three:

1. **Near misses on the official value.** `#0022FD`, `#0319FD`, `#0009FF`, `#2109FF`, `#0000FA`, `#002AFF`. Each is within a few points of `#0028FF`, which is exactly why they survive: nobody sees the difference in isolation, and the system loses its single blue one export at a time.
2. **A whole undocumented secondary ramp in the deck.** `#3D27F2` through `#4748F3` plus `#5C71FF`, `#8F9EFF`, `#CCD3FF`. This is not slippage, it is a second palette somebody built and shipped.
3. **A campaign that runs on its own colours.** `GenAI_assembly.svg` carries 21 blues and violets, more than any other file, and almost none of them are in the token system.

The logo master's ground is `#F1F6FB` rather than `#EFF5FF`, which is the same failure in the Cloud value.

**What this changes.** Nothing about the mark, which is clean. It does mean the system cannot currently claim one blue: it has one blue in the identity and an unmanaged field everywhere else. Until that is reconciled, do not cite "Assembly documents a single blue" as a fact about the artwork. It is a fact about the logo.

---

## 9. The pattern

**Letterform, crop and movement.** `[Approved]`
The wordmark enlarged past legibility and cropped, so the letterform reads as a field rather than as a word. Crop, gradient and direction of movement are what make each composition specific.

| Rule | Detail |
| --- | --- |
| Source | The supplied SVG is the master. Rebuilding the glyphs with the typeface produces letterforms that are close but not the drawn ones, and the difference is visible at size. |
| Crop | Keep the portrait module, 537 x 668, or combine complete modules into a field. Partial and stretched tiles both break the letterform geometry. |
| Gutters | White gutters between modules are part of the composition, not padding. |
| Colour | Glyphs are never recoloured, shadowed or given a hue of their own. The fade runs blue to transparency or to Assembly Cloud. See the conflict below on which blue. `[Conflict]` |
| Placement | Anchor to an edge and preserve a clear content zone. Copy never crosses active glyph detail. Fragments are never floated as decoration. |

**Recorded conflict: the pattern is not drawn in Assembly Blue.** `[Conflict]`
Earlier documentation stated that Assembly Blue fades into transparency or into Assembly Cloud. The master it points at does something else. The gradient in `assembly-approved-pattern.svg` runs six stops and `#0028FF` is not one of them:

| Offset | 0 | 0.12 | 0.24 | 0.37 | 0.50 | 0.64 | 0.90 |
| --- | --- | --- | --- | --- | --- | --- | --- |
| Stop | `#0019FF` | `#0019FF` | `#001BFF` | `#001FFF` | `#0024FF` | `#002BFF` | `#003CFF` |

The base is `#0019FF`, fifteen points off the official value, and the ramp warms toward `#003CFF` rather than resolving to Cloud. The rule and the approved master are opposites. Either the master is re-exported on `#0028FF` or the rule is rewritten to describe the gradient that actually exists. Do not settle this inside a layout, and do not re-key the tiles by hand: the crops are percentage-positioned against the master precisely so nobody does that.

**The rounded bracket interpretation is retired, not a variant.** `[Approved]`
An earlier reading of the mark simplified the letterform crop into a bracket shape. It is retired, not an alternative, and should not be reintroduced as a simplified option.

---

## 10. Expressions that work without the logo

Two owned devices carry the brand where the mark is absent. `[Approved]`

**Code Style Text.** The brand talking to engineers in their own format: Assembly Blue code on a supplied white LinkedIn canvas, with the Assembly and AWS relationship anchored in the footer. The monospace face is a utility for this concept and for token names, and is never promoted to a brand family.

**Letter Grafism.** See section 9.

---

## 11. Brand architecture

**Assembly also builds identities that do not carry its name.** `[Approved]`

| Rule | Detail |
| --- | --- |
| Mark | An initiative carries its own mark, never an Assembly endorsement lockup |
| Palette | Its own palette, registered separately |
| Method | The method carries across but the surface does not |
| Registration | Every initiative is registered with its own token set |

First entry: AWS User Group Brisbane, with tokens `--ug-ground: #171B33`, `--ug-accent: #A855F7`, `--ug-ink: #FFFFFF`.

---

## Applying this file

1. **Place the supplied SVG.** Never redraw it, never re-type it, never trace it from a render. Sections 1 and 2 list what a rebuild loses: three cut angles, four drawn letterforms and a hidden numeral.
2. **Choose the version by context, then check the minimum before you scale.** Descriptor lockup when the category still has to be stated, primary lockup everywhere else. Under the minimum, change version rather than shrink.
3. **Leave `x` on all four sides.** `x` = 0.214 x the symbol height. Mark it as Proposed if you are documenting it downstream.
4. **On blue, everything reverses together.** Full Cloud, symbol included. Never one element in colour beside another reversed.
5. **Co-brand only from the four supplied lockups.** Never assemble one by placing two logos side by side. Equal cap height, one 1px divider, Assembly first.
6. **Check any blue against the drift register in section 8 before you use it.** 47 distinct blues are in circulation and one of them is the brand. Pulling a colour out of an existing deck or campaign file is the single most likely way to introduce a wrong one.
7. **Never sample colour off artwork.** Take it from the token export. The mark is the only asset that is reliably on-value; the pattern, the deck and the campaign files are not.
8. **Bind to aliases, not to the ramp.** The primitive table is the reference; `surface-page` and `text-primary` are what a component should actually consume.
9. **Check the marker column before quoting a primitive as a brand colour.** Six of them appear in no master at all.
10. **Treat the three export defects as known.** They are listed in `specs_reference.md` section 5. Patch them on the way in until the serialiser is fixed.

---

## Not in this system

Absent from every source in the Assembly repository. Do not infer these.

- **No CMYK or Pantone values for the mark or for any brand colour.** The identity is RGB hex only.
- **No single-colour or monochrome lockup.** There is no black-only, white-only or one-colour version specified, and no rule for what happens on a surface where blue is unavailable.
- **No engraving, embroidery or single-line variant.**
- **No favicon or app-icon lockup.** The symbol is square and would be the obvious candidate, but no icon spec, size set or padding rule exists.
- **No animated logo or motion behaviour** for the mark or the pattern.
- **No co-brand rules for any partner other than AWS.** Vanta appears in a deck master set in Rubik because only Assembly and AWS artwork was supplied. A general partner-lockup rule does not exist.
- **No trademark, registration mark or legal usage line.** No TM or R placement, no attribution string, no legal notice.
- **No contrast ratios for any mark-on-field combination.** See `design_principles.md`.
- **No sonic, naming or endorsement architecture** beyond the four initiative rules above.

---

## Companion files

- `design_principles.md`: the reasoning layer and the marker convention
- `typography.md`: the families the wordmark departs from
- `grid_systems.md`: the pattern module grid and the composition law
- `specs_reference.md`: measured artefact geometry and the production gap
