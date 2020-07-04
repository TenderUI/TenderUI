import classNames from 'classnames';
import React from 'react';
import Button from '../Button/Button';
import styles from './IconButton.module.scss';
import { a11yIconHiddenProps } from '../../lib/helpers';

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
  shape = 'rounded',
  ariaLabel,
  children
}) => {
  const classes = classNames(styles.icon, styles[size], styles[shape]);
  return /*#__PURE__*/React.createElement(Button, {
    size: size,
    type: type,
    className: classes,
    onClick: onClick,
    disabled: disabled,
    ariaLabel: ariaLabel
  }, /*#__PURE__*/React.isValidElement(children) ? /*#__PURE__*/React.cloneElement(children, a11yIconHiddenProps) : null);
};

export default IconButton;
//# sourceMappingURL=IconButton.js.map