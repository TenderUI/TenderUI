"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _propTypes = _interopRequireDefault(require("prop-types"));

var _classnames = _interopRequireDefault(require("classnames"));

var _react = _interopRequireDefault(require("react"));

var _InputModule = _interopRequireDefault(require("./Input.module.scss"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * An input element.
 */
var Input = function Input(_ref) {
  var onChange = _ref.onChange,
      _ref$disabled = _ref.disabled,
      disabled = _ref$disabled === void 0 ? false : _ref$disabled,
      _ref$type = _ref.type,
      type = _ref$type === void 0 ? 'text' : _ref$type,
      _ref$size = _ref.size,
      size = _ref$size === void 0 ? 'normal' : _ref$size,
      className = _ref.className;
  var classes = (0, _classnames.default)(_InputModule.default.input, _InputModule.default[size], className);
  return /*#__PURE__*/_react.default.createElement("input", {
    className: classes,
    type: type,
    onChange: onChange,
    disabled: disabled
  });
};

Input.propTypes = {
  type: _propTypes.default.oneOf(['button', 'checkbox', 'color', 'date', 'datetime-local', 'email', 'file', 'hidden', 'image', 'month', 'number', 'password', 'radio', 'range', 'reset', 'search', 'submit', 'tel', 'text', 'time', 'url', 'week']),
  size: _propTypes.default.oneOf(['normal', 'small', 'large']),
  disabled: _propTypes.default.bool,
  onChange: _propTypes.default.func,
  className: _propTypes.default.string
};
var _default = Input;
exports.default = _default;
//# sourceMappingURL=Input.js.map