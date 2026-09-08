import React from 'react';

/**
 * Sidebar icons.
 *
 * Drawn here rather than pulled from an icon library on purpose. Flaticon and
 * similar marketplaces require attribution and carry per-icon licences, which is
 * a licensing dependency a brand system should not inherit for twelve glyphs.
 * These are twelve paths on the same 16 unit grid, 1.5 stroke, round caps, in
 * the brand's own line language.
 */

const PATHS = {
  // Foundations
  colour: 'M8 2.5 4 7a5.2 5.2 0 1 0 8 0Z',
  type: 'M3 13.5 8 3l5 10.5M5 10.5h6',
  fontometer: 'M2.5 8h11M6 5.5v5M11 4v8',
  decisions: 'M8 2.5v11M8 8 3 5.5M8 8l5-2.5M3 5.5v5L8 13m5-7.5v5L8 13',

  // Brand
  logo: 'M11 2.5v11H3Zm0 7H7.5',
  partnership: 'M6.2 9.8a2.6 2.6 0 0 1 0-3.6l1.4-1.4a2.6 2.6 0 0 1 3.6 3.6M9.8 6.2a2.6 2.6 0 0 1 0 3.6l-1.4 1.4a2.6 2.6 0 0 1-3.6-3.6',
  code: 'm5.5 5.5-3 2.5 3 2.5m5-5 3 2.5-3 2.5',
  pattern: 'M2.5 11.5c2-3 3.5-4.5 5.5-4.5s3.5 1.5 5.5 4.5M2.5 7.5c2-3 3.5-4.5 5.5-4.5s3.5 1.5 5.5 4.5',

  // Components
  cta: 'M2.5 8h9m0 0-3-3m3 3-3 3',
  field: 'M2.5 5.5h11v5h-11zM5 8h3',
  pill: 'M4.5 6h7a2 2 0 0 1 0 4h-7a2 2 0 0 1 0-4Z',
  surface: 'M3 5.5h7v7H3zm3-3h7v7',
  table: 'M2.5 3.5h11v9h-11zM2.5 6.5h11M6.5 6.5v6'
};

/** Matched against the sidebar item name, lowercased. Order matters: first hit wins. */
const MATCHERS = [
  [/colour|color/, 'colour'],
  [/fontometer/, 'fontometer'],
  [/^type$/, 'type'],
  [/decision/, 'decisions'],
  [/^logo$/, 'logo'],
  [/partnership/, 'partnership'],
  [/code motif|expression 01/, 'code'],
  [/letterform|pattern|expression 02/, 'pattern'],
  [/^cta$/, 'cta'],
  [/mail field/, 'field'],
  [/^pill$/, 'pill'],
  [/^surface$/, 'surface'],
  [/selection buttons/, 'table']
];

export const iconFor = (name = '') => {
  const key = MATCHERS.find(([re]) => re.test(name.toLowerCase()))?.[1];
  return key ? PATHS[key] : null;
};

export const Icon = ({ d }) =>
  React.createElement(
    'svg',
    {
      width: 14,
      height: 14,
      viewBox: '0 0 16 16',
      fill: 'none',
      stroke: 'currentColor',
      strokeWidth: 1.5,
      strokeLinecap: 'round',
      strokeLinejoin: 'round',
      'aria-hidden': true,
      style: { flex: 'none', opacity: 0.85 }
    },
    React.createElement('path', { d })
  );
