(function (global, factory) {
  if (typeof define === "function" && define.amd) {
    define(["exports", "clsx", "react", "./Button.module.scss"], factory);
  } else if (typeof exports !== "undefined") {
    factory(exports, require("clsx"), require("react"), require("./Button.module.scss"));
  } else {
    var mod = {
      exports: {}
    };
    factory(mod.exports, global.clsx, global.react, global.ButtonModule);
    global.undefined = mod.exports;
  }
})(this, function (exports, _clsx, _react, _ButtonModule) {
  "use strict";

  Object.defineProperty(exports, "__esModule", {
    value: true
  });

  var _clsx2 = _interopRequireDefault(_clsx);

  var _react2 = _interopRequireDefault(_react);

  var _ButtonModule2 = _interopRequireDefault(_ButtonModule);

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
   * A simple button.
   */
  const Button = ({
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
    const classes = (0, _clsx2.default)(_ButtonModule2.default.wrapper, _ButtonModule2.default[size], _ButtonModule2.default[shape], {
      [_ButtonModule2.default.disabled]: disabled
    }, className);
    return /*#__PURE__*/_react2.default.createElement("span", {
      className: classes
    }, /*#__PURE__*/_react2.default.createElement("button", _extends({
      className: _ButtonModule2.default.button,
      type: type,
      onClick: onClick,
      disabled: disabled
    }, a11yProps), children));
  };

  exports.default = Button;
});
//# sourceMappingURL=Button.js.map