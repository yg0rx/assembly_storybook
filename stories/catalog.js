/**
 * Catalogue builder.
 *
 * The catalogue is the source of truth for a component's variant set, so each
 * row carries its own markup rather than pointing at a story per variant. The
 * code is read off the rendered node, which means it cannot drift from what the
 * row above it is actually showing.
 */

/** Pretty-prints a rendered node as the markup someone would paste. */
const markupFor = (node) => {
  const clone = node.cloneNode(true);
  clone.removeAttribute('id');
  return clone.outerHTML
    .replace(/><(?!\/)/g, '>\n  <')
    .replace(/><\//g, '>\n</');
};

const actions = (row, code) => {
  const bar = document.createElement('div');
  bar.className = 'a-catalog__actions';

  const toggle = document.createElement('button');
  toggle.type = 'button';
  toggle.textContent = 'Show code';
  toggle.setAttribute('aria-expanded', 'false');
  toggle.addEventListener('click', () => {
    const open = code.hidden;
    code.hidden = !open;
    toggle.textContent = open ? 'Hide code' : 'Show code';
    toggle.setAttribute('aria-expanded', String(open));
  });

  const copy = document.createElement('button');
  copy.type = 'button';
  copy.textContent = 'Copy code';
  copy.addEventListener('click', async () => {
    try {
      await navigator.clipboard.writeText(code.textContent);
      copy.textContent = 'Copied';
    } catch {
      // Clipboard is permission-gated and blocked in some embeds. Say so
      // rather than reporting a copy that did not happen.
      copy.textContent = 'Copy blocked';
    }
    setTimeout(() => { copy.textContent = 'Copy code'; }, 1600);
  });

  bar.append(toggle, copy);
  row.appendChild(bar);
};

/**
 * @param {Array<{node: HTMLElement, use: string}>} entries
 * @param {{single?: boolean, label: string}} options
 */
export const catalog = (entries, { single = false, label }) => {
  const grid = document.createElement('div');
  grid.className = ['a-catalog', single ? 'a-catalog--single' : ''].filter(Boolean).join(' ');
  grid.setAttribute('aria-label', label);

  for (const { node, use } of entries) {
    const row = document.createElement('div');
    row.className = 'a-catalog__row';

    const useLabel = document.createElement('p');
    useLabel.className = 'a-catalog__use';
    useLabel.textContent = use;

    const code = document.createElement('pre');
    code.className = 'a-catalog__code';
    code.hidden = true;
    code.textContent = markupFor(node);

    row.append(node, useLabel);
    actions(row, code);
    row.appendChild(code);
    grid.appendChild(row);
  }

  return grid;
};
