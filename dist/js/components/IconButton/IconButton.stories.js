"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.shapes = exports.sizes = exports.default = void 0;

var _addonA11y = require("@storybook/addon-a11y");

var _addonActions = require("@storybook/addon-actions");

var _react = _interopRequireDefault(require("react"));

var _iconFlag = require("../../img/icons/icon-flag.svg");

var _iconHeart = require("../../img/icons/icon-heart.svg");

var _iconMessage = require("../../img/icons/icon-message.svg");

var _iconPlus = require("../../img/icons/icon-plus.svg");

require("../../styles/init.scss");

var _IconButton = _interopRequireDefault(require("./IconButton"));

var _helpers = require("../../lib/helpers");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

var _default = {
  component: _IconButton.default,
  title: 'IconButton',
  decorators: [_addonA11y.withA11y]
};
exports.default = _default;

var sizes = function sizes() {
  return /*#__PURE__*/_react.default.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'row',
      alignItems: 'center'
    }
  }, /*#__PURE__*/_react.default.createElement("div", {
    style: {
      margin: '1rem',
      textAlign: 'center'
    }
  }, /*#__PURE__*/_react.default.createElement(_IconButton.default, {
    onClick: (0, _addonActions.action)('clicked'),
    size: "small",
    ariaLabel: "Like it"
  }, /*#__PURE__*/_react.default.createElement(_iconHeart.ReactComponent, _extends({
    color: "#EC7CDA"
  }, _helpers.a11yIconHiddenProps)))), /*#__PURE__*/_react.default.createElement("div", {
    style: {
      margin: '1rem',
      textAlign: 'center'
    }
  }, /*#__PURE__*/_react.default.createElement(_IconButton.default, {
    onClick: (0, _addonActions.action)('clicked'),
    size: "normal",
    ariaLabel: "Send a message"
  }, /*#__PURE__*/_react.default.createElement(_iconMessage.ReactComponent, _extends({
    color: "#77BEFF"
  }, _helpers.a11yIconHiddenProps)))), /*#__PURE__*/_react.default.createElement("div", {
    style: {
      margin: '1rem',
      textAlign: 'center'
    }
  }, /*#__PURE__*/_react.default.createElement(_IconButton.default, {
    onClick: (0, _addonActions.action)('clicked'),
    size: "large",
    ariaLabel: "Mark as favorite"
  }, /*#__PURE__*/_react.default.createElement(_iconFlag.ReactComponent, _extends({
    color: "#5081FF"
  }, _helpers.a11yIconHiddenProps)))));
};

exports.sizes = sizes;

var shapes = function shapes() {
  return /*#__PURE__*/_react.default.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'row',
      alignItems: 'center'
    }
  }, /*#__PURE__*/_react.default.createElement("div", {
    style: {
      margin: '1rem',
      textAlign: 'center'
    }
  }, /*#__PURE__*/_react.default.createElement(_IconButton.default, {
    onClick: (0, _addonActions.action)('clicked'),
    shape: "rounded",
    ariaLabel: "Add something"
  }, /*#__PURE__*/_react.default.createElement(_iconPlus.ReactComponent, _helpers.a11yIconHiddenProps))), /*#__PURE__*/_react.default.createElement("div", {
    style: {
      margin: '1rem',
      textAlign: 'center'
    }
  }, /*#__PURE__*/_react.default.createElement(_IconButton.default, {
    onClick: (0, _addonActions.action)('clicked'),
    shape: "circle",
    ariaLabel: "Add something"
  }, /*#__PURE__*/_react.default.createElement(_iconPlus.ReactComponent, _helpers.a11yIconHiddenProps))));
};

exports.shapes = shapes;
//# sourceMappingURL=IconButton.stories.js.map