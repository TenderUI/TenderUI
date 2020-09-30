(function (global, factory) {
  if (typeof define === "function" && define.amd) {
    define(["exports", "prop-types", "clsx", "react", "../../config", "./TextField.module.scss"], factory);
  } else if (typeof exports !== "undefined") {
    factory(exports, require("prop-types"), require("clsx"), require("react"), require("../../config"), require("./TextField.module.scss"));
  } else {
    var mod = {
      exports: {}
    };
    factory(mod.exports, global.propTypes, global.clsx, global.react, global.config, global.TextFieldModule);
    global.undefined = mod.exports;
  }
})(this, function (exports, _propTypes, _clsx, _react, _config, _TextFieldModule) {
  "use strict";

  Object.defineProperty(exports, "__esModule", {
    value: true
  });

  var _propTypes2 = _interopRequireDefault(_propTypes);

  var _clsx2 = _interopRequireDefault(_clsx);

  var _react2 = _interopRequireDefault(_react);

  var _TextFieldModule2 = _interopRequireDefault(_TextFieldModule);

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

  function ownKeys(object, enumerableOnly) {
    var keys = Object.keys(object);

    if (Object.getOwnPropertySymbols) {
      var symbols = Object.getOwnPropertySymbols(object);
      if (enumerableOnly) symbols = symbols.filter(function (sym) {
        return Object.getOwnPropertyDescriptor(object, sym).enumerable;
      });
      keys.push.apply(keys, symbols);
    }

    return keys;
  }

  function _objectSpread(target) {
    for (var i = 1; i < arguments.length; i++) {
      var source = arguments[i] != null ? arguments[i] : {};

      if (i % 2) {
        ownKeys(Object(source), true).forEach(function (key) {
          _defineProperty(target, key, source[key]);
        });
      } else if (Object.getOwnPropertyDescriptors) {
        Object.defineProperties(target, Object.getOwnPropertyDescriptors(source));
      } else {
        ownKeys(Object(source)).forEach(function (key) {
          Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key));
        });
      }
    }

    return target;
  }

  function _defineProperty(obj, key, value) {
    if (key in obj) {
      Object.defineProperty(obj, key, {
        value: value,
        enumerable: true,
        configurable: true,
        writable: true
      });
    } else {
      obj[key] = value;
    }

    return obj;
  }

  function _objectWithoutProperties(source, excluded) {
    if (source == null) return {};

    var target = _objectWithoutPropertiesLoose(source, excluded);

    var key, i;

    if (Object.getOwnPropertySymbols) {
      var sourceSymbolKeys = Object.getOwnPropertySymbols(source);

      for (i = 0; i < sourceSymbolKeys.length; i++) {
        key = sourceSymbolKeys[i];
        if (excluded.indexOf(key) >= 0) continue;
        if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue;
        target[key] = source[key];
      }
    }

    return target;
  }

  function _objectWithoutPropertiesLoose(source, excluded) {
    if (source == null) return {};
    var target = {};
    var sourceKeys = Object.keys(source);
    var key, i;

    for (i = 0; i < sourceKeys.length; i++) {
      key = sourceKeys[i];
      if (excluded.indexOf(key) >= 0) continue;
      target[key] = source[key];
    }

    return target;
  }

  /**
   * A text field.
   */
  const TextField = _ref => {
    let {
      type = "text",
      size = "normal",
      shape = "circle",
      disabled = false,
      className,
      leftIcon,
      rightIcon
    } = _ref,
        rest = _objectWithoutProperties(_ref, ["type", "size", "shape", "disabled", "className", "leftIcon", "rightIcon"]);

    const classes = (0, _clsx2.default)(_TextFieldModule2.default.wrapper, _TextFieldModule2.default[size], _TextFieldModule2.default[shape], {
      [_TextFieldModule2.default.disabled]: disabled
    }, className);

    const leftIconAttributes = _objectSpread(_objectSpread({}, _config.a11yIconHiddenProps), {}, {
      className: (0, _clsx2.default)(_TextFieldModule2.default.leftIcon)
    });

    const leftIconElement = /*#__PURE__*/ /*#__PURE__*/(0, _react.isValidElement)(leftIcon) ? /*#__PURE__*/(0, _react.cloneElement)(leftIcon, leftIconAttributes) : null;

    const rightIconAttributes = _objectSpread(_objectSpread({}, _config.a11yIconHiddenProps), {}, {
      className: (0, _clsx2.default)(_TextFieldModule2.default.rightIcon)
    });

    const rightIconElement = /*#__PURE__*/ /*#__PURE__*/(0, _react.isValidElement)(rightIcon) ? /*#__PURE__*/(0, _react.cloneElement)(rightIcon, rightIconAttributes) : null;
    const inputClasses = (0, _clsx2.default)(_TextFieldModule2.default.input, {
      [_TextFieldModule2.default.hasLeftIcon]: leftIconElement != null,
      [_TextFieldModule2.default.hasRightIcon]: rightIconElement != null
    });
    return /*#__PURE__*/_react2.default.createElement("span", {
      className: classes
    }, leftIconElement, /*#__PURE__*/_react2.default.createElement("input", _extends({
      className: inputClasses,
      type: type,
      disabled: disabled
    }, rest)), rightIconElement);
  };

  TextField.propTypes = {
    type: _propTypes2.default.oneOf(["text", "password"]),
    size: _propTypes2.default.oneOf(["normal", "small", "large"]),
    shape: _propTypes2.default.oneOf(["rounded", "circle"]),
    disabled: _propTypes2.default.bool,
    className: _propTypes2.default.string,
    placeholder: _propTypes2.default.string,
    tabIndex: _propTypes2.default.number,
    leftIcon: _propTypes2.default.element,
    rightIcon: _propTypes2.default.element
  };
  exports.default = TextField;
});
//# sourceMappingURL=TextField.js.map