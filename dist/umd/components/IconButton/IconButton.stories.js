(function (global, factory) {
  if (typeof define === "function" && define.amd) {
    define(["exports", "@storybook/addon-actions", "react", "../../img/icons/icon-flag.svg", "../../img/icons/icon-heart.svg", "../../img/icons/icon-message.svg", "../../img/icons/icon-plus.svg", "./IconButton", "../../styles/init.scss"], factory);
  } else if (typeof exports !== "undefined") {
    factory(exports, require("@storybook/addon-actions"), require("react"), require("../../img/icons/icon-flag.svg"), require("../../img/icons/icon-heart.svg"), require("../../img/icons/icon-message.svg"), require("../../img/icons/icon-plus.svg"), require("./IconButton"), require("../../styles/init.scss"));
  } else {
    var mod = {
      exports: {}
    };
    factory(mod.exports, global.addonActions, global.react, global.iconFlag, global.iconHeart, global.iconMessage, global.iconPlus, global.IconButton, global.init);
    global.undefined = mod.exports;
  }
})(this, function (exports, _addonActions, _react, _iconFlag, _iconHeart, _iconMessage, _iconPlus, _IconButton) {
  "use strict";

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.shapes = exports.disabled = exports.sizes = undefined;

  var _react2 = _interopRequireDefault(_react);

  var _IconButton2 = _interopRequireDefault(_IconButton);

  function _interopRequireDefault(obj) {
    return obj && obj.__esModule ? obj : {
      default: obj
    };
  }

  exports.default = {
    component: _IconButton2.default,
    title: 'IconButton',
    disable: true
  };
  const shapeVariants = ['circle', 'rounded'];

  const sizes = exports.sizes = () => /*#__PURE__*/_react2.default.createElement("div", {
    className: "story-container"
  }, /*#__PURE__*/_react2.default.createElement("div", {
    className: "story-item"
  }, /*#__PURE__*/_react2.default.createElement(_IconButton2.default, {
    onClick: (0, _addonActions.action)('clicked'),
    size: "large",
    ariaLabel: "Mark as favorite"
  }, /*#__PURE__*/_react2.default.createElement(_iconFlag.ReactComponent, {
    color: "#5081FF"
  }))), /*#__PURE__*/_react2.default.createElement("div", {
    className: "story-item"
  }, /*#__PURE__*/_react2.default.createElement(_IconButton2.default, {
    onClick: (0, _addonActions.action)('clicked'),
    size: "normal",
    ariaLabel: "Send a message"
  }, /*#__PURE__*/_react2.default.createElement(_iconMessage.ReactComponent, {
    color: "#77BEFF"
  }))), /*#__PURE__*/_react2.default.createElement("div", {
    className: "story-item"
  }, /*#__PURE__*/_react2.default.createElement(_IconButton2.default, {
    onClick: (0, _addonActions.action)('clicked'),
    size: "small",
    ariaLabel: "Like it"
  }, /*#__PURE__*/_react2.default.createElement(_iconHeart.ReactComponent, {
    color: "#EC7CDA"
  }))));

  const disabled = exports.disabled = () => /*#__PURE__*/_react2.default.createElement("div", {
    className: "story-container"
  }, /*#__PURE__*/_react2.default.createElement("div", {
    className: "story-item"
  }, /*#__PURE__*/_react2.default.createElement(_IconButton2.default, {
    onClick: (0, _addonActions.action)('clicked'),
    size: "large",
    ariaLabel: "Mark as favorite",
    disabled: true
  }, /*#__PURE__*/_react2.default.createElement(_iconFlag.ReactComponent, {
    color: "#5081FF"
  }))), /*#__PURE__*/_react2.default.createElement("div", {
    className: "story-item"
  }, /*#__PURE__*/_react2.default.createElement(_IconButton2.default, {
    onClick: (0, _addonActions.action)('clicked'),
    size: "normal",
    ariaLabel: "Send a message",
    disabled: true
  }, /*#__PURE__*/_react2.default.createElement(_iconMessage.ReactComponent, {
    color: "#77BEFF"
  }))), /*#__PURE__*/_react2.default.createElement("div", {
    className: "story-item"
  }, /*#__PURE__*/_react2.default.createElement(_IconButton2.default, {
    onClick: (0, _addonActions.action)('clicked'),
    size: "small",
    ariaLabel: "Like it",
    disabled: true
  }, /*#__PURE__*/_react2.default.createElement(_iconHeart.ReactComponent, {
    color: "#EC7CDA"
  }))));

  const shapes = exports.shapes = () => /*#__PURE__*/_react2.default.createElement("div", {
    className: "story-container"
  }, shapeVariants.map(shape => /*#__PURE__*/_react2.default.createElement("div", {
    key: shape,
    className: "story-item"
  }, /*#__PURE__*/_react2.default.createElement(_IconButton2.default, {
    onClick: (0, _addonActions.action)('clicked'),
    shape: shape,
    ariaLabel: "Add something"
  }, /*#__PURE__*/_react2.default.createElement(_iconPlus.ReactComponent, null)))));
});
//# sourceMappingURL=IconButton.stories.js.map