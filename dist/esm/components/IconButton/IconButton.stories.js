import { action } from '@storybook/addon-actions';
import React from 'react';
import { ReactComponent as FlagIcon } from '../../img/icons/icon-flag.svg';
import { ReactComponent as HeartIcon } from '../../img/icons/icon-heart.svg';
import { ReactComponent as MessageIcon } from '../../img/icons/icon-message.svg';
import { ReactComponent as PlusIcon } from '../../img/icons/icon-plus.svg';
import '../../styles/init.scss';
import IconButton from './IconButton';
export default {
  component: IconButton,
  title: 'IconButton',
  disable: true
};
const shapeVariants = ['circle', 'rounded'];
export const sizes = () => /*#__PURE__*/React.createElement("div", {
  className: "story-container"
}, /*#__PURE__*/React.createElement("div", {
  className: "story-item"
}, /*#__PURE__*/React.createElement(IconButton, {
  onClick: action('clicked'),
  size: "large",
  ariaLabel: "Mark as favorite"
}, /*#__PURE__*/React.createElement(FlagIcon, {
  color: "#5081FF"
}))), /*#__PURE__*/React.createElement("div", {
  className: "story-item"
}, /*#__PURE__*/React.createElement(IconButton, {
  onClick: action('clicked'),
  size: "normal",
  ariaLabel: "Send a message"
}, /*#__PURE__*/React.createElement(MessageIcon, {
  color: "#77BEFF"
}))), /*#__PURE__*/React.createElement("div", {
  className: "story-item"
}, /*#__PURE__*/React.createElement(IconButton, {
  onClick: action('clicked'),
  size: "small",
  ariaLabel: "Like it"
}, /*#__PURE__*/React.createElement(HeartIcon, {
  color: "#EC7CDA"
}))));
export const disabled = () => /*#__PURE__*/React.createElement("div", {
  className: "story-container"
}, /*#__PURE__*/React.createElement("div", {
  className: "story-item"
}, /*#__PURE__*/React.createElement(IconButton, {
  onClick: action('clicked'),
  size: "large",
  ariaLabel: "Mark as favorite",
  disabled: true
}, /*#__PURE__*/React.createElement(FlagIcon, {
  color: "#5081FF"
}))), /*#__PURE__*/React.createElement("div", {
  className: "story-item"
}, /*#__PURE__*/React.createElement(IconButton, {
  onClick: action('clicked'),
  size: "normal",
  ariaLabel: "Send a message",
  disabled: true
}, /*#__PURE__*/React.createElement(MessageIcon, {
  color: "#77BEFF"
}))), /*#__PURE__*/React.createElement("div", {
  className: "story-item"
}, /*#__PURE__*/React.createElement(IconButton, {
  onClick: action('clicked'),
  size: "small",
  ariaLabel: "Like it",
  disabled: true
}, /*#__PURE__*/React.createElement(HeartIcon, {
  color: "#EC7CDA"
}))));
export const shapes = () => /*#__PURE__*/React.createElement("div", {
  className: "story-container"
}, shapeVariants.map(shape => /*#__PURE__*/React.createElement("div", {
  key: shape,
  className: "story-item"
}, /*#__PURE__*/React.createElement(IconButton, {
  onClick: action('clicked'),
  shape: shape,
  ariaLabel: "Add something"
}, /*#__PURE__*/React.createElement(PlusIcon, null)))));
//# sourceMappingURL=IconButton.stories.js.map