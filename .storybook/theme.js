import { create } from 'storybook/theming';
import tokens from '../dist/tokens.json';
import brandImage from '../assets/logo-primary-lockup.svg';

/**
 * Storybook chrome, themed from the system's own tokens.
 *
 * Nothing here is a literal colour. If a token moves, the tool that documents
 * the system moves with it, which is the same rule the components follow.
 */

const color = (name) => tokens.color[name].$value;
const px = (name) => parseInt(tokens.radius[name].$value, 10);

/** Storybook's theme API takes plain colour strings, so tints resolve here. */
const tint = (name, alpha) => {
  const hex = color(name).replace('#', '');
  const [r, g, b] = [0, 2, 4].map((i) => parseInt(hex.slice(i, i + 2), 16));
  return `rgba(${r}, ${g}, ${b}, ${alpha})`;
};

export default create({
  base: 'light',

  brandTitle: 'Assembly brand system',
  brandUrl: 'https://www.assembly.cloud.au',
  brandImage,
  brandTarget: '_blank',

  colorPrimary: color('blue-700'),
  colorSecondary: color('blue-700'),

  // Assembly Cloud as the app ground, white as the content ground. The same
  // relationship the brand book uses between section and card.
  appBg: color('blue-100'),
  appContentBg: color('white'),
  appPreviewBg: color('white'),
  appHoverBg: tint('blue-700', 0.06),
  appBorderColor: tint('blue-700', 0.18),
  appBorderRadius: px('radius-core'),

  fontBase: 'Rubik, Arial, sans-serif',
  fontCode: "ui-monospace, 'SF Mono', Menlo, monospace",

  textColor: color('ink-900'),
  textInverseColor: color('white'),
  // ink-500 rather than ink-400: the muted token fails AA on white and the tool
  // documenting that failure should not reproduce it.
  textMutedColor: color('ink-500'),

  barTextColor: color('ink-500'),
  barHoverColor: color('blue-700'),
  barSelectedColor: color('blue-700'),
  barBg: color('white'),

  buttonBg: color('white'),
  buttonBorder: tint('blue-700', 0.18),
  booleanBg: color('ink-100'),
  booleanSelectedBg: color('white'),

  inputBg: color('white'),
  inputBorder: tint('blue-700', 0.34),
  inputTextColor: color('ink-900'),
  inputBorderRadius: px('radius-core')
});
