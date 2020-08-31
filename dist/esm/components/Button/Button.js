function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

import classNames from 'clsx';
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
  shape = 'circle',
  children,
  className,
  ariaLabel
}) => {
  const a11yProps = ariaLabel ? {
    "aria-label": ariaLabel
  } : null;
  const classes = classNames(styles.buttonWrapper, styles[size], styles[shape], {
    [styles.disabled]: disabled
  }, className);
  return /*#__PURE__*/React.createElement("span", {
    className: classes
  }, /*#__PURE__*/React.createElement("button", _extends({
    className: styles.button,
    type: type,
    onClick: onClick,
    disabled: disabled
  }, a11yProps), children));
};

export default Button;
//# sourceMappingURL=Button.js.map