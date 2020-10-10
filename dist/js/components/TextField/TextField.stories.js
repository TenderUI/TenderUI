"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.shapes = exports.withRightIcon = exports.withLeftIcon = exports.disabled = exports.sizes = exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

var _config = require("../../config");

require("../../styles/init.scss");

var _TextField = _interopRequireDefault(require("./TextField"));

var _iconSearch = require("../../img/icons/icon-search.svg");

var _iconEye = require("../../img/icons/icon-eye.svg");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// import { action } from '@storybook/addon-actions';
var _default = {
  component: _TextField.default,
  title: "TextField"
};
exports.default = _default;

var sizes = function sizes() {
  return /*#__PURE__*/_react.default.createElement("div", {
    className: "story-container"
  }, _config.sizeVariants.map(function (size) {
    return /*#__PURE__*/_react.default.createElement("div", {
      key: size,
      className: "story-item"
    }, /*#__PURE__*/_react.default.createElement(_TextField.default, {
      size: size,
      placeholder: "Text field"
    }));
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
    }, /*#__PURE__*/_react.default.createElement(_TextField.default, {
      size: size,
      disabled: true,
      placeholder: "Text field"
    }));
  }));
};

exports.disabled = disabled;

var withLeftIcon = function withLeftIcon() {
  return /*#__PURE__*/_react.default.createElement("div", {
    className: "story-container"
  }, _config.sizeVariants.map(function (size) {
    return /*#__PURE__*/_react.default.createElement("div", {
      key: size,
      className: "story-item"
    }, /*#__PURE__*/_react.default.createElement(_TextField.default, {
      size: size,
      placeholder: "Text field",
      leftIcon: /*#__PURE__*/_react.default.createElement(_iconSearch.ReactComponent, null)
    }));
  }));
};

exports.withLeftIcon = withLeftIcon;

var withRightIcon = function withRightIcon() {
  return /*#__PURE__*/_react.default.createElement("div", {
    className: "story-container"
  }, _config.sizeVariants.map(function (size) {
    return /*#__PURE__*/_react.default.createElement("div", {
      key: size,
      className: "story-item"
    }, /*#__PURE__*/_react.default.createElement(_TextField.default, {
      type: "password",
      size: size,
      placeholder: "Password field",
      rightIcon: /*#__PURE__*/_react.default.createElement(_iconEye.ReactComponent, null)
    }));
  }));
};

exports.withRightIcon = withRightIcon;

var shapes = function shapes() {
  return /*#__PURE__*/_react.default.createElement("div", {
    className: "story-container"
  }, _config.shapeVariants.map(function (shape) {
    return /*#__PURE__*/_react.default.createElement("div", {
      key: shape,
      className: "story-item"
    }, /*#__PURE__*/_react.default.createElement(_TextField.default, {
      shape: shape,
      placeholder: "Text field"
    }));
  }));
};

exports.shapes = shapes;
//# sourceMappingURL=TextField.stories.js.map