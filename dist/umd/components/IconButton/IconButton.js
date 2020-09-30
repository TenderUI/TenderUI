(function (global, factory) {
  if (typeof define === "function" && define.amd) {
    define(["exports", "clsx", "react", "../../config", "./IconButton.module.scss"], factory);
  } else if (typeof exports !== "undefined") {
    factory(exports, require("clsx"), require("react"), require("../../config"), require("./IconButton.module.scss"));
  } else {
    var mod = {
      exports: {}
    };
    factory(mod.exports, global.clsx, global.react, global.config, global.IconButtonModule);
    global.undefined = mod.exports;
  }
})(this, function (exports, _clsx, _react, _config, _IconButtonModule) {
  "use strict";

  Object.defineProperty(exports, "__esModule", {
    value: true
  });

  var _clsx2 = _interopRequireDefault(_clsx);

  var _react2 = _interopRequireDefault(_react);

  var _IconButtonModule2 = _interopRequireDefault(_IconButtonModule);

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

  /**
   * A square button with an icon.
   * Please note the children should be a single icon. In any other cases,
   * use Button instead.
   */
  const IconButton = ({
    onClick,
    disabled = false,
    type = "button",
    size = "normal",
    shape = "circle",
    children,
    className,
    ariaLabel
  }) => {
    const a11yProps = ariaLabel ? {
      "aria-label": ariaLabel
    } : null;
    const classes = (0, _clsx2.default)(_IconButtonModule2.default.wrapper, _IconButtonModule2.default[size], _IconButtonModule2.default[shape], {
      [_IconButtonModule2.default.disabled]: disabled
    }, className);
    const icon = /*#__PURE__*/ /*#__PURE__*/(0, _react.isValidElement)(children) ? /*#__PURE__*/(0, _react.cloneElement)(children, _config.a11yIconHiddenProps) : null;
    return /*#__PURE__*/_react2.default.createElement("span", {
      className: classes
    }, /*#__PURE__*/_react2.default.createElement("button", _extends({
      className: _IconButtonModule2.default.button,
      type: type,
      onClick: onClick,
      disabled: disabled
    }, a11yProps), icon));
  };

  exports.default = IconButton;
});
//# sourceMappingURL=IconButton.js.map