import { cleanup, render } from '@testing-library/react';
import React from 'react';
import TextField from './TextField';
describe('TextField', () => {
  afterEach(cleanup);
  it('displays the input', () => {
    const {
      container
    } = render( /*#__PURE__*/React.createElement(TextField, null));
    expect(container.firstChild).toContainHTML('<input');
  });
  it('renders a placeholder', () => {
    const placeholder = 'A placeholder';
    const {
      getByPlaceholderText
    } = render( /*#__PURE__*/React.createElement(TextField, {
      placeholder: placeholder
    }));
    const inputNode = getByPlaceholderText(placeholder);
    expect(inputNode).toBeInTheDocument();
  });
  it('has tabindex attribute', () => {
    const tabindex = 2;
    const {
      container
    } = render( /*#__PURE__*/React.createElement(TextField, {
      tabIndex: tabindex
    }));
    expect(container.firstChild.firstChild).toHaveAttribute('tabindex', `${tabindex}`);
  });
  it('renders a placeholder', () => {
    const placeholder = 'A placeholder';
    const {
      getByPlaceholderText
    } = render( /*#__PURE__*/React.createElement(TextField, {
      placeholder: placeholder
    }));
    const inputNode = getByPlaceholderText(placeholder);
    expect(inputNode).toBeInTheDocument();
  });
});
//# sourceMappingURL=TextField.test.js.map