"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.sizes = exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

require("../../styles/init.scss");

var _TextField = _interopRequireDefault(require("./TextField"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// import { action } from '@storybook/addon-actions';
// import { shapeVariants, sizeVariants } from '../../lib/config';
var _default = {
  component: _TextField.default,
  title: 'TextField'
};
exports.default = _default;

var sizes = function sizes() {
  return /*#__PURE__*/_react.default.createElement("div", {
    className: "story-container"
  }, /*#__PURE__*/_react.default.createElement("div", {
    className: "story-item"
  }, /*#__PURE__*/_react.default.createElement(_TextField.default, {
    size: "large",
    placeholder: "Text field"
  })));
}; // export const sizes = () => (
//   <div className="story-container">
//     {sizeVariants.map((size: any) => (
//       <div key={size} className="story-item">
//         <TextField onClick={action('clicked')} size={size} placeholder="Text field" />
//       </div>
//     ))}
//   </div>
// );
// export const disabled = () => (
//   <div className="story-container">
//     {sizeVariants.map((size: any) => (
//       <div key={size} className="story-item">
//         <TextField onClick={action('clicked')} size={size} disabled={true} placeholder="Text field"  />
//       </div>
//     ))}
//   </div>
// )
// export const withIcon = () => (
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
// export const shapes = () => (
//   <div className="story-container">
//     {shapeVariants.map((shape: any) => (
//       <div key={shape} className="story-item">
//         <TextField onClick={action('clicked')} shape={shape} placeholder="Text field" />
//       </div>
//     ))}
//   </div>
// )


exports.sizes = sizes;
//# sourceMappingURL=TextField.stories.js.map