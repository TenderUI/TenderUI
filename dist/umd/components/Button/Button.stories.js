(function (global, factory) {
  if (typeof define === "function" && define.amd) {
    define(["exports", "@storybook/addon-actions", "react", "./Button", "../../img/icons/icon-share.svg", "../../styles/init.scss"], factory);
  } else if (typeof exports !== "undefined") {
    factory(exports, require("@storybook/addon-actions"), require("react"), require("./Button"), require("../../img/icons/icon-share.svg"), require("../../styles/init.scss"));
  } else {
    var mod = {
      exports: {}
    };
    factory(mod.exports, global.addonActions, global.react, global.Button, global.iconShare, global.init);
    global.undefined = mod.exports;
  }
})(this, function (exports, _addonActions, _react, _Button, _iconShare) {
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
    title: 'Button'
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