"use strict";

var _react = require("@testing-library/react");

var _react2 = _interopRequireDefault(require("react"));

var _iconFlag = require("../../img/icons/icon-flag.svg");

var _IconButton = _interopRequireDefault(require("./IconButton"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// @fixme Review tests and fix issues.
var childIcon = /*#__PURE__*/_react2.default.createElement(_iconFlag.ReactComponent, null);

var ariaLabel = 'Test label';
describe('IconButton', function () {
  afterEach(_react.cleanup); // it('displays the label', () => {
  //   const { container } = render(<IconButton ariaLabel="Submit">{childIcon}</IconButton>);
  //   // const element = container.firstChild;
  //   expect(container.firstChild).toMatch(childIcon);
  //   // expect(element).toBeInTheDocument();
  // });

  it('can be of the type submit', function () {
    var _render = (0, _react.render)( /*#__PURE__*/_react2.default.createElement(_IconButton.default, {
      type: "submit",
      ariaLabel: "Submit"
    }, childIcon)),
        container = _render.container;

    expect(container.firstChild).toHaveAttribute('type', 'submit');
  });
  it('can be of the type reset', function () {
    var _render2 = (0, _react.render)( /*#__PURE__*/_react2.default.createElement(_IconButton.default, {
      type: "reset",
      ariaLabel: ariaLabel
    }, childIcon)),
        container = _render2.container;

    expect(container.firstChild).toHaveAttribute('type', 'reset');
  });
  it('can be of the type button', function () {
    var _render3 = (0, _react.render)( /*#__PURE__*/_react2.default.createElement(_IconButton.default, {
      type: "button",
      ariaLabel: ariaLabel
    }, childIcon)),
        container = _render3.container;

    expect(container.firstChild).toHaveAttribute('type', 'button');
  });
  it('is of the type button by default', function () {
    var _render4 = (0, _react.render)( /*#__PURE__*/_react2.default.createElement(_IconButton.default, {
      ariaLabel: ariaLabel
    }, childIcon)),
        container = _render4.container;

    expect(container.firstChild).toHaveAttribute('type', 'button');
  });
  it('handles clicks', function () {
    var handleClick = jest.fn();

    var _render5 = (0, _react.render)( /*#__PURE__*/_react2.default.createElement(_IconButton.default, {
      onClick: handleClick,
      ariaLabel: ariaLabel
    }, childIcon)),
        container = _render5.container;

    var element = container.firstChild;

    _react.fireEvent.click(element);

    expect(handleClick).toHaveBeenCalled();
  });
  it('ignores clicks when disabled', function () {
    var handleClick = jest.fn();

    var _render6 = (0, _react.render)( /*#__PURE__*/_react2.default.createElement(_IconButton.default, {
      onClick: handleClick,
      ariaLabel: ariaLabel,
      disabled: true
    }, childIcon)),
        container = _render6.container;

    var element = container.firstChild;

    _react.fireEvent.click(element);

    expect(handleClick).not.toHaveBeenCalled();
  });
  it('supports small size', function () {
    var _render7 = (0, _react.render)( /*#__PURE__*/_react2.default.createElement(_IconButton.default, {
      size: "small",
      ariaLabel: ariaLabel
    }, childIcon)),
        container = _render7.container;

    expect(container.firstChild).toHaveClass('small');
  });
  it('supports aria-label attribute', function () {
    var _render8 = (0, _react.render)( /*#__PURE__*/_react2.default.createElement(_IconButton.default, {
      ariaLabel: ariaLabel
    }, childIcon)),
        container = _render8.container;

    expect(container.firstChild).toHaveAttribute('aria-label', ariaLabel);
  });
});
//# sourceMappingURL=IconButton.test.js.map