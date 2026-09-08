/**
 * Colour maths shared by the token build and the contrast test.
 * WCAG 2.1 relative luminance and contrast ratio, plus alpha flattening so a
 * semi-transparent border can be measured against the ground it actually sits on.
 */

export const hexToRgb = (hex) => {
  const h = hex.replace('#', '');
  const full = h.length === 3 ? h.split('').map((c) => c + c).join('') : h;
  return {
    r: parseInt(full.slice(0, 2), 16),
    g: parseInt(full.slice(2, 4), 16),
    b: parseInt(full.slice(4, 6), 16)
  };
};

export const rgbToHex = ({ r, g, b }) =>
  '#' + [r, g, b].map((v) => Math.round(v).toString(16).padStart(2, '0')).join('').toUpperCase();

/** sRGB channel to linear light, per WCAG 2.1. */
const linearize = (c) => {
  const s = c / 255;
  return s <= 0.03928 ? s / 12.92 : ((s + 0.055) / 1.055) ** 2.4;
};

export const relativeLuminance = (hex) => {
  const { r, g, b } = hexToRgb(hex);
  return 0.2126 * linearize(r) + 0.7152 * linearize(g) + 0.0722 * linearize(b);
};

export const contrastRatio = (fg, bg) => {
  const a = relativeLuminance(fg);
  const b = relativeLuminance(bg);
  const [hi, lo] = a > b ? [a, b] : [b, a];
  return (hi + 0.05) / (lo + 0.05);
};

/** Composite a colour at `alpha` over an opaque background, returning the visible hex. */
export const flatten = (hex, alpha, overHex) => {
  if (alpha >= 1) return hex.toUpperCase();
  const f = hexToRgb(hex);
  const b = hexToRgb(overHex);
  return rgbToHex({
    r: f.r * alpha + b.r * (1 - alpha),
    g: f.g * alpha + b.g * (1 - alpha),
    b: f.b * alpha + b.b * (1 - alpha)
  });
};

export const round = (n) => Math.round(n * 100) / 100;

/**
 * WCAG 2.1 thresholds.
 * `normal` is body text under 18.66px regular / 24px bold.
 * `large` is 24px+ regular or 18.66px+ bold.
 * `ui` is the 1.4.11 non-text threshold for borders, icons and focus rings.
 */
export const THRESHOLDS = { normal: 4.5, large: 3, ui: 3, enhanced: 7 };

export const grade = (ratio, threshold) => (ratio >= threshold ? 'pass' : 'fail');

/** AA/AAA label for a text pair, used in the generated documentation. */
export const wcagLabel = (ratio) => {
  if (ratio >= 7) return 'AAA';
  if (ratio >= 4.5) return 'AA';
  if (ratio >= 3) return 'AA Large only';
  return 'Fail';
};
