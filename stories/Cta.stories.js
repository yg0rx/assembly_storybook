/**
 * CTA. One primary per surface.
 *
 * The system is the source of truth for the set. There is no story per tier:
 * each catalogue row carries its own markup, which is both less to scroll and
 * impossible to leave out of date.
 */
import { catalog } from './catalog';
import { DocsPageCta } from '../.storybook/docs-pages';

const TIERS = {
  primary: 'a-cta--primary',
  secondary: 'a-cta--secondary',
  text: 'a-cta--text',
  'campaign-solid': 'a-cta--campaign a-cta--solid',
  'campaign-linked': 'a-cta--campaign',
  ai: 'a-cta--ai'
};

const cta = ({ label, tier, arrow, path, href, disabled }) => {
  const el = document.createElement(href ? 'a' : 'button');
  el.className = ['a-cta', TIERS[tier]].filter(Boolean).join(' ');
  if (href) el.href = href;
  else el.type = 'button';
  if (disabled) {
    if (href) el.setAttribute('aria-disabled', 'true');
    else el.disabled = true;
  }

  const text = document.createElement('span');
  if (tier === 'ai') text.className = 'a-cta__label';
  text.textContent = label;
  el.appendChild(text);

  if (path) {
    const p = document.createElement('span');
    p.className = 'a-cta__path';
    p.textContent = path;
    el.appendChild(p);
  } else if (arrow) {
    const a = document.createElement('span');
    a.className = 'a-cta__arrow';
    a.setAttribute('aria-hidden', 'true');
    if (arrow === 'svg') {
      a.innerHTML = `<svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M5 12h14M12 5l7 7-7 7" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/></svg>`;
    } else {
      a.textContent = arrow;
    }
    el.appendChild(a);
  }
  return el;
};

export default {
  title: 'Foundations/CTA',
  tags: ['autodocs'],
  render: cta,
  argTypes: {
    label: { control: 'text' },
    tier: { control: 'select', options: Object.keys(TIERS) },
    arrow: { control: 'select', options: ['svg', '→', '↗', ''] },
    path: { control: 'text', description: 'Campaign destination label. Replaces the arrow.' },
    href: { control: 'text', description: 'Set for navigation. Renders an <a>. Leave empty for a <button>.' },
    disabled: { control: 'boolean' }
  },
  args: { label: 'Book a call', tier: 'primary', arrow: 'svg', path: '', href: '#', disabled: false },
  parameters: {
    docs: {
      page: DocsPageCta,
      description: {
        component:
          'Give each surface one primary action. Secondary and tertiary options step back through fill ' +
          'and border, keeping the decision clear. A CTA that navigates is an ' +
          '`<a href>`; a CTA that acts is a `<button>`. Never a div with a click handler.'
      }
    }
  }
};

/**
 * The docs hero. This is the CTA the args table beside it personalises, so it
 * stays first. The system follows, then the individual tiers.
 */
export const Playground = {
  parameters: {
    docs: {
      description: {
        story: 'Change any value in the table beside this button. Every tier the system allows is on the tier control.'
      }
    }
  }
};

export const TheSystem = {
  name: 'The system',
  render: () => {
    const set = [
      [{ label: 'Book a call', tier: 'primary', arrow: 'svg', href: '#' }, 'The one action on the surface'],
      [{ label: 'Get started', tier: 'secondary', arrow: 'svg', href: '#' }, 'The alternative route, same page'],
      [{ label: 'Learn how it works', tier: 'text', arrow: 'svg', href: '#' }, 'Reading on, not converting'],
      [{ label: 'Secure yours', tier: 'campaign-solid', arrow: 'svg', href: '#' }, 'Time-bound campaign, full weight'],
      [{ label: 'Book now', tier: 'campaign-linked', path: 'Campaign', href: '#' }, 'Campaign action naming its destination'],
      [{ label: 'GenAI', tier: 'ai', arrow: 'svg', href: '#' }, 'The one AI action'],
      [{ label: 'Submit', tier: 'primary', arrow: '' }, 'Acts instead of navigating, so a real button'],
      [{ label: 'Book a call', tier: 'primary', arrow: 'svg', href: '#', disabled: true }, 'Disabled, the action exists but is not available']
    ];
    const system = catalog(
      set.map(([args, use]) => ({ node: cta(args), use })),
      { label: 'Every approved CTA tier and state' }
    );
    system.classList.add('a-catalog--cta-system');
    return system;
  },
  parameters: {
    controls: { disable: true },
    docs: {
      description: {
        story:
          'The source of truth for the set. Every action sits beside the job it does, with its own markup one ' +
          'click below it. The two-column catalogue follows the Pill variant pattern so each action and its role ' +
          'can be compared at a glance.\n\n' +
          'The last two rows are states rather than tiers. **Submit** has no `href`, so it renders a real ' +
          '`<button type="button">`. **GenAI** is the single exception to the one-colour rule: it keeps the pill ' +
          'geometry and is the only action carrying `accent-ai`, so colour and label style do the separating rather ' +
          'than a new component.'
      }
    }
  }
};
