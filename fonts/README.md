# Fonts

**Source of record for the open families: [https://fonts.google.com](https://fonts.google.com)**

Rubik is committed here because it is the public brand voice and ships under the SIL Open Font License 1.1. Keeping the binary beside the CSS prevents a clean checkout from silently falling back to Arial.

Drop the files in this directory with these exact names. `css/fonts.css` expects them.

| File | Family | Licence | Where to get it |
| --- | --- | --- | --- |
| `rubik-variable.woff2` | Rubik | SIL Open Font License 1.1 | Bundled from [Google Fonts](https://fonts.google.com/specimen/Rubik), variable weight 300 to 700 |
| `nunito-sans-variable.woff2` | Nunito Sans | SIL Open Font License 1.1 | [Google Fonts](https://fonts.google.com/specimen/Nunito+Sans) |
| `helvetica-neue.woff2` | Helvetica Neue | Commercial, licensed | Assembly's existing licence. Do not commit. |
| `amazon-ember-display.woff2` | Amazon Ember Display | Amazon brand licence | AWS partner brand portal. Co-brand contexts only. |

A missing file is not fatal. Every rule sets `font-display: swap` and every stack has a fallback, so the system degrades to Arial or the system UI face rather than blocking render. It will not look right, but it will work.

## Which face does what

Reserved jobs, from `knowledge/typography.md`. None of these is negotiable per surface.

- **Rubik** sets everything the reader sees, including every number. A second family for figures is the most common way a system like this starts to drift.
- **Nunito Sans** sets long editorial passages only.
- **Helvetica Neue** exists for compatibility with production documents that already use it.
- **Amazon Ember** is the partner voice, valid only inside AWS-led or AWS-certified co-brand contexts.

## Storybook

Storybook and production consumers both load the bundled Rubik file through `css/fonts.css`. No external font request is required for the six public type roles.
