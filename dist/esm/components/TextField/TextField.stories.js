// import { action } from '@storybook/addon-actions';
import React from 'react';
import { sizeVariants, shapeVariants } from '../../config';
import '../../styles/init.scss';
import TextField from './TextField';
export default {
  component: TextField,
  title: 'TextField'
};
export const sizes = () => /*#__PURE__*/React.createElement("div", {
  className: "story-container"
}, sizeVariants.map(size => /*#__PURE__*/React.createElement("div", {
  key: size,
  className: "story-item"
}, /*#__PURE__*/React.createElement(TextField, {
  size: size,
  placeholder: "Text field"
})))); // export const disabled = () => (
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

export const shapes = () => /*#__PURE__*/React.createElement("div", {
  className: "story-container"
}, shapeVariants.map(shape => /*#__PURE__*/React.createElement("div", {
  key: shape,
  className: "story-item"
}, /*#__PURE__*/React.createElement(TextField, {
  shape: shape,
  placeholder: "Text field"
}))));
//# sourceMappingURL=TextField.stories.js.map