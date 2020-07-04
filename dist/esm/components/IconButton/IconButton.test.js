import { cleanup, render, fireEvent } from '@testing-library/react';
import React from 'react';
import { ReactComponent as Icon } from '../../img/icons/icon-flag.svg';
import IconButton from './IconButton'; // @fixme Review tests and fix issues.

const childIcon = /*#__PURE__*/React.createElement(Icon, null);
const ariaLabel = 'Test label';
describe('IconButton', () => {
  afterEach(cleanup); // it('displays the label', () => {
  //   const { container } = render(<IconButton ariaLabel="Submit">{childIcon}</IconButton>);
  //   // const element = container.firstChild;
  //   expect(container.firstChild).toMatch(childIcon);
  //   // expect(element).toBeInTheDocument();
  // });

  it('can be of the type submit', () => {
    const {
      container
    } = render( /*#__PURE__*/React.createElement(IconButton, {
      type: "submit",
      ariaLabel: "Submit"
    }, childIcon));
    expect(container.firstChild).toHaveAttribute('type', 'submit');
  });
  it('can be of the type reset', () => {
    const {
      container
    } = render( /*#__PURE__*/React.createElement(IconButton, {
      type: "reset",
      ariaLabel: ariaLabel
    }, childIcon));
    expect(container.firstChild).toHaveAttribute('type', 'reset');
  });
  it('can be of the type button', () => {
    const {
      container
    } = render( /*#__PURE__*/React.createElement(IconButton, {
      type: "button",
      ariaLabel: ariaLabel
    }, childIcon));
    expect(container.firstChild).toHaveAttribute('type', 'button');
  });
  it('is of the type button by default', () => {
    const {
      container
    } = render( /*#__PURE__*/React.createElement(IconButton, {
      ariaLabel: ariaLabel
    }, childIcon));
    expect(container.firstChild).toHaveAttribute('type', 'button');
  });
  it('handles clicks', () => {
    const handleClick = jest.fn();
    const {
      container
    } = render( /*#__PURE__*/React.createElement(IconButton, {
      onClick: handleClick,
      ariaLabel: ariaLabel
    }, childIcon));
    const element = container.firstChild;
    fireEvent.click(element);
    expect(handleClick).toHaveBeenCalled();
  });
  it('ignores clicks when disabled', () => {
    const handleClick = jest.fn();
    const {
      container
    } = render( /*#__PURE__*/React.createElement(IconButton, {
      onClick: handleClick,
      ariaLabel: ariaLabel,
      disabled: true
    }, childIcon));
    const element = container.firstChild;
    fireEvent.click(element);
    expect(handleClick).not.toHaveBeenCalled();
  });
  it('supports small size', () => {
    const {
      container
    } = render( /*#__PURE__*/React.createElement(IconButton, {
      size: "small",
      ariaLabel: ariaLabel
    }, childIcon));
    expect(container.firstChild).toHaveClass('small');
  });
  it('supports aria-label attribute', () => {
    const {
      container
    } = render( /*#__PURE__*/React.createElement(IconButton, {
      ariaLabel: ariaLabel
    }, childIcon));
    expect(container.firstChild).toHaveAttribute('aria-label', ariaLabel);
  });
});
//# sourceMappingURL=IconButton.test.js.map