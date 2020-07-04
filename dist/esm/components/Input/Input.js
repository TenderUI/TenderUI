import _pt from "prop-types";
import classNames from 'classnames';
import React from 'react';
import styles from './Input.module.scss';

/**
 * An input element.
 */
const Input = ({
  onChange,
  disabled = false,
  type = 'text',
  size = 'normal',
  className
}) => {
  const classes = classNames(styles.input, styles[size], className);
  return /*#__PURE__*/React.createElement("input", {
    className: classes,
    type: type,
    onChange: onChange,
    disabled: disabled
  });
};

Input.propTypes = {
  type: _pt.oneOf(['button', 'checkbox', 'color', 'date', 'datetime-local', 'email', 'file', 'hidden', 'image', 'month', 'number', 'password', 'radio', 'range', 'reset', 'search', 'submit', 'tel', 'text', 'time', 'url', 'week']),
  size: _pt.oneOf(['normal', 'small', 'large']),
  disabled: _pt.bool,
  onChange: _pt.func,
  className: _pt.string
};
export default Input;
//# sourceMappingURL=Input.js.map