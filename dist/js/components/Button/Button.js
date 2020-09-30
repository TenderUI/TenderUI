"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _clsx = _interopRequireDefault(require("clsx"));

var _react = _interopRequireDefault(require("react"));

var _ButtonModule = _interopRequireDefault(require("./Button.module.scss"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

/**
 * A simple button.
 */
var Button = function Button(_ref) {
  var onClick = _ref.onClick,
      _ref$disabled = _ref.disabled,
      disabled = _ref$disabled === void 0 ? false : _ref$disabled,
      _ref$type = _ref.type,
      type = _ref$type === void 0 ? "button" : _ref$type,
      _ref$size = _ref.size,
      size = _ref$size === void 0 ? "normal" : _ref$size,
      _ref$shape = _ref.shape,
      shape = _ref$shape === void 0 ? "circle" : _ref$shape,
      children = _ref.children,
      className = _ref.className,
      ariaLabel = _ref.ariaLabel;
  var a11yProps = ariaLabel ? {
    "aria-label": ariaLabel
  } : null;
  var classes = (0, _clsx.default)(_ButtonModule.default.wrapper, _ButtonModule.default[size], _ButtonModule.default[shape], _defineProperty({}, _ButtonModule.default.disabled, disabled), className);
  return /*#__PURE__*/_react.default.createElement("span", {
    className: classes
  }, /*#__PURE__*/_react.default.createElement("button", _extends({
    className: _ButtonModule.default.button,
    type: type,
    onClick: onClick,
    disabled: disabled
  }, a11yProps), children));
};

var _default = Button;
exports.default = _default;
//# sourceMappingURL=Button.js.map