import classNames from 'classnames';
import React from 'react';
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
  }, children);
};

export default IconButton;
//# sourceMappingURL=IconButton.js.map