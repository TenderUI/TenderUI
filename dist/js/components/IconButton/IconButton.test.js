"use strict";

var _react = require("@testing-library/react");

var _react2 = _interopRequireDefault(require("react"));

var _IconButton = _interopRequireDefault(require("./IconButton"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var testLabel = 'A button';
describe('Button', function () {
  afterEach(_react.cleanup);
  it('displays the label', function () {
    var _render = (0, _react.render)( /*#__PURE__*/_react2.default.createElement(_IconButton.default, null, testLabel)),
        getByText = _render.getByText;

    var element = getByText(testLabel);
    expect(element).toBeInTheDocument();
  });
  it('can be of the type submit', function () {
    var _render2 = (0, _react.render)( /*#__PURE__*/_react2.default.createElement(_IconButton.default, {
      type: "submit"
    }, testLabel)),
        getByText = _render2.getByText;

    var element = getByText(testLabel);
    expect(element.closest('button')).toHaveAttribute('type', 'submit');
  });
  it('can be of the type reset', function () {
    var _render3 = (0, _react.render)( /*#__PURE__*/_react2.default.createElement(_IconButton.default, {
      type: "reset"
    }, testLabel)),
        getByText = _render3.getByText;

    var element = getByText(testLabel);
    expect(element.closest('button')).toHaveAttribute('type', 'reset');
  });
  it('can be of the type button', function () {
    var _render4 = (0, _react.render)( /*#__PURE__*/_react2.default.createElement(_IconButton.default, {
      type: "button"
    }, testLabel)),
        getByText = _render4.getByText;

    var element = getByText(testLabel);
    expect(element.closest('button')).toHaveAttribute('type', 'button');
  });
  it('is of the type button by default', function () {
    var _render5 = (0, _react.render)( /*#__PURE__*/_react2.default.createElement(_IconButton.default, null, testLabel)),
        getByText = _render5.getByText;

    var element = getByText(testLabel);
    expect(element.closest('button')).toHaveAttribute('type', 'button');
  });
  it('handles clicks', function () {
    var handleClick = jest.fn();

    var _render6 = (0, _react.render)( /*#__PURE__*/_react2.default.createElement(_IconButton.default, {
      onClick: handleClick
    }, testLabel)),
        getByText = _render6.getByText;

    var element = getByText(testLabel);

    _react.fireEvent.click(element);

    expect(handleClick).toHaveBeenCalled();
  });
  it('ignores clicks when disabled', function () {
    var handleClick = jest.fn();

    var _render7 = (0, _react.render)( /*#__PURE__*/_react2.default.createElement(_IconButton.default, {
      onClick: handleClick,
      disabled: true
    }, testLabel)),
        getByText = _render7.getByText;

    var element = getByText(testLabel);

    _react.fireEvent.click(element);

    expect(handleClick).not.toHaveBeenCalled();
  });
  it('supports small size', function () {
    var _render8 = (0, _react.render)( /*#__PURE__*/_react2.default.createElement(_IconButton.default, {
      size: "small"
    }, testLabel)),
        getByText = _render8.getByText;

    var element = getByText(testLabel);
    expect(element.closest('button')).toHaveClass('small');
  });
});
//# sourceMappingURL=IconButton.test.js.map