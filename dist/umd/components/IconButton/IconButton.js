(function (global, factory) {
  if (typeof define === "function" && define.amd) {
    define(["exports", "classnames", "react", "../../lib/helpers", "../Button/Button", "./IconButton.module.scss"], factory);
  } else if (typeof exports !== "undefined") {
    factory(exports, require("classnames"), require("react"), require("../../lib/helpers"), require("../Button/Button"), require("./IconButton.module.scss"));
  } else {
    var mod = {
      exports: {}
    };
    factory(mod.exports, global.classnames, global.react, global.helpers, global.Button, global.IconButtonModule);
    global.undefined = mod.exports;
  }
})(this, function (exports, _classnames, _react, _helpers, _Button, _IconButtonModule) {
  "use strict";

  Object.defineProperty(exports, "__esModule", {
    value: true
  });

  var _classnames2 = _interopRequireDefault(_classnames);

  var _react2 = _interopRequireDefault(_react);

  var _Button2 = _interopRequireDefault(_Button);

  var _IconButtonModule2 = _interopRequireDefault(_IconButtonModule);

  function _interopRequireDefault(obj) {
    return obj && obj.__esModule ? obj : {
      default: obj
    };
  }

  /**
   * A square button with an icon.
   * Please note the children should be a single icon. In any other cases, 
   * use Button instead.
   */
  const IconButton = ({
    onClick,
    disabled = false,
    type = 'button',
    size = 'normal',
    shape = 'circle',
    ariaLabel,
    children
  }) => {
    const classes = (0, _classnames2.default)(_IconButtonModule2.default.icon, _IconButtonModule2.default[size]);
    const icon = /*#__PURE__*/ /*#__PURE__*/(0, _react.isValidElement)(children) ? /*#__PURE__*/(0, _react.cloneElement)(children, _helpers.a11yIconHiddenProps) : null;
    return /*#__PURE__*/_react2.default.createElement(_Button2.default, {
      size: size,
      shape: shape,
      type: type,
      className: classes,
      onClick: onClick,
      disabled: disabled,
      ariaLabel: ariaLabel
    }, icon);
  };

  exports.default = IconButton;
});
//# sourceMappingURL=IconButton.js.map