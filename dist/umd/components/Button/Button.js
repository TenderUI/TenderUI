(function (global, factory) {
  if (typeof define === "function" && define.amd) {
    define(["exports", "classnames", "react", "./Button.module.scss"], factory);
  } else if (typeof exports !== "undefined") {
    factory(exports, require("classnames"), require("react"), require("./Button.module.scss"));
  } else {
    var mod = {
      exports: {}
    };
    factory(mod.exports, global.classnames, global.react, global.ButtonModule);
    global.undefined = mod.exports;
  }
})(this, function (exports, _classnames, _react, _ButtonModule) {
  "use strict";

  Object.defineProperty(exports, "__esModule", {
    value: true
  });

  var _classnames2 = _interopRequireDefault(_classnames);

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
    type = 'button',
    size = 'normal',
    children,
    className,
    ariaLabel
  }) => {
    const classes = (0, _classnames2.default)(_ButtonModule2.default.button, _ButtonModule2.default[size], className);
    const a11yProps = ariaLabel ? {
      "aria-label": ariaLabel
    } : null;
    return /*#__PURE__*/_react2.default.createElement("button", _extends({
      className: classes,
      type: type,
      onClick: onClick,
      disabled: disabled
    }, a11yProps), children);
  };

  exports.default = Button;
});
//# sourceMappingURL=Button.js.map