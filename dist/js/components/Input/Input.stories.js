"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.sizes = exports.default = void 0;

var _addonA11y = require("@storybook/addon-a11y");

var _addonActions = require("@storybook/addon-actions");

var _react = _interopRequireDefault(require("react"));

require("../../styles/init.scss");

var _Input = _interopRequireDefault(require("./Input"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _default = {
  component: _Input.default,
  title: 'Input',
  decorators: [_addonA11y.withA11y]
};
exports.default = _default;
var sizeVariants = ['small', 'normal', 'large'];

var sizes = function sizes() {
  return /*#__PURE__*/_react.default.createElement(_react.default.Fragment, null, sizeVariants.map(function (size) {
    return /*#__PURE__*/_react.default.createElement("div", {
      key: size,
      style: {
        marginBottom: '2rem',
        display: 'flex',
        justifyContent: 'center'
      }
    }, /*#__PURE__*/_react.default.createElement(_Input.default, {
      onChange: (0, _addonActions.action)('change'),
      size: size
    }, "Button ".concat(size)));
  }));
};

exports.sizes = sizes;
//# sourceMappingURL=Input.stories.js.map