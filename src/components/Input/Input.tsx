import classNames from 'classnames';
import React, { AllHTMLAttributes, FC } from 'react';
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
   * Add a class name. Optional.
   */
  className?: string;
} & AllHTMLAttributes<HTMLInputElement>;


/**
 * An input element.
 */
const Input: FC<InputPropsType> = ({
  type = 'text',
  size = 'normal',
  className,
  ...rest
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
      {...rest}
    />
  );
};

export default Input;
