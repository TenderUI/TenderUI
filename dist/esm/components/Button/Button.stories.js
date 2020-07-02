import { action } from '@storybook/addon-actions';
import React from 'react';
import '../../styles/init.scss';
import Button from './Button';
import { ReactComponent as ShareIcon } from '../../img/icons/icon-share.svg';
export default {
  component: Button,
  title: 'Button'
};
const sizeVariants = ['small', 'normal', 'large'];
export const sizes = () => /*#__PURE__*/React.createElement(React.Fragment, null, sizeVariants.map(size => /*#__PURE__*/React.createElement("div", {
  key: size,
  style: {
    marginBottom: '2rem',
    display: 'flex',
    justifyContent: 'center'
  }
}, /*#__PURE__*/React.createElement(Button, {
  onClick: action('clicked'),
  size: size
}, `Button ${size}`))));
export const withIcon = () => /*#__PURE__*/React.createElement(React.Fragment, null, sizeVariants.map(size => /*#__PURE__*/React.createElement("div", {
  key: size,
  style: {
    marginBottom: '2rem',
    display: 'flex',
    justifyContent: 'center'
  }
}, /*#__PURE__*/React.createElement(Button, {
  onClick: action('clicked'),
  size: size
}, /*#__PURE__*/React.createElement(ShareIcon, null), " ", `Button ${size}`))));
//# sourceMappingURL=Button.stories.js.map