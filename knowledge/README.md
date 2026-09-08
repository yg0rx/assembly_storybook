# Assembly Brand Knowledge Pack

Version 1.7. Five knowledge files plus this entry point.

This pack exists so the Assembly brand can be applied correctly by someone who has never seen it, and by a model that has never been trained on it. Token exports carry the values. These files carry the judgement: what each value is for, where the rule came from, where two sources disagree, and what this system has no answer for.

Read this file first. It tells you how to use the other five.

---

## The files

| File | Read it when |
| --- | --- |
| `design_principles.md` | Before anything else. Recognition, contrast, hierarchy, space, composition, the content law. |
| `typography.md` | Setting any text. Families, the six-role ramp, weight roles, retired faces. |
| `grid_systems.md` | Laying anything out. Spacing scale, container, document grid, the composition law. |
| `specs_reference.md` | Producing a deliverable. Canvas formats, digital minimums, measured artefact geometry. |
| `brand_identity_craft.md` | Touching the mark, the colour architecture, a co-brand or the pattern. |

Companion machine formats, generated live from the reference page: `assembly-tokens.css`, `assembly-tokens.json` (W3C DTCG), `theme.css` (Tailwind v4), `assembly-figma-variables.json`.

---

## The marker convention

Every rule in every file carries one of four markers. This is the canonical definition; the other files reference it.

| Marker | Meaning | What you may do with it |
| --- | --- | --- |
| `[Approved]` | Traceable to a supplied master file or a stated brand direction | Apply it. Do not change it without a brand decision. |
| `[Derived]` | A consistent application of an approved rule | Apply it. It moves only when its parent rule moves. |
| `[Proposed]` | Inferred from measurement or precedent, not yet signed off | Apply it, and flag that you did. |
| `[Conflict]` | Two sources in this system disagree | Do not pick one. Escalate it. |

An inference is never quietly upgraded to a decision. That rule is what makes the rest of the pack trustworthy.

---

## How to apply the brand

Four steps, in order. They resolve most decisions without a judgement call.

### 1. Bind to intent, never to a hex value

Components consume semantic aliases: `surface-page`, `text-primary`, `action-primary`, `focus-ring`. A component that hardcodes `#0028FF` breaks the moment it lands on a dark surface. The token exports are the binding layer; use them rather than transcribing values.

### 2. Read the rule before you reach for the value

Every token has a reserved meaning. `blue-700` is the field, not an accent placed on a neutral. `accent-ai` marks GenAI capability and nothing else. A value applied outside its meaning is how a system drifts while every hex in the file stays technically correct.

Check the marker column in `brand_identity_craft.md` section 8 before you quote a primitive as a brand colour. Six of them appear in no Assembly master at all, and `violet-500` does not match the campaign it supposedly governs.

### 3. Respect the marker

Approved is fixed. Derived moves only with its parent. Proposed is usable but must be declared. Conflict is escalated, never settled inside a layout. If you resolve a conflict because it was inconvenient, you have made a brand decision without authority to make one.

### 4. Stop at a gap

Every file ends with a `## Not in this system` list. Those items are absent, not omitted for brevity. If the answer is not in the pack, it does not exist yet: write the specification and get it approved. Do not infer one and ship it.

The four largest gaps, so you meet them before they surprise you:

- **No contrast ratios anywhere.** Not one WCAG figure exists. Accessible pairings have never been checked.
- **No baseline grid, no modular grid, no agreed column count.** The 12-column web grid is an assumption in an audit that says so.
- **No print production spec of any kind.** No bleed, trim, DPI, CMYK or Pantone.
- **No social formats.** No 1080 x 1080, no 1200 x 630, no favicon spec.

---

## Open conflicts

These are live and unresolved. Each is recorded in full in the file named beside it.

| Conflict | Where |
| --- | --- |
| 8px controlled corners vs `radius-full` and four capsule CTAs in circulation | `design_principles.md` section 8 |
| Rubik-only vs the built website running Poppins and Exo 2 as first-class faces | `typography.md` section 6 |
| Bold and SemiBold used in the deck with no documented role | `typography.md` section 5 |
| 47 distinct blues in circulation, one of them official | `brand_identity_craft.md` section 8 |
| The approved pattern master is drawn on `#0019FF`, not Assembly Blue | `brand_identity_craft.md` section 9 |
| Six shipped primitives appear in no Assembly master at all | `brand_identity_craft.md` section 8 |
| `violet-500` is not the violet the GenAI campaign was drawn in | `brand_identity_craft.md` section 8 |
| Credential markers as an unratified fourth colour system | `brand_identity_craft.md` section 8 |
| Three disagreeing breakpoint sets | `grid_systems.md` section 7 |
| Three defects in the generated token exports | `specs_reference.md` section 5 |

Two items are defects rather than decisions, and both are live today:

- The partner badge on the email signature in circulation reads "Well-Archicted". Fix it before reusing that artwork.
- The six `--text-*` tokens in `assembly-tokens.css` are invalid CSS and resolve to nothing. Do not use the shorthand until it is fixed.

**One thing worth saying plainly.** The mark is clean: all six logo masters contain exactly one blue, `#0028FF`, and every construction ratio holds to three decimals across all four supplied lockups. The drift is entirely downstream of the identity, in the pattern, the deck and the campaign artwork. Assembly has a rigorous logo and an unmanaged colour field around it, and those are two different problems with two different fixes.

---

## Handing this to a model

The pack is plain text on purpose. To brief a model, load all five files and this one, then constrain it:

```text
You are applying the Assembly brand system. The attached knowledge files are
the only source of truth.

Rules of engagement:
1. Never state a value that is not in these files. If you need one that is not
   here, say it does not exist rather than producing a plausible number.
2. Carry the marker. When you apply a rule, name whether it is Approved,
   Derived or Proposed. Flag anything Proposed.
3. Never resolve a Conflict. Present both sides and ask.
4. Treat every "Not in this system" list as binding. Those are not gaps for
   you to fill.
5. Bind components to semantic aliases, never to raw hex.
```

Point 1 is the one that matters. A brand system fails with a model the same way it fails with a new hire: not because the rules were wrong, but because the space between the rules got filled in confidently by someone with no authority to fill it.

---

## Provenance

Values come from the supplied masters and the approved SVG, never from memory and never from a redraw. Where a master and a rule disagree, both are recorded. Where the system has nothing to say, it says so.

Sources: `archive/brand/assembly-v1.6/assets/source/` (the SVG and PDF masters), `archive/brand/assembly-v1.6/assembly-brand-book.src.html`, `projects/assembly_brand_book/brand-system.html`, `projects/assembly/audit/website-redesign-direction.md`.
