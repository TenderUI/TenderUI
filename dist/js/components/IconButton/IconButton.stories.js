"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.shapes = exports.disabled = exports.sizes = exports.default = void 0;

var _addonActions = require("@storybook/addon-actions");

var _react = _interopRequireDefault(require("react"));

var _iconFlag = require("../../img/icons/icon-flag.svg");

var _iconHeart = require("../../img/icons/icon-heart.svg");

var _iconMessage = require("../../img/icons/icon-message.svg");

var _iconPlus = require("../../img/icons/icon-plus.svg");

require("../../styles/init.scss");

var _IconButton = _interopRequireDefault(require("./IconButton"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _default = {
  component: _IconButton.default,
  title: 'IconButton',
  disable: true
};
exports.default = _default;
var shapeVariants = ['circle', 'rounded'];

var sizes = function sizes() {
  return /*#__PURE__*/_react.default.createElement("div", {
    className: "story-container"
  }, /*#__PURE__*/_react.default.createElement("div", {
    className: "story-item"
  }, /*#__PURE__*/_react.default.createElement(_IconButton.default, {
    onClick: (0, _addonActions.action)('clicked'),
    size: "large",
    ariaLabel: "Mark as favorite"
  }, /*#__PURE__*/_react.default.createElement(_iconFlag.ReactComponent, {
    color: "#5081FF"
  }))), /*#__PURE__*/_react.default.createElement("div", {
    className: "story-item"
  }, /*#__PURE__*/_react.default.createElement(_IconButton.default, {
    onClick: (0, _addonActions.action)('clicked'),
    size: "normal",
    ariaLabel: "Send a message"
  }, /*#__PURE__*/_react.default.createElement(_iconMessage.ReactComponent, {
    color: "#77BEFF"
  }))), /*#__PURE__*/_react.default.createElement("div", {
    className: "story-item"
  }, /*#__PURE__*/_react.default.createElement(_IconButton.default, {
    onClick: (0, _addonActions.action)('clicked'),
    size: "small",
    ariaLabel: "Like it"
  }, /*#__PURE__*/_react.default.createElement(_iconHeart.ReactComponent, {
    color: "#EC7CDA"
  }))));
};

exports.sizes = sizes;

var disabled = function disabled() {
  return /*#__PURE__*/_react.default.createElement("div", {
    className: "story-container"
  }, /*#__PURE__*/_react.default.createElement("div", {
    className: "story-item"
  }, /*#__PURE__*/_react.default.createElement(_IconButton.default, {
    onClick: (0, _addonActions.action)('clicked'),
    size: "large",
    ariaLabel: "Mark as favorite",
    disabled: true
  }, /*#__PURE__*/_react.default.createElement(_iconFlag.ReactComponent, {
    color: "#5081FF"
  }))), /*#__PURE__*/_react.default.createElement("div", {
    className: "story-item"
  }, /*#__PURE__*/_react.default.createElement(_IconButton.default, {
    onClick: (0, _addonActions.action)('clicked'),
    size: "normal",
    ariaLabel: "Send a message",
    disabled: true
  }, /*#__PURE__*/_react.default.createElement(_iconMessage.ReactComponent, {
    color: "#77BEFF"
  }))), /*#__PURE__*/_react.default.createElement("div", {
    className: "story-item"
  }, /*#__PURE__*/_react.default.createElement(_IconButton.default, {
    onClick: (0, _addonActions.action)('clicked'),
    size: "small",
    ariaLabel: "Like it",
    disabled: true
  }, /*#__PURE__*/_react.default.createElement(_iconHeart.ReactComponent, {
    color: "#EC7CDA"
  }))));
};

exports.disabled = disabled;

var shapes = function shapes() {
  return /*#__PURE__*/_react.default.createElement("div", {
    className: "story-container"
  }, shapeVariants.map(function (shape) {
    return /*#__PURE__*/_react.default.createElement("div", {
      key: shape,
      className: "story-item"
    }, /*#__PURE__*/_react.default.createElement(_IconButton.default, {
      onClick: (0, _addonActions.action)('clicked'),
      shape: shape,
      ariaLabel: "Add something"
    }, /*#__PURE__*/_react.default.createElement(_iconPlus.ReactComponent, null)));
  }));
};

exports.shapes = shapes;
//# sourceMappingURL=IconButton.stories.js.map