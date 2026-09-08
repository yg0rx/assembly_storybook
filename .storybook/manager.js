import { addons } from 'storybook/manager-api';
import theme from './theme';

addons.setConfig({
  theme,
  /**
   * Sidebar rows are plain text. The twelve drawn glyphs stay in
   * .storybook/icons.js, unwired, until a pattern for them is settled.
   */
  sidebar: {
    showRoots: true
  },
  toolbar: {
    title: { hidden: false },
    zoom: { hidden: false }
  }
});
