import { action } from '@storybook/addon-actions';
import React from 'react';
import '../../styles/init.scss';
import Button from './Button';
export default {
  component: Button,
  title: 'Button'
};
export const sizes = () => /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("div", {
  style: {
    marginBottom: '2rem',
    textAlign: 'center'
  }
}, /*#__PURE__*/React.createElement(Button, {
  onClick: action('clicked'),
  size: "small"
}, "Small")), /*#__PURE__*/React.createElement("div", {
  style: {
    marginBottom: '2rem',
    textAlign: 'center'
  }
}, /*#__PURE__*/React.createElement(Button, {
  onClick: action('clicked'),
  size: "normal"
}, "Normal")), /*#__PURE__*/React.createElement("div", {
  style: {
    marginBottom: '2rem',
    textAlign: 'center'
  }
}, /*#__PURE__*/React.createElement(Button, {
  onClick: action('clicked'),
  size: "large"
}, "Large"))); // const disabled = () => (
//   <>
//     <div style={{marginBottom: '2rem', textAlign: 'center'}}>
//       <Button onClick={action('clicked')} disabled size='small'>
//         Small Disabled
//       </Button>
//     </div>
//     <div style={{marginBottom: '2rem', textAlign: 'center'}}>
//       <Button onClick={action('clicked')} disabled size='normal'>
//         Normal Disabled
//       </Button>
//     </div>
//     <div style={{marginBottom: '2rem', textAlign: 'center'}}>
//       <Button onClick={action('clicked')} disabled size='large'>
//         Big Disabled
//       </Button>
//     </div>
//   </>
// );
//# sourceMappingURL=Button.stories.js.map