"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.newStates = exports.withIcon = exports.sizes = exports.default = void 0;

var _addonA11y = require("@storybook/addon-a11y");

var _addonActions = require("@storybook/addon-actions");

var _react = _interopRequireDefault(require("react"));

var _iconShare = require("../../img/icons/icon-share.svg");

var _helpers = require("../../lib/helpers");

require("../../styles/init.scss");

var _Button = _interopRequireDefault(require("./Button"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _default = {
  component: _Button.default,
  title: 'Button',
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
    }, /*#__PURE__*/_react.default.createElement(_iconShare.ReactComponent, _helpers.a11yIconHiddenProps), " ", "Button ".concat(size)));
  }));
};

exports.withIcon = withIcon;

var newStates = function newStates() {
  return /*#__PURE__*/_react.default.createElement(_react.default.Fragment, null, /*#__PURE__*/_react.default.createElement("div", {
    style: {
      marginBottom: '2rem',
      display: 'flex',
      justifyContent: 'space-between',
      width: '100%'
    }
  }, /*#__PURE__*/_react.default.createElement("div", {
    style: {
      marginRight: '2rem',
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center'
    }
  }, "Default + Hover 1"), /*#__PURE__*/_react.default.createElement(_Button.default, {
    onClick: (0, _addonActions.action)('clicked'),
    size: "large",
    className: "default hover1"
  }, "Button")), /*#__PURE__*/_react.default.createElement("div", {
    style: {
      marginBottom: '2rem',
      display: 'flex',
      justifyContent: 'space-between',
      width: '100%'
    }
  }, /*#__PURE__*/_react.default.createElement("div", {
    style: {
      marginRight: '2rem',
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center'
    }
  }, "Default + Hover 2"), /*#__PURE__*/_react.default.createElement(_Button.default, {
    onClick: (0, _addonActions.action)('clicked'),
    size: "large",
    className: "default hover2"
  }, "Button")), /*#__PURE__*/_react.default.createElement("hr", null), /*#__PURE__*/_react.default.createElement("div", {
    style: {
      margin: '2rem 0',
      display: 'flex',
      justifyContent: 'space-between',
      width: '100%'
    }
  }, /*#__PURE__*/_react.default.createElement("div", {
    style: {
      marginRight: '2rem',
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center'
    }
  }, "Disabled 1"), /*#__PURE__*/_react.default.createElement(_Button.default, {
    onClick: (0, _addonActions.action)('clicked'),
    size: "large",
    className: "default disabled1",
    disabled: true
  }, "Button")), /*#__PURE__*/_react.default.createElement("div", {
    style: {
      margin: '2rem 0',
      display: 'flex',
      justifyContent: 'space-between',
      width: '100%'
    }
  }, /*#__PURE__*/_react.default.createElement("div", {
    style: {
      marginRight: '2rem',
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center'
    }
  }, "Disabled 2"), /*#__PURE__*/_react.default.createElement(_Button.default, {
    onClick: (0, _addonActions.action)('clicked'),
    size: "large",
    className: "default disabled2",
    disabled: true
  }, "Button")), /*#__PURE__*/_react.default.createElement("div", {
    style: {
      margin: '2rem 0',
      display: 'flex',
      justifyContent: 'space-between',
      width: '100%'
    }
  }, /*#__PURE__*/_react.default.createElement("div", {
    style: {
      marginRight: '2rem',
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center'
    }
  }, "Disabled 3"), /*#__PURE__*/_react.default.createElement(_Button.default, {
    onClick: (0, _addonActions.action)('clicked'),
    size: "large",
    className: "default disabled3",
    disabled: true
  }, "Button")), /*#__PURE__*/_react.default.createElement("div", {
    style: {
      margin: '2rem 0',
      display: 'flex',
      justifyContent: 'space-between',
      width: '100%'
    }
  }, /*#__PURE__*/_react.default.createElement("div", {
    style: {
      marginRight: '2rem',
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center'
    }
  }, "Disabled 4"), /*#__PURE__*/_react.default.createElement(_Button.default, {
    onClick: (0, _addonActions.action)('clicked'),
    size: "large",
    className: "default disabled4",
    disabled: true
  }, "Button")), /*#__PURE__*/_react.default.createElement("hr", null), /*#__PURE__*/_react.default.createElement("div", {
    style: {
      margin: '2rem 0',
      display: 'flex',
      justifyContent: 'space-between',
      width: '100%'
    }
  }, /*#__PURE__*/_react.default.createElement("div", {
    style: {
      marginRight: '2rem',
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center'
    }
  }, "Outlined on Hover (buggy)"), /*#__PURE__*/_react.default.createElement(_Button.default, {
    onClick: (0, _addonActions.action)('clicked'),
    size: "large",
    className: "default outlined"
  }, "Button")));
};

exports.newStates = newStates;
//# sourceMappingURL=Button.stories.js.map