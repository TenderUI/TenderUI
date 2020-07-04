import { cleanup, fireEvent, render } from '@testing-library/react';
import React from 'react';
import Input from './Input';

describe('Input', () => {
  afterEach(cleanup);

  it('displays the label', () => {
    const { container } = render(<Input />);
    expect(container.firstChild).toBeInTheDocument();
  });
});
