/** Voice principles transcribed and corrected from assembly_fixes/fragments/frag.svg. */

/**
 * Each trait is cut to one instruction. The full readings stay in
 * knowledge/design_principles.md; these are what fit on a card.
 */
const traits = [
  ['Collaborative', 'Sound like a partner in the work, not a supplier reporting on it.'],
  ['Precise', 'Benefit before feature, outcome before process. Every word earns its place.'],
  ['Creative', 'Energy from a clear idea, never from decoration.'],
  ['Human', 'Make complex ideas clear without talking down to the people doing the work.'],
  ['Strategic', 'Show the thinking behind the choice and leave a clear next step.'],
  ['Adaptive', 'Flex the tone for audience and channel. The clarity never flexes.']
];

const h = (html) => {
  const t = document.createElement('template');
  t.innerHTML = html.trim();
  return t.content.firstElementChild;
};

export default {
  title: 'Foundations/Voice',
  tags: ['autodocs'],
  parameters: {
    controls: { disable: true },
    docs: {
      description: {
        component:
          'Tone adapts by context. Character does not. Assembly sounds technically sharp, practically grounded, ' +
          'and genuinely invested in the partnership. These six traits come from the supplied fragment source; the language here corrects its copy errors without changing its intent.'
      }
    }
  }
};

export const SixTraits = {
  name: 'The six traits',
  render: () => h(`
    <section class="a-voice">
      <header>
        <span class="a-label">How we communicate</span>
        <p class="a-intro">Clear enough to act on. Human enough to trust.</p>
        <p>From a three-word ad to a technical proposal, Assembly leads with the outcome, names the mechanism, and stays close to the people responsible for the result.</p>
      </header>
      <div class="a-voice__grid">
        ${traits.map(([name, description]) => `<article><h3>${name}</h3><p>${description}</p></article>`).join('')}
      </div>
    </section>
  `)
};

