function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

import { withA11y } from '@storybook/addon-a11y';
import { action } from '@storybook/addon-actions';
import React from 'react';
import { ReactComponent as FlagIcon } from '../../img/icons/icon-flag.svg';
import { ReactComponent as HeartIcon } from '../../img/icons/icon-heart.svg';
import { ReactComponent as MessageIcon } from '../../img/icons/icon-message.svg';
import { ReactComponent as PlusIcon } from '../../img/icons/icon-plus.svg';
import '../../styles/init.scss';
import IconButton from './IconButton';
import { a11yIconHiddenProps } from '../../lib/helpers';
export default {
  component: IconButton,
  title: 'IconButton',
  decorators: [withA11y]
};
export const sizes = () => /*#__PURE__*/React.createElement("div", {
  style: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center'
  }
}, /*#__PURE__*/React.createElement("div", {
  style: {
    margin: '1rem',
    textAlign: 'center'
  }
}, /*#__PURE__*/React.createElement(IconButton, {
  onClick: action('clicked'),
  size: "small",
  ariaLabel: "Like it"
}, /*#__PURE__*/React.createElement(HeartIcon, _extends({
  color: "#EC7CDA"
}, a11yIconHiddenProps)))), /*#__PURE__*/React.createElement("div", {
  style: {
    margin: '1rem',
    textAlign: 'center'
  }
}, /*#__PURE__*/React.createElement(IconButton, {
  onClick: action('clicked'),
  size: "normal",
  ariaLabel: "Send a message"
}, /*#__PURE__*/React.createElement(MessageIcon, _extends({
  color: "#77BEFF"
}, a11yIconHiddenProps)))), /*#__PURE__*/React.createElement("div", {
  style: {
    margin: '1rem',
    textAlign: 'center'
  }
}, /*#__PURE__*/React.createElement(IconButton, {
  onClick: action('clicked'),
  size: "large",
  ariaLabel: "Mark as favorite"
}, /*#__PURE__*/React.createElement(FlagIcon, _extends({
  color: "#5081FF"
}, a11yIconHiddenProps)))));
export const shapes = () => /*#__PURE__*/React.createElement("div", {
  style: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center'
  }
}, /*#__PURE__*/React.createElement("div", {
  style: {
    margin: '1rem',
    textAlign: 'center'
  }
}, /*#__PURE__*/React.createElement(IconButton, {
  onClick: action('clicked'),
  shape: "rounded",
  ariaLabel: "Add something"
}, /*#__PURE__*/React.createElement(PlusIcon, a11yIconHiddenProps))), /*#__PURE__*/React.createElement("div", {
  style: {
    margin: '1rem',
    textAlign: 'center'
  }
}, /*#__PURE__*/React.createElement(IconButton, {
  onClick: action('clicked'),
  shape: "circle",
  ariaLabel: "Add something"
}, /*#__PURE__*/React.createElement(PlusIcon, a11yIconHiddenProps))));
//# sourceMappingURL=IconButton.stories.js.map