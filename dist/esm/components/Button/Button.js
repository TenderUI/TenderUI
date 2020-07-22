function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

import classNames from 'classnames';
import React from 'react';
import styles from './Button.module.scss';

/**
 * A simple button.
 */
const Button = ({
  onClick,
  disabled = false,
  type = 'button',
  size = 'normal',
  children,
  className,
  ariaLabel
}) => {
  const classes = classNames(styles.button, styles[size], className);
  const a11yProps = ariaLabel ? {
    "aria-label": ariaLabel
  } : null;
  const button = /*#__PURE__*/React.createElement("button", _extends({
    className: classes,
    type: type,
    onClick: onClick,
    disabled: disabled
  }, a11yProps), children);

  if (disabled) {
    return button;
  }

  return /*#__PURE__*/React.createElement("span", {
    className: styles.buttonWrapper
  }, button);
};

export default Button;
//# sourceMappingURL=Button.js.map