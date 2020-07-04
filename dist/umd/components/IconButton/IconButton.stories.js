(function (global, factory) {
  if (typeof define === "function" && define.amd) {
    define(["exports", "@storybook/addon-a11y", "@storybook/addon-actions", "react", "../../img/icons/icon-flag.svg", "../../img/icons/icon-heart.svg", "../../img/icons/icon-message.svg", "../../img/icons/icon-plus.svg", "./IconButton", "../../lib/helpers", "../../styles/init.scss"], factory);
  } else if (typeof exports !== "undefined") {
    factory(exports, require("@storybook/addon-a11y"), require("@storybook/addon-actions"), require("react"), require("../../img/icons/icon-flag.svg"), require("../../img/icons/icon-heart.svg"), require("../../img/icons/icon-message.svg"), require("../../img/icons/icon-plus.svg"), require("./IconButton"), require("../../lib/helpers"), require("../../styles/init.scss"));
  } else {
    var mod = {
      exports: {}
    };
    factory(mod.exports, global.addonA11y, global.addonActions, global.react, global.iconFlag, global.iconHeart, global.iconMessage, global.iconPlus, global.IconButton, global.helpers, global.init);
    global.undefined = mod.exports;
  }
})(this, function (exports, _addonA11y, _addonActions, _react, _iconFlag, _iconHeart, _iconMessage, _iconPlus, _IconButton, _helpers) {
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

  function _extends() {
    _extends = Object.assign || function (target) {
      for (var i = 1; i < arguments.length; i++) {
        var source = arguments[i];

        for (var key in source) {
          if (Object.prototype.hasOwnProperty.call(source, key)) {
            target[key] = source[key];
          }
        }
      }

      return target;
    };

    return _extends.apply(this, arguments);
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
    size: "small",
    ariaLabel: "Like it"
  }, /*#__PURE__*/_react2.default.createElement(_iconHeart.ReactComponent, _extends({
    color: "#EC7CDA"
  }, _helpers.a11yIconHiddenProps)))), /*#__PURE__*/_react2.default.createElement("div", {
    style: {
      margin: '1rem',
      textAlign: 'center'
    }
  }, /*#__PURE__*/_react2.default.createElement(_IconButton2.default, {
    onClick: (0, _addonActions.action)('clicked'),
    size: "normal",
    ariaLabel: "Send a message"
  }, /*#__PURE__*/_react2.default.createElement(_iconMessage.ReactComponent, _extends({
    color: "#77BEFF"
  }, _helpers.a11yIconHiddenProps)))), /*#__PURE__*/_react2.default.createElement("div", {
    style: {
      margin: '1rem',
      textAlign: 'center'
    }
  }, /*#__PURE__*/_react2.default.createElement(_IconButton2.default, {
    onClick: (0, _addonActions.action)('clicked'),
    size: "large",
    ariaLabel: "Mark as favorite"
  }, /*#__PURE__*/_react2.default.createElement(_iconFlag.ReactComponent, _extends({
    color: "#5081FF"
  }, _helpers.a11yIconHiddenProps)))));

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
    shape: "rounded",
    ariaLabel: "Add something"
  }, /*#__PURE__*/_react2.default.createElement(_iconPlus.ReactComponent, _helpers.a11yIconHiddenProps))), /*#__PURE__*/_react2.default.createElement("div", {
    style: {
      margin: '1rem',
      textAlign: 'center'
    }
  }, /*#__PURE__*/_react2.default.createElement(_IconButton2.default, {
    onClick: (0, _addonActions.action)('clicked'),
    shape: "circle",
    ariaLabel: "Add something"
  }, /*#__PURE__*/_react2.default.createElement(_iconPlus.ReactComponent, _helpers.a11yIconHiddenProps))));
});
//# sourceMappingURL=IconButton.stories.js.map