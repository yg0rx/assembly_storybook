/**
 * Proof card. Rebuilt as a component from assembly_fixes/fragments/frag-02.png,
 * which is the source of truth for the fill, the band proportion and the pairing
 * of a bold value with a plain label.
 */

const h = (html) => {
  const t = document.createElement('template');
  t.innerHTML = html.trim();
  return t.content.firstElementChild;
};

const proof = [
  ['150+', 'Founders impacted'],
  ['$20M+', 'in AWS and VC funding unlocked'],
  ['500+', 'SaaS apps deployed'],
  ['$1.5M+', 'in AWS credits claimed for founders']
];

const card = ([value, label]) => `
  <article class="a-proof-card">
    <strong class="a-proof-card__value">${value}</strong>
    <span class="a-proof-card__label">${label}</span>
  </article>
`;

export default {
  title: 'Components/Proof card',
  tags: ['autodocs'],
  parameters: {
    controls: { disable: true },
    docs: {
      description: {
        component:
          'A proof card is one verified number and the context that makes it mean something. The gradient fill is the ' +
          'card. It never sits on a tinted panel, because a second blue ground flattens the fill that makes the card ' +
          'recognisable in the first place.\n\n' +
          '```html\n' +
          '<div class="a-proof-cards">\n' +
          '  <article class="a-proof-card">\n' +
          '    <strong class="a-proof-card__value">150+</strong>\n' +
          '    <span class="a-proof-card__label">Founders impacted</span>\n' +
          '  </article>\n' +
          '</div>\n' +
          '```\n\n' +
          '| Class | Role |\n| --- | --- |\n' +
          '| `.a-proof-cards` | Two-column grid. Collapses to one column below 760px. |\n' +
          '| `.a-proof-card` | The band. Fill is `--gradient-proof`, left to right, dark to light. |\n' +
          '| `.a-proof-card__value` | The number. The only bold text on the card. |\n' +
          '| `.a-proof-card__label` | The context. Sentence case, no full stop. |\n\n' +
          '**Rules.** Never publish a value without a source behind it. The value goes first and stays short enough to ' +
          'sit on the dark stop of the gradient, which is what keeps it readable. Labels stay to roughly six words, ' +
          'because a label that wraps breaks the band proportion the component depends on.\n\n' +
          '**Contrast caveat.** The label crosses the middle of the gradient, so it is set in `--color-blue-900` rather ' +
          'than brand blue. Brand blue over the gradient midpoint is close to invisible. A value longer than about six ' +
          'characters pushes the label further into the dark half and needs checking by eye.'
      }
    }
  }
};

export const Default = {
  render: () => h(`<div class="a-proof-cards">${proof.map(card).join('')}</div>`),
  parameters: {
    docs: {
      description: {
        story: 'Four cards is the working set: enough to establish a pattern of evidence, few enough to be read in one pass.'
      }
    }
  }
};

export const Single = {
  name: 'Single card',
  render: () => h(`<div class="a-proof-cards">${card(proof[1])}</div>`),
  parameters: {
    docs: {
      description: {
        story: 'One card carries a single headline number in a body of text. The grid class stays, so the card keeps its width behaviour.'
      }
    }
  }
};
