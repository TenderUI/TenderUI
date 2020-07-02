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
  className
}) => {
  const classes = classNames(styles.button, styles[size], className);
  return /*#__PURE__*/React.createElement("button", {
    className: classes,
    type: type,
    onClick: onClick,
    disabled: disabled
  }, children);
};

export default Button;
//# sourceMappingURL=Button.js.map