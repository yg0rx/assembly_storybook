/**
 * Letter Grafism. Supplied artwork, never rebuilt.
 */
import p05 from '../assets/pattern-05.png';
import p06 from '../assets/pattern-06.png';
import p07 from '../assets/pattern-07.png';
import p08 from '../assets/pattern-08.png';
import p09 from '../assets/pattern-09.png';
import p10 from '../assets/pattern-10.png';

const TILES = [
  [p05, 'Pattern 05'], [p06, 'Pattern 06'], [p07, 'Pattern 07'],
  [p08, 'Pattern 08'], [p09, 'Pattern 09'], [p10, 'Pattern 10']
];

const h = (html) => {
  const t = document.createElement('template');
  t.innerHTML = html.trim();
  return t.content.firstElementChild;
};

export default {
  title: 'Brand/Letter Grafism',
  tags: ['autodocs'],
  parameters: {
    controls: { disable: true },
    docs: {
      description: {
        component:
          'Letter Grafism turns the Assembly wordmark into a field for movement and recognition. Enlarge it beyond reading size, ' +
          'then crop it until the letterform behaves as composition rather than copy. Crop, gradient, and direction give each application its role.\n\n' +
          'This rationale is recorded in the Assembly source. The six supplied tiles remain master ' +
          'artwork at their original 870:1081 ratio. Never rebuild, stretch, recolour, or reset them in live type.'
      }
    }
  }
};

export const SingleApplication = {
  name: 'Single application',
  render: () => h(`
    <section class="a-letter-grafism" aria-label="Letter Grafism single application">
      <div class="a-letter-grafism__copy">
        <span class="a-label">Single application</span>
        <h2>Letterform as a composition field.</h2>
        <p>The drawn wordmark is enlarged beyond reading size, then cropped into a complete portrait module. It creates movement and recognition without asking the logo to decorate the layout.</p>
        <dl>
          <div><dt>Anchor</dt><dd>Keep movement at an outer edge.</dd></div>
          <div><dt>Content zone</dt><dd>Protect a quiet area for the message.</dd></div>
          <div><dt>Geometry</dt><dd>Use the supplied module whole. Never stretch it.</dd></div>
        </dl>
      </div>
      <figure class="a-letter-grafism__master">
        <img src="${p06}" alt="Assembly Letter Grafism application using supplied pattern 06">
        <figcaption><span>01</span> Supplied master, used whole</figcaption>
      </figure>
    </section>
  `)
};

export const Applications = {
  name: 'Further applications',
  render: () => h(`
    <section class="a-letter-grafism-system">
      <header>
        <span class="a-label">The six applications</span>
        <p class="a-intro">One letterform source. Six fixed crops.</p>
        <p>Combine complete modules with white gutters. The gutters are part of the composition, not spare padding.</p>
      </header>
      <div class="a-pattern-board" aria-label="Approved Assembly Letter Grafism applications">
        ${TILES.map(([src, name], index) => `
          <figure class="a-pattern-tile">
            <img src="${src}" alt="Approved Assembly ${name.toLowerCase()}">
            <figcaption><span>0${index + 1}</span>${name.replace('Pattern', 'Application')}</figcaption>
          </figure>
        `).join('')}
      </div>
    </section>
  `)
};

export const BandCrop = {
  name: 'Band crop',
  render: () => h(`
    <div class="a-pattern-band-demo">
      <figure class="a-pattern-tile a-pattern-tile--band">
        <img src="${p06}" alt="Approved Assembly pattern 06 cropped to a band">
      </figure>
      <div>
        <span class="a-label">Edge application</span>
        <h3>Crop to the neighbour, never through the source.</h3>
        <p>The adjacent content sets the row height. The artwork absorbs the crop and remains anchored at the edge.</p>
      </div>
    </div>
  `),
  parameters: {
    docs: {
      description: {
        story:
          'Beside another element, the tile is cropped to a band so the pair reads level. The element ' +
          'next to it sets the row height, and the pattern absorbs whatever remains.'
      }
    }
  }
};
