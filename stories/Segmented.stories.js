/**
 * Segmented control. Filling a gap the brand book already proved exists.
 */
import { DocsPageButtons } from '../.storybook/docs-pages';

const build = ({ options, selected, variant, size, fill, label }) => {
  const group = document.createElement('div');
  group.className = [
    'a-segmented',
    variant === 'brand' ? 'a-segmented--brand' : '',
    size === 'small' ? 'a-segmented--small' : '',
    fill ? 'a-segmented--fill' : ''
  ].filter(Boolean).join(' ');
  group.setAttribute('role', 'group');
  group.setAttribute('aria-label', label);

  const items = String(options).split(',').map((s) => s.trim()).filter(Boolean);
  items.forEach((text, i) => {
    const btn = document.createElement('button');
    btn.type = 'button';
    btn.className = 'a-segmented__option';
    btn.textContent = text;
    btn.setAttribute('aria-pressed', String(i === Number(selected)));
    btn.addEventListener('click', () => {
      [...group.children].forEach((c) => c.setAttribute('aria-pressed', 'false'));
      btn.setAttribute('aria-pressed', 'true');
    });
    group.appendChild(btn);
  });
  return group;
};

const buildDemo = (args) => {
  const demo = document.createElement('div');
  demo.className = 'a-buttons-demo';

  const preview = document.createElement('div');
  preview.className = 'a-buttons-demo__preview';
  preview.appendChild(build(args));

  const note = document.createElement('div');
  note.className = 'a-buttons-demo__note';
  note.innerHTML = '<strong>This one is live.</strong> Rewrite the label, switch the variant, change the size and the state, and watch what the system will and will not let you break.';

  demo.append(preview, note);
  return demo;
};

export default {
  title: 'Components/Buttons',
  tags: ['autodocs'],
  render: build,
  argTypes: {
    options: { control: 'text', description: 'Comma separated. Two to five options. More than five is a select, not a segmented control.' },
    selected: { control: { type: 'number', min: 0 }, description: 'Index of the selected option.' },
    variant: { control: 'inline-radio', options: ['default', 'brand'] },
    size: { control: 'inline-radio', options: ['default', 'small'] },
    fill: { control: 'boolean', description: 'Span the container instead of sitting inline.' },
    label: { control: 'text', description: 'Accessible name for the group. Required: the options alone do not say what is being chosen.' }
  },
  args: {
    options: 'CSS variables, JSON, Tailwind, Figma',
    selected: 0,
    variant: 'default',
    size: 'default',
    fill: false,
    label: 'Token export format'
  },
  parameters: {
    docs: {
      page: DocsPageButtons,
      description: {
        component:
          'One choice from a small fixed set, where the options are peers and the whole set is worth ' +
          'showing at once. Two to five options. Beyond five it is a select.\n\n' +
          '**Why it was added.** The brand book already builds this twice by hand, in the Handover ' +
          'section, for the four token formats and the six knowledge files. It was never a component, ' +
          'so the next one would have been rebuilt differently again.\n\n' +
          '**Construction.** A recessed track holds the set and the selected option sits on a raised ' +
          'thumb. The hand-built version simply turned the active button blue, which reads as several ' +
          'separate buttons that happen to be adjacent. Track and thumb say "these are one control, ' +
          'pick one" without a label having to explain it.\n\n' +
          '**Accessibility.** Selection is carried by fill and text weight, not by hue, so the control ' +
          'survives mono print. Every option clears the 32px target floor, and the small variant stops ' +
          'at the 24px WCAG 2.5.8 minimum. The group needs an `aria-label`: the options alone never say ' +
          'what is being chosen.'
      }
    }
  }
};

export const Default = { render: buildDemo };

export const Brand = {
  args: { variant: 'brand', label: 'Token export format' },
  parameters: {
    docs: {
      description: {
        story:
          'For the one segmented control that is a primary choice on its surface rather than a quiet ' +
          'filter. Same rule as the CTA: one per surface. Two brand segmented controls on one page ' +
          'means neither is primary.'
      }
    }
  }
};

export const Small = {
  args: { size: 'small', options: 'Steps, Reasoning, Search, Coding', label: 'Trace view' },
  parameters: {
    docs: {
      description: {
        story: 'For dense surfaces. 24px is the floor, and it does not go lower.'
      }
    }
  }
};

export const TwoUp = {
  name: 'Two options',
  args: { options: 'Light, Dark', label: 'Theme' }
};

export const Fill = {
  name: 'Full width',
  args: { fill: true, options: 'Overview, Architecture, Outcomes', label: 'Case study section' }
};

export const TheRealCase = {
  name: 'The brand book case',
  render: () => {
    const wrap = document.createElement('div');
    wrap.className = 'sb-stack';

    const one = document.createElement('div');
    one.className = 'sb-stack';
    one.style.gap = '8px';
    const l1 = document.createElement('span');
    l1.className = 'a-label a-label--quiet';
    l1.textContent = 'The values, four formats';
    one.append(l1, build({ options: 'CSS variables, JSON, Tailwind v4, Figma', selected: 0, variant: 'brand', label: 'Token export format' }));

    const two = document.createElement('div');
    two.className = 'sb-stack';
    two.style.gap = '8px';
    const l2 = document.createElement('span');
    l2.className = 'a-label a-label--quiet';
    l2.textContent = 'The judgement, six files';
    two.append(l2, build({ options: 'README, principles, typography, grid, specs, craft', selected: 0, size: 'small', label: 'Knowledge file' }));

    const note = document.createElement('p');
    note.className = 'sb-note';
    note.textContent =
      'The two controls the brand book builds by hand, rebuilt as one component. The format switcher ' +
      'is the primary choice on that surface so it takes the brand variant; the file switcher is a ' +
      'quiet navigation and takes the default.';

    wrap.append(one, two, note);
    return wrap;
  },
  parameters: { controls: { disable: true } }
};
