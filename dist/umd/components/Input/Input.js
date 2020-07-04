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

  /**
   * An input element.
   */
  const Input = ({
    onChange,
    disabled = false,
    type = 'text',
    size = 'normal',
    className
  }) => {
    const classes = (0, _classnames2.default)(_InputModule2.default.input, _InputModule2.default[size], className);
    return /*#__PURE__*/_react2.default.createElement("input", {
      className: classes,
      type: type,
      onChange: onChange,
      disabled: disabled
    });
  };

  Input.propTypes = {
    type: _propTypes2.default.oneOf(['button', 'checkbox', 'color', 'date', 'datetime-local', 'email', 'file', 'hidden', 'image', 'month', 'number', 'password', 'radio', 'range', 'reset', 'search', 'submit', 'tel', 'text', 'time', 'url', 'week']),
    size: _propTypes2.default.oneOf(['normal', 'small', 'large']),
    disabled: _propTypes2.default.bool,
    onChange: _propTypes2.default.func,
    className: _propTypes2.default.string
  };
  exports.default = Input;
});
//# sourceMappingURL=Input.js.map