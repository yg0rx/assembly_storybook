/**
 * Partnership. Co-branding is an art direction, not a badge wall.
 */
import descriptor from '../assets/cobrand-descriptor-powered-by-aws.png';
import logotypes from '../assets/cobrand-logotypes.png';
import compact from '../assets/cobrand-compact.png';
import credBadge from '../assets/cred-badge-aws-advanced.webp';

const h = (html) => {
  const t = document.createElement('template');
  t.innerHTML = html.trim();
  return t.content.firstElementChild;
};

const cobrand = ({ src, size, ground, reversed, label, title, note, alt }) => `
  <figure class="a-cobrand">
    <div class="a-cobrand__ground a-cobrand__ground--${ground}">
      <img class="a-cobrand__lockup${size ? ` a-cobrand__lockup--${size}` : ''}${reversed ? ' a-cobrand__lockup--reversed' : ''}"
           src="${src}" alt="${alt}">
    </div>
    <figcaption>
      <span class="a-label">${label}</span>
      <h3>${title}</h3>
      <p>${note}</p>
    </figcaption>
  </figure>
`;

export default {
  title: 'Brand/Partnership',
  tags: ['autodocs'],
  parameters: {
    controls: { disable: true },
    docs: {
      description: {
        component:
          'Assembly is an AWS Advanced Tier Services Partner. Show that relationship with two marks at one optical weight, ' +
          'separated by a single rule. Neither logo grows larger to claim the partnership.\n\n' +
          'These are the supplied lockups reproduced as delivered. **Do not rebuild them by placing ' +
          'the two logos next to each other.** Optical alignment is equal cap height. Scaling to ' +
          'equal image width makes one of them read as borrowed.'
      }
    }
  }
};

export const TheSet = {
  name: 'Co-brand lockups',
  render: () => h(`
    <div class="a-cobrand-set">
      ${cobrand({
        src: descriptor, size: '', ground: 'white',
        label: 'Full version, white', title: 'Descriptor co-brand, powered by AWS',
        note: 'Use for first contact, print, proposals and any surface where the relationship itself is the message.',
        alt: 'assembly, powered by aws'
      })}
      ${cobrand({
        src: logotypes, size: 'mid', ground: 'white',
        label: 'Logotypes only, white', title: 'Both wordmarks, divided by one rule',
        note: 'The default co-brand mark. Use it in decks, footers and partner rows where the audience already knows the relationship.',
        alt: 'assembly and aws'
      })}
      ${cobrand({
        src: compact, size: 'compact', ground: 'white',
        label: 'Compact, white', title: 'Symbol against the AWS mark',
        note: 'For tight interface placements and small print where the wordmark would fall under its 112px minimum.',
        alt: 'assembly symbol and aws'
      })}
      ${cobrand({
        src: logotypes, size: 'mid', ground: 'blue', reversed: true,
        label: 'Logotypes only, blue', title: 'The whole lockup turns white on Assembly Blue',
        note: 'Both marks reverse together, including the AWS smile. Never keep one mark in colour while the other reverses.',
        alt: 'assembly and aws, reversed'
      })}
    </div>
  `)
};

export const Reversal = {
  name: 'The reversal rule',
  render: () => h(`
    <div class="a-cobrand-set">
      ${cobrand({
        src: logotypes, size: 'mid', ground: 'white',
        label: 'Correct', title: 'Full colour on white',
        note: 'The default field. White by default, always.',
        alt: 'assembly and aws on white'
      })}
      ${cobrand({
        src: logotypes, size: 'mid', ground: 'blue', reversed: true,
        label: 'Correct', title: 'Fully reversed on Assembly Blue',
        note: 'One filter, both marks. There is no separate reversed asset, which is what guarantees the two can never drift apart.',
        alt: 'assembly and aws reversed on Assembly Blue'
      })}
    </div>
  `),
  parameters: {
    docs: {
      description: {
        story:
          'The reversed lockup is the same file with `filter: brightness(0) invert(1)`. Shipping a ' +
          'second asset would let the two versions diverge the first time one is re-exported.'
      }
    }
  }
};

export const Credentials = {
  render: () => h(`
    <div class="a-cred-row">
      <img class="a-cred-badge" src="${credBadge}" alt="AWS badge reading We are an AWS Advanced Partner">
      <div class="a-creds">
        <span class="a-cred a-cred--services"><i aria-hidden="true"></i>Advanced Tier Services</span>
        <span class="a-cred a-cred--services"><i aria-hidden="true"></i>AWS Well-Architected Partner Program</span>
        <span class="a-cred a-cred--genai"><i aria-hidden="true"></i>Generative AI Essentials</span>
        <span class="a-cred a-cred--technical"><i aria-hidden="true"></i>Technical Accredited</span>
        <span class="a-cred a-cred--practitioner"><i aria-hidden="true"></i>Cloud Practitioner</span>
      </div>
    </div>
  `),
  parameters: {
    docs: {
      description: {
        story:
          'The markers use AWS category colours, which are partner values and never Assembly brand ' +
          'colours. Each marker is decorative and aria-hidden: the credential name beside it carries ' +
          'the information, so the colour is never the only thing saying what a credential is.'
      }
    }
  }
};

export const ApplyingTheLogotypes = {
  name: 'Applying the logotypes',
  render: () => h(`
    <div class="a-scroller">
      <table class="a-table">
        <thead>
          <tr>
            <th scope="col">Measure</th>
            <th scope="col">Value</th>
            <th scope="col">Applies to</th>
          </tr>
        </thead>
        <tbody>
          <tr><td>Optical alignment</td><td>Equal cap height</td><td>Both wordmarks. Equal image width makes one read as borrowed.</td></tr>
          <tr><td>Divider</td><td>1px rule, x either side</td><td>Every logotype pair. Never a slash, a plus or a vertical bar.</td></tr>
          <tr><td>Clear space</td><td>x on all four sides</td><td>The lockup as a whole, from the outer edge of either mark.</td></tr>
          <tr><td>Descriptor minimum</td><td class="a-num">256px</td><td>Assembly application floor with a buffer above descriptor failure.</td></tr>
          <tr><td>Logotypes-only minimum</td><td class="a-num">112px</td><td>Assembly application floor across the wordmark.</td></tr>
          <tr><td>Under 112px</td><td>Compact version</td><td>Symbol against the AWS mark. Never shrink a wordmark pair past its minimum.</td></tr>
          <tr><td>Field</td><td>White by default</td><td>On Assembly Blue both marks go fully white. Never over active pattern detail.</td></tr>
          <tr><td>Order</td><td>Assembly first</td><td>Reverse only inside AWS-led material where AWS is the host brand.</td></tr>
        </tbody>
      </table>
    </div>
  `),
  parameters: {
    docs: {
      description: {
        story:
          'x is the logo clear-space unit: the width of the stem inside the symbol, which is 0.214 ' +
          'times the symbol height. Every co-brand placement is a size decision before it is a ' +
          'layout decision.'
      }
    }
  }
};
