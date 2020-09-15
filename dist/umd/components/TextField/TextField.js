(function (global, factory) {
  if (typeof define === "function" && define.amd) {
    define(["exports", "prop-types", "clsx", "react", "./TextField.module.scss"], factory);
  } else if (typeof exports !== "undefined") {
    factory(exports, require("prop-types"), require("clsx"), require("react"), require("./TextField.module.scss"));
  } else {
    var mod = {
      exports: {}
    };
    factory(mod.exports, global.propTypes, global.clsx, global.react, global.TextFieldModule);
    global.undefined = mod.exports;
  }
})(this, function (exports, _propTypes, _clsx, _react, _TextFieldModule) {
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
      type = 'text',
      size = 'normal',
      shape = 'circle',
      disabled = false,
      className
    } = _ref,
        rest = _objectWithoutProperties(_ref, ["type", "size", "shape", "disabled", "className"]);

    const classes = (0, _clsx2.default)(_TextFieldModule2.default.wrapper, _TextFieldModule2.default[size], _TextFieldModule2.default[shape], {
      [_TextFieldModule2.default.disabled]: disabled
    }, className);
    return /*#__PURE__*/_react2.default.createElement("span", {
      className: classes
    }, /*#__PURE__*/_react2.default.createElement("input", _extends({
      className: _TextFieldModule2.default.input,
      type: type,
      disabled: disabled
    }, rest)));
  };

  TextField.propTypes = {
    type: _propTypes2.default.oneOf(['text', 'password']),
    size: _propTypes2.default.oneOf(['normal', 'small', 'large']),
    shape: _propTypes2.default.oneOf(['rounded', 'circle']),
    disabled: _propTypes2.default.bool,
    className: _propTypes2.default.string,
    placeholder: _propTypes2.default.string,
    tabIndex: _propTypes2.default.number
  };
  exports.default = TextField;
});
//# sourceMappingURL=TextField.js.map