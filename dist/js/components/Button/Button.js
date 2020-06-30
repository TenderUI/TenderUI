"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _classnames = _interopRequireDefault(require("classnames"));

var _react = _interopRequireDefault(require("react"));

var _ButtonModule = _interopRequireDefault(require("./Button.module.scss"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * Simple Button encapsulating all design variations
 */
var Button = function Button(_ref) {
  var onClick = _ref.onClick,
      _ref$disabled = _ref.disabled,
      disabled = _ref$disabled === void 0 ? false : _ref$disabled,
      _ref$type = _ref.type,
      type = _ref$type === void 0 ? 'button' : _ref$type,
      _ref$size = _ref.size,
      size = _ref$size === void 0 ? 'normal' : _ref$size,
      children = _ref.children;
  var classes = (0, _classnames.default)(_ButtonModule.default.button, _ButtonModule.default[size]);
  return /*#__PURE__*/_react.default.createElement("button", {
    className: classes,
    type: type,
    onClick: onClick,
    disabled: disabled
  }, children);
};

var _default = Button;
exports.default = _default;
//# sourceMappingURL=Button.js.map