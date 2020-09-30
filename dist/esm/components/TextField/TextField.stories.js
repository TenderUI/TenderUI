// import { action } from '@storybook/addon-actions';
import React from "react";
import { sizeVariants, shapeVariants } from "../../config";
import "../../styles/init.scss";
import TextField from "./TextField";
import { ReactComponent as LeftIcon } from "../../img/icons/icon-search.svg";
import { ReactComponent as RightIcon } from "../../img/icons/icon-eye.svg";
export default {
  component: TextField,
  title: "TextField"
};
export const sizes = () => /*#__PURE__*/React.createElement("div", {
  className: "story-container"
}, sizeVariants.map(size => /*#__PURE__*/React.createElement("div", {
  key: size,
  className: "story-item"
}, /*#__PURE__*/React.createElement(TextField, {
  size: size,
  placeholder: "Text field"
}))));
export const disabled = () => /*#__PURE__*/React.createElement("div", {
  className: "story-container"
}, sizeVariants.map(size => /*#__PURE__*/React.createElement("div", {
  key: size,
  className: "story-item"
}, /*#__PURE__*/React.createElement(TextField, {
  size: size,
  disabled: true,
  placeholder: "Text field"
}))));
export const withLeftIcon = () => /*#__PURE__*/React.createElement("div", {
  className: "story-container"
}, sizeVariants.map(size => /*#__PURE__*/React.createElement("div", {
  key: size,
  className: "story-item"
}, /*#__PURE__*/React.createElement(TextField, {
  size: size,
  placeholder: "Text field",
  leftIcon: /*#__PURE__*/React.createElement(LeftIcon, null)
}))));
export const withRightIcon = () => /*#__PURE__*/React.createElement("div", {
  className: "story-container"
}, sizeVariants.map(size => /*#__PURE__*/React.createElement("div", {
  key: size,
  className: "story-item"
}, /*#__PURE__*/React.createElement(TextField, {
  type: "password",
  size: size,
  placeholder: "Text field",
  rightIcon: /*#__PURE__*/React.createElement(RightIcon, null)
}))));
export const shapes = () => /*#__PURE__*/React.createElement("div", {
  className: "story-container"
}, shapeVariants.map(shape => /*#__PURE__*/React.createElement("div", {
  key: shape,
  className: "story-item"
}, /*#__PURE__*/React.createElement(TextField, {
  shape: shape,
  placeholder: "Text field"
}))));
//# sourceMappingURL=TextField.stories.js.map