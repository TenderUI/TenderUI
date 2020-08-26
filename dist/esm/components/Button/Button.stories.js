import { action } from '@storybook/addon-actions';
import React from 'react';
import { ReactComponent as ShareIcon } from '../../img/icons/icon-share.svg';
import { a11yIconHiddenProps } from '../../lib/helpers';
import '../../styles/init.scss';
import Button from './Button';
export default {
  component: Button,
  title: 'Button'
};
const sizeVariants = ['large', 'normal', 'small'];
const shapeVariants = ['circle', 'rounded'];
export const sizes = () => /*#__PURE__*/React.createElement("div", {
  className: "story-container"
}, sizeVariants.map(size => /*#__PURE__*/React.createElement("div", {
  key: size,
  className: "story-item"
}, /*#__PURE__*/React.createElement(Button, {
  onClick: action('clicked'),
  size: size
}, "Button"))));
export const disabled = () => /*#__PURE__*/React.createElement("div", {
  className: "story-container"
}, sizeVariants.map(size => /*#__PURE__*/React.createElement("div", {
  key: size,
  className: "story-item"
}, /*#__PURE__*/React.createElement(Button, {
  size: size,
  disabled: true
}, "Button"))));
export const withIcon = () => /*#__PURE__*/React.createElement("div", {
  className: "story-container"
}, sizeVariants.map(size => /*#__PURE__*/React.createElement("div", {
  key: size,
  className: "story-item"
}, /*#__PURE__*/React.createElement(Button, {
  onClick: action('clicked'),
  size: size
}, /*#__PURE__*/React.createElement(ShareIcon, a11yIconHiddenProps), " Button"))));
export const shapes = () => /*#__PURE__*/React.createElement("div", {
  className: "story-container"
}, shapeVariants.map(shape => /*#__PURE__*/React.createElement("div", {
  key: shape,
  className: "story-item"
}, /*#__PURE__*/React.createElement(Button, {
  onClick: action('clicked'),
  shape: shape
}, "Button"))));
//# sourceMappingURL=Button.stories.js.map