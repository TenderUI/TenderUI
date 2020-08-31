"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _propTypes = _interopRequireDefault(require("prop-types"));

var _clsx = _interopRequireDefault(require("clsx"));

var _react = _interopRequireDefault(require("react"));

var _InputModule = _interopRequireDefault(require("./Input.module.scss"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

/**
 * An input element.
 */
var Input = function Input(_ref) {
  var _ref$type = _ref.type,
      type = _ref$type === void 0 ? 'text' : _ref$type,
      value = _ref.value,
      _ref$size = _ref.size,
      size = _ref$size === void 0 ? 'normal' : _ref$size,
      className = _ref.className,
      rest = _objectWithoutProperties(_ref, ["type", "value", "size", "className"]);

  var classes = (0, _clsx.default)(_InputModule.default.input, _InputModule.default[size], className);
  return /*#__PURE__*/_react.default.createElement("input", _extends({
    className: classes,
    type: type
  }, rest));
};

Input.propTypes = {
  type: _propTypes.default.oneOf(['button', 'checkbox', 'color', 'date', 'datetime-local', 'email', 'file', 'hidden', 'image', 'month', 'number', 'password', 'radio', 'range', 'reset', 'search', 'submit', 'tel', 'text', 'time', 'url', 'week']),
  size: _propTypes.default.oneOf(['normal', 'small', 'large']),
  className: _propTypes.default.string
};
var _default = Input;
exports.default = _default;
//# sourceMappingURL=Input.js.map