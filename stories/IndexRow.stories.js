/**
 * Index row. Formalising a device the brand book already uses three ways.
 */

const h = (html) => {
  const t = document.createElement('template');
  t.innerHTML = html.trim();
  return t.content.firstElementChild;
};

const row = ({ num, name, what, href }) => {
  const tag = href ? 'a' : 'div';
  return `
    <${tag} class="a-index__row"${href ? ` href="${href}"` : ''}>
      <span class="a-index__num">${num}</span>
      <span class="a-index__name">${name}</span>
      <span class="a-index__what">${what}</span>
    </${tag}>`;
};

const list = (items, href) => h(`
  <div class="a-index">
    ${items.map((it, i) => row({
      num: String(i + 1).padStart(2, '0'),
      name: it[0],
      what: it[1],
      href: href ? '#' : null
    })).join('')}
  </div>
`);

export default {
  title: 'Components/Index row',
  tags: ['autodocs'],
  parameters: {
    controls: { disable: true },
    docs: {
      description: {
        component:
          'A numbered item, its name, and the one line that says what it is, on a single line, so a ' +
          'list of them scans as a table of contents rather than a stack of headings.\n\n' +
          '**Why it was added.** The brand book already uses this device three times and builds it ' +
          'differently each time: the challenge cards run "01 · Understand" as an eyebrow above a ' +
          'heading, the content law runs "01 Founder problem" as a tag chip, and the initiative ' +
          'register runs "Initiative 01 · Live". One idea, three constructions, none of them reusable.\n\n' +
          '**The one thing not borrowed from the reference.** Its numerals are monospace. Rubik sets ' +
          'everything the reader sees, including every number, so these are Rubik with tabular ' +
          'figures. Monospace stays what `typography.md` says it is: a utility for the code motif and ' +
          'token names, never promoted.'
      }
    }
  }
};

export const ContentLaw = {
  name: 'The content law',
  render: () => list([
    ['Founder problem', 'Name the stalled build, the cost pressure, the compliance gap or the growth constraint.'],
    ['Assembly programme', 'Connect the need to a specific named offer, not to "our services".'],
    ['Technical proof', 'Show the architecture, the AWS mechanism or the operating model.'],
    ['Verified outcome', 'Use a result only with its source and its context attached.']
  ]),
  parameters: {
    docs: {
      description: {
        story: 'The four-beat content law from the brand book, as an index rather than four cards in a grid.'
      }
    }
  }
};

export const AsNavigation = {
  name: 'As navigation',
  render: () => list([
    ['Logo', 'Three families, four fields each, and what to do below each minimum.'],
    ['Partnership', 'The AWS co-brand lockups and the credential row.'],
    ['Colour', 'Primitives, semantic aliases and the four recorded conflicts.'],
    ['Type', 'Rubik, the six roles, and weight as the hierarchy device.']
  ], true),
  parameters: {
    docs: {
      description: {
        story: 'As links, the whole row is the target rather than just the name, which is a bigger and more forgiving hit area.'
      }
    }
  }
};

export const Applied = {
  name: 'On a surface',
  render: () => {
    const wrap = document.createElement('div');
    wrap.className = 'a-surface';
    wrap.style.maxWidth = '720px';

    const label = document.createElement('span');
    label.className = 'a-label';
    label.textContent = 'Applying it, in four steps';

    wrap.append(label, list([
      ['Bind to intent, never to a hex', 'Components consume surface-page, text-primary, action-primary.'],
      ['Read the rule before the value', 'Every token has a reserved meaning. A value used outside it is drift.'],
      ['Respect the marker', 'Approved is fixed. Proposed must be declared. Conflict is not yours to settle.'],
      ['Stop at a gap', 'If the answer is not in the pack it does not exist yet. Write the spec.']
    ]));
    return wrap;
  }
};
