"use strict";

var _react = require("@testing-library/react");

var _react2 = _interopRequireDefault(require("react"));

var _iconFlag = require("../../img/icons/icon-flag.svg");

var _IconButton = _interopRequireDefault(require("./IconButton"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var childIcon = /*#__PURE__*/_react2.default.createElement(_iconFlag.ReactComponent, null);

var ariaLabel = 'Test label';
describe('IconButton', function () {
  afterEach(_react.cleanup);
  it('displays the icon', function () {
    var _render = (0, _react.render)( /*#__PURE__*/_react2.default.createElement(_IconButton.default, {
      ariaLabel: ariaLabel
    }, childIcon)),
        container = _render.container;

    expect(container.firstChild).toContainHTML("icon-flag.svg");
  });
  it('cannot include text', function () {
    var _render2 = (0, _react.render)( /*#__PURE__*/_react2.default.createElement(_IconButton.default, {
      ariaLabel: ariaLabel
    }, ariaLabel)),
        container = _render2.container;

    expect(container.firstChild.firstChild.firstChild).toBeNull();
  });
  it('adds accessibility attributes to the child icon', function () {
    var _render3 = (0, _react.render)( /*#__PURE__*/_react2.default.createElement(_IconButton.default, {
      ariaLabel: ariaLabel
    }, childIcon)),
        container = _render3.container;

    expect(container.firstChild.firstChild.firstChild).toHaveAttribute('aria-hidden', 'true');
    expect(container.firstChild.firstChild.firstChild).toHaveAttribute('focusable', 'false');
  });
  it('can be of the type submit', function () {
    var _render4 = (0, _react.render)( /*#__PURE__*/_react2.default.createElement(_IconButton.default, {
      type: "submit",
      ariaLabel: ariaLabel
    }, childIcon)),
        container = _render4.container;

    expect(container.firstChild.firstChild).toHaveAttribute('type', 'submit');
  });
  it('can be of the type reset', function () {
    var _render5 = (0, _react.render)( /*#__PURE__*/_react2.default.createElement(_IconButton.default, {
      type: "reset",
      ariaLabel: ariaLabel
    }, childIcon)),
        container = _render5.container;

    expect(container.firstChild.firstChild).toHaveAttribute('type', 'reset');
  });
  it('can be of the type button', function () {
    var _render6 = (0, _react.render)( /*#__PURE__*/_react2.default.createElement(_IconButton.default, {
      type: "button",
      ariaLabel: ariaLabel
    }, childIcon)),
        container = _render6.container;

    expect(container.firstChild.firstChild).toHaveAttribute('type', 'button');
  });
  it('is of the type button by default', function () {
    var _render7 = (0, _react.render)( /*#__PURE__*/_react2.default.createElement(_IconButton.default, {
      ariaLabel: ariaLabel
    }, childIcon)),
        container = _render7.container;

    expect(container.firstChild.firstChild).toHaveAttribute('type', 'button');
  });
  it('handles clicks', function () {
    var handleClick = jest.fn();

    var _render8 = (0, _react.render)( /*#__PURE__*/_react2.default.createElement(_IconButton.default, {
      onClick: handleClick,
      ariaLabel: ariaLabel
    }, childIcon)),
        container = _render8.container;

    var element = container.firstChild.firstChild;

    _react.fireEvent.click(element);

    expect(handleClick).toHaveBeenCalled();
  });
  it('ignores clicks when disabled', function () {
    var handleClick = jest.fn();

    var _render9 = (0, _react.render)( /*#__PURE__*/_react2.default.createElement(_IconButton.default, {
      onClick: handleClick,
      ariaLabel: ariaLabel,
      disabled: true
    }, childIcon)),
        container = _render9.container;

    var element = container.firstChild.firstChild;

    _react.fireEvent.click(element);

    expect(handleClick).not.toHaveBeenCalled();
  });
  it('supports small size', function () {
    var _render10 = (0, _react.render)( /*#__PURE__*/_react2.default.createElement(_IconButton.default, {
      size: "small",
      ariaLabel: ariaLabel
    }, childIcon)),
        container = _render10.container;

    expect(container.firstChild).toHaveClass('small');
  });
  it('supports aria-label attribute', function () {
    var _render11 = (0, _react.render)( /*#__PURE__*/_react2.default.createElement(_IconButton.default, {
      ariaLabel: ariaLabel
    }, childIcon)),
        container = _render11.container;

    expect(container.firstChild.firstChild).toHaveAttribute('aria-label', ariaLabel);
  });
});
//# sourceMappingURL=IconButton.test.js.map