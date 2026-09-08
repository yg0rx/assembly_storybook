/**
 * Logo. Supplied artwork, framed and sized. Never rebuilt.
 *
 * Three families, four fields each. Only the colour master and the mono master
 * are real files; both reversed states are the colour master under a filter.
 */
import symbol from '../assets/logo-symbol.svg';
import symbolMono from '../assets/logo-symbol-mono.png';
import primary from '../assets/logo-primary-lockup.svg';
import primaryMono from '../assets/logo-primary-lockup-mono.png';
import descriptor from '../assets/logo-descriptor-lockup.png';
import descriptorMono from '../assets/logo-descriptor-lockup-mono.png';
import previous from '../assets/logo-previous-cloud-assembly.webp';

const h = (html) => {
  const t = document.createElement('template');
  t.innerHTML = html.trim();
  return t.content.firstElementChild;
};

const FAMILIES = {
  symbol: { colour: symbol, mono: symbolMono, name: 'Symbol', isSymbol: true },
  primary: { colour: primary, mono: primaryMono, name: 'Primary lockup' },
  descriptor: { colour: descriptor, mono: descriptorMono, name: 'Descriptor lockup' }
};

/** The four approved fields, in the order they are allowed to be reached for. */
const FIELDS = [
  { key: 'colour', ground: 'white', label: 'Full colour, white', note: 'The default. Use this unless the ground makes it impossible.' },
  { key: 'mono', ground: 'white', label: 'Mono ink, white', note: 'One-colour print, faxes, engraving, and any partner template that forbids colour.' },
  { key: 'reversed-ink', ground: 'ink', label: 'Reversed, ink', note: 'On the dark theme ground and on photography that is dark enough to hold it.' },
  { key: 'reversed-blue', ground: 'blue', label: 'Reversed, Assembly Blue', label2: true, note: 'The brand field. The whole mark turns white, descriptor included.' }
];

const DESCRIPTOR_FIELDS = [FIELDS[0], FIELDS[3]];

const version = (familyKey, field) => {
  const fam = FAMILIES[familyKey];
  const reversed = field.key.startsWith('reversed');
  const src = field.key === 'mono' ? fam.mono : fam.colour;
  const alt = `Assembly ${fam.name.toLowerCase()}, ${field.label.toLowerCase()}`;
  return `
    <figure class="a-version">
      <div class="a-version__ground a-version__ground--${field.ground}${fam.isSymbol ? ' a-version__ground--symbol' : ''}${familyKey === 'descriptor' ? ' a-version__ground--descriptor' : ''}">
        <img src="${src}" alt="${alt}"${reversed ? ' class="a-lockup--reversed"' : ''}>
      </div>
      <figcaption>
        <span class="a-label">${field.label}</span>
        <h3>${fam.name}</h3>
        <p>${field.note}</p>
      </figcaption>
    </figure>
  `;
};

const familyRow = (key, fields = FIELDS) => h(`
  <div class="a-versions ${fields.length === 2 ? 'a-versions--descriptor-pair' : 'a-versions--quad'}">
    ${fields.map((f) => version(key, f)).join('')}
  </div>
`);

export default {
  title: 'Brand/Logo',
  tags: ['autodocs'],
  parameters: {
    controls: { disable: true },
    docs: {
      description: {
        component:
          'A precise, compact identity built to stay recognisable as Assembly grows. ' +
          'Its pointed corners move upward; the double S carries the pace of fast iteration.\n\n' +
          '**Three families.** The primary lockup opens the section, followed by the full descriptor ' +
          'lockup carrying CLOUD SOLUTIONS, then the symbol alone. The descriptor has two full versions: ' +
          'full colour on white and fully reversed on Assembly Blue.\n\n' +
          'Use the supplied artwork as delivered. Do not rebuild a lockup, ' +
          'reset it in substitute type, or scale the symbol and wordmark independently. Only the ' +
          'colour and mono masters are real files: both reversed states are the colour master under ' +
          '`filter: brightness(0) invert(1)`, so a reversed mark can never drift from the one it reverses.'
      }
    }
  }
};

export const Primary = {
  name: 'Primary lockup',
  render: () => familyRow('primary'),
  parameters: {
    docs: {
      description: {
        story:
          'Use the compact expression once the audience knows Assembly: product ' +
          'interfaces, repeat surfaces, footers, and anywhere the descriptor would fall below its minimum.'
      }
    }
  }
};

export const Descriptor = {
  name: 'Descriptor lockup',
  render: () => familyRow('descriptor', DESCRIPTOR_FIELDS),
  parameters: {
    docs: {
      description: {
        story:
          'Use the full brand version for first contact, print, proposals, and any surface where ' +
          'the category is not already obvious. CLOUD SOLUTIONS is part of the mark, not a caption, ' +
          'so it may never be removed, re-typed or set separately.'
      }
    }
  }
};

export const Symbol = {
  render: () => familyRow('symbol'),
  parameters: {
    docs: {
      description: {
        story:
          'Square artwork, so it is sized on its own height rather than on a wordmark width. The stem ' +
          'width inside it is the clear-space unit x, at 0.214 times the symbol height. Use it for ' +
          'avatars, favicons and tight interface placements only, never as a replacement for a lockup ' +
          'on a first-contact surface.'
      }
    }
  }
};

/** Circles at the sizes profile surfaces actually offer. */
const AVATAR_SIZES = [128, 96, 64];

const avatar = (px, ground, reversed) => `
  <figure class="a-avatar-cell">
    <div class="a-avatar a-avatar--${ground}" style="--avatar-size: ${px}px">
      <img src="${symbol}" alt="Assembly symbol at the size a ${px} pixel circular avatar gives it"${reversed ? ' class="a-lockup--reversed"' : ''}>
    </div>
    <figcaption class="a-num">${px}px</figcaption>
  </figure>
`;

export const SymbolInCircle = {
  name: 'Circular applications',
  render: () => h(`
    <div class="a-avatars">
      <section class="a-avatars__block">
        <span class="a-label">The symbol, downscaled</span>
        <div class="a-avatars__ladder">
          ${AVATAR_SIZES.map((px) => avatar(px, 'bare', false)).join('')}
          <figure class="a-avatar-cell a-avatar-cell--stop">
            <div class="a-avatar a-avatar--bare a-avatar--stop" style="--avatar-size: 48px">
              <img src="${symbol}" alt="Assembly symbol in a 48 pixel circle, below the approved floor">
            </div>
            <figcaption class="a-num">48px</figcaption>
          </figure>
        </div>
        <p class="a-avatars__note"><strong>64px is the minimum acceptable circle.</strong> The symbol sits at half the diameter, so a 64px circle is the smallest one that still holds the mark at its own 32px floor. At 48px the symbol drops to 24px, where the diagonal collapses, so the circle is dropped and the name carries the row alone.</p>
      </section>
    </div>
  `),
  parameters: {
    docs: {
      description: {
        story:
          'Circles are what profile surfaces impose: social accounts, contact rows, comment threads, ' +
          'presence indicators and team lists all crop to a circle whether the artwork suits one or not. ' +
          'The symbol suits one, and the geometry is the reason.\n\n' +
          '**The containment rule.** A square inscribed in a circle reaches 70.7 percent of the diameter ' +
          'at absolute most, and a mark placed at that limit touches the rim at four points. Assembly holds ' +
          'the symbol at **50 percent of the diameter**, which keeps clear space on every side, survives the ' +
          'ring and border treatments platforms add without asking, and needs no round-specific artwork.\n\n' +
          '**The floor that follows.** Containment at 50 percent means a circle is twice the symbol inside it, ' +
          'so the approved 32px symbol floor produces a 64px avatar floor. The containment percentage is a ' +
          'system choice rather than a measured failure point, so ratifying the percentage ratifies the floor ' +
          'with it.\n\n' +
          '**Never** crop a lockup into a circle, never centre the symbol by its bounding triangle rather than ' +
          'its square artboard, and never place the descriptor on a round surface at any size.'
      }
    }
  }
};

export const CloudSolutionsMustRead = {
  name: 'Choose the family by width',
  render: () => h(`
    <div class="a-logo-threshold">
      <div class="a-logo-threshold__rule">
        <span class="a-label">The application rule</span>
        <p class="a-logo-threshold__claim">Choose the family before you scale the artwork.</p>
      </div>
      <div class="a-logo-threshold__rail">
        <article class="a-logo-threshold__family a-logo-threshold__family--descriptor">
          <span class="a-label">256px and above</span>
          <div class="a-logo-threshold__stage">
            <img class="a-logo-threshold__descriptor" src="${descriptor}" alt="Descriptor lockup shown at a readable review size">
          </div>
          <h3>Descriptor lockup</h3>
          <p>Use when the category must travel with the name. CLOUD SOLUTIONS remains visibly separate from the wordmark.</p>
          <dl class="a-logo-threshold__spec">
            <div><dt>Ratio</dt><dd class="a-num">3.86 : 1</dd></div>
            <div><dt>Reach for it on</dt><dd>Proposals, print, first contact, co-branded surfaces</dd></div>
          </dl>
        </article>
        <article class="a-logo-threshold__family a-logo-threshold__family--primary">
          <span class="a-label">112px to 255px</span>
          <div class="a-logo-threshold__stage">
            <img class="a-logo-threshold__primary" src="${primary}" alt="Primary lockup shown at a proportional review size">
          </div>
          <h3>Primary lockup</h3>
          <p>Use after the audience knows Assembly, or whenever the descriptor would fall below 256px.</p>
          <dl class="a-logo-threshold__spec">
            <div><dt>Ratio</dt><dd class="a-num">5.36 : 1</dd></div>
            <div><dt>Reach for it on</dt><dd>Product chrome, footers, decks, repeat surfaces</dd></div>
          </dl>
        </article>
        <article class="a-logo-threshold__family a-logo-threshold__family--symbol">
          <span class="a-label">32px to 111px</span>
          <div class="a-logo-threshold__stage a-logo-threshold__stage--symbol">
            <img class="a-logo-threshold__symbol" src="${symbol}" alt="Assembly symbol shown at a proportional review size">
          </div>
          <h3>Symbol</h3>
          <p>Use only in recognised contexts such as avatars, favicons, and compact interface placements.</p>
          <dl class="a-logo-threshold__spec">
            <div><dt>Ratio</dt><dd class="a-num">1 : 1</dd></div>
            <div><dt>Reach for it on</dt><dd>Avatars, favicons, app icons, table and list rows</dd></div>
          </dl>
        </article>
        <article class="a-logo-threshold__family a-logo-threshold__family--stop">
          <div class="a-logo-threshold__stop-specimen">
            <span class="a-label">Below 32px</span>
            <div class="a-logo-threshold__stage a-logo-threshold__stage--stop">
              <figure class="a-floor-compare__item">
                <img src="${symbol}" alt="Assembly symbol at its 32 pixel floor" style="--floor-size: 32px">
                <figcaption class="a-num">32px, the floor</figcaption>
              </figure>
              <figure class="a-floor-compare__item a-floor-compare__item--fails">
                <img src="${symbol}" alt="Assembly symbol at 24 pixels, where the diagonal begins to collapse" style="--floor-size: 24px">
                <figcaption class="a-num">24px, breaks</figcaption>
              </figure>
            </div>
          </div>
          <div class="a-logo-threshold__stop-copy">
            <h3>Do not place the logo</h3>
            <p>Eight pixels is the whole difference. At 24px the 45 degree diagonal and the counter inside the symbol stop resolving, so use a larger surface or remove the mark. Recognition is not a reason to publish damaged artwork.</p>
          </div>
        </article>
      </div>
      <p class="a-logo-threshold__caveat">The three cards above are set at equal optical weight so each family can be judged on its own merits. They are not to scale. In production the floors stand at 8 : 3.5 : 1, meaning the descriptor needs eight times the width the symbol does before it is legible.</p>
    </div>
  `),
  parameters: {
    docs: {
      description: {
        story:
          '**The sizing rule.** A lockup is chosen by the width available to it, never by shrinking the ' +
          'one you already have. Cross a floor and you change family, because each family fails for a ' +
          'different reason: the descriptor loses `CLOUD SOLUTIONS` first, the primary loses the wordmark ' +
          'counters, and the symbol loses its 45 degree diagonal last. That order is why the symbol survives ' +
          'to 32px and the descriptor does not.\n\n' +
          '**Why these three are drawn the same size here.** The families carry different aspect ratios, ' +
          '3.86:1, 5.36:1 and 1:1, so matching their widths would let the symbol dominate the row and push ' +
          'the descriptor into the background. Optical weight, not measured width, is what decides whether a ' +
          'mark sits correctly in a space. Each card holds one stage of equal height, each mark is centred in ' +
          'it, and each is scaled until it carries the same presence as its neighbours. Apply the same ' +
          'judgement on a real surface: measure the space, pick the family the floor allows, then balance it ' +
          'by eye rather than by filling the box.\n\n' +
          'Production minimums are the widths named on each card and documented in Application minimums.'
      }
    }
  }
};

export const Heritage = {
  name: 'Before and after',
  render: () => h(`
    <div class="a-versions a-versions--trio">
      <figure class="a-version">
        <div class="a-version__ground a-version__ground--white">
          <img src="${previous}" alt="The previous Cloud Assembly logo, a teal and navy peak beside a two-word wordmark">
        </div>
        <figcaption>
          <span class="a-label">Before, superseded</span>
          <h3>Cloud Assembly</h3>
          <p>Retired. Never use on a new surface.</p>
        </figcaption>
      </figure>
      <figure class="a-version">
        <div class="a-version__ground a-version__ground--white">
          <img src="${descriptor}" alt="Assembly descriptor lockup on white">
        </div>
        <figcaption>
          <span class="a-label">After, current</span>
          <h3>Descriptor lockup</h3>
          <p>The category survived the change, as CLOUD SOLUTIONS.</p>
        </figcaption>
      </figure>
      <figure class="a-version">
        <div class="a-version__ground a-version__ground--blue">
          <img class="a-lockup--reversed" src="${primary}" alt="Assembly primary lockup reversed on Assembly Blue">
        </div>
        <figcaption>
          <span class="a-label">After, current</span>
          <h3>Primary lockup, reversed</h3>
          <p>The compact expression on the brand field.</p>
        </figcaption>
      </figure>
    </div>
  `)
};

export const MeasuredGeometry = {
  name: 'Application minimums',
  render: () => h(`
    <div class="a-scroller">
      <table class="a-table">
        <thead>
          <tr>
            <th scope="col">Family</th>
            <th scope="col">System role</th>
            <th scope="col">Ratio</th>
            <th scope="col">Assembly minimum</th>
            <th scope="col">Below the minimum</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Descriptor lockup</td>
            <td>Full brand version with category clarity</td>
            <td class="a-num">3.86 : 1</td>
            <td class="a-num">256px</td>
            <td>Switch to the primary lockup</td>
          </tr>
          <tr>
            <td>Primary lockup</td>
            <td>Aesthetically polished, compact expression</td>
            <td class="a-num">5.36 : 1</td>
            <td class="a-num">112px</td>
            <td>Switch to the symbol</td>
          </tr>
          <tr>
            <td>Symbol</td>
            <td>Avatars, favicons, tight placements</td>
            <td class="a-num">1 : 1</td>
            <td class="a-num">32px</td>
            <td>Nothing. Do not place the mark.</td>
          </tr>
        </tbody>
      </table>
    </div>
  `),
  parameters: {
    docs: {
      description: {
        story:
          'Every minimum includes a legibility buffer above the measured asset failure point and ' +
          'lands on the 4px grid. The final column makes the switch mandatory.'
      }
    }
  }
};
