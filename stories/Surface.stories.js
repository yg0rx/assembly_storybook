/**
 * Card, brand card and panel. One geometry, the 8px core radius.
 */

const h = (html) => {
  const t = document.createElement('template');
  t.innerHTML = html.trim();
  return t.content.firstElementChild;
};

export default {
  title: 'Components/Surface',
  tags: ['autodocs'],
  parameters: {
    controls: { disable: true },
    docs: {
      description: {
        component:
          'Cards keep one clear idea in view. Use the 8px core radius, lead with the outcome, ' +
          'and give the reader enough detail to decide what comes next.'
      }
    }
  }
};

export const Card = {
  render: () => h(`
    <div class="a-card">
      <span class="a-label">01 Bind to intent</span>
      <p class="a-body">Components consume surface-page, text-primary and action-primary. A component
      that hardcodes a hex breaks the moment it lands on a dark surface.</p>
    </div>
  `)
};

export const BrandCard = {
  name: 'Brand card',
  render: () => h(`
    <div class="a-brand-card-demo">
      <article class="a-brand-card">
        <svg class="a-brand-card__icon" viewBox="0 0 24 24" fill="none" stroke="currentColor"
             stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
          <path d="M12 3 3 8l9 5 9-5-9-5Z"/><path d="M3 12l9 5 9-5"/><path d="M3 16l9 5 9-5"/>
        </svg>
        <span class="a-label">Migration support</span>
        <h3>AWS Migration Acceleration Program</h3>
        <p>Move a defined workload with a clear business case, a migration plan, and access to eligible AWS funding. Assembly works beside your team from assessment through delivery, so knowledge stays with the people who run the platform.</p>
        <p class="a-brand-card__fit"><strong>Best for:</strong> teams with a live workload, an agreed migration outcome, and a sponsor ready to move.</p>
      </article>
      <article class="a-brand-card a-brand-card--advisory">
        <svg class="a-brand-card__icon" viewBox="0 0 24 24" fill="none" stroke="currentColor"
             stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
          <circle cx="12" cy="12" r="8"/><path d="m15 9-2 4-4 2 2-4 4-2Z"/>
        </svg>
        <span class="a-label">Focused advisory</span>
        <h3>Architecture review</h3>
        <p>Bring one infrastructure, security, cost, or reliability question. Assembly reviews the evidence with your team, makes the trade-offs visible, and returns a prioritised path your engineers can act on.</p>
        <p class="a-brand-card__fit"><strong>Best for:</strong> teams that need direction before committing to a larger programme.</p>
      </article>
      <p class="a-brand-card-demo__note"><strong>Icon guidance:</strong> search Flaticon for a clear outline icon that describes the capability. Match the set by stroke, corner character, and optical size. Confirm the licence and required attribution before publishing.</p>
    </div>
  `),
  parameters: {
    docs: {
      description: {
        story:
          'Two content densities keep the card useful across programmes and advisory offers. The inline icons are structural placeholders. ' +
          'For production, search Flaticon for a semantically accurate outline icon, then verify licence, attribution, stroke character, and optical size.'
      }
    }
  }
};

export const Panel = {
  render: () => h(`
    <div class="a-panel">
      <span class="a-label">Programme entitlements</span>
      <div class="a-panel__grid">
        <div class="a-panel-card">
          <h3>AWS Credits</h3>
          <p>Credits, technical support and discounts through our partner status.</p>
          <a class="a-panel-card__go" href="#">Learn more</a>
        </div>
        <div class="a-panel-card">
          <h3>CEI Programme</h3>
          <p>Funding for early-stage discovery and proof of concept work.</p>
          <a class="a-panel-card__go" href="#">Learn more</a>
        </div>
      </div>
    </div>
  `)
};
