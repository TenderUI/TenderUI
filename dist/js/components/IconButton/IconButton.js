"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _clsx = _interopRequireDefault(require("clsx"));

var _react = _interopRequireWildcard(require("react"));

var _helpers = require("../../lib/helpers");

var _IconButtonModule = _interopRequireDefault(require("./IconButton.module.scss"));

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function _getRequireWildcardCache() { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

/**
 * A square button with an icon.
 * Please note the children should be a single icon. In any other cases, 
 * use Button instead.
 */
var IconButton = function IconButton(_ref) {
  var onClick = _ref.onClick,
      _ref$disabled = _ref.disabled,
      disabled = _ref$disabled === void 0 ? false : _ref$disabled,
      _ref$type = _ref.type,
      type = _ref$type === void 0 ? 'button' : _ref$type,
      _ref$size = _ref.size,
      size = _ref$size === void 0 ? 'normal' : _ref$size,
      _ref$shape = _ref.shape,
      shape = _ref$shape === void 0 ? 'circle' : _ref$shape,
      children = _ref.children,
      className = _ref.className,
      ariaLabel = _ref.ariaLabel;
  var a11yProps = ariaLabel ? {
    "aria-label": ariaLabel
  } : null;
  var classes = (0, _clsx.default)(_IconButtonModule.default.buttonWrapper, _IconButtonModule.default[size], _IconButtonModule.default[shape], _defineProperty({}, _IconButtonModule.default.disabled, disabled), className);
  var icon = /*#__PURE__*/(0, _react.isValidElement)(children) ? /*#__PURE__*/(0, _react.cloneElement)(children, _helpers.a11yIconHiddenProps) : null;
  return /*#__PURE__*/_react.default.createElement("span", {
    className: classes
  }, /*#__PURE__*/_react.default.createElement("button", _extends({
    className: _IconButtonModule.default.button,
    type: type,
    onClick: onClick,
    disabled: disabled
  }, a11yProps), icon));
};

var _default = IconButton;
exports.default = _default;
//# sourceMappingURL=IconButton.js.map