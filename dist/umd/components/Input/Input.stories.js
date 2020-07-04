(function (global, factory) {
  if (typeof define === "function" && define.amd) {
    define(["exports", "@storybook/addon-a11y", "@storybook/addon-actions", "react", "./Input", "../../styles/init.scss"], factory);
  } else if (typeof exports !== "undefined") {
    factory(exports, require("@storybook/addon-a11y"), require("@storybook/addon-actions"), require("react"), require("./Input"), require("../../styles/init.scss"));
  } else {
    var mod = {
      exports: {}
    };
    factory(mod.exports, global.addonA11y, global.addonActions, global.react, global.Input, global.init);
    global.undefined = mod.exports;
  }
})(this, function (exports, _addonA11y, _addonActions, _react, _Input) {
  "use strict";

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.sizes = undefined;

  var _react2 = _interopRequireDefault(_react);

  var _Input2 = _interopRequireDefault(_Input);

  function _interopRequireDefault(obj) {
    return obj && obj.__esModule ? obj : {
      default: obj
    };
  }

  exports.default = {
    component: _Input2.default,
    title: 'Input',
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
  }, /*#__PURE__*/_react2.default.createElement(_Input2.default, {
    onChange: (0, _addonActions.action)('change'),
    size: size
  }, `Button ${size}`))));
});
//# sourceMappingURL=Input.stories.js.map