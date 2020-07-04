import classNames from 'classnames';
import React, { ChangeEventHandler, FC } from 'react';
import styles from './Input.module.scss';

type InputPropsType = {
  /**
   * Define button behavior. Default: text
   */
  type?: 'button' | 'checkbox' | 'color' | 'date' | 'datetime-local' | 'email' | 
          'file' | 'hidden' | 'image' | 'month' | 'number' | 'password' | 'radio' | 
          'range' | 'reset' | 'search' | 'submit' | 'tel' | 'text' | 'time' | 'url' |
          'week';

  /**
   * Define button size. Default: normal
   */
  size?: 'normal' | 'small' | 'large';

  /**
   * Disable button. Default: false
   */
  disabled?: boolean;

  /**
   * Register change event handler.
   */
  onChange?: ChangeEventHandler;

  /**
   * Add a class name. Optional.
   */
  className?: string;
}

/**
 * An input element.
 */
const Input: FC<InputPropsType> = ({
  onChange,
  disabled = false,
  type = 'text',
  size = 'normal',
  className
}) => {
  const classes = classNames(
    styles.input,
    styles[size],
    className
  );

  return (
    <input
      className={classes}
      type={type}
      onChange={onChange}
      disabled={disabled}
    />
  );
};

export default Input;
