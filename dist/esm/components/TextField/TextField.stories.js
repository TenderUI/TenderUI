// import { action } from '@storybook/addon-actions';
import React from 'react'; // import { shapeVariants, sizeVariants } from '../../lib/config';

import '../../styles/init.scss';
import TextField from './TextField';
export default {
  component: TextField,
  title: 'TextField'
};
export const sizes = () => /*#__PURE__*/React.createElement("div", {
  className: "story-container"
}, /*#__PURE__*/React.createElement("div", {
  className: "story-item"
}, /*#__PURE__*/React.createElement(TextField, {
  size: "large",
  placeholder: "Text field"
}))); // export const sizes = () => (
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
//# sourceMappingURL=TextField.stories.js.map