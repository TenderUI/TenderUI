"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _propTypes = _interopRequireDefault(require("prop-types"));

var _clsx = _interopRequireDefault(require("clsx"));

var _react = _interopRequireWildcard(require("react"));

var _config = require("../../config");

var _TextFieldModule = _interopRequireDefault(require("./TextField.module.scss"));

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function _getRequireWildcardCache() { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

/**
 * A text field.
 */
var TextField = function TextField(_ref) {
  var _classNames2;

  var _ref$type = _ref.type,
      type = _ref$type === void 0 ? "text" : _ref$type,
      _ref$size = _ref.size,
      size = _ref$size === void 0 ? "normal" : _ref$size,
      _ref$shape = _ref.shape,
      shape = _ref$shape === void 0 ? "circle" : _ref$shape,
      _ref$disabled = _ref.disabled,
      disabled = _ref$disabled === void 0 ? false : _ref$disabled,
      className = _ref.className,
      leftIcon = _ref.leftIcon,
      rightIcon = _ref.rightIcon,
      rest = _objectWithoutProperties(_ref, ["type", "size", "shape", "disabled", "className", "leftIcon", "rightIcon"]);

  var classes = (0, _clsx.default)(_TextFieldModule.default.wrapper, _TextFieldModule.default[size], _TextFieldModule.default[shape], _defineProperty({}, _TextFieldModule.default.disabled, disabled), className);

  var leftIconAttributes = _objectSpread(_objectSpread({}, _config.a11yIconHiddenProps), {}, {
    className: (0, _clsx.default)(_TextFieldModule.default.leftIcon)
  });

  var leftIconElement = /*#__PURE__*/(0, _react.isValidElement)(leftIcon) ? /*#__PURE__*/(0, _react.cloneElement)(leftIcon, leftIconAttributes) : null;

  var rightIconAttributes = _objectSpread(_objectSpread({}, _config.a11yIconHiddenProps), {}, {
    className: (0, _clsx.default)(_TextFieldModule.default.rightIcon)
  });

  var rightIconElement = /*#__PURE__*/(0, _react.isValidElement)(rightIcon) ? /*#__PURE__*/(0, _react.cloneElement)(rightIcon, rightIconAttributes) : null;
  var inputClasses = (0, _clsx.default)(_TextFieldModule.default.input, (_classNames2 = {}, _defineProperty(_classNames2, _TextFieldModule.default.hasLeftIcon, leftIconElement != null), _defineProperty(_classNames2, _TextFieldModule.default.hasRightIcon, rightIconElement != null), _classNames2));
  return /*#__PURE__*/_react.default.createElement("span", {
    className: classes
  }, leftIconElement, /*#__PURE__*/_react.default.createElement("input", _extends({
    className: inputClasses,
    type: type,
    disabled: disabled
  }, rest)), rightIconElement);
};

TextField.propTypes = {
  type: _propTypes.default.oneOf(["text", "password"]),
  size: _propTypes.default.oneOf(["normal", "small", "large"]),
  shape: _propTypes.default.oneOf(["rounded", "circle"]),
  disabled: _propTypes.default.bool,
  className: _propTypes.default.string,
  placeholder: _propTypes.default.string,
  tabIndex: _propTypes.default.number,
  leftIcon: _propTypes.default.element,
  rightIcon: _propTypes.default.element
};
var _default = TextField;
exports.default = _default;
//# sourceMappingURL=TextField.js.map