"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.shapes = exports.withIcon = exports.disabled = exports.sizes = exports.default = void 0;

var _addonActions = require("@storybook/addon-actions");

var _react = _interopRequireDefault(require("react"));

var _iconShare = require("../../img/icons/icon-share.svg");

var _config = require("../../config");

require("../../styles/init.scss");

var _Button = _interopRequireDefault(require("./Button"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _default = {
  component: _Button.default,
  title: 'Button'
};
exports.default = _default;

var sizes = function sizes() {
  return /*#__PURE__*/_react.default.createElement("div", {
    className: "story-container"
  }, _config.sizeVariants.map(function (size) {
    return /*#__PURE__*/_react.default.createElement("div", {
      key: size,
      className: "story-item"
    }, /*#__PURE__*/_react.default.createElement(_Button.default, {
      onClick: (0, _addonActions.action)('clicked'),
      size: size
    }, "Button"));
  }));
};

exports.sizes = sizes;

var disabled = function disabled() {
  return /*#__PURE__*/_react.default.createElement("div", {
    className: "story-container"
  }, _config.sizeVariants.map(function (size) {
    return /*#__PURE__*/_react.default.createElement("div", {
      key: size,
      className: "story-item"
    }, /*#__PURE__*/_react.default.createElement(_Button.default, {
      size: size,
      disabled: true
    }, "Button"));
  }));
};

exports.disabled = disabled;

var withIcon = function withIcon() {
  return /*#__PURE__*/_react.default.createElement("div", {
    className: "story-container"
  }, _config.sizeVariants.map(function (size) {
    return /*#__PURE__*/_react.default.createElement("div", {
      key: size,
      className: "story-item"
    }, /*#__PURE__*/_react.default.createElement(_Button.default, {
      onClick: (0, _addonActions.action)('clicked'),
      size: size
    }, /*#__PURE__*/_react.default.createElement(_iconShare.ReactComponent, _config.a11yIconHiddenProps), " Button"));
  }));
};

exports.withIcon = withIcon;

var shapes = function shapes() {
  return /*#__PURE__*/_react.default.createElement("div", {
    className: "story-container"
  }, _config.shapeVariants.map(function (shape) {
    return /*#__PURE__*/_react.default.createElement("div", {
      key: shape,
      className: "story-item"
    }, /*#__PURE__*/_react.default.createElement(_Button.default, {
      onClick: (0, _addonActions.action)('clicked'),
      shape: shape
    }, "Button"));
  }));
};

exports.shapes = shapes;
//# sourceMappingURL=Button.stories.js.map