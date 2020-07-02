"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.withIcon = exports.sizes = exports.default = void 0;

var _addonActions = require("@storybook/addon-actions");

var _react = _interopRequireDefault(require("react"));

require("../../styles/init.scss");

var _Button = _interopRequireDefault(require("./Button"));

var _iconShare = require("../../img/icons/icon-share.svg");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _default = {
  component: _Button.default,
  title: 'Button'
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
    }, /*#__PURE__*/_react.default.createElement(_Button.default, {
      onClick: (0, _addonActions.action)('clicked'),
      size: size
    }, "Button ".concat(size)));
  }));
};

exports.sizes = sizes;

var withIcon = function withIcon() {
  return /*#__PURE__*/_react.default.createElement(_react.default.Fragment, null, sizeVariants.map(function (size) {
    return /*#__PURE__*/_react.default.createElement("div", {
      key: size,
      style: {
        marginBottom: '2rem',
        display: 'flex',
        justifyContent: 'center'
      }
    }, /*#__PURE__*/_react.default.createElement(_Button.default, {
      onClick: (0, _addonActions.action)('clicked'),
      size: size
    }, /*#__PURE__*/_react.default.createElement(_iconShare.ReactComponent, null), " ", "Button ".concat(size)));
  }));
};

exports.withIcon = withIcon;
//# sourceMappingURL=Button.stories.js.map