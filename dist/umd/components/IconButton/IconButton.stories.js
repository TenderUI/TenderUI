(function (global, factory) {
  if (typeof define === "function" && define.amd) {
    define(["exports", "@storybook/addon-a11y", "@storybook/addon-actions", "react", "../../img/icons/icon-flag.svg", "../../img/icons/icon-heart.svg", "../../img/icons/icon-message.svg", "../../img/icons/icon-plus.svg", "./IconButton", "../../styles/init.scss"], factory);
  } else if (typeof exports !== "undefined") {
    factory(exports, require("@storybook/addon-a11y"), require("@storybook/addon-actions"), require("react"), require("../../img/icons/icon-flag.svg"), require("../../img/icons/icon-heart.svg"), require("../../img/icons/icon-message.svg"), require("../../img/icons/icon-plus.svg"), require("./IconButton"), require("../../styles/init.scss"));
  } else {
    var mod = {
      exports: {}
    };
    factory(mod.exports, global.addonA11y, global.addonActions, global.react, global.iconFlag, global.iconHeart, global.iconMessage, global.iconPlus, global.IconButton, global.init);
    global.undefined = mod.exports;
  }
})(this, function (exports, _addonA11y, _addonActions, _react, _iconFlag, _iconHeart, _iconMessage, _iconPlus, _IconButton) {
  "use strict";

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.shapes = exports.sizes = undefined;

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
    decorators: [_addonA11y.withA11y]
  };

  const sizes = exports.sizes = () => /*#__PURE__*/_react2.default.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'row',
      alignItems: 'center'
    }
  }, /*#__PURE__*/_react2.default.createElement("div", {
    style: {
      margin: '1rem',
      textAlign: 'center'
    }
  }, /*#__PURE__*/_react2.default.createElement(_IconButton2.default, {
    onClick: (0, _addonActions.action)('clicked'),
    size: "small"
  }, /*#__PURE__*/_react2.default.createElement(_iconHeart.ReactComponent, {
    color: "#EC7CDA"
  }))), /*#__PURE__*/_react2.default.createElement("div", {
    style: {
      margin: '1rem',
      textAlign: 'center'
    }
  }, /*#__PURE__*/_react2.default.createElement(_IconButton2.default, {
    onClick: (0, _addonActions.action)('clicked'),
    size: "normal"
  }, /*#__PURE__*/_react2.default.createElement(_iconMessage.ReactComponent, {
    color: "#77BEFF"
  }))), /*#__PURE__*/_react2.default.createElement("div", {
    style: {
      margin: '1rem',
      textAlign: 'center'
    }
  }, /*#__PURE__*/_react2.default.createElement(_IconButton2.default, {
    onClick: (0, _addonActions.action)('clicked'),
    size: "large"
  }, /*#__PURE__*/_react2.default.createElement(_iconFlag.ReactComponent, {
    color: "#5081FF"
  }))));

  const shapes = exports.shapes = () => /*#__PURE__*/_react2.default.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'row',
      alignItems: 'center'
    }
  }, /*#__PURE__*/_react2.default.createElement("div", {
    style: {
      margin: '1rem',
      textAlign: 'center'
    }
  }, /*#__PURE__*/_react2.default.createElement(_IconButton2.default, {
    onClick: (0, _addonActions.action)('clicked'),
    shape: "rounded"
  }, /*#__PURE__*/_react2.default.createElement(_iconPlus.ReactComponent, null))), /*#__PURE__*/_react2.default.createElement("div", {
    style: {
      margin: '1rem',
      textAlign: 'center'
    }
  }, /*#__PURE__*/_react2.default.createElement(_IconButton2.default, {
    onClick: (0, _addonActions.action)('clicked'),
    shape: "circle"
  }, /*#__PURE__*/_react2.default.createElement(_iconPlus.ReactComponent, null))));
});
//# sourceMappingURL=IconButton.stories.js.map