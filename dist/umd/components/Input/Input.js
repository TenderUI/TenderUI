(function (global, factory) {
  if (typeof define === "function" && define.amd) {
    define(["exports", "prop-types", "classnames", "react", "./Input.module.scss"], factory);
  } else if (typeof exports !== "undefined") {
    factory(exports, require("prop-types"), require("classnames"), require("react"), require("./Input.module.scss"));
  } else {
    var mod = {
      exports: {}
    };
    factory(mod.exports, global.propTypes, global.classnames, global.react, global.InputModule);
    global.undefined = mod.exports;
  }
})(this, function (exports, _propTypes, _classnames, _react, _InputModule) {
  "use strict";

  Object.defineProperty(exports, "__esModule", {
    value: true
  });

  var _propTypes2 = _interopRequireDefault(_propTypes);

  var _classnames2 = _interopRequireDefault(_classnames);

  var _react2 = _interopRequireDefault(_react);

  var _InputModule2 = _interopRequireDefault(_InputModule);

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
   * An input element.
   */
  const Input = _ref => {
    let {
      type = 'text',
      value,
      size = 'normal',
      className
    } = _ref,
        rest = _objectWithoutProperties(_ref, ["type", "value", "size", "className"]);

    const classes = (0, _classnames2.default)(_InputModule2.default.input, _InputModule2.default[size], className);
    return /*#__PURE__*/_react2.default.createElement("input", _extends({
      className: classes,
      type: type
    }, rest));
  };

  Input.propTypes = {
    type: _propTypes2.default.oneOf(['button', 'checkbox', 'color', 'date', 'datetime-local', 'email', 'file', 'hidden', 'image', 'month', 'number', 'password', 'radio', 'range', 'reset', 'search', 'submit', 'tel', 'text', 'time', 'url', 'week']),
    size: _propTypes2.default.oneOf(['normal', 'small', 'large']),
    className: _propTypes2.default.string
  };
  exports.default = Input;
});
//# sourceMappingURL=Input.js.map