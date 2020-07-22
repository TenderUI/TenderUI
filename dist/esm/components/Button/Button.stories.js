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
const sizeVariants = ['small', 'normal', 'large'];
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
}, `Button ${size}`))));
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
}, /*#__PURE__*/React.createElement(ShareIcon, a11yIconHiddenProps), " ", `Button ${size}`))));
export const newStates = () => /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("div", {
  style: {
    marginBottom: '1.5rem',
    display: 'flex',
    justifyContent: 'space-between',
    width: '100%'
  }
}, /*#__PURE__*/React.createElement("div", {
  style: {
    marginRight: '1.5rem',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center'
  }
}, "Default + Hover 1"), /*#__PURE__*/React.createElement(Button, {
  onClick: action('clicked'),
  size: "large",
  className: "default hover1"
}, "Button")), /*#__PURE__*/React.createElement("div", {
  style: {
    marginBottom: '1.5rem',
    display: 'flex',
    justifyContent: 'space-between',
    width: '100%'
  }
}, /*#__PURE__*/React.createElement("div", {
  style: {
    marginRight: '1.5rem',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center'
  }
}, "Default + Hover 2"), /*#__PURE__*/React.createElement(Button, {
  onClick: action('clicked'),
  size: "large",
  className: "default hover2"
}, "Button")), /*#__PURE__*/React.createElement("hr", null), /*#__PURE__*/React.createElement("div", {
  style: {
    margin: '1.5rem 0',
    display: 'flex',
    justifyContent: 'space-between',
    width: '100%'
  }
}, /*#__PURE__*/React.createElement("div", {
  style: {
    marginRight: '1.5rem',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center'
  }
}, "Disabled 1"), /*#__PURE__*/React.createElement(Button, {
  onClick: action('clicked'),
  size: "large",
  className: "default disabled1",
  disabled: true
}, "Button")));
//# sourceMappingURL=Button.stories.js.map