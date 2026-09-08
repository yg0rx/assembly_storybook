import '../css/index.css';
import './storybook.css';
import theme from './theme';
import { DocsPage } from './docs-pages';

/** @type {import('@storybook/html-vite').Preview} */
const preview = {
  parameters: {
    layout: 'padded',
    controls: { expanded: true },
    docs: { theme, page: DocsPage },
    /**
     * a11y violations fail the story rather than warning quietly. This is the
     * guardrail, so it is not set to 'todo'.
     *
     * colour-contrast is disabled here for the same reason it is disabled in
     * scripts/test-a11y.mjs: it is measured directly against the tokens by
     * npm run test:contrast, which checks every pair in both themes rather than
     * whatever happens to be rendered in a story. Leaving it on here would
     * duplicate the token-level measurements across individual stories. The
     * accepted decorative exceptions are recorded in
     * knowledge/contrast-exceptions.json.
     */
    a11y: {
      test: 'error',
      config: { rules: [{ id: 'color-contrast', enabled: false }] }
    },
    options: {
      storySort: {
        order: [
          'Brand', ['Logo', 'Partnership', 'Letter Grafism', 'Presentations'],
          'Foundations', ['Colour', 'Type', 'Voice', 'CTA', 'Pill'],
          'Components', ['Buttons', 'Forms', '*'],
          'Patterns'
        ]
      }
    }
  },

  /**
   * Light is the only theme this tool presents. The dark tokens still exist and
   * are still contrast-tested in both modes by npm run test:contrast, but the
   * brand ships light and a toggle implied a choice that is not on offer.
   */
  decorators: [
    (story) => {
      document.documentElement.setAttribute('data-theme', 'light');
      const wrapper = document.createElement('div');
      wrapper.className = 'sb-surface';
      const rendered = story();
      if (typeof rendered === 'string') wrapper.innerHTML = rendered;
      else wrapper.appendChild(rendered);
      return wrapper;
    }
  ]
};

export default preview;
