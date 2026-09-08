/**
 * Forms. A real label, always.
 */

let uid = 0;

const field = ({ label, placeholder, value, hint, error, invalid, disabled }) => {
  const id = `field-${++uid}`;
  const wrap = document.createElement('div');
  wrap.className = 'a-field';
  if (invalid) wrap.dataset.invalid = 'true';

  const l = document.createElement('label');
  l.htmlFor = id;
  l.textContent = label;

  const input = document.createElement('input');
  input.id = id;
  input.type = 'text';
  input.placeholder = placeholder ?? '';
  input.value = value ?? '';
  input.disabled = Boolean(disabled);

  const describedBy = [];
  wrap.append(l, input);

  if (hint) {
    const hintEl = document.createElement('p');
    hintEl.className = 'a-field__hint';
    hintEl.id = `${id}-hint`;
    hintEl.textContent = hint;
    describedBy.push(hintEl.id);
    wrap.appendChild(hintEl);
  }
  if (invalid && error) {
    const errEl = document.createElement('p');
    errEl.className = 'a-field__error';
    errEl.id = `${id}-error`;
    errEl.textContent = error;
    describedBy.push(errEl.id);
    input.setAttribute('aria-invalid', 'true');
    wrap.appendChild(errEl);
  }
  if (describedBy.length) input.setAttribute('aria-describedby', describedBy.join(' '));

  return wrap;
};

export default {
  title: 'Components/Forms',
  tags: ['autodocs'],
  render: field,
  argTypes: {
    label: { control: 'text' },
    placeholder: { control: 'text' },
    value: { control: 'text' },
    hint: { control: 'text' },
    error: { control: 'text' },
    invalid: { control: 'boolean' },
    disabled: { control: 'boolean' }
  },
  args: {
    label: 'Work email',
    placeholder: 'you@company.com',
    value: '',
    hint: 'We\'ll use this to send your architecture review.',
    error: 'That address looks incomplete. Check it and try again.',
    invalid: false,
    disabled: false
  },
  parameters: {
    docs: {
      description: {
        component:
          'Give every field a real `<label for>`. Placeholder text is not a label. The error state ' +
          'carries the words as well as the border weight, because colour is never the only carrier.'
      }
    }
  }
};

export const Default = {};

export const Invalid = {
  args: {
    value: 'alex@company',
    hint: '',
    invalid: true
  },
  parameters: {
    docs: {
      description: {
        story:
          'Invalid state thickens the border and states the problem in text. There is no red in ' +
          'the system, which is a declared gap: see knowledge/accessibility.md, forms validation.'
      }
    }
  }
};

export const Disabled = {
  args: {
    label: 'Architecture review',
    placeholder: '',
    value: 'Bookings are temporarily paused',
    hint: 'New Assembly review slots will appear here.',
    disabled: true
  }
};
