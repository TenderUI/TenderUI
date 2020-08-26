import classNames from 'classnames';
import React, { cloneElement, isValidElement } from 'react';
import { a11yIconHiddenProps } from '../../lib/helpers';
import Button from '../Button/Button';
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
  ariaLabel,
  children
}) => {
  const classes = classNames(styles.icon, styles[size]);
  const icon = /*#__PURE__*/isValidElement(children) ? /*#__PURE__*/cloneElement(children, a11yIconHiddenProps) : null;
  return /*#__PURE__*/React.createElement(Button, {
    size: size,
    shape: shape,
    type: type,
    className: classes,
    onClick: onClick,
    disabled: disabled,
    ariaLabel: ariaLabel
  }, icon);
};

export default IconButton;
//# sourceMappingURL=IconButton.js.map