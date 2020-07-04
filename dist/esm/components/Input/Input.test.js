import { cleanup, render } from '@testing-library/react';
import React from 'react';
import Input from './Input';
describe('Input', () => {
  afterEach(cleanup);
  it('displays the label', () => {
    const {
      container
    } = render( /*#__PURE__*/React.createElement(Input, null));
    expect(container.firstChild).toBeInTheDocument();
  });
});
//# sourceMappingURL=Input.test.js.map