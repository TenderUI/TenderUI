(function (global, factory) {
  if (typeof define === "function" && define.amd) {
    define(["exports", "@storybook/addon-a11y", "@storybook/addon-actions", "react", "../../img/icons/icon-share.svg", "./Button", "../../styles/init.scss"], factory);
  } else if (typeof exports !== "undefined") {
    factory(exports, require("@storybook/addon-a11y"), require("@storybook/addon-actions"), require("react"), require("../../img/icons/icon-share.svg"), require("./Button"), require("../../styles/init.scss"));
  } else {
    var mod = {
      exports: {}
    };
    factory(mod.exports, global.addonA11y, global.addonActions, global.react, global.iconShare, global.Button, global.init);
    global.undefined = mod.exports;
  }
})(this, function (exports, _addonA11y, _addonActions, _react, _iconShare, _Button) {
  "use strict";

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.withIcon = exports.sizes = undefined;

  var _react2 = _interopRequireDefault(_react);

  var _Button2 = _interopRequireDefault(_Button);

  function _interopRequireDefault(obj) {
    return obj && obj.__esModule ? obj : {
      default: obj
    };
  }

  exports.default = {
    component: _Button2.default,
    title: 'Button',
    decorators: [_addonA11y.withA11y]
  };
  const sizeVariants = ['small', 'normal', 'large'];

  const sizes = exports.sizes = () => /*#__PURE__*/_react2.default.createElement(_react2.default.Fragment, null, sizeVariants.map(size => /*#__PURE__*/_react2.default.createElement("div", {
    key: size,
    style: {
      marginBottom: '2rem',
      display: 'flex',
      justifyContent: 'center'
    }
  }, /*#__PURE__*/_react2.default.createElement(_Button2.default, {
    onClick: (0, _addonActions.action)('clicked'),
    size: size
  }, `Button ${size}`))));

  const withIcon = exports.withIcon = () => /*#__PURE__*/_react2.default.createElement(_react2.default.Fragment, null, sizeVariants.map(size => /*#__PURE__*/_react2.default.createElement("div", {
    key: size,
    style: {
      marginBottom: '2rem',
      display: 'flex',
      justifyContent: 'center'
    }
  }, /*#__PURE__*/_react2.default.createElement(_Button2.default, {
    onClick: (0, _addonActions.action)('clicked'),
    size: size
  }, /*#__PURE__*/_react2.default.createElement(_iconShare.ReactComponent, null), " ", `Button ${size}`))));
});
//# sourceMappingURL=Button.stories.js.map