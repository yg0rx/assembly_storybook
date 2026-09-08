/**
 * Colour documentation, generated from the token source rather than written.
 * If a token changes, this page changes with it. Nothing here is transcribed.
 */
import tokenSource from '../dist/tokens.json?raw';

const tokens = JSON.parse(tokenSource);

const el = (tag, className, text) => {
  const n = document.createElement(tag);
  if (className) n.className = className;
  if (text != null) n.textContent = text;
  return n;
};

const swatch = (name, value, use, status) => {
  const card = el('div', 'sb-swatch');
  const chip = el('div', 'sb-swatch__chip');
  chip.style.background = value;
  const meta = el('div', 'sb-swatch__meta');
  meta.appendChild(el('code', null, `--color-${name}`));
  meta.appendChild(el('b', null, value));
  if (use) meta.appendChild(el('span', null, use));
  if (status && status !== 'approved') meta.appendChild(el('span', 'sb-flag', status));
  card.append(chip, meta);
  return card;
};

const gradientCard = (name, token) => {
  const card = swatch(name, `var(--${name})`, '', token.$extensions?.['cloud.assembly']?.status);
  card.querySelector('.sb-swatch__meta code').textContent = `--${name}`;
  card.querySelector('.sb-swatch__meta b').textContent = token.$value;
  return card;
};

const grid = (entries) => {
  const g = el('div', 'sb-grid');
  for (const [name, t] of entries) {
    g.appendChild(swatch(name, t.$value, t.$description, t.$extensions?.['cloud.assembly']?.status));
  }
  return g;
};

export default {
  title: 'Foundations/Colour',
  tags: ['autodocs'],
  parameters: {
    controls: { disable: true },
    docs: {
      description: {
        component:
          'Every swatch comes from dist/tokens.json. Change the source token and the catalogue follows; never correct a colour only in the documentation.'
      }
    }
  }
};

export const BlueScale = {
  name: 'Blue scale',
  render: () => grid(Object.entries(tokens.color).filter(([n]) => n.startsWith('blue')))
};

export const InkScale = {
  name: 'Ink and neutral',
  render: () => grid(Object.entries(tokens.color).filter(([n]) => n.startsWith('ink') || n === 'white'))
};

export const Accents = {
  name: 'Contextual accents',
  render: () => {
    const wrap = el('div', 'sb-stack');
    const accents = el('div', 'sb-accent-grid');
    accents.appendChild(swatch(
      'amber-500',
      tokens.color['amber-500'].$value,
      'GenAI accent on light surfaces',
      tokens.color['amber-500'].$extensions?.['cloud.assembly']?.status
    ));
    accents.appendChild(swatch(
      'genai-soft-surface',
      `color-mix(in srgb, ${tokens.color['amber-500'].$value} 9%, transparent)`,
      'Approved resting surface for the GenAI pill and CTA',
      'approved'
    ));
    accents.appendChild(swatch(
      'amber-600',
      tokens.color['amber-600'].$value,
      'GenAI control boundary on light surfaces',
      tokens.color['amber-600'].$extensions?.['cloud.assembly']?.status
    ));
    accents.appendChild(swatch(
      'violet-500',
      tokens.color['violet-500'].$value,
      'Model and compute visualisation only',
      tokens.color['violet-500'].$extensions?.['cloud.assembly']?.status
    ));
    wrap.appendChild(accents);

    wrap.appendChild(el('p', 'sb-note',
      'Four contextual options, shown side by side. None of them replaces Assembly Blue.'));
    return wrap;
  }
};

export const Gradients = {
  name: 'Assembly gradients',
  render: () => {
    const wrap = el('div', 'sb-stack');
    const cards = el('div', 'sb-gradient-grid');
    for (const [name, token] of Object.entries(tokens.gradient)) cards.appendChild(gradientCard(name, token));
    wrap.appendChild(cards);
    return wrap;
  }
};
