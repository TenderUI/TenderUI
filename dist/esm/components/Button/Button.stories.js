import { withA11y } from '@storybook/addon-a11y';
import { action } from '@storybook/addon-actions';
import React from 'react';
import { ReactComponent as ShareIcon } from '../../img/icons/icon-share.svg';
import '../../styles/init.scss';
import Button from './Button';
const environment = process.env.NODE_ENV || 'development';
const decorators = [];

if (environment === 'development') {
  decorators.push(withA11y);
}

export default {
  component: Button,
  title: 'Button',
  decorators
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