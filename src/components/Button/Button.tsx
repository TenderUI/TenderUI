import classNames from 'classnames';
import React, { FC, MouseEventHandler, PropsWithChildren } from 'react';
import styles from './Button.module.scss';

type ButtonPropsType = {
  /**
   * Define button behavior. Default: button
   */
  type?: 'button' | 'submit' | 'reset';

  /**
   * Define button size. Default: normal
   */
  size?: 'normal' | 'small' | 'large';

  /**
   * Disable button. Default: false
   */
  disabled?: boolean;

  /**
   * Register click event handler.
   */
  onClick?: MouseEventHandler;

  /**
   * Add a class name. Default: undefined.
   */
  className?: string
}

type ButtonPropsTypeWithChildren = PropsWithChildren<ButtonPropsType>

/**
 * A simple button.
 */
const Button: FC<ButtonPropsTypeWithChildren> = ({
  onClick,
  disabled = false,
  type = 'button',
  size = 'normal',
  children,
  className
}) => {
  const classes = classNames(
    styles.button,
    styles[size],
    className
  );

  return (
    <button
      className={classes}
      type={type}
      onClick={onClick}
      disabled={disabled}
    >
      {children}
    </button>
  );
};

export default Button;
