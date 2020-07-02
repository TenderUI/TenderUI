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
  title: 'IconButton'
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
  size: "small"
}, /*#__PURE__*/React.createElement(HeartIcon, {
  color: "#EC7CDA"
}))), /*#__PURE__*/React.createElement("div", {
  style: {
    margin: '1rem',
    textAlign: 'center'
  }
}, /*#__PURE__*/React.createElement(IconButton, {
  onClick: action('clicked'),
  size: "normal"
}, /*#__PURE__*/React.createElement(MessageIcon, {
  color: "#77BEFF"
}))), /*#__PURE__*/React.createElement("div", {
  style: {
    margin: '1rem',
    textAlign: 'center'
  }
}, /*#__PURE__*/React.createElement(IconButton, {
  onClick: action('clicked'),
  size: "large"
}, /*#__PURE__*/React.createElement(FlagIcon, {
  color: "#5081FF"
}))));
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
  shape: "rounded"
}, /*#__PURE__*/React.createElement(PlusIcon, null))), /*#__PURE__*/React.createElement("div", {
  style: {
    margin: '1rem',
    textAlign: 'center'
  }
}, /*#__PURE__*/React.createElement(IconButton, {
  onClick: action('clicked'),
  shape: "circle"
}, /*#__PURE__*/React.createElement(PlusIcon, null))));
//# sourceMappingURL=IconButton.stories.js.map