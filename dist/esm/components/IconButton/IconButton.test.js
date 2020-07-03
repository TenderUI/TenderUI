import { cleanup, fireEvent, render } from '@testing-library/react';
import React from 'react';
import { ReactComponent as Icon } from '../../img/icons/icon-flag.svg';
import IconButton from './IconButton'; // @fixme Review tests and adapt them to IconButton.

const testLabel = /*#__PURE__*/React.createElement(Icon, null);
describe('IconButton', () => {
  afterEach(cleanup);
  it('displays the label', () => {
    const {
      container
    } = render( /*#__PURE__*/React.createElement(IconButton, null, testLabel)); // const element = getByText(testLabel);

    expect(container.firstChild).toMatch('testLabel'); // expect(element).toBeInTheDocument();
  });
  it('can be of the type submit', () => {
    const {
      getByText
    } = render( /*#__PURE__*/React.createElement(IconButton, {
      type: "submit"
    }, testLabel));
    const element = getByText(testLabel);
    expect(element.closest('IconButton')).toHaveAttribute('type', 'submit');
  });
  it('can be of the type reset', () => {
    const {
      getByText
    } = render( /*#__PURE__*/React.createElement(IconButton, {
      type: "reset"
    }, testLabel));
    const element = getByText(testLabel);
    expect(element.closest('IconButton')).toHaveAttribute('type', 'reset');
  });
  it('can be of the type IconButton', () => {
    const {
      getByText
    } = render( /*#__PURE__*/React.createElement(IconButton, {
      type: "IconButton"
    }, testLabel));
    const element = getByText(testLabel);
    expect(element.closest('IconButton')).toHaveAttribute('type', 'IconButton');
  });
  it('is of the type IconButton by default', () => {
    const {
      getByText
    } = render( /*#__PURE__*/React.createElement(IconButton, null, testLabel));
    const element = getByText(testLabel);
    expect(element.closest('IconButton')).toHaveAttribute('type', 'IconButton');
  });
  it('handles clicks', () => {
    const handleClick = jest.fn();
    const {
      getByText
    } = render( /*#__PURE__*/React.createElement(IconButton, {
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
    } = render( /*#__PURE__*/React.createElement(IconButton, {
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
    } = render( /*#__PURE__*/React.createElement(IconButton, {
      size: "small"
    }, testLabel));
    const element = getByText(testLabel);
    expect(element.closest('IconButton')).toHaveClass('small');
  });
});
//# sourceMappingURL=IconButton.test.js.map