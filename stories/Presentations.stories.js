/**
 * Presentation masters. Supplied 16:9 screens, shown without reconstruction.
 *
 * The point of the page is that one layout does all of this. The four masters
 * are four states of the same field, not four templates.
 */
import opening from '../assets/slide-master-01.png';
import content from '../assets/slide-master-02.png';
import lightClose from '../assets/slide-master-03.png';
import blueClose from '../assets/slide-master-04.png';

const MASTERS = [
  {
    src: opening,
    number: '01',
    title: 'Opening, blue',
    note: 'Use for the first frame. Partner marks stay quiet while the edge-anchored Letter Grafism establishes the brand.'
  },
  {
    src: content,
    number: '02',
    title: 'Content, light',
    note: 'Use for narrative and evidence. Keep the white field open and contain the graphic movement at the right edge.'
  },
  {
    src: lightClose,
    number: '03',
    title: 'Closing, light',
    note: 'Use when the signature and partner row need a quieter finish. Keep both anchored to the lower field.'
  },
  {
    src: blueClose,
    number: '04',
    title: 'Closing, blue',
    note: 'Use for a high-contrast final frame. The pattern owns the right field and the co-brand line owns the base.'
  }
];

/** What the quiet field takes without any change to the master around it. */
const PAYLOADS = [
  ['Narrative', 'Title and one supporting paragraph. The field carries the argument alone.'],
  ['Evidence', 'A row of proof cards. The gradient bands sit inside the quiet area, never over the pattern.'],
  ['Sequence', 'A process flow at the open edge, with the explanation beside it.'],
  ['Technical proof', 'A Code Style Text block, when the mechanism is the reason to believe.'],
  ['Classification', 'A pill row naming stages, services or funding metadata.'],
  ['Handover', 'Signature line and co-brand row, with the field left deliberately empty.']
];

const h = (html) => {
  const t = document.createElement('template');
  t.innerHTML = html.trim();
  return t.content.firstElementChild;
};

export default {
  title: 'Brand/Presentations',
  tags: ['autodocs'],
  parameters: {
    controls: { disable: true },
    docs: {
      description: {
        component:
          'One layout, held at 16:9, does the whole deck. A quiet content field, an edge-anchored Letter Grafism, ' +
          'a signature line and a co-brand row: the four masters change which of those is loud, never what they are ' +
          'or where they sit.\n\n' +
          'That is the discipline the deck is built on. Replace what is inside the quiet field and the deck stays ' +
          'recognisable across a pitch, a technical proposal and a partner-led session. Redraw the brand artwork or ' +
          'move its anchors and it stops being the same deck.\n\n' +
          '**Two partners, not one.** Decks carry AWS and Vanta together in co-participation. The partner row is a ' +
          'co-brand placement, so both marks follow the Partnership rules: equal cap height, one rule between them.'
      }
    }
  }
};

export const SlideDeckScreens = {
  name: 'Slide Deck screens',
  render: () => h(`
    <section class="a-presentations" aria-label="Approved Assembly Slide Deck screens">
      <header class="a-presentations__intro">
        <span class="a-label">Presentation system</span>
        <p class="a-intro">One layout. Four states of the same field.</p>
        <p>Alternate light and blue to pace the story. Use the content master for substance, then choose the closing field that gives the final message the right level of emphasis. Nothing moves between them except which element is carrying the frame.</p>
      </header>
      <div class="a-presentations__grid">
        ${MASTERS.map((master) => `
          <figure class="a-slide-master">
            <img src="${master.src}" alt="Assembly ${master.title.toLowerCase()} Slide Deck master">
            <figcaption>
              <span>${master.number}</span>
              <div><h3>${master.title}</h3><p>${master.note}</p></div>
            </figcaption>
          </figure>
        `).join('')}
      </div>

      <section class="a-presentations__section" aria-label="What the quiet field carries">
        <header class="a-presentations__intro">
          <span class="a-label">One field, six payloads</span>
          <p class="a-intro">The layout does not change when the content does.</p>
          <p>Every item below drops into the same protected area of the content master. This is why the deck does not need a template per topic: the master is the constant and the payload is the variable.</p>
        </header>
        <ul class="a-payload-grid">
          ${PAYLOADS.map(([title, note]) => `
            <li><b>${title}</b><span>${note}</span></li>
          `).join('')}
        </ul>
      </section>

    </section>
  `)
};
