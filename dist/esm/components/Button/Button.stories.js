import { withA11y } from '@storybook/addon-a11y';
import { action } from '@storybook/addon-actions';
import React from 'react';
import { ReactComponent as ShareIcon } from '../../img/icons/icon-share.svg';
import { a11yIconHiddenProps } from '../../lib/helpers';
import '../../styles/init.scss';
import Button from './Button';
export default {
  component: Button,
  title: 'Button',
  decorators: [withA11y]
};
const sizeVariants = ['large', 'normal', 'small'];
export const sizes = () => /*#__PURE__*/React.createElement(React.Fragment, null, sizeVariants.map(size => /*#__PURE__*/React.createElement("div", {
  key: size,
  style: {
    marginBottom: '1.5rem',
    display: 'flex',
    justifyContent: 'center'
  }
}, /*#__PURE__*/React.createElement(Button, {
  onClick: action('clicked'),
  size: size
}, "Button"))));
export const disabled = () => /*#__PURE__*/React.createElement(React.Fragment, null, sizeVariants.map(size => /*#__PURE__*/React.createElement("div", {
  key: size,
  style: {
    marginBottom: '1.5rem',
    display: 'flex',
    justifyContent: 'center'
  }
}, /*#__PURE__*/React.createElement(Button, {
  size: size,
  disabled: true
}, "Button"))));
export const withIcon = () => /*#__PURE__*/React.createElement(React.Fragment, null, sizeVariants.map(size => /*#__PURE__*/React.createElement("div", {
  key: size,
  style: {
    marginBottom: '1.5rem',
    display: 'flex',
    justifyContent: 'center'
  }
}, /*#__PURE__*/React.createElement(Button, {
  onClick: action('clicked'),
  size: size
}, /*#__PURE__*/React.createElement(ShareIcon, a11yIconHiddenProps), " Button"))));
//# sourceMappingURL=Button.stories.js.map