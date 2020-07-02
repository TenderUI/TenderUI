import classNames from 'classnames';
import React from 'react';
import Button from '../Button/Button';
import styles from './IconButton.module.scss';

/**
 * A button with an icon.
 */
const IconButton = ({
  onClick,
  disabled = false,
  type = 'button',
  size = 'normal',
  shape = 'rounded',
  children
}) => {
  const classes = classNames(styles.icon, styles[size], styles[shape]);
  return /*#__PURE__*/React.createElement(Button, {
    size: size,
    type: type,
    className: classes,
    onClick: onClick,
    disabled: disabled
  }, children);
};

export default IconButton;
//# sourceMappingURL=IconButton.js.map