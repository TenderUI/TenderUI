function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

import classNames from 'classnames';
import React, { cloneElement, isValidElement } from 'react';
import { a11yIconHiddenProps } from '../../lib/helpers';
import styles from './IconButton.module.scss';

/**
 * A square button with an icon.
 * Please note the children should be a single icon. In any other cases, 
 * use Button instead.
 */
const IconButton = ({
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
  const icon = /*#__PURE__*/isValidElement(children) ? /*#__PURE__*/cloneElement(children, a11yIconHiddenProps) : null;
  return /*#__PURE__*/React.createElement("span", {
    className: classes
  }, /*#__PURE__*/React.createElement("button", _extends({
    className: styles.button,
    type: type,
    onClick: onClick,
    disabled: disabled
  }, a11yProps), icon));
};

export default IconButton;
//# sourceMappingURL=IconButton.js.map