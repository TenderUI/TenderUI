"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _classnames = _interopRequireDefault(require("classnames"));

var _react = _interopRequireDefault(require("react"));

var _Button = _interopRequireDefault(require("../Button/Button"));

var _IconButtonModule = _interopRequireDefault(require("./IconButton.module.scss"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

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
      shape = _ref$shape === void 0 ? 'rounded' : _ref$shape,
      ariaLabel = _ref.ariaLabel,
      children = _ref.children;
  var classes = (0, _classnames.default)(_IconButtonModule.default.icon, _IconButtonModule.default[size], _IconButtonModule.default[shape]);
  return /*#__PURE__*/_react.default.createElement(_Button.default, {
    size: size,
    type: type,
    className: classes,
    onClick: onClick,
    disabled: disabled,
    ariaLabel: ariaLabel
  }, children);
};

var _default = IconButton;
exports.default = _default;
//# sourceMappingURL=IconButton.js.map