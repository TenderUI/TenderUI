import { cleanup, render } from '@testing-library/react';
import React from 'react';
import Input from './Input';
describe('Input', () => {
  afterEach(cleanup);
  it('displays the input', () => {
    const {
      container
    } = render( /*#__PURE__*/React.createElement(Input, null));
    expect(container.firstChild).toContainHTML('<input');
  });
  it('renders a placeholder', () => {
    const placeholder = 'A placeholder';
    const {
      getByPlaceholderText
    } = render( /*#__PURE__*/React.createElement(Input, {
      placeholder: placeholder
    }));
    const inputNode = getByPlaceholderText(placeholder);
    expect(inputNode).toBeInTheDocument();
  });
  it('has tabindex attribute', () => {
    const tabindex = 2;
    const {
      container
    } = render( /*#__PURE__*/React.createElement(Input, {
      tabIndex: tabindex
    }));
    expect(container.firstChild).toHaveAttribute('tabindex', `${tabindex}`);
  });
  it('renders a placeholder', () => {
    const placeholder = 'A placeholder';
    const {
      getByPlaceholderText
    } = render( /*#__PURE__*/React.createElement(Input, {
      placeholder: placeholder
    }));
    const inputNode = getByPlaceholderText(placeholder);
    expect(inputNode).toBeInTheDocument();
  });
});
//# sourceMappingURL=Input.test.js.map