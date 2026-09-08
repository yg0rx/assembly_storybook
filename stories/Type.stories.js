/**
 * Assembly typography: one live specimen, six production roles, and the rules
 * that stop weight, size, and family choices from drifting.
 */
import tokens from '../dist/tokens.json';

const ROLES = [
  {
    key: 'text-display', scale: 0.45, className: 'a-display', label: 'Display',
    sample: 'Founder momentum.',
    use: 'One decisive idea at the top of a major brand surface.',
    avoid: 'Paragraphs, stacked claims, or interface labels.'
  },
  {
    key: 'text-title', scale: 0.55, className: 'a-title', label: 'Title',
    sample: 'Clear outcomes.',
    use: 'Section openings and the main claim on a smaller surface.',
    avoid: 'Body copy or a substitute for display on a hero.'
  },
  {
    key: 'text-intro', className: 'a-intro', label: 'Intro',
    sample: 'Architecture that lasts beyond launch.',
    use: 'Editorial support that explains or qualifies the title.',
    avoid: 'Captions. It steps back through weight, not size.'
  },
  {
    key: 'text-body', className: 'a-body', label: 'Body',
    sample: 'Make complexity useful and easy to act on.',
    use: 'Explanations, product detail, and readable long-form copy.',
    avoid: 'Using a custom size to force hierarchy.'
  },
  {
    key: 'text-proof', scale: 0.7, className: 'a-proof', label: 'Proof',
    sample: '150+',
    use: 'One verified number tied to a source and context.',
    avoid: 'Decorative statistics or numbers without evidence.'
  },
  {
    key: 'text-label', className: 'a-label', label: 'Label',
    sample: 'We are specialists in cloud solutions',
    use: 'Eyebrows, metadata, and connective system language.',
    avoid: 'Sentences or any copy that must read as running text.'
  }
];

const value = (role) => tokens.type[role].$value;

const h = (html) => {
  const template = document.createElement('template');
  template.innerHTML = html.trim();
  return template.content.firstElementChild;
};

const liveSpecimen = () => {
  const root = h(`
    <section class="a-type-lab" aria-label="Rubik live specimen">
      <div class="a-type-lab__toolbar">
        <label class="a-type-control a-type-control--copy">
          <span>Preview copy</span>
          <input type="text" value="Cloud done with intent" aria-label="Preview copy">
        </label>
        <label class="a-type-control">
          <span>Weight</span>
          <select aria-label="Preview weight">
            <option value="300">300 Light</option>
            <option value="400" selected>400 Regular</option>
            <option value="500">500 Medium</option>
            <option value="700">700 Bold</option>
          </select>
        </label>
        <label class="a-type-control a-type-control--size">
          <span>Preview size</span>
          <input type="range" min="10" max="154" step="1" value="50" aria-label="Preview size in pixels">
          <output>50px</output>
        </label>
      </div>
      <div class="a-type-lab__stage" aria-live="polite">
        <p>Cloud done with intent</p>
      </div>
      <div class="a-type-lab__glyphs" aria-label="Rubik character pattern">
        <span>Aa</span><span>Gg</span><span>Rr</span><span>0123</span><span>10x</span><span>+ / { }</span>
      </div>
    </section>
  `);

  const copy = root.querySelector('input[type="text"]');
  const weight = root.querySelector('select');
  const size = root.querySelector('input[type="range"]');
  const output = root.querySelector('output');
  const sample = root.querySelector('.a-type-lab__stage p');

  const update = () => {
    sample.textContent = copy.value || 'Cloud done with intent';
    sample.style.fontSize = `${size.value}px`;
    sample.style.fontWeight = weight.value;
    output.value = `${size.value}px`;
  };

  copy.addEventListener('input', update);
  weight.addEventListener('change', update);
  size.addEventListener('input', update);
  update();
  return root;
};

export default {
  title: 'Foundations/Type',
  tags: ['autodocs'],
  parameters: {
    controls: { disable: true },
    docs: {
      description: {
        component:
          'Rubik carries every public Assembly word and number. Use the live field to inspect the family, then bind production copy to one of the six roles below. ' +
          'The font is self-hosted, so the system keeps its voice without depending on a network request.'
      }
    }
  }
};

export const LiveSpecimen = {
  name: 'Live specimen',
  render: liveSpecimen,
  parameters: {
    docs: {
      description: {
        story:
          'Opens at 50px, the size that shows the letterforms without turning the field into a hero. ' +
          'Type your own line, test the four assigned weights, and inspect it from 10px to 154px. ' +
          'This is a viewing instrument only. Shipping text must bind to a named role.'
      }
    }
  }
};

export const SixRoles = {
  name: 'The six roles',
  render: () => {
    const grid = document.createElement('div');
    grid.className = 'a-type-role-grid';

    for (const role of ROLES) {
      const t = value(role.key);
      const card = h(`
        <article class="a-type-role">
          <header>
            <span class="a-label">${role.label}</span>
            <code>${role.key}</code>
          </header>
          <p class="a-type-role__sample ${role.className}"${role.scale ? ` style="--specimen-scale: ${role.scale}"` : ''}>${role.sample}</p>
          <dl>
            <div><dt>Size</dt><dd>${t.fontSize}</dd></div>
            <div><dt>Line</dt><dd>${t.lineHeight}</dd></div>
            <div><dt>Track</dt><dd>${t.letterSpacing}</dd></div>
            <div><dt>Weight</dt><dd>${t.fontWeight}</dd></div>
          </dl>
        </article>
      `);
      grid.appendChild(card);
    }
    return grid;
  },
  parameters: {
    docs: {
      description: {
        story:
          'These roles are the complete production scale. Their values are read from dist/tokens.json, ' +
          'so the specimens and the token source cannot disagree.'
      }
    }
  }
};

export const WeightAsHierarchy = {
  name: 'Weight as hierarchy',
  render: () => h(`
    <div class="a-type-guidance">
      <div class="a-type-hierarchy">
        <span class="a-label">One role, one measure, two levels</span>
        <div class="a-type-hierarchy__copy">
          <p class="a-intro a-type-hierarchy__primary">Infrastructure that grows as fast as you do.</p>
          <p class="a-intro a-type-hierarchy__secondary">Reliability, security and cost control for the next 10x of growth.</p>
        </div>
      </div>
      <div class="a-type-rule-grid">
        <article>
          <span class="a-label">Primary statement</span>
          <b>Rubik 400</b>
          <p>Use the role's size, line height, and tracking without overrides. Regular carries the claim.</p>
        </article>
        <article>
          <span class="a-label">Secondary statement</span>
          <b>Rubik 300</b>
          <p>Keep the same role and the same text measure. Light makes it recede without turning it into a caption.</p>
        </article>
      </div>
    </div>
  `),
  parameters: {
    docs: {
      description: {
        story:
          'Both statements occupy the same 46ch text box. The primary line is set at twice the intro size, ' +
          'while the supporting line stays at the intro role and recedes at weight 300.'
      }
    }
  }
};

export const ApplicationRules = {
  name: 'Application rules',
  render: () => h(`
    <div class="a-type-application">
      <section>
        <span class="a-label">01 Choose the job</span>
        <h3>Bind copy to one of six roles.</h3>
        <p>If no role fits, rewrite or restructure the content. Do not solve a content problem with a new pixel size.</p>
      </section>
      <section>
        <span class="a-label">02 Keep the family</span>
        <h3>Rubik sets every public word and number.</h3>
        <p>Monospace belongs only to code expression and token names. Never retype the wordmark.</p>
      </section>
      <section>
        <span class="a-label">03 Control hierarchy</span>
        <h3>Change weight before size.</h3>
        <p>Use 300 to recede, 400 as the default, 500 for labels and emphasis, and 700 only for proof.</p>
      </section>
      <section>
        <span class="a-label">04 Protect readability</span>
        <h3>Respect the role's measure and case.</h3>
        <p>Body copy caps at 68ch. Uppercase belongs only to labels. Display and title use balanced wrapping.</p>
      </section>
    </div>
  `)
};
