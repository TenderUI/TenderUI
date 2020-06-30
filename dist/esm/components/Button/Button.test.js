import { cleanup, fireEvent, render } from '@testing-library/react';
import React from 'react';
import Button from './Button';
const testLabel = 'A button';
describe('Button', () => {
  afterEach(cleanup);
  it('displays the label', () => {
    const {
      getByText
    } = render( /*#__PURE__*/React.createElement(Button, null, testLabel));
    const element = getByText(testLabel);
    expect(element).toBeInTheDocument();
  });
  it('can be of the type submit', () => {
    const {
      getByText
    } = render( /*#__PURE__*/React.createElement(Button, {
      type: "submit"
    }, testLabel));
    const element = getByText(testLabel);
    expect(element.closest('button')).toHaveAttribute('type', 'submit');
  });
  it('can be of the type reset', () => {
    const {
      getByText
    } = render( /*#__PURE__*/React.createElement(Button, {
      type: "reset"
    }, testLabel));
    const element = getByText(testLabel);
    expect(element.closest('button')).toHaveAttribute('type', 'reset');
  });
  it('can be of the type button', () => {
    const {
      getByText
    } = render( /*#__PURE__*/React.createElement(Button, {
      type: "button"
    }, testLabel));
    const element = getByText(testLabel);
    expect(element.closest('button')).toHaveAttribute('type', 'button');
  });
  it('is of the type button by default', () => {
    const {
      getByText
    } = render( /*#__PURE__*/React.createElement(Button, null, testLabel));
    const element = getByText(testLabel);
    expect(element.closest('button')).toHaveAttribute('type', 'button');
  });
  it('handles clicks', () => {
    const handleClick = jest.fn();
    const {
      getByText
    } = render( /*#__PURE__*/React.createElement(Button, {
      onClick: handleClick
    }, testLabel));
    const element = getByText(testLabel);
    fireEvent.click(element);
    expect(handleClick).toHaveBeenCalled();
  });
  it('ignores clicks when disabled', () => {
    const handleClick = jest.fn();
    const {
      getByText
    } = render( /*#__PURE__*/React.createElement(Button, {
      onClick: handleClick,
      disabled: true
    }, testLabel));
    const element = getByText(testLabel);
    fireEvent.click(element);
    expect(handleClick).not.toHaveBeenCalled();
  });
  it('supports small size', () => {
    const {
      getByText
    } = render( /*#__PURE__*/React.createElement(Button, {
      size: "small"
    }, testLabel));
    const element = getByText(testLabel);
    expect(element.closest('button')).toHaveClass('small');
  });
});
//# sourceMappingURL=Button.test.js.map