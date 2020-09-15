"use strict";

var _react = require("@testing-library/react");

var _react2 = _interopRequireDefault(require("react"));

var _TextField = _interopRequireDefault(require("./TextField"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

describe('TextField', function () {
  afterEach(_react.cleanup);
  it('displays the input', function () {
    var _render = (0, _react.render)( /*#__PURE__*/_react2.default.createElement(_TextField.default, null)),
        container = _render.container;

    expect(container.firstChild).toContainHTML('<input');
  });
  it('renders a placeholder', function () {
    var placeholder = 'A placeholder';

    var _render2 = (0, _react.render)( /*#__PURE__*/_react2.default.createElement(_TextField.default, {
      placeholder: placeholder
    })),
        getByPlaceholderText = _render2.getByPlaceholderText;

    var inputNode = getByPlaceholderText(placeholder);
    expect(inputNode).toBeInTheDocument();
  });
  it('has tabindex attribute', function () {
    var tabindex = 2;

    var _render3 = (0, _react.render)( /*#__PURE__*/_react2.default.createElement(_TextField.default, {
      tabIndex: tabindex
    })),
        container = _render3.container;

    expect(container.firstChild.firstChild).toHaveAttribute('tabindex', "".concat(tabindex));
  });
  it('renders a placeholder', function () {
    var placeholder = 'A placeholder';

    var _render4 = (0, _react.render)( /*#__PURE__*/_react2.default.createElement(_TextField.default, {
      placeholder: placeholder
    })),
        getByPlaceholderText = _render4.getByPlaceholderText;

    var inputNode = getByPlaceholderText(placeholder);
    expect(inputNode).toBeInTheDocument();
  });
});
//# sourceMappingURL=TextField.test.js.map