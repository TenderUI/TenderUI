(function (global, factory) {
  if (typeof define === "function" && define.amd) {
    define(["exports", "@storybook/addon-actions", "react", "../../img/icons/icon-share.svg", "../../config", "./Button", "../../styles/init.scss"], factory);
  } else if (typeof exports !== "undefined") {
    factory(exports, require("@storybook/addon-actions"), require("react"), require("../../img/icons/icon-share.svg"), require("../../config"), require("./Button"), require("../../styles/init.scss"));
  } else {
    var mod = {
      exports: {}
    };
    factory(mod.exports, global.addonActions, global.react, global.iconShare, global.config, global.Button, global.init);
    global.undefined = mod.exports;
  }
})(this, function (exports, _addonActions, _react, _iconShare, _config, _Button) {
  "use strict";

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.shapes = exports.withIcon = exports.disabled = exports.sizes = undefined;

  var _react2 = _interopRequireDefault(_react);

  var _Button2 = _interopRequireDefault(_Button);

  function _interopRequireDefault(obj) {
    return obj && obj.__esModule ? obj : {
      default: obj
    };
  }

  exports.default = {
    component: _Button2.default,
    title: 'Button'
  };

  const sizes = exports.sizes = () => /*#__PURE__*/_react2.default.createElement("div", {
    className: "story-container"
  }, _config.sizeVariants.map(size => /*#__PURE__*/_react2.default.createElement("div", {
    key: size,
    className: "story-item"
  }, /*#__PURE__*/_react2.default.createElement(_Button2.default, {
    onClick: (0, _addonActions.action)('clicked'),
    size: size
  }, "Button"))));

  const disabled = exports.disabled = () => /*#__PURE__*/_react2.default.createElement("div", {
    className: "story-container"
  }, _config.sizeVariants.map(size => /*#__PURE__*/_react2.default.createElement("div", {
    key: size,
    className: "story-item"
  }, /*#__PURE__*/_react2.default.createElement(_Button2.default, {
    size: size,
    disabled: true
  }, "Button"))));

  const withIcon = exports.withIcon = () => /*#__PURE__*/_react2.default.createElement("div", {
    className: "story-container"
  }, _config.sizeVariants.map(size => /*#__PURE__*/_react2.default.createElement("div", {
    key: size,
    className: "story-item"
  }, /*#__PURE__*/_react2.default.createElement(_Button2.default, {
    onClick: (0, _addonActions.action)('clicked'),
    size: size
  }, /*#__PURE__*/_react2.default.createElement(_iconShare.ReactComponent, _config.a11yIconHiddenProps), " Button"))));

  const shapes = exports.shapes = () => /*#__PURE__*/_react2.default.createElement("div", {
    className: "story-container"
  }, _config.shapeVariants.map(shape => /*#__PURE__*/_react2.default.createElement("div", {
    key: shape,
    className: "story-item"
  }, /*#__PURE__*/_react2.default.createElement(_Button2.default, {
    onClick: (0, _addonActions.action)('clicked'),
    shape: shape
  }, "Button"))));
});
//# sourceMappingURL=Button.stories.js.map