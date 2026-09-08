/**
 * Pill. Classifies something that already exists, never carries the message.
 *
 * All variants is the source of truth for the set. There is no story per
 * variant: each catalogue row carries its own markup, which is both less to
 * scroll and impossible to leave out of date.
 */
import { catalog } from './catalog';
import { DocsPagePill } from '../.storybook/docs-pages';

const VARIANTS = {
  outline: { class: '', use: 'Service or capability' },
  solid: { class: 'a-pill--solid', use: 'Active stage or status' },
  soft: { class: 'a-pill--soft', use: 'Secondary taxonomy' },
  ai: { class: 'a-pill--ai', use: 'The one AI classification' },
  micro: { class: 'a-pill--micro', use: 'Funding or partner metadata' },
  metric: { class: 'a-pill--metric', use: 'Compact quantified proof' },
  announcement: { class: 'a-pill--announcement', use: 'Time-bound news or launch marker' }
};

const pill = ({ label, variant }) => {
  const el = document.createElement('span');
  el.className = ['a-pill', VARIANTS[variant]?.class].filter(Boolean).join(' ');
  el.textContent = label;
  return el;
};

const h = (html) => {
  const t = document.createElement('template');
  t.innerHTML = html.trim();
  return t.content.firstElementChild;
};

const limitations = ['Scalability constraints', 'Manual deployment', 'Compliance gaps', 'Database bottleneck'];

const px = (value) => `${Math.round(parseFloat(value))}px`;

/**
 * Reads the rendered pill rather than the stylesheet, so the numbers are what
 * the browser actually produced. Runs after paint because a pill has no box
 * until it is in the document.
 */
const measure = (node, root) => {
  const box = node.getBoundingClientRect();
  const style = getComputedStyle(node);
  const rule = root.querySelector('.a-pill-measure__rule');
  const set = (key, value) => {
    root.querySelector(`[data-spec="${key}"]`).textContent = value;
  };

  rule.style.width = `${Math.round(box.width)}px`;
  rule.querySelector('span').textContent = `${Math.round(box.width)}px`;
  set('height', px(box.height));
  set('padding', `${px(style.paddingTop)} / ${px(style.paddingLeft)}`);
  set('radius', px(style.borderRadius));
  set('type', `${px(style.fontSize)} / ${style.fontWeight}`);
};

/**
 * The docs hero. The args table beside it is the only control surface; this
 * side shows the result and what the result measured.
 */
const playground = (args) => {
  const root = h(`
    <div class="a-pill-measure">
      <div class="a-pill-measure__stage"></div>
      <div class="a-pill-measure__rule"><span></span></div>
      <dl class="a-pill-measure__spec">
        <div><dt>Height</dt><dd data-spec="height"></dd></div>
        <div><dt>Padding</dt><dd data-spec="padding"></dd></div>
        <div><dt>Radius</dt><dd data-spec="radius"></dd></div>
        <div><dt>Type</dt><dd data-spec="type"></dd></div>
      </dl>
    </div>
  `);

  const node = pill(args);
  root.querySelector('.a-pill-measure__stage').appendChild(node);
  requestAnimationFrame(() => measure(node, root));
  return root;
};

export default {
  title: 'Foundations/Pill',
  tags: ['autodocs'],
  render: pill,
  argTypes: {
    label: { control: 'text', description: 'Pill text. If this is a sentence, it belongs in a paragraph.' },
    variant: {
      control: 'select',
      options: Object.keys(VARIANTS),
      description: 'Emphasis tier. The variant is emphasis, the label carries the meaning.'
    }
  },
  args: { label: 'Scalable Cloud Infrastructure', variant: 'outline' },
  parameters: {
    docs: {
      page: DocsPagePill,
      description: {
        component:
          'A pill labels something that already exists. It never carries the whole message. ' +
          'It is a `<span>`: if it needs to be clickable it is a CTA, not a pill. ' +
          'Used for services, programme stages, funding metadata and compact quantified proof.\n\n' +
          'The label is the only thing you decide. Shape, type, casing and colour come from the variant, which is ' +
          'why the measurement bar under the preview is read-only: switching variant moves the geometry to a fixed ' +
          'step, never to a number you chose.'
      }
    }
  }
};

export const Playground = {
  render: playground,
  parameters: {
    docs: {
      description: {
        story: 'Change the label and the variant in the table beside this pill. The bar reports what the browser rendered.'
      }
    }
  }
};

export const AllVariants = {
  name: 'All variants',
  render: () => {
    const samples = [
      ['Scalable Cloud Infrastructure', 'outline'],
      ['AI & GenAI Integration', 'outline'],
      ['Operate', 'solid'],
      ['Evolve / Scale', 'soft'],
      ['GenAI', 'ai'],
      ['AWS funded', 'micro'],
      ['150+ FOUNDERS IMPACTED', 'metric'],
      ['New release', 'announcement']
    ];
    return catalog(
      samples.map(([label, variant]) => ({
        node: pill({ label, variant }),
        use: VARIANTS[variant].use
      })),
      { label: 'Every approved pill variant' }
    );
  },
  parameters: {
    controls: { disable: true },
    docs: {
      description: {
        story:
          'The source of truth for the set. Every pill sits beside the job it does, with its own markup one ' +
          'click below it.\n\n' +
          '**GenAI is the one exception to the one-colour rule.** `accent-ai` is a reserved meaning, not a second ' +
          'brand colour, and the label must always read GenAI: the hue is never the only carrier. **Announcement** ' +
          'is the only pill on a gradient, and it is time-bound. **Micro** holds a 24px floor, which is the WCAG 2.2 ' +
          'target size minimum exactly.'
      }
    }
  }
};

/**
 * The only live use of the gradient bullet treatment now that the bullet list
 * has its own page removed. It is here because this is where a pill row earns
 * its place: after a statement, not instead of one.
 */
export const InContext = {
  name: 'In context',
  render: () => h(`
    <section class="a-bullets-demo" aria-label="Pills in context">
      <span class="a-label">Challenge</span>
      <p>Deployments took up to three days. AWS spend kept climbing without cost controls, and the database slowed
      under peak demand. Limited compliance coverage was now holding back enterprise deals.</p>
      <ul class="a-bullets a-bullets--diamond">
        <li class="a-bullets__item">The constraints were clear</li>
      </ul>
      <div class="a-bullets-demo__pills">
        ${limitations.map((item) => `<span class="a-pill">${item}</span>`).join('')}
      </div>
    </section>
  `),
  parameters: {
    controls: { disable: true },
    docs: {
      description: {
        story:
          'A block of text states the situation, a gradient bullet bridges out of it, and pills name the ' +
          'constraints. Name the constraint, never the emotion around it. Two to four pills: beyond four the reader ' +
          'stops counting and starts skimming.'
      }
    }
  }
};
