# Assembly Design Principles

Version 1.7. Part of the Assembly brand system knowledge pack.

This file states the reasoning layer of the Assembly identity: the rules that decide what is right when the token values alone do not settle it. Token values live in the export formats. This file is the judgement.

Every rule below carries a marker. Nothing is asserted without one.

---

## 0. The marker convention

| Marker | Meaning |
| --- | --- |
| `[Approved]` | Traceable to a supplied master file or to a stated brand direction. Do not change without a brand decision. |
| `[Derived]` | A consistent application of an approved rule. Change it only by changing the rule it derives from. |
| `[Proposed]` | Inferred from measurement or precedent, not yet signed off. Safe to use, but flag it when you do. |
| `[Conflict]` | Two sources in this system disagree. Both are recorded. Do not silently pick one. |

**The rule behind the markers** `[Approved]`
Values come from the supplied masters and the approved SVG, never from memory and never from a redraw. Anything inferred beyond those masters is marked, and an inference is never quietly upgraded to a decision. When a source and a rule disagree, both go in the record. A system that hides its own contradictions cannot be audited, and an unauditable brand system drifts.

---

## 1. Recognition

**Assembly is recognisable before the logo appears.** `[Approved]`
Recognition depends on a specific combination of colour, typography, pattern, structure and proof. It does not depend on making the mark larger. If a surface only reads as Assembly because the logo is on it, the surface has failed.

**The brand equation.** `[Approved]`

```text
Color + Type + Pattern + Proof = A
```

Five parts, stated in the system section of the brand book:

1. **Official colour pair.** Assembly Blue creates focus, Assembly Cloud is the ground everything sits on.
2. **Rubik-led typography.** Wide, direct headlines with tight tracking, and no second display voice.
3. **Approved pattern.** Oversized letterform fragments, clipped into modular portrait tiles.
4. **Split composition.** One decisive statement, one structured proof surface.
5. **Proof-based content.** Founder problem, named programme, technical mechanism, traceable outcome.

**The core signature.** `[Approved]`
`CLOUD DONE WITH INTENT`. Four words, always uppercase, never re-typed in a substitute family.

**The persistent strap.** `[Approved]`
`WE ARE SPECIALISTS IN CLOUD SOLUTIONS`. Always uppercase. It is the signature, not a sentence. Never set in title case and never mixed into running copy.

---

## 2. Contrast and colour behaviour

**Assembly Blue is the field, not an accent placed on a neutral.** `[Approved]`
Where: full-bleed grounds, the primary CTA, every border, the active navigation state and the pattern itself. When blue is used as a small highlight on grey, the system stops reading as Assembly. This is the single most load-bearing rule in the identity.

**Assembly Cloud is the official white.** `[Approved]`
`#EFF5FF` is the default canvas, the space inside the pattern and the reverse colour of the mark on blue. Pure `#FFFFFF` is a production utility, not the official ground.

**No third accent anywhere in the system.** `[Approved]`
Variation comes from opacity, direction and overlap, never from a new hue. Two contextual accents exist and neither is a brand field: `accent-ai` for AI and GenAI surfaces, and `violet-500` for model and compute visualisation only. They are utilities with fixed meanings.

**Recorded conflict: the artwork does not obey that rule.** `[Conflict]`
The masters were parsed for hex values. They contain 47 distinct blues and violets, including an entire undocumented secondary ramp in the slide deck and a violet family in the GenAI campaign that is not `violet-500`. The rule above is the stated direction and the identity honours it: every logo master contains exactly one blue. Everything downstream of the mark does not. Do not cite "no third accent" as a description of the artwork; it is a description of the intent. Full register in `brand_identity_craft.md` section 8.

**Page chrome is derived from the official pair, never borrowed grey.** `[Derived]`

| Role | Value | Source |
| --- | --- | --- |
| Hairline rule | `rgba(0,40,255,.18)` | Assembly Blue at 18% |
| Strong rule | `rgba(0,40,255,.34)` | Assembly Blue at 34% |
| Chip field | `rgba(0,40,255,.05)` | Assembly Blue at 5% |

A grey borrowed from outside the system is the fastest way to make an Assembly surface look like a template.

**Components consume intent, not raw palette values.** `[Approved]`
Interfaces bind to semantic aliases (`surface-page`, `text-primary`, `action-primary`) so component meaning survives a theme change. A component that hardcodes `#0028FF` breaks the moment it lands on a dark surface.

**Gradient direction and role are fixed.** `[Approved]`
Three approved gradients and two source-derived gradients, each with one job. A gradient invented for a single layout is a new hue by another route.

---

## 3. Hierarchy

**Hierarchy moves by weight, not by size.** `[Approved]`
A secondary editorial statement steps back to Rubik Light 300. It does not get smaller. Shrinking the secondary line makes it look like a caption; lightening it keeps it editorial. Full type rules are in `typography.md`.

**One connective label style ties every surface together.** `[Approved]`
Six different uppercase treatments were collapsed into one: 10 to 11px, weight 500, `.08em` to `.2em` tracking, uppercase. Every eyebrow, every piece of metadata, every micro pill and the signature line use it. A second label style is how a system starts to look assembled from parts.

**One primary action per surface.** `[Approved]`
Every slide, page and section with a decision in it gets exactly one primary action. Secondary and tertiary reduce emphasis through fill and border only, so the surface never gains a second colour.

**A pill labels something that already exists and never becomes the message.** `[Approved]`
If the text inside a pill is a sentence, it belongs in a paragraph.

---

## 4. Space

**Every gap and margin is one of eleven values.** `[Approved]`
The spacing scale runs 4, 8, 12, 16, 20, 24, 28, 36, 48, 72, 96. Nothing is spaced with a number that is not on that list. Full grid rules are in `grid_systems.md`.

**Empty space between narrative and proof is load-bearing.** `[Approved]`
The Assembly Cloud gap separating a statement from its evidence, and the white gutters inside a pattern field, are composition rather than padding. Filling every available area is the fastest way to make the system look generic.

**Anchor to an edge, do not float.** `[Approved]`
Pattern modules run flush to the edge of their side rather than floating inside it, which is what makes a split composition read as deliberate. Fragments are never floated as decoration in the middle of a layout.

---

## 5. Composition

**Statement on one side, proof on the other.** `[Approved]`
The recurring Assembly structure is asymmetric but controlled: one dominant message, one organised evidence field, one anchored signature line.

**The split holds between 50/50 and 55/45.** `[Approved]`
Past 55% the proof field stops reading as a structured surface and becomes a margin. This applies to institutional slides and to customer case-study pages.

**Copy never crosses active glyph detail.** `[Approved]`
The pattern is anchored so that a clear content zone survives. The logo is never placed over active pattern detail either.

---

## 6. Structure of the documentation itself

**One repeated unit.** `[Derived]`
Every rule in the Assembly reference is expressed the same way:

```text
tag  ->  claim  ->  where it applies  ->  the evidence  ->  the closing note
```

The page is that device repeated thirty-odd times, which is the whole reason it reads as one system rather than as a collection of observations. Consistency of structure is what makes a rule set legible.

**Rebuild, do not screenshot.** `[Derived]`
Pattern tiles, pills, CTAs and the 16:9 composition in the reference are running implementations, not images of them. The only captures are photographs of live sessions, and they are labelled as such. A screenshot cannot be checked against the master; a rebuild can.

**Regenerable.** `[Derived]`
The reference inlines the real fonts, the approved SVG and the source artboards so it stays portable and can be regenerated whenever a master changes.

---

## 7. Content

**Four beats, in order.** `[Approved]`

| Beat | What it does |
| --- | --- |
| 01 Founder problem | Name the stalled build, the cost pressure, the compliance gap or the growth constraint |
| 02 Assembly programme | Connect the need to a specific named offer: CRAFT, MVP Ready, Scale Up, Observe+, Secure+ or Ops |
| 03 Technical proof | Show the architecture, the AWS mechanism, the partner support or the operating model |
| 04 Verified outcome | Use a result only with its source and its context |

Starting from the capability rather than the problem is what makes cloud copy interchangeable between vendors. A generic "our services" sentence at beat 02 loses the one thing that is specific to Assembly. A number without an engagement attached to it is not proof, and a case-study result never becomes a universal promise.

**Voice, demonstrated rather than described.** `[Approved]`

| | Line | Why |
| --- | --- | --- |
| **Use this** | "From first architecture to managed operations, build fast without giving up the foundations." | Direct, concrete, founder consequence first |
| **Avoid this** | "Leveraging best-in-class capabilities to facilitate digital transformation." | Generic, vendor-led, no visible outcome |

**Anti-cliché test.** `[Approved]`
If a competitor could publish the sentence unchanged, rewrite it. Never publish a stat without its stake.

**Spelling standard.** `[Approved]`
Australian English. "Optimisation", not "optimization". Client quotes are reproduced verbatim and are exempt.

---

## 8. Geometry

**Component corners are controlled at 8px.** `[Approved]`
`radius-core` at 8px is the approved core UI corner: buttons, fields, tags, panels and cards, with a 1px Assembly Blue stroke on white, preserved at every scale. The shared geometry is what keeps campaign, editorial and product surfaces recognisably related.

**Recorded conflict: capsules.** `[Conflict]`
The brand book states component corners are controlled rather than capsular. Two sources contradict it:

- The token layer ships `radius-full` at `999px`, described as "Actions and metadata tags".
- The workshop deck in circulation ships four capsule CTAs at 29.6%, 36.5%, 37.1% and 40.4% of their own height, and the four instances do not agree with each other either.

The rule and the artwork are opposites, so one of them has to move. This needs a brand decision and has not had one. Do not resolve it inside a layout.

---

## Applying this file

1. **Check the equation before you check the layout.** Colour, type, pattern, structure and proof. A surface missing two of the five is not yet Assembly, however correct its hex values are.
2. **Ask what a colour is doing, not what it looks like.** Blue is the field. If the composition wants a small blue accent on a grey ground, the composition wants a different brand.
3. **De-emphasise with weight, then with space.** Reach for a rule or a border only after both have failed.
4. **Before adding a component, check it is not a second version of the one repeated unit.** Tag, claim, where, evidence, note. Most "new" components are that device wearing a different border.
5. **Write content in the four beats, in order.** If you cannot name the founder problem, you do not yet have the opening.
6. **Run the anti-cliché test on every published sentence.** If a competitor could publish it unchanged, rewrite it.
7. **Do not settle section 8's capsule conflict inside a layout.** Escalate it. Picking a corner radius quietly is how a brand decision gets made by whoever was on deadline.

---

## Not in this system

The following are absent from every source in the Assembly repository. They are not omitted from this file for brevity; they do not exist. Do not infer them.

- **No measured contrast ratios.** Not one WCAG AA or AAA figure is recorded anywhere in the system. There is no pass/fail table for ink on surface, no minimum-contrast rule and no stated accessible pairing. `text-muted` at `#8A8A94` on white and `blue-300` at `#88A4FF` on dark are the two most likely failures and neither has been checked. This is the largest single gap in the colour system.
- **No colour-blindness or non-colour redundancy rule**, despite the credential markers encoding five meanings in colour alone.
- **No motion or animation principles.** The reference sets one easing curve, `cubic-bezier(.2,.75,.2,1)`, and respects `prefers-reduced-motion`. Neither is stated as a brand rule.
- **No photography or image direction.** Photographs appear in the reference as evidence of live sessions, unretouched, with no treatment, crop or subject rule attached.
- **No tone-of-voice rules for support, error or legal copy.** The content law covers marketing narrative only.
- **No design canon citations.** This file contains no imported principles from external design literature. Every rule above is traceable to an Assembly source file. If you need a canon-level justification for a rule, it has not been written down.

---

## Companion files

- `typography.md`: families, the six-role ramp, weight roles, retired faces
- `grid_systems.md`: spacing scale, container, document grid, composition grid
- `specs_reference.md`: formats, measured artefact geometry, digital minimums
- `brand_identity_craft.md`: logo construction, clear space, colour architecture, co-branding
