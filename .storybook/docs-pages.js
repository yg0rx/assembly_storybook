import React from 'react';
import { Title, Description, Primary, Controls, Stories } from '@storybook/addon-docs/blocks';

const Invite = () =>
  React.createElement(
    'div',
    { className: 'sb-docs-hero__head' },
    React.createElement('span', { className: 'a-label' }, 'Make it yours'),
    React.createElement(
      'p',
      null,
      'This one is live. Rewrite the label, switch the variant, change the size and the state, ' +
      'and watch what the system will and will not let you break.'
    )
  );

/**
 * Docs page templates.
 *
 * Three fixes applied here rather than per component. First, the stock autodocs
 * template renders the first story twice, as the Primary hero and again in the
 * Stories list, because the Stories block defaults to includePrimary: true.
 * Second, the args table is the control surface for the hero above it, so it
 * sits beside that component instead of under it. Third, the Stories block's
 * "Stories" heading is dropped: it always says the same word and never
 * introduces what follows it, so it is a label, not an eyebrow.
 */
export const DocsPage = () =>
  React.createElement(
    React.Fragment,
    null,
    React.createElement(Title),
    React.createElement(Description),
    React.createElement(
      'div',
      { className: 'sb-docs-hero' },
      React.createElement(Invite),
      React.createElement('div', { className: 'sb-docs-hero__preview' }, React.createElement(Primary)),
      React.createElement('div', { className: 'sb-docs-hero__controls' }, React.createElement(Controls))
    ),
    React.createElement(Stories, { includePrimary: false, title: '' })
  );

const sectionDocsPage = (pageClass, heroClass, InviteComponent = Invite) => () =>
  React.createElement(
    'div',
    { className: `sb-docs-page ${pageClass}` },
    React.createElement(Title),
    React.createElement(Description),
    React.createElement(
      'div',
      { className: `sb-docs-hero ${heroClass}` },
      React.createElement(InviteComponent),
      React.createElement('div', { className: 'sb-docs-hero__preview' }, React.createElement(Primary)),
      React.createElement('div', { className: 'sb-docs-hero__controls' }, React.createElement(Controls))
    ),
    React.createElement(
      'div',
      { className: 'sb-docs-page__stories' },
      React.createElement(Stories, { includePrimary: false, title: '' })
    )
  );

export const DocsPageCta = sectionDocsPage('sb-docs-page--cta', 'sb-docs-hero--invite-above');
export const DocsPagePill = sectionDocsPage('sb-docs-page--pill', 'sb-docs-hero--invite-above');
export const DocsPageButtons = () =>
  React.createElement(
    'div',
    { className: 'sb-docs-page sb-docs-page--buttons' },
    React.createElement(Title),
    React.createElement(Description),
    React.createElement(
      'div',
      { className: 'sb-docs-hero sb-docs-hero--buttons' },
      React.createElement(
        'div',
        { className: 'sb-docs-buttons-demo' },
        React.createElement('div', { className: 'sb-docs-hero__preview' }, React.createElement(Primary))
      ),
      React.createElement('div', { className: 'sb-docs-hero__controls' }, React.createElement(Controls))
    ),
    React.createElement(
      'div',
      { className: 'sb-docs-page__stories' },
      React.createElement(Stories, { includePrimary: false, title: '' })
    )
  );

/**
 * For components that carry their own built playground. Dropping the Controls
 * block entirely is the only way to remove it: disabling controls leaves
 * Storybook's "this story has no controls" placeholder in its place, which is
 * a second personalisation surface saying nothing.
 */
export const DocsPageNoControls = () =>
  React.createElement(
    React.Fragment,
    null,
    React.createElement(Title),
    React.createElement(Description),
    React.createElement(Primary),
    React.createElement(Stories, { includePrimary: false, title: '' })
  );
