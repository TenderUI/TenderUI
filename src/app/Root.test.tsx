import { cleanup, render } from '@testing-library/react';
import React from 'react';
import Root from './Root';

describe('Root', () => {
  afterEach(cleanup);

  it('displays greeting', async () => {
    const { findByText } = await render(<Root />);
    const element = await findByText('Hello, Nia!');
    expect(element).toBeInTheDocument();
  });
});
