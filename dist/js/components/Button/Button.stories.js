"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.sizes = exports.default = void 0;

var _addonActions = require("@storybook/addon-actions");

var _react = _interopRequireDefault(require("react"));

require("../../styles/init.scss");

var _Button = _interopRequireDefault(require("./Button"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _default = {
  component: _Button.default,
  title: 'Button'
};
exports.default = _default;

var sizes = function sizes() {
  return /*#__PURE__*/_react.default.createElement(_react.default.Fragment, null, /*#__PURE__*/_react.default.createElement("div", {
    style: {
      marginBottom: '2rem',
      textAlign: 'center'
    }
  }, /*#__PURE__*/_react.default.createElement(_Button.default, {
    onClick: (0, _addonActions.action)('clicked'),
    size: "small"
  }, "Small")), /*#__PURE__*/_react.default.createElement("div", {
    style: {
      marginBottom: '2rem',
      textAlign: 'center'
    }
  }, /*#__PURE__*/_react.default.createElement(_Button.default, {
    onClick: (0, _addonActions.action)('clicked'),
    size: "normal"
  }, "Normal")), /*#__PURE__*/_react.default.createElement("div", {
    style: {
      marginBottom: '2rem',
      textAlign: 'center'
    }
  }, /*#__PURE__*/_react.default.createElement(_Button.default, {
    onClick: (0, _addonActions.action)('clicked'),
    size: "large"
  }, "Large")));
};

exports.sizes = sizes;

var disabled = function disabled() {
  return /*#__PURE__*/_react.default.createElement(_react.default.Fragment, null, /*#__PURE__*/_react.default.createElement("div", {
    style: {
      marginBottom: '2rem',
      textAlign: 'center'
    }
  }, /*#__PURE__*/_react.default.createElement(_Button.default, {
    onClick: (0, _addonActions.action)('clicked'),
    disabled: true,
    size: "small"
  }, "Small Disabled")), /*#__PURE__*/_react.default.createElement("div", {
    style: {
      marginBottom: '2rem',
      textAlign: 'center'
    }
  }, /*#__PURE__*/_react.default.createElement(_Button.default, {
    onClick: (0, _addonActions.action)('clicked'),
    disabled: true,
    size: "normal"
  }, "Normal Disabled")), /*#__PURE__*/_react.default.createElement("div", {
    style: {
      marginBottom: '2rem',
      textAlign: 'center'
    }
  }, /*#__PURE__*/_react.default.createElement(_Button.default, {
    onClick: (0, _addonActions.action)('clicked'),
    disabled: true,
    size: "big"
  }, "Big Disabled")));
};
//# sourceMappingURL=Button.stories.js.map