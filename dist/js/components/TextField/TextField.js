"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _propTypes = _interopRequireDefault(require("prop-types"));

var _clsx = _interopRequireDefault(require("clsx"));

var _react = _interopRequireDefault(require("react"));

var _TextFieldModule = _interopRequireDefault(require("./TextField.module.scss"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

/**
 * A text field.
 */
var TextField = function TextField(_ref) {
  var _ref$type = _ref.type,
      type = _ref$type === void 0 ? 'text' : _ref$type,
      _ref$size = _ref.size,
      size = _ref$size === void 0 ? 'normal' : _ref$size,
      _ref$shape = _ref.shape,
      shape = _ref$shape === void 0 ? 'circle' : _ref$shape,
      _ref$disabled = _ref.disabled,
      disabled = _ref$disabled === void 0 ? false : _ref$disabled,
      className = _ref.className,
      rest = _objectWithoutProperties(_ref, ["type", "size", "shape", "disabled", "className"]);

  var classes = (0, _clsx.default)(_TextFieldModule.default.wrapper, _TextFieldModule.default[size], _TextFieldModule.default[shape], _defineProperty({}, _TextFieldModule.default.disabled, disabled), className);
  return /*#__PURE__*/_react.default.createElement("span", {
    className: classes
  }, /*#__PURE__*/_react.default.createElement("input", _extends({
    className: _TextFieldModule.default.input,
    type: type,
    disabled: disabled
  }, rest)));
};

TextField.propTypes = {
  type: _propTypes.default.oneOf(['text', 'password']),
  size: _propTypes.default.oneOf(['normal', 'small', 'large']),
  shape: _propTypes.default.oneOf(['rounded', 'circle']),
  disabled: _propTypes.default.bool,
  className: _propTypes.default.string,
  placeholder: _propTypes.default.string,
  tabIndex: _propTypes.default.number
};
var _default = TextField;
exports.default = _default;
//# sourceMappingURL=TextField.js.map