import classNames from 'classnames';
import React from 'react';
import styles from './Button.module.scss';

/**
 * Simple Button encapsulating all design variations
 */
const Button = ({
  onClick,
  disabled = false,
  type = 'button',
  size = 'normal',
  children
}) => {
  const classes = classNames(styles.button, styles[size]);
  return /*#__PURE__*/React.createElement("button", {
    className: classes,
    type: type,
    onClick: onClick,
    disabled: disabled
  }, children);
};

export default Button;
//# sourceMappingURL=Button.js.map