"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.shapes = exports.disabled = exports.sizes = exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

var _config = require("../../config");

require("../../styles/init.scss");

var _TextField = _interopRequireDefault(require("./TextField"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// import { action } from '@storybook/addon-actions';
var _default = {
  component: _TextField.default,
  title: 'TextField'
};
exports.default = _default;

var sizes = function sizes() {
  return /*#__PURE__*/_react.default.createElement("div", {
    className: "story-container"
  }, _config.sizeVariants.map(function (size) {
    return /*#__PURE__*/_react.default.createElement("div", {
      key: size,
      className: "story-item"
    }, /*#__PURE__*/_react.default.createElement(_TextField.default, {
      size: size,
      placeholder: "Text field"
    }));
  }));
};

exports.sizes = sizes;

var disabled = function disabled() {
  return /*#__PURE__*/_react.default.createElement("div", {
    className: "story-container"
  }, _config.sizeVariants.map(function (size) {
    return /*#__PURE__*/_react.default.createElement("div", {
      key: size,
      className: "story-item"
    }, /*#__PURE__*/_react.default.createElement(_TextField.default, {
      size: size,
      disabled: true,
      placeholder: "Text field"
    }));
  }));
}; // export const withIcon = () => (
//   <div className="story-container">
//     {sizeVariants.map((size: any) => (
//       <div key={size} className="story-item">
//         <Button onClick={action('clicked')} size={size}>
//           <ShareIcon {...a11yIconHiddenProps} /> Button
//         </Button>
//       </div>
//     ))}
//    </div>
// )


exports.disabled = disabled;

var shapes = function shapes() {
  return /*#__PURE__*/_react.default.createElement("div", {
    className: "story-container"
  }, _config.shapeVariants.map(function (shape) {
    return /*#__PURE__*/_react.default.createElement("div", {
      key: shape,
      className: "story-item"
    }, /*#__PURE__*/_react.default.createElement(_TextField.default, {
      shape: shape,
      placeholder: "Text field"
    }));
  }));
};

exports.shapes = shapes;
//# sourceMappingURL=TextField.stories.js.map