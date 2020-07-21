import classNames from 'classnames';
import React, { ChangeEventHandler, FC, ReactElement } from 'react';
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
   * Define input size. Default: normal
   */
  size?: 'normal' | 'small' | 'large';

  /**
   * Define button size. Optional.
   */
  value?: string | number;

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

  /**
   * Add a placeholder for the input. Optional.
   */
  placeholder?: string;

  /**
   * Add a tab index. Default 0.
   */
  tabIndex?: number;

  /**
   * Add an icon to the left side of the input. Optional.
   */
  icon?: ReactElement;
}

/**
 * An input element.
 */
const Input: FC<InputPropsType> = ({
  onChange,
  disabled = false,
  type = 'text',
  value,
  size = 'normal',
  className,
  placeholder,
  tabIndex
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
      value={value}
      onChange={onChange}
      disabled={disabled}
      placeholder={placeholder}
      tabIndex={tabIndex}
    />
  );
};

export default Input;
