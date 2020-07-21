import { cleanup, fireEvent, render } from '@testing-library/react';
import React from 'react';
import Input from './Input';

describe('Input', () => {
  afterEach(cleanup);

  it('displays the input', () => {
    const { container } = render(<Input />);
    expect(container.firstChild).toContainHTML('<input');
  });

  it('renders a placeholder', () => {
    const placeholder = 'A placeholder';

    const { getByPlaceholderText } = render(<Input placeholder={placeholder} />);

    const inputNode = getByPlaceholderText(placeholder);

    expect(inputNode).toBeInTheDocument();
  });

  it('has tabindex attribute', () => {
    const tabindex = 2;

    const { container } = render(<Input tabIndex={tabindex} />);

    expect(container.firstChild).toHaveAttribute('tabindex', `${tabindex}`);
  });

  it('renders a placeholder', () => {
    const placeholder = 'A placeholder';

    const { getByPlaceholderText } = render(<Input placeholder={placeholder} />);

    const inputNode = getByPlaceholderText(placeholder);

    expect(inputNode).toBeInTheDocument();
  });
});
